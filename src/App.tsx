import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Auth from './components/Auth';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddContact/>}/>
        <Route path="/contacts" element={<Main/>}/>
        <Route path="/edit" element={<EditContact/>}/>
        <Route path="/" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
