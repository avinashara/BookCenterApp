import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    originalData = [{
        id: 'book1',
        img: '../../assets/JavascriptOne.jpg',
        title: 'JavaScript: The Definitive guide',
        flag: 'cr',
        author: 'David Flanagan',
    }, {
        id: 'book2',
        img: '../../assets/javascripttwo.jpg',
        title: 'JavaScript: The Good Parts',
        flag: 'cr',
        author: 'Douglas Crockford',
    }, {
        id: 'book3',
        img: '../../assets/js.jpg',
        title: 'Programming Javascript Application',
        flag: 'wr',
        author: 'Eric Elliott',
    }, {
        id: 'book4',
        img: '../../assets/js_and_jquery.jpg',
        title: 'JavaScript & Jquery',
        flag: 'hr',
        author: 'John Duckett',
    }, {
        id: 'book5',
        img: '../../assets/jsp_javascript_patterns.jpg',
        title: 'JavaScript Patterns',
        flag: 'cr',
        author: 'Stoyan stefanov',
    }, {
        id: 'book6',
        img: '../../assets/nodejs.jpg',
        title: 'Web Developmenet with Node & Express',
        flag: 'hr',
        author: 'Ethan Brown',
    }, {
        id: 'book7',
        img: '../../assets/nodejsfour.jfif',
        title: 'MEAN fundamental',
        flag: 'hr',
        author: 'unknown',
    }, {
        id: 'book8',
        img: '../../assets/nodejsone.jfif',
        title: 'Node JS: Up and Running',
        flag: 'cr',
        author: 'Tom Hughes ',
    }, {
        id: 'book9',
        img: '../../assets/nodejstwo.jfif',
        title: 'Node JS web development',
        flag: 'wr',
        author: 'David',
    }, {
        id: 'book10',
        img: '../../assets/pnodejs.jpg',
        title: 'Professional Node JS',
        flag: 'cr',
        author: 'Pedro Teixeira',
    }];

    getData() {
        return Object.create(this.originalData);
    }

    getFilteredData(flag) {
        if (!flag) { return []; }
        const filteredData = this.originalData.filter((obj) => {
            return obj.flag === flag;
        });
        return filteredData;
    }
    getBookById(id) {
        return this.originalData.filter((obj) => {
            return obj.id === id;
        });
    }

    getSearchedData(searchText) {
        const text = searchText.toLowerCase();
        if (!searchText || searchText.legth < 1) { return this.originalData; }
        const searchRecords = this.originalData.filter((obj) => {
            return obj.title.toLowerCase().includes(text) || obj.author.toLowerCase().includes(text);
        });
        return searchRecords;
    }

    setTheFlag(id, flag) {
        const bookInd = this.originalData.findIndex((obj) => {
            return obj.id === id;
        });
        this.originalData[bookInd].flag = flag;
    }
}
