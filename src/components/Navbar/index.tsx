import Link from "next/link";
import styles from "./index.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>My reading list</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
