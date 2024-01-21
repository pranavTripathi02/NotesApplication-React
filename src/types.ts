export type TNote = {
  id: string;
  title: string;
  description: string;
  content: string;
  tags?: string[];
  createdOn: number;
  lastModified: number;
};

export type TFilter = {
  filter: "title" | "createdOn" | "lastModified";
  sortAsc: boolean;
};
