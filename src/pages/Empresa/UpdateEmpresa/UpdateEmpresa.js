import { FormEmpresa } from "../../../components/Empresa/FormEmpresa/FormEmpresa";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";

export const UpdateEmpresa = () => {
  const param = useParams();

  const empresaId = param.id;

  return (
    <>
      <Breadcumb titulo={"Empresas"} subtitulo={"Atualização de Empresas"} />
      <FormEmpresa method={"PUT"} empresaId={empresaId} />
    </>
  );
};
