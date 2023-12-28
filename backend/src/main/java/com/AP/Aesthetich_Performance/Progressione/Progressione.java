package com.AP.Aesthetich_Performance.Progressione;

import com.AP.Aesthetich_Performance.Esercizio.Esercizio;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

/**
 * Progressione
 */
@Data
@Entity
public class Progressione {
    private @Id @GeneratedValue Long id;
    private int serie;
    private int ripetizioni;
    private float rpe;
    private float carico;
    private int recupero;
    private String note;

    //@OneToMany
    //@JoinColumn(name="esercizio_id")
    //private Esercizio esercizio;

    public Progressione() {
    }

    public Progressione(Long id, int serie, int ripetizioni, float rpe, float carico, int recupero, String note) {
        this.id = id;
        this.serie = serie;
        this.ripetizioni = ripetizioni;
        this.rpe = rpe;
        this.carico = carico;
        this.recupero = recupero;
        this.note = note;
    }

}