import {Routes} from '@angular/router';
import {WeddingHomeComponent} from './wedding/wedding-home.component';

export const routes: Routes = [
    {
        path: '',
        component: WeddingHomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
