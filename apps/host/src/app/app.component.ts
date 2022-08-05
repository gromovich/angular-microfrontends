import { StoreService } from '@angular-microfrontends/store';
import { Component } from '@angular/core';

@Component({
  selector: 'angular-microfrontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly username$ = this.storeService.username$;

  constructor(private readonly storeService: StoreService) {}
}
