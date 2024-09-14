import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //@ViewChild('form') form?:ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //signal based 

  add = output<{title:string,request:string}>()


  onSubmit(titleInput:string,requestText:string){

    this.add.emit({
      title:titleInput,
      request:requestText
    })
    console.log("submitted");
    console.log(titleInput);
    console.log(requestText);
    this.form().nativeElement.reset();
  }

}
