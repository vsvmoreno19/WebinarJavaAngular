package io.javabrains.springbootstarter.repositories;

import org.springframework.data.repository.CrudRepository;
import io.javabrains.springbootstarter.utils.Topic;

public interface TopicRepository extends CrudRepository<Topic,String> {
	
	//public String findByName(String name);
	//public query
}
