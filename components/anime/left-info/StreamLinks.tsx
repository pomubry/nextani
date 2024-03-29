import { useFragment, type FragmentType } from "@/lib/gql";
import { StreamLinksFragment } from "@/lib/query/queryAnime";

interface PropType {
  link: FragmentType<typeof StreamLinksFragment>;
}

function bgColor(site: string) {
  switch (site.toLowerCase()) {
    case "animelab":
    case "funimation":
    case "hbo max":
      return "bg-blue-400 text-slate-100 hover:bg-blue-500";
    case "amazon":
    case "crunchyroll":
    case "vrv":
      return "bg-yellow-400 text-slate-900 hover:bg-yellow-500";
    case "hulu":
      return "bg-green-400 text-slate-100 hover:bg-green-600";
    case "netflix":
    case "youtube":
      return "bg-red-500 text-slate-100 hover:bg-red-600";
    default:
      return "bg-blue-400 text-slate-100 hover:bg-blue-500";
  }
}

export default function StreamLinks(props: PropType) {
  const link = useFragment(StreamLinksFragment, props.link);
  return link.url ? (
    <li
      key={link.url}
      className={`my-2 list-none rounded-md text-center font-bold shadow-xl duration-200 ${bgColor(
        link.site,
      )}`}
    >
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="block h-full w-full p-2"
      >
        {link.site}
      </a>
    </li>
  ) : null;
}
