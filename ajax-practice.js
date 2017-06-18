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

}


const exercises = {
  exercise1() {
    // btn.addEventListener('click', getContent);

    function getContent(e) {
      div.innerHTML = "We changed the content";
    }
  },
  exercise2() {
    btn.addEventListener('click', getNum);
    let request;

    function getNum(e) {
      request = new XMLHttpRequest();
      request.onreadystatechange = placeRandomNum;

      request.open('GET', 'random.php', true);
      request.send();
    }

    function placeRandomNum() {
      if (request.readyState === 4 && request.status === 200) {
        div.innerHTML = request.responseText;
      }
    }
  }

};
