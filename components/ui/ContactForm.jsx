'use client';

import { useState } from 'react';
import { subjectData } from '@/data/FormSubjectData';

import Label from '@/components/forms/Label';
import Input from '@/components/forms/Input';
import TextArea from '@/components/forms/TextArea';

import PrimaryBtn from '@/components/buttons/PrimaryBtn';

export default function ContactForm() {
	const { value, label } = subjectData;

	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);

	const [showMessage, setShowMessage] = useState(false);
	const [isMessageFading, setIsMessageFading] = useState(false);

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
		subject: '',
	});

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			setStatus('pending');
			setError(null);
			const myForm = event.target;
			const formData = new FormData(myForm);
			const res = await fetch('/__forms.html', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams(formData).toString(),
			});
			if (res.status === 200) {
				setStatus('ok');

				// Trigger entrance animation
				setTimeout(() => {
					setShowMessage(true);
				}, 50);

				// Reset the native form
				event.target.reset();

				// Clear the React state
				setFormData({
					first_name: '',
					last_name: '',
					email: '',
					message: '',
					subject: '',
				});

				// Hide success message after 5 seconds with fade out
				setTimeout(() => {
					setIsMessageFading(true);
					// Actually hide after animation completes
					setTimeout(() => {
						setStatus('idle');

						setShowMessage(false);
						setIsMessageFading(false);
					}, 500); // 500ms for slide animation
}, 4500); // Start fade at 4.5s so total is 5s
			} else {
				setStatus('error');
				setError(`${res.status} ${res.statusText}`);

				setIsMessageFading(false);

				// Trigger entrance animation
				setTimeout(() => {
					setShowMessage(true);
				}, 50);
			}
		} catch (e) {
			setStatus('error');
			setError(`${e}`);

			setIsMessageFading(false);

				// Trigger entrance animation
				setTimeout(() => {
					setShowMessage(true);
				}, 50);
		}
	};

	return (
		<div className='contact-form'>
			<form name='main-contact-form' onSubmit={handleFormSubmit}>
				<div className='flex flex-col gap-4 mb-4 md:flex-row'>
					<input
						type='hidden'
						name='form-name'
						value='main-contact-form'
					/>

					<div className='flex flex-col flex-1 gap-2'>
						<Label label='First Name:' />
						<Input
							name='first_name'
							placeholder='e.g. John'
							value={formData.first_name}
							onChange={(e) =>
								setFormData({
									...formData,
									first_name: e.target.value,
								})
							}
							required
						/>
					</div>

					<div className='flex flex-col flex-1 gap-2'>
						<Label label='Last Name:' />
						<Input
							name='last_name'
							placeholder='e.g. Doe'
							value={formData.last_name}
							onChange={(e) =>
								setFormData({
									...formData,
									last_name: e.target.value,
								})
							}
							required
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1 gap-2 mb-4'>
					<Label label='Your Email:' />
					<Input
						type='email'
						name='email'
						placeholder='e.g. john.doe@example.com'
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
						required
/>
				</div>

				<div className='flex flex-col flex-1 gap-2 mb-4'>
					<Label label='The Subject of Your Message:' />
					<select
						name='subject'
						className='border border-gray-600 rounded-lg focus:border-[#232BB1] focus:outline-hidden focus:ring-none focus:ring-offset-0 p-2 w-full'
						value={formData.subject}
						onChange={(e) =>
							setFormData({
								...formData,
								subject: e.target.value,
							})
						}
						required
					>
						<option
							value=''
							className='italic text-gray-600 font-inter'
							disabled
						>
							Please choose one
						</option>
						{subjectData.map(({ value, label }) => (
							<option
								value={value}
								key={value}
								className='text-gray-600 font-inter'
							>
								{label}
							</option>
						))}
					</select>
				</div>

				<div className='flex flex-col flex-1 gap-2 mb-4'>
					<Label label='Message:' />
					<small className='font-semibold text-gray-500'>
						Please be as detailed as possible
					</small>
					<TextArea
						name='message'
						required
						placeholder='e.g. Hello, I need a quote'
						value={formData.message}
						onChange={(e) =>
							setFormData({
								...formData,
								message: e.target.value,
							})
						}
					></TextArea>
				</div>
				{/* Success Message */}
{status === 'ok' && (
					<div className={`overflow-hidden transition-all duration-500 ease-in-out ${
						isMessageFading
							? 'max-h-0 opacity-0 mb-0'
							: showMessage
								? 'max-h-32 opacity-100 mb-4'
								: 'max-h-0 opacity-0 mb-0'
					}`}>
						<div className='p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
							<div className='flex items-center'>
								<svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
								</svg>
								<span className='font-medium'>Success! Thank you so much, your message has been sent successfully.</span>
							</div>
							<span className='font-medium'>We will get back to you shortly (typically within a few hours).</span>
						</div>
					</div>
)}
{/* Error Message */}
{status === 'error' && (
	<div className={`overflow-hidden transition-all duration-500 ease-in-out ${
		isMessageFading
			? 'max-h-0 opacity-0 mb-0'
			: showMessage
				? 'max-h-32 opacity-100 mb-4'
				: 'max-h-0 opacity-0 mb-0'
	}`}>
		<div className='p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
			<div className='flex items-center'>
				<svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
					<path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clipRule='evenodd' />
				</svg>
				<span className='font-medium'>There was an issue sending the form. Please try again.</span>
			</div>
		</div>
	</div>
)}

				<PrimaryBtn type='submit' text='Send Message'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='transition-transform size-6 group-hover:translate-x-2 transition-duration-200'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
						/>
					</svg>
				</PrimaryBtn>
			</form>
		</div>
	);
}
