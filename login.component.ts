import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
    submitted = false;
  // user: any;

  constructor(private formBuilder: FormBuilder, private user:UserService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      service:['advance']
  },
  ); 
}
  
onSubmitloginForm(){
    // console.log("onclick next")
    this.submitted=true;
    console.log("inputs", this.loginForm.value);
    if(this.loginForm.valid){
      console.log("valid",this.loginForm.value);
      let data= {
          email:this.loginForm.value.email,
          password:this.loginForm.value.password,
          service:this.loginForm.value.service,
      }
      this.user.login(data).subscribe((response:any)=>{
        console.log("done",response);
        // // if(response.data.success == true){
        //   this.loginForm.reset();
        // // }
      })
    }
    else{
      console.log("Enter valid data");
    }
  }

  }
