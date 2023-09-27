import { FormEmpresa } from "../../../components/Empresa/FormEmpresa/FormEmpresa";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";

export const CadastroEmpresa = () => {
  return (
    <>
      <Breadcumb titulo={"Empresas"} subtitulo={"Cadastro de Empresas"} />
      <FormEmpresa method={"POST"} />
    </>
  );
};
