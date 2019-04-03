import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brand Choices';
  titles = ['Callaway', 'Cbra', 'Mizuno', 'Ping', 'Taylormade', 'Titleist'];

  handleClick(event) {
  	this.title = event.target.innerHTML;
  }

  handleMouseOver(event) {
	event.target.classList.add('active');
  }

  handleMouseLeave(event) {
  	event.target.classList.remove('active');
  }
};
