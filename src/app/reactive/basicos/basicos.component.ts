import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  basicosFormReactive: FormGroup = this.formBuilder.group({
    nombre: ['RTX 4090', [Validators.required, Validators.minLength(3)]],
    precio: [2000, [Validators.required, Validators.min(0)]],
    existencias: [2, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  campoValido(campo: string) {
    return (
      this.basicosFormReactive.controls[campo].errors &&
      this.basicosFormReactive.controls[campo].touched
    );
  }
}
