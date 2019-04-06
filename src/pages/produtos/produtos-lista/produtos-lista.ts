import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from './../../../providers/produtos/produtos';


@IonicPage()
@Component({
  selector: 'page-produtos-lista',
  templateUrl: 'produtos-lista.html',
})
export class ProdutosListaPage {
  produtos: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private produtosProvider: ProdutosProvider){


              this.produtos = this.produtosProvider.getAll();

  }

  newItemProdutos(){ // push é método que chama/abre uma página
                     // o nome da page vc vê na classe da Page
    this.navCtrl.push('ProdutosEditaPage');
  }


}
