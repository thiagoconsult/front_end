import { FormPessoa } from "../../../components/Pessoa/FormPessoa/FormPessoa";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";

export const CadastroPessoa = () => {
  return (
    <>
      <Breadcumb titulo={"Pessoas"} subtitulo={"Cadastro de Pessoas"} />
      <FormPessoa method={"POST"} />
    </>
  );
};
