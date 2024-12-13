import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemuComponent } from './shared/memu/memu.component';
import { AuthLinksComponent } from './shared/auth-links/auth-links.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from './shared/email/email.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { ButtonComponent } from './shared/button/button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  MemuComponent,
  AuthLinksComponent,
  SocialLinksComponent,
  EmailComponent,
  PhoneComponent,
  ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuScrolled = false;
  isSidebarShowing = false;

 @HostListener('window:scroll', ['$event'])
  /**
   * Check if the user has scrolled more than 100px from the top
   * @param {Event} event - the window:scroll event
   * @returns {void}
   */
  @HostListener('window:scroll', ['$event'])
  scrollCheck(event: Event): void {
    if (window.pageYOffset > 100) {
      this.isMenuScrolled = true;
    } else {
      this.isMenuScrolled = false;
    }
  }

  /**
   * Open the sidebar
   * @returns {void}
   */
  openSidebar(): void {
    this.isSidebarShowing = true;
  }

  /**
   * Close the sidebar
   * @returns {void}
   */
  closeSidebar(): void {
    this.isSidebarShowing = false;
  }
}