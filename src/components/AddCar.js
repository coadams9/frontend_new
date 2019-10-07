import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import '../stylesheets/addCar.css'
import NavBar1 from './NavBar'




const AddCar = (props) => {

    const [state, setState] = useState({
        make: '',
        modelMake: '',
        year: '',
        color: '',
        image: '',
        price: '',
        description: '',
        favorite: false
    })

    const [errorState, setErrorState] = useState({
        makeError: '',
        modelError: '',
        yearError: '',
        colorError: '',
        imageError: '',
        priceError: '',
        descriptionError: ''
    })

    const validate = () => {
        // debugger
        let isError = false
        const errors = {
            makeError: '',
            modelError: '',
            yearError: '',
            colorError: '',
            imageError: '',
            priceError: '',
            descriptionError: ''
        }

        if (!state.make) {
            isError = true
            errors.makeError = 'Please enter Car Make'
        }
        if (!state.modelMake) {
            isError = true
            errors.modelError = 'Please enter Car Model'
        }
        if (!state.year) {
            isError = true
            errors.yearError = 'Please enter Car Year'
        }
        if (!state.color) {
            isError = true
            errors.colorError = 'Please enter Car Color'
        }
        if (!state.image) {
            isError = true
            errors.imageError = 'Please enter Car Image URL'
        }
        if (!state.price) {
            isError = true
            errors.priceError = 'Please enter Car Price'
        }
        if (!state.description) {
            isError = true
            errors.descriptionError = 'Please enter Car Description'
        }

        setErrorState({ ...errorState, ...errors })

        return isError
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const err = validate()
        if (!err) {
            fetch('https://cbaybackend.herokuapp.com//cars', {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Token': localStorage.getItem('token')
                },
                method: 'POST',
                body: JSON.stringify(state)
            })
            alert('Your car has been added successfully! Redirecting to Home Page!')
            props.history.push('/home')
        }
    }


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }


    const { make, modelMake, year, color, image, price, description } = state

    return (
        <div>
            <NavBar1 />
            <Form onSubmit={handleSubmit} id='addCarForm' inverted={true} >
                <Form.Input id='input' name='make' fluid label='Car Make' onChange={handleChange} value={make} placeholder='Make' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.makeError}</div>
                <Form.Input id='input' name='modelMake' fluid label='Car Model' onChange={handleChange} value={modelMake} placeholder='Model' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.modelError}</div>
                <Form.Input id='input' name='year' type='number' fluid label='Car Year' onChange={handleChange} value={year} placeholder='Year' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.yearError}</div>
                <Form.Input id='input' name='color' fluid label='Car Color' onChange={handleChange} value={color} placeholder='Color' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.colorError}</div>
                <Form.Input id='input' name='image' type='url' fluid label='Car Image' onChange={handleChange} value={image} placeholder='Please Enter URL' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.imageError}</div>
                <Form.Input id='input' name='price' fluid label='Car Price' onChange={handleChange} value={price} placeholder='Price' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.priceError}</div>
                <Form.TextArea label='Car Description' name='description' onChange={handleChange} value={description} placeholder='Tell us about your Car...' />
                <div style={{ color: 'red', background: 'white' }}>{errorState.descriptionError}</div>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>
    )
}


export default connect()(AddCar)