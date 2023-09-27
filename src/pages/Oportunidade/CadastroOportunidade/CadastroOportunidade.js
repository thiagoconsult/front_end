import { FormOportunidade } from "../../../components/Oportunidade/FormOportunidade/FormOportunidade";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";

export const CadastroOportunidade = () => {
  return (
    <>
      <Breadcumb
        titulo={"Oportunidades"}
        subtitulo={"Cadastro de Oportunidades"}
      />
      <FormOportunidade method={"POST"} />
    </>
  );
};
