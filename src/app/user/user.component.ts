import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    userForm: FormGroup;
    submitted :boolean = false;
    notSame :boolean = false;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.userForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value));
    }

    checkPasswords(group) { 
        console.log(group);// here we have the 'passwords' group
        let pass = group.password.value;
        let confirmPass = group.confirmpassword.value;

        if(pass == confirmPass){
            this.notSame = false;
        }else{
            this.notSame = true;
        }
       
}
}
