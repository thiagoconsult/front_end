import style from "./FormPessoa.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlApi } from "../../../hooks/useUrlApi";

export const FormPessoa = ({ method, pessoaId }) => {
  const { URL_API } = useUrlApi("PESSOA");
  const navigate = useNavigate();

  console.log(method);

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");

  // UTILIZADO QUANDO FORM É CHAMADO POR UPDATEPESSOA

  useEffect(() => {
    if (pessoaId) {
      // const url = `http://localhost:5902/pessoa/id?id=${pessoaId}`;
      const url = `${URL_API}/id?id=${pessoaId}`;

      const fetchData = async () => {
        const res = await fetch(url);

        const pessoa = await res.json();

        setId(pessoa.id);
        setNome(pessoa.nome);
        setSobrenome(pessoa.sobrenome);
        setEmail(pessoa.email);
        setCelular(pessoa.celular);
      };

      fetchData();
    }
  }, [pessoaId]);

  // UTILIZADO QUANDO FORM É CHAMADO POR UPDATEPESSOA

  const handleCancelar = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VERIFICA SE É INCLUSÃO OU ALTERAÇÃO
    let url = "";

    if (method === "POST") {
      url = URL_API;
      // url = "http://localhost:5902/pessoa";
      // console.log("ENTROU POST", url, method);
    }

    if (method === "PUT") {
      url = `${URL_API}?id=${id}`;
      // url = `http://localhost:5902/pessoa?id=${id}`;
      // console.log("ENTROU PUT", url, method);
    }

    // VERIFICA SE É INCLUSÃO OU ALTERAÇÃO

    const new_pessoa = {
      nome,
      sobrenome,
      email,
      celular,
    };

    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_pessoa),
    });

    navigate(-1);
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            maxLength={100}
            required
            autoComplete="off"
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          <span>Sobrenome:</span>
          <input
            maxLength={100}
            required
            autoComplete="off"
            type="text"
            name="sobrenome"
            placeholder="Seu sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            required
            type="email"
            name="email"
            placeholder="nome@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Celular:</span>
          <input
            required
            type="text"
            name="celular"
            placeholder="11999999999"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
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
