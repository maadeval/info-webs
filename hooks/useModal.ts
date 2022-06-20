import { ModalContext } from 'context/ModalContext'
import { useContext } from 'react'

export const useModal = () => {
  const { showModal, setShowModal } = useContext(ModalContext)
  return { showModal, setShowModal }
}
