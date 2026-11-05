# Raport zmian / do dalszego code review (Claude + ChatGPT)

## Zrobione

- Dopisano odrębną usługę „Podstawy SEO i widoczności lokalnej” i sekcję techniczną z elementami HTML, LocalBusiness, mobile-first.
- Rozszerzono `index.html` o meta description, canonical, Open Graph, Twitter Cards, `Person` JSON-LD, lokalne słowa kluczowe.
- Dodano `robots.txt` i `sitemap.xml` (adres domeny do zastąpienia przed wdrożeniem) oraz prawdziwy asset `assets/og-image.png`.
- Usunięto zewnętrzne Google Fonts — zastąpione fontami systemowymi, bez redystrybucji fontów.
- Naprawiono brak `favicon.svg` w strukturze projektu; favicon umieszczono w `assets/`.
- Dodano `noindex` do warsztatu (kawiarnia już miała), nowy `noindex` do porównania redesignu.
- Naprawiono mobilny banner i pasek usług w demo warsztatu, poprawiono czytelność i nawigację Escape + focus.
- W demo kawiarni na telefonie widać nawigację (zamiast ukrytego menu), dodano skip link.
- Dodano pokazy godzin i obszaru działania oraz demonstracyjne LocalBusiness JSON-LD do obu dem. Nie wprowadzano zmyślonych adresów/telefonów/recenzji.
- Dodano interaktywną stronę `demo-redesign.html` „Studio Ami — przed/po”.
- Dodano FAQ oraz formularz budujący wiadomość e-mail (mailto:, żadnego fałszywego przesłania danych).
- Poprawiono czytelność wielu tekstów i zabezpieczono stronę główną przed przewijaniem w poziomie.

## Kontrola techniczna

- Sprawdzenie składni JavaScript `node --check`: OK dla `script.js` i inline w demach.
- Parsowanie CSS `tinycss2`: brak błędów składni.
- Struktura linków oraz lokalnych zasobów HTML: bez brakujących plików; jeden H1 na każdej stronie.
- Dane JSON-LD w trzech dokumentach parsują się jako JSON.
- Renderowanie w Chromium z osadzonym lokalnie CSS i JS (ograniczenie polityki środowiska blokuje nawigację do file:// i localhost): brak wyjątków JS, brak błędnych obrazków; w `index.html` brak przewijania w poziomie dla szerokości 320, 375, 390, 768, 1024, 1440, 1920 px; w pozostałych demach sprawdzenie dla 390 i 1440 px.
- Testy przycisków mobilnego menu i Escape, FAQ, przełącznika redesignu: OK.

## Nadal do zrobienia przy wdrożeniu

1. Zastąp `https://DOMENA-DO-UZUPELNIENIA.pl/` faktycznym publicznym adresem, łącznie ze ścieżką GitHub Pages repozytorium.
2. Zdecyduj, czy Wałcz to zamierzony obszar usług; popraw w opisie, title i meta w razie potrzeby.
3. Zweryfikuj pocztę `cis.radoslaw@protonmail.com`.
4. Uruchom **realny** Lighthouse / PageSpeed na publicznej stronie i zapisz wyniki, bez deklaracji „95+” przed testem.
5. Jeśli chcesz zdjęcia, dobierz obrazy z legalnym prawem użycia i skompresuj do WebP/AVIF. Obecny projekt opiera się na CSS/SVG, nie udaje, że zawiera zdjęcia.
6. Aby formularz wysyłał wiadomości na serwer, podłącz backend/usługę formularzy i przygotuj informacje o przetwarzaniu danych.
7. Na rzeczywistych stronach klientów wstaw prawdziwy NAP, mapę, godziny, link `tel:` i ewentualne zweryfikowane opinie. Demo nie zawiera fałszywych danych osób trzecich.
