import { SentenceAction } from './sentence'
import { Dialect } from './dialect'
export const DIALECT_DEFAULT = Dialect.MySQL

export enum RelationType {
	oneToMany = 'oneToMany',
	manyToOne = 'manyToOne',
	oneToOne = 'oneToOne'
}
export interface EnumValue {
	name: string
	value: any
}
export interface Enum {
	name: string
	extends?: string
	abstract?: boolean
	values: EnumValue[]
}
export interface Constraint {
	message: string
	condition: string
}
export interface Property {
	name: string
	type?: string
	length?: number
	required?: boolean
	primaryKey?: boolean
	autoIncrement?: boolean
	view?: boolean
	readExp?: string
	writeExp?: string
	default?: string
	readValue?: string
	writeValue?: string
	enum?: string
	key?: string
}
export interface Relation {
	name: string
	type: RelationType
	composite?: boolean
	from: string
	entity: string
	to: string
	weak?: boolean
	target?: string
}
export interface Dependent {
	entity: string,
	relation: Relation
}
export interface Index {
	name: string
	fields: string[]
}
export interface Entity {
	name: string
	properties?: Property[]
	extends?: string
	abstract?: boolean
	singular?: string
	view?: boolean
	primaryKey?: string[]
	uniqueKey?: string[]
	relations?: Relation[]
	required?: string[]
	indexes?: Index[]
	dependents?: Dependent[]
	constraints?: Constraint[]
	hadReadExps?: boolean
	hadWriteExps?: boolean
	hadReadValues?: boolean
	hadWriteValues?: boolean
	hadDefaults?: boolean
	hadViewReadExp?: boolean
	composite?: boolean
	intermediate?: boolean
}
export interface RelationInfo {
	previousRelation: string
	previousEntity: Entity,
	entity: Entity,
	relation: Relation
}
export interface PropertyMapping extends Property {
	mapping: string
	readMappingExp?: string
}
export interface EntityMapping extends Entity {
	mapping?: string
	sequence?: string
	properties?: PropertyMapping[]
	filter?: string
	hadKeys?: boolean
	hadReadMappingExp?: boolean
}
export interface FormatMapping extends Entity {
	dateTime?: string
	date?: string
	time?: string
}
export interface Mapping {
	extends?: string
	mapping?: string
	name: string
	entities?: EntityMapping[]
	format?: FormatMapping
}

export interface PropertyView {
	name: string
	readExp?: string
	exclude?: boolean
}
export interface EntityView {
	name: string
	exclude?: boolean
	properties: PropertyView[]
}
export interface View {
	name: string
	entities: EntityView[]
}
export interface Source {
	name: string
	dialect: Dialect
	mapping: string
	connection: any
}
export interface SourceRule {
	name: string
	condition?: string
}
export interface Stage {
	name: string
	sources: SourceRule[]
}
export interface ListenerConfig {
	name: string
	on: SentenceAction[]
	condition?: string
	before?:string
	after?:string
	error?:string
}
export interface TaskConfig {
	name:string
	condition?: string
	expression: string
}
export interface AppPathsConfig {
	src?: string
	data?: string
	domain?: string
}
export interface DomainSchema {
	version: string
	entities: Entity[]
	enums?: Enum[]
}

export interface ServerConfig {
	url: string
}

export interface InfrastructureSchema {
	paths?: AppPathsConfig
	mappings?: Mapping[]
	views?: View[]
	sources?: Source[]
	stages?: Stage[]
	server?: ServerConfig
}
export interface ApplicationSchema {
	start?:TaskConfig[]
	listeners?: ListenerConfig[]
	end?:TaskConfig[]
}
export interface Schema {
	version: string
	domain: DomainSchema
	infrastructure?:InfrastructureSchema
	application?: ApplicationSchema
}

export interface SchemaInfo {
	schema: Schema
	path?: string
}
export interface ModelConfig {
	mappings: Mapping[]
}
export interface MappingConfig {
	mapping: any
	pending: any[]
	inconsistency: any[]
}
export interface Behavior {
	alias?: string
	property: string
	expression: string
}
export interface SchemaEntityData
{
	entity:string
	rows:any[]
}
export interface SchemaData
{
	entities:SchemaEntityData[]
}
