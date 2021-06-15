import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return(
        <nav>
           <div className="logo">
               <Image src="/logo.jpg" width={280} height={77} />
               <h1>Sjekklister</h1>
            </div> 
            <Link href="/"><a>Hjem</a></Link>
            <Link href="/output"><a>Hent dokument</a></Link>
            <Link href="/input"><a>Last opp dokument</a></Link>
        </nav>
    );
}

export default Navbar;
