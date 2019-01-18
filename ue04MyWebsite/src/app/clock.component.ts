import { Component } from '@angular/core';

@Component({
      selector: 'app-clock',
      templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit, OnDestroy{
  public showedtext = 'HH:MM:SS';
  private timer: any;

  public ngOnInit(){
        this.timer = setInterval(() => {
            this.showedtext = new.Date().toISOString();

        }, 1000);
  }
  public ngOnDestroy(){
      if(timer){
            clearInterval(timer);
            this.timer=null;
      }
  }
}