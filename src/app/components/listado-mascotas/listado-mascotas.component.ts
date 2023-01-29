import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascotas } from 'src/app/interfaces/mascotas';

const listMascotas: Mascotas[] = [
  {nombre: 'Ciro', edad: 3, raza: 'Golden', color:'Dorado', peso: 13.5},
  {nombre: 'Kira', edad: 5, raza: 'Pastor', color:'Negro', peso: 17.7},
  {nombre: 'Sator', edad: 3, raza: 'Huskey', color:'Gris', peso: 23.2},
  {nombre: 'Luna', edad: 2, raza: 'Sachicha', color:'Blanco', peso: 10.5},
  {nombre: 'Toki', edad: 8, raza: 'Chihuahua', color:'Marron', peso: 7},
  {nombre: 'Kiki', edad: 1, raza: 'Doberman', color:'Negro', peso: 15}
];

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.scss']
})
export class ListadoMascotasComponent implements AfterViewInit {

  displayedColumns: string[] = ['nombre','edad','raza','color','peso'];
  dataSource = new MatTableDataSource<Mascotas>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.dataSource.sort = this.sort;
  }

}
