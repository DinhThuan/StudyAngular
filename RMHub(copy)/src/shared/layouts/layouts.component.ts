import { Router, NavigationEnd } from '@angular/router';
import { LayoutSandbox } from './layouts.sandbox';
import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '@shared/models';
import { AppSandbox } from '@app/app.sandbox';
import { AppEnums } from '@shared/AppEnum';
import { SearchBoxDatas } from '@shared/mocks/search-boxs.mock';
import { strings as deStrings } from 'ngx-timeago/language-strings/de';
import { strings as englishStrings } from 'ngx-timeago/language-strings/en';
import { TimeagoIntl } from 'ngx-timeago';

@Component({
  host: { '(window:keydown)': 'hotkeys($event)' },
  selector: 'rmhub-layouts',
  templateUrl: './layouts.component.html',
})
export class LayoutsComponent implements OnInit, OnDestroy {

  private userImageFolder = '/assets/images/users/';
  public userImage = `${this.userImageFolder}/user.jpg`;
  public userEmail = '';
  public copyRightName: number;
  searchBoxDatas = SearchBoxDatas;
  isFallbearbeitung: boolean;
  moduleConfigUrls = [
    'modul-konfiguration',
    'landesxindex',
    'gemeinde-daten',
    'lander-aktualisieren',
    'postleitzahlen-aktualisieren',
    'sostat',
    'vorlagenverwaltung',
    'vorlagenverwaltungs',
    'vorlagen-profile',
    'basis-textmarken',
  ];

  @Input() isNavbar: boolean;
  @ViewChild('wrapperContainer', { read: ElementRef }) mainWrapperContainer: ElementRef;
  private subscriptions = new Subscription();
  lang = 'de';
  constructor(
    private router: Router,
    private intl: TimeagoIntl,
    public layoutSandbox: LayoutSandbox,
    private appSandbox: AppSandbox) {}

  ngOnInit() {
    this.appSandbox.setupRoles();
    this.appSandbox.registerEvents();
    this.copyRightName = new Date().getFullYear();
    this.registerEvents();
    this.setLang(this.lang);
    this.subscriptions.add(this.layoutSandbox.selectedLang$.subscribe(lang => {
      this.setLang(lang);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private registerEvents() {
    // Subscribes to user changes
    this.subscriptions.add(this.layoutSandbox.loggedUser$.subscribe((user: User) => {
      if (user.isLoggedIn) {
        this.userEmail = localStorage.getItem('user');
      }
    }));
  }

  setLang(lang: string) {
    this.lang = lang;
    switch (lang) {
      case 'en': this.intl.strings = englishStrings; break;
      case 'de': this.intl.strings = deStrings; break;
      default: break;
    }
    this.intl.changes.next();
  }

  selectMenu(menu): void {
    if (!menu || menu.url === '' || menu.url === undefined || menu.items.length > 0) { return; }
    if (menu.id === 403) {
      // TODO Gehezu H002
      return;
    }
    if (menu.id === 1297) {
      return;
    }
    this.layoutSandbox.selectMenu(menu);
  }
  hotkeys(event) {}

}
