import React, { Component } from 'react';
import {
  Button,
  FormControl,
  TextField,
  //Input,
  //InputLabel,
} from '@material-ui/core';
import axios from 'axios';

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit: ');
    console.log(this.state);

    axios
      .post('/api/auth/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        
        this.props.setUser(response.data);
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} autoComplete='on'>
          <FormControl>
            <TextField
              name='email'
              id='email'
              type='email'
              label='E-Mail-Adresse'
              variant='filled'
              onChange={this.handleChange}
              required
              autoComplete='current-email'
            />
          </FormControl>
          <FormControl>
            <TextField
              name='password'
              id='password'
              type='password'
              label='Passwort'
              variant='filled'
              onChange={this.handleChange}
              required
              autoComplete='current-password'
            />
          </FormControl>
          <Button size='large' color='inherit' type='submit'>
            Login
          </Button>
        </form>
      </>
    );
  }
}
