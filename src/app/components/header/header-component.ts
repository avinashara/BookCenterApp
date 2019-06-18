import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header-component.html',
    styleUrls: ['./header-component.css']
})
export class HeaderComponent implements OnInit {
    navOption: String;
    constructor(private route: Router) { }
    ngOnInit() {
        this.navOption = 'Search';
    }
    navHandler() {
        this.route.navigate([`/${this.navOption}`]);
        this.navOption = this.navOption === 'Search' ? 'Home' : 'Search';
    }
}
