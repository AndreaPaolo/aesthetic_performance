package com.AP.Aesthetich_Performance.Progressione;

import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface ProgressioneRepository extends CrudRepository<Progressione, Long>{
    List<Progressione> findBySchedaid(Long schedaid);
}
