package thomas.nill.testdaten;

public class StraßenCreator implements TestFieldCreator{
    NummernBereichCreator hausNummerGenerator = new NummernBereichCreator(50);
    StringListeCreator straßenNamenGenerator = new StringListeCreator("Mörikeweg,Schillerstraße,Wagnerallee,Goethestraße,Beethovenweg,Mozartgasse");
    
    public StraßenCreator() {
       
    }

    @Override
    public String generateNewFieldValue() {
        int hausNummer = hausNummerGenerator.zufälligeZahlBisZurGrenze();
        String straßenName = straßenNamenGenerator.generateNewFieldValue();
        
        return String.format("%s %2d",straßenName, hausNummer);
    }

}
