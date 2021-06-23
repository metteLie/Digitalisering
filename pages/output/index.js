import Link from 'next/link';
import Head from 'next/head';
import OnSubmit from './oppg2';


const oversikt = () => {
    return(
        <>
        <Head>
            <title>Profilteam | Rediger</title>
            <meta name="keywords" content="redigering"/>
        </Head>
        <div>
            <h1>Oversikt</h1>
            {OnSubmit()}
        </div>
        </>
    );
}

export default oversikt;
