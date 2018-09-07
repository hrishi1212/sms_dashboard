import { Component, OnInit } from '@angular/core';
import { data } from '../domain/data';
import { dataService } from '../service/data.service';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    providers: [dataService]
})

export class TableComponent implements OnInit {

    constructor(private _dataservice: dataService) { }

    public tableData1: TableData;

    public tableData2: TableData;

    data: data = new data();

    header: any[];
    tableData: any[];

    fromDate: Date;
    toDate: Date;

    ngOnInit() {
        this.getdata();
        this.header = [
            { field: 'id', header: 'id' },
            { field: 'city', header: 'city' },
            { field: 'start_date', header: 'start_date' },
            { field: 'end_date', header: 'end_date' },
            { field: 'price', header: 'price' },
            { field: 'status', header: 'status' },
            { field: 'color', header: 'color' }
        ];
    }

    getdata() {
        this._dataservice.getdata().subscribe((serverdata: any) => {
            if (serverdata) {
                this.tableData = serverdata;
            }
        })
    }

    filterData = function () {
        let from = new Date(this.fromDate);
        let to = new Date(this.toDate);

        let filter_array = [];
        filter_array = this.tableData;

        let filter_data = filter_array.filter(function (values) {
            values.start_date = new Date(values.start_date);
            values.end_date = new Date(values.end_date);
            return values.start_date >= from && values.end_date <= to;
        });

        filter_data.forEach(function(element){           
            element.start_date = element.start_date.toLocaleDateString();
            element.end_date = element.end_date.toLocaleDateString();
        });

        this.tableData = filter_data;

    }
}
