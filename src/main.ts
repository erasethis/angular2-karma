import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';

bootstrap(AppComponent, [

])
.then(success => console.log("bootstrap succesful"))
.catch(error => console.log("bootstrap failed: " + error));