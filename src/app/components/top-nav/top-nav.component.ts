import { Component  , Input , HostBinding} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {

  @HostBinding('style.width') width = '100%';
  @Input() userName : string = 'User'

}
