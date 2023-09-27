import { FormPessoa } from "../../../components/Pessoa/FormPessoa/FormPessoa";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";

export const UpdatePessoa = () => {
  const param = useParams();

  const pessoaId = param.id;

  return (
    <>
      <Breadcumb titulo={"Pessoas"} subtitulo={"Atualização de Pessoas"} />
      <FormPessoa method={"PUT"} pessoaId={pessoaId} />
    </>
  );
};
