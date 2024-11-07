export enum Filter {
	Pinned = "Pinned",
	Internal = "Internal",
	External = "External",
	All = "All"
}

export type AppData = {
	name: string;
	image: string;
	pinned: boolean;
	internal: boolean;
};
