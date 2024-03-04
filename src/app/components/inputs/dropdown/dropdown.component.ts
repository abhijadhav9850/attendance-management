import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements ControlValueAccessor{
  @Input() list : any[] = [];
  @Input() disabled: boolean = false;
  @Input() label = '';
  @Input() placeholder = '';

  on_change: any;
  onTouched: any;
  value = ''
  
  registerOnChange(fn: any): void {
    this.on_change = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  writeValue(value: any): void {
    this.value = value
  }
}
