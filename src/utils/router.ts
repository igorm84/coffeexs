export const slugSorting = (a: string, b: string) => {
  const aSlugCount = a.match(/\[(\w+)\]/g)?.length || 0;
  const bSlugCount = b.match(/\[(\w+)\]/g)?.length || 0;

  if (aSlugCount > bSlugCount) {
    return -1;
  } else if (aSlugCount < bSlugCount) {
    return 1;
  }

  return 0;
};
