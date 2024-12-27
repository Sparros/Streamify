import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  username: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateUsername();
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateUsername();
    });
  }

  private updateUsername(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.username = localStorage.getItem('username');
    }
  }

  onLogout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('username');
      this.username = null;
      this.router.navigate(['/login']);
    }
  }
}