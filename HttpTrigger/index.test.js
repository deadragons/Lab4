const functions= require('./index');
const context= require('../testing/Context');
const { expect } = require('@jest/globals');

test('Http trigger example', async () => {
    const request = {
        query: { name: 'schuc'}
    };

    await functions(context, request);
    expect(context.res.body).toContain('W');
    expect(context.res.body).toEqual('Welcome, schuc');
    expect(context.log.mock.calls.length).toBe(2);

});