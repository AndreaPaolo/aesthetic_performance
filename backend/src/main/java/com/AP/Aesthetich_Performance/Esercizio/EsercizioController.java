package com.AP.Aesthetich_Performance.Esercizio;

import org.springframework.web.bind.annotation.RestController;

import com.AP.Aesthetich_Performance.Scheda.Scheda;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EsercizioController {
    private final EsercizioRepository esercizioRepository;

    EsercizioController(EsercizioRepository esercizioRepository){
        this.esercizioRepository = esercizioRepository;
    }

    @GetMapping("/api/esercizio")
    Iterable<Esercizio> getEsercizio(){
        return this.esercizioRepository.findAll();
    }

    @GetMapping("/api/esercizio/{esercizio_id}")
    Esercizio getSchedaByIdScheda(@PathVariable Long esercizio_id){
        return this.esercizioRepository.findById(esercizio_id).orElseThrow();
    }
    
    @PostMapping("/api/esercizio")
    Esercizio createEsercizio(@RequestBody Esercizio newEsercizio){
        System.out.println(newEsercizio);
        return this.esercizioRepository.save(newEsercizio);
    }

    @PutMapping("/api/esercizio/{esercizio_id}")
    Esercizio updateEsercizio(@PathVariable Long esercizio_id, @RequestBody Esercizio updatedEsercizio){
        Esercizio esercizio = this.esercizioRepository.findById(esercizio_id).orElseThrow();
        esercizio.setNome(updatedEsercizio.getNome());
        esercizio.setDescrizione(updatedEsercizio.getDescrizione());
        esercizio.setVideo(updatedEsercizio.getVideo());
        return this.esercizioRepository.save(esercizio);
    }

    @DeleteMapping("/api/esercizio/{esercizio_id}")
    void deleteEsercizio(@PathVariable Long esercizio_id){
        Esercizio esercizio = this.esercizioRepository.findById(esercizio_id).orElseThrow();
        this.esercizioRepository.delete(esercizio);
    }
}
