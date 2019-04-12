import { HttpHelperService } from './../../services/http-helper/http-helper.service';
import { ApiHelperService } from './../../services/api-helper/api-helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.page.html',
  styleUrls: ['./heroes-search.page.scss'],
})
export class HeroesSearchPage implements OnInit {
    searchString: string;
    heroesResultList: any[] = [];
    offset = 1460;

    constructor(private apiHelper: ApiHelperService, private httpHelper: HttpHelperService) { }

    ngOnInit() {
    }

    onSearchClick(event) {
        this.httpHelper.doHttpGet(this.apiHelper.getCharactersUrl(this.offset))
            .then((result: any) => {
                if (this.offset > result.data.total){
                    event.target.disabled = true;
                    return;
                }

                this.heroesResultList = this.heroesResultList.concat(result.data.results);
                this.offset += 20;

                if (typeof event.target.complete == 'function'){
                    event.target.complete();
                }
            }).catch((err) => {
                alert('Ferrou time ' + err.message);
                console.log(JSON.stringify(err));
            });
    }

    // loadData(event) {
    //     this.httpHelper.doHttpGet(this.apiHelper.getCharactersUrl(this.offset))
    //         .then((result: any) => {
    //             // console.log(JSON.stringify(result));
    //             this.heroesResultList += result.data.results;
    //         }).catch((err) => {
    //             console.log(JSON.stringify(err));
    //         });
    // }
}
