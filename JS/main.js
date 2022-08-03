const fetch = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(JSON.parse(xhr.responseText));
      } else if (xhr.status === 404) {
        console.log("HTTP error 404 :page not found ");
      } else if (xhr.status === 500) {
        console.log("HTTP error 500 : Internal Server Error");
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
};