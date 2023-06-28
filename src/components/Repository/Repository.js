import React from "react";
import { CardWraper } from "../../styles/Card";
import { Repos } from "../../styles/Repos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faStar,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const Repository = ({ data }) => {
  const dataUser = (date) => {
    var data = new Date(date),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  };

  if (!data) return null;

  return (
    <CardWraper width="1200px" background="#fff">
      {data.map((repo, index) => (
        <Repos key={index}>
          <a href={repo.html_url}>
            <FontAwesomeIcon icon={faBook} style={{ color: "#333" }} />{" "}
            {repo.name}
          </a>
          {repo.language && <p>Lingagem preferida: {repo.language}</p>}
          <div>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: " #ffff00 " }} />{" "}
              {repo.stargazers_count}
            </p>
            <p>
              <p>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  style={{ color: "#00ACB6" }}
                />{" "}
                {repo.forks}
              </p>
            </p>
          </div>
          {repo.description ? <p>{repo.description}</p> : <p>Sem descrição </p>}
          <p>Ultima modificação: {dataUser(repo.updated_at)}</p>
        </Repos>
      ))}
    </CardWraper>
  );
};

export default Repository;
