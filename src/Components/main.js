import React from 'react'
import './../assets/css/style.css'
import './../assets/img/favicon.png'
import './../assets/img/apple-touch-icon.png'
import './../assets/vendor/bootstrap/css/bootstrap.min.css'
import './../assets/vendor/icofont/icofont.min.css'
import './../assets/vendor/boxicons/css/boxicons.min.css'
import './../assets/vendor/remixicon/remixicon.css'
import './../assets/vendor/venobox/venobox.css'
import './../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './../assets/img/favicon.png'
import feature from './../assets/img/features.jpg'
const axios = require('axios')

export default class main extends React.Component{
	constructor(props){
		super(props);
		this.state={  
		  email:"",
		  correo:"",
		  nombre:"",
		  asunto:"",
		  mensaje:"",
		}
	  }
	onChange=(e)=>{
		console.log(e.target.value)
		this.setState({
			email:e.target.value
		})
	}
	cta=()=>{
		console.log(this.state)
		var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/correos'
		var json = {
			correo:this.state.email
		}
		var data = JSON.stringify(json)
		var config = {
			method: 'post',
			url: url,
			headers: { 
			'Content-Type': 'application/json'
			},
			data:data
		};
		axios(config)
		.then(response => {
			console.log(response)
		})    		
	}
	onChangeContact=(e)=>{
		console.log(e.target.value)
		this.setState({
			[e.target.name]:e.target.value
		})

	}
	contact=()=>{
		console.log(this.state)
		var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/contactos'
		var json = {
			nombre:this.state.nombre,
			correo:this.state.correo,
			asunto:this.state.asunto,
			mensaje:this.state.mensaje,
		}
		var data = JSON.stringify(json)
		var config = {
			method: 'post',
			url: url,
			headers: { 
			'Content-Type': 'application/json'
			},
			data:data
		};
		axios(config)
		.then(response => {
			console.log(response)
		})    		
	}
	render(){	
		return(<>
		<main id="main">
					{/* ======= Features Section ======= */}
					<section id="features" className="features">
						<div className="container">
							<div className="section-title">
								<h2>Servicios</h2>
								<p>Ofrecemos herramientas basadas en inteligencia artificial que te ayudan a entender el mercado y su comportamiento de forma dinamica.</p>
							</div>
							<div className="row">
								<div className="col-lg-6 order-2 order-lg-1">
									<div className="icon-box mt-5 mt-lg-0">
										<i className="bx bx-shield" />
										<h4>Simulaci??n</h4>
										<p>Tienes a tu disposici??n un <strong> Simulador de Inversiones </strong> que te permite interactuar con los precios hist??ricos de la bolsa acorde al <strong> S&amp;P500 </strong></p>
									</div>
									<div className="icon-box mt-5">
										<i className="bx bx-cube-alt" />
										<h4>Predicci??n</h4>
										<p>Con <strong> Redes Neuronales </strong> y <strong> Modelos Predictivos </strong> estamos desarrollando una herramienta que permita predecir el valor futuro de ciertas divisas y acciones en un per??odo de hasta 5 minutos.</p>
									</div>
									<div className="icon-box mt-5">              
										<i className="bx bx-receipt" />
										<h4>Seguimiento</h4>
										<p>Puedes estar al tanto de los cambios dr??sticos que ocurran en el valor de una divisa o acci??n acompa??ado de una <strong>Explicaci??n </strong> acerca del significado de ese cambio y si es <strong>Favorable </strong>&gt; una inversi??n en ese momento o no.</p>
									</div>
									<div className="icon-box mt-5">
										<i className="bx bx-images" />
										<h4>Educaci??n</h4>
										<p>Puedes recibir o <strong>Consultar Informaci??n </strong> referente al mercado de divisas, para corroborar predicciones, planificar tus inversiones y desarrollar la habilidad de <strong>Identificar el Riesgo y las Oportunidades </strong> de una inversi??n.</p>
									</div>
								</div>
								<div className="image col-lg-6 order-1 order-lg-2">
									<img  width="150%"src={feature}/>
								</div>
							</div>
						</div>
					</section>{/* End Features Section */}
					{/* ======= Cta Section ======= */}
					<section id="cta" className="cta">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 text-center text-lg-left">
									<h3>Mantente informado</h3>
									<p> Recibe actualizaciones constantes de nuestros servicios, ofertas, o temas de inter??s</p>
									<p>Escribenos y obten una plaza para una demo gratuita 
									<a href="mailto:janjweb1@gmail.com?subject=Demo%20Gratuita&body=Con%20este%20correo%20puedo%20obtener%20mi%20demo%20gratuita"> aqui</a></p>
								</div>
								<div className="col-lg-3 cta-btn-container text-center">
									<input name="correo" onChange={(event)=> this.onChange(event)} className="form-control align-middle" placeholder="Correo Electr??nico" />
								</div>
								<div className="col-lg-2 cta-btn-container text-center">
									<a type="button" onClick={this.cta} className="cta-btn align-middle">Enviar</a>
								</div>
							</div>
						</div>
					</section>{/* End Cta Section */}
					{/* ======= Pricing Section ======= */}
					<section id="pricing" className="pricing">
						<div className="container">
							<div className="section-title">
								<h2>Precios</h2>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="box">
										<h3>Gratis</h3>
										<h4><sup>$</sup>0<span> / mes</span></h4>
										<ul>
											<li>Seguimiento</li>
											<li>Recibir Notificaciones de divisas</li>
											<li>Educaci??n b??sica</li>
											<li className="na">Educaci??n especializada</li>
											<li className="na">Simulaci??n</li>
											<li className="na">Predicci??n</li>
											<li className="na"> Asesor??as personalizada</li>
										</ul>
										<div className="btn-wrap">
											<a href="#" className="btn-buy">Comprar ahora</a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mt-4 mt-md-0">
									<div className="box recommended">
										<span className="recommended-badge">Recomendado</span>
										<h3>Premium</h3>
										<h4><sup>$</sup>5<span> / mes</span></h4>
										<ul>
											<li>Seguimiento</li>
											<li>Recibir Notificaciones de divisas</li>
											<li>Educaci??n b??sica</li>
											<li>Educaci??n especializada</li>
											<li>Simulaci??n</li>
											<li>Predicci??n</li>
											<li className="na"> Asesor??as personalizada</li>
										</ul>
										<div className="btn-wrap">
											<a href="#" className="btn-buy">Comprar ahora</a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
									<div className="box">
										<h3>Diamante</h3>
										<h4><sup>$</sup>15<span> / mes</span></h4>
										<ul>
											<li>Seguimiento</li>
											<li>Recibir Notificaciones de divisas</li>
											<li>Educaci??n b??sica</li>
											<li>Educaci??n especializada</li>
											<li>Simulaci??n</li>
											<li>Predicci??n</li>
											<li> Asesor??as personalizada</li>
										</ul>
										<div className="btn-wrap">
											<a href="#" className="btn-buy">Comprar ahora</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>{/* End Pricing Section */}
					{/* ======= Counts Section ======= */}
					<section id="counts" className="counts">
						<div className="container">
							<div className="text-center title">
								<h3>??Qu?? hemos hecho hasta ahora?</h3>
								<p>Quieres saber cuales han sido los progresos ha d??a de hoy</p>
							</div>
							<div className="row counters">
								<div className="col-lg-3 col-6 text-center">
									<span data-toggle="counter-up">50</span>
									<p>Validaciones</p>
								</div>
								<div className="col-lg-3 col-6 text-center">
									<span data-toggle="counter-up">30</span>
									<p>Clientes Potenciales</p>
								</div>
								<div className="col-lg-3 col-6 text-center">
									<span data-toggle="counter-up">5</span>
									<p>Aliados potenciales</p>
								</div>
								<div className="col-lg-3 col-6 text-center">
									<span data-toggle="counter-up">3</span>
									<p>Socios establecidos</p>
								</div>
							</div>
						</div>
					</section>{/* End Counts Section */}
					{/* ======= Contact Section ======= */}
					<section id="contact" className="contact">
						<div className="container">
							<div className="section-title">
								<h2>Contacto</h2>
								<p>Aqu?? podr??s encontrar informaci??n acerca de nuestro emprendimiento y c??mo </p>
							</div>
						</div>
						<div className="container">
							<div className="row mt-5">
								<div className="col-lg-4">
									<div className="info">
										<div className="address">
											<i className="ri-map-pin-line" />
											<h4>Ubicaci??n:</h4>
											<p>Calle 17C # 24-42 Pereira Risaralda</p>
										</div>
										<div className="email">
											<i className="ri-mail-line" />
											<h4>Correo Electr??nico:</h4>
											<p>janjweb1@gmail.com</p>
										</div>
										<div className="phone">
											<i className="ri-phone-line" />
											<h4>N??mero de contacto:</h4>
											<p>+57 323 462 9134</p>
										</div>
									</div>
								</div>
								<div className="col-lg-8 mt-5 mt-lg-0">
									<div className="form-row">
										<div className="col-md-6 form-group">
											<input type="text" name="nombre" onChange={this.onChangeContact} className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
											<div className="validate" />
										</div>
										<div className="col-md-6 form-group">
											<input type="email" className="form-control" onChange={this.onChangeContact} name="correo" id="email" placeholder="Correo Electr??nico" data-rule="email" data-msg="Please enter a valid email" />
											<div className="validate" />
										</div>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" onChange={this.onChangeContact} name="asunto" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
										<div className="validate" />
									</div>
									<div className="form-group">
										<textarea className="form-control" name="mensaje" onChange={this.onChangeContact} rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Mensaje" defaultValue={""} />
									</div>
									<div className="text-center"><button className="btn btn-primary"type="button" onClick={this.contact}>Enviar mensaje</button></div>
								</div>
							</div>
						</div>
					</section>{/* End Contact Section */}
				</main>{/* End #main */}
				
		</>)
	}
}