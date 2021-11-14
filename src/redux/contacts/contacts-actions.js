import { createAction } from '@reduxjs/toolkit'

export const addNewContact = createAction('contacts/ADD')

export const deleteContact = createAction('contacts/DELETE')

export const changeFilter = createAction('contacts/CHANGE_FILTER')
