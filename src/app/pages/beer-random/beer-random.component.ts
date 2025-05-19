import {
  Component,
  inject,
  OnInit
} from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-random',
  imports: [],
  templateUrl: './beer-random.component.html',
  styleUrl: './beer-random.component.scss',
})
export class BeerRandomComponent implements OnInit {
  private readonly _beerService = inject(BeerService);
  beer: Beer | undefined;
  beerImage: string | undefined;

  ngOnInit(): void {
    this.getRandomBeer();
  }

  private getRandomBeer(): void {
    this._beerService.getRandomBeer().subscribe((data: Beer) => {
      this.beer = data;
      this.beerImage = `https://punkapi.online/v3/images/${data.image}`;
    });
  }
}
