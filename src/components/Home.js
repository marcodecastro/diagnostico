import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src="https://example.com/image.png" alt="Imagem de fundo" />
        <p>Bem-vindo à nossa página inicial!</p>
        <p>
          Este é um projeto de exemplo para aprender React.
        </p>
        <a href="/register">Cadastrar</a>
        <a href="/login">Login</a>
      </div>
    );
  }
}

export default Home;