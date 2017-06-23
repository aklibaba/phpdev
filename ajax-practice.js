/**
 *
 * Created by Aleksander on 2017-06-16.
 */

document.addEventListener('DOMContentLoaded', init);


const btn = document.querySelector('.change-content'),
  div = document.querySelector('#content');


function init(e) {

  for (let exercise in exercises) {
    exercises[exercise]();
  }

  // document.querySelectorAll('form').forEach((form) => form.addEventListener('submit', (e) => e.preventDefault()))

}


const exercises = {
  exercise1() {
    // btn.addEventListener('click', getContent);

    function getContent(e) {
      div.innerHTML = "We changed the content";
    }
  },
  exercise2() {
    btn.addEventListener('click', startRequest);
    let request;

    function startRequest(e) {
      request = new XMLHttpRequest();
      request.onreadystatechange = insertResponse;
      const rows = document.getElementById('rows').value;
      const cols = document.getElementById('cols').value;

      const url = "square-service.php?beers=4";
      request.open('POST', url, true);
      request.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
      request.send(`rows=${rows}&cols=${cols}`);
    }

    function insertResponse() {
      if (request.readyState === 4 && request.status === 200) {
        div.innerHTML = request.responseText;
      }
    }
  },
  exercise3() {
    document.querySelector('#label-form button').addEventListener('click', startRequest);

    let request;

    function startRequest(e) {
      request = new XMLHttpRequest();
      request.onreadystatechange = insertResponse;

      const url = "bands.php";
      request.open('GET', url, true);
      request.send();
    }

    function insertResponse() {
      if (request.readyState === 4 && request.status === 200) {
        const favourites = request.responseXML;
        const bands = favourites.documentElement.getElementsByTagName('bands');

        // console.log(bands);
        let output = "<table><tr><th>Band</th><th>Song</th></tr>";
        for (let band of bands) {
          const bandName = band.querySelector('band').textContent;
          const songName = band.querySelector('song').textContent;
          let row = `<tr><td>${bandName}</td><td>${songName}</td></tr>`;
          output += row;
        }
        output += "</table>";

        document.querySelector('.result').innerHTML = output;
      }
    }
  }

};
