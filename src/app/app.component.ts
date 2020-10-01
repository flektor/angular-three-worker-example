import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<ngx-canvas-worker width="{{width}}" height="{{height}}"></ngx-canvas-worker>', 
})
export class AppComponent {
  title = 'angular-three-worker-example';

  width = window.innerWidth;
  height = window.innerHeight;

}