import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-active-admin',
  templateUrl: './active-admin.component.html',
  styleUrls: ['./active-admin.component.css']
})
export class ActiveAdminComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
