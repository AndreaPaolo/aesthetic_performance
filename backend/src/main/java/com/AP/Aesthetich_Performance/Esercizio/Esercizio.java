package com.AP.Aesthetich_Performance.Esercizio;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

/**
 * Esercizio
 */
@Data
@Entity
public class Esercizio {
    private @Id @GeneratedValue Long id;
    private String nome;
    private String descrizione;
    private String video;
    private boolean deleted = Boolean.FALSE;

    public Esercizio() {
    }


    public Esercizio(Long id, String nome, String descrizione, String video, boolean deleted) {
        this.id = id;
        this.nome = nome;
        this.descrizione = descrizione;
        this.video = video;
        this.deleted = deleted;
    }

}
