import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <h4>Home</h4>
      </NavLink>
      <NavLink
        to="/listaempresa"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <h4>Empresas</h4>
      </NavLink>
      <NavLink
        to="/listapessoa"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <h4>Pessoas</h4>
      </NavLink>
      <NavLink
        to="/listaoportunidade"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <h4>Oportunidades</h4>
      </NavLink>
    </div>
  );
};
