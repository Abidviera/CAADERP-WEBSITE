import { Component } from '@angular/core';
import { gsap } from 'gsap';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrl: './erp.component.scss'
})
export class ERPComponent {
  selectedLanguage = 'English';
  selectedFlag = 'Flags/unitedstates.png';
  islanguageDropdownOpen = false;
  

  languages = [
    { name: 'English', flag: 'Flags/unitedstates.png' },
    { name: 'UAE', flag: 'Flags/UAE.png' },
    { name: 'Malayalam', flag: 'Flags/india.png' },
  ];

  languageDropdown() {
    this.islanguageDropdownOpen = true;
  }

  selectLanguage(language: {name: string; flag: string}){
    this.selectedLanguage = language.name;
    this.selectedFlag = language.flag;
    this.islanguageDropdownOpen = false;
  }

  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }


  constructor() {}

  ngAfterViewInit(): void {
   
    const textWrapper: HTMLElement | null = document.querySelector(".titles");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';
      
      anime.timeline().add({
        targets: ".titles .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el: HTMLElement, i: number) => 4800 + 40 * i,
      });
    }

    gsap.to(".box", {
      y: "-100%",
      duration: 2.4,
      ease: "Expo.easeInOut",
      delay: 1,
    });

    gsap.from("img", {
      y: "2",
      duration: 4,
      ease: "Expo.easeInOut",
      delay: 0,
    });

    gsap.to(".wrapper-img", {
      width: 400,
      height: 500,
      duration: 2.4,
      ease: "Expo.easeInOut",
      delay: 3.6,
    });

    gsap.from(".img", {
      opacity: 0,
      duration: 0.4,
      ease: "Expo.easeInOut",
      delay: 3.4,
    });

    gsap.to(".left", {
      x: -400,
      rotation: -10,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: 3.8,
    });

    gsap.to(".right", {
      x: 400,
      rotation: 10,
      duration: 2,
      ease: "Expo.easeInOut",
      delay: 3.8,
    });

    gsap.fromTo(
      ".menu > div, .hero-container > div",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "Expo.easeInOut",
        delay: 4.2,
        stagger: 0.1,
      }
    );

    gsap.from('.logo div', {
      opacity: 0,
      delay: 1,
      x: 20
    });




 // Title animation
 gsap.utils.toArray('.title').forEach(title => {
  gsap.fromTo(title as HTMLElement, {
    letterSpacing: '10px',
    opacity: 0,
    x: 300,
    skewX: 65
  }, {
    letterSpacing: '0',
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: title as HTMLElement,
      start: 'top bottom',  
      end: 'top top',  
     
    }
  });
});



gsap.utils.toArray('p').forEach(p => {
  gsap.fromTo(p as HTMLElement, {
    opacity: 0,
    x: 150,
    skewX: 30
  }, {
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: p as HTMLElement,
      start: 'top bottom',  
      end: 'top top',  
      
    }
  });
});

gsap.utils.toArray('button').forEach(button => {
  gsap.fromTo(button as HTMLElement, {
    opacity: 0
  }, {
    opacity: 1,
    duration: 1,
    delay: 1,
    scrollTrigger: button as HTMLElement
  });
});

gsap.from('.pyramid', {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 0.5
});


gsap.fromTo('.hand', {
  scale: 0.2,
  opacity: 0,
  skewY: 30
}, {
  scale: 1,
  opacity: 1,
  skewY: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: '.hand'
});

// Line animation
gsap.utils.toArray('.line').forEach(line => {
  gsap.fromTo(line as HTMLElement, {
    opacity: 0,
    width: '0%'
  }, {
    opacity: 1,
    width: '100%',
    duration: 1,
    delay: 1,
    scrollTrigger: line as HTMLElement
  });
});





   

  
    const horizontalSections = gsap.utils.toArray('.scrollcontainer') as HTMLElement[];

    horizontalSections.forEach((scrollcontainer) => {
      const sections = scrollcontainer.querySelectorAll('.panel');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollcontainer,
          pin: true,
          scrub: 1,
          end: '+=3500'
        }
      });
    });
  }


  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

}
