package thomas.nill.testdaten;

public class NummernBereichCreator implements TestFieldCreator {
    int grenze = 10;
    
    public NummernBereichCreator(int grenze) {
        if (grenze<=0) {
            throw new IllegalArgumentException("Grenze sollte > 0 sein");
        }
        this.grenze = grenze;
    }
    
    protected int zufälligeZahlBisZurGrenze() {
        int n = (int)(Math.random() * (grenze+1));
        return (n > grenze) ? grenze : n;
    }

    @Override
    public String generateNewFieldValue() {
        return Integer.toString(zufälligeZahlBisZurGrenze());
     }

}
