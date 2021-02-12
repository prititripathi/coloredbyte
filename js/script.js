particlesJS(
  "snowfall", 
  {
    "particles": {
      "number": {
        "value": 91,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff4162"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 8.017060304327615,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 0,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 170.53621458328246,
          "size": 8,
          "duration": 6.983864025791568,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  )


  particlesJS(
    "circleRotate",
    {
      "particles": {
        "number": {
          "value": 91,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#7737ff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8.017060304327615,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 0,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 170.53621458328246,
            "size": 8,
            "duration": 6.983864025791568,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    );



    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }


    /* js for btn effect */
    
    console.log("*global loaded*");
    class HoverButton {
      constructor(el) {
        this.el = el;
        this.hover = false;
        this.calculatePosition();
        this.attachEventsListener();
      }
      
      attachEventsListener() {
        window.addEventListener('mousemove', e => this.onMouseMove(e));
        window.addEventListener('resize', e => this.calculatePosition(e));
      }
      
      calculatePosition() {
        gsap.set(this.el, {
          x: 0,
          y: 0,
          scale: 1
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + (box.width * 0.5);
        this.y = box.top + (box.height * 0.5);
        this.width = box.width;
        this.height = box.height;
      }
      
      onMouseMove(e) {
        let hover = false;
        let hoverArea = (this.hover ? 0.7 : 0.5);
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt( x*x + y*y );
        if (distance < (this.width * hoverArea)) {
           hover = true;
            if (!this.hover) {
              this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }
        
        if(!hover && this.hover) {
          this.onLeave();
          this.hover = false;
        }
      }
      
      onHover(x, y) {
        gsap.to(this.el,  {
          x: (x - this.x) * 0.4,
          y: (y - this.y) * 0.4,
          scale: 1.10,
          ease: 'power2.out',
          duration: 0.4
        });
        this.el.style.zIndex = 10;
      }
      onLeave() {
        gsap.to(this.el, {
          x: 0,
          y: 0,
          scale: 1,
          ease: 'elastic.out(1.05, 0.7)',
          duration: 0.7
        });
        this.el.style.zIndex = 1;
      }
    }

    
    console.log("running attract hover");
const elements = document.querySelectorAll('.attract-hover');

let hoverButtons = [];


  
    for(let i = 0; i < elements.length; i++) {
    var element = elements[i];
    hoverButtons.push(new HoverButton(element));
		}
    
document.getElementsByTagName('body')[0].onscroll = function() {
	for(let i = 0; i < hoverButtons.length; i++) {
  	var element = hoverButtons[i];
    element.calculatePosition();
  }
};

/* text animation js */
// function([string1, string2],target id,[color1,color2])    
consoleText(['Shopify', 'webflow'], 'text',['#17e469']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#FF0034'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1200)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1200)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 25)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 200)
}


