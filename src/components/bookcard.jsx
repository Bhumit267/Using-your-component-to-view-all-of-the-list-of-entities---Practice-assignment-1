// Book component to display book information
const BookCard = ({ book }) => {
  const { image, name, genre, author } = book;

  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{name}</h3>
        <p className="book-genre">Genre: {genre}</p>
        <p className="book-author">Author: {author}</p>
      </div>
    </div>
  );
};

export default BookCard;