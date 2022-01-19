import { useState } from 'react';
import PropTypes from 'prop-types';
// Styles
import './FormInput.css';

const FormInput = ({ addItem }) => {
    const [value, setValue] = useState('');

    const onHandleInput = event => setValue(event.target.value);
    
    const onHandleSubmit = (event) => {
        event.preventDefault(),
        addItem(value)
    };

    return (
        <form 
            className='form'
            onSubmit={event => onHandleSubmit(event) }>
            <input 
                className='form__input'
                type='text' 
                placeholder='Add an item'
                value={value}
                onChange={(event) => onHandleInput(event)}
                />
            <input 
                className='form__submit button' 
                type='submit' 
                value='Add todo' />
        </form>
    );
};

FormInput.prototypes = {
    addItem: PropTypes.func
}

export default FormInput;
