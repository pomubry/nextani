const query = (pageQuery, seasonQuery, seasonYearQuery) => {
  let query = `query (
    $page: Int,
    $seasonYear: Int,
    $season: MediaSeason,
  ) {
    Page (page: $page) {
      
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      
      media (
        seasonYear:$seasonYear,
        season:$season,
        type:ANIME
        sort:TRENDING_DESC
      ) {
        id
        title {
          romaji
        }
        description
        episodes
        nextAiringEpisode {
          id
        }
        format
        studios(isMain:true) {
          edges {
            node{
              name
            }
          }
        }
        trending
        season
        seasonYear
        genres
        coverImage {
          extraLarge
        }
      }
    }
  }`;

  let data = new Date();

  if (!pageQuery) {
    pageQuery = 1;
  }

  if (!seasonYearQuery) {
    seasonYearQuery = data.getFullYear();
  }

  if (!seasonQuery) {
    let monthNum = data.getMonth();

    switch (monthNum) {
      case 0:
      case 1:
      case 2:
        seasonQuery = "WINTER";
        break;
      case 3:
      case 4:
      case 5:
        seasonQuery = "SPRING";
        break;
      case 6:
      case 7:
      case 8:
        seasonQuery = "SUMMER";
        break;
      default:
        seasonQuery = "FALL";
        break;
    }
  }

  let possibleYears = [];
  for (let i = seasonYearQuery + 1; i >= 1940; i--) {
    possibleYears.push(`${i}`);
  }

  let possibleValues = {
    seasonYear: possibleYears,
    season: ["WINTER", "SPRING", "SUMMER", "FALL"],
  };

  let variables = {
    seasonYear: seasonYearQuery,
    season: seasonQuery,
    page: pageQuery,
  };

  return {
    query,
    variables,
    possibleValues,
  };
};

export default query;