export class Quote {
  showDescription:boolean;

  constructor(public id:number,public publishedBy:string,public quote:string,public author:string,public dateCreated:Date){
    this.showDescription = false;
  }
}
