import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriasProvider } from './../../../providers/categorias/categorias';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-categorias-list',
  templateUrl: 'categorias-list.html',
})
export class CategoriasListPage{
categorias: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private categoriasProvider: CategoriasProvider) {
        this.categorias = this.categoriasProvider.getALL();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasListPage');
  }

}
