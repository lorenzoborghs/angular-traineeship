import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, TagComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
