package com.AP.Aesthetich_Performance.Scheda;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class Scheda {
    private @Id @GeneratedValue Long id;
    private String nome;
    private String descrizione;
    private boolean deleted = Boolean.FALSE;
}
