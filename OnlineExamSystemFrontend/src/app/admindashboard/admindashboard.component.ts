import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AdminnavComponent } from '../adminnav/adminnav.component';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,AdminnavComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

}
