import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  title = 0;

  emmitReceived(event: number) {
    this.title += event;
    console.log(this.title);
  }
}
