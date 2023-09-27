import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import styles from "./ListaPessoa.module.css";
import { Lista } from "../../../components/Pessoa/Lista/Lista";
import { useFetch } from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const ListaPessoa = () => {
  const { URL_API } = useUrlApi("PESSOA");
  const navigate = useNavigate();

  const handleInclusao = () => {
    navigate("/cadastropessoa");
  };

  // const url = "http://localhost:5902/pessoa/all";
  const url = `${URL_API}/all`;

  const { data: pessoas } = useFetch(url);

  return (
    <div className={styles.container}>
      <Breadcumb
        funcao={handleInclusao}
        titulo={"Pessoas"}
        subtitulo={"Lista de Pessoas"}
      />
      {pessoas ? (
        <Lista pessoas={pessoas} />
      ) : (
        <h1 className={styles.err}>Nenhuma Pessoa Cadastrada</h1>
      )}
    </div>
  );
};
