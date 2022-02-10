export class Quote {
  showDescription:boolean;
  downvote:Number;
  upvote: number;

  constructor(public id:number,public publishedBy:string,public quote:string,public author:string,public dateCreated:Date){
    this.showDescription = false;
    this.upvote = 0
    this.downvote = 0
  }
}
