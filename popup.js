const projects = [
  {
    name: 'Tonic',
    img: 'images/Snapshoot-Portfolio.svg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://piesieomane.github.io/My-portfolio/',
    source: 'https://github.com/piesieomane/My-portfolio.git',
  },

  {
    name: 'Multi-Post Stories',
    img: 'images/Snapshoot-Portfolio-resize1.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://piesieomane.github.io/My-portfolio/',
    source: 'https://github.com/piesieomane/My-portfolio.git',
  },

  {
    name: 'Tonic',
    img: 'images/Snapshoot-Portfolio-(1)-resize.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://piesieomane.github.io/My-portfolio/',
    source: 'https://github.com/piesieomane/My-portfolio.git',
  },

  {
    name: 'Multi-Post Stories',
    img: 'images/Snapshoot-Portfolio-resize1.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javascript'],
    liveVersion: 'https://piesieomane.github.io/My-portfolio/',
    source: 'https://github.com/piesieomane/My-portfolio.git',
  },
];

projects.forEach((element, i) => {
  const works = document.querySelector('.works');
  const section = document.createElement('section');
  const image = document.createElement('img');
  const img = document.createElement('img');
  const img1 = document.createElement('img');
  const div = document.createElement('div');
  const miniDiv = document.createElement('div');
  const h4 = document.createElement('h4');
  const h41 = document.createElement('h4');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const a = document.createElement('a');

  // working on image in the card
  image.src = element.img;
  image.classList.add('cards-pic');
  image.setAttribute('alt', 'Portfolio first card');

  miniDiv.classList.add('section-about');
  // miniDiv children
  a.setAttribute('class', 'size');
  a.setAttribute('href', '#');
  a.innerText = 'CANOPY';

  img.src = 'images/Counter.png';
  img.classList.add('size');
  img.classList.add('dot');
  img.setAttribute('alt', 'Illustration of a dot');

  h41.classList.add('size');
  h41.classList.add('back-end');
  h41.innerText = 'Back End Dev';

  img1.src = 'images/Counter.png';
  img1.classList.add('size');
  img1.classList.add('dot');
  img1.setAttribute('alt', 'Illustration of a dot');

  h4.classList.add('size');
  h4.classList.add('date');
  h4.innerText = 2015;

  h1.setAttribute('class', 'sectiontitle');
  h1.innerText = element.name;

  miniDiv.append(a, img, h41, img1, h4);
  miniDiv.classList.add('section-about');

  p.innerText =
    'A daily selection of privately personalized reads; no accounts or sign-ups required';

  ul.classList.add('languages');

  projects[i].technologies.forEach((tech, j) => {
    const tags = document.createElement('li');
    ul.append(tags);
    tags.classList.add(tech);
    tags.innerText = projects[i].technologies[j];
  });

  button.classList.add('see-btn');
  // adding an id to the see-btn for every loop ***********
  button.setAttribute('id', i);
  button.innerText = 'See Project';

  section.classList.add('cards');

  // order of 2nd and 4th card
  if (i % 2 !== 0) {
    div.classList.add('cards-reverse');
  }

  div.append(h1, miniDiv, p, ul, button);

  section.append(image, div);
  works.appendChild(section);
});

// the popup section ************
const seeProjectBtn = document.querySelectorAll('.see-btn');
const popupw = document.querySelector('.bg-popup');
const realPopup = document.querySelector('.popup');

seeProjectBtn.forEach((n) => {
  n.addEventListener('click', (e) => {
    const targetId = e.target.id;
    const project = projects[targetId];

    realPopup.innerHTML = `
      <div class= 'card-pop'>
      <div class = 'flex-popup'>
        <h1 class="section-title">${project.name}</h1>
        <img src="images/Icon-Cancel.png" class="xicon" alt="normal button" />
        </div>
        <div class="section-about">
          <a href="#" class="size">CANOPY</a>
          <img
            src="images/Counter.png"
            alt="Illustration of a dot 8"
            class="size dot"
          />
          <h4 class="size back-end">Back End Dev</h4>
          <img
            src="images/Counter.png"
            alt="Illustration of a dot 8"
            class="size dot"
          />
          <h4 class="size date">2015</h4>
        </div>
        <div class = 'pic-container'>
        <img
            src=${project.img}
            alt="card pic"
            class="cards-pic"
          />
          </div>
          

          <div class = "flex-desktop">
        <p>
          ${project.description}
        </p>
        <div>
         <ul class="languages">
           <li class="${project.technologies[0]}">html</li>
          
          <li class="${project.technologies[0]}">css</li>
          
          <li class="${project.technologies[0]}">javascript</li>
         </ul>

         <div class = "btn-flex">
         <button><a href='${project.liveVersion}' class = "btn-flex1" alt='Broken Link'>See Live <img
         src="images/Icon-power.png"
         alt="Illustration of a dot 8"
         class="size dot"
       /></a></button>
         <button><a href='${project.source}' class = "btn-flex1" alt='Broken Link'>See Source <img
         src="images/icon-github.png"
         alt="Illustration of a dot 8"
         class="size dot"
       /></a></button>
         </div>
        </div>
      </div>
      </div>`;
    popupw.append(realPopup);
    popupw.classList.add('visible');

    const xButton = document.querySelectorAll('.xicon');
    xButton.forEach((n) => {
      n.addEventListener('click', () => {
        popupw.classList.remove('visible');
      });
    });
  });
});
