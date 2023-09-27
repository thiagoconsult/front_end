import { Lista } from "../../../components/Empresa/Lista/Lista";
import { useFetch } from "../../../hooks/useFetch";
import styles from "./ListaEmpresa.module.css";
import { useNavigate } from "react-router-dom";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const ListaEmpresa = () => {
  const { URL_API } = useUrlApi("EMPRESA");

  let url = URL_API + "/all";

  const { data: empresas } = useFetch(url);

  const navigate = useNavigate();

  const handleInclusao = () => {
    navigate("/cadastroempresa");
  };

  return (
    <div className={styles.container}>
      <Breadcumb
        funcao={handleInclusao}
        titulo={"Empresas"}
        subtitulo={"Lista de Empresas"}
      />
      {empresas ? (
        <Lista empresas={empresas} />
      ) : (
        <h1 className={styles.err}>Nenhuma Empresa Cadastrada</h1>
      )}
    </div>
  );
};
