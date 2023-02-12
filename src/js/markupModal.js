import { findGenres, isEmptyGenres } from './findGenres';
import noPoster from '../images/no-poster.jpg';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

function renderMarkupModal(movies) {
  const { genre_ids } = movies;
  const imgUrl = movies.poster_path
    ? `${IMG_URL + movies.poster_path}`
    : noPoster;
  const parseGenres = JSON.parse(localStorage.getItem('genres'));
  const genersLocalStore = parseGenres.data.genres;
  let finalGenres = [];
  findGenres(genre_ids, genersLocalStore, finalGenres);
  isEmptyGenres(finalGenres);
  let watchedBtn = '';
  let queueBtn = '';

  try {
    const isInWatchedList = localStorage.getItem('watchedFilms');
    if (isInWatchedList) {
      if (isInWatchedList.length) {
        const isInArray = JSON.parse(isInWatchedList).find(
          movie => movie.id === movies.id
        );
        if (isInArray) {
          watchedBtn = `<button class="btn_modal btn_modal_watched current" data-ttt="${movies.id}">DELETE FROM WATCHED</button>`;
        } else {
          watchedBtn = `<button class="btn_modal btn_modal_watched" data-ttt="${movies.id}">ADD TO WATCHED</button>`;
        }
      }
    } else {
      watchedBtn = `<button class="btn_modal btn_modal_watched" data-ttt="${movies.id}">ADD TO WATCHED</button>`;
    }

    const isInQueuedList = localStorage.getItem('queuedFilms');
    if (isInQueuedList) {
      if (isInQueuedList.length) {
        const isInArray = JSON.parse(isInQueuedList).find(
          movie => movie.id === movies.id
        );
        if (isInArray) {
          queueBtn = `<button class="btn_modal btn_modal_queued current" data-ttt="${movies.id}">DELETE FROM QUEUE</button>`;
        } else {
          queueBtn = `<button class="btn_modal btn_modal_queued" data-ttt="${movies.id}">ADD TO QUEUE</button>`;
        }
      }
    } else {
      queueBtn = `<button class="btn_modal btn_modal_queued" data-ttt="${movies.id}">ADD TO QUEUE</button>`;
    }
  } catch (err) {
    console.log(err);
  }
  const mark = `<img class = "modal_img" src="${imgUrl}"   alt="">
            <div class="movie_modal_info">
                    <h2 class="movie_modal_title">${movies.original_title}</h2>
                    <table class="modal_table">
                        <tr>
                            <td class="table-header">Vote / Votes</td>
                            <td><span class="table-votes">${movies.vote_average.toFixed(
                              1
                            )}</span> / ${movies.vote_count}</td>
                        </tr>
                        <tr>
                            <td class="table-header">Popularity</td>
                            <td>${movies.popularity.toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td class="table-header">Original Title</td>
                            <td>${movies.original_title.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td class="table-header">Genre</td>
                            <td>${finalGenres.join(', ')}</td>
                        </tr>
                    </table>
                    <div class="about-container">
                        <h3 class="about-header">ABOUT</h3>
                        <p class="about-text">${movies.overview}</p>
                     </div>
                <div class="modal_btn_list">
                    ${watchedBtn}
                    ${queueBtn}
                </div>
                    <button class="btn_modal btn_trailer js-btn_trailer" data-idmovie=${
                      movies.id
                    }>MOVIE TRAILER</button>
            </div>`;
  return mark;
}

export { renderMarkupModal };