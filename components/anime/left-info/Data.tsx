import { FragmentType, useFragment } from "@/lib/gql";
import type { Studio } from "@/lib/gql/graphql";
import { DataFragment } from "@/lib/query/queryAnime";

interface PropType {
  anime: FragmentType<typeof DataFragment>;
}

type StudioType = Pick<Studio, "id" | "name" | "isAnimationStudio">;

const CustomBox = ({ children }: { children: React.ReactNode }) => (
  <li className="my-2">{children}</li>
);

const CustomTypo = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold text-blue-500">{children}</h3>
);

const Data = (props: PropType) => {
  const anime = useFragment(DataFragment, props.anime);

  let studios: StudioType[] = [];
  let producers: StudioType[] = [];
  anime.studios?.nodes?.forEach((studio) => {
    if (!studio) return;
    studio.isAnimationStudio ? studios.push(studio) : producers.push(studio);
  });

  return (
    <ul className="flex min-h-full flex-col justify-around rounded-md bg-slate-100 p-3 shadow-xl dark:bg-slate-900 dark:text-slate-200">
      {!!anime.format && (
        <CustomBox>
          <CustomTypo>Format</CustomTypo>
          <p>{anime.format}</p>
        </CustomBox>
      )}

      {!!anime.episodes && (
        <CustomBox>
          <CustomTypo>Episodes</CustomTypo>
          <p>{anime.episodes}</p>
        </CustomBox>
      )}

      {!!anime.duration && (
        <CustomBox>
          <CustomTypo>Episode Duration</CustomTypo>
          <p>{anime.duration} minutes</p>
        </CustomBox>
      )}

      {!!anime.status && (
        <CustomBox>
          <CustomTypo>Status</CustomTypo>
          <p>{anime.status}</p>
        </CustomBox>
      )}

      {/* Check first if every property has a value/truthy */}
      {anime.startDate &&
        Object.values(anime.startDate).every(
          (value) => typeof value === "number"
        ) && (
          <CustomBox>
            <CustomTypo>Start Date</CustomTypo>
            <p>
              {new Date(
                // values shouldn't be null anymore
                anime.startDate.year!,
                anime.startDate.month!,
                anime.startDate.day!
              ).toDateString()}
            </p>
          </CustomBox>
        )}

      {/* Check first if every property has a value/truthy */}
      {anime.endDate &&
        Object.values(anime.endDate).every(
          (value) => typeof value === "number"
        ) && (
          <CustomBox>
            <CustomTypo>End Date</CustomTypo>
            <p>
              {new Date(
                // values shouldn't be null anymore
                anime.endDate.year!,
                anime.endDate.month!,
                anime.endDate.day!
              ).toDateString()}
            </p>
          </CustomBox>
        )}

      {(!!anime.season || !!anime.seasonYear) && (
        <CustomBox>
          <CustomTypo>Season</CustomTypo>
          <p>
            {anime.season} {anime.seasonYear}
          </p>
        </CustomBox>
      )}

      {!!anime.averageScore && (
        <CustomBox>
          <CustomTypo>Average Score</CustomTypo>
          <p>{anime.averageScore}%</p>
        </CustomBox>
      )}

      {!!anime.meanScore && (
        <CustomBox>
          <CustomTypo>Mean Score</CustomTypo>
          <p>{anime.meanScore}%</p>
        </CustomBox>
      )}

      {!!anime.popularity && (
        <CustomBox>
          <CustomTypo>Popularity</CustomTypo>
          <p>{anime.popularity}</p>
        </CustomBox>
      )}

      {!!anime.favourites && (
        <CustomBox>
          <CustomTypo>Favourites</CustomTypo>
          <p>{anime.favourites}</p>
        </CustomBox>
      )}

      {!!studios.length && (
        <CustomBox>
          <CustomTypo>Studios</CustomTypo>
          {studios.map((studio) => (
            <p key={studio.id}>{studio.name}</p>
          ))}
        </CustomBox>
      )}

      {!!producers.length && (
        <CustomBox>
          <CustomTypo>Producers</CustomTypo>
          {producers.map((studio) => (
            <p key={studio.id}>{studio.name}</p>
          ))}
        </CustomBox>
      )}

      {!!anime.source && (
        <CustomBox>
          <CustomTypo>Source</CustomTypo>
          <p>{anime.source}</p>
        </CustomBox>
      )}

      {!!anime.genres?.length && (
        <CustomBox>
          <CustomTypo>Genres</CustomTypo>
          {anime.genres.map((genre, index) =>
            genre ? (
              <span key={genre}>
                {genre}
                {anime.genres!.length !== index + 1 ? ", " : ""}
              </span>
            ) : null
          )}
        </CustomBox>
      )}

      {!!anime.title?.romaji && (
        <CustomBox>
          <CustomTypo>Romaji</CustomTypo>
          <p>{anime.title.romaji}</p>
        </CustomBox>
      )}

      {!!anime.title?.english && (
        <CustomBox>
          <CustomTypo>English</CustomTypo>
          <p>{anime.title.english}</p>
        </CustomBox>
      )}

      {!!anime.title?.native && (
        <CustomBox>
          <CustomTypo>Native</CustomTypo>
          <p>{anime.title.native}</p>
        </CustomBox>
      )}

      {!!anime.synonyms?.length && (
        <CustomBox>
          <CustomTypo>Synonyms</CustomTypo>
          {anime.synonyms.map((synonym) =>
            synonym ? <p key={synonym}>{synonym}</p> : null
          )}
        </CustomBox>
      )}
    </ul>
  );
};

export default Data;