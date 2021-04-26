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
export default function footer(){
    return(<>
    <footer id="footer">
				<div className="container">
					<h3>JANJ</h3>
					<p>Finance for you - Aprenge a invertir sin poner en riesgo tu capital y poder obtener un gran margen de ganancia</p>
					<div className="social-links">
						<a href="https://www.facebook.com/profile.php?id=100066703532321" className="facebook"><i className="bx bxl-facebook" /></a>
						<a href="https://www.instagram.com/janj.finance/" className="instagram"><i className="bx bxl-instagram" /></a>
					</div>
					<div className="copyright">
						© Copyright <strong><span>JANJ</span></strong>. All Rights Reserved
					</div>
					<div className="credits">
						{/* All the links in the footer should remain intact. */}
						{/* You can delete the links only if you purchased the pro version. */}
						{/* Licensing information: https://bootstrapmade.com/license/ */}
						{/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/ */}
						Designed by <a href="https://github.com/JorgeOrobio/">Jorge Orobio Auz</a>
					</div>
				</div>
			</footer>{/* End Footer */}
			
    </>)
}