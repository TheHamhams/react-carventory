import React from 'react'
import { Helmet } from 'react-helmet'
import { CarDataTable } from '../DataTable'

export const Cars = () => {
  return (
    <>
    <Helmet> 
      <title>Carventory - Cars</title>
    </Helmet> 

    <CarDataTable />
    </>
  )
}
