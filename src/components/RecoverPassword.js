import React, { Component } from 'react';
import axios from 'axios';
import './styles/RecoverPassword.css';

class RecoverPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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

    const { email } = this.state;

    // Enviar a solicitação HTTP de recuperação de senha
    axios.post('/api/users/recover-password', {
      email,
    })
      .then((response) => {
        if (response.status === 200) {
          // Exibir uma mensagem de sucesso
          alert('Uma mensagem foi enviada para o seu e-mail com instruções para redefinir sua senha.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Recuperação de senha</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default RecoverPassword;