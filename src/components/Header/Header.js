import styles from "./Header.module.css";
import { Brand } from "../Brand/Brand";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Brand />
      <Nav />
    </div>
  );
};
