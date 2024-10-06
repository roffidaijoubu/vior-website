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
    image: "https://yt3.googleusercontent.com/UDPq05vYqFuX5A_I0fPWfF0laETeiHDsAZ2Pk7YjpYQfgxHcA-c1YOKRE1RcfMkHf3pXj7vOWg=s160-c-k-c0x00ffffff-no-rj",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/ahomika_ch" },
      { platform: "YouTube", url: "https://www.youtube.com/@ahomika_ch" },
      { platform: "Tiktok", url: "https://www.tiktok.com/@ahomika_ch" },
    ],
  },
  {
    name: "Futabi Eita",
    slug: "futabi-eita",
    description: "Futabi Eita is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "https://yt3.googleusercontent.com/Z26ObrKM-aUuzFIocQsGsVjgR98UanUACsKFEOiqwWZ3UDXpq81Oi94sFF9MPjRoFIfvGb-JGls=s160-c-k-c0x00ffffff-no-rj",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/eita_wee" },
      { platform: "YouTube", url: "https://www.youtube.com/@Eitaweee" },
      { platform: "Tiktok", url: "https://www.tiktok.com/@eitaweee" },
    ],
  },
  {
    name: "Xena Celestia",
    slug: "xena-celestia",
    description: "Xena Celestia is a talented virtual singer known for her soulful voice and captivating performances. With a unique blend of pop and R&B influences, she has quickly become a fan favorite in the VIOR Tower community.",
    image: "https://yt3.googleusercontent.com/47TagDVO0a2WYRpnSxA5-zNpikjxzxfi8BrEaDajbuHzJ4KqKTp5S-OnATBhnVe7Tl4FQ4wiJlM=s160-c-k-c0x00ffffff-no-rj",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/xena_celestia" },
      { platform: "YouTube", url: "https://www.youtube.com/@xena_celestia" },
      { platform: "Tiktok", url: "https://www.tiktok.com/@xena_celestia" },
    ],
  },
];

export function getAffiliateBySlug(slug: string): Affiliate | undefined {
  return affiliates.find(affiliate => affiliate.slug === slug);
}