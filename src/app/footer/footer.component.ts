import { Component, OnInit } from '@angular/core';
import { faTwitter, faYoutube, faSteam, faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faSteam = faSteam;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faDiscord = faDiscord;

  constructor() {
  }

  ngOnInit() {
  }

}
