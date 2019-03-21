import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'SobrePage';
  tab2Root = 'ProdutosListPage';
  tab3Root = 'CategoriasListPage';

  constructor() {

  }
}
