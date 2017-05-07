package thomas.nill.testdaten;

public class StringListeCreator extends NummernBereichCreator {
    String texte[];
    
    public StringListeCreator(String[] texte) {
        super(texte.length-1);
        this.texte = texte;
    }
   
    public StringListeCreator(String texte) {
        this(texte.split("[\\,]+"));
    }
   
   
    @Override
    public String generateNewFieldValue() {
        return texte[zufälligeZahlBisZurGrenze()];
    }

}
