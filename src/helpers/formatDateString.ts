export default function formatDateString(string:string): string {
    const date = new Date(string);
    const formattedDate = date.toLocaleString('default', { month: 'short', day: 'numeric', year:'numeric' });
    return formattedDate;
}
