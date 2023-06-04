import Logo from "../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.container}>
            <img
                src={Logo}
                alt="logo"
            />

            <div className={styles.letters}>
                <span>to</span>
                <span>do</span>
            </div>
        </div>
    );
}
