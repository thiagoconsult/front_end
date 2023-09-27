import styles from "./Lista.module.css";
import { GoTrash, GoPencil, GoEye } from "react-icons/go";

export const Lista = ({ pessoas }) => {
  console.log("PESSOAS", pessoas.err);
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {!pessoas.err &&
            pessoas.map((pessoa) => (
              <tr key={pessoa.id}>
                <td width="22.5%">{pessoa.nome}</td>
                <td width="22.5%">{pessoa.sobrenome}</td>
                <td width="22.5%">{pessoa.email}</td>
                <td width="22.5%">{pessoa.celular}</td>
                <td width="10%" className={styles.acoes}>
                  <span>
                    <a
                      className={styles.link}
                      href={`/consultapessoa/${pessoa.id}`}
                    >
                      <GoEye size={20} color="#198754" />
                    </a>
                  </span>
                  <span>
                    <a
                      className={styles.link}
                      href={`/updatepessoa/${pessoa.id}`}
                    >
                      <GoPencil size={20} color="#0d6efd" />
                    </a>
                  </span>
                  <span>
                    <a
                      className={styles.link}
                      href={`/deletepessoa/${pessoa.id}`}
                    >
                      <GoTrash size={20} color="#dc3545" />
                    </a>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
