import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';
import { FormFieldValue } from '../form-field.interface';

@Component({
  selector: 'app-custom-form-field-control',
  templateUrl: './custom-form-field-control.component.html',
  styleUrls: ['./custom-form-field-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: CustomFormFieldControlComponent,
    },
  ],
})
export class CustomFormFieldControlComponent
  implements OnInit, OnDestroy, MatFormFieldControl<FormFieldValue>
{
  private _value: FormFieldValue;
  stateChanges = new Subject<void>();
  @Input()
  set value(value: FormFieldValue) {
    this._value = value;
    this.stateChanges.next();
  }
  get value() {
    return this._value;
  }

  static nextId = 0;
  @HostBinding()
  id = `custom-form-field-id${CustomFormFieldControlComponent.nextId++}`;

  private _placeholder: string;
  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  get placeholder() {
    return this._placeholder;
  }

  @ViewChild(MatInput, { read: ElementRef, static: true })
  input: ElementRef;
  focused: boolean = true;

  ngControl: NgControl | null = null;

  get empty(): boolean {
    return !this.value.query && !this.value.scope;
  }

  @HostBinding('class.floated')
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  required: boolean;

  @Input()
  disabled: boolean;

  errorState: boolean = false;

  controlType: string | undefined = 'custom-form-field';
  autofilled?: boolean | undefined = false;
  userAriaDescribedBy?: string | undefined;

  @HostBinding('attr.aria-describedby') describedBy = '';

  constructor(private focusMonitor: FocusMonitor) {}

  ngOnInit(): void {
    this.focusMonitor.monitor(this.input).subscribe((focused) => {
      this.focused = !!focused;
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    this.focusMonitor.focusVia(this.input, 'program');
  }
}
