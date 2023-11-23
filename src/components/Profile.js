import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Perfil</h1>
      <p>
        Este é o componente de perfil. Ele exibe as informações de perfil do técnico.
      </p>
      <p>
        As informações de perfil incluem o nome do técnico, o e-mail, a data de criação da conta, o número de telefone e o endereço.
      </p>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="E-mail" />
      <input type="date" placeholder="Data de criação da conta" />
      <input type="text" placeholder="Número de telefone" />
      <input type="text" placeholder="Endereço" />
    </div>
  );
};

export default Profile;