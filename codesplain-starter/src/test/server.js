import { setupServer } from "msw/lib/node";
import { rest } from "msw";

export const createServer = ((handlerConfig) => {
    const handlers = handlerConfig.map((config) => {
        return rest[config.method || 'get'](config.path, (req, res, ctx) => {
            return res(ctx.json(config.res(req, res, ctx)));
        })
    })

    const server = setupServer(...handlers);

    beforeAll(() => {
        server.listen();
        console.log('A server is listening!');
    });
    afterEach(() => {
        server.resetHandlers();
    });
    afterAll(() => {
        server.close();
        console.log('A server is closed!');
    });
})