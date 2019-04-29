import React from 'react'
import NavBar1 from './NavBar'
import '../stylesheets/Home_Fav.css'
// import { withRouter } from 'react-router-dom'
import { Image, Card, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'





class Home extends React.Component {


   componentWillMount() {
      fetch('http://localhost:3000/api/v1/cars')
         .then(res => res.json())
         .then(data => this.props.carsToStore(data))

      fetch('http://localhost:3000/api/v1/cars')
         .then(res => res.json())
         .then(data => {
            let car = data.filter(car => car.favorite === true)
            this.props.favToStore(car)
         })
   }

   image() {
      return 'https://i1.wp.com/empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg?ssl=1'
   }


   carCards = () => {
      const filtered = this.props.filtered
      const allCars = this.props.cars
      return allCars.map(car => {
         return <Card key={car.id}>
            <Image src={car.image} />
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
               <Button circular icon size='big' color='red' onClick={() => this.props.favToStore(car)}>
                  <Icon name='heart' />
                  Favorite
                  </Button>
            </Card.Content>
         </Card>
      })
   }

   render() {
      const { cars } = this.props
      return (
         <div id='homePage'>
            <NavBar1 />
            <img id='banner' src={this.image()} alt='' />
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
      favToStore: (car) => dispatch({ type: 'FAVS', car })
   }
}

const mapStateToProps = (state) => {
   return {
      cars: state.cars.allCars,
      filtered: state.cars.filtered
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)