import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Footer from './Footer';

function App() {
  return (
  <div className="App">
    <Header />
      <Navbar />
    <BlogList />
      <BlogPost />
    <Footer />
  </div>
  );
}

export default App;