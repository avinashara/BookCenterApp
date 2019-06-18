import { Component, OnInit } from '@angular/core';

import { AppService } from './../../service/app.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-component.html',
    styleUrls: ['./dashboard-component.css']
})
export class DashboardComponent implements OnInit {
    crBooks: Array<Object>;
    wrBooks: Array<Object>;
    hrBooks: Array<Object>;
    constructor(private appService: AppService) { }
    ngOnInit() {
        this.updateData();
        document.addEventListener('updateData', this.updateData.bind(this));
    }
    updateData() {
        this.crBooks = this.appService.getFilteredData('cr');
        this.wrBooks = this.appService.getFilteredData('wr');
        this.hrBooks = this.appService.getFilteredData('hr');
    }
    clickHandler(id, flag) {
        this.appService.setTheFlag(id, flag);
    }
}
