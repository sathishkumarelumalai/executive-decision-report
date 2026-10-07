# Push to GitHub and submit (delete this file before pushing if you like)

## 0. Personalise first (5 minutes)
1. Rename `YourName` in the three file names to your real name.
2. Open the .pptx: edit slide 1 (name, date) and slide 15 (your GitHub link). Re-export: File -> Export -> PDF, overwrite the PDF.
3. Best: replace `data/sample_sales_data.csv` with YOUR dataset, update the Config cell in the notebook, re-run it, and update the slide numbers. The sample data is synthetic and is only a demo.

## 1. Create the empty repo
github.com -> New repository -> name `executive-decision-report` -> Public (or Private and add your mentor) -> do NOT add a README -> Create.

## 2. Push from your computer
```bash
cd Executive_Decision_Report_Kit
git init -b main                      # skip if the .git folder already exists
git config user.name "Your Name"
git config user.email "you@example.com"
git add .
git commit -m "Add executive decision report, notebook and ROI model"
git remote add origin https://github.com/YOUR-USERNAME/executive-decision-report.git
git push -u origin main
```
If asked for a password, use a Personal Access Token (GitHub -> Settings -> Developer settings -> Tokens), or sign in with GitHub Desktop / `gh auth login`.

**No command line?** On the repo page click Add file -> Upload files, drag in everything, then Commit.

## 3. Verify
Open the repo in a private window: the notebook should render with charts, and the PDF should open.

## 4. Submit
Submit the PDF plus the repo link (e.g. https://github.com/YOUR-USERNAME/executive-decision-report). Optionally add the Colab link: Colab -> File -> Open notebook -> GitHub tab -> paste the repo URL.
