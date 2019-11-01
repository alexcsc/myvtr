import { Component, OnInit } from '@angular/core';
import { time } from '../time'

@Component({
  selector: 'app-timecode',
  templateUrl: './timecode.component.html',
  styleUrls: ['./timecode.component.css']
})

export class TimecodeComponent implements OnInit {
  time = time
  //constructor() { }

  ngOnInit() {
  }

}
