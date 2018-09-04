  let projects = [
    {
        title: "1st Cool Project ",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "2nd Cool Project",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "This is the best project",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "3rd Cool Project",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "This is the best project",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];



const PrintToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};


const createProjectCard = () => {
  let xString = '';
  for (let i = 0; i < projects.length; i++) {
      if (projects[i].available === true) {
          xString += `<div class="project">`;
          xString +=    `<img class="image" src="${projects[i].screenshot}"></img>`;
          xString +=    `<h3 class="title">${projects[i].title}</h3>`
          xString +=    `<p class="description">Description: ${projects[i].description}</p>`;
          xString +=    `<p class="technologies-used">Technologies Used: ${projects[i].technologiesUsed}</p>`;
          xString +=    `<p class="availability">${projects[i].available}</p>`;
          xString +=    `<button class="project-button"><a target="_blank" href="${projects[i].url}">view website</a></button>`;
          xString +=    `<button class="github-button"><a target="_blank" href="${projects[i].githubUrl}">view github</a></button>`;
          xString +=    `</div>`;           
          xString += `</div>`;
      }
  }
  PrintToDom(xString, 'projectsPage');
};

createProjectCard();

  