import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrl: './attendance-management.component.scss'
})
export class AttendanceManagementComponent {
  activeIndex: number | null = 0;
  imgSrc: string | null = null;

   accordionData = [
    { title: 'Empowers your workforce', content: 'Content goes here', imageUrl: '/landing/rightheadercloud1.jpg' },
    { title: 'Supports facial recognition', content: 'Content goes here', imageUrl: '/landing/desktop.png' },
    { title: 'Integrates with biometric devices', content: 'Content goes here', imageUrl: '../../../../public/landing/desktop.png' },
    { title: 'Supports customization', content: 'Content goes here', imageUrl: '../../../../public/landing/desktop.png' },
    {
      title: 'Provides useful attendance reports',
      content: 'Content goes here',
      imageUrl: '../../../../public/landing/desktop.png',
    },
  ];
  toggleAccordion(index: number, imageUrl: string): void {
    this.activeIndex = this.activeIndex === index ? null : index;
    this.imgSrc = this.activeIndex === index ? imageUrl : null;
  }
  
  ngOnInit(): void {
    this.imgSrc = this.accordionData[0]?.imageUrl || null;  }
}
