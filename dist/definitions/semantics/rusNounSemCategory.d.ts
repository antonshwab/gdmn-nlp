import { SemCategory } from "./categories";
export interface IRusNounSemCategory {
    [stem: string]: SemCategory[];
}
export declare const RusNounSemCategory: IRusNounSemCategory;
