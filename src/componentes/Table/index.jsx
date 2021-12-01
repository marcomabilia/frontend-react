import React, { useState } from "react";

import useTable  from "../../page";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
const logoMoovin ='https://www.precifica.com.br/wp-content/uploads/2018/11/moovin-logo.jpg'
		

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable (data, page, rowsPerPage);
  return (
    <>
    <div className={styles.divHeader}>
    <img alt='Logo da Moovin' className={styles.imgLogo} src={logoMoovin} />
    </div>
    <h2>Últimas postagens</h2>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Título</th>
            <th className={styles.tableHeader}>Conteúdo</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.titulo}</td>
              <td className={styles.tableCell}>{el.conteudo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;