import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  favorite: boolean = false;
  profile: Profile;
  newTag: string;

  constructor() {}

  ngOnInit(): void {
    this.profile = {
      name: 'Lorenzo Borghs',
      picture: 'https://placebear.com/80/80',
      birthday: new Date('08/23/1992'),
      position: 'Front-End Developer',
      location: 'Turnhout',
      yearsExperience: 5,
      referredBy: 'Joey Comhaire',
      tags: ['Angular', 'React', 'Javascript'],
    };
  }

  toggleFavorite(): void {
    this.favorite = !this.favorite;
  }

  addTag(): void {
    this.profile.tags.push(this.newTag);
    this.newTag = '';
  }

  removeTag(tagToRemove: string): void {
    this.profile.tags = this.profile.tags.filter((tag) => tag !== tagToRemove);
  }
}
