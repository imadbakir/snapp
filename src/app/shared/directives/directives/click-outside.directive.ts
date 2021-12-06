import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() public clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:click', ['$event.target']) onClick(target: void | undefined) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit(target);
    }
  }

}
