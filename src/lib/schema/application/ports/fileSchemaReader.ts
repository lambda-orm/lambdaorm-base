import { SchemaInfo } from '../../domain'

export interface IFileSchemaReader {
	read (source: string): Promise<SchemaInfo|null>
}
