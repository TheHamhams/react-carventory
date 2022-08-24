import React, {useState, useEffect} from 'react'
import { car_calls } from '../api'

export const useCarGet = () => {
  const [carData, setData] = useState<[]>([])
  
  async function handleDataFetch() {
    const result = await car_calls.get()
    setData(result)
  }

  useEffect( () => {
    handleDataFetch()
  }, [])

  return {carData, getData:handleDataFetch}
}
