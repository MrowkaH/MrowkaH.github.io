# Portfolio Kacpra Kulika - Dwujęzyczny / Kacper Kulik's Portfolio - Bilingual

## 🌍 Opis / Description

**Polski:**
Portfolio prezentujące umiejętności w dziedzinie finansów i analizy rynków. Strona oferuje przełączanie między językiem polskim a angielskim jednym kliknięciem.

**English:**
Portfolio showcasing skills in finance and market analysis. The website offers switching between Polish and English with one click.

## 🚀 Funkcje / Features

- **Dwujęzyczność / Bilingual**: Przełączanie PL/EN jednym przyciskiem
- **Responsywność / Responsive**: Dostosowanie do wszystkich urządzeń
- **Nowoczesny design / Modern design**: Profesjonalny wygląd
- **GitHub Pages ready**: Gotowe do hostowania

## 📁 Struktura plików / File Structure

```
portfolio/
├── index.html          # Strona główna / Main page
├── finance.html        # CV finansowe / Finance CV
├── inne.html           # O mnie / About me
├── script.js           # JavaScript z obsługą języków / JS with language support
├── style.css           # Style CSS / CSS styles  
├── language-styles.css # Dodatkowe style dla języków / Additional language styles
├── img/                # Folder na obrazy / Images folder
│   ├── Projekt1.png
│   ├── Projekt2.png
│   ├── Projekt3.png
│   └── Projekt4.png
└── README.md           # Ten plik / This file
```

## 🛠️ Instalacja / Installation

**Polski:**
1. Skopiuj wszystkie pliki do swojego repozytorium GitHub
2. Upewnij się, że repozytorium nazywa się `username.github.io`
3. Włącz GitHub Pages w ustawieniach repozytorium
4. Dodaj obrazy do folderu `img/`
5. Strona będzie dostępna pod adresem `https://username.github.io`

**English:**
1. Copy all files to your GitHub repository
2. Make sure the repository is named `username.github.io`
3. Enable GitHub Pages in repository settings
4. Add images to the `img/` folder
5. The site will be available at `https://username.github.io`

## 🔧 Jak używać / How to Use

### Przełączanie języka / Language Switching

**Polski:**
- Kliknij przycisk "EN" w prawym górnym rogu, aby przełączyć na angielski
- Kliknij przycisk "PL", aby wrócić do polskiego
- Wybór języka jest zapisywany w przeglądarce

**English:**
- Click the "EN" button in the top right corner to switch to English
- Click the "PL" button to return to Polish
- Language choice is saved in the browser

### Personalizacja / Customization

**Polski:**
1. **Zmiana treści**: Edytuj tekst w tagach `<span data-lang="pl">` i `<span data-lang="en">`
2. **Dodanie obrazów**: Umieść pliki w folderze `img/` i zaktualizuj ścieżki w HTML
3. **Modyfikacja stylów**: Edytuj plik `style.css` lub `language-styles.css`

**English:**
1. **Content changes**: Edit text in `<span data-lang="pl">` and `<span data-lang="en">` tags
2. **Adding images**: Place files in `img/` folder and update paths in HTML
3. **Style modifications**: Edit `style.css` or `language-styles.css` file

## 📱 Responsywność / Responsiveness

Strona jest w pełni responsywna i dostosowuje się do:
- Desktop (1200px+)
- Tablet (768px - 1199px)  
- Mobile (do 767px)

The site is fully responsive and adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (up to 767px)

## 🎨 Dodawanie nowych sekcji / Adding New Sections

**Polski:**
Aby dodać nową sekcję z obsługą dwóch języków:

```html
<section class="nowa-sekcja">
  <h2>
    <span data-lang="pl">Tytuł po polsku</span>
    <span data-lang="en" style="display: none;">Title in English</span>
  </h2>
  <p>
    <span data-lang="pl">Treść po polsku...</span>
    <span data-lang="en" style="display: none;">Content in English...</span>
  </p>
</section>
```

**English:**
To add a new section with bilingual support:

```html
<section class="new-section">
  <h2>
    <span data-lang="pl">Tytuł po polsku</span>
    <span data-lang="en" style="display: none;">Title in English</span>
  </h2>
  <p>
    <span data-lang="pl">Treść po polsku...</span>
    <span data-lang="en" style="display: none;">Content in English...</span>
  </p>
</section>
```

## 🔍 SEO i dostępność / SEO and Accessibility

- **Semantyczne HTML5**: Używanie odpowiednich tagów
- **Alt teksty**: Dla wszystkich obrazów
- **Lang attributes**: Automatyczne przełączanie w `<html lang="...">`
- **Meta tags**: Odpowiednie dla wyszukiwarek

## 🐛 Rozwiązywanie problemów / Troubleshooting

**Polski:**
- **Język się nie przełącza**: Sprawdź czy plik `script.js` jest poprawnie załadowany
- **Style nie działają**: Upewnij się, że ścieżki do CSS są poprawne
- **Obrazy się nie ładują**: Sprawdź ścieżki do plików w folderze `img/`

**English:**
- **Language not switching**: Check if `script.js` file is properly loaded
- **Styles not working**: Make sure CSS paths are correct
- **Images not loading**: Check file paths in `img/` folder

## 📄 Licencja / License

Ten projekt jest dostępny na licencji MIT. Możesz go swobodnie używać i modyfikować.

This project is available under the MIT license. You can freely use and modify it.

## 👤 Autor / Author

**Kacper Kulik**
- Email: Kacper.Kulik2003@wp.pl
- Telefon: +48 690 900 704

---

**Uwaga**: Pamiętaj o aktualizacji danych kontaktowych i treści zgodnie z własnymi informacjami.

**Note**: Remember to update contact details and content according to your own information.