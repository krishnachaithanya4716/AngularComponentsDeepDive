import { Component, ContentChild, ElementRef, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent {
  
  label = input.required<string>();
  @ContentChild('input') private control?:ElementRef<HTMLInputElement|HTMLTextAreaElement>

  //Angular prefers not to use following binding and listenig director

  // @HostBinding('class') className='control'
  // @HostListener('click') onClick(){
  //   console.log("Clicked")
  // }

  onClick(){
    console.log('clicked')
    console.log(this.control)
  }

}
