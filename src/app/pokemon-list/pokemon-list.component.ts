import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokemons =  [
    {
      name: 'Picachu',
      id: 25,
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'
    },
    {
      name: 'Sandshrew',
      id: 28,
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png'
    },
    {
      name: 'Nidoran',
      id: 29,
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
