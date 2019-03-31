import { Input, Output, Component, OnInit, HostListener, AfterViewInit, ViewChild, ViewEncapsulation, EventEmitter} from '@angular/core';
import { MenuModel } from '@shared/models';
import { BroadcasterEvent } from '../../../events/event.broadcaster';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'rmhub-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalNavComponent implements OnInit, AfterViewInit {
  // Declare variable and constant.
  checkIsShowMenu = false;
  tabIndexHtml = 1;
  currentMenu: MenuModel;
  popupVisible = false;
  textSelectBox: string;
  textSelectBoxPerson: string;
  widthViewScroll = 1300;
  @Input() itemMenus: any[];
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private event: BroadcasterEvent) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calcWidthViewScroll();
    }, 200);
  }


  public selectMenu(e) {
    this.select.emit(e);
  }

  onShowHeaderMenu(event) {
    event.preventDefault();
    this.checkIsShowMenu = !this.checkIsShowMenu;
  }

  keydown(event) {
    if (event.keyCode === 13 || event.key === 'Enter') { // 13:Enter.
      event.preventDefault();
      this.checkIsShowMenu = !this.checkIsShowMenu;
    }
    if (this.checkIsShowMenu === true && (event.keyCode === 38 || event.keyCode === 40)) { // 38:Up and 40:Down
      this.checkIsShowMenu = true;
      event.preventDefault();
    }
    if (this.checkIsShowMenu === true && event.keyCode === 27) { // 27:Esc
      this.checkIsShowMenu = false;
      $('#btn-popover-menu').focus();
    }
    if (event.keyCode === 9) { // 9:Tab
      this.reloadMenuHiden();
      // $('body>.dx-overlay-wrapper').remove();
    }
  }

  private reloadMenuHiden() {  }

  itemClick(data) {

  }

  private closePopUp() {
    this.popupVisible = false;
    this.textSelectBox = null;
  }

  onHidden(e) {
    this.popupVisible = false;
    this.textSelectBox = null;
  }

  private calcWidthViewScroll() {
    this.reloadMenuHiden();
    this.widthViewScroll = window.innerWidth;
    const tmp = document.getElementsByTagName('body');
    if (this.widthViewScroll <= 1300) { // 786
      tmp[0].classList.add('hide-widgets-menu');
    } else {
      tmp[0].classList.remove('hide-widgets-menu');
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.calcWidthViewScroll();
  }
}
