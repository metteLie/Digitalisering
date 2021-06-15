import { useState } from "react";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from 'next/link';


export default function Home() {
  const [state, setState] = useState("");
  const { data } = useSWR(`/api`, (url) =>
    fetch(url).then((res) => res.json())
  );
  console.log(state);

  return (
    <>
    <head>
      <title>
        Profilteam | Hjem
      </title>
    </head>
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
      </form>
    </div>
    </>

  );
}
