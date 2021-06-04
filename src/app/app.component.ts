import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick ($event: any) {
    console.log("ok is clicked", $event)
  }
  title = 'my-app';
  imgUrl = "https://img-3.journaldesfemmes.fr/E4fjdszC1JEraBTfqCUxtIioLTw=/1240x/smart/d47b1bd18da64f2a94a7ee7286be5ee9/ccmcms-jdf/10662309.jpg"
}
