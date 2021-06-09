export function yearDifference(year) {
    return new Date().getFullYear() - year;
}

export function calculateBrand(brand) {

    let increase;

    switch (brand) {
        case 'european':
            increase = 1.30;
            break;
        case 'american':
            increase = 1.15;
            break;
        case 'asian':
            increase = 1.05;
            break;
        default:
            break;
    };
    return increase;
};

export function knowPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}

export function firstCapitalLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}