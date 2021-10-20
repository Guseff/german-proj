export const reorderArray = (list: string[], startIndex: number, endIndex: number): string[] => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
