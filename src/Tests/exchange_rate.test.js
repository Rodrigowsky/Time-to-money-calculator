import { hleExchangeRate } from "../Utils/exchangeRate";

test('exhangeRate tests', () => {
  expect(hleExchangeRate(25, 5000)).toBe(0.020);
  expect(hleExchangeRate(40, 4000)).toBe(0.040);
  expect(hleExchangeRate(50, 3000)).toBe(0.067);
  expect(hleExchangeRate(25, 2500)).toBe(0.040);
  expect(hleExchangeRate(1, 1)).toBe(4.000);

  expect(hleExchangeRate(0, 0)).toBe(NaN);
  
  expect(hleExchangeRate(-1, 1773)).toBe(-0.002);
  expect(hleExchangeRate(-10, 40)).toBe(-1.000);
  expect(hleExchangeRate(-75, -40)).toBe(7.500);
});