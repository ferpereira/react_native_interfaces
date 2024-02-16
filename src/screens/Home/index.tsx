import React from "react";

import { Container, Header, Title, Content } from "./styles";
import { Input } from "../../components/Inputs";
import { Card } from "../../components/Card";

import coverImg from "../../assets/cover.png";

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        {/*<Title>Fernando</Title> */}
        <Input placeholder="Pesquisar..."></Input>
      </Header>
      <Content>
        <Card></Card>
      </Content>
    </Container>
    //<View style={{justifyContent: "center", alignContent: "center", flex: 1}}></View>
  );
}
