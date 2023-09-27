import style from "./FormOportunidade.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const FormOportunidade = ({ method, oportunidadeId }) => {
  const { URL_API: URL_API_EMPRESA } = useUrlApi("EMPRESA");
  const { URL_API: URL_API_PESSOA } = useUrlApi("PESSOA");
  const { URL_API: URL_API_OPORTUNIDADE } = useUrlApi("OPORTUNIDADE");

  const url_empresas = `${URL_API_EMPRESA}/all`;
  const url_pessoas = `${URL_API_PESSOA}/all`;

  // const url_empresas = "http://localhost:5901/empresa/all";
  // const url_pessoas = "http://localhost:5902/pessoa/all";

  const { data: empresas } = useFetch(url_empresas);
  const { data: pessoas } = useFetch(url_pessoas);

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState(true);
  const [idEmpresa, setIdEmpresa] = useState(0);
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [idPessoa, setIdpessoa] = useState(0);
  const [nomePessoa, setNomePessoa] = useState("");
  const [updates, setUpdates] = useState("");
  const [err, setErr] = useState(null);

  const listaStatus = [0, 1];
  // UTILIZADO QUANDO FORM É CHAMADO POR UPDATEOPORTUNIDADE

  useEffect(() => {
    if (oportunidadeId) {
      const url = `${URL_API_OPORTUNIDADE}/id?id=${oportunidadeId}`;
      // const url = `http://localhost:5903/oportunidade/id?id=${oportunidadeId}`;

      const fetchData = async () => {
        const res = await fetch(url);

        const oportunidade = await res.json();

        setId(oportunidade.id);
        setTitulo(oportunidade.titulo);
        setDescricao(oportunidade.descricao);
        setStatus(oportunidade.status);
        setIdEmpresa(oportunidade.idEmpresa);
        setNomeEmpresa(oportunidade.nomeEmpresa);
        setIdpessoa(oportunidade.idPessoa);
        setNomePessoa(oportunidade.nomePessoa);
        setUpdates(oportunidade.updates);
      };

      fetchData();
    }
  }, [oportunidadeId]);

  // UTILIZADO QUANDO FORM É CHAMADO POR UPDATEOPORTUNIDADE

  const handleCancelar = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VERIFICA SE É INCLUSÃO OU ALTERAÇÃO
    let url = "";

    if (method == "POST") {
      url = URL_API_OPORTUNIDADE;
      // url = "http://localhost:5903/oportunidade";
    }

    if (method == "PUT") {
      url = `${URL_API_OPORTUNIDADE}?id=${id}`;
      // url = `http://localhost:5903/oportunidade?id=${id}`;
    }

    // VERIFICA SE É INCLUSÃO OU ALTERAÇÃO

    const new_oportunidade = {
      titulo,
      descricao,
      status,
      idEmpresa,
      nomeEmpresa,
      idPessoa,
      nomePessoa,
      updates,
    };

    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_oportunidade),
    });

    navigate("/listaoportunidade");
  };

  const handleEmpresa = (e) => {
    const empresaId = e.target.value;

    empresas.map((empresa) => {
      if (empresa.id == empresaId) {
        setIdEmpresa(empresa.id);
        setNomeEmpresa(empresa.nome);
      }
    });
  };

  const handlePessoa = (e) => {
    const Pessoaid = e.target.value;

    pessoas.map((pessoa) => {
      if (pessoa.id == Pessoaid) {
        setIdpessoa(pessoa.id);
        setNomePessoa(pessoa.nome);
      }
    });
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input
            maxLength={100}
            required
            autoComplete="off"
            type="text"
            name="titulo"
            placeholder="Título da Oportunidade"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <span>Descrição:</span>
          <textarea
            rows={3}
            maxLength={255}
            autoComplete="off"
            type="textarea"
            name="descricao"
            placeholder="Descrição da Oportunidade"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>
        <label>
          <select onChange={handleEmpresa}>
            <option value="empresa">
              {method === "GET" || method === "PUT"
                ? nomeEmpresa
                : "--Selecione a Empresa--"}
            </option>
            {empresas &&
              empresas.map((empresa) => (
                <option value={empresa.id}>{empresa.nome}</option>
              ))}
          </select>
        </label>
        <label>
          <select onChange={handlePessoa}>
            <option value="pessoa">
              {method === "GET" || method === "PUT"
                ? nomePessoa
                : "--Selecione a Pessoa--"}
            </option>
            {pessoas &&
              pessoas.map((pessoa) => (
                <option value={pessoa.id}>{pessoa.nome}</option>
              ))}
          </select>
          <label>
            <span>Updates:</span>
            <textarea
              rows={5}
              maxLength={255}
              autoComplete="off"
              type="textarea"
              name="descricao"
              placeholder="Atualizações da Oportunidade"
              value={updates}
              onChange={(e) => setUpdates(e.target.value)}
            />
          </label>
        </label>
        <label>
          <span>Status:</span>
          <select onChange={handleStatus}>
            <option value={status}>{status == 1 ? "Aberto" : "Fechado"}</option>
            {listaStatus.map((statusDisponivel) =>
              !statusDisponivel == status ? (
                <option value={statusDisponivel}>
                  {statusDisponivel == 1 ? "Aberto" : "Fechado"}
                </option>
              ) : (
                ""
              )
            )}
          </select>
        </label>
        <span className={style.acoes}>
          {method === "GET" ? (
            ""
          ) : (
            <button className="btn green">Salvar</button>
          )}

          {/* <button className="btn green">Salvar</button> */}
          <button className="btn red" onClick={(e) => handleCancelar(e)}>
            Cancelar
          </button>
        </span>
      </form>
    </div>
  );
};
