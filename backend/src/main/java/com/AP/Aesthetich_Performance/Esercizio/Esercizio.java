package com.AP.Aesthetich_Performance.Esercizio;


import java.util.Collection;

import org.hibernate.annotations.SQLDelete;

import com.AP.Aesthetich_Performance.Scheda.Scheda;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
@SQLDelete(sql="UPDATE esercizio SET deleted = true WHERE id = ?") //Soft deleting
public class Esercizio {
    private @Id @GeneratedValue Long id;
    private String nome;
    private String descrizione;
    private String video;
    
    @JsonIgnore
    private boolean deleted = Boolean.FALSE;

    @JsonIgnore
    @ManyToMany(mappedBy = "esercizi")
    private Collection<Scheda> schede;

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
