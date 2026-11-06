import {test} from 'node:test';import assert from 'node:assert/strict';import * as c from '../dist/core.js';
test('rejects reversed/outside markers and formats fractions',()=>{assert.deepEqual(c.loopBounds(1,2,3),{a:1,b:2});assert.throws(()=>c.loopBounds(2,1,3));assert.throws(()=>c.loopBounds(0,5,3));assert.equal(c.formatTime(61.5),'1:01.50')});
