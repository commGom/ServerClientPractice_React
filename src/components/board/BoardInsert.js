import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BoardInsert = (props) => {
  console.log(props);
  const navigate = useNavigate();
  function formSubmitHandler(e) {

    // const boardInfo = {
    //   title: document.querySelector("#title").value,
    //   content: document.querySelector("#content").value
    // }
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    e.preventDefault();

    const data = axios({
      url: 'http://localhost:8080/jpa/add',
      method: 'post',
      data: formData,

    });
    data.then(function (result) {
      console.log(result);
      navigate('/board')
      // history.push(`/board`);
      // history.push(`/detail/${id}`);
      // history.push('/board');
    });
  };
  return (
    <div>
      <form method="POST" id="board-form" onSubmit={formSubmitHandler}>
        제목 : <input type="text" name="title" id="title"></input><br></br>
        내용 : <input type="text" name="content" id="content" ></input><br></br>
        <button type="submit">글 쓰기</button>
      </form>
    </div>
  );

}

export default BoardInsert;