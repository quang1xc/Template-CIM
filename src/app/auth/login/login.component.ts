import {Component, ElementRef, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {LoginInterface} from '../../models/login.interface';
// import {Notification} from '../../common/notification';
// Services
import {ConfigService} from '../../services/config.service';
import {StorageService} from '../../services/storage.service';
import {AuthService} from '../../services/auth.service';
import {EStorageKey} from '../../constants/storage-key.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    // RouterLink,
    ReactiveFormsModule
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  model: LoginInterface = new LoginInterface();
  profileData: any;
  showFormLogin = signal(true);

  constructor(
    private formBuilder: FormBuilder,
    private configService: ConfigService,
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {
    this.configService._configSubject.next('false');
    this.loginForm = this.formBuilder.group({
      username: ['',
        [Validators.required, Validators.pattern('^[^\\s]+$')]
      ],
      password: ['',
        [
          // Validators.required, Validators.minLength(8), Validators.pattern('^[^\\s]+$'),
          // Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[^\s]{6,}$')
        ]
      ]
    });
    this.registerForm = this.formBuilder.group({
      usernameRegister: ['',
        [Validators.required, Validators.pattern('^[^\\s]+$')]
      ],
      passwordRegister: ['',
        [
          Validators.required, Validators.minLength(8), Validators.pattern('^[^\\s]+$'),
          Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[^\s]{6,}$')]
      ]
    });
  }

  ngOnInit(): void {
    // if (this.authService.isAuthenticate()) {
    //   this.router.navigate(['/button']);
    // }
  }


  SignIn() {
    this.model = this.loginForm.value;
    console.log(this.loginForm, this.loginForm.valid, this.model);
    // return;
    if (this.loginForm.valid) {
      this.authService.login(this.model.username, this.model.password)
        .subscribe({
          next: (res: { code: string; data: any; }) => {
            const {code, data} = res;
            if (code === '200') {
              this.storageService.setItem(data.token, EStorageKey.TOKEN);
              this.storageService.setItem(data.username, EStorageKey.USERNAME);
              this.storageService.setItem(data.user_id, EStorageKey.USERID);
              this.storageService.setItem(data.partner_id, EStorageKey.PARTNER_ID);
              this.storageService.setItem(data.is_partner_admin ? '1' : '0', EStorageKey.IS_ADMIN);
              this.storageService.setItem(data.is_manage_user ? '1' : '0', EStorageKey.IS_MANAGE);

              this.profileData = data;
              if (this.profileData) {
                this.configService.loadingSubject.next('false');
                // this.notification.success('Đăng nhập thành công!');
                console.log('thanh cong')
                this.router.navigate(['/button']);
              } else {
                this.configService.loadingSubject.next('false');
              }
            } else {
              // this.notification.warning(
              //     'Tên đăng nhập và mật khẩu không đúng. Vui lòng kiểm tra lại!'
              // );
            }
          },
          error: (error: { status: number; }) => {
            if (error.status === 500 || error.status === 0) {
              // this.notification.error(
              //     error,
              //     null,
              //     'Lỗi kết nỗi với server!'
              // );
            } else {
              // this.notification.warning(
              //     'Tên đăng nhập và mật khẩu không đúng. Vui lòng kiểm tra lại!'
              // );
            }
          }
        });
    }
  }

  onErrorMessage(controlName: string, formGroup: FormGroup): string {
    const control = formGroup.get(controlName);
    const isPassword = controlName === 'password' || controlName === 'passwordRegister';

    if (control?.hasError('required')) {
      return `${isPassword ? 'Mật khẩu' : 'Tên đăng nhập'} là bắt buộc.`;
    }

    if (control?.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return `${isPassword ? 'Mật khẩu' : 'Tên đăng nhập'} phải có ít nhất ${minLength} ký tự.`;
    }

    if (control?.hasError('pattern')) {
      return isPassword
        ? 'Mật khẩu phải có ít nhất 1 chữ hoa, 1 ký tự đặc biệt và 1 chữ số.'
        : 'Tên đăng nhập không chứa khoảng cách.';
    }
    return '';
  }

}
