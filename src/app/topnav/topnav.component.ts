import { Component, Input, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetlatlngService } from '../getlatlng.service';
// import { MainmapComponent } from '../mainmap/mainmap.component';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  Selectedstate: string;
 // console.log(Selectedstate);
 message: string;
  constructor(private breakpointObserver: BreakpointObserver, private getlatlng: GetlatlngService ) {}
  ngOnInit() {
    this.getlatlng.currentMessage.subscribe(message => this.message = message);
  }

/*   @Input() mapComponent: MainmapComponent;
  @HostListener('onStateChange')*/
  onStateChange(estate) {
    // console.log(estate);
    this.getlatlng.changeMessage(estate);
  }
}
