import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components (Views/Pages)
import { HomeElements } from "./views/home-elements/home-elements.component";
import { HomeComponent } from "./views/home/home.component";


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", pathMatch: "full", component: HomeComponent },
  { path: "home-elements", pathMatch: "full", component: HomeElements }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
