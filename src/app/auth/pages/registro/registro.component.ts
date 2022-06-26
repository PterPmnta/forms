import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/emailValidator.service';
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
        [this.emailValidator],
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

  get emailErrorMessage(): string {
    const errors = this.registroForm.get('email')?.errors;
    if (errors?.required) {
      return 'El email es obligatorio.';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo.';
    } else if (errors?.emailTomado) {
      return 'El correo ya esta en uso.';
    }

    return '';
  }

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.registroForm.reset({
      nombre: 'Pedro Pimienta',
      email: 'form_section@angular.dev',
      username: 'pterpmntam',
      password: '123456',
      password_2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.registroForm.get(campo)?.invalid &&
      this.registroForm.get(campo)?.touched
    );
  }

  emailRequired() {
    return (
      this.registroForm.get('email')?.errors?.required &&
      this.registroForm.get('email')?.touched
    );
  }

  emailFormato() {
    return (
      this.registroForm.get('email')?.errors?.pattern &&
      this.registroForm.get('email')?.touched
    );
  }

  emailTomado() {
    return (
      this.registroForm.get('email')?.errors?.emailTomado &&
      this.registroForm.get('email')?.touched
    );
  }

  submitFormulario() {
    console.log(this.registroForm.value);
  }
}
