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

export default function navbar(){
    return(<>
    {/* ======= Header ======= */}
			<header id="header" className="fixed-top ">
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-xl-9 d-flex align-items-center justify-content-between">
							<h1 className="logo"><a href="/">JANJ</a></h1>
							{/* Uncomment below if you prefer to use an image logo */}
							{/* <a href="/" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
							<nav className="nav-menu d-none d-lg-block">
								<ul>
									<li className="active"><a href="/">Inicio</a></li>
									<li><a href="#features">Servicios</a></li>
									<li><a href="#pricing">Precios</a></li>
									<li><a href="#contact">Contacto</a></li>
								</ul>
							</nav>{/* .nav-menu */}
						</div>
					</div>
				</div>
			</header>{/* End Header */}
    </>)
}