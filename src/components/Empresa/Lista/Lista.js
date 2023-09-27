import styles from "./Lista.module.css";
import { GoTrash, GoPencil, GoEye } from "react-icons/go";

export const Lista = ({ empresas }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {!empresas.err &&
            empresas.map((empresa) => (
              <tr key={empresa.id}>
                <td width="20%">{empresa.nome}</td>
                <td width="10%">{empresa.cnpj}</td>
                <td>
                  {empresa.rua}, {empresa.numero}, {empresa.bairro},
                  {empresa.cidade}/{empresa.uf} - {empresa.cep}
                </td>
                <td width="10%" className={styles.acoes}>
                  <span>
                    <a
                      className={styles.link}
                      href={`/consultaempresa/${empresa.id}`}
                    >
                      <GoEye size={20} color="#198754" />
                    </a>
                  </span>
                  <span>
                    <a
                      className={styles.link}
                      href={`/updateempresa/${empresa.id}`}
                    >
                      <GoPencil size={20} color="#0d6efd" />
                    </a>
                  </span>
                  <span>
                    <a
                      className={styles.link}
                      href={`/deleteempresa/${empresa.id}`}
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
