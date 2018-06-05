export enum SemContext {
  Common = 0,
  QueryDB
};

export enum SemCategory {
  Place = 0
};

export const semCategoryNames = [
  'place'
];

export function semCategory2Str(cat: SemCategory): string {
  return semCategoryNames[cat];
}

export function str2SemCategory(str: string): SemCategory {
  const idx = semCategoryNames.indexOf(str);

  if (idx === -1) {
    throw new Error(`Unknown category ${str}`);
  }

  return idx;
}

export function semCategories2Str(cat: SemCategory[]): string {
  if (cat.length) {
    return cat.map( c => semCategory2Str(c) ).join(',');
  } else {
    return '';
  }
}

export function str2SemCategories(str: string): SemCategory[] {
  if (str) {
    return str.split(',').map( s => str2SemCategory(s) );
  } else {
    return [];
  }
}