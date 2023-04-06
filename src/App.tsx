import AddContact from './components/AddContact';
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
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
