import styles from "./IndexPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function IndexPage() {
  return (
    <div>
      <br />
      <h1>Генератор Всего</h1>
      <div className={styles.parent}>
        <Link to={"/password"} className={styles.linka}>
          Пароль, тыкать сюда
        </Link>
        <br />
        <br />
        <Link to={"/number"} className={styles.linka}>
          Чиселки тут
        </Link>
      </div>
    </div>
  );
}
