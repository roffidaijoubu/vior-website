import { format } from 'date-fns';

export interface Affiliate {
  name: string;
  slug: string;
  description: string;
  image: string;
  socialLinks: { platform: string; url: string }[];
  pastWorks?: { title: string; youtubeUrl: string }[];
  featuredVideo?: { title: string; youtubeId: string }; // Changed to a single object
}

export const affiliates: Affiliate[] = [
  {
    name: "AHO_Mika",
    slug: "ahomika",
    description: "Ahomika is a talented NPC Idol VSinger who has captivated the VIOR Tower community with her exceptional vocal prowess. Primarily focusing on singing and voice acting, she's also known to enjoy gaming. Ahomika's passion for music shines through her numerous cover songs, mostly Japanese and anime tracks, performed with such authenticity that listeners might mistake her for a native speaker. With an original song already under her belt and dreams of making it big, Ahomika continues to enchant her growing fanbase with her soulful voice and dedication to her craft.",
    image: "https://yt3.googleusercontent.com/UDPq05vYqFuX5A_I0fPWfF0laETeiHDsAZ2Pk7YjpYQfgxHcA-c1YOKRE1RcfMkHf3pXj7vOWg=s0",
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
    featuredVideo: { title: "Debut Trailer", youtubeId: "sOrVOap8KbU" },
  },
  {
    name: "Futabi Eita",
    slug: "futabi-eita",
    description: "Futabi Eita is a charismatic Kitsune VTuber known for her incredible entertainment skills and engaging personality. As an avid Valorant player, she brings excitement and energy to her streams. Eita's natural talent for interacting with her live audience chat creates a vibrant and welcoming community in the VIOR Tower.",
    image: "https://yt3.googleusercontent.com/Z26ObrKM-aUuzFIocQsGsVjgR98UanUACsKFEOiqwWZ3UDXpq81Oi94sFF9MPjRoFIfvGb-JGls=s0",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/eita_wee" },
      { platform: "YouTube", url: "https://www.youtube.com/@Eitaweee" },
      { platform: "Tiktok", url: "https://www.tiktok.com/@eitaweee" },
    ],
    featuredVideo: { title: "Debut Trailer", youtubeId: "1jPIjmqCR4E" },
  },
  {
    name: "Xena Celestia",
    slug: "xena-celestia",
    description: "Known as the Adonis Healer, Xena Celestia is an energetic virtual entertainer who brings joy and excitement to the VIOR Tower community. With a passion for gaming, she loves to play and vibe with friends, especially during thrilling horror game sessions. Her engaging personality and soothing presence make her a beloved figure among fans.",
    image: "https://yt3.googleusercontent.com/47TagDVO0a2WYRpnSxA5-zNpikjxzxfi8BrEaDajbuHzJ4KqKTp5S-OnATBhnVe7Tl4FQ4wiJlM=s0",
    socialLinks: [
      { platform: "Twitter", url: "https://twitter.com/xena_celestia" },
      { platform: "YouTube", url: "https://www.youtube.com/@xena_celestia" },
      { platform: "Tiktok", url: "https://www.tiktok.com/@xena_celestia" },
    ],
    featuredVideo: { title: "Lore", youtubeId: "Nrw8x3bHNbs" },
  },
];

export function getAffiliateBySlug(slug: string): Affiliate | undefined {
  return affiliates.find(affiliate => affiliate.slug === slug);
}