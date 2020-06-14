import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const createModal = () => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  return modal;
};

const Modal = ({ children }) => {
  const modal = createModal();
  const renderTarget = document.querySelector('body');

  useEffect(() => {
    renderTarget.appendChild(modal);
    document.body.style = 'overflow: hidden';

    return () => {
      renderTarget.removeChild(modal);
      document.body.removeAttribute('style');
    };
  }, [children]);

  return createPortal(children, modal);
};

export default Modal;
