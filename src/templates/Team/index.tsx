import { FaInfoCircle } from "react-icons/fa";

import { Layout } from "src/components/Layout";
import { GetTeam } from "src/types/team";

import * as S from "./styles";

export type TeamTemplateProps = {
  team: GetTeam;
};

export const TeamTemplate = (props: TeamTemplateProps) => {
  const { team } = props;

  const {
    response: { image, name, description },
  } = team;

  return (
    <S.Container>
      <S.Content>
        <S.Aside>
          <S.AsideImageWrapper>
            <S.AsideImage src={image} alt={name} fill />
          </S.AsideImageWrapper>
        </S.Aside>

        <S.Main>
          <S.Title>{name}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Main>
      </S.Content>
    </S.Container>
  );
};
