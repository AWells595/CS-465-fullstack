import { Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: Trip;

  constructor(

  ) { }

  ngOnInit() {
  }

}