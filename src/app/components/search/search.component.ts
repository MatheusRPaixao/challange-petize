import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() searchControl: FormControl = new FormControl('');
  @Input() placeholder = 'Search';
  @Input() readonly = false;
  @Output() enterEvent = new EventEmitter<null>();
}
