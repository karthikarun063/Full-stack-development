import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    { path:'', component : HomeComponent },
    { path:'contact', component : ContactComponent },
    { path:'all-course', component : AllCourseComponent },
    { path:'blog', component : BlogComponent },
    { path:'pages', component : PagesComponent }
];
