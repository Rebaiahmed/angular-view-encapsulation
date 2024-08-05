import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormContainerComponent } from './form-container/form-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent,
    CustomFormComponent,
    TextEditorComponent,
    FormContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
