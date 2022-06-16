import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  registroForm: FormGroup = this.formBuilder.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registroForm.reset({
      nombre: 'Pedro Pimienta',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.registroForm.get(campo)?.invalid &&
      this.registroForm.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.registroForm.value);
  }
}
