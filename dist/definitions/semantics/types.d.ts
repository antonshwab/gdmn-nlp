export declare enum SemContext {
    Common = 0,
    QueryDB = 1
}
export declare enum SemCategory {
    Place = 0
}
export declare const semCategoryNames: string[];
export declare function semCategory2Str(cat: SemCategory): string;
export declare function str2SemCategory(str: string): SemCategory;
export declare function semCategories2Str(cat: SemCategory[]): string;
export declare function str2SemCategories(str: string): SemCategory[];
