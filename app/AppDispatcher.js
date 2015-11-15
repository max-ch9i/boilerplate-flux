import {Dispatcher} from 'flux';

const disp = new Dispatcher();
export default disp;
export const dispatch = disp.dispatch.bind(disp);