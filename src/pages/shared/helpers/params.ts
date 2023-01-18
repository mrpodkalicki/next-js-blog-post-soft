export const getValueFromParams = (params: string[] | string = '') => {
    if (typeof params === 'string') {
        return params;
    } else if (Array.isArray(params)) {
        const [paramFirstValue] = params;
        return paramFirstValue;
    }

    return '';
}
