import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  ONLY_LETTERS_REGEX,
  SQL_INJECTION_REGEX,
  TWO_BLANKS_REGEX,
  BLANK_REGEX,
  ALPHANUMERIC_MX_REGEX,
  ALPHANUMERIC_WITH_BLANKS_MX_REGEX,
  ONLY_NUMBERS_REGEX
} from '../regex/regex';

export class CustomValidations {

  public static onlyLetters(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'string' && control.value.length === 0) {
      return null;
    }
    return (!ONLY_LETTERS_REGEX.test(control.value)) ? { onlyLetters: false } : null;
  }

  public static twoBlanks(control: AbstractControl): ValidationErrors | null {
    return (TWO_BLANKS_REGEX.test(control.value)) ? { twoBlanks: true } : null;
  }

  public static sqlInjection(control: AbstractControl): ValidationErrors | null {
    return (SQL_INJECTION_REGEX.test(control.value)) ? { sqlSintax: true } : null;
  }

  public static blank(control: AbstractControl): ValidationErrors | null {
    return (BLANK_REGEX.test(control.value)) ? { blank: true } : null;
  }

  public static alphaMx(control: AbstractControl): ValidationErrors | null {
    return (!ALPHANUMERIC_MX_REGEX.test(control.value)) ? { alpha: false } : null;
  }

  public static alphaWithBlanksMx(control: AbstractControl): ValidationErrors | null {
    return (!ALPHANUMERIC_WITH_BLANKS_MX_REGEX.test(control.value)) ? { alphaWithBlanks: false } : null;
  }

  public static onlyNumbers(control: AbstractControl): ValidationErrors | null {
    return (!ONLY_NUMBERS_REGEX.test(control.value)) ? { onlyNumbers: false } : null;
  }
}
