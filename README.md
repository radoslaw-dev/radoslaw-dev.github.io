# Radosław Cis — portfolio dla firm (wersja rozbudowana)

Nowa wersja portfolio oparta na dostarczonych plikach. Obejmuje strony WWW, redesign i **podstawy SEO**. Wszystkie marki Morrow, Stacja 47 i Studio Ami są fikcyjne i służą wyłącznie demonstracji.

## Zawartość

- `index.html`, `styles.css`, `script.js` — główne portfolio, FAQ i formularz otwierający **program pocztowy** (nie wysyła bezpośrednio wiadomości).
- `demo-kawiarnia.html` + `.css` — koncepcja strony kawiarni z godzinami i przykładową lokalizacją.
- `demo-mechanik.html` + `.css` — koncepcja serwisu motoryzacyjnego z godzinami i poglądową mapą. Formularz wyłącznie pokazowy.
- `demo-redesign.html` — interaktywne porównanie przed i po dla fikcyjnego Studio Ami.
- `assets/favicon.svg` — wektorowy znak RC.; `assets/og-image.png` — grafika pod podgląd linku.
- `robots.txt`, `sitemap.xml` — pliki techniczne do indeksowania głównej strony.

## Koniecznie wykonaj przed publikacją

**1. Ustaw kanoniczny URL.** W plikach `index.html`, `robots.txt` i `sitemap.xml` zamień **wszystkie wystąpienia** `https://DOMENA-DO-UZUPELNIENIA.pl/` na pełny adres strony, np. `https://radoslaw-dev.github.io/strony-dla-firm/` tylko jeśli naprawdę tam ją opublikujesz. Adres musi zawierać końcowy ukośnik i ścieżkę repozytorium (jeśli to GitHub Pages projektu). W `index.html` dotyczy to canonical, `og:url`, `og:image`, `twitter:image`. Zły adres kanoniczny lub sitemap będzie szkodził SEO.

**2. Ustal faktyczny obszar działalności.** W opisach wpisano Wałcz/okolice oraz współpracę online jako propozycję. Zmień te słowa, jeżeli nie pasują do Twojej oferty.

**3. Zweryfikuj swój kontakt.** W kodzie strony jest `cis.radoslaw@protonmail.com`. Jeśli używasz innego adresu, zmień wszystkie wystąpienia w `index.html` i `script.js`.

**4. Zostaw tylko usługi, które rzeczywiście umiesz dostarczyć.** Podstawy SEO ≠ gwarancja pierwszego miejsca w Google. Profil Firmy w Google wymaga prawdziwych danych i osobnej konfiguracji u właściciela firmy.

**5. Nie udostępniaj fikcyjnych danych jako rzeczywistych.** Wszystkie trzy dema mają `noindex`. Podane godziny i lokalizacje są oznaczone jako pokazowe, nie ma wymyślonych telefonów ani opinii klientów.

## Publikacja

1. Rozpakuj ZIP i otwórz `index.html` — wszystko działa lokalnie, bez zewnętrznych fontów czy bibliotek.
2. Umieść **całą zawartość** folderu w nowym repozytorium GitHub.
3. GitHub → Settings → Pages → Deploy from a branch → `main` → `/(root)`.
4. Ustal URL publikacji i zastosuj punkt 1 listy wyżej. Następnie opublikuj poprawione pliki.
5. Po wdrożeniu sprawdź `robots.txt` i `sitemap.xml` pod publicznym adresem oraz metadane podglądu linku.
6. Dopiero na **opublikowanym adresie** sprawdź Lighthouse i PageSpeed Insights oraz zapisz rzeczywiste wyniki. Nie zakładaj z góry określonych liczb.

## Uwaga o obrazach i fontach

Wersja używa fontów systemowych, nie łączy się z serwerami Google Fonts. To eliminuje zbędne połączenie zewnętrzne, ale nie stanowi kompletnego audytu zgodności z RODO. W przykładach wykorzystano ilustracje CSS i SVG. Aby zaprezentować prawdziwe zdjęcia w realizacji dla firmy, dodaj obrazy WebP/AVIF z prawami do wykorzystania, wymiarami `width`/`height`, opisowym `alt` oraz `loading="lazy"` dla zdjęć poniżej pierwszego ekranu.

## Formularze

Główny formularz po wypełnieniu otwiera domyślną aplikację pocztową klienta, w której trzeba jeszcze zatwierdzić wysyłkę. Jeżeli chcesz prawdziwy formularz działający w przeglądarce, musisz osobno skonfigurować backend lub usługę formularzy (np. Formspree) i zadbać o wymagane informacje o przetwarzaniu danych.

Projekt nie zawiera żadnych rzekomych ocen 95+ Lighthouse, fałszywych klientów, ich opinii, cen, terminów ani fikcyjnych danych kontaktowych.
