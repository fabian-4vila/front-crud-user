
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import Modal from './components/Modal'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const baseUrl = 'https://users-backend-dev-qphj.3.us-1.fl0.io'
  const [users, getUsers, createUser, deleteUser, updateUser]= useFetch(baseUrl)
 
  useEffect(() => {
    getUsers('/users')
  }, [isEditing])

  const openModal = (isEdit) => {
    if (isEdit) {
      setIsEditing(true)
      setIsEditModalOpen(true)
    } else {
      setIsEditing(true)
      setIsCreateModalOpen(true)
      setInfoUpdate(null)
    }
  }

  const closeModal = () => {
    setIsCreateModalOpen(false);
    setIsEditModalOpen(false);
    setIsEditing(false);
  }

  return (
    <div className='page'>
      <h1 className='page__title'>USUARIOS</h1>
      <button className='page__btn' onClick={() => openModal()}>➕ Create new user</button>
      <Modal isOpen={isCreateModalOpen || isEditModalOpen} onClose={closeModal}>
        <FormUser
          createUser={createUser}
          infoUpdate={infoUpdate}
          updateUser={updateUser}
          setInfoUpdate={setInfoUpdate}
        />
      </Modal>
      <div className='card__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              openEditModal={() => openModal(true)}
            />
          ))
        }
      </div>
    </div>
  )
  
}

export default App
