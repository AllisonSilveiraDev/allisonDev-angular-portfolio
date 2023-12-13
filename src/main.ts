import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
        // Aqui você pode fazer algo após a inicialização do módulo, se necessário.
    })
    .catch((err) => console.error(err));
