package com.AP.Aesthetich_Performance.Esercizio;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class EsercizioController {
    private final EsercizioRepository esercizioRepository;

    EsercizioController(EsercizioRepository esercizioRepository){
        this.esercizioRepository = esercizioRepository;
    }

    @GetMapping("/api/esercizio")
    Iterable<Esercizio> getEsercizio(){
        return this.esercizioRepository.findAll();
    }
    
    @PostMapping("/api/esercizio")
    Esercizio createEsercizio(@RequestBody Esercizio newEsercizio){
        return this.esercizioRepository.save(newEsercizio);
    }

    @PutMapping("/api/esercizio/{esercizio_id}")
    Esercizio updateEsercizio(@PathVariable Long esercizio_id, @RequestBody Esercizio updatedEsercizio){
        Esercizio esercizio = this.esercizioRepository.findById(esercizio_id).orElseThrow();
        esercizio.setNome(updatedEsercizio.getNome());
        esercizio.setDescrizione(updatedEsercizio.getDescrizione());
        return this.esercizioRepository.save(esercizio);
    }

    @DeleteMapping("/api/esercizio/{esercizio_id}")
    void deleteEsercizio(@PathVariable Long esercizio_id){
         Esercizio esercizio = this.esercizioRepository.findById(esercizio_id).orElseThrow();
        this.esercizioRepository.delete(esercizio);
    }
    
}
