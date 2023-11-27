import React, { Component } from 'react';
import axios from 'axios';
import './styles/Register.css';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;

    // Enviar a solicitação HTTP de cadastro
    axios.post('http://localhost:4000/users', {
      name,
      email,
      password,
    })
      .then((response) => {
        if (response.status === 201) {
          // Redirecionar para a página de login
          this.props.history.push('/login');
        }
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
            name="name"
            placeholder="Nome"
            value={this.state.name}
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
            name="password"
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