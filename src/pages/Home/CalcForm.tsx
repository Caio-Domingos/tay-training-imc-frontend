/* eslint-disable react/jsx-no-leaked-render */
/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/numeric-separators-style */
/* eslint-disable react/jsx-handler-names */
import { useMask } from '@react-input/mask';
import Button from 'components/forms/Button';
import IconButton from 'components/forms/IconButton';
import TextInput from 'components/forms/TextInput';
import { useFormik } from 'formik';
import type { ReactElement, Dispatch } from 'react';
import * as yup from 'yup';

export interface CalcFormComponentProps {
	setResult: Dispatch<any>;
	setData: Dispatch<any>;
	values: any;
}
export default function CalcFormComponent({
	setResult,
	setData,
	values,
}: CalcFormComponentProps): ReactElement {
	const calculatePercentageValue = (
		sex: 'h' | 'm',
		data: {
			peso: number;
			altura: number;
			cintura: number;
			pescoco: number;
			quadril: number;
		}
	): string => {
		const { altura, cintura, pescoco, quadril } = data;
		let percentualGordura = 0;

		const { log10 } = Math; // Definindo a função logaritmo na base 10

		// Calcula o percentual de gordura corporal
		percentualGordura =
			sex === 'h'
				? 495 /
						(1.29579 -
							0.35004 * log10(cintura + quadril - pescoco) +
							0.221 * log10(altura)) -
					450
				: 495 /
						(1.29579 -
							0.35004 * log10(cintura + quadril - pescoco) +
							0.221 * log10(altura)) -
					450;

		return `${percentualGordura.toFixed(2)}%`;
	};

	const initialValues = {
		peso: '',
		altura: '',
		cintura: '',
		pescoco: '',
		quadril: '',
	};
	const formik = useFormik({
		initialValues,
		validationSchema: yup.object({
			peso: yup.string().required('O peso é obrigatório'),
			altura: yup.string().required('A altura é obrigatória'),
			cintura: yup.string().required('A cintura é obrigatória'),
			pescoco: yup.string().required('O pescoço é obrigatório'),
			quadril: yup.string().required('O quadril é obrigatório'),
		}),
		onSubmit: (formData: any) => {
			const data = {
				peso: Number.parseFloat(formData.peso.replace(',', '.')),
				altura: Number.parseFloat(formData.altura) * 100,
				cintura: Number.parseFloat(formData.cintura),
				pescoco: Number.parseFloat(formData.pescoco),
				quadril: Number.parseFloat(formData.quadril),
			};
			console.log('Data:', data);

			const resultH = calculatePercentageValue('h', data);
			const resultM = calculatePercentageValue('m', data);

			console.log('Percentual de gordura corporal (Homens):', resultH);
			console.log('Percentual de gordura corporal (Mulheres):', resultM);

			setData(data);
			setResult(resultM);
			formik.resetForm();
		},
	});

	// Máscara para peso em 'kg'
	const pesoRef = useMask({ mask: '___,_', replacement: { _: /[\d,]/ } });

	// Máscara para altura em 'cm'
	const alturaRef = useMask({ mask: '_.__', replacement: { _: /\d/ } });

	// // Máscara para pescoço em 'cm'
	const pescocoRef = useMask({ mask: '___', replacement: { _: /\d/ } });

	// // Máscara para quadril em 'cm'
	const quadrilRef = useMask({ mask: '___', replacement: { _: /\d/ } });

	// // Máscara para cintura em 'cm'
	const cinturaRef = useMask({ mask: '___', replacement: { _: /\d/ } });

	const handleResetPreviousValues = (): void => {
		void formik.setValues({
			peso: `${values.peso}`,
			altura: `${values.altura / 100}`,
			cintura: `${values.cintura}`,
			pescoco: `${values.pescoco}`,
			quadril: `${values.quadril}`,
		});
	};

	return (
		<>
			{' '}
			<img src='/logo-tay.png' alt='Logo Tay' />
			<h2 className='text-xl md:text-2xl text-center dark:text-pink-500'>
				Calcule o seu Percentual de Gordura Corporal
			</h2>
			<div className='w-9/12 md:w-7/12 flex flex-col items-center justify-center pt-5'>
				{values && (
				<IconButton
					color='pink'
					label='Usar valores anteriores'
					onClick={handleResetPreviousValues}
					mode='outline'
				>
					<img
						className='h-3 w-3 dark:text-grey-100 mr-2'
						src='/icons/rotate-left-solid-white.svg'
						alt=''
					/>
				</IconButton>
                )}
				<form className='w-full'>
					<TextInput
						label='Peso'
						id='peso'
						type='text'
						value={formik.values.peso}
						prefix={<span>Kg</span>}
						reference={pesoRef}
						onChange={formik.handleChange('peso')}
						onBlur={formik.handleBlur('peso')}
					/>
					<TextInput
						label='Altura'
						id='altura'
						type='text'
						prefix={<span>Mts</span>}
						reference={alturaRef}
						value={formik.values.altura}
						onChange={formik.handleChange('altura')}
						onBlur={formik.handleBlur('altura')}
					/>
					<TextInput
						label='Cintura'
						id='cintura'
						type='text'
						prefix={<span>Cm</span>}
						reference={cinturaRef}
						value={formik.values.cintura}
						onChange={formik.handleChange('cintura')}
						onBlur={formik.handleBlur('cintura')}
					/>
					<TextInput
						label='Quadril'
						id='quadril'
						type='text'
						prefix={<span>Cm</span>}
						reference={quadrilRef}
						value={formik.values.quadril}
						onChange={formik.handleChange('quadril')}
						onBlur={formik.handleBlur('quadril')}
					/>
					<TextInput
						label='Pescoço'
						id='pescoco'
						type='text'
						prefix={<span>Cm</span>}
						reference={pescocoRef}
						value={formik.values.pescoco}
						onChange={formik.handleChange('pescoco')}
						onBlur={formik.handleBlur('pescoco')}
					/>

					<div className='w-full flex items-center justify-center mt-5'>
						<Button
							label='Calcular'
							onClick={formik.handleSubmit}
							disabled={!formik.isValid}
						/>
					</div>
				</form>
			</div>
		</>
	);
}
