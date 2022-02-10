import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes : Quote[] = [
    new Quote(1,'Kung-lao',' “Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.”','Lao-Tze',new Date(2022,2,10)),
    new Quote(2,'Diaz','“Live for each second without hesitation.” ','Elton John',new Date(2022,2,10)),
    new Quote(3,'ArchySlap','. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” ','Steve Jobs',new Date(2020,2,9)),
    // new Quote(4,'OneTwo',' “Life is like riding a bicycle. To keep your balance, you must keep moving.” ','Albert Einstein',new Date(2018,6,21)),
    // new Quote(5,'Turkish','“Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.”','Kevin Hart',new Date(2020,2,22)),
  ]

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length
    quote.id = quoteLength +1
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.push(quote) 
 
 }

  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quoteDelete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
 wanted:any;
 
 upvoteQuote(index:number){
  this.quotes[index].upvote +=1

  let upvotes =[]
  for(let quote of this.quotes){
    upvotes.push(quote.upvote)
 }
  let indexQuote = upvotes.indexOf(Math.max(...upvotes))
  console.log(indexQuote)
  this.styleQuote(this.quotes, indexQuote)
  this.wanted = indexQuote
  return this.wanted
}


styleQuote(array:any, index:number){
 let targetQuote = array[index]
 console.log(targetQuote)   
}

downvoteQuote(index:any){
 this.quotes[index].downvote 

}


  

  constructor() { }

  ngOnInit(): void {
  }

}
