import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {

  // Create a reference to the <textarea> element
  @ViewChild('editorTextArea') editorTextArea: ElementRef;

  ngAfterViewInit() {
    // Ensure the text editor is initialized and the reference is available
    console.log('Text editor initialized');
  }

  // Method to set content in the text editor
  setContent(content: string) {
    this.editorTextArea.nativeElement.value = content;
  }

  // Method to clear content from the text editor
  clearContent() {
    this.editorTextArea.nativeElement.value = '';
  }

}
