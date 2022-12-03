# barbershop

Strona stworzona dla salonu barberskiego. 

Główne funkcjonalności:

1 - Prezentacja salonu: 
  
  a) Dostępne uslugi
  
  b) Cennik
  
  c) Prezentacja personelu:
  
    I. Imię
    
    II. Zdjęcie - miniaturka
    
    III. Zdjęcia - większu format (3)
    
    IV. Opis - skrócony
    
    V. Opis - dłuższy
  
  d) Dane adresowe
  
  e) Mapa dojazdu
  
  f) Social media - ikony z linkami
  
2 - Wersja mobilna

3 - Formularz kontaktowy: konieczne dane: email, numer telefonu, imię, wiadomość.

4 - Dedykowany formularz do umawiania wizyt:
  Formularz powinien pozwalać na wybranie konkretnych usług, konkretnego pracownika, który zrealizuje usługi, wybranie terminu (dzień i godzina). 
    
    Po wybraniu usłgu klient powinien zobaczyć łączny koszt oraz czas wykonania wybranych usług. 
  Wymagane dane od klienta to tylko imię oraz numer telefnu. Po złożeniu rezerwacji kliett dostaje sms (Obsługiwane przez zewnętrzne API) z potwierdzeniem 
  rezerwacji i krótką wiadomością. W dniu poprzedzającym wizytę klient dostaje sms z przypomnieniem o wizycie.
    
    W wersji 2.0 automatyczny sms z info o rezerwacji złożonej przez klienta przyjdzie również na wybrany numer zakładu i/lub mail.
  Wersja 3.0 zakłada dodawanie wizyt do stworzonego dla strony kalendarza (punkt 5) wyświetlającego wizyty.
 
 
 5 - Kalendarz:
  
  a) Dodawane są automatycznie wizyty zarezerwowane poprzez formularz (punkt 4).
  
  b) Możliwość dodawanie wizyt "ręcznie" przez pracownika:
   
    I. Dodawnie terminu oraz zestawu usłgu dla wizyty
    
    II. Dodanie danych klienta - imię oraz numer telefonu (wymagane)
   
    III. Wysłanie sms z potwierdzeniem rezerwacji oraz sms przypominającego do klienta dodanego ręcznie (z możliwością zaniechania wysłania sms).
  
  c) Usuwanie/Anulowanie wizyt:
    
    I. Sms z informacją do klient, że jego wizyta została anulowana.
  
  d) Zatweirdzanie po wykonaniu usługi.
  
  e) zmiana pracownika który wykona usługę - sms z informacją dla klienta o zmianie pracownika (z możliwością zaniechania wysłania sms).
  
  f) Opcja "urlopu" - zablokowanie możliwości rezerwacji wizyt u konkretnego pracownika (godzinowe lub całe dni). Po zablokowaniu w formularzu (punkt 4) 
                      nie będzie możliwości zarezerwowania usługi u trgo pracownika w wybranym terminie.
 


 6 - Panel obsługi:
 
  a) Dostęp po zalogowaniu
  
  b) Zarządzenie kalendarzem (punkt 5)
  
  c) Dodawanie/usuwanie/modyfikacja treści:
  
    I. Pracownik:
    
      - Zdjęcie duże
      
      - Zdjęcie miniaturka
      
      - Opis krótki
      
      - Opis długi
      
      - Imię
      
      - Lista wykonywanych usług
      
    II. Cennik - cena i czas konkretnych usług
    
    III. Dane adresowe, mapa
    
  d) Statystyki - z podziałem na pracownika lub cały salon:
  
    I. Ilość złożonych/anulowanych rezerwacji
    
    II. Ilość obsługożych klientów
    
    III. Przychody
    
    IV. Źródła ruchu
    
  
