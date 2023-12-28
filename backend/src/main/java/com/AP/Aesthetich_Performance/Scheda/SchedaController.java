package com.AP.Aesthetich_Performance.Scheda;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class SchedaController {
    private final SchedaRepository schedaRepository;

    public SchedaController(SchedaRepository schedaRepository) {
        this.schedaRepository = schedaRepository;
    }

    @GetMapping("/api/scheda")
    Iterable<Scheda> getSchede(){
        return this.schedaRepository.findAll();
    }
    
    @PostMapping("/api/scheda")
    Scheda createScheda(@RequestBody Scheda newScheda){
        return this.schedaRepository.save(newScheda);
    }

    @PutMapping("/api/scheda/{scheda_id}")
    Scheda updateScheda(@PathVariable Long scheda_id, @RequestBody Scheda updatedScheda){
        Scheda scheda = this.schedaRepository.findById(scheda_id).orElseThrow();
        scheda.setNome(updatedScheda.getNome());
        scheda.setDescrizione(updatedScheda.getDescrizione());
        return this.schedaRepository.save(scheda);
    }

    @DeleteMapping("/api/scheda/{scheda_id}")
    void deleteScheda(@PathVariable Long scheda_id){
        Scheda scheda = this.schedaRepository.findById(scheda_id).orElseThrow();
        this.schedaRepository.delete(scheda);
    }
}
