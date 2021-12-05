import { useState, useEffect } from 'react';
import axios from 'axios';
//import { Guarda } from "./components/Guarda";
import { Lista } from '../conponents/Lista';
import './nuevo.css';

function PageProvNuevo() {
	// const distritos = [
	// 	{
	// 		title: 'Lima',
	// 		value: 'lim',
	// 	},
	// 	{
	// 		title: 'Ayacucho',
	// 		value: 'ayac',
	// 	},
	// 	{
	// 		title: 'Cuzco',
	// 		value: 'cus',
	// 	},
	// ];

	const [departamentos, setDepartamento] = useState([]);
	const [response, setResponse] = useState([]);
	const [provincias, setProvincia] = useState([]);
	const [form, setForm] = useState({
		codigo: '',
		nombre: '',
		ruc: '',
		departamento: '',
		provincia: '',
		distrito: '',
		direccion: '',
	});

	function saveProveedor(proveedor) {
		axios
			.post('http://localhost:4000/proveedor', proveedor)
			.then((response) => {
				alert('El proveedor se guardo correctamente');
			})
			.catch(() => {
				alert('Por favor intentalo nuevamente');
			});
	}

	function getDepartamento() {
		axios
			.get('http://localhost:4000/departamentos')
			.then((response) => {
				setResponse(response.data);
			})
			.catch((e) => {});
	}

	useEffect(() => {
		getDepartamento();
	}, []);

	useEffect(() => {
		setDepartamento(
			response.filter((dep) => {
				return dep.nombre === form.departamento;
			})
		);
		setProvincia(
			departamentos[0]
				? departamentos[0].provincias.filter(
						(prov) => prov.nombre === form.provincia
				  )
				: []
		);
	}, [form.departamento, form.provincia, form.distrito]);

	function handleSubmit(e) {
		e.preventDefault();
		saveProveedor(form);
		setForm({
			codigo: '',
			nombre: '',
			ruc: '',
			departamento: '',
			provincia: '',
			distrito: '',
			direccion: '',
		});
	}

	return (
		<div className='nuevo'>
			<h1>Nuevo Proveedor</h1>
			<hr />

			<div className='mb-4'>
				{/* <Guarda /> */}
				<Lista />
			</div>

			<form onSubmit={handleSubmit}>
				<div className='mb-3 col-6'>
					<label for='codigo' class='form-label'>
						Codigo
					</label>
					<input
						type='text'
						className='form-control'
						id='codigo'
						placeholder='Id'
						required
						value={form.codigo}
						onChange={(e) =>
							setForm((state) => ({ ...state, codigo: e.target.value }))
						}
					/>
				</div>
				<div class='mb-3 col-6'>
					<label for='nombreproveedor' class='form-label'>
						Nombre
					</label>
					<input
						type='text'
						className='form-control'
						id='nombreproveedor'
						placeholder='Nombre Proveedor'
						required
						value={form.nombre}
						onChange={(e) =>
							setForm((state) => ({ ...state, nombre: e.target.value }))
						}
					/>
				</div>
				<div class='mb-3 col-6'>
					<label for='ruc' class='form-label'>
						Ruc
					</label>
					<input
						type='text'
						className='form-control'
						id='ruc'
						placeholder='Ruc'
						required
						value={form.ruc}
						onChange={(e) =>
							setForm((state) => ({ ...state, ruc: e.target.value }))
						}
					/>
				</div>
				<div class='mb-3 col-6'>
					<label for='ubigeo' class='form-label'>
						Ubigeo
					</label>
					<div class='d-flex justify-content-between'>
						<select
							required
							className='form-select'
							aria-label='Default select example'
							value={form.departamento}
							onChange={(e) => {
								setForm((state) => {
									return {
										...state,
										departamento: e.target.value,
									};
								});
							}}
						>
							<option selected>Departamento</option>
							{response.map((departamento) => {
								return (
									<option key={departamento.id}>{departamento.nombre}</option>
								);
							})}
						</select>
						<select
							className='form-select'
							aria-label='Default select example'
							value={form.provincia}
							onChange={(e) => {
								setForm((state) => {
									return {
										...state,
										provincia: e.target.value,
									};
								});
							}}
						>
							<option selected>Provincia</option>
							{!!departamentos.length &&
								departamentos[0].provincias.map((provincia) => (
									<option key={provincia}>{provincia.nombre}</option>
								))}
							{/* {provincias.map((provincia) => (
                <option>{provincia.title}</option>
              ))} */}
						</select>
						<select
							className='form-select'
							aria-label='Default select example'
							value={form.distrito}
							onChange={(e) => {
								setForm((state) => {
									return {
										...state,
										distrito: e.target.value,
									};
								});
							}}
						>
							<option selected>Distrito</option>
							{provincias.length &&
								provincias[0].distritos.map((distrito) => (
									<option key={distrito}>{distrito}</option>
								))}
						</select>
					</div>
				</div>
				<div className='mb-3 col-6'>
					<label for='direccion' className='form-label'>
						Direccion
					</label>
					<textarea
						class='form-control'
						id='direccion'
						rows='2'
						value={form.direccion}
						onChange={(e) =>
							setForm((state) => ({ ...state, direccion: e.target.value }))
						}
					></textarea>
				</div>
				<div>
					<button className='btn btn-success'>GUARDAR</button>
				</div>
			</form>
		</div>
	);
}

export { PageProvNuevo };
