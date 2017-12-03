package tn.enis.devfest.controllers;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import tn.enis.devfest.entitites.GenericEntity;

@Service
public abstract class CrudController<T extends GenericEntity<V>, V extends Serializable> {

	protected abstract JpaRepository<T, V> getRepository();

	@RequestMapping(value = "", method = RequestMethod.GET)
	@ResponseBody
	public List<T> listEntity() {
		return getRepository().findAll();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	@ResponseBody
	public T getEntity(@PathVariable(name = "id") V id) {
		return getRepository().findOne(id);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.POST)
	@ResponseBody
	public T updateEntity(@RequestBody T entity, @PathVariable(name = "id") V id){
		return getRepository().save(entity);
	}

	@RequestMapping(value = "", method = RequestMethod.PUT)
	@ResponseBody
	public T addEntity(@RequestBody T entity) {
		return getRepository().save(entity);
	}

	@RequestMapping(value = "", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteEntity(@RequestBody T entity) {
		
		getRepository().delete(entity);
	}
}
