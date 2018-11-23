'use strict';

const Logger = require('../lib/logger.js');

const logger = new Logger();

//logger.on( 'log', log => console.log, )

logger.attachLoggerStream( Logger.level.notice, ( log ) => { console.log( log.format() ); } );
logger.attachLoggerStream( Logger.level.devel, { stream: process.stdout, colors: true });


logger.emergency({ tags: ['test', 'test2'] }, 'test');
logger.alert({ tags: ['test', 'test2'] }, 'test');
logger.notice({ tags: ['test', 'test2'] }, 'test');
logger.notice({ tags: ['test', 'test2'] }, 'test');
logger.warning({ tags: ['test', 'test2'] }, 'test');
logger.notice({ tags: ['test', 'test2'] }, 'test');
logger.notice({ tags: ['test', 'test2'] }, 'test');
logger.critical('Pana', 'beka', { error: 'dasda' });
logger.debug({ tags: ['test', 'test2'] }, 'test');
logger.devel('Pana', 'beka', { error: 'dasda' });

logger.info({ tags: ['test', 'test2'] }, 'test' );
