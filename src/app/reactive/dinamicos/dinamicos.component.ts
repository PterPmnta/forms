import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  dinamicosFormReactive: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(
      [['Metal Gear'], ['Super Mario']],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.formBuilder.control(
    '',
    Validators.required
  );

  get favoritosArr() {
    return this.dinamicosFormReactive.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  campoValido(campo: string) {
    return (
      this.dinamicosFormReactive.controls[campo].errors &&
      this.dinamicosFormReactive.controls[campo].touched
    );
  }

  guardar() {
    if (this.dinamicosFormReactive.invalid) {
      this.dinamicosFormReactive.markAllAsTouched();
      return;
    }

    console.log(this.dinamicosFormReactive);
    this.dinamicosFormReactive.reset();
  }

  agregarFavorito() {
    if (this.dinamicosFormReactive.invalid) {
      return;
    }

    /* this.favoritosArr.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    ); */

    this.favoritosArr.push(
      this.formBuilder.control(this.nuevoFavorito.value, Validators.required)
    );

    this.nuevoFavorito.reset();
  }

  eliminar(index: number) {
    this.favoritosArr.removeAt(index);
  }
}
