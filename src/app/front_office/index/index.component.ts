import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { LoadScriptService } from './load-script.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  msgSucces : boolean = false ;
  captcha: string;
  contactForm = new FormGroup({
    prenom:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zÀ-ÿ ,.'-]+$/i)]),
    nom:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zÀ-ÿ ,.'-]+$/i)]),
    email:new FormControl(null,[Validators.required,Validators.email,Validators.pattern(/^\S+@\S+\.\S+$/)]),
    objet:new FormControl(null,[Validators.required,]),
    message:new FormControl(null,[Validators.required,]),
    // recaptcha:new FormControl('',Validators.required)
  })

  constructor(private loadService: LoadScriptService,
    private formBuilder: FormBuilder) {
      this.loadService.loadScript("../assets/js/js_landing/wow.min.js");
      this.loadService.loadScript("../assets/js/js_landing/tiny-slider.js");
      this.loadService.loadScript("../assets/js/js_landing/typewriter.js");
      this.loadService.loadScript("../assets/js/js_landing/main.js");
      this.loadService.loadScript("../assets/js/js_landing/menu.js");
      this.loadService.loadScript("../assets/js/js_landing/slider.js");
      this.captcha = "";
}

  ngOnInit(): void {
  }
/*  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    // console.log('resolved captcha with response: ' + this.captcha);
}*/
get prenom() { return this.contactForm.get('prenom'); }
get nom() { return this.contactForm.get('nom'); }
get email() { return this.contactForm.get('email'); }
get objet() { return this.contactForm.get('objet'); }
get message() { return this.contactForm.get('message'); }
envoyer(){
  console.log(this.contactForm.value);
  this.contactForm.reset();
  //grecaptcha.reset();
  this.divSucces()
}
divSucces(){
  this.msgSucces = true;
  setTimeout(() => {
  this.msgSucces = false;
  }, 5000);
}
scroll(id : string) {
  document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

}
slider(){
  document.querySelector(".slider")?.classList.toggle("active-slider");
  console.log(document.querySelector(".slider"))
}
}
