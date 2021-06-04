export const convertTime = (value: number) => {
    return value > 0 ? `${Math.floor(value/60)}h${value % 60}m` : 'N/A';
}