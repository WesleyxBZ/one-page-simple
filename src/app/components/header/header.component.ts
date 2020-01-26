import {Component, OnInit, HostListener} from '@angular/core';
import {
  faTimes,
  faBars,
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
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  screenWidth: any;
  faTimes = faTimes;
  faBars = faBars;

  itensMenu = [
    {
      title: 'Ínicio',
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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {

    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('#navbar').addClass('bg-primary navbar-scrolled');
        } else if (window.innerWidth > 992) {
          $('#navbar').removeClass('bg-primary navbar-scrolled');
        }
      });
    });

  }

}
