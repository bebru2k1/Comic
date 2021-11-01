export interface IAnime {
  anilist_id: number;
  mal_id: number;
  format: number;
  status: number;
  titles: {
    en: string;
    jp?: string;
    it?: string;
  };
  descriptions: {
    en: string;
  };
  banner_image?: string;
  start_date: string;
  end_date: string;
  season_period: number;
  season_year: number;
  episodes_count: number;
  episode_duration: number;
  trailer_url: string;
  cover_image: string;
  cover_color: string;
  genres: string[];
  score: number;
  id: number;
}
export interface IAnimeResponse {
  status_code: number;
  message: string;
  data: IAnime[];
}
export interface IAnimeResponseSingle {
  status_code: number;
  message: string;
  data: IAnime;
}

export interface IAnimeResponseList {
  status_code: number;
  message: string;
  data: {
    current_page: number;
    count: number;
    documents: IAnime[];
  };
}
