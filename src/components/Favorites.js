import React from 'react'
import { connect } from 'react-redux'
import { Image, Card, Icon, Button } from 'semantic-ui-react'
import '../stylesheets/Home_Fav.css'
import NavBar from './NavBar'


class Favorites extends React.Component {

   componentWillMount() {
      fetch('http://localhost:3000/api/v1/cars')
         .then(res => res.json())
         .then(data => {
            let favCars = data.filter(car => car.favorite === true)
            this.props.favToStore(favCars)
         })
   }


   image() {
      return 'https://i1.wp.com/empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg?ssl=1'
   }

   removeCar = (car) => {
      fetch(`http://localhost:3000/api/v1/cars/${car.id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            favorite: false
         })
      })
      document.location.reload(true)
   }


   favCarCards = () => {
      const favsArr = this.props.favCars
      return favsArr.map(car => {
         return <Card key={car.id} >
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
               <Button circular icon size='big' color='gray' onClick={() => this.removeCar(car)}>
                  <Icon name='trash' />
                  Remove Favorite
            </Button>
            </Card.Content>
         </Card >
      })
   }



   render() {
      const { favCars } = this.props
      return (
         <div id='favPage'>
            <NavBar />
            <img id='banner' src={this.image()} alt='' />
            <h2>{localStorage.username}'s Favorites!</h2>
            <Card.Group itemsPerRow={4} id='cardCont'>
               {this.favCarCards()}
            </Card.Group>

         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      favCars: state.cars.favs
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      carsToStore: (data) => dispatch({ type: 'CARS', data }),
      favToStore: (car) => dispatch({ type: 'FAVS', car })
      // removeCar: (car) => dispatch({ type: 'RMV', car })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


