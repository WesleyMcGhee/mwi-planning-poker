import Image from "next/image";
import logo from "../public/favicon.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Image
        src={logo}
        alt="mwi-logo"
        height={70}
        width={70}
        className={styles.Logo}
      ></Image>
    </header>
  );
};

export default Header;
