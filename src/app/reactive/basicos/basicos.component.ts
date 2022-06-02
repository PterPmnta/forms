import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  basicosFormReactive: FormGroup = this.formBuilder.group({
    nombre: ['RTX 4090'],
    precio: [2000],
    existencias: [2],
  });

  constructor(private formBuilder: FormBuilder) {}
}
