import { Component, Input, ViewChild, ElementRef, Renderer  } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {
    @ViewChild('wrapper', {read: ElementRef}) wrapper;
     @Input('expanded') expanded;
     @Input('height') height;
  text: string;

  constructor(public renderer: Renderer) {
    
       }
  ngAfterViewInit(){
    if(this.height){
      this.renderer.setElementStyle(this.wrapper.nativeElement, 'height', this.height + 'px');    
    }
  }


}

