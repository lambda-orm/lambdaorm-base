import { expressions } from '3xpr'
import { h3lp } from 'h3lp'
import { SchemaFacadeBuilder } from '../lib'
const yaml = require('js-yaml')

const lab = async () => {
	const array = [
		{
			name: 'Spain',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'SP', name: 'Spanish' }, { code: 'CAT', name: 'Catalan' }, { code: 'GAL', name: 'Galician' }, { code: 'BSQ', name: 'Basque' }],
			timezones: [
				{ name: 'Madrid', offset: 1, pos: { lat: 40.4165, log: -3.70256 } },
				{ name: 'Ceuta', pos: { lat: 35.8883, log: -5.3162 } },
				{ name: 'Canary', offset: 0, pos: { lat: 28.1248, log: -15.43 } }
			],
			priority: 1,
			phoneCode: 34
		},
		{
			name: 'France',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'FR', name: 'French' }],
			timezones: [
				{ name: 'Paris', offset: 1, pos: { lat: 48.8566, log: 2.3522 } },
				{ name: 'Reunion', offset: 4, pos: { lat: -20.8823, log: 55.4504 } },
				{ name: 'Guadeloupe', offset: -4, pos: { lat: 16.265, log: -61.551 } }
			],
			priority: 1,
			phoneCode: 33
		},
		{
			name: 'Germany',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'GER', name: 'German' }],
			timezones: [
				{ name: 'Berlin', offset: 1, pos: { lat: 52.5200, log: 13.4050 } },
				{ name: 'Busingen', offset: 1, pos: { lat: 47.6963, log: 8.6927 } }
			],
			priority: 1,
			phoneCode: 49
		},
		{
			name: 'Portugal',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'PT', name: 'Portuguese' }],
			timezones: [
				{ name: 'Lisbon', offset: 0, pos: { lat: 38.7223, log: -9.1393 } },
				{ name: 'Madeira', offset: 0, pos: { lat: 32.7607, log: -16.9595 } },
				{ name: 'Azores', offset: -1, pos: { lat: 37.7412, log: -25.6756 } }
			],
			priority: 1,
			phoneCode: 351
		},
		{
			name: 'United States',
			region: { name: 'North America', code: 'NA' },
			languages: [{ code: 'EN', name: 'English' }],
			timezones: [
				{ name: 'New York', offset: -5, pos: { lat: 40.7128, log: -74.0060 } },
				{ name: 'Los Angeles', offset: -8, pos: { lat: 34.0522, log: -118.2437 } },
				{ name: 'Chicago', offset: -6, pos: { lat: 41.8781, log: -87.6298 } },
				{ name: 'Denver', offset: -7, pos: { lat: 39.7392, log: -104.9903 } },
				{ name: 'Anchorage', offset: -9, pos: { lat: 61.2181, log: -149.9003 } },
				{ name: 'Honolulu', offset: -10, pos: { lat: 21.3069, log: -157.8583 } }
			],
			priority: 1,
			phoneCode: 1
		},
		{
			name: 'Canada',
			region: { name: 'North America', code: 'NA' },
			languages: [{ code: 'EN', name: 'English' }, { code: 'FR', name: 'French' }],
			timezones: [
				{ name: 'Toronto', offset: -5, pos: { lat: 43.6532, log: -79.3832 } },
				{ name: 'Vancouver', offset: -8, pos: { lat: 49.2827, log: -123.1207 } },
				{ name: 'Edmonton', offset: -7, pos: { lat: 53.5461, log: -113.4938 } },
				{ name: 'Winnipeg', offset: -6, pos: { lat: 49.8951, log: -97.1384 } },
				{ name: 'Yellowknife', offset: -7, pos: { lat: 62.4540, log: -114.3718 } },
				{ name: 'Iqaluit', offset: -5, pos: { lat: 63.7467, log: -68.5170 } }
			],
			priority: 1,
			phoneCode: 2
		},
		{
			name: 'Brasil',
			region: { name: 'South America', code: 'SA' },
			languages: [{ code: 'PT', name: 'Portuguese' }],
			timezones: [
				{ name: 'Sao Paulo', offset: -3, pos: { lat: -23.5505, log: -46.6333 } },
				{ name: 'Rio de Janeiro', offset: -3, pos: { lat: -22.9068, log: -43.1729 } },
				{ name: 'Manaus', offset: -4, pos: { lat: -3.1190, log: -60.0217 } },
				{ name: 'Porto Alegre', offset: -3, pos: { lat: -30.0346, log: -51.2177 } },
				{ name: 'Fortaleza', offset: -3, pos: { lat: -3.7319, log: -38.5267 } },
				{ name: 'Belem', offset: -3, pos: { lat: -1.4558, log: -48.4902 } }
			],
			priority: 1,
			phoneCode: 55
		},
		{
			name: 'Argentina',
			region: { name: 'South America', code: 'SA' },
			languages: [{ code: 'SP', name: 'Spanish' }],
			timezones: [{ name: 'Buenos Aires', offset: -3, pos: { lat: -34.6037, log: -58.3816 } }],
			priority: 1,
			phoneCode: 54
		}
	]
	const workspace = __dirname.replace('build/', 'src/')
	const schemaFacade = new SchemaFacadeBuilder(expressions, h3lp).build()
	const schema = schemaFacade.create(array, 'Country')
	await h3lp.fs.write(workspace + '/schema.yaml', yaml.dump(schema))
}

lab()
