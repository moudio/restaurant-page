
import 'bootstrap';
import mainContent from './content';
import contact from './contact';
import menu from './menu';
export default addEvents;

mainContent();


function addEvents (){
const tabs = document.querySelector('.nav-tabs');

tabs.addEventListener('click', function(e){
const value = e.target.textContent.toLowerCase();
if(value == "contact"){
  contact()
} else if (value === "menu") {
  menu();
} else {
  mainContent();
}
})

}
