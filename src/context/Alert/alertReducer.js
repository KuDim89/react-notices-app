import {HIDE_ALERT, SHOW_ALERT} from "../types";

const hendlers = {
  [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
  [HIDE_ALERT]: state => ({...state, visible: false}),
  DEFAULT: state => state
}

export const alertReducer = (state, action) => {
  const handle = hendlers[action.type] || hendlers.DEFAULT
  return handle(state, action)
}