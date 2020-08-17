import { Component, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-swagger';

  ngOnInit(): void {
    const ui = SwaggerUI({
      url: 'https://petstore.swagger.io/v2/swagger.json',
      dom_id: '#swagger',
    });
  }
  
}
