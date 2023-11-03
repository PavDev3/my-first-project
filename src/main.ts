import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import  routeConfing  from './app/routes';

bootstrapApplication(AppComponent,
    {providers: 
      [provideProtractorTestingSupport(), 
      provideRouter(routeConfing)]})
  .catch(err => console.error(err));

