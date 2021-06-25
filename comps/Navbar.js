import Link from 'next/link';
import Image from 'next/image'; // funket ikke?

const Navbar = () => {
    return(
        <nav>
            <div className="logo">
            <img src= "/logo.png" alt="site logo" width={110} height={110} />
            </div> 
            <Link href="/output"><a>Oversikt</a></Link>
            <Link href="/rediger"><a>Rediger dokument</a></Link>
            <Link href="/input"><a>Nytt dokument</a></Link>
            
        </nav>
    );
}

export default Navbar;
