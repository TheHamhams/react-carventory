import React from 'react'
import { Helmet } from 'react-helmet'
import { CarDataTable } from '../DataTable'
import { CarForm } from '../CarForm'

export const Cars = () => {
  return (
    <>
    <Helmet> 
      <title>Carventory - Cars</title>
    </Helmet> 
    <div>
      <CarDataTable />
    </div>
    <div>
      <CarForm />
    </div>
    </>
  )
}
