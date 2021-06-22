import { useState } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from 'next/link';
import Head from "next/head";

export const getStaticProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { 
        props: {ting: data}
    }
}

export default function Home({ting}) {
  const [state, setState] = useState("");
  const { data } = useSWR(`/api`, (url) =>
    fetch(url).then((res) => res.json())
  );
  console.log(state);

  return (
    <>
    <Head>
      <title>Profilteam | Hjem</title>
      <meta name="keywords" content="hjemmeside"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Hjemmeside</h1>
      <form
        onSubmit={async () => {
          const res = await fetch("/api/hello", {
            body: JSON.stringify({
              state,
            }),
            method: "POST",
          });
          const response = await res.json();
          console.log(response);
        }}
      >
        <input
          placeholder="test"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <button type="submit">Lagre</button>
        
        <div>
            <h1>Kode i return</h1>
            <h2> Merk! fetch må hentes fra fauna,
                dette er kun eksempel
            </h2>
            {ting.map(objekt => (
                <Link href={'/output/'+objekt.id} key={objekt.id}>
                    <a>
                        <h3>{objekt.name}</h3>
                    </a>
                </Link>
                )) }
        </div>
      </form>
    </div>
    </>

  );
}

