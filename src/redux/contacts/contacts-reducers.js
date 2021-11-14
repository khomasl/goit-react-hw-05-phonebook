import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import { addNewContact, deleteContact, changeFilter } from './contacts-actions'

// const preloadedState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// }

const findContact = (contacts, name) => {
  const normName = name.toLowerCase()
  return contacts.find((contact) => contact.name.toLowerCase() === normName)
}

const itemsReducer = createReducer([], {
  [addNewContact]: (state, { payload }) =>
    !findContact(state, payload.name)
      ? [...state, payload]
      : alert(`${payload} is already in contact`),

  [deleteContact]: (state, { payload }) => {
    const id = state.indexOf(findContact(state, payload))
    return [...state.slice(0, id), ...state.slice(id + 1)]
  },
})

const filterReducer = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
})

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})

export default contactsReducer
