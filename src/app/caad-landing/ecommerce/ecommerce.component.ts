import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

  selectedTab: number = 0;


  selectTab(index: number): void{
    this.selectedTab = index;
  }


  
}
