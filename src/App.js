import './App.css';
import Member from './components/Member';
import { Link, Route, Routes } from 'react-router-dom';
import Park from './components/Park';
import BoardInsert from './components/board/BoardInsert';
import Board from './components/board/Board';
// http://localhost:8080/

function App() {

  return (
    <div className="App">
      <Link to="/member">회원목록보기</Link><br></br>
      <Link to="/park">Holiday_parking</Link><br></br>
      <Link to="/board/insert">게시판 글 쓰기</Link><br></br>
      <Routes>
        <Route path="/member" element={<Member></Member>} />
        <Route path="/park" element={<Park></Park>} />
        <Route path="/board" element={<Board></Board>} />
        <Route path="/board/insert" element={<BoardInsert></BoardInsert>} />
      </Routes>
    </div>
  );
}

export default App;
