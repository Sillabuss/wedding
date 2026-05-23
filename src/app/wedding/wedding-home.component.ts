import {Component} from '@angular/core';
import {NgClass, NgFor} from '@angular/common';

@Component({
    selector: 'app-wedding-home',
    standalone: true,
    imports: [NgFor, NgClass],
    templateUrl: './wedding-home.component.html',
    styleUrl: './wedding-home.component.css'
})
export class WeddingHomeComponent {
    protected readonly quickLinks = [
        {label: 'La giornata', href: '#giornata'},
        {label: 'Luogo', href: '#luogo'},
        {label: 'Lista nozze', href: '#lista-nozze'},
        {label: 'RSVP', href: '#rsvp'},
    ];

    protected readonly scheduleItems = [
        {
            time: '17:00',
            title: 'Cerimonia',
            text: "La cerimonia si terrà presso l'Antica Fattoria di Paterno"
        },
        {
            time: '18:30',
            title: 'Aperitivo',
            text: 'Aperitivo di benvenuto nel giardino'
        },
        {
            time: '20:15',
            title: 'Cena',
            text: 'Cena insieme nella cornice della fattoria'
        },
        {
            time: '23:00',
            title: 'Festa',
            text: 'Taglio della torta e party time!'
        },
    ];

    protected readonly carouselItems = [
        {label: 'Corte esterna', src: '/antica fattoria/img.png'},
        {label: 'Giardino', src: '/antica fattoria/img_1.png'},
        {label: 'Vi aspettiamo!', src: '/antica fattoria/img_2.png'},
    ];

    protected readonly faqs = [
        {
            title: 'Preferenze alimentari',
            text: 'Vi chiederemo di segnalarci allergie, intolleranze o esigenze particolari nel form RSVP.'
        },
        {
            title: 'Servizio bus',
            text: 'Stiamo valutando un servizio bus/navetta. Inserite la vostra preferenza nel form RSVP, cosi possiamo organizzarci al meglio.'
        },
    ];

    protected readonly registryUrl = 'https://eventi.siapcn.it/installations/siapDesign/CutterViaggi/index.php?user=yEZuiKRBZWVY%2FqjjxVQzxg%3D%3D&pass=i8wWSZf7Yss3fj%2FHeB5Lng%3D%3D&operationalUnit=100';
    protected readonly rsvpUrl = 'https://docs.google.com/forms/d/e/example/viewform';
    protected readonly mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Antica%20Fattoria%20di%20Paterno';

    protected returnIcon(title: string): string {
        switch (title.trim().toLowerCase()) {
            case 'cerimonia':
                return 'ph-infinity';
            case 'aperitivo':
                return 'ph-cheers';
            case 'festa':
                return 'ph-disco-ball';
            case 'cena':
                return 'ph-fork-knife';
            default:
                return 'ph-heart';
        }
    }
}
