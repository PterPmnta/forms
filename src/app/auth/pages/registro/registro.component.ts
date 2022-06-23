import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validator/validator.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup = this.formBuilder.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.validatePassword('password', 'password_2'),
      ],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  ngOnInit(): void {
    this.registroForm.reset({
      nombre: 'Pedro Pimienta',
      email: 'form_section@angular.dev',
      username: 'pterpmntam',
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
