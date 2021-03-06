// Generated by https://quicktype.io
// For a multiple anime response object

import { StudiosNode } from "./IQueryId";

export interface IFetchQuery {
  data: Data;
}

export interface Data {
  Page: Page;
}

export interface Page {
  pageInfo: PageInfo;
  media: Media[];
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
  description: string | null;
  episodes: number | null;
  format: string;
  genres: string[];
  nextAiringEpisode: NextAiringEpisode | null;
  season: Season | null;
  seasonYear: number | null;
  studios: Studios;
  trending: number;
}

export interface CoverImage {
  extraLarge: string;
  color: string | null;
}

export interface NextAiringEpisode {
  id: number;
}

export type Season = "FALL" | "SPRING" | "SUMMER" | "WINTER";

export interface Studios {
  edges: Edge[];
}

export interface Edge {
  node: StudiosNode;
}

export interface Title {
  romaji: string;
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}
