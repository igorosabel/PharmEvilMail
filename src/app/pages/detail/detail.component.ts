import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Mail } from 'src/app/model/mail.model';
import { MailsService } from 'src/app/services/mails.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
	mail: Mail = new Mail();

	constructor(
		private activatedRoute: ActivatedRoute,
		private mails: MailsService
	) {}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			const id: number = parseInt(params['id']);
			this.mail = this.mails.getMail(id);
		});
	}
}