import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  reactiveSwitchesForm: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reactiveSwitchesForm.reset({ ...this.persona, condiciones: true });

    this.reactiveSwitchesForm.valueChanges.subscribe(
      ({ condiciones, ...rest }) => {
        console.log(rest);
      }
    );
  }

  guardar() {
    const formulario = { ...this.reactiveSwitchesForm.value };
    delete formulario.condiciones;
    this.persona = formulario;
  }
}
