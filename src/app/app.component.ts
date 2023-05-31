import { Component, Input } from '@angular/core';
import { MyserviceService } from './services/myservice.service';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'myproject';

  constructor(private user : UserService,private mydata : MyserviceService){
    this.user.getData().subscribe(data=>{
      console.log(data);
    })
  }

  btnclick(){
    this.mydata.msgalert();
  }

  // printData(num:any)
  // {
  //   console.log(num);
  // }

  show() {
    alert("Hello :)");
  }

  print: string = '';
  display(value: string) {
    this.print = value;
  }

  count: number = 0;
  counter(type: string) {
    // type==='add'?this.count++:this.count--;
    if (type === 'add') {
      this.count++;
    }
    else {
      this.count--;
    }
  }

  // name = 'masum';
  dis = false;

  nm = '';
  getData() {
    this.nm = 'masum';
  }

  setText = 'yes';

  color = 'blue';
  bgcolor = 'green';
  changeColor() {
    this.color = 'red';
    this.bgcolor = 'black';
  }

  data = [1, 3, 4, 5, 8];

  studentDetails = [
    {
      id: 1, uname: 'abc', subject: ['C', 'C++']
    },
    {
      id: 2, uname: 'xyz', subject: ['Java', 'C']
    },
    {
      id: 3, uname: 'pqr', subject: ['PHP', 'Python']
    }
  ]

  displayToggle = false;
  toggle() {
    this.displayToggle = !this.displayToggle;
  }


  showNumber=5;
  updateNumber(){
    this.showNumber=Math.floor(Math.random()*10);
  }


  today:number=Date.now();
  str:string='hello world';
  
  b: number = 1.3495;


}

var display = (no1: number, no2: number): number => {
  return no1 + no2;

}

// console.log(display(20, 30));

function getData(nm: any, any: any) {
  throw new Error('Function not implemented.');
}
