import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons;
  @Output() nextClicked = new EventEmitter();
  @Output() previousClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
