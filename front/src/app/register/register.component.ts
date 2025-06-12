import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { nombre: '', email: '', password: '' };

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('https://backend-sparkling-forest-5281.fly.dev/api/users/register', this.user)
      .subscribe(response => {
        alert('Usuario registrado exitosamente');
      });
  }
}