export enum SentenceCategory {
	undefined = 'undefined',
	select = 'select',
	insert = 'insert',
	upsert = 'upsert',
	update = 'update',
	delete = 'delete',
	truncate = 'truncate',
	create = 'create',
	add = 'add',
	alter = 'alter',
	drop = 'drop'
}

export enum SentenceType {
	dql = 'dql', // SELECT statements
	dml = 'dml', //  INSERT, UPDATE, DELETE statements
	ddl = 'ddl', // CREATE, ALTER, DROP statements
	metadata = 'metadata' // Metadata statements
}

export enum SentenceAction {
	undefined = 'undefined',
	select = 'select',
	insert = 'insert',
	insertConditional = 'insertConditional',
	bulkInsert = 'bulkInsert',
	bulkDelete = 'bulkDelete',
	update = 'update',
	upsert = 'upsert',
	delete = 'delete',
	merge = 'merge',
	bulkMerge = 'bulkMerge',
	truncateEntity = 'truncateEntity',
	createEntity = 'createEntity',
	createSequence = 'createSequence',
	createFk = 'createFk',
	createIndex = 'createIndex',
	alterProperty = 'alterProperty',
	addProperty = 'addProperty',
	addPk = 'addPk',
	addUk = 'addUk',
	addFk = 'addFk',
	dropSequence = 'dropSequence',
	dropEntity = 'dropEntity',
	dropProperty = 'dropProperty',
	dropPk = 'dropPk',
	dropUk = 'dropUk',
	dropFk = 'dropFk',
	dropIndex = 'dropIndex',
	objects = 'objects',
	tables = 'tables',
	views = 'views',
	sequences = 'sequences',
	indexes = 'indexes',
	primaryKeys = 'primaryKeys',
	uniqueKeys = 'uniqueKeys',
	foreignKeys = 'foreignKeys',
	partitions = 'partitions'
}

export interface SentenceInfo {
	entity: string
	action: SentenceAction
	category: SentenceCategory
	type : SentenceType
}
