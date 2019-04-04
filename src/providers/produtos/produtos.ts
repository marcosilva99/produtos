import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class ProdutosProvider {
  private PATH = 'produtos/';
  private PATH_IMG = 'img/';

    // FirebaseApp é para parte de Upload de Arquivos
  // AngularFireDatabase não dá suporte para o Firebase Storage
  constructor(private fb: FirebaseApp, private db: AngularFireDatabase) {}

  // file é o arquivo passando por parâmetro
  save(item: any, file: File) {
    const product = {
      name: item.name,
      description: item.description,
      imgUrl: item.imgUrl,
      price: item.price,
      categoryKey: item.categoryKey,
      categoryName: item.categoryName
    };

    if (item.key) {
      this.db.object(this.PATH + item.key).update(product).then(() => {
        // quando o usuário clicar pra salvar eu salvo a imagem e se salvou com sucesso (then) e daí fazer o upload da imagem
        // Se não ficaria assim: this.db.object(this.PATH + item.key).update(product);
        if (file) {
          //this.uploadImg(item.key, file);
        }
      });
    } else {                                // a partir do then tenho na variavel result o resultado da inclusão e pego a key que foi incluída...
      this.db.list(this.PATH).push(product).then((result: any) => {
        if (file) {
         // this.uploadImg(result.key, file);
        }
      });
    }
  }


}
