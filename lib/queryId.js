const queryId = (id) => {
  const query = `query ($id: Int) {
      Media (id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
    		duration
        format
        episodes
    		status
        season
        seasonYear
        genres
        meanScore
        averageScore
        popularity
        favourites
        trending
        source
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
    		startDate {
    		  year
    		  month
    		  day
    		}
    		endDate {
    		  year
    		  month
    		  day
    		}
        characters(sort:FAVOURITES_DESC) {
          edges {
            node {
              image {
                large
              }
              name {
                full
              }
            }
            role
            voiceActors(language:JAPANESE) {
              image {
                large
              }
              name {
                full
              }
            }
          }
        }
        externalLinks {
          site
          url
        }
        nextAiringEpisode {
          id
        }
        rankings {
          rank
          type
          year
          season
          allTime
          context
        }
        relations {
          edges{
            relationType(version:2)
          }
          nodes{
            title {
              romaji
            }
            format
            status
            coverImage {
              extraLarge
            }
          }
        }
        studios {
          nodes {
            name
            isAnimationStudio
          }
        }
    		staff {
          edges{
            role
            node {
              name {
              full
            }
            image {
              large
            }
            }
          }
    		}
        synonyms
        tags {
          rank
          name
        }
      }
    }`;

  const variables = { id };
  return { query, variables };
};

export default queryId;