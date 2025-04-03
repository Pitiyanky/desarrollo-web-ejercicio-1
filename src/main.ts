import './style.css'
import { setupCounter } from './counter.ts'
import fantasyBooks from '../json/fantasy-books.json'

// Function to create a card for each book
// Selección del contenedor de los libros
const container = document.getElementById('bookContainer');
      
// Función para crear la tarjeta de un libro
function createBookCard(book) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'mb-4');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // Contenedor para imagen y datos del libro (usa flex para alinear)
  const contentDiv = document.createElement('div');
  contentDiv.style.display = 'flex';
  contentDiv.style.alignItems = 'center';

  // Agregar la imagen si existe
  if (book.formats['image/jpeg']) {
    const img = document.createElement('img');
    img.src = book.formats['image/jpeg'];
    img.alt = book.title;
    img.style.width = '80px';
    img.style.height = 'auto';
    img.style.marginRight = '10px';
    contentDiv.appendChild(img);
  }

  // Contenedor para el texto (título y autor)
  const textDiv = document.createElement('div');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = book.title;

  const author = document.createElement('p');
  author.classList.add('card-text');
  author.textContent = `Author: ${book.authors[0].name}`;

  textDiv.appendChild(title);
  textDiv.appendChild(author);

  contentDiv.appendChild(textDiv);
  cardBody.appendChild(contentDiv);
  cardDiv.appendChild(cardBody);

  return cardDiv;
}


function renderBooks(books: any[]) {
  const container = document.getElementById('bookContainer');
  if (!container) return;
  container.innerHTML = '';
  books.forEach((book) => {
    const bookCard = createBookCard(book);
    container.appendChild(bookCard);
  });
}

// Renderizado inicial
renderBooks(fantasyBooks.results);

// Configuración del botón de ordenamiento
const sortButton = document.getElementById('sortButton') as HTMLButtonElement;
setupCounter(sortButton, fantasyBooks.results, renderBooks);
