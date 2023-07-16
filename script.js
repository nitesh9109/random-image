let myDiv = document.getElementById("centerdiv");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
  .then((apiData) => {
    return apiData.json();
  })
  .then((jsonData) => {
    jsonData.map((val) => {
      key = val.id;
      let img = document.createElement("img");
      img.src = `https://picsum.photos/200/300?random=${key}`;
      myDiv.appendChild(img);
    });
  });
