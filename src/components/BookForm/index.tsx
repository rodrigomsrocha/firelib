import { FormEvent, useState } from "react";

export function BookForm() {
  const [newBook, setNewBook] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(newBook);

    setNewBook("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <strong>Add a new book title:</strong>
        <input
          required
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
