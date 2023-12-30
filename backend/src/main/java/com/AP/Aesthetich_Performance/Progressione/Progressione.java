package com.AP.Aesthetich_Performance.Progressione;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.annotation.Nullable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

/**
 * Progressione
 */
@Data
@Entity
@SQLDelete(sql="UPDATE progressione SET deleted = true WHERE id = ?") //Soft deleting
@SQLRestriction("deleted = false") //Ignora quelle eliminate
public class Progressione {
    private @Id @GeneratedValue Long id;
    private int serie;
    private int ripetizioni;
    private float rpe;
    private float carico;
    private int recupero;
    private String note;

    @Nullable @Column(name = "scheda_id")
    private Long schedaid;
    //@Nullable    
    private Long esercizioid;

    @JsonIgnore
    private boolean deleted = Boolean.FALSE;


    public Progressione() {
    }


    public Progressione(Long id, int serie, int ripetizioni, float rpe, float carico, int recupero, String note, Long scheda_id, Long esercizio_id, boolean deleted) {
        this.id = id;
        this.serie = serie;
        this.ripetizioni = ripetizioni;
        this.rpe = rpe;
        this.carico = carico;
        this.recupero = recupero;
        this.note = note;
        this.schedaid = scheda_id;
        this.esercizioid = esercizio_id;
        this.deleted = deleted;
    }
    
}