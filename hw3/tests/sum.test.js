// Jarren Calizo
const { ExpectationFailed } = require('http-errors');
const { TestScheduler } = require('jest');
const sum = require('../public/javascripts/sum.js');
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    }); 