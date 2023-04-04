import request from "graphql-request";
import { z } from "zod";
import { graphql } from "../gql";

const queryStudio = graphql(`
  query queryStudio($id: Int, $pg: Int) {
    Studio(id: $id) {
      id
      name
      siteUrl
      media(sort: START_DATE_DESC, page: $pg) {
        pageInfo {
          total
          currentPage
          hasNextPage
        }
        nodes {
          ...AnimeWorkFragment
          id
          coverImage {
            large
          }
          title {
            romaji
          }
          startDate {
            year
            month
            day
          }
        }
      }
    }
  }
`);

export const AnimeWorkFragment = graphql(`
  fragment AnimeWorkFragment on Media {
    id
    coverImage {
      large
    }
    startDate {
      year
      month
      day
    }
    title {
      romaji
    }
    type
  }
`);

const numberSchema = z.coerce.number().positive();

export const studioQuerySchema = z.object({
  id: numberSchema,
  pg: numberSchema.catch((e) => {
    if (Array.isArray(e.input)) {
      const res = (e.input as string[]).find(
        (input) => numberSchema.safeParse(input).success
      );
      return res ? +res : 1;
    } else {
      return 1;
    }
  }),
});

type StudioQuerySchemaType = z.infer<typeof studioQuerySchema>;

export const cleanStudioQuery = (query: StudioQuerySchemaType) => ({
  ...(query.pg > 1 && { pg: query.pg }),
});

export const fetchStudio = async (query: StudioQuerySchemaType) => {
  const data = await request("https://graphql.anilist.co", queryStudio, query);
  return data.Studio;
};
