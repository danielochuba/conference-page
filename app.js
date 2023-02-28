const toggle = document.querySelector('.menu');
const menu = document.querySelector('.mobile-menu');
const modalCloseBtn = document.querySelector('#exit-btn');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  menu.classList.remove('display-none');
  menu.classList.add('display-block');
  modalCloseBtn.classList.remove('display-none');
  modalCloseBtn.classList.add('display-block');
  body.classList.add('none-scroll');
});

modalCloseBtn.addEventListener('click', () => {
  menu.classList.remove('display-block');
  menu.classList.add('display-none');
  modalCloseBtn.classList.toggle('display-block');
  body.classList.remove('none-scroll');
});

const eventSpeakers = [{
  image: '/images/portrait1.jpg',
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Enterprnurial Legal Studies at Havard Law School',
  brief: 'Benkler studies commons-based peer production, and published his seminal book; The Wealth of Networks in 2006',
}, {
  image: '/images/portrait4.jpg',
  name: 'SohYeong Noh',
  title: 'Director of Art Center Nabi and a board member of CC Korea',
  brief: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  image: '/images/portrait2.jpg',
  name: 'Kilnam Chon',
  title: '',
  brief: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the internet Society(ISOC) Internet Hall of Fame.',
},
{
  image: '/images/portrait3.jpg',
  name: 'Julia Leda',
  title: 'President of Young Pirates of Europe',
  brief: 'European ingetration, political democracy and participation of youthh through online as her major concern, Redia`s report outlinig potential changes to EU copyright law was approved by the Parliament in july.',
}, {
  image: '/images/portrait5.jpg',
  name: 'Ryan Merkley',
  title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation.',
  brief: 'Ryan has been leading open-source projects at the Mozilla Foundation such as the open source movement.',
},
{
  image: '/images/portrait1.jpg',
  name: 'Lila Tretikov',
  title: 'Execuive Director of the Wikimedia Foundation',
  brief: 'Lila Tretikov is the Executive Director of the wikimedia Foundation, the nonprofit organization that operates wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month',
},
];

const mobileSpeakersDetails = document.querySelector('.mobile-speakers');
mobileSpeakersDetails.innerHTML += `
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="card mb-3 mt-2 border-0" style="max-width: 740px;">
                    <div class="row g-0">
                        <div class="col-4 speaker-img">
                            <img src="${eventSpeakers[0].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title">${eventSpeakers[0].name}</h5>
                                <small class="speaker-title-1">${eventSpeakers[0].title}</small><hr class="speakers-rule">
                                <p class="card-text">${eventSpeakers[0].brief}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                        <div class="card mb-3 mt-2 border-0" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-4 speaker-img">
                                    <img src="${eventSpeakers[1].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${eventSpeakers[1].name}</h5>
                                        <small class="speaker-title-1">${eventSpeakers[1].title}</small><hr class="speakers-rule">
                                        <p class="card-text">${eventSpeakers[1].brief}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <button id="show-button" class="btn btn-outline-secondary see-more-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpeakers" aria-expanded="false" aria-controls="collapseSpeakers">
            See More ▽
            </button>
            <div class="collapse" id="collapseSpeakers">
                    <div class="col-lg-6">
                        <div class="card mb-3 mt-2 border-0" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-4 speaker-img">
                                    <img src="${eventSpeakers[2].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${eventSpeakers[2].name}</h5>
                                        <small class="speaker-title-1">${eventSpeakers[2].title}</small><hr class="speakers-rule">
                                        <p class="card-text">${eventSpeakers[2].brief}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-3 mt-2 border-0" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-4 speaker-img">
                                    <img src="${eventSpeakers[3].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${eventSpeakers[3].name}</h5>
                                        <small class="speaker-title-1">${eventSpeakers[3].title}</small><hr class="speakers-rule">
                                        <p class="card-text">${eventSpeakers[3].brief}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-3 mt-2 border-0" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-4 speaker-img">
                                    <img src="${eventSpeakers[4].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${eventSpeakers[4].name}</h5>
                                        <small class="speaker-title-1">${eventSpeakers[4].title}</small><hr class="speakers-rule">
                                        <p class="card-text">${eventSpeakers[4].brief}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card mb-3 mt-2 border-0" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-4 speaker-img">
                                    <img src="${eventSpeakers[5].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${eventSpeakers[5].name}</h5>
                                        <small class="speaker-title-1">${eventSpeakers[5].title}</small><hr class="speakers-rule">
                                        <p class="card-text">${eventSpeakers[5].brief}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
        `;

const seeMore = document.querySelector('#show-button');
seeMore.addEventListener('click', () => {
  seeMore.style.order = '5';
  seeMore.textContent = 'See Less △';
});

let count = 0;
seeMore.onclick = () => {
  count += 1;
};

seeMore.addEventListener('click', () => {
  if (count % 2 !== 0) {
    seeMore.style.order = '5';
    seeMore.textContent = 'See Less △';
  } else {
    seeMore.style.order = '0';
    seeMore.textContent = 'See More ▽';
  }
});

const desktopSpeakersDetails = document.querySelector('.row-desk');

let desktopSpeakers = `
`;

for (let i = 0; i <= eventSpeakers.length; i += 1) {
  desktopSpeakers = `
        <div class="col-lg-6">
            <div class="card mb-3 mt-2 border-0" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-3 speaker-img">
                        <img src="${eventSpeakers[i].image}"  class="img-fluid rounded-start mt-3 w-100 h-75 profile-shot" alt="headshot">
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h5 class="card-title">${eventSpeakers[i].name}</h5>
                            <small class="speaker-title-1">${eventSpeakers[i].title}</small><hr class="speakers-rule">
                            <p class="card-text">${eventSpeakers[i].brief}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;
  desktopSpeakersDetails.innerHTML += desktopSpeakers;
}
