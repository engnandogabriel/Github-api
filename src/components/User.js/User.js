import React from "react";

import { Parag } from "../../styles/Text";
import { CardGrid } from "../../styles/Card";
import { Image } from "../../styles/Image";
import { Button } from "../../styles/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faLink,
  faMapLocationDot,
  faCalendar,
  faCheckCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const User = ({ data }) => {
  const dataUser = (date) => {
    var data = new Date(date),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  };

  return (
    <CardGrid>
      <div className="user-geral">
        <Image border="4px solid #393E42" radius="50%" src={data.avatar_url} />
        <h1>{data.login}</h1>
        <Parag>
          Contratátavel:{" "}
          {data.hireable ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ color: "#4bd605" }}
            />
          ) : (
            <FontAwesomeIcon icon={faX} style={{ color: "#ff0000" }} />
          )}
        </Parag>
        {data.location && (
          <Parag>
            <FontAwesomeIcon icon={faMapLocationDot} /> Localização:{" "}
            {data.location}
          </Parag>
        )}

        <Parag>
          <FontAwesomeIcon icon={faCalendar} /> Membro desde{" "}
          {dataUser(data.created_at)}
        </Parag>
      </div>
      <div className="user-informatio">
        <h3>Bio</h3>
        {data.bio ? <Parag>{data.bio}</Parag> : <Parag>Sem descrição</Parag>}
        <div className="visit-profile">
          <a href={data.html_url} alt="link perfil">
            <Button>Visite o perfil do github</Button>
          </a>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faUser} />
            <strong>username</strong>: {data.name}
          </li>
          {data.company && (
            <li>
              <FontAwesomeIcon icon={faLaptopCode} /> <strong>company</strong>:
              {data.company}
            </li>
          )}
          {data.blog && (
            <li>
              <FontAwesomeIcon icon={faLink} />{" "}
              <a href={data.blog}>
                <strong>{data.blog}</strong>
              </a>
            </li>
          )}
        </ul>
        <div className="footer-wraper">
          <ul>
            <li>
              <strong>Repositórios Públicos</strong>
              <span style={{ backgroundColor: "rgb(222, 239, 183)" }}>
                {data.public_repos}
              </span>
            </li>
            <li>
              <strong>Seguidores</strong>
              <span style={{ backgroundColor: "rgb(255, 198, 172)" }}>
                {data.followers}
              </span>
            </li>
            <li>
              <strong>Seguindo</strong>
              <span style={{ backgroundColor: "rgb(187, 222, 240)" }}>
                {data.following}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </CardGrid>
  );
};

export default User;
