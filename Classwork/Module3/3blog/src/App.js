import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import BlogData from './BlogData'
import Footer from './Footer';
import BlogPost from './BlogPost';


function App() {
  const BlogComponents = BlogData.map(post => <BlogPost key={post.date} title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>
    );
  return (
  <div className="App">
    <Header />
    <BlogList />
    {BlogComponents}
    <Footer />
  </div>
  );
}

export default App;