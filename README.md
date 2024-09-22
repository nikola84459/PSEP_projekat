U ovom projektu je razvijena Web aplikacija za informacioni sistem banke.
Postoje dve uloge korisnika: "Korisnik(klijent banke)" i "Službenik"

Funkcionalnosti:

  Korisnik:
  
    Pregled računa - kada se korisnik prijavi na sistem otvara mu se stranica gde ima mogućnost da vidi sve svoje račune
    Pregled transakcija po računu - korisnik klikom na broj računa ima mogućnost pregleda svih izvršenih transakcija po računu
    Prenos novca - korisnik ima mogućnos za prenos novca kako između svojih računa tako i na račune drugih korisnika
    Menjačnica - ukoliko korisnik ima i dinarski i devizni račun ima mogućnos da izvrši razmenu novca u ili iz value koju odabere i koju podržava devizni račun
    Pregled ličnih podataka - korisnik ima mogućnost pregleda svojih ličnih podataka kojima banka raspolaže
    Izmena šifre - korisnik ima mogućnost izmene šifre

  Službenik:
  
    Pretraga korisnika - službenik ima mogućnost pretrage korisnika po imenu i prezimenu, broju lične karte ili JMBG-u
    Pregled podataka korisnika i pregled korisnikovih računa - službenik ima mogućnost kada nakon pretrage pristupi određenom korisniku da vidi njegove podatke kao i njegove račune
    Otvaranje računa za novog korisnika - Službenik ima mogućnost da doda novog korisnika u sistem i nakon toga otvori račun za tog korisnika
    Otvaranje računa za postojećeg korisnika - Ukoliko postojeći korisnik želi da otvori još jedan račun službenik nakon pretrage i pristupa tom korisniku ima mogućnost da otvori novi račun za njega
    Brisanje korisnika - Službenik ima mogućnost da obriše korisnika
    Zatvaranje računa - Službenik ima mogućnost da zatvori račun za korisnika
    Isplata novca sa računa - ukoliko korisnik želi da podigne novac na šalteru banke, službenik ima mogućnost da izvrši isplatu novca sa računa korisnika
    Izmena podataka za korisnika - ukoliko je potrebno službenik ima mogućnost da izvrši izmenu podataka za korisnika
    Pregled ličnih podataka - službenik takođe ima mogućnost da pregleda svoje lične podatke
    Izmena šifre - službenik ima mogućnost da izmrni svoju šifru

Korištene tehnologije:
  backend: Node.js, Express
  
  frontend: TypeScript, React
  
  baza podataka: MySQL
