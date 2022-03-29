import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { animations } from './animations';
import { AngularToastService } from './angular-toasts.service';
import { Toast } from './angular-toasts.interface';

@Component({
  selector: 'ToastContainer',
  templateUrl: './angular-toasts.component.html',
  styleUrls: ['./angular-toasts.component.css'],
  animations: animations,
})
export class AngularToastsComponent
  implements OnInit, OnChanges, AfterViewChecked
{
  // --------------------Toast Input and ViewChild Variables--------------------

  @Input('position') ToastContainerPosition: string = 'top-right';
  @Input('autoClose') ToastContainerAutoClose: string = '2000';
  @Input('effect') ToastContainerEffect: string = 'zoom';
  @Input('theme') ToastContainerTheme: string = 'theme-1';
  @Input('hideCloseButton') ToastContainerCloseButton: string = 'false';
  @Input('hideImage') ToastContainerHideImage: string = 'false';
  @ViewChild('toastContainer') toastContainer!: ElementRef;

  // --------------------Toast variables--------------------

  Toasts: Toast[] = [];
  zoom: boolean = false;
  bounce: boolean = false;
  fade: boolean = true;
  topOrBottom: string = this.ToastContainerPosition.split('-')[0];
  leftOrRightOrCenter: string = this.ToastContainerPosition.split('-')[1];

  constructor(private _toast: AngularToastService) {}

  ngOnInit(): void {
    // --------------------Subscribing toasts from Toast service--------------------

    this._toast.currentToasts.subscribe((toasts: Toast[]) => {
      this.Toasts = toasts;
    });

    // --------------------Setting Toast service variables--------------------

    this._toast.setTopOrBottom(this.topOrBottom);
  }

  ngOnChanges(): void {
    // --------------------Setting variables--------------------

    this.topOrBottom = this.ToastContainerPosition.split('-')[0];
    this.leftOrRightOrCenter = this.ToastContainerPosition.split('-')[1];
    this.zoom = this.ToastContainerEffect === 'zoom';
    this.bounce = this.ToastContainerEffect === 'bounce';
    this.fade = this.ToastContainerEffect === 'fade';
  }

  ngAfterViewChecked(): void {
    // --------------------Adding postion into class--------------------

    this.toastContainer.nativeElement.className =
      'toast-container toast-container-' + this.ToastContainerPosition;
    this._toast.theme = this.ToastContainerTheme;
    this._toast.autoClose = this.ToastContainerAutoClose;
    this._toast.hideCloseButton = this.ToastContainerCloseButton;
    this._toast.hideImage = this.ToastContainerHideImage;
  }

  // --------------------Close Toast function--------------------

  closeToast(index: number) {
    this._toast.closeToast(index);
  }
}
