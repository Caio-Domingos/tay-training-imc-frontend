/* eslint-disable jsx-a11y/label-has-associated-control */
import type React from 'react';

export interface MaskTextInputProperties {
	value: any;
	id: string;
	label?: string;
	type?: string;
	ref?: any;
	onChange: (value: any) => void;
	// eslint-disable-next-line unicorn/prevent-abbreviations
	onBlur: (e: any) => void;
}

export default function MaskTextInput({
	label,
	value,
	id,
	type,
	ref,
	onChange,
	onBlur,
}: MaskTextInputProperties): React.ReactElement {
	return (
		<div className='w-full my-2'>
			{label ? (
				<label
					htmlFor={id}
					className='block text-sm text-gray-800 dark:text-gray-200'
				>
					{label}
				</label>
			) : undefined}

			<input
				id={id}
				ref={ref}
				type={type}
				className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
				value={value}
				onChange={(event) => onChange(event.target.value)}
				onBlur={(_) => onBlur(_)}
			/>
		</div>
	);
}

MaskTextInput.defaultProps = {
	label: '',
	ref: undefined,
	type: 'text',
};
