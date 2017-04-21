package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Consumable;

@Transactional
@Repository
public class ConsumableDAOImpl implements ConsumableDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<Consumable> index() {
		String query = "Select c from Consumable c";
		return em.createQuery(query, Consumable.class).getResultList();
	}
	
	@Override
	public Consumable show(int id) {
		return em.find(Consumable.class, id);
	}

	@Override
	public Consumable create(Consumable newCon) {
		em.persist(newCon);
		em.flush();
		return newCon;
	}

	@Override
	public Consumable update(int id, Consumable con) {
		Consumable conManaged = em.find(Consumable.class, id);
		conManaged.setName(con.getName());
		conManaged.setDescription(con.getDescription());
		conManaged.setCost(con.getCost());
		conManaged.setContact(con.getContact());
		conManaged.setProductNum(con.getProductNum());
		return conManaged;
	}

	@Override
	public boolean destroy(int id) {
		Consumable conManaged = em.find(Consumable.class, id);
		em.remove(conManaged);
		return em.contains(conManaged);
	}

	@Override
	public List<Consumable> indexProductNum(String pn) {
		String query = "Select c from Consumable c where c.productNum = :pn";
		return em.createQuery(query, Consumable.class).setParameter("pn", pn).getResultList();
	}

}
