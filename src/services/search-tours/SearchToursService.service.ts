import { axiosClassic } from '@/api/interceptors'
import { PropsSearchTours } from './SearchToursService.interface'

export const SearchToursService = {
	async getSearchTours({
		townFrom,
		countryCode,
		adult,
		child = 0,
		childs_age,
		price_range_min = 10,
		price_range_max = 1000,
		meal_types = ['AL', 'BB'],
		nights_max,
		nights_min,
		rating,
		sort,
		data
	}: PropsSearchTours) {
		const response = await axiosClassic.get('/search-tours', {
			params: {
				townFrom,
				countryCode,
				adult,
				child,
				childs_age,
				price_range_min,
				price_range_max,
				// meal_types,
        nights_max,
        nights_min,
        rating,
        sort,
				data
			}
		})
		return response
	}
}