import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FragmentType, useFragment } from "../../lib/gql";
import { CharacterEdgeFragment } from "../../lib/query/queryVoiceActor";

interface PropType {
  char: FragmentType<typeof CharacterEdgeFragment>;
}

const Head3 = ({
  title,
  isCharacter,
}: {
  title: string | null | undefined;
  isCharacter: boolean;
}) => (
  <h3
    title={title || ""}
    className={`rounded-md ${
      isCharacter ? "p-2" : "px-2 pt-2"
    } text-sm font-semibold duration-300 line-clamp-3 hover:bg-blue-400/20`}
  >
    {title}
  </h3>
);

const CharacterCard = (props: PropType) => {
  const [isCharacter, setIsCharacter] = useState(true);
  const char = useFragment(CharacterEdgeFragment, props.char);

  const charImg = char.characters?.[0]?.image?.large || "N/A";
  const charName = char.characters?.[0]?.name?.full || "N/A";

  const animeImg = char.node?.coverImage?.large || "N/A";
  const animeTitle = char.node?.title?.romaji || "N/A";
  const animeId = char.node?.id;

  const imgValue = isCharacter ? charImg : animeImg;
  const nameValue = isCharacter ? charName : animeTitle;

  return (
    <li
      key={char.id || JSON.stringify(char)}
      className="flex min-w-[9rem] max-w-[9rem] flex-col overflow-hidden rounded-lg bg-slate-100 shadow-xl dark:bg-slate-900"
    >
      <div className="relative aspect-[2/3]">
        <div className="absolute bottom-1 right-1 z-10 rounded-full bg-slate-800">
          <button
            className={`rounded-full ${
              isCharacter
                ? "bg-slate-900 text-blue-300"
                : "bg-slate-800 text-purple-300 opacity-50"
            } p-1 text-xs duration-300 hover:opacity-100`}
            onClick={() => setIsCharacter(true)}
            disabled={isCharacter}
          >
            Role
          </button>
          <button
            className={`rounded-full ${
              !isCharacter
                ? "bg-slate-900 text-blue-300"
                : "bg-slate-800 text-purple-300 opacity-50"
            } p-1 text-xs duration-300 hover:opacity-100`}
            onClick={() => setIsCharacter(false)}
            disabled={!isCharacter}
          >
            Anime
          </button>
        </div>
        <Image src={imgValue} alt={nameValue} fill className="object-cover" />
      </div>
      <div className="flex flex-[1] flex-col justify-around p-3 text-center">
        {isCharacter ? (
          <>
            <Head3 title={nameValue} isCharacter={isCharacter} />
            {char.characterRole && (
              <span
                className={`${
                  char.characterRole === "MAIN"
                    ? "text-blue-600 dark:text-blue-300"
                    : "text-purple-600 dark:text-purple-300"
                } text-xs`}
              >
                ( {char.characterRole} )
              </span>
            )}
          </>
        ) : animeId && char.node?.type === "ANIME" ? (
          <Link href={`/anime/${animeId}`} shallow>
            <Head3 title={animeTitle} isCharacter={isCharacter} />
          </Link>
        ) : (
          <Head3 title={animeTitle} isCharacter={isCharacter} />
        )}
      </div>
    </li>
  );
};
export default CharacterCard;
