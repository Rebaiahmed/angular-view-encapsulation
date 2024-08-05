import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  @Input() label: string; // Input for the label of the form field
  @Input() value: string; // Input for the initial value of the form field

  onInput(event: Event) {
    // Handle input changes (optional implementation)
  }

  setValue(newValue: string) {
    this.value = newValue; // Method to update the value of the form field
  }
}
