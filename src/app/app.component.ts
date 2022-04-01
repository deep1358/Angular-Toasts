import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularToastService } from 'projects/angular-toasts/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toastTitle: string = '';
  toastMessage: string = '';

  type: string = 'success';

  globalTheme: string = 'theme-1';
  globalAutoClose: string = '2000';
  globalEffect: string = 'zoom';
  globalPosition: string = 'top-right';
  globalHideCloseButton: boolean = false;
  globalHideImage: boolean = false;

  individualTheme: string = 'select';
  individualAutoClose: string = '';
  individualHideCloseButton!: boolean;
  individualHideImage!: boolean;

  @ViewChild('hideCloseButton') hideCloseButtonRef!: ElementRef;
  @ViewChild('hideImage') hideImageRef!: ElementRef;

  constructor(private _toast: AngularToastService) {}

  showToast() {
    let options: {
      theme?: string;
      timeOut?: string;
      hideCloseButton?: string;
      hideImage?: string;
    } = {};

    if (
      this.hideCloseButtonRef.nativeElement.checked ||
      this.hideImageRef.nativeElement.checked
    ) {
      options = {
        ...options,
        hideCloseButton: this.individualHideCloseButton?.toString() || 'false',
        hideImage: this.individualHideImage?.toString() || 'false',
      };
    }

    if (this.individualTheme !== 'select') {
      options = { ...options, theme: this.individualTheme };
    }

    if (this.individualAutoClose) {
      options = { ...options, timeOut: `${this.individualAutoClose}` };
    }

    if (this.type === 'success') {
      this._toast.success(
        this.toastTitle,
        this.toastMessage || 'This is success message',
        options
      );
    } else if (this.type === 'error') {
      this._toast.error(
        this.toastTitle,
        this.toastMessage || 'This is error message',
        options
      );
    } else if (this.type === 'warning') {
      this._toast.warning(
        this.toastTitle,
        this.toastMessage || 'This is warning message',
        options
      );
    } else if (this.type === 'info') {
      this._toast.info(
        this.toastTitle,
        this.toastMessage || 'This is info message',
        options
      );
    } else if (this.type === 'light') {
      this._toast.light(
        this.toastTitle,
        this.toastMessage || 'This is light message',
        options
      );
    } else if (this.type === 'dark') {
      this._toast.dark(
        this.toastTitle,
        this.toastMessage || 'This is dark message',
        options
      );
    }
  }

  closeAllToast() {
    this._toast.closeAllToasts();
  }

  reset() {
    this.toastTitle = '';
    this.toastMessage = '';
    this.type = 'success';
    this.globalTheme = 'theme-1';
    this.globalAutoClose = '2000';
    this.globalEffect = 'zoom';
    this.globalPosition = 'top-right';
    this.individualTheme = 'select';
    this.individualAutoClose = '';
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this._toast.success('', 'Copied to clipboard', { theme: 'theme-4' });
  }
}
