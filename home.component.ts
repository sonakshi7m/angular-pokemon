import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { IPokemon } from '../interfaces/pokemon/pokemon';
import { PokemonService } from '../services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: Observable<any>;
  pokemonDetails: Array<any>;
  previous = this.pokemonService.previous;
  next = this.pokemonService.next;
  newUrl = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokemonService.fetchPokemons()
      .subscribe((data) => {
        this.previous = this.pokemonService.previous;
        this.next = this.pokemonService.next;
        this.pokemons = data;
        console.log("Hi pokemons :: ", this.pokemons)

        this.pokemons.forEach((pokemon) => {

          this.pokemonService.fetchPokemonDetails(pokemon.url).subscribe((resp) => {

            this.pokemonDetails.push(resp)
          });
        })
        console.log(this.pokemonDetails)
      });
  }

  // fetchPokemonData(pokemon): void {
  //   console.log("single pokemon= ", pokemon)
  // }

}
