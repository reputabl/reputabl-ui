export interface option {
    title: string;
    value: any;
}

export const getDayOptions = (): option[] => {
    let days = [];

    for (let day = 1; day < 32; day++) {
        days.push({ title: day.toString(), value: day });
    }

    return days;
};

export const getYearOptions = (): option[] => {
    let years = [];

    for (let year = 2021; year > 1939; year--) {
        years.push({ title: year.toString(), value: year });
    }

    return years;
};

export const months: option[] = [
    {
        title: 'January',
        value: '01',
    },
    {
        title: 'February',
        value: '02',
    },
    {
        title: 'March',
        value: '03',
    },
    {
        title: 'April',
        value: '04',
    },
    {
        title: 'May',
        value: '05',
    },
    {
        title: 'June',
        value: '06',
    },
    {
        title: 'July',
        value: '07',
    },
    {
        title: 'August',
        value: '08',
    },
    {
        title: 'September',
        value: '09',
    },
    {
        title: 'October',
        value: '10',
    },
    {
        title: 'November',
        value: '11',
    },
    {
        title: 'December',
        value: '12',
    },
];
