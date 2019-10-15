import { Component } from '@angular/core';
import { sampleProducts } from './products';

interface ColumnSetting {
  field: string;
  title: string;
  format?: string;
  type?: 'text' | 'numeric' | 'boolean' | 'date';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  private data = sampleProducts;
  columns: ColumnSetting[] = [{field: 'ProductID', title: 'ID'}, {field: 'ProductName', title: 'Name'}];
}
