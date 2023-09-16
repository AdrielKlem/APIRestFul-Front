import { useState } from "react"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'

import { Container, Form } from "./styles";

export function New() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddlink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Link úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                            isnew 
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddlink}
                        />
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isnew placeholder="Novo Tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}