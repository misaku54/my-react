export default function ForItem({book}) {
  return (
    <>
      <dl>
        <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
          {book.title} ({book.price}円)
        </a>
      </dl>
      <dd>{book.summary}</dd>
    </>
  );
}