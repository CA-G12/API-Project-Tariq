// --------------------------------- Fetch Function ---------------------------------
// For Seconde Search
// // fetch(url,showValue);

const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#secondeInput");

const inputValue = document.querySelector("#secondeInput").value;
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  value = inputValue;
  console.log("Hiii");
});

fetch(url, (res) => {
  console.log(res);
  const apiShow = document.querySelector(".apiShow");
  const showImg = document.querySelector(".img");
  showImg.src = res.hits[0].largeImageURL;
  apiShow.appendChild(showImg);
});
