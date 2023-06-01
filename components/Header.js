import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="firstNavbar">
                <Link href="/">
                    <div className="leftNavSection">
                        <Link href="/"><Image src="/Llogo.PNG" width="70" height="70" alt="logo" className="navimg" /></Link>

                        <h2>
                            <Link href="/" className="link">Rilindja Kombëtare Iliriste</Link>
                        </h2>
                    </div>
                </Link>

                <div className="rightSection">

                    <Link href="/" className="link">Home
                    </Link>
                    <Link href="/about-us" className="link">About Us
                    </Link>
                    <Link href="/support"className="link">Our Political Platform
                    </Link>
                    <Link href="/contact" className="link">Contact Us
                    </Link>



                </div>
            </div>
            <div className="hamburger-menu" id="secondmenu">
                <div>
                    <input id="menu__toggle" type="checkbox" />

                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box">
                        <div className="menu-logo"> <Link href="/"><Image src="/Llogo.PNG" width="70" height="70" alt="logo" /></Link></div>

                        <Link href="/"className="menu__item">Home</Link>
                        <Link href="/about-us"className="menu__item">About Us</Link>
                        <Link href="/support" className="menu__item">Our Political Platform</Link>
                        <Link href="/contact" className="menu__item">Contact Us</Link>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
