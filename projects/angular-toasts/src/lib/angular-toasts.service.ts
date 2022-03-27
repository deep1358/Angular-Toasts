import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from './angular-toasts.interface';

@Injectable({
  providedIn: 'root',
})
export class AngularToastService {
  constructor() {}

  // --------------------Toast variables--------------------

  Toasts: Toast[] = [];
  autoClose!: string;
  theme!: string;
  effect!: string;

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
    } = {}
  ) {
    this.showToast(title, message, 'warning', options);
  }

  // --------------------Show Toast function--------------------

  showToast(
    title: string,
    message: string,
    type: string,
    options: {
      timeOut?: string;
      theme?: string;
    } = {}
  ) {
    // ----------------Add toast from front when position is bottom---------------

    console.log(options.timeOut, this.autoClose);

    if (this.topOrBottom.value === 'bottom') {
      this.Toasts.unshift({
        title,
        message,
        type,
        timeOut: options.timeOut || this.autoClose,
        theme: options.theme || this.theme,
      });

      setTimeout(() => {
        this.Toasts.pop();
        this.TotalToasts.next(this.Toasts);
      }, parseInt(options.timeOut || this.autoClose));
    }

    // ----------------Add toast from back when position is top---------------
    else if (this.topOrBottom.value === 'top') {
      this.Toasts.push({
        title,
        message,
        type,
        timeOut: options.timeOut || this.autoClose,
        theme: options.theme || this.theme,
      });

      setTimeout(() => {
        this.Toasts.shift();
        this.TotalToasts.next(this.Toasts);
      }, parseInt(options.timeOut || this.autoClose));
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
