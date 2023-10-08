import { skills } from "./skills.js";
import { project } from "./project.js";
import { personalInfo } from "./info.js";
import { certificates } from "./certificates.js";

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
        childDiv.className = "child ";
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
        projectCard.className = "card projectCard";
        projectCard.style.width = "100%";
        projectCard.style.backgroundColor = "#f1f1fa";
        projectCard.style.border = "none";
        projectCard.style.borderRadius = "20px";
        projectCard.style.marginBottom = "2.2rem";

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
      <button style='font-weight:600' class="accordion-button collapsed" id="accordionButton${ind}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${ind}" aria-expanded="false" aria-controls="collapse">
        +${ele.skills.length - 6} more <i class='fa fa-angle-down'></i>
      </button>        
  </div>
  </div>
  <div class="text-center text-md-start mt-4 mb-4">
  <a href="${ele.link}" target="_blank" class="text-decoration-none" ><button type="button" class="liveDemoLight" id="liveDemo${ind}">View Live Demo</button></a>
  </div>
  `;
        document.getElementById("myProjects").append(projectCard);
    });

    // portfolio project alert
    for (let i = 0; i < project.length; i++) {
        if (i === 4) {
            document.getElementById(`liveDemo${i}`).setAttribute('onclick', 'alert("You are already here. :)")');
            document.getElementById(`liveDemo${i}`).parentElement.setAttribute('target', '_self');
        }
    }
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
                btnAcco.innerHTML = "Hide Skills <i class='fa fa-angle-up'></i>";
                // btnAcco.style.color = '#3c3c3c'
                for (let j = 0; j < project[i].skills.length; j++) {
                    if (j > 5) {
                        document.getElementById(`skill${i}${j}`).className = "projectPill";
                    }
                }
            } else if (btnAcco.getAttribute("aria-expanded") === "false") {
                btnAcco.innerHTML = `+${project[i].skills.length - 6} more <i class='fa fa-angle-down'></i>`;
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

/***************************************** Certificates */
let addCertificates = () => {
    certificates.forEach((ele, ind) => {
        let certificateCol = document.createElement('div');
        certificateCol.className = 'col-lg-3 col-md-4 col-sm-6 col-12 mb-4';
        certificateCol.id = ele.organization + ind;
        certificateCol.innerHTML = `
        <div class='certificateImages'>
        <div class="img projectCard" style='border-top-left-radius : 10px; border-top-right-radius : 10px'>
            <img src="${ele.image}" alt="${ele.organization}" class="img-fluid" style="border-top-right-radius: 10px; border-top-left-radius :10px">

    </div>
    <div class="popup-image">
    <span>&times;</span>
    <img src="" alt="">
</div>
    <div class="title projectCard" style='border-bottom-left-radius : 10px; border-bottom-right-radius : 10px; background-color : #f1f1fa'>
        <h4 class='p-2 m-0 role'>${ele.role}</h4>
        <span class='p-2 mb-1 d-block organization'>${ele.organization}</span>
    </div>

</div> 
</div>      `;

        document.getElementById('certificates').append(certificateCol);
    });
}
addCertificates();

document.querySelectorAll('.certificateImages .img img').forEach((image) => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}


// Certificate Buttons below code is static for certificate buttons will Chnage later
document.querySelectorAll('.certifyBtn').forEach((ele) => {
    ele.addEventListener('click', (e) => {
        if (e.target.value === 'SoloLearn') {
            console.log(true)
            for (let i = 0; i < 23; i++) {
                if (i >= 0 && i < 13) {
                    document.getElementById(`SoloLearn${i}`).style.display = 'block';
                } else if (i > 12 && i < 16) {
                    document.getElementById(`freeCodeCamp${i}`).style.display = 'none';
                } else if (i > 15 && i < 19) {
                    document.getElementById(`Crio${i}`).style.display = 'none';
                } else if (i > 18 && i < 23) {

                    document.getElementById(`HackerRank${i}`).style.display = 'none';
                }

            }
        } else if (e.target.value === 'FreeCodeCamp') {
            console.log(true)
            for (let i = 0; i < 23; i++) {
                if (i >= 0 && i < 13) {
                    document.getElementById(`SoloLearn${i}`).style.display = 'none';
                } else if (i > 12 && i < 16) {
                    document.getElementById(`freeCodeCamp${i}`).style.display = 'block';
                } else if (i > 15 && i < 19) {
                    document.getElementById(`Crio${i}`).style.display = 'none';
                } else if (i > 18 && i < 23) {

                    document.getElementById(`HackerRank${i}`).style.display = 'none';
                }

            }
        } else if (e.target.value === 'HackerRank') {
            console.log(true)
            for (let i = 0; i < 23; i++) {
                if (i >= 0 && i < 13) {
                    document.getElementById(`SoloLearn${i}`).style.display = 'none';
                } else if (i > 12 && i < 16) {
                    document.getElementById(`freeCodeCamp${i}`).style.display = 'none';
                } else if (i > 15 && i < 19) {
                    document.getElementById(`Crio${i}`).style.display = 'none';
                } else if (i > 18 && i < 23) {

                    document.getElementById(`HackerRank${i}`).style.display = 'block';
                }
            }
        } else if (e.target.value === 'All') {
            for (let i = 0; i < 23; i++) {
                if (i >= 0 && i < 13) {
                    document.getElementById(`SoloLearn${i}`).style.display = 'block';
                } else if (i > 12 && i < 16) {
                    document.getElementById(`freeCodeCamp${i}`).style.display = 'block';
                } else if (i > 15 && i < 19) {
                    document.getElementById(`Crio${i}`).style.display = 'block';
                } else {
                    document.getElementById(`HackerRank${i}`).style.display = 'block';
                }
            }
        }
    })
})




// #31344f
// Dark and Light Mode
function toggleTheme() {
    let body = document.body;
    let skillAcquiredSection = document.getElementById('skillAcquiredSection'); // Skill Acquired Container 
    if (body.className === 'light') {
        //***************************************** HEADER SECTION *************************************************************************************** */
        // for Dark Mode pushing dark class and shift light class
        body.className = 'dark';
        body.style.backgroundColor = '#3f425a'; // change body backgroundcolor 
        document.getElementById('navLink1').style.color = '#F5F5F5'; // nav items
        document.getElementById('navLink2').style.color = '#F5F5F5'; // nav items
        document.getElementById('navLink3').style.color = '#F5F5F5'; // nav items
        document.querySelectorAll('.darkThemeColor').forEach((ele) => { // profile name section
            ele.style.color = '#F5F5F5'
        });
        document.querySelector('.roww').style.backgroundColor = '#3f425a';
        // document.querySelector('.profileRow').style.backgroundColor = '#3f425a'; // profile row background color
        document.querySelector('.bio').style.color = '#FAFAFA'; // bio color for Dark Theme
        document.querySelectorAll('.skills').forEach((ele) => { // profile skill pills background color change
            ele.style.backgroundColor = `#7659e5`;
        });


        //***************************************** SKILLS ACQUIRED SECTION *************************************************************************************** */
        document.querySelectorAll('.skillHead').forEach((ele) => {
            ele.style.color = '#F5F5F5'
        });
        document.querySelectorAll('.skillHeadLine').forEach((ele) => {
            ele.style.backgroundColor = '#F5F5F5'
        })

        skillAcquiredSection.style.backgroundColor = '#31344f'; // skill pills whole container


        document.querySelectorAll('.child').forEach((ele) => { // skills pill background color change
            ele.style.backgroundColor = '#7659e5'
        })

        document.querySelectorAll('.skillName').forEach((ele) => {
            ele.style.color = 'white'
        })


        /******************************* Project  ****************************************************************************************************/
        document.querySelectorAll('.card').forEach((ele) => {
            ele.style.backgroundColor = '#31344f'
        });

        document.querySelectorAll('.cardName').forEach((ele) => {
            ele.style.color = '#F5F5F5'
        })

        document.querySelectorAll('.cardMfr').forEach((ele) => {
            ele.style.color = '#FFFFFF'
        })

        document.querySelectorAll('.cardInfo').forEach((ele) => {
            ele.style.color = '#F5F5F5'
        })

        document.querySelectorAll('.cardModules li').forEach((ele) => {
            ele.style.color = '#F5F5F5'
        })

        document.querySelectorAll('.projectPill').forEach((ele) => {
            ele.style.backgroundColor = '#3f425a'
            ele.style.color = '#FFFFFF';
        })

        document.querySelectorAll('.accordion-button').forEach((ele) => {
            ele.style.color = '#FFFFFF'
        })

        // skill Pill Accordion
        document.querySelectorAll('.accordion-button .fa-angle-down').forEach((ele) => {
            ele.style.color = '#FFFFFF'
        });

        document.querySelectorAll('.accordion-button .fa-angle-up').forEach((ele) => {
            ele.style.color = '#FFFFFF'
        });
        for (let i = 0; i < project.length; i++) {
            let btnAcco = document.getElementById(`accordionButton${i}`);
            btnAcco.addEventListener("click", () => {
                if (btnAcco.getAttribute("aria-expanded") === "true") {
                    document.querySelectorAll('.accordion-button .fa-angle-up').forEach((ele) => {
                        ele.style.color = '#FFFFFF';
                    })

                } else if (btnAcco.getAttribute("aria-expanded") === "false") {

                    document.querySelectorAll('.accordion-button .fa-angle-down').forEach((ele) => {
                        ele.style.color = '#FFFFFF';
                    })
                }
            });
        }

        document.querySelectorAll('.liveDemo').forEach((ele) => {
            ele.style.backgroundColor = '#FFFFFF';
            ele.style.color = '#2705A7'
        })

        if (document.body.className == 'dark') {
            for (let i = 0; i < project.length; i++) {
                document.getElementById(`liveDemo${i}`).className = 'liveDemoDark';

            }
        }

        if (document.body.className == 'dark') {
            document.querySelectorAll('.certifyBtn').forEach((ele) => {
                ele.className = 'btn btn-dark certifyBtn'
            })
        }

        document.querySelectorAll('.role').forEach((ele) => {
            ele.style.backgroundColor = 'rgb(49, 52, 79)';
            ele.style.color = '#f5f5f5';

        });
        document.querySelectorAll('.organization').forEach((ele) => {
            ele.style.backgroundColor = 'rgb(49, 52, 79)';
            ele.style.color = '#f5f5f5';

        });
        document.getElementById('skillROW').style.backgroundColor = 'white';
        document.getElementById('skillROW').style.borderRadius = '40px';

    } else if (document.body.className === 'dark') {
        document.body.className = 'light';
        if (document.body.className == 'light') {
            for (let i = 0; i < project.length; i++) {
                document.getElementById(`liveDemo${i}`).className = 'liveDemoLight'
            }
        }

        //***************************************** HEADER SECTION *************************************************************************************** */
        // for Dark Mode pushing dark class and shift light class
        body.className = 'dark';
        document.getElementById('navLink1').style.color = '#F5F5F5'; // nav items
        document.getElementById('navLink2').style.color = '#F5F5F5'; // nav items

        document.querySelector('.roww').style.backgroundColor = 'rgb(255, 255, 255)';
        document.querySelectorAll('.darkThemeColor').forEach((ele) => { // profile name section
            ele.style.color = '';
        });

        //***************************************** SKILLS ACQUIRED SECTION *************************************************************************************** */
        document.querySelectorAll('.skillHead').forEach((ele) => {
            ele.style.color = '';
        });
        document.querySelectorAll('.skillHeadLine').forEach((ele) => {
            ele.style.backgroundColor = '#0d43a0';
        });
        document.querySelectorAll('.skillName').forEach((ele) => {
            ele.style.color = '';
        });


        /******************************* Project  ********************************************************************/
        document.querySelectorAll('.card').forEach((ele) => {
            ele.style.backgroundColor = 'rgb(241, 241, 250)'
        })

        document.querySelectorAll('.cardName').forEach((ele) => {
            ele.style.color = ''
        })

        document.querySelectorAll('.cardMfr').forEach((ele) => {
            ele.style.color = ''
        })
        document.querySelectorAll('.cardInfo').forEach((ele) => {
            ele.style.color = ''
        })

        document.querySelectorAll('.cardModules li').forEach((ele) => {
            ele.style.color = ''
        })

        document.querySelectorAll('.projectPill').forEach((ele) => {
            ele.style.backgroundColor = ''
            ele.style.color = '';
        })

        document.querySelectorAll('.accordion-button').forEach((ele) => {
            ele.style.color = '#3c3c3c'
        })

        document.querySelectorAll('.liveDemo').forEach((ele) => {
            ele.style.backgroundColor = '';
        })

        document.querySelectorAll('.certifyBtn').forEach((ele) => {
            ele.className = 'btn btn-light certifyBtn';
        })

        document.querySelectorAll('.role').forEach((ele) => {
            ele.style.backgroundColor = '';
            ele.style.color = '';

        });
        document.querySelectorAll('.organization').forEach((ele) => {
            ele.style.backgroundColor = '';
            ele.style.color = '';

        });

        document.querySelectorAll('.accordion-button .fa-angle-down').forEach((ele) => {
            ele.style.color = ''
        });

        document.querySelectorAll('.accordion-button .fa-angle-up').forEach((ele) => {
            ele.style.color = ''
        });
        for (let i = 0; i < project.length; i++) {
            let btnAcco = document.getElementById(`accordionButton${i}`);
            btnAcco.addEventListener("click", () => {
                if (btnAcco.getAttribute("aria-expanded") === "true") {
                    document.querySelectorAll('.accordion-button .fa-angle-up').forEach((ele) => {
                        ele.style.color = '#3c3c3c';
                    })

                } else if (btnAcco.getAttribute("aria-expanded") === "false") {

                    document.querySelectorAll('.accordion-button .fa-angle-down').forEach((ele) => {
                        ele.style.color = '#3c3c3c';
                    })
                }
            });
        }

        document.querySelector('.bio').style.color = '' // bio color for Light Theme

        body.className = 'light';
        body.style.backgroundColor = '#fff'
        skillAcquiredSection.style.backgroundColor = '#f1f1fa';

        document.getElementById('navLink1').style.color = '#0d43a0';
        document.getElementById('navLink2').style.color = '#0d43a0';
        document.getElementById('navLink3').style.color = '#0d43a0';

        document.querySelectorAll('.skills').forEach((ele) => {
            ele.style.backgroundColor = `#4883e9`
        });
        document.querySelectorAll('.child').forEach((ele) => {
            ele.style.backgroundColor = '#4883e9'
        })
    }
}

let mode1 = document.getElementById('mode1');
mode1.addEventListener('click', (toggleTheme));
let mode2 = document.getElementById('mode2');
mode2.addEventListener('click', (toggleTheme));










// Live Demo button
// for (let i = 0; i < project.length; i++) {
//     if (document.body.className === 'dark') {
//         document.getElementById(`liveDemo${i}`).className = 'liveDemoDark'
//     } else if (document.body.className === 'light') {
//         document.getElementById(`liveDemo${i}`).className = 'liveDemoLight'

//     }
// }

/*

        /*
                                                                                                                        if (document.body.className == 'light') {
                                                                                                                                            navbar.style.backgroundColor = '#4883e9'; // Change to your desired background color
                                                                                                                                        } else if (document.body.className == 'dark') {

                                                                                                                                            navbar.style.backgroundColor = '##7659e5'; // Change to your desired background color
                                                                                                                                        }
                                                                                                                        */