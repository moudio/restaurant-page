
import 'bootstrap';

import mainContent from './content';
import contact from './contact';
import menu from './menu';
export default addEvents;
import './style.scss';
import  Bg from './bg.jpg';
import Background from './background.jpg'


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
