import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books } from './data/books';

function App() {
  return (
    <div className="container">
      <CourseDetails />
      <div className="divider" />
      <BookDetails books={books} />
      <div className="divider" />
      <BlogDetails />
    </div>
  );
}

export default App;

