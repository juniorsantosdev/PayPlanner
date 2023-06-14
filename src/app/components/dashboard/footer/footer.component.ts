import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router,
    private localStorageService: LocalstorageService) {}

  isPaginaAtiva(url: string): boolean {
    return this.router.isActive(url, false);
  }

  logout() {
    this.localStorageService.removeLocalStorage('token')
    this.router.navigate(['/'])
  }
}
