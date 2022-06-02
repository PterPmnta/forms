import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  dinamicosFormReactive: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
  });

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
}
