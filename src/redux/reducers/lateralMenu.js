const INITAIL_STATE = {
  visible: false
}

const ACTIONS = {
  SET_VISIBILITY: '@lateralMenu/setVisibility'
}

const lateralMenu = (state = INITAIL_STATE, action) => {
  switch (action.type) {
  case ACTIONS.SET_VISIBILITY: {
    return action.payload
  }
  default: {
    return state
  }
  }
}

export const showLateralMenuDispatcher = (status) => {
  return {
    type: ACTIONS.SET_VISIBILITY,
    payload: {
      visible: status
    }
  }
}

export default lateralMenu
