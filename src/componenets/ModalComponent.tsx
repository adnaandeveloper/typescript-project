import { createPortal } from 'react-dom'

const Modal = () => {
  return createPortal(
    <div>Modal</div>,
    document.getElementById('modal') as HTMLElement
  )
}

export default Modal
