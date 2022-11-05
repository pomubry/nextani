import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import CardHeaderId from "../../components/CardHeaderId";
import LeftSideInfo from "../../components/LeftSideInfo/LeftSideInfo";
import RightSideInfo from "../../components/RightSideInfo/RightSideInfo";
import SearchForm from "../../components/SearchForm";
import fetchQuery from "../../lib/fetcher/fetchQuery";
import fetchQueryId from "../../lib/fetcher/fetchQueryId";
import { Media } from "../../lib/interface/IQueryId";

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the initial top 50 anime
  const res = await fetchQuery({});

  if (res.error) {
    console.error("Error in getStaticPaths");
    return {
      paths: [{ params: { id: "20" } }],
      fallback: true,
    };
  }
  const { media } = res;
  const paths = media.map((anime) => ({ params: { id: anime.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetchQueryId(Number(context.params?.id));

  if (res.error) {
    console.error("Error in getStaticProps");
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: {
      anime: res.media,
    },
    revalidate: 10,
  };
};

const Anime: NextPage<{ anime: Media }> = ({ anime }) => {
  const { isFallback } = useRouter();

  if (isFallback)
    return (
      <Box sx={{ display: "grid", placeContent: "center" }}>
        <CircularProgress key="circularKey" />
      </Box>
    );

  return (
    <>
      <Head>
        <meta
          name="description"
          content={anime.description ?? anime.title.romaji}
        />
        <meta
          name="keywords"
          content={`${anime.synonyms.join(", ")}, ${
            anime.title.romaji
          }, nextani database, anime list database`}
        />
        <title>{`${anime.title.romaji} | NextAni`}</title>
      </Head>

      <CardHeaderId anime={anime} />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <SearchForm queryProp={{}} />

        <Grid container spacing={3}>
          {/* xs should be grid area stuff; currently at `auto` */}
          <Grid item xs={12} sm={4} md={3}>
            <LeftSideInfo anime={anime} />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <RightSideInfo anime={anime} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Anime;