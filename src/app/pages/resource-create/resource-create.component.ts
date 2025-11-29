import { Component } from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-resource-create',
  imports: [
    MatIconButton,
    RouterLink,
    MatIcon,
    MatLabel,
    MatFormField,
  ],
  templateUrl: './resource-create.component.html',
  styleUrl: './resource-create.component.css'
})
export class ResourceCreateComponent {

}
