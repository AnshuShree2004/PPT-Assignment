var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent from refresh on submit
  var input = document.getElementById("input").value;// value of input which we type

  var username = input.split(" ").join("");// remove space between strings
  const url = "https://api.github.com/users/" + username; // url to find user by their username


 // fetching data from github 
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var result = document.getElementById("result");
      result.style.display = "block";
      result.innerHTML = `
         <div class="img-book"> <a href="https://github.com/${data.url}"><img src="${data.avatar_url}"> </a>

         <h3> ${data.name} <h3>
          </div>
          
          <div class = "info-container">

          <ul> 
          <li> Company : ${data.company}  </li>
          <li> Bio : ${data.bio} </li>
          <li> Location : ${data.location} </li>
          <li> Public Repo : ${data.public_repos} </li>
          <li> Followers : ${data.followers} </li>
            <li> Contact : ${data.email}
           </ul>

         </div>
          `;
    });
});
