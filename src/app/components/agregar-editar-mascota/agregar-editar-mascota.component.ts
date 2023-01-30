import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascotas } from 'src/app/interfaces/mascotas';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.scss']
})
export class AgregarEditarMascotaComponent {

  loading: boolean = false;
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['',Validators.required],
      edad: ['',Validators.required],
      raza: ['',Validators.required],
      color: ['',Validators.required],
      peso: ['',Validators.required]
    })
  }

  agregarMascota() {
    // console.log(this.form); // Con esto tengo toda la informacion del formulario
    // const nombre = this.form.get('nombre')?.value; // Una forma de atrapar informacion del formulario
    // const nombre = this.form.value.nombre; // Otra forma de atrapar informacion del formulario

    // Armamos el objeto
    const mascota: Mascotas = {
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      raza: this.form.value.raza,
      color: this.form.value.color,
      peso: this.form.value.peso
    }

    // const mascota: Mascotas = this.form.value; // O cargamos los valores directamente del formulario

    
    
  }

}
