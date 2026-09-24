const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const root = path.join(__dirname, '..');
const all = JSON.parse(fs.readFileSync(path.join(root, 'data', 'prompts.json'), 'utf8'));
const pro = all.filter((p) => p.isPro);
const order = ['Jualan', 'Konten', 'Skripsi', 'Ngantor'];

const outDir = path.join(root, 'paket');
fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, 'promptin-pro-50.pdf');

const doc = new PDFDocument({ size: 'A4', margins: { top: 56, bottom: 56, left: 56, right: 56 } });
doc.pipe(fs.createWriteStream(out));

function footer() {
  doc.fontSize(8).fillColor('#888888')
    .text(`Promptin Pro - halaman ${doc.bufferedPageRange().count}`, 56, 790, { align: 'center' });
}

doc.fontSize(26).fillColor('#111111').text('Promptin Pro', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(13).fillColor('#444444').text('50 prompt siap copy: Jualan, Konten, Skripsi, Ngantor', { align: 'center' });
doc.moveDown(1);
doc.fontSize(10).fillColor('#444444').text(
  'Cara pakai: salin isi prompt, tempel ke AI favorit kamu, ganti teks [KURUNG] dengan datamu. 1 prompt dipakai berkali-kali.',
  { align: 'center' }
);
doc.moveDown(2);
doc.fontSize(10).fillColor('#B45309').text('Lisensi pribadi. Boleh dipakai untuk kerja sendiri, dilarang disebar ulang.', { align: 'center' });

let n = 0;
for (const cat of order) {
  for (const p of pro.filter((x) => x.category === cat)) {
    n += 1;
    doc.addPage();
    doc.fontSize(11).fillColor('#B45309').text(`${cat} - ${n} dari ${pro.length}`);
    doc.moveDown(0.4);
    doc.fontSize(17).fillColor('#111111').text(p.title);
    doc.moveDown(0.4);
    doc.fontSize(10).fillColor('#555555').text(p.description);
    doc.moveDown(0.8);
    doc.fontSize(11).fillColor('#111111').text(p.body, { lineGap: 3 });
    doc.moveDown(1);
    doc.fontSize(9).fillColor('#888888').text(`Tag: ${p.tags.join(', ')}`);
    footer();
  }
}

doc.end();
console.log(`PDF ditulis: ${out} (${n} prompt)`);
