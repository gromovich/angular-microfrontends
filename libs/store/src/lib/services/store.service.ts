import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly username = new BehaviorSubject<string | null | undefined>(
    null
  );
  readonly username$ = this.username.asObservable();

  updateUsername(value: string | null | undefined) {
    this.username.next(value);
  }
}
