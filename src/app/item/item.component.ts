import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() idPokemon!: number;
  @Input() namePokemon!: string;
  @Input() imgPokemon!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.idPokemon);


  }


}
