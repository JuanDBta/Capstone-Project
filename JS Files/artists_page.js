const container = document.getElementById('artists-page');

const artistsinfo = [
  {
    artist_name: 'Fernando Botero',
    artist_description: 'Oil painting, watercolor, pastel, charcoal drawing and sculpture.',
    artist_photo: 'images/botero.jpg',
    artist_work: 'Born on 1932, is known for his unique style of painting and sculpture featuring exaggerated<br>voluminous forms. His work includes portraits, landscapes, and depictions of everyday life,<br>as well as political and social themes.',
  },

  {
    artist_name: 'Alejandro Obregón',
    artists_description: 'Oil painting, watercolor, collage, printmaking and sculpture.',
    artist_photo: 'images/obregon.jpeg',
    artist_work: 'Born on 1920, his work often featured bold colors, abstract forms, and a unique blend of European modernism and Colombian culture.',
  },

  {
    artist_name: 'Beatriz Gonzalez',
    artist_description: 'Oil painting, watercolor, drawing, installations and graphic design.',
    artist_photo: 'images/beatriz.jpg',
    artist_work: 'Born on 1938, her art often involves the appropriation of images from mass media and advertising, which she incorporates into her paintings, collages, and installations.',
  },

  {
    artist_name: 'Luis Caballero',
    artist_description: 'Oil paint and charcoal on canvas, paper, and other surfaces.',
    artist_photo: 'images/caballero.jpg',
    artist_work: 'Born on 1943, his work challenged traditional notions of masculinity and sexuality in Latin America and drew on influences from European modernism and classical art. His work is characterized by a high expressive, gestural style that captures the emotional intensity of his subjects.',
  },

  {
    artist_name: 'Santiago Cárdenas',
    artists_description: 'Acrylic paint on canvas, with a highly textured, layered surface.',
    artist_photo: 'images/santiago.jpg',
    artist_work: 'Born on 1937, he is known for his contributions to the development of abstract art in Colombia and his use of unconventional materials and techniques in his work. Cárdenas´s art often featured geometric shapes and bold, contrasting colors arranged in complex, rhythmic patterns that evoked a sense of movement and dynamism.',
  },

  {
    artist_name: 'Ana Mercedes Hoyos',
    artist_description: 'Oil paint, acrylics, textiles, and found objects.',
    artist_photo: 'images/hoyos.jpg',
    artist_work: 'Born on 1942,  she is known for her vibrant, colorful paintings, sculptures, and installations that often explored themes related to Colombian culture and identity.',
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

  const introwork = document.createElement('p');
  introwork.classList.add('artistwork-intro');
  introwork.textContent = artist.artist_work;
  div.appendChild(introwork);

  container.appendChild(div);
});
