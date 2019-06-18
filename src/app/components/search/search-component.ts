import { Component, OnInit } from '@angular/core';

import { AppService } from './../../service/app.service';

@Component({
    selector: 'app-search',
    templateUrl: './search-component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    books: Array<Object>;
    searchText: String;
    constructor(private appService: AppService) { }
    ngOnInit() {
        this.books = this.appService.getData();
    }
    clickHandler(id, flag) {
        this.appService.setTheFlag(id, flag);
    }
    changeHandler(text) {
        this.books = this.appService.getSearchedData(text);
    }
}
