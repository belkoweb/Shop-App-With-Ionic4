import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  public errorMessage: string;

  constructor(
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public loadingCtrl: LoadingController,
      private formBuilder: FormBuilder,
  private authService: AuthService,

  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fullName': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  signUp() {
    const email = this.onRegisterForm.get('email').value;
    const password = this.onRegisterForm.get('password').value;

    this.authService.createNewUser(email, password).then(
        () => {
          this.signups;
        },
        (error) => {

          this.errorMessage = error;
          console.log(this.errorMessage);
        }
    );
 console.log(this.errorMessage);
  }
  async  signups(){

    const loader = await this.loadingCtrl.create({
      duration: 2000
    });
    loader.present();

    loader.onWillDismiss().then(() => {
     // this.router.navigate(['/books']);
     this.navCtrl.navigateRoot('/menu/home');
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
}
