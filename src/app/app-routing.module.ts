import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { IndexComponent } from './components/index/index.component';
import { ServiceComponent } from './components/service/service.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'testimonial', component: TestimonialComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
