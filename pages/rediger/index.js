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
                <h1>Rediger dokument</h1>
                <div>
                    <h3>index: id</h3>
                    {OnSubmit()}    
                </div>
            </div>
        </>  
    );
}

export default rediger;
