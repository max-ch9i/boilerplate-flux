import {Dispatcher} from 'flux';
import type {Action} from './Actions';

const disp: Dispatcher<Action> = new Dispatcher();
export default disp;
export const dispatch = disp.dispatch.bind(disp);