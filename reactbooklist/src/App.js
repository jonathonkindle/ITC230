import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import BookList from "./components/book-list.component";
import AddBook from "./components/add-book.component";
import UpdateBook from "./components/update-book.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={BookList} />
      <Route path="/add" component={AddBook} />
      <Route path="/update/:id" component={UpdateBook} />
    </Router>
  );
}

export default App;
