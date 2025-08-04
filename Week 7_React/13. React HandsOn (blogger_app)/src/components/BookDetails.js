import React from 'react';

function BookDetails({ books }) {
  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map(book => (
        <div key={book.id} style={{ marginBottom: '10px' }}>
          <strong>{book.bname}</strong>
          <div>{book.price}</div>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
