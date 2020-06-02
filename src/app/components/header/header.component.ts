import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  screenWidth: any;
  itensMenu = [
    {
      title: 'Ínicio',
      icon: 'home',
      link: '#init',
    },
    {
      title: 'Galeria',
      icon: 'photo_library',
      link: '#gallery',
    },
    {
      title: 'Quem sou',
      icon: 'person',
      link: '#who-am',
    },
    {
      title: 'Sobre',
      icon: 'info',
      link: '#about',
    },
    {
      title: 'Contato',
      icon: 'contacts',
      link: '#contact',
    },
  ];

  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

}
