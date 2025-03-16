export function parseInputListMock(input: string, delimiter = ','): string[] {
  return input
    .split(delimiter)
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
}
