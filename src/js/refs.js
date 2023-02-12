const header = document.querySelector('.js-header');
const homeBtn = document.querySelector('.js-home-btn');
const myLibraryBtn = document.querySelector('.js-my-library-btn');
const headerForm = document.querySelector('.js-header-form');
const errorSearch = document.querySelector('.js-error-search');
const errorText = document.querySelector('.js-error-text');

const headerBtns = document.querySelector('.js-header-btns');
const btnWatched = document.querySelector('.js-btn-watched');
const btnQueue = document.querySelector('.js-btn-queue');
const libraryData = document.querySelector('.js-library-data');

const guard = document.querySelector('.js-guard');
const buttonTop = document.querySelector('.js-button-top');
const movieContainer = document.querySelector('.js-movies-list');
const clicksMovie = document.querySelector('.gallery__list');
const paginationDiv = document.querySelector('.js-pagination');
const paginationList = document.querySelector('.pagination__list');

const openModalMovie = document.querySelector('[data-movie-modal]');
const closeModalMovieBtn = document.querySelector('[data-movie-modal-close]');
const modalGallery = document.querySelector('.movie_modal_gallery');

const openModalTeamBtn = document.querySelector('[data-team-modal-open]');
const closeModalTeamBtn = document.querySelector('[data-team-modal-close]');
const modalTeam = document.querySelector('[data-team-modal]');

export {
    header, homeBtn, myLibraryBtn, headerForm, errorSearch, errorText,
    headerBtns, btnWatched, btnQueue, libraryData,
    guard, buttonTop, movieContainer, clicksMovie, paginationDiv, paginationList,
    openModalMovie, closeModalMovieBtn, modalGallery,
    openModalTeamBtn, closeModalTeamBtn, modalTeam
}