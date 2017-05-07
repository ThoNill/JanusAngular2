package thomas.nill.testdaten;

public class IdCreator implements TestFieldCreator {
    int id;
    
    public IdCreator(int start) {
       this.id = start;
    }
    
    @Override
    public String generateNewFieldValue() {
        return Integer.toString(id++);
     }

}
