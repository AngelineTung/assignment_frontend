const { response } = require("express");
var useremail;
var userpwd;


function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        Id: ${item.id} <br>
        Name: ${item.name} <br>
        Price: ${item.price}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));}


function postData() {
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    name: form.nname.value,
    email: form.nemail.value,
    pwd: form.npwd.value
  });
  
  
  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}









function updateData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  respanel = document.getElementById("mypanel");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    
    pwd_new: form.pwd_new.value,
    email5: form.add.email5,
    pwd5: form.add.pwd5,
  });

  console.log(raw);
  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/change", requestOptions)
    .then((response) => response.text())
    .then((result) => (respanel.innerHTML = result))
    .catch((error) => console.log("error", error));
}


function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  url = "http://localhost:3000/customer/delete?pwd2=" + form.pwd2.value + "&email2=" + form.email2.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
}


function login() {
  var requestOptions = {
    method: "GET",
  };
  url = "http://localhost:3000/login?email=" + form.email3.value + "&pwd=" + form.pwd3.value; //+ form.email3.value; //+ "&pwd3=" + form.pwd3.value;
  useremail = form.email3.value;
  //userpwd = form.pwd3.value;
  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => (document.getElementById("mypanel").innerHTML = result))
    .catch((error) => console.log("error", error));
} 


