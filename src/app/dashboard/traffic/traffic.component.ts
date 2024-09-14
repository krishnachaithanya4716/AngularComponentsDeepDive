import { Component } from '@angular/core';
import { DashboardService } from '../../dashboard-service.service';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  constructor(private dashboardservice:DashboardService){}
  dummyTrafficData=this.dashboardservice.dummyTrafficData;
  maxTraffic = this.dashboardservice.maxTraffic;
  


}
