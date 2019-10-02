import React from 'react'
import '../stylesheets/LoginAndSignUp.css';
import { Button, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getAuthToken, newUser } from '../actions/backend'
import { withRouter } from 'react-router-dom'





class SignUp extends React.Component {

   state = {
      username: '',
      password: '',
      passwordConfirm: '',
      phoneNum: ''
   }

   getUsername() {
      return (e) => this.setState({ username: e.target.value });
   }

   getUserPassword() {
      return (e) => this.setState({ password: e.target.value });
   }

   getPasswordConfirm() {
      return (e) => this.setState({ passwordConfirm: e.target.value });
   }

   getPhoneNum() {
      return (e) => this.setState({ phoneNum: e.target.value });
   }

   loginUser() {
      getAuthToken(this.state).then(payload => {
         localStorage.setItem('token', payload.token);
         localStorage.setItem('username', payload.user);
         localStorage.setItem('userId', payload.userId);
         if (localStorage.getItem('token') && localStorage.getItem('username') !== 'undefined') {
            this.props.history.push('/home');
         }
         else {
            alert('Please Try Again');
         }
      });
   }


   handleSubmit = (event, { value }) => {
      event.preventDefault()
      const { username, password, passwordConfirm, phoneNum } = this.state
      if (password === passwordConfirm) {
         newUser(username, password, phoneNum)
         this.loginUser()
         this.props.history.push('/home')
      } else {
         alert('Your passwords...equal, they are not..')
      }
   }


   render() {

      const { username, password, passwordConfirm, phoneNum } = this.state

      return (
         <div id='signUpContainer'>
            <Form onSubmit={this.handleSubmit}>
               <h1 id='title'>cBay</h1>
               <Form.Field>
                  <label>UserName</label>
                  <input id='input' placeholder='Enter UserName' value={username}
                     onChange={this.getUsername()} />
               </Form.Field>
               <Form.Field>
                  <label>Phone Number</label>
                  <input id='input' placeholder='Enter Number' value={phoneNum}
                     onChange={this.getPhoneNum()} />
               </Form.Field>
               <Form.Field>
                  <label>Password</label>
                  <input id='input' placeholder='Enter Password' type='password' value={password}
                     onChange={this.getUserPassword()} />
               </Form.Field>
               <Form.Field>
                  <label>Password Confirmation</label>
                  <input id='input' placeholder='Enter Password' type='password' value={passwordConfirm}
                     onChange={this.getPasswordConfirm()} />
               </Form.Field>
               <Button inverted color='red'>SignUp & Login</Button>
               <Button inverted color='red' as={Link} to='/login'> To Login</Button>
            </Form>
         </div>
      )
   }


}

export default withRouter(SignUp)