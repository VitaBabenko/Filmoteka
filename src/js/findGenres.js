function findGenres(genersArr, localArr, arr) {
  genersArr.forEach(el => {
    localArr.forEach(({ id, name }) => {
      if (el === id) {
        arr.push(name);
      }
    });
  });
}

function isEmptyGenres(arr) {
  if (arr.length === 0) {
    arr.push(['No data']);
  }
}

function isMoreThenTwoGenres(arr) {
  if (arr.length > 3) {
    arr.splice(2, arr.length - 2, 'Other');
  }
}

export { findGenres, isEmptyGenres, isMoreThenTwoGenres };
