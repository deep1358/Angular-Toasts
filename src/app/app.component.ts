import { Component } from '@angular/core';
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

  individualTheme: string = 'select';
  individualAutoClose: string = '';

  constructor(private _toast: AngularToastService) {}

  showToast() {
    let options: { theme?: string; timeOut?: string } = {};
    if (this.individualTheme !== 'select') {
      options = { theme: this.individualTheme };
    }

    if (this.individualAutoClose) {
      options = { timeOut: `${this.individualAutoClose}` };
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
