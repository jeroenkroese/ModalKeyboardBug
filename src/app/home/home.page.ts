import { Component } from '@angular/core';
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonModal,
	IonButtons,
	IonItem,
	IonInput,
} from '@ionic/angular/standalone';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [
		IonInput,
		IonItem,
		IonButtons,
		IonModal,
		IonButton,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
	],
})
export class HomePage {
	constructor() {}
}
