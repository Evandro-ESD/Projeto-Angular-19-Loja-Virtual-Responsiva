import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-header',
  imports: [RouterLink, MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


}
