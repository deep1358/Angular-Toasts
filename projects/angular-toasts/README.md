# AngularToasts

🎉 Angular-Toasts is very easy to use and very powerful Toast library for Angular apps.

## Installation

```bash
$ npm install --save angular-toasts
```

## Features

- Easy to setup for real, you can make it runs within a moment.
- You can use it as a toast, or as a notification.
- Can set postion, duration, and other options.
- Dark and light mode.

## Setup

**Step 1** : Just import **ToastModule** from **angular-toasts** in Module file, and add it in a **imports array** like below.

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ToastModule } from "angular-toasts";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Step 2** : Then add Toast tag in your template like below (i.e. in your **app.component.html** file).

```html
<ToastContainer></ToastContainer>
```

## Usage

For usage purpose, you can use **ToastService** to show toast (i.e. in your **app.component.ts** file).

```typescript
import { Component } from '@angular/core';
import { ToastService } from 'angular-toasts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _toast: ToastService) {}

  Click() {
    this._toast.success('Success', 'This is a info message',);
}

```

## Options

There are **individual** and **global** options for each toast

**Individual options have more priority than Global options.**

#### Individual Options

| Option  | Type   | Default   | Description                            | Parameters                                     |
| ------- | ------ | --------- | -------------------------------------- | ---------------------------------------------- |
| theme   | string | `theme-1` | Theme will decide the look of a toast. | `'theme-1' \|'theme-2'\|'theme-3'\| 'theme-4'` |
| timeOut | string | 2000      | Time to live in milliseconds           | Any millisecond as a string                    |

##### Setting individual options

```typescript
this._toast.info("Information", "This is a info message", {
  timeOut: "20000",
  theme: "theme-1",
});
```

#### Global Options

| Option    | Type   | Default     | Description                                                 | Parameters                                                                                        |
| --------- | ------ | ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| theme     | string | `theme-1`   | Theme will decide the look of a toast.                      | `'theme-1' \|'theme-2'\|'theme-3'\| 'theme-4'`                                                    |
| autoClose | string | 2000        | Time to live in milliseconds                                | Any millisecond as a string                                                                       |
| effect    | string | `zoom`      | This option is for different animation of a toast.          | `'zoom' \| 'bounce'`                                                                              |
| postion   | string | `top-right` | This option will decide the position of a toast on a scree. | `'top-right' \| 'top-center' \| 'top-left' \| 'bottom-right' \| 'bottom-center' \| 'bottom-left'` |

##### Setting global options

```html
<ToastContainer
  position="top-right"
  effect="zoom"
  autoClose="2000"
  theme="theme-1"
>
</ToastContainer>
```

## Functions

There are total 4 functions available to show toast.

- For **Success**

  ```typescript
  this._toast.success("Success", "This is a success message");
  ```

- For **Error**

  ```typescript
  this._toast.error("Error", "This is a error message");
  ```

- For **Info**

  ```typescript
  this._toast.info("Information", "This is a information");
  ```

- For **Warning**

  ```typescript
  this._toast.warning("Warning", "This is a warning message");
  ```

**Firts parameter is title, second is message, and third is options which is optional.**

**To show only message leave the title empty.**

```typescript
this._toast.warning("", "This is a warning message");
```
