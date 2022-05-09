# AngularToasts

🎉 Angular-Toasts is very easy to use and very powerful Toast library for Angular apps.

## Installation

```bash
$ npm install angular-toasts
```

## Features

- Easy to setup for real, you can make it runs within a moment.
- You can use it as a toast, or as a notification.
- Can set postion, duration, and other options.
- Dark and light mode.

## Setup

**Step 1** : Just import **AngularToastModule** from **angular-toasts** in Module file, and add it in a **imports array** like below.

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularToastModule } from "angular-toasts";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularToastModule],
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

For usage purpose, you can use **AngularToastService** to show toast (i.e. in your **app.component.ts** file).

```typescript
import { Component } from "@angular/core";
import { AngularToastService } from "angular-toasts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private _toast: AngularToastService) {}

  Click() {
    this._toast.success("Success", "This is a success message");
  }
}
```

## Themes

- **Theme-1**

   <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/theme-1.jpg?raw=true" width="250px;" alt="theme-1"/>

- **Theme-2**

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/theme-2.jpg?raw=true" width="250px;" alt="theme-2"/>

- **Theme-3**

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/theme-3.jpg?raw=true" width="250px;" alt="theme-3"/>

- **Theme-4**

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/theme-4.jpg?raw=true" width="250px;" alt="theme-4"/>

- **Theme-5**

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/theme-5.jpg?raw=true" width="250px;" alt="theme-5"/>

- **Theme-6**

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/theme-6.jpg?raw=true" width="250px;" alt="theme-6"/>

## Options

There are **individual** and **global** options for each toast

**Individual options have more priority than Global options.**

#### Individual Options

| Option          | Type    | Default   | Description                                                                   | Parameters                                                             |
| --------------- | ------- | --------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| theme           | string  | `theme-1` | Theme will decide the look of a toast.                                        | `'theme-1' \|'theme-2'\|'theme-3'\| 'theme-4'\| 'theme-5'\| 'theme-6'` |
| timeOut         | string  | 2000      | Time to live in milliseconds                                                  | Any millisecond as a string                                            |
| hideCloseButton | boolean | false     | Hide close button                                                             | `'false'\| 'true'`                                                     |
| hideImage       | boolean | false     | Hide image                                                                    | `'false'\| 'true'`                                                     |
| imageUrl        | string  | ' '       | Image url (Only for light and dark type toasts) (**_Currently not working_**) | Any url as a string                                                    |

##### Setting individual options

```typescript
this._toast.info("Information", "This is a info message", {
  timeOut: "20000",
  theme: "theme-1",
  hideCloseButton: "true",
  hideImage: "true",
});
```

#### Global Options

| Option          | Type    | Default     | Description                                                 | Parameters                                                                                        |
| --------------- | ------- | ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| theme           | string  | `theme-1`   | Theme will decide the look of a toast.                      | `'theme-1' \|'theme-2'\|'theme-3'\| 'theme-4'\|'theme-5'\|'theme-6'`                              |
| autoClose       | string  | 2000        | Time to live in milliseconds                                | Any millisecond as a string                                                                       |
| effect          | string  | `zoom`      | This option is for different animation of a toast.          | `'zoom' \| 'bounce' \| 'fade'`                                                                    |
| postion         | string  | `top-right` | This option will decide the position of a toast on a scree. | `'top-right' \| 'top-center' \| 'top-left' \| 'bottom-right' \| 'bottom-center' \| 'bottom-left'` |
| hideCloseButton | boolean | false       | Hide close button                                           | `'false'\| 'true'`                                                                                |
| hideImage       | boolean | false       | Hide image                                                  | `'false'\| 'true'`                                                                                |

##### Setting global options

```html
<ToastContainer
  position="top-right"
  effect="zoom"
  autoClose="2000"
  theme="theme-1"
  hideCloseButton="false"
  hideImage="false"
>
</ToastContainer>
```

### Longer Duration of the Toast

- To make toast duration longer which seems like infinite, you can use equation in **Global option - autoClose** or in **Individual option - timeOut** like **1000\*60\*60\*24 (1 day)**.

```html
<ToastContainer autoClose="1000*60*60*24"> </ToastContainer>
```

```typescript
this._toast.info("Information", "This is a info message", {
  timeOut: "1000*60*60*24",
});
```

## Functions(Types)

There are total 6 functions available to show toast.

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

- For **Default Light**

  ```typescript
  this._toast.light("Light theme", "This is a light theme message");
  ```

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/light.jpg?raw=true" width="250px;" alt="light"/>

- For **Default Dark**

  ```typescript
  this._toast.dark("Dark theme", "This is a dark theme message");
  ```

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/dark.jpg?raw=true" width="250px;" alt="dark"/>

**Firts parameter is title, second is message, and third is options which is optional.**

**To show only message leave the title empty.**

```typescript
this._toast.warning("", "This is a warning message");
```

**So it will look like this**

  <img src="https://github.com/deep1358/Angular-Toasts/blob/master/projects/angular-toasts/src/assets/notitle.jpg?raw=true" width="250px;" alt="Toast without title"/>

#### **[Demo](https://angular-toasts.vercel.app/) will clear a picture.**
