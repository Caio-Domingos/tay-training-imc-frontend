/* eslint-disable unicorn/no-null */
/* eslint-disable react/jsx-no-leaked-render */
/* eslint-disable unicorn/numeric-separators-style */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable react/jsx-handler-names */
import { useState, type ReactElement } from 'react';
import CalcFormComponent from './CalcForm';
import ResultHomeComponent from './Result';
import Button from 'components/forms/Button';

export default function HomeScreen(): ReactElement {
	const [result, setResult] = useState<any>(null);
	const [data, setData] = useState<any>(null);

	return (
		<main className='container mx-auto flex justify-center items-center min-h-screen flex-col'>
			{result ? (
				<ResultHomeComponent result={result} data={data} />
			) : (
				<CalcFormComponent setResult={setResult} setData={setData} values={data}/>
			)}
			{result && (
				<div className='flex w-full items-center justify-center mt-5'>
					<Button label='Voltar' onClick={() => {setResult(null)}} />
				</div>
			)}
		</main>
	);
}
