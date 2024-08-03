import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private router: Router) {}

  logout() {
    // Clear user data (e.g., localStorage, sessionStorage)
    localStorage.removeItem('user'); // Replace with appropriate user data storage
    this.router.navigate(['/login']);
  }
}
