import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]'
})
export class TextonlyDirective {

  constructor() { }
  @HostListener('input', ['$event']) onInput(event: any) {
    const input = event.target;
    const newValue = input.value.replace(/[^aishwarya]/g, ''); // Allow only alphabetical letters
    input.value = newValue;
  }
}
