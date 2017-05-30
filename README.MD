<p align="center">
  <a href="#">
    <img width=100% src="ng-notyf-logo.png">
  </a>
</p>

# 📦 Installation 📦

To install this library, run this command in your Angular application:

`$ npm install ng-notyf --save`

If you use Angular 2 you should already have `@angular/animations` package installed, but if you use Angular 4, you might not, so don't forget to install it:

`$ npm install @angular/animations --save`

# 🔥 Usage 🔥

## 1. Import `ng-notyf` into you `app.module`

```javascript
import { NotyfModule } from 'ng-notyf';

@NgModule({
  imports: [
    NotyfModule
  ],
  declarations: [...],
  exports: [...],
  providers: [...]
})
```

## 2. Inject `ng-notyf` service into your component

```javascript
import { NotyfService } from 'ng-notyf';

export class myComponent {

  constructor(
    private notyfService: NotyfService
  ) { }

}
```

## 3. That's it!, start using it 👌

```javascript
alert() {
  this.notyfService.success("👻👻👻 It just works! 👻👻👻");
  this.notyfService.error("Something went wrong 😰😰😰");
}
```

# 🔨 Customizing 🔨

## 1. Change the notification delay

```javascript
// The toast now lasts 5 seconds
this.notyfService.toastDelay = 5000;
```

## 2. Change the toast style

```javascript
// Change background and font color
this.notyfService.toastStyle = { 'background-color': 'purple', 'color': 'white' }; 
```

## 3. Change the toast container style

```javascript
// Notification now displayed in the left corner
this.notyfService.toastContainerStyle = { 'left': '0' };
```

# 🤷 Troubleshooting 🤷

## Internet Explorer support

We got you covered 😏 Ng-notyf uses the **[Web Animations API](https://w3c.github.io/web-animations/)** so you just have to install this package:

`$ npm install web-animations-js --save` 

And add these to your `polyfills.ts` file:

```
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';

/** IE10 and IE11 requires the following to support `@angular/animation`. */
import 'web-animations-js';
```

# License

MIT © [Juan Herrera](https://github.com/jdjuan) and [Carlos Roso](https://github.com/caroso1222)
