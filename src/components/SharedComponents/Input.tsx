import React, {forwardRef} from 'react'
import { TextField, Switch, FormControlLabel } from '@material-ui/core'
import { editableInputTypes } from '@testing-library/user-event/dist/utils'

interface inputType{
    name: string,
    placeholder: string
}

interface switchType{
  name: string
}

export const Input = forwardRef((props: inputType, ref) => {
  return (
        <TextField variant='outlined' margin='normal' inputRef={ref} fullWidth type='text' {...props}>
            
        </TextField>
  )
})

export const SBox = forwardRef((props: switchType, ref) => {
    return (
    <FormControlLabel control={(<Switch inputRef={ref} {...props} />)} label="Accident on Record?" />
    )
})
