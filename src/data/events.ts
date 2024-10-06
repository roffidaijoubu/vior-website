import { format } from 'date-fns';

export interface Event {
  id: string;
  name: string;
  image: string;
  url: string;
  datetime: Date;
  buttonLabel?: string;
  secondaryUrl?: {
    label: string;
    url: string;
  };
  affiliateSlug?: string; // Optional reference to an affiliate
}

export const events: Event[] = [
  {
    id: "ahomika-debut",
    name: "【 DEBUT STREAM 2.0 】#MikaLegs",
    image: "https://cdn.discordapp.com/attachments/1291344523175399504/1291861293543850005/Affiliated_talent_20241005_033518_0000.png?ex=67039d56&is=67024bd6&hm=edc6b08e77da7427639a0868653e31eb8865d32573a30ca5be44d6beef903c7b&",
    url: "https://www.youtube.com/live/K9qx-uEBPPc",
    datetime: new Date("2024-10-12T13:00:00Z"),
    buttonLabel: "Watch Debut Stream",
    secondaryUrl: {
      label: "Fill out the form",
      url: "https://docs.google.com/forms/d/15qMjv5y9t-F7nxZNQt8sIDkUWNWfoMJ2Sob4PWsKYas/viewform"
    },
    affiliateSlug: "ahomika"
  },
  
];

export function getEventsByAffiliateSlug(slug: string): Event[] {
  return events.filter(event => event.affiliateSlug === slug);
}

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return events
    .filter(event => event.datetime > now)
    .sort((a, b) => a.datetime.getTime() - b.datetime.getTime());
}