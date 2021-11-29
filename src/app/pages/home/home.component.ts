import { Component, OnInit } from '@angular/core';
import { MailsService } from 'src/app/services/mails.service';
import { Mail } from 'src/app/model/mail.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	opened: boolean = false;
	selected: string = 'inbox';
	list: Mail[] = [];

	constructor(private mails: MailsService) {}

	ngOnInit(): void {
		this.list = this.mails.getInbox();
	}

	toggleSidenav(): void {
		this.opened = !this.opened;
	}

	selectMails(option: string): void {
		this.selected = option;
		if (option === 'inbox') {
			this.list = this.mails.getInbox();
		}
		if (option === 'sent') {
			this.list = this.mails.getSent();
		}
		this.toggleSidenav();
	}
}