import React from 'react'
import { connect } from 'react-redux'
import { Image, Card, Icon, Button } from 'semantic-ui-react'
import '../stylesheets/Home_Fav.css'
import NavBar1 from './NavBar'


class Favorites extends React.Component {


   image() {
      return 'https://i1.wp.com/empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg?ssl=1'
   }

   removeCar = (car) => {
      this.props.removeCar(car)
   }


   favCarCards = () => {
      const favsArr = this.props.favCars
      if (favsArr.length !== 0) {
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
                  <Button circular icon size='big' color='grey' onClick={() => this.removeCar(car)}>
                     <Icon name='trash' />
                     Remove Favorite
            </Button>
               </Card.Content>
            </Card >
         })
      } else {
         alert('No current Favs! Choose some!')
         this.props.history.push('/home')
      }
   }



   render() {
      return (
         <div id='favPage'>
            <NavBar1 />
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
      removeCar: (car) => dispatch({ type: 'RMVFAV', car })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)


