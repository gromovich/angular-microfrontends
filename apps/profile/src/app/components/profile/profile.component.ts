import { StoreService } from '@angular-microfrontends/store';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'angular-microfrontends-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  readonly form = this.formBuilder.group({
    username: ['', Validators.required],
  });
  private readonly message = new Subject();
  readonly message$ = this.message.asObservable();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly storeService: StoreService
  ) {}

  submit() {
    const { username } = this.form.value;
    this.storeService.updateUsername(username);
    this.message.next(`✍️ You've changed username to ${username}.`);
  }
}
