import React from 'react';
import axios from 'axios';
const Park = () => {
  return (
    <div>
      <input type="text" name="address" id="address"></input>
      <button type="button" onClick={() => {
        const search = document.querySelector("#address").value;
        const data = axios({
          url: `http://localhost:8080/db/park/${search}`,
          method: 'get',

        });
        data.then(function (result) {
          console.log(result);
          const addressList = result.data;
          const tbody = document.querySelector("tbody");
          let tr = "";
          addressList.forEach(address => {
            tr += `
    <tr>
      <td>${address.id}</td>
      <td>${address.institution}</td>
      <td>${address.tel}</td>
      <td>${address.address}</td>
      </tr>
    `;
          });
          tbody.innerHTML = tr;
        });
      }}>검색</button>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>institution</th>
            <th>tel</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default Park;