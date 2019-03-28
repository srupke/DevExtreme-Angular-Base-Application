import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ExampleData',
  templateUrl: './ExampleData.component.html'
})
export class ExampleDataComponent {
  public exampleData: IExampleDataModel[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IExampleDataModel[]>(baseUrl + 'api/ExampleData/GetExampleData').subscribe(result => {
      this.exampleData = result;
    }, error => console.error(error));
  }
}

interface IExampleDataModel {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
