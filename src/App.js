import './App.css';
import axios from 'axios';
import Member from './components/Member';
import { Link, Route, Routes } from 'react-router-dom';
// http://localhost:8080/

function App() {

  return (
    <div className="App">
      <Link to="/member">회원목록보기</Link>
      <Routes>
        <Route path="/member" element={<Member></Member>} />
      </Routes>
    </div>
  );
}

export default App;
