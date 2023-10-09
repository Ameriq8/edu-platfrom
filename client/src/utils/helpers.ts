export function normalizeTotalPages(totalPages: number, perPage: number): number {
  let normalizedTotalPages: number;

  if (totalPages % perPage === 0) {
    normalizedTotalPages = totalPages / perPage;
  } else {
    normalizedTotalPages = Math.ceil(totalPages / perPage);
  }

  return normalizedTotalPages;
}
