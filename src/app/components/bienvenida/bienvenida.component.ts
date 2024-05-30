import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export default class BienvenidaComponent implements OnInit
{
  userData: any = {};

  constructor(private githubService: GithubService) 
  {

  }

  ngOnInit(): void 
  {
    const username = 'Nahupazoss'; // Cambia esto al nombre de usuario deseado
    this.githubService.getUserData(username).subscribe(data => {
      this.userData = data;
    });
  }

}
