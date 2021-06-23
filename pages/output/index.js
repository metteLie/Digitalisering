import Link from 'next/link';
import Head from 'next/head';
import OnSubmit from './oppg2';


const oversikt = () => {
    return(
        <>
        <Head>
            <title>Profilteam | Oversikt</title>
            <meta name="keywords" content="oversikt"/>
        </Head>
        <div>
            <h1>Oversikt</h1>
            {OnSubmit()}
        </div>
        </>
    );
}

export default oversikt;
