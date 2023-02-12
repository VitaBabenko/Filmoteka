import { apiservice } from './apiService';
import { btnWatched, btnQueue, guard } from './refs';
import { libraryListRender } from './libraryMarkup';
import { observer } from './buttonTop';

onBtnWatchedClick();

function onBtnWatchedClick() {
  apiservice.resetPage();
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');
  localStorage.setItem('sourceForModal', 'watchedFilms');
  libraryListRender();
   observer.observe(guard);
}

function onBtnQueueClick() {
  apiservice.resetPage();
  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');
  localStorage.setItem('sourceForModal', 'queuedFilms');
  libraryListRender();
   observer.observe(guard);
}

export { onBtnWatchedClick, onBtnQueueClick };