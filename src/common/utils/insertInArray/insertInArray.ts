export const insertInArray = (list: string[], item: string, index: number): string[] => {
  const result = [...list];
  result.splice(index, 0, item);

  return result;
};
