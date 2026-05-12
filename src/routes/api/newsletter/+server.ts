import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();
	const email = String(data.get('email') ?? '')
		.trim()
		.toLowerCase();

	if (!email) {
		return json({ ok: false, message: 'Please enter an email.' }, { status: 400 });
	}

	if (!EMAIL_PATTERN.test(email)) {
		return json({ ok: false, message: 'Please enter a valid email.' }, { status: 400 });
	}

	// TODO: send subscriber data to you via email (temporary catch)
	// await sendNewsletterSignupEmail({ email });
	//
	// TODO: subscribe user (DB / ESP / etc)
	// await subscribe(email);

	return json({ ok: true, message: "Thanks — you're on the list." });
};

