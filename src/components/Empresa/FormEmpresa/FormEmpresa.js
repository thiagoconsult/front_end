import style from "./FormEmpresa.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const FormEmpresa = ({ method, empresaId }) => {
  const { URL_API } = useUrlApi("EMPRESA");

  const navigate = useNavigate();

  console.log(method);

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [uf, setUf] = useState("");
  const [err, setErr] = useState(null);

  // UTILIZADO QUANDO FORM É CHAMADO COM MÉTODO PUT E GET

  useEffect(() => {
    if (empresaId) {
      // const url = `http://localhost:5901/empresa/id?id=${empresaId}`;
      const url = `${URL_API}/id?id=${empresaId}`;

      const fetchData = async () => {
        const res = await fetch(url);

        const empresa = await res.json();

        setId(empresa.id);
        setNome(empresa.nome);
        setCnpj(empresa.cnpj);
        setCep(empresa.cep);
        setCidade(empresa.cidade);
        setBairro(empresa.bairro);
        setRua(empresa.rua);
        setNumero(empresa.numero);
        setUf(empresa.uf);
      };

      fetchData();
    }
  }, [empresaId]);

  // UTILIZADO QUANDO FORM É CHAMADO POR UPDATEEMPRESA

  const handleCancelar = (e) => {
    e.preventDefault();
    navigate("/listaempresa");
  };

  // UTILIZADO PARA CONSUMIR API VIACEP E PREENCHER ENDEREÇO

  const handleCep = async () => {
    setCidade("");
    setBairro("");
    setRua("");
    setUf("");

    if (cep.length < 8) {
      return setErr("CEP precisa ter 8 dígitos");
    }

    const url_viacep = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const res = await fetch(url_viacep);

      const data = await res.json();

      if (data.erro) {
        throw Error(res.statusText);
      }

      setErr(null);

      setCidade(data.localidade);
      setBairro(data.bairro);
      setRua(data.logradouro);
      setUf(data.uf);
    } catch (error) {
      setErr("CEP não encontrado");
    }
  };

  // UTILIZADO PARA CONSUMIR API VIACEP E PREENCHER ENDEREÇO

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VERIFICA SE É INCLUSÃO OU ALTERAÇÃO
    let url = "";

    if (method == "POST") {
      url = URL_API;
      // url = "http://localhost:5901/empresa";
      // console.log("ENTROU POST", url, method);
    }

    if (method == "PUT") {
      url = `${URL_API}?id=${id}`;
      console.log("URL PUT", url);
      // url = `http://localhost:5901/empresa?id=${id}`;
      // console.log("ENTROU PUT", url, method);
    }

    // VERIFICA SE É INCLUSÃO OU ALTERAÇÃO

    const new_empresa = {
      nome,
      cnpj,
      cep,
      cidade,
      bairro,
      rua,
      numero,
      uf,
    };

    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_empresa),
    });

    navigate("/listaempresa");
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            maxLength={50}
            required
            autoComplete="off"
            type="text"
            name="nome"
            placeholder="Nome da Empresa"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          <span>CNPJ:</span>
          <input
            maxLength={14}
            required
            autoComplete="off"
            type="text"
            name="cnpj"
            placeholder="99999999999999"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </label>
        <label>
          {/* {err && <p className={style.err}>{err}</p>} */}
          <span>CEP: {err && <span className={style.err}>{err}</span>}</span>
          <input
            maxLength={8}
            required
            autoComplete="off"
            type="text"
            name="cep"
            placeholder="99999999"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={handleCep}
          />
        </label>

        <label>
          <span>Cidade:</span>
          <input
            disabled
            type="text"
            name="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </label>
        <label>
          <span>Bairro:</span>
          <input
            disabled
            type="text"
            name="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </label>
        <label>
          <span>Rua:</span>
          <input
            disabled
            type="text"
            name="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </label>
        <label>
          <span>Número:</span>
          <input
            autoComplete="off"
            type="text"
            name="numero"
            placeholder="999"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </label>
        <label>
          <span>UF:</span>
          <input
            disabled
            type="text"
            name="uf"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
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
