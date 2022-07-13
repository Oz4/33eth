import React from "react";
import { Container, SpreadChildren } from "src/common/styledComponents";
import styled from "styled-components";

const Bar = styled.div`
  height: 72px;
  background-color: var(--background-color);
`;

const Brand = styled.div`
color: aqua;
`;

export default function Navbar(): JSX.Element {
  return (
    <div>
      <Bar>
        <Container>
          <SpreadChildren>
            <Brand>33eth</Brand>
          </SpreadChildren>
        </Container>
      </Bar>
    </div>
  );
}
