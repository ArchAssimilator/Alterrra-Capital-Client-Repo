# Invoice Data Table

| Document Name | Date | Vendor | Currency | Amount | Confidence |
|---|---|---|---|---|---|
| 2.pdf | 2025-09-17 | OpenAI, LLC | USD | $23.00 | 99% |
| 3.pdf | 2025-10-17 | OpenAI, LLC | USD | $23.00 | 99% |
| 4.pdf | 2025-09-30 | Google LLC | USD | $41.20 | 99% |
| 5.pdf | 2025-09-01 | Afrihost (WIS) | ZAR | R1,017.00 | 99% |
| 6.pdf | 2025-08-31 | Google LLC | USD | $36.00 | 99% |
| 7.jpeg | 2025-10-01 | The Lighting Warehouse | ZAR | R1,167.00 | 92% |
| 8.pdf | 2025-08-25 | xneelo | ZAR | R198.00 | 99% |
| 9.pdf | 2025-09-21 | Takealot Online (Pty) Ltd | ZAR | R1,828.00 | 99% |
| 10.pdf | 2025-10-24 | xneelo | ZAR | R289.00 | 99% |
| AKD-736120396282.pdf | 2025-07-30 | MultCloud (via Cleverbridge) | ZAR | R192.23 | 98% |
| IN55221994.pdf | 2025-03-01 | Afrihost (WIS) | ZAR | R947.00 | 99% |
| IN57221267.pdf | 2025-07-01 | Afrihost (WIS) | ZAR | R947.00 | 99% |
| admyt 201.pdf | 2026-02-06 | Admyt (Pty) Ltd | ZAR | R201.00 | 97% |
| first car 429 (1500-1070).pdf | 2026-01-31 | First Car Rental | ZAR | R429.75 | 93% |
| safair 1380.pdf | 2026-02-03 | FlySafair | ZAR | R1,379.63 | 99% |
| safair 3020.pdf | 2025-12-28 | FlySafair | ZAR | R3,019.84 | 99% |

## Notes

- **Currency**: Defaults to ZAR where not specified. OpenAI and Google invoices are billed in USD.
- **7.jpeg** (Lighting Warehouse): Confidence reduced to 92% — source is a photograph of a thermal receipt, with some potential for digit misreading.
- **AKD-736120396282.pdf** (MultCloud): Confidence 98% — total shown as ZAR 192.23 incl. VAT; a strikethrough price of ZAR 209.00 also appears (original list price, not charged amount).
- **admyt 201.pdf**: Confidence 97% — invoice date is 06-02-2026 but service date is 29-01-2026; amount used is the total incl. VAT (R201.00).
- **first car 429 (1500-1070).pdf**: Confidence 93% — dense monospaced layout with masked fields; total clearly stated as R429.75 (paid).
- **safair 1380.pdf**: Date used is payment date (03/02/2026); flights were 09–11 Feb 2026.
- **safair 3020.pdf**: Date used is payment date (28/12/2025); flights were 24–29 Jan 2026.
