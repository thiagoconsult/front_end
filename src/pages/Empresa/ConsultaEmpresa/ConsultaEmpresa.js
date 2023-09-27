import { FormEmpresa } from "../../../components/Empresa/FormEmpresa/FormEmpresa";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";

export const ConsultaEmpresa = () => {
  const param = useParams();

  const empresaId = param.id;

  return (
    <>
      <Breadcumb titulo={"Empresas"} subtitulo={"Consulta Empresa"} />
      <FormEmpresa method={"GET"} empresaId={empresaId} />
    </>
  );
};
