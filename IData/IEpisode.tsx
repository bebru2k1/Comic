export interface IEpisode {
  anime_id: number;
  number: number;
  title: string;
  video: string;
  source: string;
  locale: string;
  id: number;
}
export interface IEpisodeList {
  current_page: number;
  count: number;
  documents: IEpisode[];
}

export interface IEpisodeResponse {
  status_code: number;
  message: string;
  data: IEpisodeList;
}
