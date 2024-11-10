const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // Añade tu código de bucle aquí
const tracksByGenre = {}

tracksByGenre.Rock = []
tracksByGenre.Pop = []
tracksByGenre.Country = []
tracksByGenre.Grunge = []

for (let track of tracks) {
    if (track.genre === 'Rock') {
        tracksByGenre.Rock.push(track)
    }else if (track.genre === 'Pop') {
        tracksByGenre.Pop.push(track)
    }else if (track.genre === 'Country') {
        tracksByGenre.Country.push(track)
    }else if (track.genre === 'Grunge') {
        tracksByGenre.Grunge.push(track)
    }
  }
  console.log(tracksByGenre)