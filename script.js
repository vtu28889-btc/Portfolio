/* ==========================================================
   PORTFOLIO SCRIPT.JS - PART 1
   Core Functions
   Author: Baru Throshan Chowdary
========================================================== */


/* ==========================
   LOADER
========================== */

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1000);

});



/* ==========================
   INITIALIZE AOS ANIMATION
========================== */

AOS.init({

    duration:1000,

    once:true,

    offset:100

});



/* ==========================
   TYPING EFFECT
========================== */


const typingElement = document.getElementById("typing");


if(typingElement){

const typed = new Typed("#typing",{

    strings:[

        "Full Stack Developer",

        "Java Developer",

        "AI Enthusiast",

        "Problem Solver"

    ],

    typeSpeed:80,

    backSpeed:50,

    backDelay:1500,

    loop:true

});

}



/* ==========================
   DARK MODE TOGGLE
========================== */


const darkButton = document.getElementById("darkMode");


darkButton.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    const icon = darkButton.querySelector("i");


    if(document.body.classList.contains("light-mode")){


        icon.classList.remove("fa-moon");


        icon.classList.add("fa-sun");


        localStorage.setItem(

            "theme",

            "light"

        );


    }

    else{


        icon.classList.remove("fa-sun");


        icon.classList.add("fa-moon");


        localStorage.setItem(

            "theme",

            "dark"

        );


    }


});



/* ==========================
   LOAD SAVED THEME
========================== */


window.addEventListener("DOMContentLoaded",()=>{


    const savedTheme = localStorage.getItem("theme");


    const icon = document.querySelector("#darkMode i");


    if(savedTheme==="light"){


        document.body.classList.add("light-mode");


        if(icon){

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        }


    }


});



/* ==========================
   SMOOTH SCROLL NAVIGATION
========================== */


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        const target = document.querySelector(

            link.getAttribute("href")

        );


        if(target){


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});



/* ==========================
   HEADER SCROLL EFFECT
========================== */


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        header.classList.add("scrolled");


    }

    else{


        header.classList.remove("scrolled");


    }


});



/* ==========================
   SCROLL TO TOP BUTTON
========================== */


const topButton=document.getElementById("topBtn");


if(topButton){


window.addEventListener("scroll",()=>{


    if(window.scrollY>400){


        topButton.classList.add("show");


    }

    else{


        topButton.classList.remove("show");


    }


});



topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});


}
/* ==========================================================
   PORTFOLIO SCRIPT.JS - PART 2
   Cursor • Mobile Menu • Progress • Counters • Effects
========================================================== */


/* ==========================
   CUSTOM CURSOR
========================== */


const cursor = document.createElement("div");

cursor.className="cursor";


const cursorDot = document.createElement("div");

cursorDot.className="cursor-dot";


document.body.appendChild(cursor);

document.body.appendChild(cursorDot);



document.addEventListener("mousemove",(e)=>{


    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";


    cursorDot.style.left=e.clientX+"px";

    cursorDot.style.top=e.clientY+"px";


});



const hoverElements=document.querySelectorAll(

    "a,button,.project-card,.about-card"

);


hoverElements.forEach(element=>{


    element.addEventListener("mouseenter",()=>{


        cursor.classList.add("active");


    });



    element.addEventListener("mouseleave",()=>{


        cursor.classList.remove("active");


    });


});



/* ==========================
   MOBILE MENU
========================== */


const menuButton=document.querySelector(".menu-toggle");

const navMenu=document.querySelector("nav ul");



if(menuButton){


menuButton.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});


}



document.querySelectorAll("nav a").forEach(item=>{


    item.addEventListener("click",()=>{


        if(navMenu){


            navMenu.classList.remove("active");


        }


    });


});



/* ==========================
   SCROLL PROGRESS BAR
========================== */


const progressBar=document.createElement("div");


progressBar.className="scroll-indicator";


document.body.appendChild(progressBar);



window.addEventListener("scroll",()=>{


    let scrollTop=

    document.documentElement.scrollTop;


    let height=

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;


    let progress=

    (scrollTop/height)*100;



    progressBar.style.width=

    progress+"%";


});



/* ==========================
   ACTIVE NAVIGATION
========================== */


const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop=

        section.offsetTop-150;


        if(scrollY>=sectionTop){


            current=section.getAttribute("id");


        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");



        if(link.getAttribute("href")==="#"+current){


            link.classList.add("active");


        }


    });


});



/* ==========================
   NUMBER COUNTER ANIMATION
========================== */


const counters=document.querySelectorAll(".counter");



const startCounter=(counter)=>{


    const target=

    Number(counter.getAttribute("data-target"));



    let count=0;



    const update=()=>{


        const increment=

        target/100;



        if(count<target){


            count+=increment;


            counter.innerText=

            Math.ceil(count);


            setTimeout(update,20);


        }

        else{


            counter.innerText=target;


        }


    };


    update();


};



const observer=new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            startCounter(entry.target);


            observer.unobserve(entry.target);


        }


    });


},{


    threshold:.5


});



counters.forEach(counter=>{


    observer.observe(counter);


});



/* ==========================
   PARTICLE GENERATOR
========================== */


const particleContainer=

document.createElement("div");


particleContainer.id="particles";


document.body.appendChild(particleContainer);



function createParticle(){


    const particle=

    document.createElement("span");


    particle.className="particle";


    particle.style.left=

    Math.random()*100+"%";



    particle.style.animationDuration=

    (Math.random()*5+5)+"s";



    particle.style.width=

    Math.random()*8+3+"px";


    particle.style.height=

    particle.style.width;



    particleContainer.appendChild(particle);



    setTimeout(()=>{


        particle.remove();


    },10000);



}



setInterval(createParticle,300);



/* ==========================
   IMAGE PARALLAX EFFECT
========================== */


const heroImage=

document.querySelector(".hero-image img");



document.addEventListener("mousemove",(e)=>{


    if(heroImage){


        let x=

        (window.innerWidth/2-e.clientX)/40;


        let y=

        (window.innerHeight/2-e.clientY)/40;



        heroImage.style.transform=

        `translate(${x}px,${y}px)`;


    }


});



/* ==========================
   REVEAL ON SCROLL
========================== */


const revealElements=

document.querySelectorAll(

".about-card,.project-card,.timeline-box"

);



const revealObserver=

new IntersectionObserver((items)=>{


    items.forEach(item=>{


        if(item.isIntersecting){


            item.target.classList.add("fade-in");


        }


    });


},{


    threshold:.2


});



revealElements.forEach(element=>{


    revealObserver.observe(element);


});
/* ==========================================================
   PORTFOLIO SCRIPT.JS - PART 3
   Contact • Easter Egg • GitHub • Final Effects
========================================================== */


/* ==========================
   CONTACT FORM VALIDATION
========================== */


const contactForm = document.querySelector("form");


if(contactForm){


contactForm.addEventListener("submit",(e)=>{


    e.preventDefault();



    const name = contactForm.querySelector(
        "input[type='text']"
    ).value;


    const email = contactForm.querySelector(
        "input[type='email']"
    ).value;


    const message = contactForm.querySelector(
        "textarea"
    ).value;



    if(name==="" || email==="" || message===""){


        showNotification(
            "Please fill all fields!"
        );


        return;


    }



    showNotification(
        "Message sent successfully 🚀"
    );


    contactForm.reset();



});


}



/* ==========================
   NOTIFICATION SYSTEM
========================== */


function showNotification(text){


    const notification=

    document.createElement("div");


    notification.className="notification";


    notification.innerHTML=text;


    document.body.appendChild(notification);



    setTimeout(()=>{


        notification.remove();


    },3000);


}



/* ==========================
   EASTER EGG
   Type: sudo hire throshan
========================== */


let secret="";


document.addEventListener("keydown",(e)=>{


    secret+=e.key.toLowerCase();



    if(secret.includes("sudo hire throshan")){


        showNotification(
            "🔥 Smart choice! Let's build something amazing together!"
        );



        secret="";


    }



    if(secret.length>30){


        secret="";


    }


});



/* ==========================
   GITHUB PROJECT FETCH
========================== */


const githubUsername="baruthroshan-png";


async function loadGithubProjects(){


    const projectArea=

    document.querySelector(
        ".github-projects"
    );



    if(!projectArea){

        return;

    }



    try{


        const response=

        await fetch(

        `https://api.github.com/users/${githubUsername}/repos`

        );



        const projects=

        await response.json();



        projects.slice(0,6).forEach(repo=>{


            const card=

            document.createElement("div");



            card.className="project-card";



            card.innerHTML=`

                <div class="project-content">

                    <h3>
                    ${repo.name}
                    </h3>


                    <p>
                    ${repo.description || 
                    "My GitHub Project"}
                    </p>


                    <a href="${repo.html_url}" 
                    target="_blank">

                    View Code

                    </a>

                </div>

            `;



            projectArea.appendChild(card);



        });



    }

    catch(error){


        console.log(
            "GitHub loading failed",
            error
        );


    }


}


loadGithubProjects();




/* ==========================
   KEYBOARD SHORTCUTS
========================== */


document.addEventListener(
"keydown",
(e)=>{


    // Press H for Home

    if(e.key.toLowerCase()==="h"){


        document
        .querySelector("#home")
        ?.scrollIntoView({
            behavior:"smooth"
        });


    }



    // Press P for Projects

    if(e.key.toLowerCase()==="p"){


        document
        .querySelector("#projects")
        ?.scrollIntoView({
            behavior:"smooth"
        });


    }



});



/* ==========================
   LAZY IMAGE LOADING
========================== */


const images=

document.querySelectorAll("img");



images.forEach(img=>{


    img.setAttribute(
        "loading",
        "lazy"
    );


});



/* ==========================
   DISABLE IMAGE DRAG
========================== */


images.forEach(img=>{


    img.addEventListener(
        "dragstart",
        (e)=>{


            e.preventDefault();


        }
    );


});



/* ==========================
   CURRENT YEAR FOOTER
========================== */


const yearElement=

document.querySelector(
"footer p"
);



if(yearElement){


    const year=

    new Date().getFullYear();



    yearElement.innerHTML=

    `© ${year} All Rights Reserved.`;


}



/* ==========================
   PAGE START ANIMATION
========================== */


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "page-transition"
    );


});



/* ==========================
   PERFORMANCE CLEANUP
========================== */


window.addEventListener(
"beforeunload",
()=>{


    document
    .querySelectorAll(".particle")
    .forEach(p=>p.remove());


});



/* ==========================
   CONSOLE MESSAGE
========================== */


console.log(`

🚀 Portfolio Loaded Successfully!

👨‍💻 Developer:
Baru Throshan Chowdary

Skills:
HTML | CSS | JavaScript | Java | Python | AI

Looking for opportunities 🚀

`);
