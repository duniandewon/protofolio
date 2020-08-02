import React, { useContext, useEffect } from 'react';
import Modal from 'react-modal';

import { projectsContext } from '../context/projects/ProjectState';
import { uiContext } from '../context/UI/UiState';

Modal.setAppElement('#root');

export default ({ children }) => {
  const { modal, toggleUI } = useContext(uiContext);
  const { clearCurrent } = useContext(projectsContext);

  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      isOpen={modal}
      closeTimeoutMS={200}
      className='modal'
      onRequestClose={() => toggleUI('modal')}
      onAfterClose={() => clearCurrent()}
    >
      {children}
    </Modal>
  );
};
