import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  favorite: boolean = false;
  profile: Profile = {
    name: 'Lorenzo Borghs',
    birthday: new Date('08/23/1992'),
    position: 'Front-End Developer',
    location: 'Turnhout',
    yearsExperience: 5,
    referredBy: 'Joey Comhaire',
    tags: ['Angular', 'React', 'Javascript'],
  };

  constructor() {}

  ngOnInit(): void {}

  toggleFavorite(): void {
    this.favorite = !this.favorite;
  }
}
