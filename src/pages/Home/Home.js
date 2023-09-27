import styles from "./Home.module.css";
import { useFetch } from "../../hooks/useFetch";
import { useUrlApi } from "../../hooks/useUrlApi";
import { useEffect, useState } from "react";

export const Home = () => {
  //http://localhost:5003/oportunidade/count/status?status=true

  const { URL_API: URL_API_OPORTUNIDADE } = useUrlApi("OPORTUNIDADE");
  const { URL_API: URL_API_EMPRESA } = useUrlApi("EMPRESA");
  const { URL_API: URL_API_PESSOA } = useUrlApi("PESSOA");

  // const { data: oportunidade } = useFetch(URL_API_OPORTUNIDADE + "/all");
  const { data: oportunidade_true } = useFetch(
    URL_API_OPORTUNIDADE + "/count/status?status=true"
  );
  const { data: oportunidade_false } = useFetch(
    URL_API_OPORTUNIDADE + "/count/status?status=false"
  );
  const { data: empresa } = useFetch(URL_API_EMPRESA + "/all");
  const { data: pessoa } = useFetch(URL_API_PESSOA + "/all");

  console.log(oportunidade_true);

  return (
    <div className={styles.container}>
      {oportunidade_true && oportunidade_false && empresa && pessoa && (
        <div className={styles.cards}>
          <span className={styles.card1}>
            <h1>{oportunidade_true.quantidade}</h1>
            <h1>Oportunidades Abertas</h1>
          </span>
          <span className={styles.card2}>
            <h1>{oportunidade_false.quantidade}</h1>
            <h1>Oportunidades Fechadas</h1>
          </span>
          <span className={styles.card3}>
            <h1>{Object.keys(pessoa).length}</h1>
            <h1>Pessoas</h1>
          </span>
          <span className={styles.card4}>
            <h1>{Object.keys(empresa).length}</h1>
            <h1>Empresas</h1>
          </span>
        </div>
      )}
    </div>
  );
};
