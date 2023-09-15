import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
    <Header/>

    <main>
      <Content>
        <ButtonText title="Excluir Nota" />

        <h1>
          Introdução ao ReactJS
        </h1>
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni minima nemo ex. Recusandae nesciunt non consequatur modi in ea quas consequuntur. Rem, laborum. Possimus alias laudantium optio porro reiciendis.
        </p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">https:/rocketseat.com.br</a></li>
            <li><a href="#">https:/rocketseat.com.br</a></li>
          </Links>
        </Section>

        <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
        </Section>

        <Button title="Voltar"/>      
      </Content>
    </main>
    </Container>
  )
}