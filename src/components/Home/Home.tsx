import React from 'react'
import { Helmet } from 'react-helmet'
import Car from '../../assets/images/orange_muscle.jpg'
import { makeStyles } from '@material-ui/core'
import { Container } from 'react-bootstrap'


const useStyles = makeStyles({
  backrdoundLogo: {
    content: `url(${Car})`,
    maxWidth: '100%'
  },
  gray: {
    backgroundColor: 'lightGray'
  }
})

export const Home = () => {

  const classes = useStyles()

  return (
    <div className={`${classes.gray}`}>
      <Helmet> 
        <title>Carventory - Home</title>
      </Helmet> 
      <Container>
      <h1 className={`text-center py-2`}>Welcome to Carventory!</h1>
      <h2 className="text-center pb-5">Find hot local cars in your area!</h2>
      <div className={classes.backrdoundLogo} />
      </Container>
    </div>
  )
}
