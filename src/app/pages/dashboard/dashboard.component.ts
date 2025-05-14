import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  inputData: string = '';

  datos: string[] = [];

  ngOnInit() {
    const storedData = localStorage.getItem('datos');
    if (storedData) {
      this.datos = JSON.parse(storedData);
    }
  }

  addData() {
    if (this.inputData.trim() !== '') {
      this.datos.push(this.inputData);
      this.inputData = '';

      localStorage.setItem('datos', JSON.stringify(this.datos));
    }
  }


}
