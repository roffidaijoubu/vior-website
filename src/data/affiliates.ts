import { format } from 'date-fns';

export interface Affiliate {
  name: string;
  slug: string;
  description: string;
  image: string;
  socialLinks: { platform: string; url: string }[];
}

export const affiliates: Affiliate[] = [
  {
    name: "AHO_Mika",
    slug: "ahomika",
    description: "Ahomika is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "https://media.discordapp.net/attachments/1291344523175399504/1291861293543850005/Affiliated_talent_20241005_033518_0000.png?ex=67039d56&is=67024bd6&hm=edc6b08e77da7427639a0868653e31eb8865d32573a30ca5be44d6beef903c7b&=&format=webp&quality=lossless",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/ahomika" },
      { platform: "YouTube", url: "https://youtube.com/ahomika" },
      { platform: "Instagram", url: "https://instagram.com/ahomika" },
    ],
  },
  {
    name: "Futabi Eita",
    slug: "futabi-eita",
    description: "Futabi Eita is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "https://media.discordapp.net/attachments/1291344523175399504/1291861293543850005/Affiliated_talent_20241005_033518_0000.png?ex=67039d56&is=67024bd6&hm=edc6b08e77da7427639a0868653e31eb8865d32573a30ca5be44d6beef903c7b&=&format=webp&quality=lossless",
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
    image: "https://media.discordapp.net/attachments/1291344523175399504/1291861293543850005/Affiliated_talent_20241005_033518_0000.png?ex=67039d56&is=67024bd6&hm=edc6b08e77da7427639a0868653e31eb8865d32573a30ca5be44d6beef903c7b&=&format=webp&quality=lossless",
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