const sParams = new URLSearchParams(window.location.search);

export const getQueryParam = (name: string) => {
    return sParams.get(name);
}