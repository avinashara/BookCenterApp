import { Component, HostListener } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-shef';
  bookid = '';

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    const target = event.target;
    if (target.parentNode.className === 'book-container') {
      event.preventDefault();
      this.bookid = target.parentNode.getAttribute('id');
      const ref = document.getElementById('rightmenu');
      ref.style.left = (event.pageX - 10) + 'px';
      ref.style.top = (event.pageY - 10) + 'px';
      ref.style.display = 'block';
    } else {
      document.getElementById('rightmenu').style.display = 'none';
    }
  }
}
