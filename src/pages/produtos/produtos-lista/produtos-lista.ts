import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
              public toast: ToastController,
              private produtosProvider: ProdutosProvider){


              this.produtos = this.produtosProvider.getAll();

  }

  newItemProdutos(){ // push é método que chama/abre uma página
                     // o nome da page vc vê na classe da Page
    this.navCtrl.push('ProdutosEditaPage');
  }

  editItemProdutos(Produto:any){
    this.navCtrl.push('ProdutosEditaPage', {produtokey: Produto.key});
  }

  removeItemProdutos(produtokey:string, hasImg: boolean){
    this.produtosProvider.remove(produtokey, hasImg);
    this.toast.create({
      message: "Categoria removida com sucess",
      duration:3000,
       position: 'buttom'})
       .present();
  }


}
