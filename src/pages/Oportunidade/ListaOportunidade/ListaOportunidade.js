import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import styles from "./ListaOportunidade.module.css";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { Lista } from "../../../components/Oportunidade/Lista/Lista";
import { useUrlApi, useUtlApi } from "../../../hooks/useUrlApi";

export const ListaOportunidade = () => {
  const { URL_API } = useUrlApi("OPORTUNIDADE");

  const url = `${URL_API}/all`;
  // const url = "http://localhost:5903/oportunidade/all";

  const { data: oportunidades } = useFetch(url);

  console.log(oportunidades);

  const navigate = useNavigate();

  const handleInclusao = () => {
    navigate("/cadastrooportunidade");
  };

  // console.log(oportunidades);

  return (
    <div className={styles.container}>
      <Breadcumb
        funcao={handleInclusao}
        titulo={"Oportunidades"}
        subtitulo={"Lista de Oportunidades"}
      />
      {oportunidades ? (
        <Lista oportunidades={oportunidades} />
      ) : (
        <h1 className={styles.err}>Nenhuma Oportunidade Cadastrada</h1>
      )}
    </div>
  );
};
