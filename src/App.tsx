import React, { useState } from "react";

import messagesData from "./dados"
import styles from "./App.scss"
import Table from "./componentes/Table";

const App = () => {
  
  const [messages] = useState([...messagesData]);
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Table data={messages} rowsPerPage={9} />
      </div>
    </main>
  );
};

export default App;