import './assets/css/style.css'
import logo from './logo.svg';
import Header from './Components/header'
import Main from './Components/main'
import Footer from './Components/footer'
import './assets/img/favicon.png'
import './assets/img/apple-touch-icon.png'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/icofont/icofont.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/venobox/venobox.css'
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css'
import './assets/img/favicon.png'
function App() {
	// $document.ready(()=>{$('.venobox').venobox() })
	return(
		<div>
			<link rel="stylesheet" href="/venobox/venobox.min.css" />
			<Header/>
			{/* ======= Hero Section ======= */}
			<section id="hero" className="d-flex flex-column justify-content-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8">
							<h1>JANJ Finance For You <br /> Aprende a invertir</h1>
							<h2>Existen formas de invertir con bajo riesgo y el mismo margen de ganancia ¿Quieres conocerlas?</h2>
							<a href="https://www.youtube.com/watch?v=x8nZzuUxjfs" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
						</div>
					</div>
				</div>
			</section>
			{/* End Hero */}
			<Main/>
			{/* ======= Footer ======= */}
			<Footer/>
			{/* <div id="preloader"/> */}
			<a href="#" className="back-to-top"><i className="ri-arrow-up-line" /></a>
			<script src="jquery.js"></script>
			<script src="venobox/venobox.min.js"></script>
		</div>
	);
}

export default App;
