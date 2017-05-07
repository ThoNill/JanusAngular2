package thomas.nill.testdaten;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class TestObjectCreator {
    HashMap<String,TestFieldCreator> feldAuswahl = new HashMap<>();
    List<String> feldnamen = new ArrayList<>();

    public TestObjectCreator() {
        // TODO Auto-generated constructor stub
    }

    public void addFieldCreator(String kürzel,TestFieldCreator creator) {
        feldAuswahl.put(kürzel, creator);
    }
    
    public void addFieldName(String name) {
        feldnamen.add(name);
    }
    
    public HashMap createTestObject() {
        HashMap<String,String> obj = new HashMap<>();
        for( String name : feldnamen) {
            String kürzel = berechneKürzel(name);
            if (kürzel != null) {
                TestFieldCreator creator = feldAuswahl.get(kürzel);
                if (creator != null) {
                    obj.put(name, creator.generateNewFieldValue());
                }
            }
        }
        return obj;
    }

    private String berechneKürzel(String name) {
        if (name.length()<1) {
            return "";
        }
        return name.substring(0, 1);
    }
    
    public List<HashMap<String,String>> createTestObjectListe(int anzahl) {
        List<HashMap<String,String>> liste = new ArrayList<>();
        while(anzahl > 0) {
            anzahl--;
            HashMap<String,String> map = createTestObject();
            liste.add(map);
        }
        return liste;
    }
    
    public List<HashMap<String,String>> createZufälligeTestObjectListe() {
         return createTestObjectListe((int)(Math.random() * 100));
    }
    
}
