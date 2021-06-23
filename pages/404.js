import Link from 'next/link';
import { useEffect} from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            //router.go(-1) går tilbake til forrige side 
            router.push('/output')
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>Siden finnes ikke</h2>
            <p>Gå tilbake til <Link href="/output"><a>Oversikt</a></Link></p>
        </div>
     );
}
 
export default NotFound;