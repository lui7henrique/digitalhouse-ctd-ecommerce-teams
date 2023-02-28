import Image from "next/image";
import { ReactNode } from "react";
import * as S from "./styles";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <S.Container fullHeight>
      <Image src="/logo.png" alt="logo" width={211} height={62} />

      {children}
    </S.Container>
  );
};
