# Struttura
- Scheda
- Esercizio
- Progressione
- Programmazione

### Scheda
<details>
 <summary>
   <code>Database</code></summary>
    ##### Schema
    > | id | nome          | deleted |
    > | -- | ------------- | ------- |
    > | 1  | Stanza/Locale |    0    |
    > | 2  | Palloncini    |    1    |
    > | 3  | Accessori     |    0    |
</details>
<details>
  <summary>
    <code>GET</code> 
    <code><b>/user/scheda/id_utente</b></code> 
    <code>(Restituisce tutte le schede dell'utente)</code>
  </summary>
  ##### Parametri
  > id_utente
  ##### Risposta
  > | http code     | content-type                      | response                                                            |
  > |---------------|-----------------------------------|---------------------------------------------------------------------|
  > | `200`         | `application/json`                | Lista  schede                                                       |
  > | `403`         | `application/json`                | Non autorizzato                                                     |
  > | `404`         | `application/json`                | Nessuna scheda trovata o assegnata                                  |
</details>
<details>
  <summary>
    <code>POST</code> 
    <code><b>/admin/scheda/</b></code> 
    <code>(Restituisce tutte le schede dell'utente)</code>
  </summary>
  ##### Parametri
  > id_utente
  ##### Risposta
  > | http code     | content-type                      | response                                                            |
  > |---------------|-----------------------------------|---------------------------------------------------------------------|
  > | `200`         | `application/json`                | Lista  schede                                                       |
  > | `403`         | `application/json`                | Non autorizzato                                                     |
  > | `404`         | `application/json`                | Nessuna scheda trovata o assegnata                                  |
</details>


### Utente
|id|nome|cognome|

### Ruolo
|id|descrizione|

### Corso
|id|nome|descrizione|eliminato|

### Lezione
|id|id_lezione|nome|descrizione|




### Todo List:


### Richieste dei trainer:
