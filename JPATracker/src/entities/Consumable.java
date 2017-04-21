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
	
	//gets-sets

	public String getName() {
		return name;
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

	public String getProdNum() {
		return productNum;
	}

	public void setProdNum(String prodNum) {
		this.productNum = prodNum;
	}

	public int getId() {
		return id;
	}
	
	//toString

	@Override
	public String toString() {
		return "Consumable [name=" + name + ", description=" + description + ", cost=" + cost + ", contact=" + contact
				+ ", prodNum=" + productNum + "]";
	}
}
