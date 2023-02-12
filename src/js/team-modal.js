import { closeModalTeamBtn, modalTeam } from './refs';

function toggleTeamModal(e) {
  document.body.classList.toggle('team-modal-open');
  modalTeam.classList.toggle('is-hidden');

  if (!modalTeam.classList.contains('is-hidden')) {
    document.addEventListener('keydown', keyPressEscCloseTeamModal);
    closeModalTeamBtn.addEventListener('click', toggleTeamModal);
    modalTeam.addEventListener('click', clickBackdropCloseTeamModal);
  }

  if (modalTeam.classList.contains('is-hidden')) {
    document.removeEventListener('keydown', keyPressEscCloseTeamModal);
    closeModalTeamBtn.removeEventListener('click', toggleTeamModal);
    modalTeam.removeEventListener('click', clickBackdropCloseTeamModal);
  }
}

function clickBackdropCloseTeamModal(e) {
  if (e.target === e.currentTarget) {
    toggleTeamModal();
  }
}

function keyPressEscCloseTeamModal(e) {
  const ESC_KEY_CODE = `Escape`;

  if (e.code === ESC_KEY_CODE) {
    toggleTeamModal();
  }
}

export { toggleTeamModal, clickBackdropCloseTeamModal, keyPressEscCloseTeamModal };