import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../compartido/api.service';
import {CatalogoProductoModel} from './catalogo-productos.model'
@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  formID !: FormGroup;
  CatalogoProductoModelObj : CatalogoProductoModel = new CatalogoProductoModel();
  CatalogoData !: any;
  MostrarAgregar !: boolean; //Permite mostrar/esconder el botón agregar
  MostrarActualizar !: boolean;//Permite mostrar/esconder el botón actualizar
  constructor(private formbuilder: FormBuilder, 
    private api : ApiService) { }

  ngOnInit(): void {
    this.formID = this.formbuilder.group({
      Nombre: [''],
      Descripcion: [''],
      Tipo: [''],
      Precio: [''],
      Stock: ['']
    }) 
    this.getAllProductos();
  }
  clickAgregarProducto(){
    this.formID.reset();
    this.MostrarAgregar = true;
    this.MostrarActualizar = false;
  }
  postDetallesProducto(){
    this.CatalogoProductoModelObj.Nombre = this.formID.value.Nombre;
    this.CatalogoProductoModelObj.Descripcion = this.formID.value.Descripcion;
    this.CatalogoProductoModelObj.Tipo = this.formID.value.Tipo;
    this.CatalogoProductoModelObj.Precio = this.formID.value.Precio;
    this.CatalogoProductoModelObj.Stock = this.formID.value.Stock;

    this.api.postProducto(this.CatalogoProductoModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Producto agregado exitosamente");
      let ref = document.getElementById('cancelar')
      ref?.click();
      this.formID.reset();
      this.getAllProductos();

    },
    err =>{
      alert("Algo salió mal")
    })
  }
  getAllProductos(){
    this.api.getProducto()
    .subscribe(res=>{
      this.CatalogoData = res;
    })
  }
  deleteProducto(row : any){
    this.api.deleteProducto(row.id)
    .subscribe(res=>{
      alert("Producto Eliminado")
      this.getAllProductos();
    })
  }

  onEdit(row :any){
    this.MostrarAgregar = false; //Se esconde el botón Agregar
    this.MostrarActualizar = true;//Se muestra el botón actualizar
    this.CatalogoProductoModelObj.id = row.id;
    this.formID.controls['Nombre'].setValue(row.Nombre);
    this.formID.controls['Descripcion'].setValue(row.Descripcion);
    this.formID.controls['Tipo'].setValue(row.Tipo);
    this.formID.controls['Precio'].setValue(row.Precio);
    this.formID.controls['Stock'].setValue(row.Stock);

  }
  updateDetallesProduto(){
    this.CatalogoProductoModelObj.Nombre = this.formID.value.Nombre;
    this.CatalogoProductoModelObj.Descripcion = this.formID.value.Descripcion;
    this.CatalogoProductoModelObj.Tipo = this.formID.value.Tipo;
    this.CatalogoProductoModelObj.Precio = this.formID.value.Precio;
    this.CatalogoProductoModelObj.Stock = this.formID.value.Stock;

    this.api.updateProducto(this.CatalogoProductoModelObj,this.CatalogoProductoModelObj.id )
    .subscribe(res=>{
      alert("Producto actualizado exitosamente");
      let ref = document.getElementById('cancelar')
      ref?.click();
      this.formID.reset();
      this.getAllProductos();

    })
  
  }

}
