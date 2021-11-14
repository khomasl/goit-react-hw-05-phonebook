export const getItems = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter

export const getFilteredContacts = (state) => {
  const contacts = getItems(state)
  const filter = getFilter(state)

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter),
  )
}
