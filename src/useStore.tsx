import { useSelector, useDispatch } from 'react-redux';
import Slice from './reducer'
import {tips } from './util'

const proxy = process.env.REACT_APP_PROXY || 'http://localhost'
const useStore = (): useStoreTypes => {
	const G = useSelector((state: WalletTypes) => state)
	const dispatch = useDispatch()
	const update = (payload: { [key: string]: any }) => dispatch(Slice.actions.update(payload))

	const call = async (url: string, params?: any): Promise<ServerResponse | null> => {
		try {
			const result = await fetch(proxy + url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: params ? JSON.stringify(params) : null });
			return await result.json();
		} catch (error) {
			tips("An error occurred while communicating with the service device.");
		}
		return null
	}
	return { ...G, update, call };
}

export default useStore