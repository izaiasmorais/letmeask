import { format } from "date-fns";

export function formatDate(date: string | Date): string {
	return format(date, "dd/MM/yyyy HH:mm");
}
