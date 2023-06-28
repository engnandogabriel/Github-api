import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/Conatiner";
import { Card } from "../../styles/Card";

import GitImage from "../../assets/git-image.png";
import { Image } from "../../styles/Image";
import { Form, Input, Button } from "../../styles/Form";
import { Title, Parag } from "../../styles/Text";

import { GlobalContext } from "../../Context/GlobalContext";

const Home = () => {
  const [name, setName] = useState("");
  const { get_users, load } = useContext(GlobalContext);

  const navigate = useNavigate();

  const searchUser = async (e) => {
    e.preventDefault();
    await get_users(name);
    navigate("/users");
  };

  return (
    <div className="home">
      <Container>
        <Card padding="3rem">
          <div className="card-content">
            <div className="card-content-text">
              <Title>Github Finder</Title>
              <Parag>
                Procure por um usuário para ver detalhes do deu perfil
              </Parag>
            </div>
            <Image src={GitImage} alt="" />
          </div>
          <div className="form-card">
            <Form onSubmit={searchUser}>
              <Input
                type="text"
                placeholder="procurar usuário..."
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              {load ? (
                <Button>Procurando...</Button>
              ) : (
                <Button>Procurar</Button>
              )}
            </Form>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
