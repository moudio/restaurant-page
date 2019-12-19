import mainContent from './content';
import contact from './contact';
import menu from './menu';
import './style.scss';

function addEvents() {
  const tabs = document.querySelector('.nav-tabs');

  tabs.addEventListener('click', (e) => {
    const value = e.target.textContent.toLowerCase();
    if (value === 'contact') {
      contact();
    } else if (value === 'menu') {
      menu();
    } else {
      mainContent();
    }
  });
}

mainContent();
addEvents();

export default addEvents;
