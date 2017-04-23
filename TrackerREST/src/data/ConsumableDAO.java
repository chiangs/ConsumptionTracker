package data;

import java.util.List;

import javax.persistence.TypedQuery;

import entities.Consumable;

public interface ConsumableDAO {
	
	public List<Consumable> index();

	public Consumable show(int id);
	
	public Consumable create(Consumable con);
	
	public Consumable update(int id, Consumable con);
	
	public boolean destroy(int id);
	
	public List<Consumable> sortId();
	
	public List<Consumable> sortName();
	
	public List<Consumable> sortNum();
	
	public List<Consumable> sortDesc();
	
	public List<Consumable> sortCost();

	public List<Consumable> sortCat();

}
