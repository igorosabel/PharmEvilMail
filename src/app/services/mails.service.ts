import { Injectable } from '@angular/core';
import { Mail } from 'src/app/model/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailsService {
	allMails: Mail[] = [
		new Mail(
			1,
			'inbox',
			'section9boss@pharmevil.com',
			'evil_executive_officer@pharmevil.com',
			'10/25/2021, 13:32 CET',
			'Re: Vaccine issues',
			'<p>Done</p><p>Don&apos;t come to me again with shit like this</p>'
		),
		new Mail(
			2,
			'sent',
			'evil_executive_officer@pharmevil.com',
			'section9boss@pharmevil.com',
			'10/25/2021, 12:27 CET',
			'Re: Vaccine issues',
			'<p>Come on, we are not used to this line of work.</p><p>And it was your minion the one naming the sons of Khofith.</p><p>Could section 9 take care of it?</p>'
		),
		new Mail(
			3,
			'inbox',
			'section9boss@pharmevil.com',
			'evil_executive_officer@pharmevil.com',
			'10/25/2021, 13:24 CET',
			'Re: Vaccine issues',
			'<p>WTF!</p><p>Get rid of the labrat. For good.</p><p>I will deal with my minion.</p>'
		),
		new Mail(
			4,
			'sent',
			'evil_executive_officer@pharmevil.com',
			'section9boss@pharmevil.com',
			'10/25/2021, 12:20 CET',
			'Re: Vaccine issues',
			'<p>Hi,</p><p>I come with some bad news.</p><p>We have a problem with one of the labrats from the technical team of the vaccines.</p><p>He came to me saying that some guys from section 9 were labeling saline serum vials as Covid vaccine. It seems that one of your guys even menaced him with some gibberish on cosmic punishments so he would shut up.</p><p>So, we have a guy that may act as a whistleblower on the fake vaccine and one of your minions saying things he shouldn&apos;t.</p><p>The harvest is close, we need to cut this right away.</p>'
		),
		new Mail(
			5,
			'sent',
			'evil_executive_officer@pharmevil.com',
			'section9boss@pharmevil.com',
			'11/18/2021, 09:16 CET',
			'The Harvest',
			'<p>So be it.</p><div class="signature">iä iä Khofith Nyantin!</div>'
		),
		new Mail(
			6,
			'inbox',
			'section9boss@pharmevil.com',
			'evil_executive_officer@pharmevil.com',
			'11/18/2021, 10:03 CET',
			'RE: Harvest arrangements',
			'<p>The arrangements for the Harvest during the first last quarter moon of 2022 are almost done.</p><p>The bullshit on the TV and internet can just help our goals. Let those lower beings talk about chips, graphene, 5G or whichever shit they want on Covid and the vaccines. It&apos;s just the perfect smokescreen for us to silently harvest the return of the King in Yellow to carcosa.</p><p>Concerning the uncontrolled sources you mention, we believe any possible disturbance was eliminated. The were only 3 sources for the name of Khofith:</p><ul><li>Codex Milesius, burnt during the coups in Turkey in the &apos;80s</li><li>The letter from L. Caelius Rufus, eliminated during &apos;68 disturbances</li><li>The paper from Armitage: Only one copy remains in Section 9. Just to remind us of Dunwich.</li></ul><p>Be assured, the spring will flow blood and Khofith will awake.</p><div class="signature">iä iä Khofith Nyantin!</div>'
		),
		new Mail(
			7,
			'sent',
			'evil_executive_officer@pharmevil.com',
			'section9boss@pharmevil.com',
			'11/18/2021, 09:16 CET',
			'The Harvest',
			'<p>How are the arrangements for the Harvest coming?</p><p>The background noise related to the vaccine is growing in the unofficial circles in the internet, even reaching the TV.</p><p>Besides, I hope the name of khofith will not be re-discovered by any scholar from any source uncontrolled by your section. The wait was long since the Dunwich fiasco in 1928, and we cannot afford a new Armitage, damned be his soul.</p>'
		)
	];

	constructor() {}

	getInbox(): Mail[] {
		return this.allMails.filter(x => x.where == 'inbox').sort((a, b) => a.date > b.date ? -1 : 1);
	}

	getSent(): Mail[] {
		return this.allMails.filter(x => x.where == 'sent').sort((a, b) => a.date > b.date ? -1 : 1);
	}

	getMail(id: number): Mail {
		const ind = this.allMails.findIndex(x => x.id === id);
		if (ind !== -1) {
			return this.allMails[ind];
		}
		return new Mail();
	}
}
