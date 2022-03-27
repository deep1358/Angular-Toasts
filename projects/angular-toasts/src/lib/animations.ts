import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const animations = [
  // --------------------ZoomFromBottom--------------------

  trigger('zoomFromBottom', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translate(0,10%)' }),
      animate(500, style({ opacity: 1, transform: 'translate(0,0%)' })),
    ]),
    transition(':leave', [
      animate(500, style({ opacity: 0, transform: 'translate(0,10%)' })),
    ]),
  ]),

  // --------------------ZoomFromTop--------------------

  trigger('zoomFromTop', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translate(0,-10%)' }),
      animate(500, style({ opacity: 1, transform: 'translate(0,0%)' })),
    ]),
    transition(':leave', [
      animate(500, style({ opacity: 0, transform: 'translate(0,-10%)' })),
    ]),
  ]),

  // --------------------BounceFromLeft--------------------

  trigger('bounceFromLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      animate(
        400,
        keyframes([
          style({ opacity: 1, transform: 'translateX(-100%)', offset: 0 }),
          style({ transform: 'translateX(3%)', offset: 0.25 }),
          style({ transform: 'translateX(-2.5%)', offset: 0.5 }),
          style({ transform: 'translateX(2.5%)', offset: 0.75 }),
          style({ transform: 'translateX(0%)', offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        300,
        keyframes([
          style({ opacity: 1, transform: 'translateX(5%)', offset: 0.5 }),
          style({ transform: 'translateX(-100%)', offset: 1 }),
        ])
      ),
    ]),
  ]),

  // --------------------BounceFromRight--------------------

  trigger('bounceFromRight', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      animate(
        400,
        keyframes([
          style({ opacity: 1, transform: 'translateX(100%)', offset: 0 }),
          style({ transform: 'translateX(-3%)', offset: 0.25 }),
          style({ transform: 'translateX(2.5%)', offset: 0.5 }),
          style({ transform: 'translateX(-2.5%)', offset: 0.75 }),
          style({ transform: 'translateX(0%)', offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        300,
        keyframes([
          style({ opacity: 1, transform: 'translateX(-5%)', offset: 0.5 }),
          style({ transform: 'translateX(100%)', offset: 1 }),
        ])
      ),
    ]),
  ]),

  // --------------------BounceFromTopCenter--------------------

  trigger('bounceFromTopCenter', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-100%)' }),
      animate(
        400,
        keyframes([
          style({ opacity: 1, transform: 'translateY(-100%)', offset: 0 }),
          style({ transform: 'translateY(10%)', offset: 0.25 }),
          style({ transform: 'translateY(-5.5%)', offset: 0.5 }),
          style({ transform: 'translateY(5.5%)', offset: 0.75 }),
          style({ transform: 'translateY(0%)', offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        300,
        keyframes([
          style({ opacity: 1, transform: 'translateY(10%)', offset: 0.5 }),
          style({ transform: 'translateY(-100%)', offset: 1 }),
        ])
      ),
    ]),
  ]),

  // --------------------BounceFromBottomCenter--------------------

  trigger('bounceFromBottomCenter', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(100%)' }),
      animate(
        400,
        keyframes([
          style({ opacity: 1, transform: 'translateY(100%)', offset: 0 }),
          style({ transform: 'translateY(-10%)', offset: 0.25 }),
          style({ transform: 'translateY(5.5%)', offset: 0.5 }),
          style({ transform: 'translateY(-5.5%)', offset: 0.75 }),
          style({ transform: 'translateY(0%)', offset: 1 }),
        ])
      ),
    ]),
    transition(':leave', [
      animate(
        300,
        keyframes([
          style({ opacity: 1, transform: 'translateY(-10%)', offset: 0.5 }),
          style({ transform: 'translateY(100%)', offset: 1 }),
        ])
      ),
    ]),
  ]),
];
