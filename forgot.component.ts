import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService ) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      emailorphone: ['', [Validators.required, Validators.email]],  
      service:['advance']
    },
    ); 
  }  
  
  onSubmitloginForm(){

    this.submitted=true;
    console.log("inputs", this.forgotForm.value);
    if(this.forgotForm.valid){
      console.log("valid",this.forgotForm.value);
      let data= {
          email:this.forgotForm.value.emailorphone,
          service:this.forgotForm.value.service,
      }
      this.user.forgot(data).subscribe((response:any)=>{
        console.log("done",response);
          // this.forgotForm.reset();
      })
    }
    else{
      console.log("Enter valid data");
    }
  }

  }
