import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useDispatch, useSelector } from 'react-redux'

import { showLateralMenuDispatcher } from './redux/reducers/lateralMenu'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  }
}))

function ElevationScroll (props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
}

function Header (props) {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.lateralMenu.visible)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: visible
          })}
        >
          <Toolbar className={classes.header}>
            <IconButton
              edge='start'
              className={clsx(classes.menuButton, {
                [classes.hide]: visible
              })}
              color='inherit'
              aria-label='menu'
              onClick={() => dispatch(showLateralMenuDispatcher(true))}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>My League</Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default Header
