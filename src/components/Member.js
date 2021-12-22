import React from 'react';
import axios from 'axios';
const Member = () => {

  const data = axios({
    url: 'http://localhost:8080/json/exam',
    method: 'get',

  });
  data.then(function (result) {
    console.log(result);
    const memberInfo = result.data;
    const count = document.querySelector("span");
    count.innerText = memberInfo.count;
    const memberList = memberInfo.list;
    const tbody = document.querySelector("tbody");
    let tr = "";
    memberList.forEach(member => {
      tr += `
      <tr>
        <td>${member.name}</td>
        <td>${member.userId}</td>
        <td>${member.userPassword}</td>
        </tr>
      `;
    });
    tbody.innerHTML = tr;
  });
  return (
    <div>
      <h1>회원 목록 : <span id="count"></span></h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>UserId</th>
            <th>UserPassword</th>
          </tr>
        </thead>
        <tbody>

        </tbody>

      </table>
    </div>
  );
};

export default Member;