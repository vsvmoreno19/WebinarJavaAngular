package io.javabrains.springbootstarter.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.javabrains.springbootstarter.repositories.TopicRepository;
import io.javabrains.springbootstarter.utils.Topic;

@Service
public class TopicService {
	
	@Autowired
	private TopicRepository topicRepository;
	
	/*
	 * private List<Topic> topics = new ArrayList<>(Arrays.asList( new
	 * Topic("spring","Spring Framework", "Spring Framework Description"), new
	 * Topic("java","Java", "Java Description"), new
	 * Topic("javascript","JavaScript", "JavaScript Description") ));
	 */
	
	public List<Topic> getAllTopics(){
		//return topics;
		List<Topic> course = new ArrayList<>();
		topicRepository.findAll().forEach(course::add);
		return course;
	}
	
	public Topic getTopic(String id){
		//return topics.stream().filter(t -> t.getId().equals(id)).findFirst().get();
		return topicRepository.findById(id).get();
	}

	public Topic addTopic(Topic topic) {
		//topics.add(topic);
		// return topicRepository.save(topic);
		Topic to = new Topic();
		to = topicRepository.save(topic);
		if(to != null ) {
			to.setMessage("works");
			return to;
		}
		return to;
	}

	public void updateTopic(Topic topic, String id) {
		topicRepository.save(topic);
	}

	public void deleteTopic(String id) {
		topicRepository.deleteById(id);
	}
}
