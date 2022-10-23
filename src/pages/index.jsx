import styles from "./IndexPage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function IndexPage() {
  return (
    <div>
      <br />
      <h1>😈ГЕНЕРАТОРИШКА😈</h1>
      <div className={styles.parent}>
        <Link to={"/password"} className={styles.linka}>
          ЦЕ ТВОЙ ПАРОЛЬ
        </Link>
        <br />
        <br />
        <Link to={"/number"} className={styles.linka}>
          МОИ ЦИФРЫ ТУТ
        </Link>
      </div>
    </div>
  );
}
