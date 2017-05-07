package thomas.nill.testdaten;

public class TelefonCreator implements TestFieldCreator{
    ZahlCreator vorwahlCreator = new ZahlCreator(4);
    ZahlCreator telefonCreator = new ZahlCreator(7);
    
    public TelefonCreator() {
    }
    
    public String generateNewFieldValue() {
        return String.format("%s-%s", vorwahlCreator.generateNewFieldValue(),telefonCreator.generateNewFieldValue());
     }


}
