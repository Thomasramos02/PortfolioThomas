import React from 'react';
import '../styles/Book.css';
import { useTranslation } from 'react-i18next';

const BookSection = () => {
  const { t } = useTranslation();

  const booksRaw = t("books.list", { returnObjects: true });
  const books = Array.isArray(booksRaw) ? booksRaw : [];

  return (
    <section className="book-section">
      <h2 className="section-title">{t("books.title")}</h2>
      <div className="book-list">
        {books.map((book, index) => {
          const href = book.amazonUrl || book.url || book.link || "#";
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="book-item-link"
            >
              <div className="book-item">
                <img src={book.cover} alt={`${book.title} cover`} className="book-cover" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <p className="book-description">{book.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
export default BookSection;

