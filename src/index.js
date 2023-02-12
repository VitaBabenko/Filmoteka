import { headerForm, clicksMovie, closeModalMovieBtn, openModalMovie, modalGallery, openModalTeamBtn } from './js/refs';
import { onHeaderFormClick } from './js/searchByKeyWord';
import { oneToggle, closeBtn, clickBackdropCloseModal, onBtnBack } from './js/modal-movie';
import { onBtnTrailer } from './js/trailer';
import { toggleTeamModal } from './js/team-modal';
import { onClickModal } from './js/modal-btns-library';

headerForm.addEventListener('submit', onHeaderFormClick);

clicksMovie.addEventListener('click', oneToggle);
closeModalMovieBtn.addEventListener('click', closeBtn);
openModalMovie.addEventListener('click', clickBackdropCloseModal);
modalGallery.addEventListener('click', onBtnBack);

openModalMovie.addEventListener('click', onClickModal);

modalGallery.addEventListener('click', onBtnTrailer);

openModalTeamBtn.addEventListener('click', toggleTeamModal);