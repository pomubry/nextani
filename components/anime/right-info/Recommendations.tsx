import Image from "next/image";
import Link from "next/link";
import { useFragment, type FragmentType } from "@/lib/gql";
import { RecommendationsFragment } from "@/lib/query/queryAnime";

interface PropType {
  rec: FragmentType<typeof RecommendationsFragment>;
}

export default function Recommendations(props: PropType) {
  const rec = useFragment(RecommendationsFragment, props.rec);
  if (!rec.nodes) return null;
  return (
    <>
      {rec.nodes.map((recommendation) => {
        if (!recommendation || !recommendation.mediaRecommendation) return null;
        const mediaRecommendation = recommendation.mediaRecommendation;
        return (
          <li
            className="overflow-hidden rounded-md shadow-xl bg-card"
            key={mediaRecommendation.id}
          >
            <div className="relative aspect-[1/1.25] w-full object-cover">
              <Image
                src={
                  mediaRecommendation.coverImage?.extraLarge ??
                  "Image source: N/A"
                }
                alt={mediaRecommendation.title?.romaji ?? "Image alt: N/A"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="rounded-md p-2 font-semibold duration-300 text-blue hover:bg-blue-400/20">
                <Link
                  href={"/anime/" + mediaRecommendation.id}
                  title={mediaRecommendation.title?.romaji ?? "Title: N/A"}
                  className="line-clamp-4 break-words"
                  shallow
                >
                  {mediaRecommendation.title?.romaji ?? "Title: N/A"}
                </Link>
              </h3>
            </div>
          </li>
        );
      })}
    </>
  );
}
