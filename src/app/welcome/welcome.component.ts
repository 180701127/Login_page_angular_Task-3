import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public userName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('userName') || '';
  }

}
