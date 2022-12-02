
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { ProfileComponent } from './profile.component';
import { SettingsProfileComponent } from './components/settingsProfile/settingsProfile.component';
import { SettingsMailComponent } from './components/settingsMail/settingsMail.component';
import { SeilsComponent } from './components/seils/seils.component';
import { DescriptionComponent } from './components/description/description.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsProfileComponent,
    SettingsMailComponent,
    SeilsComponent,
    DescriptionComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path:'', component: ProfileComponent },
    ])],
  })
  export class ProfileModule {}

