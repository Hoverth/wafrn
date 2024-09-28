import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
  loading = false;
  logo = environment.logo;
  icon = faUser;

  loginForm = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private loginService: LoginService,
    private messageService: MessageService
  ) { }

  async onSubmit() {
    this.loading = true;
    await this.loginService.requestPasswordReset(this.loginForm.value.email);
    this.loading = false;
  }
}
