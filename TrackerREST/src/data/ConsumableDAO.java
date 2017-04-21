package data;

import java.util.List;

import entities.Consumable;

public interface ConsumableDAO {
	
	public List<Consumable> index();

	public Consumable show(int id);
	
	public Consumable create(Consumable con);
	
	public Consumable update(int id, Consumable con);
	
	public boolean destroy(int id);
	
	public List<Consumable> indexProductNum(String productNum);
	
}
