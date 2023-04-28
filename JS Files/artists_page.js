const container = document.getElementById('artists-page');

const artistsinfo = [
  {
    artist_name: 'Fernando Botero',
    artist_description: 'T',
    artist_photo: '/Mod5/Capstone-Project/images/botero.jpg',
    artist_work: 'W',
  },

  {
    artist_name: 'Alejandro Obregón',
    artists_description: 'T',
    artist_photo: '/Mod5/Capstone-Project/images/obregon.jpeg',
    artist_work: 'W',
  },

  {
    artist_name: 'Beatriz Gonzalez',
    artist_description: 'T',
    artist_photo: '/Mod5/Capstone-Project/images/beatriz.jpg',
    artist_work: 'W',
  },

  {
    artist_name: 'Luis Caballero',
    artist_description: 'T',
    artist_photo: '/Mod5/Capstone-Project/images/caballero.jpg',
    artist_work: 'W',
  },

  {
    artist_name: 'Santiago Cárdenas',
    artists_description: 'T',
    artist_photo: '/Mod5/Capstone-Project/images/santiago.jpg',
    artist_work: 'W',
  },

  {
    artist_name: 'Ana Mercedes Hoyos',
    artist_description: 'T',
    artist_photo: '/Mod5/Capstone-Project/images/hoyos.jpg',
    artist_work: 'W',
  },
];

artistsinfo.forEach((artist) => {
  const div = document.createElement('div');
  div.classList.add('artists');

  const photo = document.createElement('div');
  photo.classList.add('artist-photo');
  const img = document.createElement('img');
  img.src = artist.artist_photo;
  photo.appendChild(img);
  div.appendChild(photo);

  const name = document.createElement('p');
  name.classList.add('artist-name');
  name.textContent = artist.artist_name;
  div.appendChild(name);

  const description = document.createElement('p');
  description.classList.add('artist-description');
  description.textContent = artist.artist_description;
  div.appendChild(description);

  const underline = document.createElement('div');
  underline.classList.add('underline', 'art-techniques');
  div.appendChild(underline);

  const intro = document.createElement('p');
  intro.classList.add('artistwork-intro');
  intro.textContent = `Born on ${artist.birth_year}, ${artist.artist_name} is known for ${artist.artist_work}`;
  div.appendChild(intro);

  container.appendChild(div);
});
