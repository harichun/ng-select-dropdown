import {Component} from '@angular/core';

@Component({
    selector: 'drop-down',
    templateUrl:'dropdown.component.html',
    styleUrls:['dropdown.component.css']
})
export class DropDownComponent {

    private list = [ 

        { id: 1, name: 'Alpha' },
        { id: 2, name: 'Alphanumeric' },
        { id: 3, name: 'Numeric' },
        { id: 4, name: 'Constant' },
        { id: 5, name: 'Special' },
        { id: 6, name: 'Special character ' },
        

    ];
    private current: number = 2;
    public isSpecialValue : boolean = false;
    private log: string ='';
    private isSpecial(value) : boolean {

        if(value.name=='Special')
        {
            this.isSpecialValue = true;
        }
        console.log("hiss"+value.name);
        return this.isSpecialValue;
        
    }     

 
}
