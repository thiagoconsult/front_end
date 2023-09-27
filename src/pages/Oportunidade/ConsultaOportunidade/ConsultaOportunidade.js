import { FormOportunidade } from "../../../components/Oportunidade/FormOportunidade/FormOportunidade";
import { Breadcumb } from "../../../components/Breadcumb/Breadcumb";
import { useParams } from "react-router-dom";

export const ConsultaOportunidade = () => {
  const param = useParams();

  const oportunidadeId = param.id;

  return (
    <>
      <Breadcumb titulo={"Oportunidade"} subtitulo={"Consulta Oportunidade"} />
      <FormOportunidade method={"GET"} oportunidadeId={oportunidadeId} />
    </>
  );
};
