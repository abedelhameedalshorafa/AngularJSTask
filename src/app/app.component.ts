import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Task';
  description='Angular (formerly called Angular JS) is a typescript-based web application framework that supports full-stack development for building all types of web applications. It helps in creating reactive single page application (SPA) and is completely based on the concept of components.';

  boxDataArray=[
    {content:'The two-way data binding enables the synchronization of data between the Model and the View. ',name:'box1',id:1},
    {content:'With Angular, caching becomes a breeze! By producing static files, Angular eliminates the extra load on CPUs. ',name:'box2',id:2},
    {content:'The Plain Old JavaScript Objects (POJO) Model is used by Angular to make the code structure portable and independent. ',name:'box3',id:3},
    {content:'The Angular framework includes testing as a standard feature. In Angular, all JavaScript code is subjected to a set of tests. ',name:'box4',id:4},
  ]
}
