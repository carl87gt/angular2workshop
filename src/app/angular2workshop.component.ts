import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { TeamComponent } from './+team';
import { DetailComponent } from './+detail';

@Component({
  moduleId: module.id,
  selector: 'angular2workshop-app',
  templateUrl: 'angular2workshop.component.html',
  styleUrls: ['angular2workshop.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/team', component: TeamComponent},
  {path: '/detail/:id', component: DetailComponent}
])
export class Angular2workshopAppComponent {
  title = 'angular2workshop works!';
}
