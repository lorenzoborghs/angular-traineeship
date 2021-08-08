import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  favorite: boolean = false;
  profile: any = {
    name: 'Lorenzo Borghs',
    birthday: '23 augustus 1992',
    position: 'Front-End Developer',
    location: 'Turnhout',
    yearsExperience: 5,
    referredBy: 'Joey Comhaire',
    tags: ['Angular', 'React', 'Javascript'],
  };

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite(): void {
    alert('Favorite');
  }
}
