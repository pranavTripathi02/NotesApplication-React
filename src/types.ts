export type TNote = {
  id: string;
  title: string;
  description: string;
  content: string;
  tags?: string[];
  createdOn: number;
  lastModified: number;
};

export type TFilterType = "title" | "createdOn" | "lastModified";

export type TFilter = {
  filter: TFilterType;
  sortAsc: boolean;
  searchTerm?: string;
};
