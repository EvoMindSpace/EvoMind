export const formatDate = (
	date: string,
	options?: Intl.DateTimeFormatOptions
) => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		...defaultOptions,
		...options,
	});
	return formattedDate;
};
