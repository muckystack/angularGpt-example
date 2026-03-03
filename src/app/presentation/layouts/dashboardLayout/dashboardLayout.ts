import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  imports: [CommonModule],
  templateUrl: './dashboardLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayout {}
