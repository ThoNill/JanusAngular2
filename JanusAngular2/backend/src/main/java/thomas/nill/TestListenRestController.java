/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package thomas.nill;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Collection;
import java.util.HashMap;

import thomas.nill.testdaten.TestObjectCreator;
import thomas.nill.testdaten.TextFeldCreator;
import thomas.nill.testdaten.NachnamenCreator;
import thomas.nill.testdaten.VornamenCreator;
import thomas.nill.testdaten.OrtCreator;
import thomas.nill.testdaten.DatumCreator;
import thomas.nill.testdaten.NummernBereichCreator;
import thomas.nill.testdaten.StraßenCreator;
import thomas.nill.testdaten.ZeitCreator;
import thomas.nill.testdaten.EMailCreator;
import thomas.nill.testdaten.TelefonCreator;
import thomas.nill.testdaten.IdCreator;


/**
 * @author Josh Long
 */
// tag::code[]
@RestController
@RequestMapping("/api/{userId}/testlisten")
class TestListenRestController {

    private final AccountRepository accountRepository;
    
	@Autowired
	TestListenRestController(AccountRepository accountRepository) {
	    this.accountRepository = accountRepository;
	}

	@RequestMapping(method = RequestMethod.GET)
	Collection<HashMap<String,String>> readBookmarks(@PathVariable String userId,@RequestParam("feldliste") String feldliste ) {
		this.validateUser(userId);
		
		TestObjectCreator creator = new TestObjectCreator();
		
		creator.addFieldCreator("x",new TextFeldCreator());
		creator.addFieldCreator("n",new NachnamenCreator());
		creator.addFieldCreator("v",new VornamenCreator());
		creator.addFieldCreator("o",new OrtCreator());
		creator.addFieldCreator("d",new DatumCreator());
		creator.addFieldCreator("a",new NummernBereichCreator(9));
		creator.addFieldCreator("s",new StraßenCreator());
		creator.addFieldCreator("z",new ZeitCreator());
		creator.addFieldCreator("e",new EMailCreator());
		creator.addFieldCreator("t",new TelefonCreator());
		creator.addFieldCreator("i",new IdCreator(1000));
		
		if (feldliste != null && !"".equals(feldliste.trim())) {
		    String felder[] = feldliste.split("[ \\,]+");
		    for(String feldname : felder) {
		        creator.addFieldName(feldname);
		    }
		} else {
		    creator.addFieldName("xname");
		    creator.addFieldName("xtext");
		}
		
		return creator.createZufälligeTestObjectListe();
	}

	private void validateUser(String userId) {
		this.accountRepository.findByUsername(userId).orElseThrow(
				() -> new UserNotFoundException(userId));
	}
}
// end::code[]
