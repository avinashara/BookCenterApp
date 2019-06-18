import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { AppService } from './../../service/app.service';

@Component({
    selector: 'app-rightmenu',
    templateUrl: './rightmenu-component.html',
    styleUrls: ['./rightmenu-component.css']
})
export class RightMenuComponent implements OnInit, DoCheck {
    flag: String;
    constructor(private appService: AppService) { }
    @Input() bookid: String;
    ngOnInit() {
        this.flag = 'none';
    }
    ngDoCheck(): void {
        const rec = this.appService.getBookById(this.bookid);
        this.flag = rec.length > 0 ? rec[0].flag : 'none';
    }
    clickHandler(event) {
        const value = event.target.getAttribute('value');
        this.appService.setTheFlag(this.bookid, value);
        this.flag = value;
        document.getElementById('rightmenu').style.display = 'none';
        const cusEvent = new CustomEvent('updateData');
        document.dispatchEvent(cusEvent);
    }
}
