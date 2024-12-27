import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  searchText: string = ''; 
  films: any[] = [];
  filteredFilms: any[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getMovies().subscribe((data) => {
      this.films = data;
      this.filteredFilms = data;
    });
  }

  // Method to handle changes in the search text and filter movies
  onFilterChange(): void {
    console.log('Filter changed:', this.searchText);
    this.filterFilms();
  }

  // Method to filter films based on searchText
  filterFilms(): void {
    this.filteredFilms = this.films.filter(film =>
      film.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
