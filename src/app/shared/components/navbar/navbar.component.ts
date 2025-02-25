import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
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

}
