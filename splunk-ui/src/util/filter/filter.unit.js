/* eslint-env mocha */

import { assert } from 'chai';
import filterUtil from './filter';

describe('Test suit for filter util', () => {
    describe('Test getSimilarityOfStrings', () => {
        it('should give the expected similarity value', () => {
            assert.equal(filterUtil.getSimilarityOfStrings('French', 'France'), 0.4);
            const stringA = 'Web Database Applications';
            const stringB = 'Web Database Applications with PHP & MySQL';
            assert.equal(filterUtil.getSimilarityOfStrings(stringA, stringB), 2 * (20 / 49));
        });
    });

    describe('Test getLongestContinuousCommonWords', () => {
        it('should return the right max continuous common word account', () => {
            let commonWords = ['hello', 'world', 'shanghai'];
            const targetWords = ['hello', 'world', 'strong', 'boy', 'cool', 'shanghai'];
            assert.equal(filterUtil.getLongestContinuousCommonWords(targetWords, commonWords), 2);
            commonWords = ['hello', 'strong', 'boy', 'cool'];
            assert.equal(filterUtil.getLongestContinuousCommonWords(targetWords, commonWords), 3);
            commonWords = ['hello', 'strong', 'boy', 'shanghai'];
            assert.equal(filterUtil.getLongestContinuousCommonWords(targetWords, commonWords), 2);
        });
    });

    describe('Test rank', () => {
        it('should return the expected rank', () => {
            const bookTitle = 'Web Database Applications with PHP & MySQL';
            const input = 'Web Database Applications';
            assert.equal(filterUtil.rank(input, bookTitle).value, 6 + (2 * (20 / 49)));
        });
        it('should have the higher ranking if word match', () => {
            const target = 'The band, Error, was formed as a bedroom electronic-based project in ' +
                'Glasgow 2004 by members Simon Ward, Greg Paterson and Stephen Livingstone, and ' +
                'were signed by Post-Rock band Mogwai to their Rock Action Records imprint who ' +
                'released a limited run 7" single "Hans Herman" which sold out quickly.';
            const author = 'Terror data in 21 century is often erroneous';
            const rank1 = filterUtil.rank('Error', target);
            const rank2 = filterUtil.rank('Error', author);
            assert.isAbove(rank1.value, rank2.value);
        });

        it('should correctly give rank for a input key to a word array', () => {
            const keyword = 'Franc';
            const wordsArray = ['France', 'French', 'France football team', 'Frank',
                'Germany', 'Franchmen'];
            const afterRanking = {};
            wordsArray.forEach((word) => {
                afterRanking[word] = filterUtil.rank(keyword, word);
            });
            const sortedArray = wordsArray.sort((word1, word2) => {
                if (afterRanking[word1].value > afterRanking[word2].value) {
                    return -1;
                } else if (afterRanking[word1].value < afterRanking[word2].value) {
                    return 1;
                }
                return 0;
            });
            assert.deepEqual(sortedArray, ['France', 'Frank', 'Franchmen', 'French',
                'France football team', 'Germany']);
        });

        it('should correctly give rank with caseSensitive option = true', () => {
            const keyword = 'Man';
            const wordsArray = ['Man', 'Men', 'Manner', 'aman', 'manny', 'man'];
            const afterRanking = {};
            wordsArray.forEach((word) => {
                afterRanking[word] = filterUtil.rank(keyword, word, { caseSensitive: true });
            });
            const sortedArray = wordsArray.sort((word1, word2) => (
                afterRanking[word2].value - afterRanking[word1].value
            ));
            assert.deepEqual(sortedArray, ['Man', 'Manner', 'man', 'aman', 'manny', 'Men']);
        });
    });

    describe('Test match', () => {
        it('should return the correct highlight text index', () => {
            const bookTitle = 'Web Database Applications with PHP & MySQL';
            const input = 'Web Database Applications';
            const result = filterUtil.match(input, [bookTitle]);
            assert.isAbove(result[0].value, 1);
            assert.deepEqual(result[0].highlightIndexes, [{
                start: 0,
                length: 3,
            }, {
                start: 4,
                length: 8,
            }, {
                start: 13,
                length: 12,
            }]);
        });

        it('should return all the matches', () => {
            const book1 = 'Web Database Applications with PHP & MySQL';
            const book2 = 'PHP Applications with MySQL';
            const book3 = 'Supernatural Heros';
            const result = filterUtil.match('Web Applications', [book1, book2, book3]);
            assert.equal(result.length, 2, 'only got 2 matches.');
        });

        it('should return all matches with right ranking', () => {
            const book1 = 'Web Database Applications with PHP & MySQL';
            const book2 = 'Creating Database Web Applications with PHP and ASP';
            const book3 = 'Building Database Applications on the Web Using PHP3';
            const book4 = 'Building Web Database Applications with Visual Studio 6';
            const book5 = 'Web Application Development With PHP';
            const book6 = 'WebRAD: Building Database Applications on the Web with Visual ' +
                'FoxPro and Web Connection';
            const book7 = 'Structural Assessment: The Role of Large and Full-Scale Testing';
            const book8 = 'How to Find a Scholarship Online';
            const bookTitles = [
                book1, book2, book3, book4, book5, book6, book7, book8,
            ];
            const result1 = filterUtil.match('Web Database Applications', bookTitles);
            const result2 = filterUtil.match('PHP Web Applications', bookTitles);
            const result3 = filterUtil.match('Web Aplications', bookTitles);
            const result4 = filterUtil.match('PHP5', bookTitles);
            const result5 = filterUtil.match('iOS App Development', bookTitles);

            assert.equal(result1.length, 6, 'result1 get 6 matches.');
            assert.equal(result2.length, 6, 'result2 get 6 matches.');
            assert.equal(result3.length, 6, 'result3 get 6 matches.');
            assert.equal(result4.length, 0, 'result4 get 0 matches.');
            assert.equal(result5.length, 1, 'result5 get 1 matches.');

            assert.deepEqual(result1.sort((resultObj1, resultObj2) => (
                resultObj2.value - resultObj1.value
            )), result1, 'result1 is properly sorted by rank value');
            assert.deepEqual(result2.sort((resultObj1, resultObj2) => (
                resultObj2.value - resultObj1.value
            )), result2, 'result2 is properly sorted by rank value');
            assert.deepEqual(result3.sort((resultObj1, resultObj2) => (
                resultObj2.value - resultObj1.value
            )), result3, 'result3 is properly sorted by rank value');

            const wordsFromResult1 = result1.map(obj => obj.originString);
            assert.deepEqual(wordsFromResult1, [book1, book2, book4, book3, book6, book5],
                'result1 is ranking correctly');

            const wordsFromResult2 = result2.map(obj => obj.originString);
            assert.deepEqual(wordsFromResult2, [book2, book1, book5, book3, book4, book6],
                'result2 is ranking correctly');

            const wordsFromResult3 = result3.map(obj => obj.originString);
            assert.deepEqual(wordsFromResult3, [book1, book5, book2, book3, book4, book6],
                'result3 is ranking correctly');
        });

        it('should return all matches with right ranking with caseSensitive option = true ', () => {
            const book1 = 'Web Database Applications with PHP & MySQL';
            const book2 = 'Creating Database Web Applications with PHP and ASP';
            const book3 = 'Building Database Applications on the Web Using PHP3';
            const book4 = 'Building Web Database Applications with Visual Studio 6';
            const book5 = 'Web Application Development With PHP';
            const book6 = 'WebRAD: Building Database Applications on the Web with Visual ' +
                'FoxPro and Web Connection';
            const book7 = 'Structural Assessment: The Role of Large and Full-Scale Testing';
            const book8 = 'How to Find a Scholarship Online';
            const bookTitles = [
                book1, book2, book3, book4, book5, book6, book7, book8,
            ];
            const result1 = filterUtil.match('web database applications', bookTitles, {
                caseSensitive: true,
            });
            const result2 = filterUtil.match('PHP web APPLICATIONS', bookTitles, {
                caseSensitive: true,
            });

            assert.equal(result1.length, 6, 'result1 get 6 matches.');
            assert.equal(result2.length, 3, 'result2 get 3 matches.');
            assert.deepEqual(result1.sort((resultObj1, resultObj2) => (
                resultObj2.value - resultObj1.value
            )), result1, 'result1 is properly sorted by rank value');
            assert.deepEqual(result2.sort((resultObj1, resultObj2) => (
                resultObj2.value - resultObj1.value
            )), result2, 'result2 is properly sorted by rank value');

            const wordsFromResult1 = result1.map(obj => obj.originString);
            assert.deepEqual(wordsFromResult1, [book1, book2, book3, book4, book5, book6],
                'result1 is ranking correctly');

            const wordsFromResult2 = result2.map(obj => obj.originString);
            assert.deepEqual(wordsFromResult2, [book5, book1, book2],
                'result2 is ranking correctly');
        });
    });
});
