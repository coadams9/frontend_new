import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import '../stylesheets/addCar.css'



class AddCar extends React.Component {

    // state = {
    //     make: 'Make',
    //     modelMake: 'Model',
    //     year: 'Year',
    //     color: 'Color',
    //     image: 'Please Post URL',
    //     price: 'Price',
    //     description: 'Tell others about your car...',
    //     favorite: false
    // }

    // handleSubmit = () => {
    //     event.preventDefault()
    //     fetch('localhost3000:/api/v1/cars', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Token': localStorage.getItem('token')
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(this.state)
    //     })
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { make, modelMake, year, color, image, price, description } = this.state
        return (
            <Form onSubmit={this.handleSubmit} id='addCarForm' inverted={true}>
                <Form.Input id='input' name='make' fluid label='Car Make' onChange={this.handleChange} value={make} />
                <Form.Input id='input' name='modelMake' fluid label='Car Model' onChange={this.handleChange} value={modelMake} />
                <Form.Input id='input' name='year' fluid label='Car Year' onChange={this.handleChange} value={year} />
                <Form.Input id='input' name='color' fluid label='Car Color' onChange={this.handleChange} value={color} />
                <Form.Input id='input' name='image' fluid label='Car Image' onChange={this.handleChange} value={image} />
                <Form.Input id='input' name='price' fluid label='Car Price' onChange={this.handleChange} value={price} />
                <Form.TextArea label='Car Description' name='description' onChange={this.handleChange} value={description} />
                <Form.Button>Submit</Form.Button>
            </Form>
        )
    }




}


export default connect()(AddCar)