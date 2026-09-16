import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutUs } from './pages/about-us/about-us';
import { GapCheck } from './pages/gap-check/gap-check';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'pricing', component: Pricing },
      { path: 'contact-us', component: ContactUs },
      { path: 'who-we-are', component: AboutUs },
    ],
  },
  {
    path: "gap-check",
    component: GapCheck
  }
];
