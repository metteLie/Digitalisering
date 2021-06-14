import Link from 'next/link';

const Navbar = () => {
    return(
        <nav>
           <div className="logo">
               <h1>Sjekklister</h1>
            </div> 
            <Link href="/"><a>Hjem</a></Link>
            <Link href="/output"><a>Hent dokument</a></Link>
            <Link href="/input"><a>Last opp dokument</a></Link>
        </nav>
    );
}

export default Navbar;
