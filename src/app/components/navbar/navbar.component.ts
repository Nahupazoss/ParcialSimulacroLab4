import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: UserServiceService)
  {

  }

  ngOnInit(): void 
  {
    this.authService.getUserEstado();
  }

  onClick() 
  {
    this.authService.logout();
  }


}
