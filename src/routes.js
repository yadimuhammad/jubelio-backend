import { api } from './api';
export const routes = [
	{
		method: 'GET',
		path: '/',
		handler: function(request, h){
			return 'This is the homepage';
		}
	},
	{
		method: 'GET',
		path: '/apis',
		handler: function(request, h){
            // return api();
            return "cool!";
		}
	}
	]