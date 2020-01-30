import {Component, HostListener, OnInit} from '@angular/core';
import {
  faHome,
  faImages,
  faUser,
  faAddressBook,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  screenWidth: number;

  itensMenu = [
    {
      title: 'Inicio',
      link: '#init',
      icon: faHome
    },
    {
      title: 'Galeria',
      link: '#gallery',
      icon: faImages
    },
    {
      title: 'Quem sou',
      link: '#who-am',
      icon: faUser
    },
    {
      title: 'Sobre',
      link: '#about',
      icon: faInfoCircle
    },
    {
      title: 'Contato',
      link: '#contact',
      icon: faAddressBook
    }
  ];

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', [])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {

    $(() => {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('#navbar').addClass('bg-color navbar-scrolled');
        } else {
          $('#navbar').removeClass('bg-color navbar-scrolled');
        }
      });
    });

  }

}
