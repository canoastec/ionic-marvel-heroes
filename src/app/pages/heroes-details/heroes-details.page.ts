import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHelperService } from '../../services/http-helper/http-helper.service';
import { ApiHelperService } from '../../services/api-helper/api-helper.service';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.page.html',
  styleUrls: ['./heroes-details.page.scss']
})
export class HeroesDetailsPage implements OnInit {

    heroId: any;
    heroData: any[] = [];

    constructor(private activatedRoute: ActivatedRoute, private httpHelper: HttpHelperService, private apiHelper: ApiHelperService) {}

    ngOnInit() { }

    ionViewWillEnter() {
        // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
        this.httpHelper.doHttpGet(this.apiHelper.getCharacterUrl(this.activatedRoute.snapshot.paramMap.get('id')))
        .then((result: any) => {
            this.heroData = result.data.results;
        })
        .catch((err: any) => {
            console.log(JSON.stringify(err));
        });
        // console.log(JSON.stringify(this.heroData));
    }
}
