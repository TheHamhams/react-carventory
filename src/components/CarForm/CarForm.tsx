import React, {useState} from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import {useForm} from 'react-hook-form'
import {chooseMake, chooseModel, chooseYear, chooseColor, chooseAccident} from '../../redux/slices/RootSlice'
import {Input, SBox} from '../SharedComponents/Input'
import { Button } from '@material-ui/core'
import { car_calls } from '../../api'
import {Container, Row, Col} from 'react-bootstrap'

interface CarFormProps {
  id?: string
  data?: {}
}


interface CarState {
  make: string
  model: string
  year: number
  color: string
  accident_on_record: boolean
}

export const CarForm = (props: CarFormProps) => {

  const dispatch = useDispatch()
  const store = useStore()
  const name = useSelector<CarState>(state => state.make)
  const {register, handleSubmit} = useForm({})


  const onSubmit = (data: any, event: any) => {

    if(props.id) {
      car_calls.update(props.id!, data)
      setTimeout( () => {window.location.reload()}, 1000)
      event.target.reset()
    } else {
      dispatch(chooseMake(data.make))
      dispatch(chooseModel(data.model))
      dispatch(chooseYear(data.year))
      dispatch(chooseColor(data.color))
      dispatch(chooseAccident(data.accident_on_record))
      console.log(store.getState())
      car_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000)
    }
  }

  return (
    <div>

      <Container className='border'>
      <h2 className='text-center'>Add a New Car</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make">Make</label>
          <Input {...register('make')} name="make" placeholder='Make'/>
        </div>
        <div>
          <label htmlFor='model'>Model</label>
          <Input {...register('model')} name="model" placeholder='Model' />
        </div>
        <div>
          <label htmlFor='year'>Year</label>
          <Input {...register('year')} name="year" placeholder='Year' />
        </div>
        <div>
          <label htmlFor='color'>Color</label>
          <Input {...register('color')} name="color" placeholder='Color' />
        </div>
        <div>
          <SBox {...register('accident_on_record')} name="model"/>
        </div>
        <Button type="submit" className='border'>Submit</Button>
      </form>
      </Container>
    </div>
 
  )
}
