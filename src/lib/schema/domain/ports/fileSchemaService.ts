import { Schema, SchemaInfo } from '../../domain'

export interface IFileSchemaService {
	read (source: string): Promise<SchemaInfo|null>
	write (schema:Schema, fullPath:string): Promise<void>
}
