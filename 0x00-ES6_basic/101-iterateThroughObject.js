export default function iterateThroughObject(reportWithIterator) {
  /* another answer
   * return newArray.from(reportWithIterator).join(' | ');
   */
  const returnValue = [];
  for (const report of reportWithIterator) {
    returnValue.push(report);
  }
  return returnValue.join(' | ');
}
