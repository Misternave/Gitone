import React from 'react';
import Navbar from './components/NavBar'
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Post from './components/Post'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path='/home' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contacts' component={Contacts} />
        <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

//dedede

export default App;
