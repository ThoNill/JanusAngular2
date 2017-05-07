package thomas.nill.testdaten;

public class ZeitCreator extends DatumCreator{
    NummernBereichCreator stundenGenerator = new NummernBereichCreator(23);
    NummernBereichCreator minutenGenerator = new NummernBereichCreator(59);
    
    public ZeitCreator() {
       super();
    }

    @Override
    public String generateNewFieldValue() {
        String datum = super.generateNewFieldValue();
        int stunde = stundenGenerator.zufälligeZahlBisZurGrenze();
        int minute = minutenGenerator.zufälligeZahlBisZurGrenze();
               
        return String.format("%s %02d:%02d",datum,stunde,minute);
    }

}
