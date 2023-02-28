import { FaInfoCircle } from "react-icons/fa";

import { Layout } from "src/components/Layout";
import { GetTeams } from "src/types/team";

import * as S from "./styles";

export type HomeTemplateProps = {
  teams: GetTeams;
};

export const HomeTemplate = (props: HomeTemplateProps) => {
  const { teams } = props;

  return (
    <Layout>
      <S.Content>
        {teams?.map((team) => {
          const { image, name, _id } = team;

          return (
            <S.Team key={_id}>
              <S.TeamInfo href={`/team/${_id}`}>
                <FaInfoCircle color="#7B7B7B" />
              </S.TeamInfo>

              <S.TeamImageWrapper>
                <S.TeamImage src={image} alt={name} fill />
              </S.TeamImageWrapper>

              <S.TeamTitle>{name}</S.TeamTitle>
            </S.Team>
          );
        })}
      </S.Content>
    </Layout>
  );
};
