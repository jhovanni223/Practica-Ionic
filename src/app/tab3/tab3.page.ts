import { Component } from '@angular/core';
import { User } from 'src/Interface/user.modelo';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  formulario = this.nuevoFormualario.group({
    nombre:'',
    apellido:'',
    email:'',
    telefono:''
});



usuarios:User[]=[];
constructor(private nuevoFormualario:FormBuilder){
}


CHILLSAVE(){
        let nuevoUser : User = {
            nombre :this.formulario.get('nombre')?.value,
            apellido:this.formulario.get('apellido')?.value,
            email:this.formulario.get('email')?.value,
            telefono:this.formulario.get('telefono')?.value, 
        }
    

        this.usuarios.push(nuevoUser);//PONER EN ARRAY

        console.log(this.usuarios);
        this.limpiarForm();
}


limpiarForm(){
        this.formulario.reset()
    }
}
