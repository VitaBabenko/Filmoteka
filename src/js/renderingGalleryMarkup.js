import { renderMarkupSearch } from './markupSearch';
import { movieContainer, guard } from './refs';
import { apiservice } from './apiService';
import { pagination } from './pagination';
import { hideLoader, showLoader } from './loader';
import { observer } from './buttonTop';

getMovies();

async function getMovies() {
  try {
    showLoader();
    await apiservice.fetchGenres();
    const response = await apiservice.fetchTrendFilms();
    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);
    observer.observe(guard);
    hideLoader();
    pagination(1, response.data.total_pages);
  } catch (err) {
    console.log(err);
  }
}

export { getMovies };