import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
    ) {}
  //@Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string) {
    //     console.log('Header : ' + feature);
    //     this.featureSelected.emit(feature);
    // }
    onSaveData() {
      this.dataStorageService.storeRecipes()
        .subscribe(
          (response: Response) => {
            console.log('Respons: ', response);
          }
        );
    }
    onFetchData() {
      this.dataStorageService.getRecipes();
    }

    onLogout() {
      this.authService.logout();
    }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
