import React, { Component } from 'react';
import axios from 'axios';


class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    // Obter os detalhes do usuário
    const id = this.props.match.params.id;
    axios.get('/users/' + id)
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

  render() {
    const { user } = this.state;

    return (
      <div>
        <h1>Detalhes do usuário</h1>
        <div>
          <h2>Nome</h2>
          <p>{user.name}</p>
        </div>
        <div>
          <h2>E-mail</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <h2>Data de criação</h2>
          <p>{user.createdAt}</p>
        </div>
        <div>
          <h2>Última atualização</h2>
          <p>{user.updatedAt}</p>
        </div>
        {this.state.editButton && (
          <button onClick={this.handleEdit}>Editar</button>
        )}
      </div>
    );
  }

  handleEdit = () => {
    // Redirecionar para a página de edição do usuário
    this.props.history.push('/users/edit/' + this.state.user.id);
  };
}

export default UserDetails;