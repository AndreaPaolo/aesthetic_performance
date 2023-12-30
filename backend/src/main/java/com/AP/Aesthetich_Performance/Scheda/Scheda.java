package com.AP.Aesthetich_Performance.Scheda;

import java.util.Collection;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLRestriction;

import com.AP.Aesthetich_Performance.Esercizio.Esercizio;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
@SQLDelete(sql="UPDATE scheda SET deleted = true WHERE id = ?") //Soft deleting
@SQLRestriction("deleted = false") //Ignora quelle eliminate
public class Scheda {
    private @Id @GeneratedValue Long id;
    private String nome;
    private String descrizione;

    @JsonIgnore
    private boolean deleted = Boolean.FALSE;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
        name = "scheda_esercizio",
        joinColumns = @JoinColumn(name = "scheda_id"),
        inverseJoinColumns = @JoinColumn(name = "esercizio_id")
    )
    private Collection<Esercizio> esercizi;
}
