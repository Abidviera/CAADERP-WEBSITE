import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CaadERP';

  

  ngOnInit(): void {
  
    AOS.init();
    // window.addEventListener('resize', () => {
    //   AOS.refresh();
    // });
  }



}
