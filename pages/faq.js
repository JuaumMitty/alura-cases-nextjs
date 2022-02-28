import { faC } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import Link from "../src/components/Link";
import Head from "next/head";
import PageTitle from "../src/components/PageTitle";

export async function getStaticProps() {
    return {
        props: {
            qualquercoisa: "que eu passar aqui"
        }
    }
}

export default function FAQPage() {
    const [faq, setFaq] = useState([]);
    useEffect(() => {
        const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

        fetch(FAQ_API_URL)
            .then((respostaDoServidor) => {
                return respostaDoServidor.json();
            })
            .then((resposta) => {
                setFaq(resposta);
            })
    }, []);
    return (
        <div>
            <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
            <h1>Alura Cases - Página de perguntas FAQ</h1>
            <Link href="/">
                Ir para a página Home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article >
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}