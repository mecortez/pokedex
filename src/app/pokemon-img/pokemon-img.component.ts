import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-img',
  templateUrl: './pokemon-img.component.html',
  styleUrls: ['./pokemon-img.component.scss']
})
export class PokemonImgComponent implements OnInit {
  img = '25';
  indexImg!: number;
  @Input() idPokemon!: number;

  constructor() { }

  ngOnInit(): void {

    this.img = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0' + + '.png';

  }

}
