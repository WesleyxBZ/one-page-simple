import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entry-vision',
  templateUrl: './entry-vision.component.html',
  styleUrls: ['./entry-vision.component.css']
})
export class EntryVisionComponent implements OnInit {
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit() {
  }

}
