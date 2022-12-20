import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'app-compt',
  templateUrl: './compt.component.html',
  styleUrls: ['./compt.component.scss']
})
export class ComptComponent implements OnInit {

  personajes: any = []
  constructor(private charactersService: CharactersService){}

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
