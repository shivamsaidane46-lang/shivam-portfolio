@echo off
echo ===================================================
echo   Uploading Shivam S. Portfolio to GitHub...
echo ===================================================
cd /d "%~dp0"

if exist node_modules (
    echo Removing local node_modules from Git tracking...
)

git init
git rm -r --cached node_modules --ignore-unmatch 2>nul
git rm -r --cached dist --ignore-unmatch 2>nul
git add .
git commit -m "Deploy clean Netlify-ready portfolio"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/shivamsaidane46-lang/shivam-portfolio.git
git push -u origin main --force

echo.
echo ===================================================
echo   DONE! Your code is now live on GitHub and
echo   Netlify will automatically build your website!
echo ===================================================
pause
