import Title from "components/Title"
import Button from "components/Button"
import { useState } from "react"
import { useModal } from "hooks/useModal"

const Header = () => {
  const { setShowModal } = useModal()

  return <header className="w-full bg-white/40 backdrop-blur-lg border-b border-slate-100 fixed left-0 top-0">
    <div className="flex justify-center py-1 bg-purple-200 text-purple-600">Creado por Madeval</div>
    <div className="max-w-screen-lg flex justify-between mx-auto items-center py-4">
      {/* TODO: Redirigir dependiendo si el usuario esta logeado o no */}
      <Title />
      <Button onClick={() => setShowModal(true)}>Empezar</Button>
    </div>
  </header>
}

export default Header