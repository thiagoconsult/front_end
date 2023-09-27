import styles from "./DeleteOportunidade.module.css";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const DeleteOportunidade = () => {
  const { URL_API } = useUrlApi("OPORTUNIDADE");

  const [mesage, setMessage] = useState(null);

  const param = useParams();
  const navigate = useNavigate();

  const id = param.id;

  const voltar = () => {
    navigate(-1);
  };

  const hanbleDelete = async () => {
    setMessage("Excluindo Oportunidade...");

    const url = `${URL_API}?id=${id}`;
    // const url = `http://localhost:5903/oportunidade?id=${id}`;

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setTimeout(() => {
      setMessage("Oportunidade excluída com sucesso");
    }, 1000);

    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Breadcumb
        titulo={"Oportunidades"}
        subtitulo={"Exclusão de Oportunidade"}
      />

      <div className={styles.box}>
        <h1 className={styles.title}>Confirma a Exclusão da Oportunidade?</h1>
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
