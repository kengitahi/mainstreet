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

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		message: '',
		subject: '',
	});

	const handleFormSubmit = async (event) => {
		console.log(formData);
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
			} else {
				setStatus('error');
				setError(`${res.status} ${res.statusText}`);
			}
		} catch (e) {
			setStatus('error');
			setError(`${e}`);
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
						placeholder='e.g. john@example.com'
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
