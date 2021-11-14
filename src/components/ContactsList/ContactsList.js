import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../ContactItem/ContactItem'
import { deleteContact } from '../../redux/contacts/contacts-actions'
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors'

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts)
  const dispatch = useDispatch()
  const handleDeleteContact = (name) => dispatch(deleteContact(name))

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem contact={contact} deleteContact={handleDeleteContact} />
      ))}
    </ul>
  )
}
