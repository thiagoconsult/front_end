import styles from "./DeleteEmpresa.module.css";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const DeleteEmpresa = () => {
  const { URL_API } = useUrlApi("EMPRESA");

  const [mesage, setMessage] = useState(null);

  const param = useParams();
  const navigate = useNavigate();

  const id = param.id;

  const voltar = () => {
    navigate(-1);
  };

  const hanbleDelete = async () => {
    setMessage("Excluindo Empresa...");

    const url = `${URL_API}?id=${id}`;

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setTimeout(() => {
      setMessage("Empresa excluída com sucesso");
    }, 1000);

    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Breadcumb titulo={"Empresas"} subtitulo={"Exclusão de Empresas"} />

      <div className={styles.box}>
        <h1 className={styles.title}>Confirma a Exclusão da Empresa?</h1>
        <span className={styles.acoes}>
          <button className="btn red" onClick={hanbleDelete}>
            Sim
          </button>
          <button className="btn green" onClick={voltar}>
            Não
          </button>
        </span>
        {mesage ? <h2 className={styles.confirmacao}>{mesage}</h2> : ""}
      </div>
    </div>
  );
};
