import { Component } from '@angular/core';
import { Package } from 'src/app/interfaces/package';
import { PackageService } from 'src/app/providers/package.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private dataProvider: PackageService) { }

  //Declaración de la variable que almacenará los datos
  public data : Package[] = [];

  public selectedPackage: Package | null = null;

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Package[]);
    })
  }

   /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
   displayedColumns: string[] = ['idpackage','peso','descripcion'];
   dataSource = this.data;

   seleccionarPaquete(paquete: Package) {
    this.selectedPackage = paquete;
  }
}
