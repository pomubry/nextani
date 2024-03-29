import Image from "next/image";
import Link from "next/link";

import ListParent from "./ListParent";

import { useFragment, type FragmentType } from "@/lib/gql";
import { CharactersFragment } from "@/lib/query/queryAnime";

interface PropType {
  characters: FragmentType<typeof CharactersFragment>;
  isPlaceholderData: boolean;
}

export default function Characters(props: PropType) {
  const characters = useFragment(CharactersFragment, props.characters);

  if (!characters.edges) return null;

  return (
    <ListParent isPlaceholderData={props.isPlaceholderData}>
      {characters.edges.map((edge) => {
        if (!edge || !edge.node) return null;
        return (
          <li
            key={
              edge.id ??
              `${edge.node.id}-${edge.voiceActors && edge.voiceActors[0]?.id}`
            }
            className="grid min-h-[7rem] grid-cols-[1fr,1fr] overflow-hidden rounded-md text-sm shadow-xl bg-card md:text-xs lg:text-sm"
          >
            {/* Anime character on the left */}
            <div className="grid grid-cols-[1fr,2fr] gap-1">
              <div className="relative h-full w-full">
                <Image
                  src={edge.node.image?.large ?? "N/A"}
                  alt={
                    edge.node.name?.full ??
                    `Image for character ID: ${edge.node.id}`
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-1">
                <h3 className="flex-1">{edge.node.name?.full || "N/A"}</h3>
                <p
                  className={edge.role === "MAIN" ? "text-blue" : "text-purple"}
                >
                  {edge.role ?? "N/A"}
                </p>
              </div>
            </div>

            {/* Voice actor on the right */}
            {edge.voiceActors && edge.voiceActors[0] && (
              <div className="grid grid-cols-[2fr,1fr] gap-1">
                <div className="flex flex-col p-1 text-end">
                  <h3 className="flex-1 text-blue">
                    <Link
                      href={`/va/${edge.voiceActors[0].id}`}
                      className="hover:underline"
                    >
                      {edge.voiceActors[0].name?.full || "N/A"}
                    </Link>
                  </h3>
                  <p>JAPANESE</p>
                </div>

                <div className="relative h-full w-full">
                  <Image
                    src={edge.voiceActors[0].image?.large || "N/A"}
                    alt={edge.voiceActors[0].name?.full || "N/A"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ListParent>
  );
}
