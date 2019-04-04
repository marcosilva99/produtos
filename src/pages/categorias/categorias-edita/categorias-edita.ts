import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasProvider } from './../../../providers/categorias/categorias';


@IonicPage()
@Component({
  selector: 'page-categorias-edita',
  templateUrl: 'categorias-edita.html',
})
export class CategoriasEditaPage {
title:string;
categoria:any;
form: FormGroup;



  constructor(public navCtrl: NavController, public navParams: NavParams, private categoriasProvider: CategoriasProvider, private FormBuilder: FormBuilder, private toast: ToastController) {
    this.categoria = this.navParams.data.categoriakey || {}
    this.SetupPageTitle();
    this.createForm();

    const subscribe = this.categoriasProvider.get(this.navParams.data.categoriakey).subscribe(categoriaData => {
      subscribe.unsubscribe();
      this.categoria = categoriaData;
     // console.log(this.categoria);
     this.createForm();
    })
  }


private SetupPageTitle(){
  if(this.navParams.data.categoriakey){
    this.title="Alterando Categoria";

  } else{
    this.title="Novo Categoria";
  }

}

private createForm(){
  this.form = this.FormBuilder.group({
    key:[this.categoria.key],
    name:[this.categoria.name, Validators.required],
    description:[this.categoria.description]

  })

}

onSubmit(){
  if (this.form.valid){
    this.categoriasProvider.save(this.form.value);
    this.toast.create({
      message: "Categoria salva com sucesso!!!",
      duration:3000,
      position: 'bottom' })
      .present();
    }
    this.navCtrl.pop();

  }
}


