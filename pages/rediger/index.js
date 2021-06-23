import Head from 'next/head';
import OnSubmit from './linker.js';

const rediger = () => {

    return(
        <>
            <Head>
                <title>Profilteam | Rediger</title>
                <meta name="keywords" content="redigering"/>
            </Head>
            <div>
                <h1>Kode i return</h1>
                <div>
                    <h1>Oversikt</h1>
                    {OnSubmit()}    
                </div>
            </div>
        </>  
    );
}

export default rediger;
