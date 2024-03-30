import { expressions } from '3xpr'
import { h3lp } from 'h3lp'
import { SchemaFacadeBuilder, SchemaStateBuilder } from '../lib'
const yaml = require('js-yaml')

const lab = async () => {
	const array = [
		{
			name: 'Spain',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'SP', name: 'Spanish' }, { code: 'CAT', name: 'Catalan' }, { code: 'GAL', name: 'Galician' }, { code: 'BSQ', name: 'Basque' }],
			timezones: [
				{ name: 'Madrid', offset: 1, position: { lat: 40.4165, long: -3.70256 } },
				{ name: 'Ceuta', position: { lat: 35.8883, long: -5.3162 } },
				{ name: 'Canary', offset: 0, position: { lat: 28.1248, long: -15.43 } }
			],
			priority: 1,
			phoneCode: 34
		},
		{
			name: 'France',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'FR', name: 'French' }],
			timezones: [
				{ name: 'Paris', offset: 1, position: { lat: 48.8566, long: 2.3522 } },
				{ name: 'Reunion', offset: 4, position: { lat: -20.8823, long: 55.4504 } },
				{ name: 'Guadeloupe', offset: -4, position: { lat: 16.265, long: -61.551 } }
			],
			priority: 1,
			phoneCode: 33
		},
		{
			name: 'Germany',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'GER', name: 'German' }],
			timezones: [
				{ name: 'Berlin', offset: 1, position: { lat: 52.5200, long: 13.4050 } },
				{ name: 'Busingen', offset: 1, position: { lat: 47.6963, long: 8.6927 } }
			],
			priority: 1,
			phoneCode: 49
		},
		{
			name: 'Portugal',
			region: { name: 'Europe', code: 'EU' },
			languages: [{ code: 'PT', name: 'Portuguese' }],
			timezones: [
				{ name: 'Lisbon', offset: 0, position: { lat: 38.7223, long: -9.1393 } },
				{ name: 'Madeira', offset: 0, position: { lat: 32.7607, long: -16.9595 } },
				{ name: 'Azores', offset: -1, position: { lat: 37.7412, long: -25.6756 } }
			],
			priority: 1,
			phoneCode: 351
		},
		{
			name: 'United States',
			region: { name: 'North America', code: 'NA' },
			languages: [{ code: 'EN', name: 'English' }],
			timezones: [
				{ name: 'New York', offset: -5, position: { lat: 40.7128, long: -74.0060 } },
				{ name: 'Los Angeles', offset: -8, position: { lat: 34.0522, long: -118.2437 } },
				{ name: 'Chicago', offset: -6, position: { lat: 41.8781, long: -87.6298 } },
				{ name: 'Denver', offset: -7, position: { lat: 39.7392, long: -104.9903 } },
				{ name: 'Anchorage', offset: -9, position: { lat: 61.2181, long: -149.9003 } },
				{ name: 'Honolulu', offset: -10, position: { lat: 21.3069, long: -157.8583 } }
			],
			priority: 1,
			phoneCode: 1
		},
		{
			name: 'Canada',
			region: { name: 'North America', code: 'NA' },
			languages: [{ code: 'EN', name: 'English' }, { code: 'FR', name: 'French' }],
			timezones: [
				{ name: 'Toronto', offset: -5, position: { lat: 43.6532, long: -79.3832 } },
				{ name: 'Vancouver', offset: -8, position: { lat: 49.2827, long: -123.1207 } },
				{ name: 'Edmonton', offset: -7, position: { lat: 53.5461, long: -113.4938 } },
				{ name: 'Winnipeg', offset: -6, position: { lat: 49.8951, long: -97.1384 } },
				{ name: 'Yellowknife', offset: -7, position: { lat: 62.4540, long: -114.3718 } },
				{ name: 'Iqaluit', offset: -5, position: { lat: 63.7467, long: -68.5170 } }
			],
			priority: 1,
			phoneCode: 2
		},
		{
			name: 'Brasil',
			region: { name: 'South America', code: 'SA' },
			languages: [{ code: 'PT', name: 'Portuguese' }],
			timezones: [
				{ name: 'Sao Paulo', offset: -3, position: { lat: -23.5505, long: -46.6333 } },
				{ name: 'Rio de Janeiro', offset: -3, position: { lat: -22.9068, long: -43.1729 } },
				{ name: 'Manaus', offset: -4, position: { lat: -3.1190, long: -60.0217 } },
				{ name: 'Porto Alegre', offset: -3, position: { lat: -30.0346, long: -51.2177 } },
				{ name: 'Fortaleza', offset: -3, position: { lat: -3.7319, long: -38.5267 } },
				{ name: 'Belem', offset: -3, position: { lat: -1.4558, long: -48.4902 } }
			],
			priority: 1,
			phoneCode: 55
		},
		{
			name: 'Argentina',
			region: { name: 'South America', code: 'SA' },
			languages: [{ code: 'SP', name: 'Spanish' }],
			timezones: [{ name: 'Buenos Aires', offset: -3, position: { lat: -34.6037, long: -58.3816 } }],
			priority: 1,
			phoneCode: 54
		}
	]
	const schemaFacade = new SchemaFacadeBuilder(expressions, h3lp).build()
	const schemaState = new SchemaStateBuilder(schemaFacade, h3lp).build()
	const workspace = __dirname.replace('build/', 'src/')
	const schemaPath = workspace + '/schema.yaml'
	const schema = schemaFacade.create()
	await h3lp.fs.write(schemaPath, yaml.dump(schema))
	await schemaState.load(schemaPath)
	const schemaData = await schemaState.updateFromData(array, 'Country')
	await h3lp.fs.write(workspace + '/schemaData.json', JSON.stringify(schemaData, null, 2))
}

lab()
