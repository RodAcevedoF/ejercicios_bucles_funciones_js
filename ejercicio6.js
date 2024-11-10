const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 }
];

// Añade tu código de bucle aquí

const moviesByDecade = {};

moviesByDecade.movies70s = [];
moviesByDecade.movies80s = [];
moviesByDecade.movies90s = [];
moviesByDecade.movies2000s = [];
moviesByDecade.movies2010s = [];

for (let starWarsMovie of starWarsMovies) {
  if (starWarsMovie.releaseYear < 1980) {
    moviesByDecade.movies70s.push(starWarsMovie);
  } else if (starWarsMovie.releaseYear < 1990) {
    moviesByDecade.movies80s.push(starWarsMovie);
  } else if (starWarsMovie.releaseYear < 2000) {
    moviesByDecade.movies90s.push(starWarsMovie);
  } else if (starWarsMovie.releaseYear < 2010) {
    moviesByDecade.movies2000s.push(starWarsMovie);
  } else {
    moviesByDecade.movies2010s.push(starWarsMovie);
  }
}

console.log(moviesByDecade);
