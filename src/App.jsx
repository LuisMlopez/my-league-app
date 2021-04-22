import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import './App.css'
import Header from './Header'
import LateralMenu from './LateralMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  }
}))

function App () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <LateralMenu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default App
