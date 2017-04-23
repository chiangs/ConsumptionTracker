package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Consumable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String description;
	
	private double cost;
	
	private String contact;
	
	private String productNum;
	
	private String category;
	
	//gets-sets

	public String getName() {
		return name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getProductNum() {
		return productNum;
	}

	public void setProductNum(String prodNum) {
		this.productNum = prodNum;
	}

	public int getId() {
		return id;
	}

	//toString
	@Override
	public String toString() {
		return "Consumable [id=" + id + ", name=" + name + ", description=" + description + ", cost=" + cost
				+ ", contact=" + contact + ", productNum=" + productNum + ", category=" + category + "]";
	}
	


}
