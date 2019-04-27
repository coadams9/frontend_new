import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'



class NavBar extends React.Component {

   logout = () => {
      localStorage.clear()
      this.props.history.push('/login')
   }


   render() {
      return (
         <Menu size='massive' color='black' inverted>
            <Menu.Item name='home' as={Link} to='/home' />
            <Menu.Item name='favorites' as={Link} to='/favorites' />
            <Menu.Menu position='right'>
               <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
               </Menu.Item>
               <Menu.Item name='logout' position='right' onClick={this.logout} />
            </Menu.Menu>
         </Menu>
      )
   }
}

export default withRouter(NavBar)