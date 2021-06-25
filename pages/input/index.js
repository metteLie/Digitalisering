import Link from "next/link";
import Head from "next/head";
import Skjema from "./oppgave1.js";

let punkt = [...Array(22).keys()];
let kjente_avvik = punkt.slice(0, 6);

const registrer = () => {
  return (
    <>
      <Head>
        <title>Profilteam | Registrer</title>
        <meta name="keywords" content="registrering" />
      </Head>
      <div>
        <h1>Sjekkliste</h1>
        <Skjema />
      </div>
    </>
  );
};

export default registrer;
