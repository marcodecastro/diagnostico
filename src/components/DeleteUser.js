import React, { Component } from 'react';
import axios from 'axios';


class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: false,
    };
  }

  handleConfirm = () => {
    this.setState({
      confirmed: true,
    });
  };

  handleCancel = () => {
    this.setState({
      confirmed: false,
    });
  };

  handleDelete = () => {
    // Excluir o usuário do banco de dados
    const id = this.props.match.params.id;
    axios.delete('/api/users/' + id)
      .then((response) => {
        if (response.status === 200) {
          // Redirecionar para a página de listagem de usuários
          this.props.history.push('/users');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { confirmed } = this.state;

    return (
      <div>
        <h1>Excluir usuário</h1>
        <p>Tem certeza de que deseja excluir o usuário?</p>
        {confirmed ? (
          <button onClick={this.props.onDelete}>Excluir</button>
        ) : (
          <div>
            <button onClick={this.handleConfirm}>Confirmar</button>
            <button onClick={this.handleCancel}>Cancelar</button>
          </div>
        )}
      </div>
    );
  }
}

export default DeleteUser;