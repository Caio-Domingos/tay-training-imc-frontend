/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, type ReactElement } from 'react';

function TableParameterComponent(): ReactElement {
	return (
		<div className='relative overflow-x-auto shadow-md sm:rounded-lg max-w-full rounded-lg'>
			<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead className='text-xs text-gray-700 uppercase bg-pink-500 dark:bg-pink-600 dark:text-gray-100'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Classificação
						</th>
						<th scope='col' className='px-6 py-3'>
							Mulheres
						</th>
						<th scope='col' className='px-6 py-3'>
							Homens
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
						<th
							scope='row'
							className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							Atleta
						</th>
						<td className='px-6 py-4'>10-13 %</td>
						<td className='px-6 py-4'>2-5 %</td>
					</tr>
					<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
						<th
							scope='row'
							className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							Bom
						</th>
						<td className='px-6 py-4'>14-20 %</td>
						<td className='px-6 py-4'>6-13 %</td>
					</tr>
					<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
						<th
							scope='row'
							className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							Normal
						</th>
						<td className='px-6 py-4'>21-24 %</td>
						<td className='px-6 py-4'>14-17 %</td>
					</tr>
					<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
						<th
							scope='row'
							className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							Elevado
						</th>
						<td className='px-6 py-4'>25-31 %</td>
						<td className='px-6 py-4'>18-25 %</td>
					</tr>
					<tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
						<th
							scope='row'
							className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
						>
							Muito elevado
						</th>
						<td className='px-6 py-4'>31+ %</td>
						<td className='px-6 py-4'>25+ %</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export interface ResultHomeComponentProperties {
	result: any;
	data: any;
}
export default function ResultHomeComponent({
	result,
	data,
}: ResultHomeComponentProperties): ReactElement {
	useEffect(() => {
		console.log('result', result);
		console.log('data', data);
	}, [result, data]);

	const transformPercentStringInNumber = (percentString: string): number =>
		Number.parseFloat(percentString.replace('%', '')) / 100;

	return (
		<div className='flex flex-col gap-5 md:w-10/12'>
			<div className='flex items-center justify-center gap-2 flex-col dark:text-grey-100 px-6 py-5 rounded-lg w-full'>
                <img src="/logo-tay.png" alt="Logo Tay" />
				<p className='text-lg md:text-xl'>
					Percentual de gordura corporal: <span className='dark:text-pink-600 font-bold'>{result}</span>
				</p>
				{/* <p className='text-lg md:text-xl'>
					Massa gorda:{' '}
					<span>
						{(data.peso * transformPercentStringInNumber(result)).toFixed(2)}
					</span>
					{' Kg'}
				</p>
				<p className='text-lg md:text-xl'>
					Massa magra:{' '}
					<span>
						{(
							data.peso -
							data.peso * transformPercentStringInNumber(result)
						).toFixed(2)}
					</span>
					{' Kg'}
				</p> */}
			</div>
			<div className='flex gap-10 items-stretch'>
				<div className='flex-1 h-20 hidden md:block'>{''}</div>
				<div className='relative flex-[2_2_0%] h-24 dark:bg-pink-600 dark:text-grey-100 rounded-lg p-2'>
					<p>Massa gorda:</p>
					<span className='absolute bottom-2 right-3'>
						{(data.peso * transformPercentStringInNumber(result)).toFixed(2)}
						{' Kg'}
					</span>
				</div>
				<div className='relative flex-[2_2_0%] h-24 dark:bg-pink-600 dark:text-grey-100 rounded-lg p-2'>
					<p>Massa magra:</p>
					<span className='absolute bottom-2 right-3'>
						{(
							data.peso -
							data.peso * transformPercentStringInNumber(result)
						).toFixed(2)}

						{' Kg'}
					</span>
				</div>
				<div className='flex-1 h-20 hidden md:block'>{''}</div>
			</div>
			<TableParameterComponent />
			{/* <span>Dados: {JSON.stringify(data)}</span> */}
		</div>
	);
}
