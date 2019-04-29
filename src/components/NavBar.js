import React from 'react'
import { Menu, Search } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class NavBar extends React.Component {

   // state = {
   //    searchTerm: '',
   //    filtered: null
   // }

   logout = () => {
      localStorage.clear()
      this.props.history.push('/login')
   }

   // search feature future idea
   // handleSearch = (e, { value }) => {
   //    this.setState({
   //       searchTerm: value
   //    })
   //    let filtered = this.state.filtered
   //    let searchTerm = this.state.searchTerm
   //    let newArr = filtered.filter(car => car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.modelMake.toLowerCase().includes(searchTerm.toLowerCase()) || car.year.toLowerCase().includes(searchTerm.toLowerCase()) || car.color.toLowerCase().includes(searchTerm.toLowerCase()) || car.price.toLowerCase().includes(searchTerm.toLowerCase()))
   //    this.props.filteredUp(newArr)
   // }


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