export interface News {}

export interface Infos {
  featured: boolean;
  events: any[];
  id: number;
  image_url:string;
  launches: Launch[];
  news_site: string;
  published_at: string;
  summary: string;
  title: string;
  updated_at: string;
  url: "string";
}

export interface Launch {
  launch_id: string;
  provider: string;
}
