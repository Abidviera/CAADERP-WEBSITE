import { Component } from '@angular/core';
import { gsap } from 'gsap';
import anime from 'animejs/lib/anime.es.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
 
  constructor(private router: Router) {}

  startOnlineStore() {
    window.scrollTo(0, 0);
    this.router.navigate(['/ecommerce']);
  }
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }


  
}
