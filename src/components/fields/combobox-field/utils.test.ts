import { getDayOptions, getYearOptions, months, option } from './utils';

describe('ComboBox Utils', () => {
    test('getDayOptions', () => {
        const days: option[] = getDayOptions();
        expect(days).toHaveLength(31);
    });

    test('months', () => {
        expect(months).toHaveLength(12);
    });

    test('getYearOptions', () => {
        const years: option[] = getYearOptions();
        expect(years).toContainEqual({ title: '2021', value: 2021 });
    });
});
