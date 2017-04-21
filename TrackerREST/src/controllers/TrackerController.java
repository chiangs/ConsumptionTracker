package controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.ConsumableDAO;
import entities.Consumable;

@RestController
public class TrackerController {

	@Autowired
	private ConsumableDAO condao;

	@RequestMapping(path = "ping", method = RequestMethod.GET)
	public String ping() {
		return "PONG!";
	}

	@RequestMapping(path = "consumables", method = RequestMethod.GET)
	public List<Consumable> index(HttpServletRequest request, HttpServletResponse response) {
		response.setStatus(200);
		return condao.index();
	}
	
	@RequestMapping(path = "consumables/{id}", method = RequestMethod.GET)
	public Consumable show(HttpServletRequest request, HttpServletResponse response, @PathVariable int id) {
		response.setStatus(200);
		return condao.show(id);
	}
	
	@RequestMapping(path = "consumables", method = RequestMethod.POST)
	public Consumable create(HttpServletRequest request, HttpServletResponse response, @RequestBody String jsonQuiz) {
		ObjectMapper mapper = new ObjectMapper();

		try {
			Consumable newCon = mapper.readValue(jsonQuiz, Consumable.class);
			response.setStatus(201);
			return condao.create(newCon);
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			return null;
		}
	}
	
	@RequestMapping(path = "consumables/{id}", method = RequestMethod.PUT)
	public Consumable update(HttpServletRequest request, HttpServletResponse response, @PathVariable int id, @RequestBody String jsonQuiz) {
		ObjectMapper mapper = new ObjectMapper();

		try {
			Consumable updateQuiz = mapper.readValue(jsonQuiz, Consumable.class);
			response.setStatus(202);
			return condao.update(id, updateQuiz);
		} catch (Exception e) {
			response.setStatus(400);
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(path = "consumables/{id}", method = RequestMethod.DELETE)
	public boolean destroy(HttpServletRequest request, HttpServletResponse response, @PathVariable int id) {
		response.setStatus(202);
		return condao.destroy(id);
	}
	
	@RequestMapping(path = "consumables/product/{pn}", method = RequestMethod.GET)
	public List<Consumable> productNumIndex(HttpServletRequest request, HttpServletResponse response, @PathVariable String pn) {
		response.setStatus(200);
		return condao.indexProductNum(pn);
	}
	
	
}
