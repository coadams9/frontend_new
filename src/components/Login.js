import React from 'react'
import '../stylesheets/LoginAndSignUp.css';
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getAuthToken } from '../actions/backend'
import { withRouter } from 'react-router-dom'





class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    getUsername() {
        return (e) => this.setState({ username: e.target.value });
    }

    getUserPassword() {
        return (e) => this.setState({ password: e.target.value });
    }

    handleSubmit = (event, { value }) => {
        event.preventDefault()
        getAuthToken(this.state).then(payload => {
            // debugger
            localStorage.setItem('token', payload.token)
            localStorage.setItem('username', payload.username)
            if (localStorage.getItem('token') && localStorage.getItem('username') !== 'undefined') {
                this.props.history.push('/home')
            } else {
                alert('Please Try Again')
            }
        })
    }

    render() {
        const { username, password } = this.state
        return (
            <div id='loginContainer'>
                <Form onSubmit={this.handleSubmit}>
                    <h1 id='title'>cBay</h1>
                    <Form.Field>
                        <label>UserName</label>
                        <input id='input' placeholder='Enter UserName' value={username}
                            onChange={this.getUsername()} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input id='input' placeholder='Enter Password' value={password}
                            onChange={this.getUserPassword()} />
                    </Form.Field>
                    <Button inverted color='red' type='submit'>Login</Button>
                    <Button inverted color='red' as={Link} to='/signUp'>SignUp</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login) 