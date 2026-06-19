import { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating) {
      alert("Please fill in all fields!");
      return;
    }
    
    // Pass the new movie object up to the App component
    addMovie({ title, description, posterURL, rating: Number(rating) });
    
    // Clear the form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <input type="number" placeholder="Rating (0-5)" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="5" step="0.1" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;