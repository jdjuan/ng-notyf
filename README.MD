# ng-notyf

## Installation

To install this library, run:

```bash
$ npm install ng-notyf
```

## Usage

### 1. Import ng-notyf

```javascript
import { NotyfModule } from 'ng-notyf';
```

### 2. Add ng-notyf to your module imports

```javascript
@NgModule({
  imports: [
    NotyfModule
  ],
  declarations: [...],
  exports: [...],
  providers: [...]
})
```

### 3. Inject ng-notyf service into your component

```javascript
import { NotyfService } from 'ng-notyf';

export class myComponent {

  constructor(
    private notyfService: NgNotyfService
  ) { }

}
```

### 4. That's it!, start using it

```javascript
notyfService.alert("Hello, it's me, I am working!")
notyfService.danger("Hello, it's me, Batman!")
```

## License

MIT © [Juan Herrera](mailto:david.juanherrera@gmail.com)
