import { format } from 'date-fns';

export interface Event {
  id: string;
  name: string;
  image: string;
  url: string;
  datetime: Date;
  buttonLabel?: string;
  startedButtonLabel?: string;
  secondaryUrl?: {
    label: string;
    url: string;
  };
  affiliateSlug?: string; // Optional reference to an affiliate
}

export const events: Event[] = [
  {
    id: "ahomika-debut",
    name: "DEBUT STREAM 2.0 #MikaLegs",
    image: "https://img.youtube.com/vi/K9qx-uEBPPc/maxresdefault.jpg",
    url: "https://www.youtube.com/live/K9qx-uEBPPc",
    datetime: new Date("2024-10-12T13:00:00Z"),
    buttonLabel: "Go to Waiting Room",
    startedButtonLabel: "Watch Now!",
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