import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { service } from "src/services/api";
import { GetTeam } from "src/types/team";

import { ParsedUrlQuery } from "querystring";
import { TeamTemplateProps, TeamTemplate } from "src/templates/Team";

export default function Team(props: TeamTemplateProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TeamTemplate {...props} />
    </>
  );
}

type Params = ParsedUrlQuery & {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const teams = await service.getTeams();
  const paths = teams.map((team) => {
    return {
      params: {
        id: team._id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

type Props = {
  team?: GetTeam;
};

export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const { params } = ctx;

  if (!params?.id) {
    return {
      props: {},
    };
  }

  try {
    const team = await service.getTeam(params?.id);

    return { props: { team } };
  } catch (e) {
    return {
      props: {},
    };
  }
};
