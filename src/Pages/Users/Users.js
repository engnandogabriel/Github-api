import React, { useContext } from "react";
import { Container } from "../../styles/Conatiner";
import { Image } from "../../styles/Image";

import GitImage from "../../assets/git-image.png";
import { Button } from "../../styles/Form";
import { CardWraper } from "../../styles/Card";

import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import { Title } from "../../styles/Text";

const Users = () => {
  const { usersRequest, clearData } = useContext(GlobalContext);

  if (!usersRequest || usersRequest.length === 0)
    return (
      <div className="users">
        <Container>
          <Image src={GitImage} alt="github" />
          <Link to="/">
            <Button onClick={clearData}>Voltar a Página Inical </Button>
          </Link>
        </Container>
        <Title>Nenhum usuário encontrado</Title>
      </div>
    );

  return (
    <div className="users">
      <Container>
        <div className="content">
          <Image src={GitImage} alt="github" />
          <Link to="/">
            <Button>Voltar a Página Inical </Button>
          </Link>
        </div>
      </Container>
      <CardWraper>
        {usersRequest.map((user, key) => (
          <div key={key} className="user">
            <Image
              border="2px solid #333"
              radius="50%"
              src={user.avatar_url}
              alt="user"
            ></Image>
            <h3 style={{ color: "#fff" }}>{user.login}</h3>
            <Link to={`/user/${user.login}`}>
              <Button>Mais</Button>
            </Link>
          </div>
        ))}
      </CardWraper>
    </div>
  );
};

export default Users;
