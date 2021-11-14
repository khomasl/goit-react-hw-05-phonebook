import s from './ContactItem.module.css'

export default function ContactItem({ contact, deleteContact }) {
  const { id, name, number } = contact
  const handleClick = (e) => deleteContact(e.target.name)

  return (
    <>
      <li key={id} className={s.item}>
        <p className={s.itemName}>{name}</p>
        <p className={s.itemNumber}>{number}</p>
        <button
          className={s.btnDel}
          type="button"
          name={name}
          onClick={handleClick}
        >
          X
        </button>
      </li>
      <hr className={s.hr} />
    </>
  )
}
