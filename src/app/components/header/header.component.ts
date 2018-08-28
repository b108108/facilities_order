import { Component, OnInit, Input } from '@angular/core';
import {FooterService} from "../../services/footer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() titleHeader: string;

  public step = 0;

  constructor(
    private footerService: FooterService
  ) { }

  ngOnInit() {
    this.step = this.footerService.currentStep;
  }

}
