

export const truncateString = (str: string, numWords: number) => {
  // Split the input string by space characters
  const words = str.split(' ');

  // Check if the number of words is less than or equal to the desired number
  if (words.length <= numWords) {
    return str; // Return the original string if it's shorter or equal to the desired number
  } else {
    // Otherwise, join the first 'numWords' words and add an ellipsis at the end
    return words.slice(0, numWords).join(' ') + '...';
  }
};

export const capitalize = (str: string) => {
  const format = str.charAt(0).toLocaleUpperCase() + str.slice(1);
  return format
}