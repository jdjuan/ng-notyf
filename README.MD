# ng-notyf

## Installation

To install this library, run:

```bash
$ npm install ng-notyf
```

## Usage

### 1. Import ng-notyf

```javascript
import { ngNotyfModule } from 'ng-notyf';
```

### 2. Add ng-notyf to your module imports

```javascript
@NgModule({
  imports: [
    ngNotyfModule
  ],
  declarations: [...],
  exports: [...],
  providers: [...]
})
```

### 3. Inject ng-notyf service into your component

```javascript
import { NgNotyfService } from 'ng-notyf';

export class myComponent {

  constructor(
    private ngNotyfService: NgNotyfService
  ) { }

}
```

### 4. That's it!, start using it

```javascript
ngNotyfService.alert("Hello, it's me, I am working!")
ngNotyfService.danger("Hello, it's me, Batman!")
```

## License

MIT © [Juan Herrera](mailto:david.juanherrera@gmail.com)
