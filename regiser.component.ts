import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.scss']
})
export class RegiserComponent implements OnInit {
  regiserForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user:UserService ) { }

  ngOnInit(): void {
    this.regiserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service:['advance']
    }); 
  }
  
  onSubmit(){
    this.submitted=true;
    console.log("inputs", this.regiserForm.value);
    if(this.regiserForm.valid){
      console.log("valid",this.regiserForm.value);
      let data= {
          firstName:this.regiserForm.value.firstName,
          lastName:this.regiserForm.value.LastName,
          email:this.regiserForm.value.email,
          password:this.regiserForm.value.password,
          confirm:this.regiserForm.value.confirmPassword,
          service:this.regiserForm.value.service,
      }
      this.user.regiser(data).subscribe((response:any)=>{
        console.log("done",response);
        // if(response.data.success == true){
        //   this.regiserForm.reset();
        // }
      })
    }
    else{
      console.log("Enter valid data");
    }
  }
}