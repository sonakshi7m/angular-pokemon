import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPokemon } from '../interfaces/pokemon/pokemon';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: IPokemon[] = [];
  previous = this.pokemonService.previous;
  next = this.pokemonService.next;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokemonService.fetchPokemons()
      .subscribe((data: IPokemon[]) => {
        this.previous = this.pokemonService.previous;
        this.next = this.pokemonService.next;
        this.pokemons = data;
        console.log("Hi pokemons :: ", this.pokemons)
      });
  }

}
