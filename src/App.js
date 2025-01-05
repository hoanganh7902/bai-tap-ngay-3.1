import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm';
import PaginatedDataFetcher from './PaginatedDataFetcher';
import Home from './Home';
import CreateUserForm from './CreateUserForm';
import Header from './Header';
import InteractiveList from './InteractiveList';
import { useState } from 'react';
import SignUpForm from './SignUpForm';


function App() {

   const [items, setItems] = useState([
          { id: 1, name: 'Item 1', completed: false},
          { id: 2, name: 'Item 2', completed: false},
          { id: 3, name: 'Item 3', completed: false},
          { id: 4, name: 'Item 4', completed: false},
          { id: 5, name: 'Item 5', completed: false},
      ])


  return (
    <div className="App">
      <Header/>
      <InteractiveList items={items} setItems={setItems}/>
      <SignUpForm/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<CreateUserForm />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/paginate" element={<PaginatedDataFetcher />}/>
      </Routes>
    </div>
  );
}

export default App;
