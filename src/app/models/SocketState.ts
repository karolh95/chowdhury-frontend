export enum SocketState {
	ATTEMPTING, CONNECTED
}

export function isConnected(state: SocketState) {

	return state === SocketState.CONNECTED;
}