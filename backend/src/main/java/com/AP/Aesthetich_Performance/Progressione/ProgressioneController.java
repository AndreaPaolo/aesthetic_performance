package com.AP.Aesthetich_Performance.Progressione;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProgressioneController {
    private final ProgressioneRepository progressioneRepository;

    public ProgressioneController(ProgressioneRepository progressioneRepository) {
        this.progressioneRepository = progressioneRepository;
    }
    
    @GetMapping("/api/progressione")
    Iterable<Progressione> getProgressione(){
        return this.progressioneRepository.findAll();
    }

    @GetMapping("/api/progressione/schedaid/{scheda_id}")
    List<Progressione> getProgressioneByScheda_id(@PathVariable Long scheda_id){
        return this.progressioneRepository.findBySchedaid(scheda_id);
    }
    
    @PostMapping("/api/progressione")
    Progressione createProgressione(@RequestBody Progressione newProgressione){
        return this.progressioneRepository.save(newProgressione);
    }

    @PutMapping("/api/progressione/{progressione_id}")
    Progressione updateProgressione(@PathVariable Long progressione_id, @RequestBody Progressione updatedProgressione){
        Progressione progressione = this.progressioneRepository.findById(progressione_id).orElseThrow();
        progressione.setSerie(updatedProgressione.getSerie());
        progressione.setRipetizioni(updatedProgressione.getRipetizioni());
        progressione.setRpe(updatedProgressione.getRpe());
        progressione.setRecupero(updatedProgressione.getRecupero());
        progressione.setNote(updatedProgressione.getNote());
        progressione.setEsercizioid(updatedProgressione.getEsercizioid());
        return this.progressioneRepository.save(progressione);
    }

    @DeleteMapping("/api/progressione/{progressione_id}")
    void deleteEsercizio(@PathVariable Long progressione_id){
        Progressione progressione = this.progressioneRepository.findById(progressione_id).orElseThrow();
        this.progressioneRepository.delete(progressione);
    }
}
