import { clicksMovie, closeModalMovieBtn, openModalMovie, modalGallery, openModalTeamBtn, btnWatched, btnQueue, paginationDiv } from './js/refs';
import { oneToggle, closeBtn, clickBackdropCloseModal, onBtnBack } from './js/modal-movie';
import { onBtnTrailer } from './js/trailer';
import { onClickModal } from './js/modal-btns-library';
import { toggleTeamModal } from './js/team-modal';
import { onBtnWatchedClick, onBtnQueueClick } from './js/library-header-btns';
import { onLibrPaginationClick } from './js/libraryMarkup';

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

clicksMovie.addEventListener('click', oneToggle);
closeModalMovieBtn.addEventListener('click', closeBtn);
openModalMovie.addEventListener('click', clickBackdropCloseModal);
modalGallery.addEventListener('click', onBtnBack);

openModalMovie.addEventListener('click', onClickModal);

modalGallery.addEventListener('click', onBtnTrailer);

openModalTeamBtn.addEventListener('click', toggleTeamModal);

paginationDiv.addEventListener('click', onLibrPaginationClick);