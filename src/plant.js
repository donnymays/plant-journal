export default class Trefle {  
  static searchTrefle(query) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=${process.env.API_KEY}&q=${query}`;
      request.onload = function() {
        if (this.status === 200) {  
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}