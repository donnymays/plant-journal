export default class Trefle {  
  static searchTrefle(query) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=MQEGv3cwuvOc-CVF73qo-5SAu3bnVEggACY_k5cB9KA&q=${query}`;
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