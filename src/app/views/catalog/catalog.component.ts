import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../interfaces/articuloApi';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [ FormsModule, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent  implements OnInit{

  articulos!: Articulo[];

  constructor(private service: ArticulosService, private router:Router){}


  ngOnInit(): void {
    this.service.getAllArticulos().subscribe(data => {
      this.articulos=data;
    })
  }

}
