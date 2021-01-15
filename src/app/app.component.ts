import { AfterViewInit, Component, ViewChild, OnInit  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Angular Test App';
  displayedColumns = ['IntAxleNo', 'IntCoachPosition', 'DecTs1','DecTs2'];
  dataSource = new MatTableDataSource();

  ngAfterViewInit() {
  }

  constructor(private apiService: ApiService, ){}

  ngOnInit(){
    this.apiService.getTemperatureLog().subscribe(
      data => {
        this.dataSource.data = data;

      }
    );
  }

}

