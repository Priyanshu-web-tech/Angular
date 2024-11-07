import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  input,
  Input,
  numberAttribute,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value: string) {
  return 'hi ' + value;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  // @Input({ alias: 'userName', transform: formatName }) name = '';
  // @Input({ alias: 'userName' }) name = '';
  name = input('', {
    alias: 'userName',
  });
  @Input({ transform: booleanAttribute }) isSingle!: boolean;
  @Input({ transform: numberAttribute }) salary!: number;

  @Output() myEvent = new EventEmitter<User>();
  sendData() {
    // this.myEvent.emit({ name: this.name, newSalary: 250000 });
    this.myEvent.emit({ name: this.name(), newSalary: 250000 });
  }

  @ViewChild('myheading') heading?: ElementRef;

  constructor() {
    // init properties
    // dependency injection
    // event listeners registration
    console.log('constructor', this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // called multiple times
    console.log('ngOnChanges called', changes);
  }

  ngOnInit() {
    // init properties
    // dependency injection
    // event listeners registration
    // called after constructor
    // called once
    // intial api calls
    console.log('ngOnInit called', this.name());
  }

  ngAfterViewInit(): void {
    console.log('Inside AfterInit', this.heading?.nativeElement.textContent);
  }

  ngOnDestroy() {
    // unregister event listeners
    // called once
    console.log('object destroyed');
  }

  // name: string = 'Priyanshu';
  phoneno = '1234567890';
  status = 'single';
  // salary = 40000;
  isBtnDisabled = true;
  inputVal = 'test';

  users = [
    { name: 'Priyanshu', isSingle: true, salary: 5000 },
    { name: 'John', isSingle: false, salary: 50000 },
    { name: 'Doe', isSingle: true, salary: 60000 },
  ];

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.inputVal = value;
  }
}
