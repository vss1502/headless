import Link from "next/link";
import styles from './SiteFooter.module.scss'


export default function SiteFooter() {
    return (
        <>
            <footer className={styles.footer}> 
                <div>
                    <div>
                        &copy; 2022-2023 Footer
                    </div>
                    <ul>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/sample-page">Sample Page</Link>
                        </li>
                    </ul>
                </div>
                
               
            </footer>
        </>
    )
}