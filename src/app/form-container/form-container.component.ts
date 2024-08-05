import { Component, ContentChild } from '@angular/core';
import { CustomFormComponent } from '../custom-form/custom-form.component';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {

  @ContentChild(CustomFormComponent) formField: CustomFormComponent; // Reference to the projected form field

  ngAfterContentInit() {
    // Ensure the projected content is available and the form field is initialized
    console.log('Form field has been projected and initialized.');
  }

  updateFormField() {
    if (this.formField) {
      this.formField.setValue('Updated value from parent component.'); // Update the value of the form field
    }
  }

}
