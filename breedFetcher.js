const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // if request is failed, print the details of the error
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      // if breed is not found, output a message. If there is no breed, then data will be empty array
      if (data.length === 0) {
        callback(null, "Breed is not found");
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

// const fetchBreedDescription = function(breedName) {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//     // if request is failed, print the details of the error
//     if (error) {
//       return error;
//     }
//     const data = JSON.parse(body);
//     // if breed is not found, output a message. If there is no breed, then data will be empty array
//     if (data.length === 0) {
//       return "Breed is not found";
//     }
//     return data[0].description;
//   });
// };

module.exports = { fetchBreedDescription };