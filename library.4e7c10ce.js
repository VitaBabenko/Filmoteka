!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var o=i("4Nugj"),a=i("9tAMN"),r=i("cDXQO"),d=i("kpmfB"),l=i("ghnK3"),c=i("dh4R1"),s=(o=i("4Nugj"),i("b3ndh")),v=i("3PzMA");function u(){c.apiservice.resetPage(),o.btnWatched.classList.add("btnIsActive"),o.btnQueue.classList.remove("btnIsActive"),localStorage.setItem("sourceForModal","watchedFilms"),(0,s.libraryListRender)(),v.observer.observe(o.guard)}u();s=i("b3ndh");o.btnWatched.addEventListener("click",u),o.btnQueue.addEventListener("click",(function(){c.apiservice.resetPage(),o.btnWatched.classList.remove("btnIsActive"),o.btnQueue.classList.add("btnIsActive"),localStorage.setItem("sourceForModal","queuedFilms"),(0,s.libraryListRender)(),v.observer.observe(o.guard)})),o.clicksMovie.addEventListener("click",a.oneToggle),o.closeModalMovieBtn.addEventListener("click",a.closeBtn),o.openModalMovie.addEventListener("click",a.clickBackdropCloseModal),o.modalGallery.addEventListener("click",a.onBtnBack),o.openModalMovie.addEventListener("click",d.onClickModal),o.modalGallery.addEventListener("click",r.onBtnTrailer),o.openModalTeamBtn.addEventListener("click",l.toggleTeamModal),o.paginationDiv.addEventListener("click",s.onLibrPaginationClick)}();
//# sourceMappingURL=library.4e7c10ce.js.map