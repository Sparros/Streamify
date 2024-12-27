import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Input() searchText: string = '';  // input binding
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter(); // Emit change 

  onSearch() {
    this.searchTextChange.emit(this.searchText);  
  }
}
