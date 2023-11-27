import React, { Component } from 'react';
import axios from 'axios';

class EditUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    // Obter os detalhes do usuário
    const id = this.props.match.params.id;
    axios.get('/api/users/' + id)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            user: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Atualizar os dados do usuário
    const data = this.state;
    axios.put('/api/users/' + data.id, data)
      .then((response) => {
        if (response.status === 200) {
          // Exibir uma mensagem de sucesso
          alert('Os dados do usuário foram atualizados com sucesso.');
          this.props.history.push('/users');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <h1>Editar dados de usuário</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={user.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={user.email}
            onChange={this.handleChange}
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default EditUserData;