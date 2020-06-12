import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  date: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.date = this.route.snapshot.queryParamMap.get('date');
  }
  goBack() {
    const url = `#`;
    this.router.navigateByUrl(url, {relativeTo: this.route});
  }

}
