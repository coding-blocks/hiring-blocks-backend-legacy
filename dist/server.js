"use strict";
/**
 * Created by bhavyaagg on 02/09/2018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const api = require("./api");
const swaggerUi = require('swagger-ui-express');
const graphiql = require('express-graphiql-toolbox');
api.server.use('/docs', swaggerUi.serve, swaggerUi.setup(null, true, null, null, null, '/api/swagger.json', 'qBounty API Docs'));
api.server.use('/graphiql', graphiql({ endpoint: '/api/' }));
api.start();
//# sourceMappingURL=server.js.map