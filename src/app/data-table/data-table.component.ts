import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
declare var require: any;

export interface TaskElement {
  created: string;
  state: string;
  id: number;
  type: string;
  color: string;
}

export interface Type {
  value: string;
  viewValue: string;
}

var taskjson = require('../../assets/files/task.json');
const ELEMENT_DATA: TaskElement[] = taskjson;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['select','created', 'state', 'id', 'type'];
  dataSource = new MatTableDataSource<TaskElement>(ELEMENT_DATA);
  selection = new SelectionModel<TaskElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  types: Type[] = [
    {value: 'failure1-0', viewValue: 'Failure Type 1'},
    {value: 'failure2-1', viewValue: 'Failure Type 2'},
    {value: 'failure3-2', viewValue: 'Failure Type 3'},
    {value: 'failure4-3', viewValue: 'Failure Type 4'},
    {value: 'failure5-4', viewValue: 'Failure Type 5'},
  ];

  constructor() {
  }

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
  checkboxLabel(row?: TaskElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
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

