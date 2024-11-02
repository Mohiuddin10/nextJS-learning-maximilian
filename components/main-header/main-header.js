import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link"


export default function MainHeader() {
    return <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate of foods" priority />
                Next Level Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">imdustry Community</NavLink>
                    </li>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}