export function setupCounter(
  element: HTMLButtonElement,
  books: any[],
  renderBooks: (books: any[]) => void
) {
  let isAscending = true;

  // Función para actualizar el texto del botón según el orden actual
  const updateButtonText = () => {
    element.innerHTML = isAscending
      ? 'Ordenar Título (Ascendente)'
      : 'Ordenar Título (Descendente)';
  };

  // Al hacer clic, se ordenan los libros y se renderizan nuevamente
  element.addEventListener('click', () => {
    const sortedBooks = books.slice().sort((a, b) => {
      if (a.title < b.title) return isAscending ? -1 : 1;
      if (a.title > b.title) return isAscending ? 1 : -1;
      return 0;
    });
    renderBooks(sortedBooks);
    isAscending = !isAscending; // Se alterna el orden para el siguiente clic
    updateButtonText();
  });

  updateButtonText();
}
