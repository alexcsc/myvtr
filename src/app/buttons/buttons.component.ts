import { Component, OnInit} from '@angular/core';
import { time } from '../time';

//switch from play to pause
var play: boolean = false;  //intended to manage the play/pause button and stop the counting
var rec: boolean = false;
var interval = null;

//manage 
const manageTime = () => {
  if (time.frames > 29) {
    time.frames = 0
    time.seconds++;     
  } else if(time.frames <= 0 && time.seconds <= 0 && time.minutes <= 0 && time.hours <= 0){
    clearInterval(interval);
  }else if (time.frames < 0){
    time.frames = 29
    time.seconds--
  }

  if (time.seconds > 59) {
    time.seconds = 0
    time.minutes++;     
  } else if (time.seconds < 0) {
    time.seconds = 59;
    time.minutes--;
  }

  if (time.minutes > 59) {
    time.minutes = 0
    time.hours++;     
  } else if (time.minutes < 0) {
    time.minutes = 59;
    time.hours--;
  }
}

const playTime = () => {
  time.frames++;
  manageTime();
  if (rec) time.capture = "[" + time.hours + ":" + time.minutes + ":" + time.seconds + ":" + time.frames + "]";
}

const reverseTime = () => {
  time.frames--;
  manageTime();
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent implements OnInit {
  playPauseBtn = "play_arrow"; //play/pause button icon
  disableBtn = false;

  constructor() { }

  ngOnInit() {
    
  }

  rewind(){
    play = true;                      //I wanted to create a function that would run whenever PLAY's value changed
    clearInterval(interval);          //to stop the interval/loop   
    this.playPauseBtn = "pause";      //and to change the button play/pause
                                      //but since I couldn't find a way to do that I'm just repeating these lines
    
    if(time.frames > 0 || time.seconds > 0 || time.minutes > 0 || time.hours > 0) interval = setInterval(reverseTime, 16,65);
  }

  frameBack(){
    clearInterval(interval);
    this.playPauseBtn = "play_arrow";
    play=false;
    if(time.frames > 0 || time.seconds > 0 || time.minutes > 0 || time.hours > 0) reverseTime();
  }

  stop(){
    play = false;              
    clearInterval(interval);    
    this.playPauseBtn = "play_arrow";     
    time.frames = 0;
    time.seconds = 0;
    time.minutes = 0;
    time.hours = 0;
  }

  playPause() {
    play = !play;
    if (play) {
      interval = setInterval(playTime, 33,3);
      this.playPauseBtn = "pause";
    }
    else {
      clearInterval(interval);
      this.playPauseBtn = "play_arrow";
    }
  }

  frameForward() {
    clearInterval(interval);
    this.playPauseBtn = "play_arrow";
    play=false;
    playTime();
  }

  fastForward() {
    clearInterval(interval);
    this.playPauseBtn = "pause";
    play=true;
    interval = setInterval(playTime, 16,65);
  }

  record() {
    clearInterval(interval);
    this.playPauseBtn = "play_arrow";
    play=false;
    rec = !rec;
    this.disableBtn = !this.disableBtn;
    if (rec) interval = setInterval(playTime, 33,3);
  }

}
