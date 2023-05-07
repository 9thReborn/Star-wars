const images = document.querySelectorAll("img");
const paragraphs = document.querySelectorAll(".container");

images.forEach((image, index) => {
  image.addEventListener("click", function main() {
    let current = document.querySelector("active");
    if (current === null) {
      paragraphs[index].classList.add("active");
      paragraphs[index].textContent = "please wait...";
      getDetails(index);
    } else if (paragraphs[index] === current) {
      return;
    } 
    else {
      current.classList.remove("active");
      paragraphs[index].classList.add("active");
      paragraphs[index].textContent = "please wait..."; 
      getDetails(index);
    }
  });
});

function getDetails(index) {
  fetch("https://swapi.dev/api/people/?format=json")
    .then((response) => response.json())
    .then((data) => {
      paragraphs[index].innerHTML = 
       ` Name: ${data.results[index].name}
        <br> 
        Height: ${data.results[index].height}cm
        <br> 
        Gender: ${data.results[index].gender}`;
        
    })
    .catch((error) => console.log(error));
}
























// function main() {
//  starHomePage.textContent="please wait...";
//  fetch("https://swapi.dev/api/people/?format=json")
//  .then((response) => response.json())
//  .then((data) => {
//     starHomePage.innerHTML = data.results.map((result) => {
//         return "<li>" + result.name + "<br>" + result.height + "<br>" + result.gender + "</li>"}).join('')
//  })
//  .catch((error) => console.log(error));

// }
// Window.onload = main();

// module.exports = { main }
