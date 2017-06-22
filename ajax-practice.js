/**
 *
 * Created by Aleksander on 2017-06-16.
 */

document.addEventListener('DOMContentLoaded', init);


const btn = document.querySelector('.change-content'),
  div = document.querySelector('#content');


function preventDefaults() {
    let formsArray = document.querySelectorAll('form');
    formsArray.forEach(form => form.addEventListener('submit', (e) => e.preventDefault()));
}
function init(e) {
    
    for ( let exercise in exercises ) {
        exercises[ exercise ]();
    }
    
    preventDefaults();
    
}


const exercises = {
    exercise1() {
        // btn.addEventListener('click', getContent);
        
        function getContent(e) {
            div.innerHTML = "We changed the content";
        }
    },
    exercise2() {
        btn.addEventListener('click', useService);
        let request;
        
        function useService(e) {
            const rows = document.getElementById('rows').value;
            const cols = document.getElementById('cols').value;
            request = new XMLHttpRequest();
            request.onreadystatechange = insertResponse;
            
            const url = `square_service.php?rows=${rows}&cols=${cols}`;
            request.open('GET', url, true);
            request.send();
        }
        
        function insertResponse() {
            if ( request.readyState === 4 && request.status === 200 ) {
                div.innerHTML = request.responseText;
            }
        }
    },
    exercise3() {
        
    }
    
};
