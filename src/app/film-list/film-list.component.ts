import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';

@Component({
  selector: 'app-film-list',
  standalone: false,
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() searchText: string = '';
  films: any[] = [];
  filteredFilms: any[] = [];
  selectedGenre: string = '';
  selectedRating: number | null = null;
  selectedSorting: string = '';

  // Available genres, ratings, and sorting options
  genres: string[] = [];
  ratings: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, ..., 10]
  sortingOptions: string[] = ['Alphabetical (A-Z)', 'Alphabetical (Z-A)', 'Rating (Low to High)', 'Rating (High to Low)'];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    // Fetch movies from the service
    this.filmService.getMovies().subscribe((data) => {
      this.films = data;
      this.filteredFilms = data;

      // Populate the genres array dynamically from the movie data
      this.genres = [...new Set(data.map((film) => film.genre))];
    });
  }

  ngOnChanges(): void {
    this.filterFilms();
  }

  // Filter films based on search text, genre, and rating
  filterFilms(): void {
    this.filteredFilms = this.films
      .filter((film) => {
        const filmRating = Number(film.rating); 
        const matchesSearch = film.title.toLowerCase().includes(this.searchText.toLowerCase());
        const matchesGenre = this.selectedGenre ? film.genre === this.selectedGenre : true;
        const matchesRating = this.selectedRating !== null ? filmRating >= this.selectedRating : true;
  
        return matchesSearch && matchesGenre && matchesRating;
      })
      .sort((a, b) => this.sortFilms(a, b));
  }
  

  // Handle genre, rating, and sorting changes
  onFilterChange(): void {
    this.filterFilms();
  }

  // Sort films based on the selected sorting option
  sortFilms(a: any, b: any): number {
    switch (this.selectedSorting) {
      case 'Alphabetical (A-Z)':
        return a.title.localeCompare(b.title);
      case 'Alphabetical (Z-A)':
        return b.title.localeCompare(a.title);
      case 'Rating (Low to High)':
        return a.rating - b.rating;
      case 'Rating (High to Low)':
        return b.rating - a.rating;
      default:
        return 0;
    }
  }
}
