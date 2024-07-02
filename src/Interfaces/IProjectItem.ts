import { IChips } from "./IChips";

export interface IProjectItem {
  id: number;
  title: string;
  description: string;
  img: string;
  imgAlt?: string;
  chips?: IChips[];
  link?: string;
  websiteLink?: string;
  scale?: number;
  modalInfo: React.ReactNode;
}
