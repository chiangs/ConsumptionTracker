import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import entities.Consumable;

public class ConsumableTest {
	private EntityManagerFactory emf;
	private EntityManager em;
	private Consumable con;
	
	@Before
	public void setup() throws Exception {
		emf = Persistence.createEntityManagerFactory("Tracker");
		em = emf.createEntityManager();
		con = em.find(Consumable.class, 1);
		
	}
	
	@After
	public void tearDown() throws Exception {
		em.close();
		emf.close();
	}

	@Test
	public void test() {
	  boolean pass = true;
	  assertEquals(pass, true);
	}
	
	@Test
	public void test_Consumable_has_consumables() {
		assertEquals("water", con.getName());
	}
	
}
