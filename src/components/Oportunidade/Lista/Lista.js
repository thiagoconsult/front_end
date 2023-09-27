import styles from "./Lista.module.css";
import { GoTrash, GoPencil, GoEye } from "react-icons/go";

export const Lista = ({ oportunidades }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Empresa</th>
            <th>Pessoa</th>
            <th>Data Inclusão</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {!oportunidades.err &&
            oportunidades.map((oportunidade) => (
              <tr key={oportunidade.id}>
                <td width="20%">{oportunidade.titulo}</td>
                <td width="30%">{oportunidade.descricao}</td>
                <td width="10%">{oportunidade.nomeEmpresa}</td>
                <td width="10%">{oportunidade.nomePessoa}</td>
                <td width="10%">{oportunidade.inclusao}</td>
                <td width="10%">
                  {oportunidade.status ? "Aberto" : "Fechado"}
                </td>
                <td width="10%" className={styles.acoes}>
                  <span>
                    <a
                      className={styles.link}
                      href={`/consultaoportunidade/${oportunidade.id}`}
                    >
                      <GoEye size={20} color="#198754" />
                    </a>
                  </span>
                  <span>
                    <a
                      className={styles.link}
                      href={`/updateoportunidade/${oportunidade.id}`}
                    >
                      <GoPencil size={20} color="#0d6efd" />
                    </a>
                  </span>
                  <span>
                    <a
                      className={styles.link}
                      href={`/deleteoportunidade/${oportunidade.id}`}
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
