import Link from 'next/link';
import Head from 'next/head';
import {skjema} from './oppgave1.js';
import { useState } from "react";

let punkt = [...Array(22).keys()];
let kjente_avvik = punkt.slice(0,6);

const registrer = () => {
    return(
        <>
        <Head>
            <title>Profilteam | Registrer</title>
            <meta name="keywords" content="registrering"/>
        </Head>
            <div>
            <h1>Sjekkliste</h1>
            {skjema()}
            </div>
        </>
    )
}

export default registrer;