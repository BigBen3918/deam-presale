import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useStore from './useStore'
import Home from './pages/Home'
import Loading from './components/Loading'

import './assets/scss/presale.scss'


function App() {
	const {	loading, userid } = useStore()
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="*" component={Home}></Route>
			</Switch>
			<ToastContainer/>
			<Loading width={70} height={70} color={'var(--default-color-1)'} opacity={0.3} show={!!loading}/>
		</BrowserRouter>
	)
}

export default App
