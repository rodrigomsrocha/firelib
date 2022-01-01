import styles from "./styles.module.scss";

interface Book {
  id: number;
  title: string;
}
interface BookListProps {
  books: Book[];
}

export function BookList({ books }: BookListProps) {
  function handleClick(id: number) {
    console.log(`You clicked ${id}`);
  }

  return (
    <div className={styles.bookList}>
      <ul>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => {
              handleClick(book.id);
            }}
          >
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
