import React, { Component } from 'react';
import axios from 'axios';


class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // Obter a lista de usuários
    axios.get('/api/users')
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            users: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Listagem de usuários</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button>Editar</button>
                  <button>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListUsers;