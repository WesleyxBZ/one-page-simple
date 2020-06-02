import {Component, OnInit} from '@angular/core';
import {faTwitter, faYoutube, faSteam, faGithub, faInstagram, faDiscord} from '@fortawesome/free-brands-svg-icons';
import {MdcSnackbar} from '@angular-mdc/web';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faSteam = faSteam;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faDiscord = faDiscord;

  constructor(private snackbar: MdcSnackbar) {
  }

  ngOnInit() {
  }

  discordSnackBar() {
    this.snackbar.open(`WesleyxBZ #8453`, ' ', {
      dismiss: true
    });
  }

}
