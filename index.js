const wordsList = [
    {
      word : "सिंहो", 
      meaning : "Lion",
      synonyms: ["सिंह (पु) - siṃha ", "मृगेन्द्र (पु) - mṛgendra", "पञ्चास्य (पु) - pañcāsya", "हर्यक्ष (पु) - haryakṣa", "केसरिन् (पु) - kesarin", "हरि (पु) - hari",
                 "कण्टीरव (पु) - kaṇṭhīrava", "मृगरिपु (पु) - mṛgaripu", "मृगदृष्टि (पु) - mṛgadṛṣṭi", "मृगाशन (पु) - mṛgāśana", "पुण्डरीक (पु) - puṇḍarīka",
                  "पञ्चनख (पु) - pañcanakha", "चित्रकाय (पु) - nakhacitrakāya", "मृगद्विष्  (पु) - mṛgadviṣ",],
      image: "lion.jpeg"
    },

    {
      word : "शार्दूल",
      meaning : "Tiger",
      synonyms: ["शार्दूल (पु) - śārdūla", "द्वीपिन् (पु) - dvīpin", "व्याघ्र (पु) - vyāghra"],
      image: "tiger.jpeg"
    },

    {
        word: "तरक्षु",
        meaning: "Hyena",
        synonyms: ["तरक्षु (पु) - tarakṣu", "मृगादन (पु) - mṛgādana "  ],
        image: "hyena.jpeg"
    },
      
    {
      word: "वराहः",
      meaning: "Boar",  
      synonyms: ["वराह (पु) - varāha", "सूकर (पु) - sūkara", "घृष्टि (पु) - ghṛṣṭi", "कोल (पु) - kola", "पोत्रिन् (पु) - potrin", "किरि (पु) - kiri", "किटि (पु) - kiṭi",
                 "दंष्ट्रिन्  (पु) - daṃṣṭin", "घोणिन्  (पु) - ghoṇin", "स्तब्धरोमन्  (पु) - stabdharoman", "क्रोड (पु) - kroḍa", "भूदार (पु) - bhūdāra"  ],
      image: "boar.jpeg"
    },

    {
      word: "कपि",
      meaning: "Monkey",
      synonyms: ["कपि (पु) - kapi", "प्लवङ्ग (पु) - plavaṅga", "प्लवग (पु) - plavaga", "शाखामृग (पु) - śākhāmṛga", "वलीमुख  (पु) - valīmukha ",  "मर्कट (पुं) -  markaṭa ", 
                  "वानर (पुं)- vānara ", "कीश(पुं) - kīśa ", "वनौकस् (पुं)- vanaukas "],
      image: "monkey.jpg"
    },

    {
      word: "भल्लुके",
      meaning: "Bear",
      synonyms: ["भल्लुक (पु) - bhalluka", "ऋक्ष (पु) - ṛkṣa", "अच्छभल्ल (पु) - acchabhalla", "भल्लूक (पु) - bhallūka"],
      image: "bear.jpg"
    },

    {
      word: "गण्डके",
      meaning: "Rhinoceros",
      synonyms: ["गण्डक (पु) - gaṇḍaka", "खड्ग (पु) - khaḍga", "खड्गिन् (पु) - khaḍgin"],
      image: "rhino.jpg"
    },

    {
      word: "महिषो",
      meaning: "Buffalo",
      synonyms: ["लुलाय (पु) - lulāya",  "महिष (पु) - mahiṣa",  " वाहाद्विषत् (पु) - vāhādviṣat", "कासर (पु) - kāsara", "सैरिभ (पु) - sairibha"],
      image: "buffalo.jpeg"
    },

    {
      word: "शृगाल",
      meaning: "Jackal",
      synonyms: ["शिवा (स्त्री)- śivā", "भूरिमाय (पुं) - bhūrimāya", "गोमायु (पुं) - gomāyu", "मृगधूर्तक (पुं) - mṛgadhūrtaka","शृगाल (पु) - śṛgāla", "वञ्चक (पु) - vañcaka", "क्रोष्टु (पु) - kroṣṭu", "फेरु (पु) - pheru", "फेरव (पु) - pherava", "जम्बुक (पु) - jambuka"],
      image: "jackal.jpeg"
    },

    {
      word: "मार्जारो",
      meaning: "Cat",
      synonyms: ["ओतु (पु) - otu", "बिडाल (पु) - biḍāla",  "मार्जार (पु) - mārjāra", "वृषदंशक (पु)- vṛṣadaṃśaka", " आखुभुज् (पु) -  ākhubhuj"  ],
      image: "cat.jpg"
    },

    {
      word:  "गौधेर",
      meaning: "Iguana",
      synonyms: ["गौधेर (पुं)- gaudhera", "गौधार (पुं) - gaudhāra",  "गौधेय (पुं) - gaudheya", "गोधिकात्मज (पुं) - godhikātmaja"],
      image: "iguana.jpeg"
    },

    {
      word: "श्वावित्",
      meaning: "Porcupine",
      synonyms: [" श्वाविध् (पुं) - śvāvidh", "शल्य (पुं) - śalya"],
      image: "porcupine.jpg"
    },
    
    {
      word: "शलली",
      meaning: "Quill of Porcupine",
      synonyms: ["शलली (स्त्री) - śalalī", "शलल (न) - śalala", "शल (न) - śala"],
      image: "quillPorcupine.webp"
    },

    {
      word:"वातप्रमी",
      meaning: "Antelope",
      synonyms:["वातप्रमी (पुं) - vātapramī", "वातमृग (पुं) - vātamṛga"],
      image: "antelope.jpg"
    },

    {
      word: "कोक",
      meaning: "Wolf",
      synonyms: [ "कोक (पुं) - koka", "ईहामृग (पुं) - īhāmṛga", "वृक (पुं) - vṛka"],
      image: "wolf.jpg"
    },

    {
      word: "मृगे",
      meaning: "Deer",
      synonyms: ["मृग (पुं)- mṛga", "कुरङ्ग (पुं)- kuraṅga", "वातायु (पुं)- vātāyu", "हरिण (पुं)- hariṇa", "अजिनयोनि (पुं)- jinayonaya"],
      image: "deer.jpeg"
    },

    {
      word: "ऐणेय",
      meaning: "Skin and other any products of female antelope एण्याः अजिनादय:",
      synonyms: ["ऐणेय (त्रि)- aiṇeya "],
      image: "antelopeSkinFemale.jpg"
    },

    {
      word: "ऐण",
      meaning: "Skin and other any products of male antelope एणस्य अजिनादय:",
      synonyms: ["ऐण (त्रि)- aiṇa "],
      image: "antelopeSkinMale.jpg"
    },

    {
      word: "अजिनयोनयः",
      meaning: "Types of deers having good skin (अजिनजातीयमृगा:)",
      synonyms:["कदली (स्त्री) - kadalī", "कन्दली (स्त्री) - kandalī", "चीन (पुं) - cīna", "चमूरु (पुं) - camūru", "प्रियक (पुं) - priyaka",  "समूरु (पुं) - samūru"], //actually these are not synonyms
      image: "deerTypes.jpg"
    },

    {
      word: "मृगाः",
      meaning: "Various deers (मृगभेदाः)",
      synonyms: [" कृष्णसार (पुं) - kṛṣṇasāra", "रुरु (पुं) - ruru", "न्यङ्कु (पुं) - nyaṅku", "रङ्कु (पुं) -raṅku", "शम्बर (पुं) - śambara", "रौहिष (पुं) -rauhiṣa",  "गोकर्ण (पुं) -gokarṇa", 
        "पृषत (पुं)- pṛṣata", "एण (पुं) - eṇa", "ऋश्य (पुं) - ṛśya", "रोहित (पुं) - rohita", "चमर (पुं) - camara", "गन्धर्व (पुं) -gandharva", "शरभ (पुं) - śarabha", "राम (पुं) - rāma", 
        "सृमर (पुं) - sṛmara", "गवय (पुं) - gavaya "],
      image: "deerTypes.jpg",
    },

    {
      word: "शशः",
      meaning: "Hare",
      synonyms: ["शश (पुं) - śaśa"],
      image: "hare.jpeg"
    },

    {
      word: "अधोगन्ता",
      meaning: "Mouse or Rat",
      synonyms: ["अधोगन्तृ (पुं) - adhogantṛ", "खनक (पुं) - khanaka", "वृक (पुं) - vṛka", "पुन्ध्वज (पुं) - pundhvaja", "उन्दुर (पुं) - undura", "उन्दुरु (पुं) - unduru", 
          "मूषक (पुं) - mūṣaka", "आखु (पुं)- ākhu "],
      image: "mouse.jpeg"
    },

    {
      word: "बालमूषिका",
      meaning: "Baby Female Rat",
      synonyms: [" गिरिका (स्त्री) - girikā","बालमूषिका (स्त्री) - bālamūṣikā"],
      image: "babyRat.jpg"
    },

    {
      word: "चुचुन्दरी",
      meaning: "Mole which carries smell",
      synonyms: ["चुचुन्दरी (स्त्री) - cucundarī", "गन्धमूषी (स्त्री) - gandhamūṣī"],
      image: "mole.jpg"
    },

    {
      word: "दीर्घदेही",
      meaning: "Big rat",
      synonyms: ["दीर्घदेहिन् (पुं) - dīrghadehī", "मूषिका (स्त्री) - mūṣikā"],
      image: "bigRat.jpeg"
    },

    {
      word: "सरटः",
      meaning: "Chamereon (one which can change its color)",
      synonyms: ["सरट (पुं) - saraṭa", "कृकलास (पुं) - kṛkalāsa"],
      image: "chamereon.jpeg"
    },

    {
      word: "गृहगोधिका",
      meaning: "Home Lizard",
      synonyms: [ "मुसली (स्त्री) - musalī", "गृहगोधिका (स्त्री) - gṛhagodhikā"],
      image: "lizard.jpg"
    },

    {
      word: "लूता",
      meaning: "Spider",
      synonyms: [" लूता (स्त्री) - lūtā",  " तन्तुवाय (पुं)  - tantuvāya", "ऊर्णनाभ (पुं) - ūrṇanābha", "मर्कटक (पुं) - markataka"],
      image: "spider.jpg"
    },

    {
      word: "कृमिः",
      meaning: "Any type of Worm or insect",
      synonyms: ["नीलङ्गु (पुं)  - nīlaṅgu", "कृमि (पुं) - kṛmi"],
      image: "worm.jpg"
    },

    {
      word: "कर्णजलौकाः",
      meaning: "Centipede",
      synonyms: ["कर्णजलौकस्  (स्त्री) - karṇajalauka", "शतपदी (स्त्री) - śatapadī"],
      image: "centipede.webp"
    },

    {
      word: "वृश्चिकः",
      meaning: "An insect which eats spiders and worms",
      synonyms: ["वृश्चिक (पुं) - vṛścika", "शूककीट (पुं) - śūkakīṭa"],
      image: "insect.jpg"
    },

    {
      word: "शूककीटः",
      meaning: "An insect which eats spiders and worms",
      synonyms: ["वृश्चिक (पुं) - vṛścika", "शूककीट (पुं) - śūkakīṭa"],
      image: "insect.jpg"
    },

    {
      word: "वृश्चिके",
      meaning: "Scorpion",
      synonyms: ["वृश्चिक (पुं) - vṛścika"," अलि (पुं) - ali", "द्रुण (पुं) - druṇa"],
      image: "scorpion.jpg"
    },

    {
      word: "पारावतः",
      meaning: "Pigeon",
      synonyms: ["पारावत (पुं) - pārāvata", "कलरव (पुं) - kalarava", "कपोत (पुं) - kapota"],
      image: "pigeon.jpg"
    },

    {
      word: "श्येन",
      meaning: "Falcon",
      synonyms: ["शशादन (पुं) - śaśādana", "पत्रिन् (पुं) - patrin", "श्येन (पुं) - śyena"],
      image: "falcon.jpg"
    },

    {
      word: "उलूक",
      meaning: "Owl",
      synonyms: ["उलूक (पुं) - ulūka", "वायसाराति (पुं) - vāyasārati", "पेचक (पुं) - pecaka", "दिवान्ध (पुं) - divāndha", "कौशिक (पुं) - kauśika", "घूक (पुं) - ghūka", "दिवाभीत (पुं) - divābhīta", "निशाटन (पुं) -  niśāṭana"],
      image: "owl.jpg"
    },

    {
      word: "व्याघ्राटः",
      meaning: "Skylark",
      synonyms: ["व्याघ्राट (पुं) - vyāghrāṭa", "भरद्वाज (पुं) - bharadvāja"],
      image: "skylark.jpg"
    },

    {
      word: "खञ्जरीट",
      meaning: "Wagtail",
      synonyms: ["खञ्जरीट (पुं) - khañjarīṭa", "खञ्जन (पुं) - khañjana"],
      image: "wagtail.jpg"
    },

    {
      word: "लोहपृष्ठ",
      meaning: "Heron",
      synonyms: ["लोहपृष्ठ (पुं) - lohapṛṣṭha", "कङ्क (पुं) - kaṅka"],
      image: "heron.jpg"
    },

    {
      word: "चाषः",
      meaning: "Blue jay",
      synonyms: ["चाष (पुं) - cāṣa", "किकीदिवि (पुं) - kikīdivi"],
      image: "jay.webp"
    },

    {
      word: "भृङ्ग",
      meaning: "Bee",
      synonyms: ["कलिङ्ग (पुं) - kaliṅga", "भृङ्ग (पुं) - bhṛṅga",  "धूम्याटा (पुं) - dhūmyāṭā"],
      image: "shrike.jpg"
    },

    {
      word: "दार्वाघाटो",
      meaning: "Woodpecker",
      synonyms: ["शतपत्रक (पुं) - śatapatraka", "दार्वाघाट (पुं)- dārvāghāṭo"],
      image: "woodpecker.jpg"
    },

    {
      word: "सारङ्गः",
      meaning: "Cuckoo",
      synonyms: ["सारङ्ग (पुं) - sāraṅga", "स्तोकक (पुं) - stokaka", "चातक (पुं) - cātaka"],
      image: "cuckoo.jpg"
    },

    {
      word: "कृकवाकु",
      meaning: "Cock",
      synonyms: ["कृकवाकु (पुं) - krikavāku", "ताम्रचूड (पुं) - tāmracūḍa","कुक्कुट (पुं) - kukkuṭa", "चरणायुध (पुं) - caraṇāyudha"],
      image: "cock.webp"
    },

    {
      word: "चटकः",
      meaning: "Sparrow",
      synonyms: ["चटक (पुं) - caṭaka", "कलविङ्क (पुं) - kalaviṅka", "चटका (स्त्री) - caṭakā"],
      image: "sparrow.jpg"
    },

    {
      word: "चाटकैरः",
      meaning: "Male sparrow chick",
      synonyms: ["चाटकैर (पुं) - cāṭakaira"],
      image: "sprwbaby.jpg"
    },

    {
      word: "चटकै",
      meaning: "Female sparrow chick",
      synonyms: ["चटका (स्त्री) - caṭakā"],
      image: "sprwbaby.jpg"
    },

    {
      word: "कर्करेटुः",
      meaning: "Numidian crane",
      synonyms: ["कर्करेटु (पुं) - karkareṭu", "करेटु (पुं) - kareṭu"],
      image: "numedianCrane.jpg"
    },

    {
      word: "कृकण",
      meaning: "Partridge",
      synonyms: ["कृकण (पुं) - kṛkaṇa", "क्रकर (पुं) - krakara"],
      image: "partridge.webp"
    },

    {
      word: "कोकिलः",
      meaning: "Cuckoo bird",
      synonyms: ["वनप्रिय (पुं) - vanapriya","परभृत (पुं) - parabhṛta", "कोकिल (पुं) - kokila", "पिक (पुं) - pika"],
      image: "cuckooBird.jpg"
    },

    {
      word: "काके",
      meaning: "Crow",
      synonyms: ["काक (पुं) - kāka", "करटारिष्ट (पुं) - karaṭāriṣṭa", "बलिपुष्ट (पुं) - balipuṣṭa", "सकृत्प्रज (पुं) - sakṛtpraja", "ध्वाङ्क्ष (पुं) - dhvāṅkṣa", "आत्मघोष (पुं) - ātmaghoṣa", 
                  "परभृत् (पुं) - parabhṛt", "बलिभुज् (पुं) - balibhuj", "वायस (पुं) - vāyasa", " चिरञ्जीविन् (पुं) - cirañjīvin", "एकदृष्टि (पुं) - ekadṛṣṭi", " मौकुलि (पुं) - maukali"],
      image: "crow.jpg"
    },

    {
      word: "द्रोणकाक",
      meaning: "White Crow (Crow-type)",
      synonyms: ["द्रोणकाक (पुं) - droṇakāka", "काकोल (पुं) - kākola"],
      image: "whiteCrow.jpg"
    },

    {
      word: "दात्यूहः",
      meaning: "Black Crow (Crow-type)" ,
      synonyms: ["दात्यूह (पुं) - dātūha", "कालकण्ठक (पुं) - kālakaṇṭhaka"],
      image: "BlackCrow.jpg"
    },

    {
      word: "आतायि",
      meaning: "Kite",
      synonyms: ["आतायिन्  (पुं) - ātāyin", "चिल्ल (पुं) - cillau"],
      image: "kite.webp"
    },

    {
      word: "गृध्रौ",
      meaning: "Vulture",
      synonyms: ["दाक्षाय्य (पुं) - dākṣāyya", "गृध्र (पुं) - gṛdhra"],
      image: "vulture.webp"
    },

    {
      word: "शुकौ",
      meaning: "Parrot",
      synonyms: ["कीर (पुं) - kīra", "शुक (पुं) - śuka"],
      image: "parrot.jpg"
    },

    {
      word: "क्रौञ्चो",
      meaning: "Curlew",
      synonyms: ["क्रुञ्च् (पुं) - kruñc", "क्रौञ्च (पुं) - krauñca"],
      image: "curlew.webp"
    },

    {
      word: "बकः",
      meaning: "Crane",
      synonyms: ["बक (पुं) - baka", " कह्व (पुं) - kahva"],
      image: "crane.jpg"
    },

    {
      word: "सारसः",
      meaning: "Indian Crane",
      synonyms: ["पुष्कराह्व (पुं) - puṣkarāhva", "सारस (पुं) - sāraśa"],
      image: "indianCrane.webp"
    },

    {
      word: "श्चक्रवाको",
      meaning: "Ruddy Goose",
      synonyms: [" कोक (पुं) - koka", "चक्र (पुं) - cakra", "चक्रवाक (पुं) - cakravāka", "रथाङ्गाह्वय (पुं) - rathāṅgāhvaya"],
      image: "ruddyGoose.jpg"
    },

    {
      word: "कादम्बः",
      meaning: "Duck",
      synonyms: ["कादम्ब (पुं) - kādamba", "कलहंस (पुं) - kalahamsa"],
      image: "duck.jpg"
    },

    {
      word: "कुररौ",
      meaning: "Osprey",
      synonyms: ["उत्क्रोश (पुं) - utkrośa", "कुरर (पुं) - kurara"],
      image: "osprey.jpg"
    },

    {
      word: "हंसा",
      meaning: "Swan",
      synonyms: ["हंस (पुं) - hamsa", "श्वेतगरुत् (पुं) - śvetagarut", "चक्राङ्ग (पुं) - cakrāṅga, मानसौकस् (पुं) - mānasaukas"],
      image: "swan.jpg"
    },

    {
      word: "राजहंसा",
      meaning: "Flamingo (Red coloured peak and legs)",
      synonyms: ["राजहंस (पुं) - rājahamsa"],
      image: "flamingo.webp"
    },

    {
      word: "र्मल्लिकाक्षा",
      meaning: "Goose (Muddy or dirty coloured)",
      synonyms: ["मल्लिकाक्ष (पुं) - mallikākṣa"],
      image: "goose.jpg"
    },

    {
      word: "धार्तराष्ट्राः",
      meaning: "Type of Goose (having Black peak and legs)",
      synonyms: ["धार्तराष्ट्र (पुं) - dhārtarāṣṭra"],
      image: "typeOfGoose.jpg"
    },

    {
      word: "शरारि",
      meaning: "A small crane",
      synonyms: ["शरारि (स्त्री) - śarāri", " आटि (स्त्री) - āṭi", "आडि (स्त्री) - āḍi"],
      image: "smallCrane.webp"
    },

    {
      word: "बलाका",
      meaning: "Female Duck",
      synonyms: ["बलाका (स्त्री) - balākā", "बिसकण्ठिका (स्त्री) - bisakaṇṭhikā"],
      image: "duck.jpg"
    },

    {
      word: "वरटा",
      meaning: "Female swan",
      synonyms: ["वरटा (स्त्री) - varaṭā"],
      image: "swan.jpg"
    },

    {
      word: "लक्ष्मणा",
      meaning: "Feamle Indian Crane (sāraśa)",
      synonyms: ["लक्ष्मणा (स्त्री) - lakṣmaṇā"],
      image: "indianCrane.webp"
    },

    {
      word: "जतुका",
      meaning: "Bat",
      synonyms: ["जतुका (पुं) - jatukā", "अजिनपत्रा (स्त्री) - ajinapatrā"],
      image: "bat.jpg"
    },

    {
      word: "त्परोष्णी",
      meaning: "Cockroach",
      synonyms: ["परोष्णी (स्त्री) - paroṣṇī", "तैलपायिका (स्त्री) - tailapāyikā"],
      image: "cockroach.webp"
    },

    {
      word: "मक्षिका",
      meaning: "Fly",
      synonyms: ["वर्वणा (स्त्री) - varvaṇā", "मक्षिका (स्त्री) - makṣikā", "नीला (स्त्री) - nīlā"],
      image: "fly.jpg"
    },

    {
      word: "मधुमक्षिका",
      meaning: "Honey Bee",
      synonyms: ["मधुमक्षिका (स्त्री) - madhumakṣikā", "सरघा (स्त्री) - saraghā"],
      image: "honeyBee.webp"
    },

    {
      word: "पतङ्गिका",
      meaning: "Type of Honey Bee",
      synonyms: ["पतङ्गिका (स्त्री) - pataṅgikā", " पुत्तिका (स्त्री) - puttikā"],
      image: "honeyBee.webp"
    },

    {
      word: "वनमक्षिका",
      meaning: "Wild fly",
      synonyms: ["दंश (पुं) - daṃśa", "वनमक्षिका (स्त्री) - vanamakṣikā"],
      image: "wildFly.jpg"
    },

    {
      word: "दंशी",
      meaning: "Type of wild fly",
      synonyms: ["दंशी (स्त्री) - damśī"],
      image: "wawildFlysp.jpg"
    },

    {
      word: "न्धोली",
      meaning: "Wasp",
      synonyms: ["गन्धोली (स्त्री) - gandholī", "वरटा (स्त्री), (पुं) - varaṭā"],
      image: "wasp.jpg"
    },

    {
      word: "भृङ्गारी",
      meaning: "Cricket (insect)",
      synonyms: ["भृङ्गारी (स्त्री), झीरुका (स्त्री), चीरी (स्त्री), झिल्लिका (स्त्री) - bhṛṅgārī, jhīrukā, cīrī, jhillikā"],
      image: "cricket.jpg"
    },

    {
      word: "पतङ्ग",
      meaning: "Grasshopper",
      synonyms: ["पतङ्ग (पुं) - pataṅga", "शलभ (पुं) - śalabha"],
      image: "grasshopper.jpg"
    },

    {
      word: "खध्योतो",
      meaning: "Firefly",
      synonyms: ["खध्योत (पुं) - khadhyota", "ज्योतिरिङ्गण (पुं) - jyotiriṅgaṇa"],
      image: "firefly.webp"
    },

    {
      word: "मधुव्रतो",
      meaning: "Bee",
      synonyms: ["मधुव्रत (पुं) - madhuvrata", "मधुकर (पुं) - madhukara", "मधुलिह् (पुं) - madhulih", "मधुप (पुं) - madhupa", "अलिन् (पुं) - alin", 
                "द्विरेफ (पुं) - dvirepha", "पुष्पलिह् (पुं) - puṣpalih", "भृङ्ग (पुं) - bhṛṅga", "षट्पद (पुं) - ṣaṭpada", "भ्रमर (पुं) - bhramara", "अलि (पुं) - ali"],
      image: "bee.avif"
    },

    {
      word: "मयूरो",
      meaning: "Peacock",
      synonyms: ["मयूर (पुं) - mayūra",  "मयूर (पुं) - mayūra", "बर्हिण (पुं) - barhiṇa", "बर्हिन् (पुं) - barhin", "नीलकण्ठ (पुं) - nīlakaṇṭha", "भुजङ्गभुज् (पुं) -bhujaṅgabhuj", 
                "शिखावल (पुं) - śikhāvala", "शिखिन् (पुं) - śikhin", "केकिन् (पुं) - kekin", "मेघनादानुलासिन् (पुं) - meghanādānulāsin"],
      image: "peacock.jpg"
    },

    {
      word: "केका",
      meaning: "SOund of Peacock",
      synonyms: ["केका (स्त्री) - kekā"],
      image: "peacockSound.jpg"
    },

    {
      word: "चन्द्रक",
      meaning: "Eyes in peackock feathers",
      synonyms: ["चन्द्रक (न) - candraka", "मेचक (पुं) - mecaka"],
      image: "peacockFeatherEye.jpg"
    },

    {
      word: "शिखा",
      meaning: "Crest on peacock's head",
      synonyms: ["शिखा (स्त्री) - śikhā", " चूडा (स्त्री) - cūḍā"],
      image: "peacockCrest.jpeg"
    },

    {
      word: "पिच्छबर्हे",
      meaning: "Peacock tail",
      synonyms: ["शिखण्ड (पुं) - śikhaṇḍa", "पिच्छबर्ह (न) - picchabarha", ""],
      image: "peacockTail.jpg"
    },

    {
      word: "विहङ्ग",
      meaning: "Birds (general term)",
      synonyms: [" खग (पुं) - khagaa", "विहङ्ग (पुं) - vihaṅga", "विहग (पुं) - vihaga", "विहङ्गम (पुं) - vihaṅgama", "विहायस् (पुं) - vihāyas", "शकुन्ति (पुं) - śakunti", "पक्षिन् (पुं) - pakṣin", 
                "शकुनि (पुं) - śakuni", "शकुन्त (पुं) - śakunta", "शकुन (पुं) - śakuna", "द्विज (पुं) - dvija", "पतत्रिन् (पुं) - patatrin", "पत्रिन् (पुं) - patrin", "पतग (पुं) - pataga", 
                "पतत् (पुं) - patat", "पत्ररथ (पुं) - patraratha", "अण्डज (पुं) - aṇḍaja", "नगौकस् (पुं) - nagaukas", "वाजिन् (पुं) - vājin",  "विकिर (पुं) - vikira", "वि (पुं) - vi", 
                "विष्किर (पुं) - viṣkira", "पतत्रि (पुं) - patatri", "नीडोद्भव (पुं) - nīḍodbhava", "गरुत्मत् (पुं) - garutmat", "पित्सन्त् (पुं) = pitsant, नभसङ्गम (पुं) - nabhasaṅgama" ],
      image: "bird.jpeg"
    },

    {
      word: "हारीतो",
      meaning: "Type of Pigeon",
      synonyms: ["हारीत (पुं) - hārita"],
      image: "pigeon.jpg"
    },

    {
      word: "मद्गुः",
      meaning: "DIfferent Aquatic birds (These are not synonyms)",
      synonyms: ["मद्गु (पुं) - madgu", "कारण्डव (पुं) - kāraṇḍava", "प्लव (पुं) - plava"],
      image: "aquaticBirds.webp"
    },

    {
      word: "तित्तिरिः",
      meaning: "Patridge",
      synonyms: ["तित्तिरि (पुं) - tittiri"],
      image: "partridge.webp"
    },

    {
      word: "कुक्कुभो",
      meaning: "wild cock",
      synonyms: ["कुक्कुभ (पुं) - kukkubha"],
      image: "wildCock.webp"
    },

    {
      word: "लावो",
      meaning: "Lava",
      synonyms: ["लाव (पुं) - lāva"],
      image: "lava.jpg"
    },

    {
      word: "जीवञ्जीवश्",
      meaning: "Turkey",
      synonyms: ["जीवञ्जीव (पुं) - jīvañjīva"],
      image: "turkey.jpg"
    },
    
    {
      word: "चकोरकः",
      meaning: "Chakora Bird",
      synonyms: ["चकोरक (पुं) - cakoraka"],
      image: "chakora.jpeg"
    },

    {
      word: "कोयष्टिक", 
      meaning: "A type of crane",
      synonyms: ["कोयष्टिक (पुं) - koyasṭika"],
      image: "crane.jpg"
    },

    {
      word: "ष्टिट्टिभको" ,
      meaning: "Jacana  Bird",
      synonyms: ["टिट्टिभक (पुं) - ṭiṭṭibhaka"],
      image: "jacana.jpeg"
    },

    {
      word: "वर्तको",
      meaning: " Type of quail",
      synonyms: ["वर्तक (पुं) - vartaka", "वर्तिक (पुं) - vartika"],
      image: "quail.jpeg"
    },

    {
      word: "त्पक्ष",
      meaning: "Wings",
      synonyms: ["गरुत् (पुं) - garut", "पक्ष (पुं) - pakṣa", "छद (पुं) - chada, पत्र (नपुं) - patra, पतत्र (नपुं) - patatra, तनूरुह (नपुं) - tanūruha"],
      image: "wings.jpg"
    },

    {
      word: "पक्षतिः",
      meaning: "Root of Wing",
      synonyms: ["पक्षतिः (स्त्री) - pakṣatiḥ"],
      image: "wingRoot.png"
    },

    {
      word: "चञ्चु",
      meaning: "Beak of bird",
      synonyms: ["चञ्चु (स्त्री) - cañcu", "त्रोटि (स्त्री) - troṭi"],
      image: "beak.webp"
    },

    {
      word: "खगगतिक्रियाः",
      meaning: "Bird Flight Movements(3)",
      synonyms: [" प्रडीन (नपुं) - praḍīna (Flying forward)", "उड्डीन (नपुं) - uḍḍīna (Flying upward)", "सण्डीन (नपुं) - saṇḍīna (Flying in a group)"],
      image: "birdFlight.png"
    },

    {
      word: "पेशी",
      meaning: "Egg",
      synonyms: [" पेशी (स्त्री) - peśī", "कोश (पुं-नपुं) - kośa", "अण्ड (नपुं) - aṇḍa"],
      image: "egg.jpg"
    },

    {
      word: "नीड",
      meaning: "Nest of bird",
      synonyms: [" कुलाय (पुं), नीड (पुं-नपुं) - kulāya, nīḍa"],
      image: "nest.jpg"
    },

    {
      word: "शावकः",
      meaning: "Young (or small) birds",
      synonyms: ["पोत (पुं) - pota", "पाक (पुं) - pāka", "अर्भक (पुं) - arbhaka", "डिम्भ (पुं) - dimbha", "पृथुक (पुं) - pṛthuka", "शावक (पुं) - śāvaka", "शिशु (पुं) - śiśu"],
      image: "youngBirds.webp"
    },

    {
      word: "मिथुनं",
      meaning: "Pair (Male-Female)",
      synonyms: ["स्त्रीपुंस (पुं) - (नित्य-द्विवचन) - strīpuṃsa", "मिथुन (नपुं)- mithuna", "द्वन्द्व (नपुं) - dvandva"],
      image: "pairBirds.jpg"
    },

    {
      word: "युग्मं",
      meaning: "Couple (any Two Birds)",
      synonyms: ["युग्म (नपुं) - yugma", "युगल (नपुं)  yugala", "युग (नपुं) - yuga"],
      image: "coupleBirds.jpg"
    },

    {
      word: "समूहे",
      meaning: "Group of Animals or Birds",
      synonyms: ["समूह (पुं) - samūha", "निवह (पुं) - nivaha", "व्यूह (पुं) - vyūha", "सन्दोह (पुं)- sandoha", "विसर (पुं) - visara", "व्रज (पुं) - vraja", "स्तोम (पुं) - stoma", "ओघ (पुं) - ogha", 
        "निकर (पुं) - nikara", "व्रात (पुं) - vrāta", "वार (पुं) - vāra", "सङ्घात (पुं) - saṅghāta", "सञ्चय (पुं) - sañcaya", "समुदाय (पुं) - samudāya", "समुदय (पुं) - samudaya", "समवाय (पुं) - samavāya", 
        "चय (पुं) - caya", "गण (पुं) - gaṇa", "संहति (स्त्री) - saṃhati", "वृन्द (नपुं) - vṛnda", "निकुरम्ब (नपुं) - nikuramba", "कदम्बक (नपुं) - kadambaka"],
      image: "group.jpeg"
    },

    {
      word: "र्वर्गः",
      meaning: "Group of Similar kind of Animals (also non-animals)",
      synonyms: ["वर्ग (पुं) - varga"],
      image: "similarGroup.webp"
    },

    {
      word: "सङ्घ",
      meaning: "Group of Animals specifically (can be similar or different kinds)",
      synonyms: ["सङ्घ (पुं) - saṅgha", "सार्थ (पुं) - sārtha"],
      image: "animalGroup.webp"
    },

    {
      word: "कुलं",
      meaning: "Homogeneous Animal-Group",
      synonyms: ["कुल (नपुं) - kula"],
      image: "kula.webp"
    },

    {
      word: "यूथं",
      meaning: "Group of Tiryak-Jantus",
      synonyms: ["यूथ (पुं-नपुं) - yūtha"],
      image: "yutha.jpg"
    },

    {
      word: "समजो",
      meaning: "Multitude of Animals",
      synonyms: ["समज (पुं) - samaja"],
      image: "multitude.jpg"
    },

    {
      word: "समाजो",
      meaning: "Multitude of non-animals",
      synonyms: ["समाज (पुं) - samāja"],
      image: "samaja.jpeg"
    },

    {
      word: "न्निकायः",
      meaning: "Multitude of Similar opinions (or characteristics)",
      synonyms: ["निकाय (पुं) - nikāya"],
      image: "nikaya.jpg"
    },

    {
      word: "पुञ्ज",
      meaning: "Heap of grains",
      synonyms: ["पुञ्ज (पुं) - puñja", "राशि (पुं) - rāśi", "उत्कर (पुं) - utkara", "कूट (पुं-नपुं) - kūṭa"],
      image: "Grains.jpg"
    },
    
    {  
      word: "कापोतशौकमायूरतैत्तिरादीनि",
      meaning: "Flocks of different birds",
      synonyms: ["कापोत (नपुं) - kāpota (flock of pigeons)", "शौक (नपुं) - śauka (flock of parrots)",  "मायूर (नपुं) - māyūra (flock of peacocks)", "तैत्तिर (नपुं) - taittira (flock of partridges), and so on"],
      image: "flockOfBirds.jpeg"
    },

    {
      word: "श्छेका",
      meaning: "Domestic Animals or Birds - general term (pets)",
      synonyms: ["छेक (पुं) - cheka", "गृह्यक (पुं) - gṛhyaka"],
      image: "domesticAnimals.jpeg"
    }



    // Add more words here
  ];

  wordsList.forEach(word => {
    word.wordCnt = word.synonyms.length; // Count of synonyms
  });
  


  function showWordDetails(element) {
    const clickedWord = element.innerText.trim(); // Get clicked word and trims whitespaces
    const detailsDiv = document.getElementById('details');

    // Find word in wordsList
    const wordData = wordsList.find(w => w.word === clickedWord);

    if (wordData) {
        const note = "पुं = पुल्लिङ्गम्, स्त्री = स्त्रीलिङ्गम्, न = नपुंसकलिङ्गम्, त्रि = त्रिषु लिङ्गेषु" ; // Note to be displayed
        const note2 = "Pronounciations are given in IAST format.";
        const note3 = "Only प्रातिपदिकs are listed here.";
        detailsDiv.innerHTML = `

            <h3>${wordData.word}</h3>
            <p><strong>अर्थः :</strong> ${wordData.meaning} (English)</p>

            <p>${note}</p>
            <p>${note2}</p>
            <p>${note3}</p>

            <p><strong>पर्याय-पदानि:</strong> ${wordData.synonyms.join(",  ")}</p>
            <p><strong>Word Count:</strong> ${wordData.wordCnt}</p>

            <img src="${wordData.image}" alt="${wordData.word}" style="max-width:200px; margin-top:10px;">
        `;

        // Smooth scroll to the details div
        detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } else {
        detailsDiv.innerHTML = `<p>No data found for <strong>${clickedWord}</strong>.</p>`;

        // Still scroll to show this message
        detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

  
// Add event listener to search input to handle Enter key
document.addEventListener("DOMContentLoaded", function () { 

  /*document — refers to the entire HTML page (DOM).
  .addEventListener(...) — attaches an event listener (a watcher that waits for a specific event).
  "DOMContentLoaded" — this is a special browser event that fires only after the HTML has been completely loaded and parsed, but before stylesheets are fully loaded.
  function () { ... } — this anonymous function will run once the DOM is ready.
   This makes sure the code inside will not run until the HTML is fully available. */

  document.getElementById("search").addEventListener("keydown", function (event) {

    /*.addEventListener("keydown", ...) — adds an event listener that listens for key presses in that input box.
      "keydown" — this event is triggered whenever any key is pressed while the input is focused.
    function (event) { ... } — defines what should happen each time a key is pressed. */

      if (event.key === "Enter") {
          event.preventDefault(); // Prevent form submission if inside a form or reload
          searchWord(); // Calls your existing function
      }
  });
});




function searchWord() {
  const searchedWord = document.getElementById('search').value.trim();
  if (searchedWord === "") {
      alert("Please enter a word to search.");
      return;
  }

 
  const detailsDiv = document.getElementById('details');


  // Match either main word or a synonym
  const wordData = wordsList.find(w => {
   // const mainMatch = w.word.trim() === searchedWord;  no need to match main word because it is already there in synonyms list

        // Match any synonym's Sanskrit part exactly
        const synonymMatch = w.synonyms.some(syn => {
          // Extract only Sanskrit word before space or '('; it helps in ignoring pronunciation part
          const sanskritWord = syn.trim().split(/[ (]/)[0]; //we can split at space but when there is no gap between word and '(' it fails so we use regex
          return searchedWord === sanskritWord;
        });
    

    /*  The .some() method checks if at least one item in the array passes the condition inside the callback function.
        Returns true if any synonym matches, otherwise false. 
        it is used on arrays.
        Is there at least one item in the array that matches my condition(searched word)?"

        .includes(searchedWord)-
        Checks if the synonym contains the searchedWord string.
        Returns true if found, false otherwise.
        It's like asking: "Does this string contain the searched word?"
        
        
        Now combine them — .some() + .includes()
        "Is there any synonym in this list that contains the word hari?"*/

    return  synonymMatch;
  });

  if (wordData) {
    const note = "पुं = पुल्लिङ्गम्, स्त्री = स्त्रीलिङ्गम्, न = नपुंसकलिङ्गम्, त्रि = त्रिषु लिङ्गेषु"; // Note to be displayed
    const note2 = "Pronounciations are given in IAST format.";
    const note3 = "Only प्रातिपदिक are listed here.";

    detailsDiv.innerHTML = `

        <h3>${wordData.word}</h3>
        <p><strong>अर्थः :</strong> ${wordData.meaning} (English)</p>

        <p>${note}</p>
        <p>${note2}</p>
        <p>${note3}</p>

        <p><strong>पर्याय-पदानि:</strong> ${wordData.synonyms.join(",  ")}</p>
        <p><strong>Word Count:</strong> ${wordData.wordCnt}</p>

        <img src="${wordData.image}" alt="${wordData.word}" style="max-width:200px; margin-top:10px;">
    `;

    // Smooth scroll to the details div
    detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

  } else {
    detailsDiv.innerHTML = `<p>No data found for <strong>${searchedWord}</strong> as प्रातिपदिक (Avoid प्रथमा-विभक्ति form).</p>`;

    // Still scroll to show this message
    detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}

function clearSearch() {
  const searchedWord = document.getElementById('search').value.trim();
  if (searchedWord === "") {
    alert("Nothing to clear");
    return;
  }
    document.getElementById('search').value = "";
    document.getElementById('details').innerHTML = "";

}




