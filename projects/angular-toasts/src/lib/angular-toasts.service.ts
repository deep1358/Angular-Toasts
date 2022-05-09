import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from './angular-toasts.interface';

@Injectable({
  providedIn: 'root',
})
export class AngularToastService {
  // --------------------Toast variables--------------------

  Toasts: Toast[] = [];
  autoClose!: string;
  theme!: string;
  effect!: string;
  hideCloseButton!: string;
  hideImage!: string;

  // --------------------Toast observables--------------------

  private TotalToasts = new BehaviorSubject<Toast[]>(this.Toasts);
  currentToasts = this.TotalToasts.asObservable();

  private topOrBottom = new BehaviorSubject<string>('top');

  setTopOrBottom(position: string) {
    this.topOrBottom.next(position);
  }

  // --------------------Toast Success function--------------------

  success(
    title: string,
    message: string,
    options: {
      timeOut?: string;
      theme?: string;
      hideCloseButton?: string;
      hideImage?: string;
    } = {}
  ) {
    this.showToast(title, message, 'success', options);
  }

  // --------------------Toast Error function--------------------

  error(
    title: string,
    message: string,
    options: {
      timeOut?: string;
      theme?: string;
      hideCloseButton?: string;
      hideImage?: string;
    } = {}
  ) {
    this.showToast(title, message, 'error', options);
  }

  // --------------------Toast Info function--------------------

  info(
    title: string,
    message: string,
    options: {
      timeOut?: string;
      theme?: string;
      hideCloseButton?: string;
      hideImage?: string;
    } = {}
  ) {
    this.showToast(title, message, 'info', options);
  }

  // --------------------Toast Warning function--------------------

  warning(
    title: string,
    message: string,
    options: {
      timeOut?: string;
      theme?: string;
      hideCloseButton?: string;
      hideImage?: string;
    } = {}
  ) {
    this.showToast(title, message, 'warning', options);
  }

  // --------------------Light Toast--------------------

  light(
    title: string,
    message: string,
    options: {
      timeOut?: string;
      hideCloseButton?: string;
      hideImage?: string;
      imageUrl?: string;
    } = {}
  ) {
    this.showToast(title, message, 'light', { ...options, theme: 'default' });
  }

  // --------------------Light Toast--------------------

  dark(
    title: string,
    message: string,
    options: {
      timeOut?: string;
      hideCloseButton?: string;
      hideImage?: string;
      imageUrl?: string;
    } = {}
  ) {
    this.showToast(title, message, 'dark', { ...options, theme: 'default' });
  }

  // --------------------Show Toast function--------------------

  showToast(
    title: string,
    message: string,
    type: string,
    options: {
      timeOut?: string;
      theme?: string;
      hideCloseButton?: string;
      hideImage?: string;
      imageUrl?: string;
    } = {}
  ) {
    // ----------------Add toast from front when position is bottom---------------

    if (this.topOrBottom.value === 'bottom') {
      this.Toasts.unshift({
        title,
        message,
        type,
        timeOut: options.timeOut || this.autoClose,
        theme: options.theme || this.theme,
        hideCloseButton: options.hideCloseButton || this.hideCloseButton,
        hideImage: options.hideImage || this.hideImage,
        imageUrl: '',
      });

      setTimeout(() => {
        this.Toasts.pop();
        this.TotalToasts.next(this.Toasts);
      }, parseInt(eval(options.timeOut || this.autoClose)));
    }

    // ----------------Add toast from back when position is top---------------
    else if (this.topOrBottom.value === 'top') {
      this.Toasts.push({
        title,
        message,
        type,
        timeOut: options.timeOut || this.autoClose,
        theme: options.theme || this.theme,
        hideCloseButton: options.hideCloseButton || this.hideCloseButton,
        hideImage: options.hideImage || this.hideImage,
        imageUrl: '',
      });

      setTimeout(() => {
        this.Toasts.shift();
        this.TotalToasts.next(this.Toasts);
      }, parseInt(eval(options.timeOut || this.autoClose)));
    }
  }

  // --------------------Close Toast function--------------------

  closeToast(index: number) {
    this.Toasts.splice(index, 1);
    this.TotalToasts.next(this.Toasts);
  }

  // --------------------Close All Toasts function--------------------

  closeAllToasts() {
    this.Toasts = [];
    this.TotalToasts.next(this.Toasts);
  }
}
