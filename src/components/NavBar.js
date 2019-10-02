import React from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



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
               <Menu.Item name='logout' position='right' onClick={this.logout} />
            </Menu.Menu>
         </Menu>
      )
   }
}


const mapStateToProps = (state) => {
   return {
      cars: state.cars.allCars
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      filteredUp: (arr) => dispatch({ type: 'FILTERED', arr })
   }
}



const NavBar1 = withRouter(NavBar)
export default connect(mapStateToProps, mapDispatchToProps)(NavBar1)