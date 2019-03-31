import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SetClassRight } from '@shared/authorize/authorize.decorators';
import { CommonConstant } from '@shared/common/constant.common';
import { LayoutSandbox } from '@shared/layouts/layouts.sandbox';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';

import { ModuleConfigNavigatorItem, ModuleConfigNavigatorItemsQuery } from '../models';
import { ModuleConfigSandbox } from '../module-config.sandbox';

@Component({
  selector: 'rmhub-module-config-navigator',
  templateUrl: './module-config-navigator.component.html',
  styleUrls: ['./module-config-navigator.component.scss']
})
@SetClassRight('CtlModuleConfig')
export class ModuleConfigNavigatorComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  languageCurrent = localStorage.getItem('currentLang.Culture');
  moduleConfigNavigatorItemsQuery: ModuleConfigNavigatorItemsQuery;
  subscriptions: Subscription[] = [];
  moduleConfigNavigatorItems: ModuleConfigNavigatorItem[] = [];
  // Variables for set selected item
  stickyItems: any;
  menuItemID: number;
  menuItemUrl: string;
  initialSelectedItem: ModuleConfigNavigatorItem;
  selectedItem: ModuleConfigNavigatorItem;
  currentKey: any;
  // Variables for confirm popup
  isFormDirty: boolean;
  isPopupVisible: boolean;

  constructor(
    public moduleConfigSandbox: ModuleConfigSandbox,
    public layoutSandbox: LayoutSandbox,
    public translateService: TranslateService,
    private router: Router) {
  }

  ngOnInit() {
    this.registerEvents();
    this.initSelectNode();
  }

  ngAfterViewInit() {
  }

  ngDoCheck() {
    if (localStorage.getItem('currentLang.Culture') !== this.languageCurrent) {
      this.languageCurrent = localStorage.getItem('currentLang.Culture');
      this.moduleConfigSandbox.loadModuleConfigNavigatorItems(this.moduleConfigNavigatorItemsQuery);
    }
  }

  ngOnDestroy() {
    this.unregisterEvents();
  }

  private initData(moduleClassName): void {
    this.moduleConfigNavigatorItemsQuery = new ModuleConfigNavigatorItemsQuery();
    this.moduleConfigNavigatorItemsQuery.ClassName = moduleClassName;
    this.moduleConfigNavigatorItemsQuery.LanguageCode = localStorage.getItem('languageCode') || '1';
    if (this.currentKey !== moduleClassName) {
      this.moduleConfigSandbox.loadModuleConfigNavigatorItems(this.moduleConfigNavigatorItemsQuery);
      this.currentKey = moduleClassName;
    }
  }

  private initSelectNode(): void {
    const menuItem = CommonConstant.URLS_BY_ID.filter(item => {
      return '/app/' + item.url === this.router.url;
    })[0];
    if (menuItem) {
      this.menuItemID = menuItem.menuItemID;
      this.moduleConfigSandbox.selectNode({ attr: this.menuItemID });
    }
  }

  private initSelectedNode(): void {
    setTimeout(() => {
      this.setSelectedNode(this.menuItemID, true);
    }, 1000);
  }

  private registerEvents(str?: any): void {
    // Subscribe to get specific module and selected node from right content
    this.subscriptions.push(this.moduleConfigSandbox.initialParameters$.subscribe((initialObject: any) => {
      if (!isNullOrUndefined(initialObject)) {
        this.initData(initialObject.moduleClassName);
      }
    }));

    // Subscribe to get treeview datasource
    this.subscriptions.push(this.moduleConfigSandbox.moduleConfigNavigatorItems$.subscribe(data => {
      if (!isNullOrUndefined(data)) {
        this.moduleConfigNavigatorItems = data;
        this.initSelectedNode();
      }
    }));

    // Subscribe edit mode status of right content
    this.subscriptions.push(this.moduleConfigSandbox.isEditModeStatus$.subscribe((isEditMode: any) => {
      if (!isNullOrUndefined(isEditMode)) {
        this.displayEdittingIcon(isEditMode.attr);
      }
    }));

    // Subscribe dirty form status of right content
    this.subscriptions.push(this.moduleConfigSandbox.isDirtyFormStatus$.subscribe((isFormDirty: any) => {
      if (!isNullOrUndefined(isFormDirty)) {
        this.isFormDirty = isFormDirty;
      }
    }));

    this.subscriptions.push(this.moduleConfigSandbox.selectNode$.subscribe((menuItemID: any) => {
      if (menuItemID.attr) {
        this.setSelectedNode(menuItemID.attr, false);
        this.initialSelectedItem = this.moduleConfigNavigatorItems.filter(item => item.menuItemID === menuItemID.attr)[0];
      }
    }));

    this.subscriptions.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleUrlChange(event.url);
      }
    }));

    this.subscriptions.push(this.layoutSandbox.selectedAction$.subscribe(data => {
      if (!isNullOrUndefined(data)) {
        this.stickyItems = data;
      }
    })
    );

  }

  private unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Function for tooltip
  onContentReady(e) {
    const elements = e.component.element().querySelectorAll('.dx-treeview-item');
    elements.forEach((ele, index) => {
      ele.setAttribute('title', e.component.getDataSource().items()[index].text);
    });
  }

  private setSelectedNode(menuItemID: number, isFirstLoad: boolean): void {
  }

  onItemClick(e) {
    this.selectedItem = e.itemData;
    if (!isNullOrUndefined(this.selectedItem.menuItemID) && !isNullOrUndefined(this.selectedItem.className)) {
      const checkUrl = CommonConstant.URLS_BY_ID.filter(item => item.menuItemID === this.selectedItem.menuItemID)[0].url;
      if (checkUrl !== '') {
        this.router.navigate(['/app/' + checkUrl]);
        this.setSelectedNode(this.selectedItem.menuItemID, false);
      }
    } else {
      this.setSelectedNode(this.selectedItem.menuItemID, false);
    }
  }

  displayEdittingIcon(isEditMode): void {
  }

  private hideEdittingIcon() {
  }

  private handleUrlChange(url: string) {
    // TODO: Update URL to sticky
    if (this.stickyItems) {
      this.stickyItems.forEach(item => {
        if (!item.url.split('/')[5] && item.url.split('/')[2] === url.split('/')[2]) {
          item.data.type = '';
          this.layoutSandbox.updateOrAddSticky(item.data, url);
        }
      });
    }
    const menuItem = CommonConstant.URLS_BY_ID.filter(item => {
      return '/app/' + item.url === url;
    })[0];
    if (menuItem) {
      this.menuItemID = menuItem.menuItemID;
      this.moduleConfigSandbox.selectNode({ attr: this.menuItemID });
    }
  }

}
