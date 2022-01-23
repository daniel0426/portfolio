
function getProject(){
     return fetch("../db/projects.json")
     .then(response => response.json())
     .then(json=> json.projects);
 
}

function getSubProject(){
    
    return fetch("../db/projects.json")
    .then(response => response.json() )
    .then(data => data.subProjects);
}


function displayProject(projects){
    const projectContainer = document.querySelector('.current-projects');
    projectContainer.innerHTML = projects.map(project => createProjectHTML(project)).join('')
    // const eachProjectArray = [...document.querySelectorAll('.current-project')];
    // const container = document.querySelector('.project__container');
}

function displaySubProject(subProjects){
    const subProjectContainer = document.querySelector('.sub-projects');
    subProjectContainer.innerHTML = subProjects.map(subProject => createSubProjectHTML(subProject)).join('')

}

function createSubProjectHTML(subProject){
    return `
        <li class="sub-project" data-aos="zoom-in-up">
            <div class="img-container">
                <img class="subProject__img" src="${subProject.imgURL}" alt="subProjectImg" />
            </div>
            <div class="subProject__desc">
                <div >
                    <h1 class="subProject__title">${subProject.title}</h1>
                    <p class="current__explain">${subProject.description}</p>
                </div>
                <div class="subProject__skills-container">
                    <h3 class="current-skills-title">Tech used</h3>
                    <ul class="subProject-skills">
                        ${subProject.skills.map(skill => createSubProjectSkillHTML(skill)).join('')}
                    </ul>
                </div>
            </div>
            <div class="subProject-btn__container">
                    <a href=${subProject.siteURL} target="_blank"><button>View Site</button></a>
                    <a href=${subProject.githubURL} target="_blank"><button>View Code</button></a>
            </div>
        </li>
    `;
}
function createSubProjectSkillHTML(skill){
    return `<li>${skill}</li>`;
}


function createProjectHTML(project){
    return `
        <li class="current-project" data-aos="zoom-in-up">
                <img  class="current__img" src='${project.imgURL}' alt="projectImg">
            <div class="current__desc">
                <h1 class="current__title">${project.title}</h1>
                <p class="current__explain">${project.description}</p>
                <div class="current__skills-container">
                    <h3 class="current-skills-title">Tech used</h3>
                    <ul class="current-skills">
                        ${project.skills.map(skill => createSkillHTML(skill)).join('')}
                    </ul>
                </div>
                <div class="current-btn__container">
                    <a href=${project.siteURL} target="_blank"><button>View Site</button></a>
                    <a href=${project.githubURL} target="_blank"><button>View Code</button></a>
                </div>
            </div>
        </li>
    `;
}


function createSkillHTML(skill){
    return `<li>${skill}</li>`;
}




getProject()
.then(projects => {
    displayProject(projects);
})
.catch(err => console.log(err))

getSubProject()
.then(subProjects => {
    displaySubProject(subProjects);
})
.catch(err => console.log(err))


function navController (){
    const mobileNavOpen = document.querySelector('.responsive-nav');
    const mobileNavClose = document.querySelector('.close-nav');
    const mobileNav = document.querySelector('.mobile-nav');
    const links = mobileNav.querySelectorAll('a');

    mobileNavOpen.addEventListener('click', ()=> {
        mobileNav.classList.add('showup');
    })
    mobileNavClose.addEventListener('click', ()=> {
        mobileNav.classList.remove('showup');
    })

    links.forEach(link => {
        link.addEventListener('click', ()=> {
            mobileNav.classList.remove('showup');
        })
    })
}


function navBarScroll(){
    let lastScrollTop = 0;
    const navbar = document.querySelector(".nav");
    
    window.addEventListener('scroll', ()=> {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop> lastScrollTop){
            navbar.style.top ="-5em";
        }else{
            navbar.style.top='0';
        }
        lastScrollTop = scrollTop;
    })
}

AOS.init();

function init(){
    navController();
    navBarScroll();
}

init()