export const getCount = (data) => {
  const firstCount = 1 * data.first;
  const secondCount = 2 * data.second;
  const thirdCount = 3 * data.third;
  return firstCount + secondCount + thirdCount;
};
