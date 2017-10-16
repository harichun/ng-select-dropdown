import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls:['./multi-select.component.css']
})
export class MultiSelectComponent {


 

 
   public items1 : [any] = [

    'Alpha','AlphaNumeric','Numeric','Constant','Special','Special character'
  
  ];
 
  public rules : [string] = [
    'Bill To Account'
  ];
   public relate : [string] = [
    'Is'
  ]; 

   changeRows(num) : void {
     console.log("inisde changerows"+num);

     console.log(this.value.text=='Special');


    this.numbers  = this.getColnumbers(num);    
    this.numbers1 = Array(this.numbers[0]).fill(1).map((x,i)=>i); // [0,1,2,3,4]
    this.numbers2 = Array(this.numbers[1]).fill(4).map((x,i)=>i); // [0,1,2,3,4]
    this.numbers3 = Array(this.numbers[2]).fill(4).map((x,i)=>i); // [0,1,2,3,4]

  // [4,4,4,4,4]
  }
  numbers = [];
  numbers1 = [];
  numbers2 = [];
  numbers3 = [];
  dummyarr = [];
  dummynum;

  arrcount = 0;
 
  
  num1;
  num2;
  num3;
  bool : Boolean = false;

  retBool():Boolean{
    this.selected(this.value);
    this.bool = (this.value.text=='Special');
    return this.bool;

  }


 public  in: number = 1;

  getColnumbers(num): [number]{
    
   this.dummynum = Math.ceil(num/3);
   
 
    this.num1 =(num-this.dummynum>0) ? this.dummynum : num ;
    console.log(this.num1);
    num = num - this.num1;
  
    
    this.num2 = (num-this.dummynum>0) ? this.dummynum :num ;
    console.log(this.num2);
    num = num-this.num2;
    
    
    this.num3 = (num-this.dummynum>0) ? this.dummynum :num ; 
    console.log(this.num3);
    num = num - this.num3;
     
    return [this.num1,this.num2,this.num3];
  }
  


  private isSpecial : boolean= false;
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
  isSpecialVal : boolean = false;
  isSpecialVal1 : boolean = false;

  public selected(value:any):boolean {
    if(value.text=='Special')
    {
    console.log('Selected value is: ', value);
    this.isSpecialVal = true;
  }
   else{
    this.isSpecialVal = false; 
   }
    return this.isSpecialVal;
  }
  
 
 public  returnSpecial(): boolean{
   this.isSpecialVal1 = this.selected(this.value); 
   return this.isSpecialVal1 ;
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):any {
    this.value = value;
    return this.value;
  }
}
