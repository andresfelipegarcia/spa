import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {
    //Activate route es como un observador
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.dir(this.heroe);
    });
  }

  ngOnInit() {
  }

}
