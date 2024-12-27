import { Component } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';  
  constructor(private filmService: FilmService) {}

  // Method to handle changes in the search text
  onFilterChange() {
    console.log("Filter changed:", this.searchText);  // This can be used to trigger movie list filtering
  }
}
