import React from 'react'
import { Input, Menu } from 'semantic-ui-react'


class NavBar extends React.Component {
   render() {
      return (
         <Menu size='massive' color='black' inverted>
            <Menu.Item name='home' />
            <Menu.Item name='favorites' />
            <Menu.Menu position='right'>
               <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
               </Menu.Item>
               <Menu.Item name='logout' position='right' onClick={this.handleItemClick} />
            </Menu.Menu>
         </Menu>
      )
   }
}

export default NavBar