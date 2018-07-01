import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name-card',
  templateUrl: './user-name-card.component.html',
  styleUrls: ['./user-name-card.component.css']
})
export class UserNameCardComponent {
  @Input() public userName: string;
  @Input() public canAddUser: boolean;

  public onAdd() {
    console.log('add user');
  }
}

