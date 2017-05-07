package thomas.nill.testdaten;

public class ZahlCreator extends NummernBereichCreator {
    int länge = 10;
    
    public ZahlCreator(int länge) {
        super(9);    
        this.länge = länge;
    }

    
    @Override
    public String generateNewFieldValue() {
        StringBuilder builder = new StringBuilder(länge);
        for(int i=0;i<länge;i++) {
            builder.append(zufälligeZahlBisZurGrenze());
        }
        return builder.toString();
    }
}
