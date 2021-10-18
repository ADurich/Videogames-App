import React from "react";
import "./css/landing.css"
import {Link} from "react-router-dom";

export default function LandingPage(){ 
	return(
		<div>
			<header className="container">
				<div className="row">
					<div className="col-sm-12 my-4">
						<img src="https://www.pngkey.com/png/full/772-7728171_game-logo-purple-gaming-logo-transparent.png" className="logo"/>
					</div>
					<div className="col-sm-6">
						<img src="https://raw.githubusercontent.com/FaztWeb/bootstrap4-landing01/master/img/right-laptop.png" className="img-fluid"/>
					</div>
					<div className="col-sm-6">
						<Link to ="/home">
							<button className="btn btn-light rounded-0">Ingresar</button>
						</Link>
					</div>
				</div>
			</header>	

		</div>
		)
}