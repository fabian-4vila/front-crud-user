
const UserCard = ({user, deleteUser, setInfoUpdate, openEditModal}) => {

    const handleDelete = () => {
      deleteUser('/users', user.id)
    }

    const handleEdit = () => {
      openEditModal(true)
      setInfoUpdate(user)
    }

  return (
    <article className="card">
      <h3 className="card__title">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <ul className="card__list">
        <li className="card__item">
          <span className="card__label">Email: </span>
          <span className="card__value">{user.email}</span></li>
        <li className="card__item">
          <span className="card__label">🎁 Birthday: </span>
          <span className="card__value">{user.birthday}</span></li>
      </ul>
      <div className="btn__card-container">
      <button className="card__btn" onClick={handleDelete}>❌ Delete </button>
      <button className="card__btn" onClick={handleEdit}>✍ Edit </button>
      </div>
    </article>
  )
}

export default UserCard
