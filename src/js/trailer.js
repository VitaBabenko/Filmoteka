import axios from 'axios';
import { modalGallery } from './refs';

let idTrailer = '';

async function onBtnTrailer(evt) {
  try {
    if (evt.target.classList.contains('js-btn_trailer')) {
      const btnTrailer = evt.target.closest('.js-btn_trailer');

      idTrailer = btnTrailer.dataset.idmovie;

      const resp = await fetchTrailer();
      const dataMovie = resp.data.results;
      const officialTrailer = dataMovie.find(
        movie =>
          movie.name.toLowerCase().includes('official trailer') ||
          movie.name.toLowerCase().includes('official trailer 2')
      );

      if (officialTrailer) {
        modalGallery.innerHTML = `<button type="button" class="btn_modal__close-trailer">CLOSE TRAILER</button>
        <iframe 
            class="movie_trailer"
            width='700'
            height='500'
            src="https://www.youtube.com/embed/${officialTrailer.key}" 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;
            autoplay = 0; clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen>
            </iframe>`;
      } else {
        btnTrailer.innerHTML =
          '<p class="error__trailer">Sorry, search result is not successful</p>';
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function fetchTrailer() {
  try {
    const URL = `https://api.themoviedb.org/3/movie/${idTrailer}/videos?api_key=6b1b36ecf2f3f3c0d27307e18cbffcb3&language=en-US`;
    const response = await axios.get(URL);

    return response;
  } catch (error) {
    console.log(error.message);
  }
}

function cleanHtmlTrailer() {
  modalGallery.innerHTML = '<div class="trailer__clear"></div>';
}

export { onBtnTrailer, cleanHtmlTrailer };
