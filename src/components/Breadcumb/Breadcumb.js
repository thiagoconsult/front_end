import styles from "./Breadcumb.module.css";
import { MdDoubleArrow } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { TfiControlBackward } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

export const Breadcumb = ({ funcao, titulo, subtitulo }) => {
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };
  return (
    // <div className={styles.container}>
    <div className={styles.breadcumb}>
      <h2 className={styles.titulo}>
        <MdDoubleArrow /> {titulo}
      </h2>

      <h1 className={styles.subtitulo}>{subtitulo}</h1>

      {funcao ? (
        <h4 className={styles.acao} onClick={funcao}>
          <AiOutlinePlus />
          Incluir
        </h4>
      ) : (
        <h4 className={styles.acao} onClick={voltar}>
          <TfiControlBackward />
          Voltar
        </h4>
      )}

      {/* {funcao && (
        <h4 className={styles.inclusao} onClick={funcao}>
          <AiOutlinePlus />
          Incluir
        </h4>
      )} */}
    </div>
    // </div>
  );
};
