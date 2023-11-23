import React from "react";

const Settings = () => {
  return (
    <div>
      <h1>Configurações</h1>
      <p>
        Este é o componente de configurações. Ele permite ao técnico alterar suas configurações de conta.
      </p>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Nova senha" />
        <button type="submit">Salvar</button>
        <a href="#">Redefinir senha</a>
      </form>
    </div>
  );
};

export default Settings;