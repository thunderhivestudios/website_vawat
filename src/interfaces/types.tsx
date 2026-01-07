export interface NavLink {
  label: string;
  href: string;
  className?: string;
}

export interface ServiceDetail {
  mainImage?: string;
  title?: string;
  tags?: string[];
  overview?: string;
  secondaryColumns?: { heading: string; content: string }[];
  benefits?: string[];
  progressItems?: { title: string; value: number; style?: string }[];
  additionalImages?: string[];
  paragraph?: string;
  data_id?: string;
}