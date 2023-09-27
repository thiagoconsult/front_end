import { FormOportunidade } from "../../../components/Oportunidade/FormOportunidade/FormOportunidade";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";

export const UpdateOportunidade = () => {
  const param = useParams();

  const oportunidadeId = param.id;

  return (
    <>
      <Breadcumb
        titulo={"Oportunidade"}
        subtitulo={"Atualização de Oportunidade"}
      />
      <FormOportunidade method={"PUT"} oportunidadeId={oportunidadeId} />
    </>
  );
};
