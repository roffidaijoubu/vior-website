import { format } from 'date-fns';

export interface Affiliate {
  name: string;
  slug: string;
  description: string;
  image: string;
  socialLinks: { platform: string; url: string }[];
  event?: {
    name: string;
    image: string;
    url: string;
    datetime: Date;
    buttonLabel?: string; // New optional property
    secondaryUrl?: {      // New optional property
      label: string;
      url: string;
    };
  };
}

export const affiliates: Affiliate[] = [
  {
    name: "AHO_Mika",
    slug: "ahomika",
    description: "Ahomika is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "/images/affiliates/ahomika.jpg",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/ahomika" },
      { platform: "YouTube", url: "https://youtube.com/ahomika" },
      { platform: "Instagram", url: "https://instagram.com/ahomika" },
    ],
    event: {
      name: "【 DEBUT STREAM 2.0 】Your NPC Idol - AHO_Mika【 VIOR 】",
      image: "https://cdn.discordapp.com/attachments/1291344523175399504/1291861293543850005/Affiliated_talent_20241005_033518_0000.png?ex=67039d56&is=67024bd6&hm=edc6b08e77da7427639a0868653e31eb8865d32573a30ca5be44d6beef903c7b&",
      url: "https://www.youtube.com/live/K9qx-uEBPPc",
      datetime: new Date("2024-10-12T13:00:00Z"),
      buttonLabel: "Watch Debut Stream", // Example of custom label
      secondaryUrl: {
        label: "Fill out the form",
        url: "https://docs.google.com/forms/d/15qMjv5y9t-F7nxZNQt8sIDkUWNWfoMJ2Sob4PWsKYas/viewform"
      }
    },
  },
  {
    name: "Futabi Eita",
    slug: "futabi-eita",
    description: "Futabi Eita is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "/images/affiliates/futabi-eita.jpg",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/futabi_eita" },
      { platform: "YouTube", url: "https://youtube.com/futabi_eita" },
      { platform: "Instagram", url: "https://instagram.com/futabi_eita" },
    ],
  },
  {
    name: "Xena Celestia",
    slug: "xena-celestia",
    description: "Xena Celestia is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "/images/affiliates/xena-celestia.jpg",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/xena_celestia" },
      { platform: "YouTube", url: "https://youtube.com/xena_celestia" },
      { platform: "Instagram", url: "https://instagram.com/xena_celestia" },
    ],
  },
];

export function getAffiliateBySlug(slug: string): Affiliate | undefined {
  return affiliates.find(affiliate => affiliate.slug === slug);
}