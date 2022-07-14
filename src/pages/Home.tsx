import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import './style.scss'
import logo from '../assets/img/logo.svg'
import {NF} from '../util'

const Home = () => {

	const [state, setStates] = React.useState({
		totalToken : 10000,
		totalSold : 3400,
		bonus : 30,
		price:1.5
	});

	const particlesInit1 = async (main)=>{
		await loadFull(main);
	}

	const styles = {
		root: {
		  fontFamily: "sans-serif",
		  textAlign: "center",
		  height: "100%",
		  background: "#222",
		  display: "flex",
		  justifyContent: "center",
		  alignItems: "center"
		}
	  };

	return (
		<>
		<div className="logo"><img src={logo} /><h3>LongLife Coin</h3></div>	
		 <Particles 
				id="tsparticles"
				init={particlesInit1}
				options={{
					background: {
					color: {
						value: "#10181f",
					},
					},
					fpsLimit: 250,
					interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "push",
						},
						onHover: {
							enable: false,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
						quantity: 3,
						},
						repulse: {
							distance: 300,
							duration: 0.4,
						},
					},
					},
					particles: {
					color: {
						value: "#d3d5e4",
					},
					links: {
						color: "transparent",
						distance: 90,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
						default: "bounce",
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
						enable: true,
						area: 1000,
						},
						value: 80,
					},
					opacity: {
						value: 0.3,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
					},
					detectRetina: true,
				}}
			/> 
			 <div className='form'>
				<div className="row">
					<div className="col-12">
						<h3 className='mt5 text-center'>Pre-Sale IS LIVE</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<h3 className='text-primary text-center p0 m0'>CURRENT BONUS : {state.bonus}%</h3>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<h5 className=' text-center'>Presale Price 1DEAM = {state.price}USDT</h5>
					</div>
				</div>
				<div className="row center mt1">
					<div className="col-lg-8 col-sm-11">
						<input type="number" className='w100 text-center' placeholder='0'/>
					</div>
				</div>
				<div className="row center">
					<div className="col-lg-8 col-sm-11">
						<button className='button-submit'>BUY TOKENS</button>
					</div>
				</div>
				<div className="row center">
					<div className="col-lg-8 col-sm-11">
						<div className="progress">
							<div className="pro" style={{width:`${NF(state.totalSold / state.totalToken * 100, 0)}%`}}>
							</div>
						</div>
					</div>
				</div>
				<div className="row center mt3">
					<div className="col-lg-7 col-sm-11">
						<div className="row">
							<div className="col-2 m0 p0">
								<div className="line white"></div>
								<p className='text-center'>START</p>
							</div>
							<div className="col-8 m0 p0">
								<div className="line blue"></div>
								<p className='text-center'>{state.totalSold	} Tokens Sold</p>
							</div>
							<div className="col-2 m0 p0">
								<div className="line red"></div>
								<p className="text-center">FINISH</p>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</>
	)
}

export default Home
