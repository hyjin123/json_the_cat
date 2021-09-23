const request = require("request");

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  // if request is failed, print the details of the error
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  // if breed is not found, output a message. If there is no breed, then data will be empty array
  if (data.length === 0) {
    console.log("Breed is not found");
    return;
  }
  console.log(data[0].description);
});