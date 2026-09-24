'use client';
import { useEffect } from 'react';
import site from '@/data/site.json';

export default function AdSlot({ slot }: { slot: string }) {
  const client = site.adsensePublisherId;
  useEffect(() => {
    if (!client || !slot) return;
    try {
      ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle ||= []).push({});
    } catch {
      /* abaikan bila script iklan diblokir */
    }
  }, [client, slot]);
  if (!client || !slot) return null;
  return (
    <ins
      className="adsbygoogle block w-full text-center"
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
