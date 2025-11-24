# АЛГА — сайт

Простая статическая страница на HTML/CSS/JS в папке `алга/`.

Как запустить локально (PowerShell / Windows):

```powershell
# перейти в папку проекта
Set-Location j:/copilot/алга
# запустить простой HTTP-сервер на Python 3
python -m http.server 8000
# открыть в браузере: http://localhost:8000
```

Файлы:
- `index.html` — страница
- `styles.css` — стили
- `script.js` — простая логика (меню, год)

Дальше можно добавить медиа и контент в папку `assets/` и править секции по вкусу.

## Деплой на GitHub Pages

1. Инициализируйте локальный git-репозиторий (если ещё не):

```powershell
Set-Location j:/copilot
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. В репозитории присутствует GitHub Actions workflow `.github/workflows/deploy.yml`, который будет автоматически деплоить содержимое папки `алга/` в ветку `gh-pages` при пуше в `main`.

3. Включите GitHub Pages на странице репозитория: в разделе Settings → Pages выберите ветку `gh-pages` и папку `/ (root)`.

4. После первого успешного workflow сайт будет доступен по адресу `https://<your-username>.github.io/<repo-name>/`.

Если хотите, могу добавить CNAME, настроить кастомный домен или сделать workflow, который деплоит на ветку из другой ветки. 
