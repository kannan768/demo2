import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor() { }
  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target;
    const newValue = input.value.replace(/[^aeiouAEIOU]/g, ''); // Allow only vowels
    input.value = newValue;
}
}
