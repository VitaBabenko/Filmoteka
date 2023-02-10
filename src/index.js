
import { headerForm, errorSearch, buttonTop } from './js/refs';
import { onHeaderFormClick } from './js/searchByKeyWord';
import * as trailer from './js/trailer';

headerForm.addEventListener('submit', onHeaderFormClick);

import { oneToggle } from './js/modal-movie';
import { closeBtn } from './js/modal-movie';
import { keyPressEscCloseMovieModal } from './js/modal-movie';
import { clickBackdropCloseTeamModal } from './js/modal-movie';
import { renderMarkupModal } from './js/markupModal';
// // тестую роботу ApiService:
import ApiService from './js/apiService';
// import onChangeTheme from './js/theme-switch';

// theme-switch.js

// const apiservice = new ApiService();
// //популярні:

// // const service = new ApiService();
// // // //популярні:

// // service.fetchTrendFilms();
// //жанри:
// console.log(service.fetchGenres());

// //по ключовому слову:
// // service.query = 'cat';
// service.fetchFilmsByKeyWord();

import { getMovies } from './js/renderingGalleryMarkup';

/// ////////////footer-modal
import { openModalTeamBtn } from './js/refs';
import { toggleTeamModal } from './js/team-modal';

openModalTeamBtn.addEventListener('click', toggleTeamModal);
////////////// footer-modal

// feature/modal-btns-library
import { onClick } from './js/modal-btns-library';

// сетить жанри в локальне сховище
// import './js/getGenres';

// import { onBtnWatchedClick, onBtnQueueClick } from './js/libraryMarkup';
// console.log('onBtnWatchedClick: ', onBtnWatchedClick);

// import { closeBtn } from './js/modal-movie';
// console.log('closeBtn: ', closeBtn);
