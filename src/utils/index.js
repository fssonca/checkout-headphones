/**
 * @function formatCurrency
 * Format number as currency (GBP)
 *
 * @param {number} currency
 * @returns {string} number formatted as currency.
 *
 * @example
 *   formatCurrency(0)
 *   // => £0.00
 *
 * @example
 *   formatCurrency(1.5)
 *   // => £1.50
 *
 */
export function formatCurrency(currency) {
  const c = parseInt(currency, 10);

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(c);
}
