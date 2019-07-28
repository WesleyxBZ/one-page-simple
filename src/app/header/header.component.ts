import {Component, OnInit, HostListener} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  screenWidth: any;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {

    // JS NavBar menu left
    $(document).ready(function() {
      const fixHeight = function() {
        $('.navbar-nav').css('max-height', document.documentElement.clientHeight - 150);
      };
      fixHeight();
      $(window).resize(function() {
        fixHeight();
      });
      $('.navbar .navbar-toggler').on('click', function() {
        fixHeight();
      });
      $('.navbar-toggler, .overlay').on('click', function() {
        $('.mobileMenu, .overlay').toggleClass('open');
      });
    });

    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('#navbar').addClass('bg-primary');
        } else if (window.innerWidth > 992) {
          $('#navbar').removeClass('bg-primary');
        }
      });
    });

  }

}
