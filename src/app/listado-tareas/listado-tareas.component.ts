import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {

  titulo:string="";
  descripcion:string="";
  listaTareas:ListadoTareasComponent[]=[];

  getTitulo():string{
    return this.titulo;
  }

  getDescripcion():string{
    return this.descripcion;
  }

  getListaTareas():ListadoTareasComponent[]{
    return this.listaTareas;
  }

  aniadir(){
    let tareaNueva = new ListadoTareasComponent;
    let lista = document.querySelector("ul");
    let inputTitulo = document.querySelectorAll("input")[0];
    let inputDescripcion = document.querySelectorAll("input")[1];

    let li = document.createElement("li");

    let div = document.createElement("div");
    li.appendChild(div);

    let titulo = document.createElement("h3");
    titulo.innerHTML = inputTitulo?.value;
    div.appendChild(titulo);
    tareaNueva.titulo=titulo.innerHTML;

    let descripcion = document.createElement("p");
    descripcion.innerHTML = inputDescripcion?.value;
    div.appendChild(descripcion);
    tareaNueva.descripcion=descripcion.innerHTML;

    this.listaTareas.push(tareaNueva);

    let borrarTarea = document.createElement("elemento");
    borrarTarea.innerHTML = "Completar";
    li.appendChild(borrarTarea);

    lista?.appendChild(li);

    borrarTarea?.addEventListener('click',function(){
        li.classList.toggle("completado");
    });

  }

  eliminar(){
    let ul = document.querySelector("ul");
    let li = document.querySelectorAll("li");
    let array = Array.from(li);

    array.forEach(e => ul?.removeChild(e));

  }

}