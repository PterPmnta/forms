import { FormControl } from '@angular/forms';

export const formPatterns = {
  nombreApellidoPattern: '([a-zA-Z]+) ([a-zA-Z]+)',
  emailPattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  noPuedeSerStrider: (control: FormControl) => {
    const usernameValue: string = control.value?.trim().toLowerCase();
    if (usernameValue === 'strider') {
      return {
        noStrider: true,
      };
    }

    return null;
  },
};
