const content = document.getElementById('content');

function addJumbotron() {
  const jumbotron = document.createElement('div');
  jumbotron.classList.add('jumbotron');
  jumbotron.innerHTML = `
  <h1 class="display-4">Local Food Done Right</h1>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
  `;
  content.appendChild(jumbotron);
}

function addNav() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
   <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
   <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Contact</a>
   <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Menu</a>
 </div>`;

  content.appendChild(nav);
}

function addTitle() {
  const title1 = document.createElement('h1');
  title1.innerText = 'Welcome to the Webpack Restaurant';
  title1.classList.add('text-center');
  const paragraph = document.createElement('p');
  paragraph.innerText = 'We deliver high quality food. Indulge yourself';
  paragraph.classList.add('text-center');
  content.appendChild(title1);
  content.appendChild(paragraph);
}

function addMain() {
  const container = document.createElement('div');
  container.classList.add('container', 'main-container');
  container.innerHTML = `
  <div class="text-picture">
    <div class="row">
    <div class="col-md-6 text-center">
      <h3>Delicious</h3>
      <p>We offer high quality and fresh foods produced in our organic farms </p>
      <button class="btn btn-success btn-lg">Learn more</button>
    </div>
    <div class="col-md-4 div-pic">
      <img src="background.jpg" alt="">
    </div>
    </div>
  </div>

  <div class="text-picture">
    <div class="row">

    <div class="col-md-4 div-pic">
    </div>
    <div class="col-md-6 text-center">
      <h3>Unique foods</h3>
      <p>Amaze your friends by letting them now our unique foods</p>
      <button class="btn btn-success btn-lg">Learn more</button>
    </div>
    </div>
  </div>
  <div class="row">
          <div class="callout-light text-center fade-in-b">
          <h1 class="callout-heading">Reserve your place - <b>Now</b> - <a href="#" class="btn btn-danger">Book</a></h1>
        </div>
      </div>
`;

  content.appendChild(container);
}

export default function loadContent() {
  content.innerHTML = '';
  addNav();
  addJumbotron();
  addTitle();
  addMain();
}
