import { Component } from '@angular/core';
import { Package } from 'src/app/interfaces/package';
import { PackageService } from 'src/app/providers/package.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private dataProvider: PackageService) {}

  public data: Package[] = [];
  public displayedColumns: string[] = ['idpackage', 'peso', 'descripcion'];
  public dataSource: Package[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Package[];
      this.dataSource = this.data;
    });
  }

}
