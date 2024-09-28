import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  newPassword: string = '';
  logo = environment.logo;
  loading = false;
  icon = faLock;

  constructor(
    private loginService: LoginService,
    private activeRoute: ActivatedRoute
  ) { }

  async resetPassword() {
    this.loading = true;
    const params = this.activeRoute.snapshot.params;
    await this.loginService.resetPassword(
      params['email'],
      params['resetCode'],
      this.newPassword
    );
    this.loading = false;
  }
}
