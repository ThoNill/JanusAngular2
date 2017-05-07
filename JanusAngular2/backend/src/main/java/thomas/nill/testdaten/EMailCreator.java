package thomas.nill.testdaten;

public class EMailCreator implements TestFieldCreator{
    NummernBereichCreator hausNummerGenerator = new NummernBereichCreator(50);
    StringListeCreator providerGenerator = new StringListeCreator("t-online.de,gmx.de,web.de,hotmail.de,yahoo.de");
    StringListeCreator vornamenGenerator = new VornamenCreator();
    StringListeCreator nachnamenGenerator = new NachnamenCreator();
    
    public EMailCreator() {
       
    }

    @Override
    public String generateNewFieldValue() {
        String vornamenKürzel = vornamenGenerator.generateNewFieldValue().substring(0,1);
        String nachname = nachnamenGenerator.generateNewFieldValue();
        String provider = providerGenerator.generateNewFieldValue();
        String email = String.format("%s.%s@%s",vornamenKürzel,nachname,provider);
        return email.toLowerCase();
    }

}
