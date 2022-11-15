import React from 'react'
import PropTypes from 'prop-types'
import {Wrapper, Label, Input} from 'components/FormField/FormField.styles'

const FormField = ({label, name, id, type='text', error, ...props}) => {
  return (
    <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} id={id} type={type} {...props}/>
    <p>{error}</p>
    </Wrapper> 
  )
}

FormField.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default FormField