import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard-service.service';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { interval } from 'rxjs';


@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host:{
    id:"status"
  }
})
export class ServerStatusComponent implements OnInit {
 

  private destroyRef = inject(DestroyRef);
  currentStatus: 'online' | 'offline'|'unknown'='online';
  constructor(){
   
  }

  ngOnInit(){
    const interval = setInterval(() => {
      const rnd = Math.random();
      
      if (rnd < 0.33) {
        this.currentStatus = 'online';
      } else if (rnd < 0.66) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
      
    }, 3000);

    
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }


    
  }
  


  // constructor(private dashboardservice:DashboardService){}

  // currentStatus = this.dashboardservice.currentStatus;


