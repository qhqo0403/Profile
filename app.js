/* particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

 */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["f4f1de", "e07a5f", "3d405b", "81b29a", "f2cc8f"]
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#555",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

window.onload=function(){
  const page1 = document.getElementById('page01');
  const page2 = document.getElementById('page02');
  const page3 = document.getElementById('page03');
  const page4 = document.getElementById('page04');
  const linkBar = document.getElementById('links');
  //console.log(page2.offsetTop ,page3.offsetTop , page4.offsetTop )
  const originTop = linkBar.offsetTop;
  const pageBar = document.getElementById('current-page');

  let txt = page1.querySelector('.txt>p').innerText;
  let splitTxt = txt.split('').join('</span><span>');
  splitTxt = `<span>${splitTxt}</span>`;
  document.querySelector('.txt>p').innerHTML = splitTxt;

  const revealTxt = () =>{
    let spans = document.querySelectorAll('.txt>p>span');
    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('reveal');
      }, 50*idx);
    });
  }
  revealTxt();

  const revealImg = () => {
    let initialTop = window.pageYOffset;
    if (initialTop >= page2.offsetTop) {
      let imgs = document.querySelectorAll('img');
      imgs.forEach((img, idx) => {
        setTimeout( () => {
          img.classList.add('visible');
        }, 100*idx );
      });
    }
  }
    
  const currentPage = () => {
    let initialTop = window.pageYOffset;  
    //console.log(page2.offsetTop ,page3.offsetTop , page4.offsetTop )
    if (initialTop <= page2.offsetTop){
      pageBar.style.left = '0%'; 
    } else if (initialTop <= page3.offsetTop){
      pageBar.style.left = '25%';  
    } else if (initialTop < page4.offsetTop){
      pageBar.style.left = '50%';
    } else{
      pageBar.style.left = '75%';
    }
  }

  const fixedLinkBar = () => {
    const linkBarHeight = 60;
    let initialTop = window.pageYOffset;
    
    //console.log(linkBar.offsetTop, initialTop);
    let linkBarTop = linkBar.offsetTop;
    
    if (initialTop >= (linkBarTop - linkBarHeight)){
      linkBar.classList.remove('first');
      linkBar.classList.add('second');
    }
    if (initialTop < originTop){
    linkBar.classList.remove('second');
      linkBar.style.bottom = 0;
    }
    //console.log(initialTop, linkBarHeight, linkBarTop, originTop);
  }
  

  window.addEventListener('scroll', () => {
    fixedLinkBar();
    currentPage();
    revealImg();
  });
  
  
  gsap.registerPlugin(ScrollTrigger);
  
  let projects = gsap.utils.toArray(".container div");
      
  gsap.to(projects, {
    xPercent: -100 * ( projects.length -1 ),
    ease: "none",
    scrollTrigger: {
      trigger: '.container',
      end: ()=> "+" + document.querySelector('.container').offsetWidth,
      pin: true,
      scrub: 1,
      snap: 1 / (projects.length -1),
    }
  });
}
