import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from "@angular/core";
import {
  Router,
  NavigationStart,
  Navigation,
  ActivatedRoute,
  ActivationStart
} from "@angular/router";
import { tap, takeWhile, filter } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuIsOpen: boolean = false;
  eventSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventSub = this.router.events
      .pipe(
        filter(e => {
          return e instanceof NavigationStart || e instanceof ActivationStart;
        }),
        tap(console.log)
      )
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.menuIsOpen = false;
        }
      });

    this.route.url
      // .pipe(tap(console.log))
      .subscribe(params => console.log("YO: ", params));
  }

  ngOnDestroy() {
    this.eventSub.unsubscribe();
  }

  onClick(e): void {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
