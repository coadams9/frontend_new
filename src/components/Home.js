import React from 'react'
import NavBar1 from './NavBar'
import '../stylesheets/Home_Fav.css'
import { Image, Card, Icon, Button, Search } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home extends React.Component {

   state = {
      searchTerm: ''
   }


   componentDidMount() {
      fetch('http://localhost:3000/api/v1/cars')
         .then(res => res.json())
         .then(data => {
            let notfavorited = data.filter(car => car.favorite === false)
            this.props.carsToStore(notfavorited)
         })
   }

   image() {
      return 'https://i1.wp.com/empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg?ssl=1'
   }

   handleSearch = (event) => {
      let searchTerm = event.target.value
      this.setState({
         searchTerm: searchTerm
      })
   }

   handleClick = (e, chosenCar) => {
      this.props.favToStore(chosenCar)
      const id = this.props.cars.indexOf(chosenCar)
      this.props.updateFav(id, true)
   }


   carCards = () => {
      const allCars = this.props.cars
      const { searchTerm } = this.state
      let filtered = allCars.filter(car => car.color.toLowerCase().includes(searchTerm.toLowerCase()) || car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.modelMake.toLowerCase().includes(searchTerm.toLowerCase()) || car.price.toLowerCase().includes(searchTerm.toLowerCase()) || car.year.toLowerCase().includes(searchTerm.toLowerCase()))


      return filtered.map(car => {
         return <Card key={car.id}>
            <Image src={car.image} alt='Your Pic could not be Loaded. Please try another picture. :)' />
            <Card.Content>
               <Card.Header>{car.make}</Card.Header>
               <p>Price: {car.price}</p>
               <p>Model: {car.modelMake}</p>
               <p>Year: {car.year}</p>
               <p>Color: {car.color}</p>
               <p>Description: {car.description}</p>
            </Card.Content>
            <Card.Content>
               <p>Owner: {car.users[0].username}</p>
               <p>Contact: {car.users[0].phoneNum}</p>
               {car.favorite !== true ?
                  <Button circular icon size='big' color='red' onClick={(e) => this.handleClick(e, car)}>
                     <Icon name='heart' />
                     Favorite
                  </Button>
                  :
                  <Button circular icon size='big' color='grey'>
                     <Icon name='heart' />
                     In Your Favs!
                     <Link to='/favorites'>View Favs</Link>
                  </Button>
               }
            </Card.Content>
         </Card>
      })
   }

   render() {
      console.log('rendered')
      const { cars } = this.props
      return (
         <div id='homePage'>
            <NavBar1 />
            <img id='banner' src={this.image()} alt='' />
            <h3>All Available Cars</h3>
            <Search onSearchChange={this.handleSearch} showNoResults={false} />
            <Card.Group itemsPerRow={4} id='cardCont'>
               {cars ? this.carCards() : null}
            </Card.Group>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      carsToStore: (data) => dispatch({ type: 'CARS', data }),
      favToStore: (car) => dispatch({ type: 'FAVS', car }),
      updateFav: (id, bool) => dispatch({ type: 'UPDATEFAV', id, bool })
   }
}

const mapStateToProps = (state) => {
   return {
      cars: state.cars.allCars
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)