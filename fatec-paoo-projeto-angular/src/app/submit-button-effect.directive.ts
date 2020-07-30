import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSubmitButtonEffect]'
})
export class SubmitButtonEffectDirective {

  @HostBinding('style.boxShadow') boxShadow: string;

  @Input('appSubmitButtonEffect') submitButtonEffect: string;

  constructor() { }

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    this.boxShadow = '3px 2px 5px 5px blue';
    this.boxShadow = this.submitButtonEffect;

    setTimeout(() => {
      this.boxShadow = '';
    }, 3000);

  }

}
