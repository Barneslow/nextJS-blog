import Link from "next/link";
import Logo from "./Logo";

import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={styles.header}>
      <Link href="/contact">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
