import { format } from 'date-fns';

export interface Affiliate {
  name: string;
  slug: string;
  description: string;
  image: string;
  socialLinks: { platform: string; url: string }[];
  pastWorks?: { title: string; youtubeUrl: string }[]; // Add this line
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
    pastWorks: [
      { title: "Deception 【ORIGINAL SONG】", youtubeUrl: "https://www.youtube.com/watch?v=WDDMUXa5z4c" },
      { title: "Loveit?【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=rAHCTLF1f_Y" },
      { title: "ハートの後味【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=9Pog0yjW4uk" },
      { title: "ヴァンパイア (The Vampire) - DECO*27 【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=T7lVwCCEmIA" },
      { title: "TOP(Stray Kids) - TV SIZE【ft. dj-Jo Remix】", youtubeUrl: "https://www.youtube.com/watch?v=ZIPt-jDu47Y" },
      { title: "Veil -『Fire Force ED』 Keina Suda【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=sfr_jAIyvlY" },
      { title: "Sarishinohara | サリシノハラ【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=z6DGXvn5B1I" },
      { title: "蜜月アン・ドゥ・トロワ【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=TrbUdjDsvtI" },
      { title: "Tear Drop / Milgram 【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=cD2dHbsMAos" },
      { title: "Nectar【COVER feat. Hanafabuki】", youtubeUrl: "https://www.youtube.com/watch?v=TpH6j8P1vDc" },
      { title: "恋の魔法-SHORT【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=2irgCXdS82c" },
      { title: "MIRA - Kanaria 【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=8_JTPACy5Gg" },
      { title: "花になって - 緑黄色社会【COVER】", youtubeUrl: "https://www.youtube.com/watch?v=twT0WECoRpQ" },
      { title: "If I Can Stop One Heart From Breaking (Honkai: Star Rail 2.0) ー Cover", youtubeUrl: "https://www.youtube.com/watch?v=J-870Wwx64M" },
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