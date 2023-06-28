import React, { useContext, useEffect } from "react";
import { Container } from "../../styles/Conatiner";
import { Load } from "../../styles/Loading";

import User from "../../components/User.js/User";

import { GlobalContext } from "../../Context/GlobalContext";
import { useParams } from "react-router-dom";
import Repository from "../../components/Repository/Repository";

const More = () => {
  const { name } = useParams();
  const { get_one_user, get_repository_user, userRequest, load, repositorty } =
    useContext(GlobalContext);

  useEffect(() => {
    const fetchUser = () => {
      get_one_user(name);
      get_repository_user(name);
    };
    fetchUser(name);
  }, [name]);

  if (load) return <Load />;

  if (!userRequest || userRequest.length === 0) return <Load />;

  return (
    <Container width="1200px">
      <User data={userRequest} />
      <Repository data={repositorty} />
    </Container>
  );
};

export default More;
