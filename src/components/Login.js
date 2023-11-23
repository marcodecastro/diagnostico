import React, { Component } from "react";
import axios from "axios";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    // Envia os dados para o backend
    axios
      .post("/api/v1/users/login", data)
      .then((response) => {
        if (response.status === 200) {
          // O login foi bem-sucedido
          // Redireciona o usuário para a página principal
          window.location.href = "/";
        } else {
          // O login falhou
          // Mostra uma mensagem de erro
          alert("Usuário ou senha inválidos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Entrar</button>
        </form>
        <a href="/register">Cadastrar</a>
      </div>
    );
  }
}

export default Login;