import { MailInterface } from 'src/app/interfaces/interfaces';

export class Mail {
	constructor(
		public id: number = -1,
		public where: string = '',
		public from: string = '',
		public to: string = '',
		public date: string = '',
		public subject: string = '',
		public body: string = ''
	) {}
	
	toInterface(): MailInterface {
		return {
			id: this.id,
			where: this.where,
			from: this.from,
			to: this.to,
			date: this.date,
			subject: this.subject,
			body: this.body
		};
	}
}