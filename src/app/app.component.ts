import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./component/main/main.component";
import { CardComponent } from "./component/card/card.component";
import { AboutpageComponent } from "./component/aboutpage/aboutpage.component";
import { GetintouchComponent } from "./component/getintouch/getintouch.component";
import { FooterComponent } from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, CardComponent, AboutpageComponent, GetintouchComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cakeshop';
}
