import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

export interface Task {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 25, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  tasks: Task[] = [
    {value: 'failure1-0', viewValue: 'Failure Type 1'},
    {value: 'failure2-1', viewValue: 'Failure Type 2'},
    {value: 'failure3-2', viewValue: 'Failure Type 3'},
    {value: 'failure4-3', viewValue: 'Failure Type 4'},
    {value: 'failure5-4', viewValue: 'Failure Type 5'},
    {value: 'failure6-5', viewValue: 'Failure Type 6'},
    {value: 'failure7-6', viewValue: 'Failure Type 7'},
  ];

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


