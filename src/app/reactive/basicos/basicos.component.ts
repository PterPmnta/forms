import { Component, OnInit } from '@angular/core';
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
export class BasicosComponent implements OnInit {
  basicosFormReactive: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.basicosFormReactive.setValue({
      nombre: 'RTX 3090Ti',
      precio: 2000,
      existencias: 10,
    });
  }

  campoValido(campo: string) {
    return (
      this.basicosFormReactive.controls[campo].errors &&
      this.basicosFormReactive.controls[campo].touched
    );
  }

  guardar() {
    if (this.basicosFormReactive.invalid) {
      this.basicosFormReactive.markAllAsTouched();
      return;
    }

    console.log(this.basicosFormReactive);
    this.basicosFormReactive.reset();
  }
}
