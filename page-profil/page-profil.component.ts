import { Component, OnInit } from '@angular/core';
import {ServiceProfilsService} from '../service-profils.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {

  constructor(private serviceProfil: ServiceProfilsService) { }
  tableau = this.serviceProfil.profils;
  ngOnInit() {
  }

}
