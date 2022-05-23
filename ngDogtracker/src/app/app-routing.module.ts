import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DogComponent } from './components/dog/dog.component';
import { IntakeComponent } from './intake/intake.component';



const routes: Routes = [
  {path:"home",component:DogComponent},
  {path:"intake",component:IntakeComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
