import React, { Component } from "react";
import axios from "axios";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
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
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
    };

    // Envia os dados para o backend
    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Cadastro</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={this.state.nome}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default Register;