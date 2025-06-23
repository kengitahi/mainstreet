'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData){
	const first_name = formData.get('first_name');
	const last_name = formData.get('last_name');
	const email = formData.get('email');
	const subject = formData.get('subject');
	const message = formData.get('message');

	const transporter = nodemailer.createTransport(
	{
		host:process.env.NAMECHEAP_HOST,
        port:parseInt(process.env.NAMECHEAP_PORT, 10),
        secure: true, // For port 465, this should be true
        auth:{
            user:process.env.NAMECHEAP_USERNAME,
            pass:process.env.NAMECHEAP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
	});

	try {
		await transporter.sendMail({
			from:process.env.NAMECHEAP_USERNAME,
			to:'dev@kengitahi.com',
			subject:`New Message on Mainstreet from ${first_name}`,
			text: message,
			replyTo:email,
		});
		return {success:true, message:'Message sent successfuly'};
	} catch (error){
		console.error('Sending error:', error);
		return {success:false, message:'There was a problem sending the message'};
	}
}