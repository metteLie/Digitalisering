import Link from 'next/link';
import Image from 'next/image'; // funket ikke?

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <div className="logo">
            <img src= "/logo.png" alt="site logo" width={110} height={110} />
            </div> 
            <Link href="/"><a>Hjem</a></Link>
            <Link href="/output"><a>Hent dokument</a></Link>
            <Link href="/input"><a>Last opp dokument</a></Link>
            
        </nav>
    );
}

export default Navbar;
