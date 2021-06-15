import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { 
        props: {ting: data}
    }
}

const rediger = ({ting}) => {
    return(
        <>
        <Head>
            <title>Profilteam | Rediger</title>
            <meta name="keywords" content="redigering"/>
        </Head>
        <div>
            <h1>Kode i return</h1>
            {ting.map(objekt => (
                <Link href={'/output/'+objekt.id} key={objekt.id}>
                    <a>
                        <h3>{objekt.navn}</h3>
                    </a>
                </Link>
                )) }
        </div>
        </>
    );
}

export default rediger;
