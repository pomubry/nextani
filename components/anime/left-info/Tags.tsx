import { useFragment, type FragmentType } from "@/lib/gql";
import { TagsFragment } from "@/lib/query/queryAnime";

interface PropType {
  tags: FragmentType<typeof TagsFragment>;
}

export default function Tags(props: PropType) {
  const tags = useFragment(TagsFragment, props.tags);

  return (
    <li className="mb-2 flex overflow-x-scroll rounded-md p-2 text-sm shadow-xl bg-card">
      <p className="flex-1">{tags.name}</p>
      <p>{tags.rank ? `${tags.rank}%` : "-"}</p>
    </li>
  );
}
