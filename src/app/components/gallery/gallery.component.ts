import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    {
      title: 'Festival de balonismo - 2016',
      pathLD: 'assets/img/galeria/high-quality/1.jpg',
      pathHD: 'assets/img/galeria/low-quality/1.jpg',
      dataDelay: 500
    },
    {
      title: 'Por do sol de outubro',
      pathLD: 'assets/img/galeria/high-quality/2.jpg',
      pathHD: 'assets/img/galeria/low-quality/2.jpg',
      dataDelay: 1000
    },
    {
      title: 'Basílica de Nossa Senhora Medianeira',
      pathLD: 'assets/img/galeria/high-quality/3.jpg',
      pathHD: 'assets/img/galeria/low-quality/3.jpg',
      dataDelay: 1500
    },
    {
      title: 'EXPOAER - 2017',
      pathLD: 'assets/img/galeria/high-quality/4.jpg',
      pathHD: 'assets/img/galeria/low-quality/4.jpg',
      dataDelay: 2000
    },
    {
      title: 'Noite em P&B',
      pathLD: 'assets/img/galeria/high-quality/5.jpg',
      pathHD: 'assets/img/galeria/low-quality/5.jpg',
      dataDelay: 2500
    },
    {
      title: 'Um longo caminho',
      pathLD: 'assets/img/galeria/high-quality/6.jpg',
      pathHD: 'assets/img/galeria/low-quality/6.jpg',
      dataDelay: 3000
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
