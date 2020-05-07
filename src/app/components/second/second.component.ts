import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  profileForm = new FormGroup({
    producttype: new FormControl(''),
    productid: new FormControl(''),
    productname: new FormControl(''),
    productdetail: new FormControl(''),
    productdequa: new FormControl('',[Validators.min(1),Validators.max(50)]),
    price: new FormControl('',[Validators.min(1),Validators.max(100000)])
  });

  producttype: string[] = ['','CPU','RAM','HDD','Mainboard'];

  constructor() { }

  ngOnInit(): void {
  }
  getAllProduct(){
    return this.producttype;
  }

}
