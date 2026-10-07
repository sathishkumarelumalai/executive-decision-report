# Executive Decision Report: BI Capstone

C-suite decision deck, analysis notebook and ROI model recommending three strategic actions to grow profit.

**Headline:** fixing deep discounts, scaling the South region playbook and retaining top customers can add about **$43K profit a year** on a **$15K investment** (187% ROI, 4.2-month payback).

## Repository contents
| File | Description |
|---|---|
| `Executive_Decision_Report_YourName.pdf` | 15-slide executive deck (submission PDF) |
| `Executive_Decision_Report_YourName.pptx` | Editable source of the deck |
| `Final_Analysis_YourName.ipynb` | Final analytical notebook, executed with outputs |
| `ROI_Calculator.xlsx` | ROI and payback model: 3 recommendations x 3 scenarios, plus timeline |
| `data/sample_sales_data.csv` | Dataset (4,000 orders, 2023-2025) |
| `charts/` | Charts exported by the notebook |
| `build_deck.js` | Script that regenerates the deck (optional) |

## Reproduce
```bash
pip install -r requirements.txt
jupyter notebook Final_Analysis_YourName.ipynb   # Kernel -> Restart & Run All
```
Or open the notebook in Google Colab and upload the CSV.

## Methodology
Data cleaning, KPI analysis, segmentation by region/category/customer, risk analysis (discount and loss-making orders) and three-scenario ROI modelling (conservative 60%, expected 100%, optimistic 130% of expected gain).

> The bundled dataset is a synthetic demo sample. Costs and uplift rates in the ROI model are stated assumptions.
