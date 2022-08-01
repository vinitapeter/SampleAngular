import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitServiceService } from './submit-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  statuslogin:any;
  focusin: boolean = true;
  username:any;
  password:any;
  ngForm:any;
  post:any;  
  returnUrl: any;
  id:any;
  name:any;
  dept:any;
  age:any;
  constructor(
    private route: ActivatedRoute,
   private fb: FormBuilder,
   private submitServiceService:SubmitServiceService,    
   public router: Router
  ) {
      
    }

    

    onClickSubmit(username:any, password:any) {
      console.log('i am in component' , username.value);
      console.log('i am in component', password.value);
      this.submitServiceService.login(username.value, password.value).subscribe(
         (res:any) => {
          console.log(res);
           if(res.name === username.value)
             {
              console.log("Success!!!!!!");
                alert('login scuccess');
                console.log(username.value);
              console.log(password.value);
                this.id = res.id;
                this.name = res.name;
                this.dept = res.dept;
                this.age = res.age;
             }else{
              console.log("Why are you here?????!!!!!!")
              console.log(username.value);
              console.log(password.value);
              alert("Username or password wrong");
              this.id = res.id;
                this.name = res.name;
                this.dept = res.dept;
                this.age = res.age;
             }
         },
          (err:any) => {
            
            console.log("Failed?!!!!!!")
            alert("Username and/or password wrong")
            console.log(username.value);
              console.log(password.value);
            this.id = "";
                this.name = "";
                this.dept = "";
                this.age =0;
           return err;
             
         }
       );
    
     }

}
