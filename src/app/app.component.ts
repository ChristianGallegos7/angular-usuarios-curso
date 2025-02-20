import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAppComponent } from './src/components/user-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'usuarios';
}
