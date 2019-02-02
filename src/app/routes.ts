
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {SkillsPageComponent} from './pages/skills-page/skills-page.component';
import {Route} from '@angular/router';

export const routes: Route[]= [
    {
        path:'',
        component: LandingPageComponent
    },
    {
        path:'skills',
        component: SkillsPageComponent
    }
]
