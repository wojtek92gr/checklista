/**
 * CHECKLISTA
 *
 * @param {value} submit Zadanie do wykonania.
 * @return {list} Listę zadań do wykonania.
 * @author Wojciech Grzebieniowski
 */

(function(){
  
  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');
      /**
       @param {value} submit
        *funkcja dodawania wartości do listy
 */
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value +  '</li>' ;
    store();
    item.value ="";
  },false)
  /**
 *zaznaczenie zakończonego tasku oraz usówanie
 */
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)
  /**
 *funkcja dodawania wartości oraz odczytu z localStorage
 */
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();