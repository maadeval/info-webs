import React, { useRef } from "react"
import { useModal } from "hooks/useModal"

const Modal = () => {
  const { setShowModal } = useModal()
  const modalBody = useRef<HTMLDivElement>(null)

  const handleHideModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowModal(false)
  }

  return <div onClickCapture={handleHideModal} className="z-0 w-full h-screen bg-white/50 flex items-center justify-center absolute top-0 left-0">
    <section ref={modalBody} className="max-w-[320px] w-full bg-white rounded-2xl border h-96 p-4 z-50">
      <h3>Empezar</h3>
    </section>
  </div>
}

export default Modal