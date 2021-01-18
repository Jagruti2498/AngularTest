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
  previousPos = -1;
  public isShowPosition = false;

  ngAfterViewInit() {
  }

  constructor(private apiService: ApiService, ){
   // this.dataSource.data = this.apiService.getSampleData();
  }

  ngOnInit(){
    this.apiService.getTemperatureLog().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  checkPosition(position: number) {
    if(this.previousPos == position) {
      this.isShowPosition = false;
      return false;
    }else {
      this.previousPos = position;
      this.isShowPosition = true;
      return true;
    }

  }


}

