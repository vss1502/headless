import Image from "next/image";
import Link from "next/link";
import styles from './SiteHeader.module.scss'


export default function SiteHeader ( {className}) {
    return (
        <header className={styles.header}>
            <div className="logo-area">
                <Link href="/">
                    <Image src="/CoolNomad.svg" alt="Logo" width="180" height="120"></Image> 
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}