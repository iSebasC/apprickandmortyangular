import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'app-compt2',
  templateUrl: './compt2.component.html',
  styleUrls: ['./compt2.component.scss']
})
export class Compt2Component implements OnInit {


  personajes: any = []
  constructor(private charactersService: CharactersService){}

  filterTerm = '';


  ngOnInit(): void {
    this.listarPersonajes();
  }

  listarPersonajes() {
    this.charactersService.get().subscribe({
      next: res=> {
        this.personajes = res
      },
      error: err=> {
        console.log(err)
      }
    })
  }

}
