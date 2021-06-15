import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { 
        props: {ting: data}
    }
}
// Fra youtube, tror ikke vi trenger dette^

const registrer = () => {
    return(
        <>
        <Head>
            <title>Profilteam | Registrer</title>
            <meta name="keywords" content="registrering"/>
        </Head>
            <div>
            <h1>Kode her i return</h1>
        </div>
        </>
    )
}

export default registrer;