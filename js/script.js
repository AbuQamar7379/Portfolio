import { skills } from "./skills.js";
import { project } from "./project.js";
import { personalInfo } from "./info.js";

// Personal info Adding
let aboutMe = () => {
    personalInfo.forEach((ele) => {
        document.getElementById('myName').innerText = ele.name;
        document.getElementById('contact').innerText = ele.contact;
        document.getElementById('email').innerText = ele.email;
        document.getElementById('heroImage').src = ele.Image;
        document.getElementById('navName').innerText = ele.name
    })
}
aboutMe();


// Adding Skills Acquired to DOM
let addSkills = () => {
    skills.forEach((ele) => {
        let childDiv = document.createElement("div");
        childDiv.className = "child";
        childDiv.innerHTML = `
        <div class="d-flex col-md-2 justify-content-center align-items-center child" style="background: linear-gradient(140.53deg, rgba(255, 255, 255, 0.5) 12.34%, rgba(255, 255, 255, 0) 51.46%);">

            <img src="${ele.src}" alt="${ele.name}">
            </div>
            <div class="skillName text-center">${ele.name}</div>
        
        `;

        document.getElementById("skillAcquired").append(childDiv);
    });

    // verified Skills
    document.getElementById("verifiedSkills").innerText = skills.length;
    document.getElementById('proProjects').innerText = project.length;
};
addSkills();

// ************************************************************************************************************************************************************
// Adding Project Container to DOM
let addProjectToDom = () => {
    project.forEach((ele, ind) => {
        let projectCard = document.createElement("div");
        projectCard.className = "card mb-3";
        projectCard.style.width = "100%";
        projectCard.style.backgroundColor = "#f1f1fa";
        projectCard.style.border = "none";
        projectCard.style.borderRadius = "20px";
        projectCard.style.marginBottom = "10px";

        projectCard.innerHTML = `
    <div class="card-body pb-0 ">
    <p class="cardName">${ele.name}</p>
    <h6 class="cardMfr" mb-2 text-muted">${ele.mfr}</h6>
    <p class="cardInfo">${ele.info}</p>
    <p class="cardInfo">During the course of this project,</p>
    <ul id='modules${ind}' class="cardModules">

    </ul>
    <div class="projectSkills d-flex flex-wrap justify-content-start" id="projectSkills${ind}">
  </div>
  </div>
  <div class="accordion" id="accordionExample${ind}">
  <div id="collapse${ind}" class="accordion-collapse collapse " aria-labelledby="heading${ind}" data-bs-parent="#accordionExample${ind}"></div>
      <button class="accordion-button collapsed" id="accordionButton${ind}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${ind}" aria-expanded="false" aria-controls="collapse">
        +${ele.skills.length - 6} more
      </button>        
  </div>
  </div>
  <a href="${ele.link}" target="_blank" class="text-center text-md-start"><button type="button" class="liveDemo">View Live Demo</button></a>
    `;

        document.getElementById("myProjects").append(projectCard);
    });
};
addProjectToDom();

// *****************************************************************************************************************************************************************
// Adding Project modules list to addProjectToDom
let projectModules = () => {
    for (let i = 0; i < project.length; i++) {
        for (let j = 0; j < project[i].modules.length; j++) {
            let listItem = document.createElement("li");
            listItem.innerText = project[i].modules[j];

            document.getElementById(`modules${i}`).append(listItem);
        }
    }
};
projectModules();

// Adding Project Skill Pills to addProjectToDom
let projectSkillPills = () => {
    for (let i = 0; i < project.length; i++) {
        for (let j = 0; j < project[i].skills.length; j++) {
            let skillPills = document.createElement("div");
            skillPills.className = "projectPill";

            skillPills.innerText = project[i].skills[j];
            if (j > 5) {
                skillPills.id = `skill${i}${j}`;
                skillPills.className = "projectPill d-none";
            }
            document.getElementById(`projectSkills${i}`).append(skillPills);
        }
    }
};
projectSkillPills();

// skillPill Show/Hide
let showPill = () => {
    for (let i = 0; i < project.length; i++) {
        let btnAcco = document.getElementById(`accordionButton${i}`);
        btnAcco.addEventListener("click", () => {
            if (btnAcco.getAttribute("aria-expanded") === "true") {
                btnAcco.innerText = "Hide Skills";
                for (let j = 0; j < project[i].skills.length; j++) {
                    if (j > 5) {
                        document.getElementById(`skill${i}${j}`).className = "projectPill";
                    }
                }
            } else if (btnAcco.getAttribute("aria-expanded") === "false") {
                btnAcco.innerText = `+${project[i].skills.length - 6} more`;
                for (let j = 0; j < project[i].skills.length; j++) {
                    if (j > 5) {
                        document.getElementById(`skill${i}${j}`).className =
                            "projectPill d-none";
                    }
                }
            }
        });
    }
};
showPill();