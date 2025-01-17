import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GuideComponent } from '../../guide.component';

@Component({
  selector: 'app-guide-timebar',
  templateUrl: './timebar.component.html',
  styleUrls: ['./timebar.component.css']
})
export class TimebarComponent implements OnInit {
  @Input() guide!: GuideComponent;

   constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

   segmentToStartTime(segment: number) {
    // let st = new Date(this.startTime);
    const offset = segment * 1800000; /* 30 mins */
    const t = new Date(this.guide.m_startDate.getTime() + offset);
    // return this.toLocalShortTime(t);
    // Get the locale specific time and remove the seconds
    const tWithSecs = t.toLocaleTimeString() + ' ';
    return tWithSecs.replace(/:.. /, ' ');
  }

  pageLeft() {
    this.guide.m_pickerDate = new Date(this.guide.m_startDate.getTime() - 7200000);
    this.guide.onDatePickerClose();
  }

  pageRight() {
    this.guide.m_pickerDate = new Date(this.guide.m_startDate.getTime() + 7200000);
    this.guide.onDatePickerClose();
  }
}
