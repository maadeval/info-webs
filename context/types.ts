import { Dispatch, SetStateAction } from 'react'

export interface ModalContextType {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export interface ModalProviderProps {
  children: JSX.Element | JSX.Element[]
}
