export default function formatDateString(string:string): string {
    const date = new Date(string);
    const formattedDate = date.toLocaleString('default', { month: 'short', day: 'numeric', year:'numeric' });
    return formattedDate;
}

const result = formatDateString("2020-08-12T13:34:45Z");

console.log(result);
