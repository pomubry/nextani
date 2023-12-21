/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query queryAnime($id: Int, $charPage: Int) {\n    Media(id: $id, type: ANIME) {\n      id\n      title {\n        romaji\n      }\n      characters(sort: ROLE, page: $charPage, perPage: 10) {\n        ...CharactersFragment\n      }\n      description\n      synonyms\n      ...CardHeadIdFragment\n      ...LeftInfoFragment\n      ...RightInfoFragment\n    }\n  }\n": types.QueryAnimeDocument,
    "\n  fragment CardHeadIdFragment on Media {\n    id\n    title {\n      romaji\n    }\n    bannerImage\n    coverImage {\n      extraLarge\n    }\n    description\n  }\n": types.CardHeadIdFragmentFragmentDoc,
    "\n  fragment LeftInfoFragment on Media {\n    id\n    externalLinks {\n      id\n      ...StreamLinksFragment\n    }\n    rankings {\n      id\n      ...RankingsFragment\n    }\n    tags {\n      id\n      ...TagsFragment\n    }\n    ...DataFragment\n  }\n": types.LeftInfoFragmentFragmentDoc,
    "\n  fragment RankingsFragment on MediaRank {\n    id\n    allTime\n    context\n    rank\n    season\n    type\n    year\n  }\n": types.RankingsFragmentFragmentDoc,
    "\n  fragment DataFragment on Media {\n    averageScore\n    duration\n    episodes\n    endDate {\n      year\n      month\n      day\n      ...DateFragment\n    }\n    favourites\n    format\n    genres\n    meanScore\n    popularity\n    season\n    seasonYear\n    source\n    status\n    startDate {\n      year\n      month\n      day\n      ...DateFragment\n    }\n    studios {\n      nodes {\n        id\n        name\n        isAnimationStudio\n      }\n    }\n    synonyms\n    title {\n      english\n      native\n      romaji\n    }\n  }\n": types.DataFragmentFragmentDoc,
    "\n  fragment TagsFragment on MediaTag {\n    name\n    rank\n  }\n": types.TagsFragmentFragmentDoc,
    "\n  fragment StreamLinksFragment on MediaExternalLink {\n    site\n    url\n  }\n": types.StreamLinksFragmentFragmentDoc,
    "\n  fragment DateFragment on FuzzyDate {\n    year\n    month\n    day\n  }\n": types.DateFragmentFragmentDoc,
    "\n  fragment RightInfoFragment on Media {\n    idMal\n    characters(sort: ROLE, page: $charPage, perPage: 10) {\n      edges {\n        id\n      }\n      pageInfo {\n        total\n        currentPage\n        hasNextPage\n      }\n      ...CharactersFragment\n    }\n    recommendations(sort: RATING_DESC) {\n      nodes {\n        id\n      }\n      ...RecommendationsFragment\n    }\n    relations {\n      edges {\n        id\n      }\n      ...RelationsFragment\n    }\n    staff {\n      edges {\n        id\n      }\n      ...StaffFragment\n    }\n    stats {\n      statusDistribution {\n        status\n      }\n      ...StatsDistributionFragment\n    }\n    streamingEpisodes {\n      url\n      title\n      ...StreamingEpisodesFragment\n    }\n    trailer {\n      id\n      site\n    }\n  }\n": types.RightInfoFragmentFragmentDoc,
    "\n  fragment RelationsFragment on MediaConnection {\n    edges {\n      id\n      relationType(version: 2)\n      node {\n        id\n        title {\n          romaji\n        }\n        format\n        status\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n": types.RelationsFragmentFragmentDoc,
    "\n  fragment CharactersFragment on CharacterConnection {\n    edges {\n      id\n      node {\n        id\n        image {\n          large\n        }\n        name {\n          full\n        }\n      }\n      role\n      voiceActors(language: JAPANESE) {\n        id\n        image {\n          large\n        }\n        name {\n          full\n        }\n      }\n    }\n  }\n": types.CharactersFragmentFragmentDoc,
    "\n  fragment StaffFragment on StaffConnection {\n    edges {\n      id\n      role\n      node {\n        id\n        name {\n          full\n        }\n        image {\n          large\n        }\n      }\n    }\n  }\n": types.StaffFragmentFragmentDoc,
    "\n  fragment StatsDistributionFragment on MediaStats {\n    statusDistribution {\n      status\n      amount\n    }\n  }\n": types.StatsDistributionFragmentFragmentDoc,
    "\n  fragment StreamingEpisodesFragment on MediaStreamingEpisode {\n    title\n    thumbnail\n    url\n  }\n": types.StreamingEpisodesFragmentFragmentDoc,
    "\n  fragment RecommendationsFragment on RecommendationConnection {\n    nodes {\n      mediaRecommendation {\n        id\n        title {\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n": types.RecommendationsFragmentFragmentDoc,
    "\n  query queryHomePage(\n    $page: Int\n    $seasonYear: Int\n    $season: MediaSeason\n    $search: String\n    $perPage: Int\n  ) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        seasonYear: $seasonYear\n        season: $season\n        search: $search\n        type: ANIME\n        sort: TRENDING_DESC\n        isAdult: false\n      ) {\n        id\n        title {\n          romaji\n        }\n        ...AnimeFragment\n      }\n    }\n  }\n": types.QueryHomePageDocument,
    "\n  fragment AnimeFragment on Media {\n    ...CardImageFragment\n    ...CardDescFragment\n    id\n    title {\n      romaji\n    }\n    coverImage {\n      extraLarge\n      color\n    }\n    description\n    episodes\n    format\n    genres\n    nextAiringEpisode {\n      id\n    }\n    season\n    seasonYear\n    studios(isMain: true) {\n      edges {\n        node {\n          name\n          isAnimationStudio\n        }\n      }\n    }\n    trending\n  }\n": types.AnimeFragmentFragmentDoc,
    "\n  fragment CardImageFragment on Media {\n    id\n    title {\n      romaji\n    }\n    coverImage {\n      extraLarge\n      color\n    }\n    studios(isMain: true) {\n      edges {\n        node {\n          id\n          name\n          isAnimationStudio\n        }\n      }\n    }\n  }\n": types.CardImageFragmentFragmentDoc,
    "\n  fragment CardDescFragment on Media {\n    id\n    description\n    episodes\n    format\n    genres\n    season\n    seasonYear\n    trending\n  }\n": types.CardDescFragmentFragmentDoc,
    "\n  query queryStudio($id: Int, $pg: Int) {\n    Studio(id: $id) {\n      id\n      name\n      siteUrl\n      media(sort: START_DATE_DESC, page: $pg) {\n        pageInfo {\n          total\n          currentPage\n          hasNextPage\n        }\n        nodes {\n          ...AnimeWorkFragment\n          id\n          coverImage {\n            large\n          }\n          title {\n            romaji\n          }\n          startDate {\n            year\n            month\n            day\n          }\n        }\n      }\n    }\n  }\n": types.QueryStudioDocument,
    "\n  fragment AnimeWorkFragment on Media {\n    id\n    coverImage {\n      large\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    title {\n      romaji\n    }\n    type\n  }\n": types.AnimeWorkFragmentFragmentDoc,
    "\n  query queryStaff(\n    $id: Int\n    $sort: [MediaSort]\n    $characterPage: Int\n    $staffPage: Int\n  ) {\n    Staff(id: $id) {\n      ...VAHeaderFragment\n      id\n      description\n      name {\n        full\n      }\n      characterMedia(page: $characterPage, sort: $sort) {\n        ...VACharactersFragment\n      }\n      staffMedia(page: $staffPage, sort: $sort) {\n        ...VAStaffRolesFragment\n      }\n    }\n  }\n": types.QueryStaffDocument,
    "\n  fragment VAHeaderFragment on Staff {\n    age\n    bloodType\n    dateOfBirth {\n      year\n      month\n      day\n    }\n    dateOfDeath {\n      year\n      month\n      day\n    }\n    description\n    gender\n    homeTown\n    image {\n      large\n    }\n    name {\n      full\n      native\n      alternative\n    }\n    yearsActive\n  }\n": types.VaHeaderFragmentFragmentDoc,
    "\n  fragment VACharactersFragment on MediaConnection {\n    pageInfo {\n      total\n      currentPage\n      hasNextPage\n    }\n    edges {\n      ...CharacterEdgeFragment\n      id\n      node {\n        startDate {\n          year\n        }\n      }\n    }\n  }\n": types.VaCharactersFragmentFragmentDoc,
    "\n  fragment VAStaffRolesFragment on MediaConnection {\n    pageInfo {\n      total\n      currentPage\n      hasNextPage\n    }\n    edges {\n      ...RoleEdgeFragment\n      id\n      node {\n        startDate {\n          year\n        }\n      }\n    }\n  }\n": types.VaStaffRolesFragmentFragmentDoc,
    "\n  fragment CharacterEdgeFragment on MediaEdge {\n    id\n    characterRole\n    characters {\n      image {\n        large\n      }\n      name {\n        full\n      }\n    }\n    node {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      type\n    }\n  }\n": types.CharacterEdgeFragmentFragmentDoc,
    "\n  fragment RoleEdgeFragment on MediaEdge {\n    node {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      type\n    }\n    staffRole\n  }\n": types.RoleEdgeFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryAnime($id: Int, $charPage: Int) {\n    Media(id: $id, type: ANIME) {\n      id\n      title {\n        romaji\n      }\n      characters(sort: ROLE, page: $charPage, perPage: 10) {\n        ...CharactersFragment\n      }\n      description\n      synonyms\n      ...CardHeadIdFragment\n      ...LeftInfoFragment\n      ...RightInfoFragment\n    }\n  }\n"): (typeof documents)["\n  query queryAnime($id: Int, $charPage: Int) {\n    Media(id: $id, type: ANIME) {\n      id\n      title {\n        romaji\n      }\n      characters(sort: ROLE, page: $charPage, perPage: 10) {\n        ...CharactersFragment\n      }\n      description\n      synonyms\n      ...CardHeadIdFragment\n      ...LeftInfoFragment\n      ...RightInfoFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardHeadIdFragment on Media {\n    id\n    title {\n      romaji\n    }\n    bannerImage\n    coverImage {\n      extraLarge\n    }\n    description\n  }\n"): (typeof documents)["\n  fragment CardHeadIdFragment on Media {\n    id\n    title {\n      romaji\n    }\n    bannerImage\n    coverImage {\n      extraLarge\n    }\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LeftInfoFragment on Media {\n    id\n    externalLinks {\n      id\n      ...StreamLinksFragment\n    }\n    rankings {\n      id\n      ...RankingsFragment\n    }\n    tags {\n      id\n      ...TagsFragment\n    }\n    ...DataFragment\n  }\n"): (typeof documents)["\n  fragment LeftInfoFragment on Media {\n    id\n    externalLinks {\n      id\n      ...StreamLinksFragment\n    }\n    rankings {\n      id\n      ...RankingsFragment\n    }\n    tags {\n      id\n      ...TagsFragment\n    }\n    ...DataFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RankingsFragment on MediaRank {\n    id\n    allTime\n    context\n    rank\n    season\n    type\n    year\n  }\n"): (typeof documents)["\n  fragment RankingsFragment on MediaRank {\n    id\n    allTime\n    context\n    rank\n    season\n    type\n    year\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DataFragment on Media {\n    averageScore\n    duration\n    episodes\n    endDate {\n      year\n      month\n      day\n      ...DateFragment\n    }\n    favourites\n    format\n    genres\n    meanScore\n    popularity\n    season\n    seasonYear\n    source\n    status\n    startDate {\n      year\n      month\n      day\n      ...DateFragment\n    }\n    studios {\n      nodes {\n        id\n        name\n        isAnimationStudio\n      }\n    }\n    synonyms\n    title {\n      english\n      native\n      romaji\n    }\n  }\n"): (typeof documents)["\n  fragment DataFragment on Media {\n    averageScore\n    duration\n    episodes\n    endDate {\n      year\n      month\n      day\n      ...DateFragment\n    }\n    favourites\n    format\n    genres\n    meanScore\n    popularity\n    season\n    seasonYear\n    source\n    status\n    startDate {\n      year\n      month\n      day\n      ...DateFragment\n    }\n    studios {\n      nodes {\n        id\n        name\n        isAnimationStudio\n      }\n    }\n    synonyms\n    title {\n      english\n      native\n      romaji\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment TagsFragment on MediaTag {\n    name\n    rank\n  }\n"): (typeof documents)["\n  fragment TagsFragment on MediaTag {\n    name\n    rank\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StreamLinksFragment on MediaExternalLink {\n    site\n    url\n  }\n"): (typeof documents)["\n  fragment StreamLinksFragment on MediaExternalLink {\n    site\n    url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment DateFragment on FuzzyDate {\n    year\n    month\n    day\n  }\n"): (typeof documents)["\n  fragment DateFragment on FuzzyDate {\n    year\n    month\n    day\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RightInfoFragment on Media {\n    idMal\n    characters(sort: ROLE, page: $charPage, perPage: 10) {\n      edges {\n        id\n      }\n      pageInfo {\n        total\n        currentPage\n        hasNextPage\n      }\n      ...CharactersFragment\n    }\n    recommendations(sort: RATING_DESC) {\n      nodes {\n        id\n      }\n      ...RecommendationsFragment\n    }\n    relations {\n      edges {\n        id\n      }\n      ...RelationsFragment\n    }\n    staff {\n      edges {\n        id\n      }\n      ...StaffFragment\n    }\n    stats {\n      statusDistribution {\n        status\n      }\n      ...StatsDistributionFragment\n    }\n    streamingEpisodes {\n      url\n      title\n      ...StreamingEpisodesFragment\n    }\n    trailer {\n      id\n      site\n    }\n  }\n"): (typeof documents)["\n  fragment RightInfoFragment on Media {\n    idMal\n    characters(sort: ROLE, page: $charPage, perPage: 10) {\n      edges {\n        id\n      }\n      pageInfo {\n        total\n        currentPage\n        hasNextPage\n      }\n      ...CharactersFragment\n    }\n    recommendations(sort: RATING_DESC) {\n      nodes {\n        id\n      }\n      ...RecommendationsFragment\n    }\n    relations {\n      edges {\n        id\n      }\n      ...RelationsFragment\n    }\n    staff {\n      edges {\n        id\n      }\n      ...StaffFragment\n    }\n    stats {\n      statusDistribution {\n        status\n      }\n      ...StatsDistributionFragment\n    }\n    streamingEpisodes {\n      url\n      title\n      ...StreamingEpisodesFragment\n    }\n    trailer {\n      id\n      site\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RelationsFragment on MediaConnection {\n    edges {\n      id\n      relationType(version: 2)\n      node {\n        id\n        title {\n          romaji\n        }\n        format\n        status\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RelationsFragment on MediaConnection {\n    edges {\n      id\n      relationType(version: 2)\n      node {\n        id\n        title {\n          romaji\n        }\n        format\n        status\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharactersFragment on CharacterConnection {\n    edges {\n      id\n      node {\n        id\n        image {\n          large\n        }\n        name {\n          full\n        }\n      }\n      role\n      voiceActors(language: JAPANESE) {\n        id\n        image {\n          large\n        }\n        name {\n          full\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CharactersFragment on CharacterConnection {\n    edges {\n      id\n      node {\n        id\n        image {\n          large\n        }\n        name {\n          full\n        }\n      }\n      role\n      voiceActors(language: JAPANESE) {\n        id\n        image {\n          large\n        }\n        name {\n          full\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StaffFragment on StaffConnection {\n    edges {\n      id\n      role\n      node {\n        id\n        name {\n          full\n        }\n        image {\n          large\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment StaffFragment on StaffConnection {\n    edges {\n      id\n      role\n      node {\n        id\n        name {\n          full\n        }\n        image {\n          large\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StatsDistributionFragment on MediaStats {\n    statusDistribution {\n      status\n      amount\n    }\n  }\n"): (typeof documents)["\n  fragment StatsDistributionFragment on MediaStats {\n    statusDistribution {\n      status\n      amount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment StreamingEpisodesFragment on MediaStreamingEpisode {\n    title\n    thumbnail\n    url\n  }\n"): (typeof documents)["\n  fragment StreamingEpisodesFragment on MediaStreamingEpisode {\n    title\n    thumbnail\n    url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RecommendationsFragment on RecommendationConnection {\n    nodes {\n      mediaRecommendation {\n        id\n        title {\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment RecommendationsFragment on RecommendationConnection {\n    nodes {\n      mediaRecommendation {\n        id\n        title {\n          romaji\n        }\n        coverImage {\n          extraLarge\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryHomePage(\n    $page: Int\n    $seasonYear: Int\n    $season: MediaSeason\n    $search: String\n    $perPage: Int\n  ) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        seasonYear: $seasonYear\n        season: $season\n        search: $search\n        type: ANIME\n        sort: TRENDING_DESC\n        isAdult: false\n      ) {\n        id\n        title {\n          romaji\n        }\n        ...AnimeFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query queryHomePage(\n    $page: Int\n    $seasonYear: Int\n    $season: MediaSeason\n    $search: String\n    $perPage: Int\n  ) {\n    Page(page: $page, perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(\n        seasonYear: $seasonYear\n        season: $season\n        search: $search\n        type: ANIME\n        sort: TRENDING_DESC\n        isAdult: false\n      ) {\n        id\n        title {\n          romaji\n        }\n        ...AnimeFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AnimeFragment on Media {\n    ...CardImageFragment\n    ...CardDescFragment\n    id\n    title {\n      romaji\n    }\n    coverImage {\n      extraLarge\n      color\n    }\n    description\n    episodes\n    format\n    genres\n    nextAiringEpisode {\n      id\n    }\n    season\n    seasonYear\n    studios(isMain: true) {\n      edges {\n        node {\n          name\n          isAnimationStudio\n        }\n      }\n    }\n    trending\n  }\n"): (typeof documents)["\n  fragment AnimeFragment on Media {\n    ...CardImageFragment\n    ...CardDescFragment\n    id\n    title {\n      romaji\n    }\n    coverImage {\n      extraLarge\n      color\n    }\n    description\n    episodes\n    format\n    genres\n    nextAiringEpisode {\n      id\n    }\n    season\n    seasonYear\n    studios(isMain: true) {\n      edges {\n        node {\n          name\n          isAnimationStudio\n        }\n      }\n    }\n    trending\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardImageFragment on Media {\n    id\n    title {\n      romaji\n    }\n    coverImage {\n      extraLarge\n      color\n    }\n    studios(isMain: true) {\n      edges {\n        node {\n          id\n          name\n          isAnimationStudio\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CardImageFragment on Media {\n    id\n    title {\n      romaji\n    }\n    coverImage {\n      extraLarge\n      color\n    }\n    studios(isMain: true) {\n      edges {\n        node {\n          id\n          name\n          isAnimationStudio\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardDescFragment on Media {\n    id\n    description\n    episodes\n    format\n    genres\n    season\n    seasonYear\n    trending\n  }\n"): (typeof documents)["\n  fragment CardDescFragment on Media {\n    id\n    description\n    episodes\n    format\n    genres\n    season\n    seasonYear\n    trending\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryStudio($id: Int, $pg: Int) {\n    Studio(id: $id) {\n      id\n      name\n      siteUrl\n      media(sort: START_DATE_DESC, page: $pg) {\n        pageInfo {\n          total\n          currentPage\n          hasNextPage\n        }\n        nodes {\n          ...AnimeWorkFragment\n          id\n          coverImage {\n            large\n          }\n          title {\n            romaji\n          }\n          startDate {\n            year\n            month\n            day\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query queryStudio($id: Int, $pg: Int) {\n    Studio(id: $id) {\n      id\n      name\n      siteUrl\n      media(sort: START_DATE_DESC, page: $pg) {\n        pageInfo {\n          total\n          currentPage\n          hasNextPage\n        }\n        nodes {\n          ...AnimeWorkFragment\n          id\n          coverImage {\n            large\n          }\n          title {\n            romaji\n          }\n          startDate {\n            year\n            month\n            day\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AnimeWorkFragment on Media {\n    id\n    coverImage {\n      large\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    title {\n      romaji\n    }\n    type\n  }\n"): (typeof documents)["\n  fragment AnimeWorkFragment on Media {\n    id\n    coverImage {\n      large\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    title {\n      romaji\n    }\n    type\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query queryStaff(\n    $id: Int\n    $sort: [MediaSort]\n    $characterPage: Int\n    $staffPage: Int\n  ) {\n    Staff(id: $id) {\n      ...VAHeaderFragment\n      id\n      description\n      name {\n        full\n      }\n      characterMedia(page: $characterPage, sort: $sort) {\n        ...VACharactersFragment\n      }\n      staffMedia(page: $staffPage, sort: $sort) {\n        ...VAStaffRolesFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query queryStaff(\n    $id: Int\n    $sort: [MediaSort]\n    $characterPage: Int\n    $staffPage: Int\n  ) {\n    Staff(id: $id) {\n      ...VAHeaderFragment\n      id\n      description\n      name {\n        full\n      }\n      characterMedia(page: $characterPage, sort: $sort) {\n        ...VACharactersFragment\n      }\n      staffMedia(page: $staffPage, sort: $sort) {\n        ...VAStaffRolesFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment VAHeaderFragment on Staff {\n    age\n    bloodType\n    dateOfBirth {\n      year\n      month\n      day\n    }\n    dateOfDeath {\n      year\n      month\n      day\n    }\n    description\n    gender\n    homeTown\n    image {\n      large\n    }\n    name {\n      full\n      native\n      alternative\n    }\n    yearsActive\n  }\n"): (typeof documents)["\n  fragment VAHeaderFragment on Staff {\n    age\n    bloodType\n    dateOfBirth {\n      year\n      month\n      day\n    }\n    dateOfDeath {\n      year\n      month\n      day\n    }\n    description\n    gender\n    homeTown\n    image {\n      large\n    }\n    name {\n      full\n      native\n      alternative\n    }\n    yearsActive\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment VACharactersFragment on MediaConnection {\n    pageInfo {\n      total\n      currentPage\n      hasNextPage\n    }\n    edges {\n      ...CharacterEdgeFragment\n      id\n      node {\n        startDate {\n          year\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment VACharactersFragment on MediaConnection {\n    pageInfo {\n      total\n      currentPage\n      hasNextPage\n    }\n    edges {\n      ...CharacterEdgeFragment\n      id\n      node {\n        startDate {\n          year\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment VAStaffRolesFragment on MediaConnection {\n    pageInfo {\n      total\n      currentPage\n      hasNextPage\n    }\n    edges {\n      ...RoleEdgeFragment\n      id\n      node {\n        startDate {\n          year\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment VAStaffRolesFragment on MediaConnection {\n    pageInfo {\n      total\n      currentPage\n      hasNextPage\n    }\n    edges {\n      ...RoleEdgeFragment\n      id\n      node {\n        startDate {\n          year\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterEdgeFragment on MediaEdge {\n    id\n    characterRole\n    characters {\n      image {\n        large\n      }\n      name {\n        full\n      }\n    }\n    node {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      type\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterEdgeFragment on MediaEdge {\n    id\n    characterRole\n    characters {\n      image {\n        large\n      }\n      name {\n        full\n      }\n    }\n    node {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      type\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment RoleEdgeFragment on MediaEdge {\n    node {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      type\n    }\n    staffRole\n  }\n"): (typeof documents)["\n  fragment RoleEdgeFragment on MediaEdge {\n    node {\n      id\n      coverImage {\n        large\n      }\n      title {\n        romaji\n      }\n      type\n    }\n    staffRole\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;