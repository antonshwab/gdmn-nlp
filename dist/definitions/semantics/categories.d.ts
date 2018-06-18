export declare enum SemCategory {
    /**
     * Место расположения объекта в пространстве (географическое).
     */
    ObjectLocation = 0,
    /**
     * Место, город, область, район, страна.
     */
    Place = 1,
    /**
     * Любая организация. Коммерческая, некомерческая,
     * правительственное учреждение, школа, университет и т.п.
     */
    Organization = 2,
    /**
     * Компания. Коммерческая организация.
     */
    Company = 3
}
export declare const semCategoryNames: string[];
export declare function semCategory2Str(cat: SemCategory): string;
export declare function str2SemCategory(str: string): SemCategory;
export declare function semCategories2Str(cat: SemCategory[]): string;
export declare function str2SemCategories(str: string): SemCategory[];
