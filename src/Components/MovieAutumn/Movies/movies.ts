import Movie from './Movie/IMovie';

const movies: Movie[] = [
  {
    name: 'Jerry Maguire',
    sinopsis: 'When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former secretary.',
    genre: 'Comedy, Drama, Romance',
    year: 1996,
    lenghtInMinutes: 139,
    imdbInfo: {
      coverURI: 'MV5BYTM0ZWNmZTUtOTVkZS00MTZiLTg3M2QtZjA0Y2RmOWM1NWEyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: 'vi878683161',
      stars: 7.3,
    }
  },
  {
    name: 'Fifty First Dates',
    sinopsis: 'Henry Roth is a man afraid of commitment up until he meets the beautiful Lucy. They hit it off and Henry think he\'s finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the next day.',
    genre: 'Comedy, Drama, Romance',
    year: 2004,
    lenghtInMinutes: 109,
    imdbInfo: {
      coverURI: 'MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 6.8,
    }
  },
  {
    name: 'The wedding singer',
    sinopsis: 'Robbie, a singer, and Julia, a waitress, are both engaged, but to the wrong people. Fortune intervenes to help them discover each other.',
    genre: ' Comedy, Music, Romance',
    year: 1998,
    lenghtInMinutes: 100,
    imdbInfo: {
      coverURI: 'MV5BYjM5YTQ0ZGYtMWExZi00MTFmLTg0YjUtZDcyMGNiYzE5MmNmL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 6.8,
    }
  },
  {
    name: 'Aladdin',
    sinopsis: 'A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.',
    genre: 'Animation, Adventure, Comedy',
    year: 1992,
    lenghtInMinutes: 90,
    imdbInfo: {
      coverURI: 'MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 8.0,
    }
  },
  {
    name: 'The Beauty and The Beast',
    sinopsis: 'A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman\'s love.',
    genre: 'Animation, Family, Fantasy',
    year: 1991,
    lenghtInMinutes: 84,
    imdbInfo: {
      coverURI: 'MV5BMzE5MDM1NDktY2I0OC00YWI5LTk2NzUtYjczNDczOWQxYjM0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 8.0,
    }
  },
  {
    name: 'The Vow',
    sinopsis: 'A car accident puts Paige in a coma, and when she wakes up with severe memory loss, her husband Leo works to win her heart again.',
    genre: 'Drama, Romance',
    year: 2012,
    lenghtInMinutes: 104,
    imdbInfo: {
      coverURI: 'MV5BMjE1OTU5MjU0N15BMl5BanBnXkFtZTcwMzI3OTU5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 6.8,
    }
  },
  {
    name: 'Serendipity',
    sinopsis: 'A couple search for each other years after the night they first met, fell in love, and separated, convinced that one day they\'d end up together.',
    genre: 'Comedy, Romance',
    year: 2001,
    lenghtInMinutes: 90,
    imdbInfo: {
      coverURI: 'MV5BNWFhZTc4NDEtNDA0MS00NmFiLWFlNzUtMDM0NTExNjc3NzZhXkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 6.9,
    }
  },
  {
    name: 'Ruby Sparks',
    sinopsis: 'A novelist struggling with writer\'s block finds romance in a most unusual way: by creating a female character he thinks will love him, then willing her into existence.',
    genre: 'Comedy, Drama, Fantasy',
    year: 2012,
    lenghtInMinutes: 104,
    imdbInfo: {
      coverURI: 'MV5BMjE2OTM5OTUyOF5BMl5BanBnXkFtZTcwODI4Nzg3Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 7.2,
    }
  },
  {
    name: 'About Time',
    sinopsis: 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
    genre: 'Comedy, Drama, Fantasy',
    year: 2013,
    lenghtInMinutes: 123,
    imdbInfo: {
      coverURI: 'MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 7.8,
    }
  },
  {
    name: '10 Things I Hate About You',
    sinopsis: 'A pretty, popular teenager can\'t go out on a date until her ill-tempered older sister does.',
    genre: 'Comedy, Drama, Romance',
    year: 1999,
    lenghtInMinutes: 97,
    imdbInfo: {
      coverURI: 'MV5BMmVhZjhlZDYtMDAwZi00MDcyLTgzOTItOWNiZjY0YmE0MGE0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      trailerId: '',
      stars: 7.3,
    }
  }
];

export default movies;
