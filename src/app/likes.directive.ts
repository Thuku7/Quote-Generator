import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLikes]'
})
export class LikesDirective {

  

  constructor(private elem:ElementRef) {
    
  }

  @HostListener('onsubmit') onSubmit(){
    this.textDeco("yellow")
  }


  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action
  }

}


