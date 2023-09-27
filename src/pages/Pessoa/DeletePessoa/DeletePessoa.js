import styles from "./DeletePessoa.module.css";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const DeletePessoa = () => {
  const { URL_API: URL_API_PESSOA } = useUrlApi("PESSOA");

  const [mesage, setMessage] = useState(null);

  const param = useParams();
  const navigate = useNavigate();

  const id = param.id;

  const voltar = () => {
    navigate(-1);
  };

  const hanbleDelete = async () => {
    setMessage("Excluindo Pessoa...");

    // const url = `http://localhost:5902/pessoa?id=${id}`;
    const url = `${URL_API_PESSOA}?id=${id}`;

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setTimeout(() => {
      setMessage("Pessoa excluída com sucesso");
    }, 500);

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <Breadcumb titulo={"Pessoas"} subtitulo={"Exclusão de Pessoas"} />

      <div className={styles.box}>
        <h1 className={styles.title}>Confirma a Exclusão da Pessoa?</h1>
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
