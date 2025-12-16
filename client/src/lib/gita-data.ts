export interface Verse {
  id: string;
  chapter: number;
  verse: number;
  kannada: string;
  transliteration: string;
  meaning: string;
}

export interface Chapter {
  id: number;
  title: string;
  kannadaTitle: string;
  description: string;
  totalVerses: number;
  verses: Verse[];
}

export const bhagavadGitaData: Chapter[] = [
  {
    id: 1,
    title: "Arjuna Vishada Yoga",
    kannadaTitle: "ಅರ್ಜುನ ವಿಷಾದ ಯೋಗ",
    description: "ಅರ್ಜುನನ ವಿಷಾದ ಮತ್ತು ಸಂದೇಹ - Arjuna's grief and confusion on the battlefield",
    totalVerses: 47,
    verses: [
      {
        id: "1-1",
        chapter: 1,
        verse: 1,
        kannada: "ಧೃತರಾಷ್ಟ್ರ ಉವಾಚ | ಧರ್ಮಕ್ಷೇತ್ರೇ ಕುರುಕ್ಷೇತ್ರೇ ಸಮವೇತಾ ಯುಯುತ್ಸವಃ | ಮಾಮಕಾಃ ಪಾಂಡವಾಶ್ಚೈವ ಕಿಮಕುರ್ವತ ಸಂಜಯ ||",
        transliteration: "dhṛitarāṣhṭra uvācha | dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāśh chaiva kimakurvata sañjaya",
        meaning: "ಧೃತರಾಷ್ಟ್ರನು ಹೇಳಿದನು: ಸಂಜಯನೇ, ಧರ್ಮಕ್ಷೇತ್ರವಾದ ಕುರುಕ್ಷೇತ್ರದಲ್ಲಿ ಯುದ್ಧಕ್ಕೆ ಸಿದ್ಧವಾಗಿ ಸೇರಿದ ನನ್ನ ಮಕ್ಕಳು ಮತ್ತು ಪಾಂಡವರು ಏನು ಮಾಡಿದರು?"
      },
      {
        id: "1-2",
        chapter: 1,
        verse: 2,
        kannada: "ಸಂಜಯ ಉವಾಚ | ದೃಷ್ಟ್ವಾ ತು ಪಾಂಡವಾನೀಕಂ ವ್ಯೂಢಂ ದುರ್ಯೋಧನಸ್ತದಾ | ಆಚಾರ್ಯಮುಪಸಂಗಮ್ಯ ರಾಜಾ ವಚನಮಬ್ರವೀತ್ ||",
        transliteration: "sañjaya uvācha | dṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanastadā | āchāryamupasaṅgamya rājā vachanamabravīt",
        meaning: "ಸಂಜಯನು ಹೇಳಿದನು: ಆಗ ರಾಜನಾದ ದುರ್ಯೋಧನನು ವ್ಯೂಹದಲ್ಲಿ ನಿಂತಿರುವ ಪಾಂಡವ ಸೇನೆಯನ್ನು ನೋಡಿ, ತನ್ನ ಆಚಾರ್ಯನ ಬಳಿಗೆ ಹೋಗಿ ಈ ಮಾತುಗಳನ್ನು ಹೇಳಿದನು."
      },
      {
        id: "1-3",
        chapter: 1,
        verse: 3,
        kannada: "ಪಶ್ಯೈತಾಂ ಪಾಂಡುಪುತ್ರಾಣಾಂ ಆಚಾರ್ಯ ಮಹತೀಂ ಚಮೂಮ್ | ವ್ಯೂಢಾಂ ದ್ರುಪದಪುತ್ರೇಣ ತವ ಶಿಷ್ಯೇಣ ಧೀಮತಾ ||",
        transliteration: "paśhyaitāṁ pāṇḍu-putrāṇām āchārya mahatīṁ chamūm | vyūḍhāṁ drupada-putreṇa tava śhiṣhyeṇa dhīmatā",
        meaning: "ಆಚಾರ್ಯರೇ, ನಿಮ್ಮ ಬುದ್ಧಿವಂತ ಶಿಷ್ಯನಾದ ದ್ರುಪದಪುತ್ರನಿಂದ ವ್ಯೂಹದಲ್ಲಿ ಜೋಡಿಸಲಾದ ಈ ಪಾಂಡುಪುತ್ರರ ಮಹಾಸೇನೆಯನ್ನು ನೋಡಿ."
      },
      {
        id: "1-4",
        chapter: 1,
        verse: 4,
        kannada: "ಅತ್ರ ಶೂರಾ ಮಹೇಷ್ವಾಸಾ ಭೀಮಾರ್ಜುನಸಮಾ ಯುಧಿ | ಯುಯುಧಾನೋ ವಿರಾಟಶ್ಚ ದ್ರುಪದಶ್ಚ ಮಹಾರಥಃ ||",
        transliteration: "atra śhūrā maheṣhvāsā bhīmārjunasamā yudhi | yuyudhāno virāṭaśhcha drupadaśhcha mahārathaḥ",
        meaning: "ಇಲ್ಲಿ ಭೀಮಾರ್ಜುನರಿಗೆ ಸಮಾನರಾದ ಮಹಾ ಧನುರ್ಧರರು ಮತ್ತು ಯುದ್ಧದಲ್ಲಿ ಶೂರರಾದ ಯುಯುಧಾನ, ವಿರಾಟ ಮತ್ತು ಮಹಾರಥಿ ದ್ರುಪದರು ಇದ್ದಾರೆ."
      },
      {
        id: "1-5",
        chapter: 1,
        verse: 5,
        kannada: "ಧೃಷ್ಟಕೇತುಶ್ಚೇಕಿತಾನಃ ಕಾಶಿರಾಜಶ್ಚ ವೀರ್ಯವಾನ್ | ಪುರುಜಿತ್ ಕುಂತಿಭೋಜಶ್ಚ ಶೈಬ್ಯಶ್ಚ ನರಪುಂಗವಃ ||",
        transliteration: "dhṛiṣhṭaketuśhchekitānaḥ kāśhirājaśhcha vīryavān | purujit kuntibhojaśhcha śhaibyaśhcha narapuṅgavaḥ",
        meaning: "ಧೃಷ್ಟಕೇತು, ಚೇಕಿತಾನ, ಪರಾಕ್ರಮಶಾಲಿ ಕಾಶಿರಾಜ, ಪುರುಜಿತ್, ಕುಂತಿಭೋಜ ಮತ್ತು ಮನುಷ್ಯಶ್ರೇಷ್ಠನಾದ ಶೈಬ್ಯನು ಇದ್ದಾರೆ."
      },
      {
        id: "1-6",
        chapter: 1,
        verse: 6,
        kannada: "ಯುಧಾಮನ್ಯುಶ್ಚ ವಿಕ್ರಾಂತ ಉತ್ತಮೌಜಾಶ್ಚ ವೀರ್ಯವಾನ್ | ಸೌಭದ್ರೋ ದ್ರೌಪದೇಯಾಶ್ಚ ಸರ್ವ ಏವ ಮಹಾರಥಾಃ ||",
        transliteration: "yudhāmanyuśhcha vikrānta uttamaujāśhcha vīryavān | saubhadro draupadeyāśhcha sarva eva mahārathāḥ",
        meaning: "ಶೂರನಾದ ಯುಧಾಮನ್ಯು, ಪರಾಕ್ರಮಿಯಾದ ಉತ್ತಮೌಜ, ಸೌಭದ್ರ ಮತ್ತು ದ್ರೌಪದೀಪುತ್ರರು - ಇವರೆಲ್ಲರೂ ಮಹಾರಥರು."
      },
      {
        id: "1-7",
        chapter: 1,
        verse: 7,
        kannada: "ಅಸ್ಮಾಕಂ ತು ವಿಶಿಷ್ಟಾ ಯೇ ತಾನ್ನಿಬೋಧ ದ್ವಿಜೋತ್ತಮ | ನಾಯಕಾ ಮಮ ಸೈನ್ಯಸ್ಯ ಸಂಜ್ಞಾರ್ಥಂ ತಾನ್ಬ್ರವೀಮಿ ತೇ ||",
        transliteration: "asmākaṁ tu viśhiṣhṭā ye tānnibodha dvijottama | nāyakā mama sainyasya sañjñārthaṁ tānbravīmi te",
        meaning: "ದ್ವಿಜೋತ್ತಮರೇ, ನಮ್ಮ ಪಕ್ಷದ ಪ್ರಮುಖರನ್ನು ತಿಳಿಸುತ್ತೇನೆ. ನನ್ನ ಸೇನೆಯ ನಾಯಕರನ್ನು ನಿನಗೆ ತಿಳಿಸುತ್ತೇನೆ."
      },
      {
        id: "1-8",
        chapter: 1,
        verse: 8,
        kannada: "ಭವಾನ್ಭೀಷ್ಮಶ್ಚ ಕರ್ಣಶ್ಚ ಕೃಪಶ್ಚ ಸಮಿತಿಂಜಯಃ | ಅಶ್ವತ್ಥಾಮಾ ವಿಕರ್ಣಶ್ಚ ಸೌಮದತ್ತಿಸ್ತಥೈವ ಚ ||",
        transliteration: "bhavān bhīṣhmaśhcha karṇaśhcha kṛipaśhcha samitiñjayaḥ | aśhvatthāmā vikarṇaśhcha saumadattis tathaiva cha",
        meaning: "ನೀವು, ಭೀಷ್ಮ, ಕರ್ಣ, ಕೃಪ, ಸಮಿತಿಂಜಯ ಅಶ್ವತ್ಥಾಮ, ವಿಕರ್ಣ ಮತ್ತು ಸೌಮದತ್ತಿ ಇವರೆಲ್ಲರೂ ಇದ್ದಾರೆ."
      },
      {
        id: "1-9",
        chapter: 1,
        verse: 9,
        kannada: "ಅನ್ಯೇ ಚ ಬಹವಃ ಶೂರಾ ಮದರ್ಥೇ ತ್ಯಕ್ತಜೀವಿತಾಃ | ನಾನಾಶಸ್ತ್ರಪ್ರಹರಣಾಃ ಸರ್ವೇ ಯುದ್ಧವಿಶಾರದಾಃ ||",
        transliteration: "anye cha bahavaḥ śhūrā madarthe tyaktajīvitāḥ | nānā-śhastra-praharaṇāḥ sarve yuddha-viśhāradāḥ",
        meaning: "ನನ್ನ ನಿಮಿತ್ತ ಜೀವವನ್ನು ತ್ಯಾಗ ಮಾಡಿದ ಅನೇಕ ಇತರ ಶೂರರು, ನಾನಾ ಆಯುಧಗಳನ್ನು ಧರಿಸಿದ ಯುದ್ಧದಲ್ಲಿ ನಿಪುಣರು ಇದ್ದಾರೆ."
      },
      {
        id: "1-10",
        chapter: 1,
        verse: 10,
        kannada: "ಅಪರ್ಯಾಪ್ತಂ ತದಸ್ಮಾಕಂ ಬಲಂ ಭೀಷ್ಮಾಭಿರಕ್ಷಿತಮ್ | ಪರ್ಯಾಪ್ತಂ ತ್ವಿದಮೇತೇಷಾಂ ಬಲಂ ಭೀಮಾಭಿರಕ್ಷಿತಮ್ ||",
        transliteration: "aparyāptaṁ tadasmākaṁ balaṁ bhīṣhmābhirakṣhitam | paryāptaṁ tvidameteṣhāṁ balaṁ bhīmābhirakṣhitam",
        meaning: "ಭೀಷ್ಮರಿಂದ ರಕ್ಷಿತವಾದ ನಮ್ಮ ಸೇನೆ ಅಪರಿಮಿತವಾಗಿದೆ. ಭೀಮರಿಂದ ರಕ್ಷಿತವಾದ ಇವರ ಸೇನೆ ಪರಿಮಿತವಾಗಿದೆ."
      },
      {
        id: "1-11",
        chapter: 1,
        verse: 11,
        kannada: "ಅಯನೇಷು ಚ ಸರ್ವೇಷು ಯಥಾಭಾಗಮವಸ್ಥಿತಾಃ | ಭೀಷ್ಮಮೇವಾಭಿರಕ್ಷಂತು ಭವಂತಃ ಸರ್ವ ಏವ ಹಿ ||",
        transliteration: "ayaneṣhu cha sarveṣhu yathā-bhāgam-avasthitāḥ | bhīṣhmamevābhirakṣhantu bhavantaḥ sarva eva hi",
        meaning: "ಆದ್ದರಿಂದ ನೀವೆಲ್ಲರೂ ನಿಮ್ಮ ನಿಮ್ಮ ಸ್ಥಾನಗಳಲ್ಲಿ ನಿಂತು ಭೀಷ್ಮರನ್ನು ರಕ್ಷಿಸಿರಿ."
      },
      {
        id: "1-12",
        chapter: 1,
        verse: 12,
        kannada: "ತಸ್ಯ ಸಂಜನಯನ್ಹರ್ಷಂ ಕುರುವೃದ್ಧಃ ಪಿತಾಮಹಃ | ಸಿಂಹನಾದಂ ವಿನದ್ಯೋಚ್ಚೈಃ ಶಂಖಂ ದಧ್ಮೌ ಪ್ರತಾಪವಾನ್ ||",
        transliteration: "tasya sañjanayan harṣhaṁ kuru-vṛiddhaḥ pitāmahaḥ | siṁhanādaṁ vinadyochchaiḥ śhaṅkhaṁ dadhmau pratāpavān",
        meaning: "ಆಗ ಕುರುಕುಲದ ವೃದ್ಧ ಪಿತಾಮಹ ಭೀಷ್ಮರು ಪ್ರತಾಪಶಾಲಿಯಾಗಿ ಸಿಂಹನಾದ ಮಾಡಿ ಉಚ್ಚಸ್ವರದಲ್ಲಿ ಶಂಖವನ್ನು ಊದಿದರು."
      },
      {
        id: "1-13",
        chapter: 1,
        verse: 13,
        kannada: "ತತಃ ಶಂಖಾಶ್ಚ ಭೇರ್ಯಶ್ಚ ಪಣವಾನಕಗೋಮುಖಾಃ | ಸಹಸೈವಾಭ್ಯಹನ್ಯಂತ ಸ ಶಬ್ದಸ್ತುಮುಲೋऽಭವತ್ ||",
        transliteration: "tataḥ śhaṅkhāśhcha bheryaśhcha paṇavānaka-gomukhāḥ | sahasaivābhyahanyanta sa śhabdastumulo'bhavat",
        meaning: "ಆಮೇಲೆ ಶಂಖ, ಭೇರಿ, ಪಣವ, ಅನಕ, ಗೋಮುಖ ಮೊದಲಾದ ವಾದ್ಯಗಳು ಏಕಕಾಲದಲ್ಲಿ ಮೊಳಗಿದವು. ಆ ಶಬ್ದ ತುಮುಲವಾಯಿತು."
      },
      {
        id: "1-14",
        chapter: 1,
        verse: 14,
        kannada: "ತತಃ ಶ್ವೇತೈರ್ಹಯೈರ್ಯುಕ್ತೇ ಮಹತಿ ಸ್ಯಂದನೇ ಸ್ಥಿತೌ | ಮಾಧವಃ ಪಾಂಡವಶ್ಚೈವ ದಿವ್ಯೌ ಶಂಖೌ ಪ್ರದಧ್ಮತುಃ ||",
        transliteration: "tataḥ śhvetair hayair yukte mahati syandane sthitau | mādhavaḥ pāṇḍavaśhchaiva divyau śhaṅkhau pradadhmatuḥ",
        meaning: "ಆಗ ಶ್ವೇತಾಶ್ವಗಳಿಂದ ಯುಕ್ತವಾದ ಮಹಾ ರಥದಲ್ಲಿ ನಿಂತ ಮಾಧವ ಮತ್ತು ಪಾಂಡವರು ದಿವ್ಯ ಶಂಖಗಳನ್ನು ಊದಿದರು."
      },
      {
        id: "1-15",
        chapter: 1,
        verse: 15,
        kannada: "ಪಾಂಚಜನ್ಯಂ ಹೃಷೀಕೇಶೋ ದೇವದತ್ತಂ ಧನಂಜಯಃ | ಪೌಂಡ್ರಂ ದಧ್ಮೌ ಮಹಾಶಂಖಂ ಭೀಮಕರ್ಮಾ ವೃಕೋದರಃ ||",
        transliteration: "pāñchajanyaṁ hṛiṣhīkeśho devadattaṁ dhanañjayaḥ | pauṇḍraṁ dadhmau mahā-śhaṅkhaṁ bhīma-karmā vṛikodaraḥ",
        meaning: "ಹೃಷೀಕೇಶನು ಪಾಂಚಜನ್ಯವನ್ನೂ, ಧನಂಜಯನು ದೇವದತ್ತವನ್ನೂ, ಭೀಮಕರ್ಮನಾದ ವೃಕೋದರನು ಪೌಂಡ್ರ ಮಹಾಶಂಖವನ್ನೂ ಊದಿದನು."
      },
      {
        id: "1-16",
        chapter: 1,
        verse: 16,
        kannada: "ಅನಂತವಿಜಯಂ ರಾಜಾ ಕುಂತೀಪುತ್ರೋ ಯುಧಿಷ್ಠಿರಃ | ನಕುಲಃ ಸಹದೇವಶ್ಚ ಸುಘೋಷಮಣಿಪುಷ್ಪಕೌ ||",
        transliteration: "anantavijayaṁ rājā kuntī-putro yudhiṣhṭhiraḥ | nakulaḥ sahadevaśhcha sughoṣha-maṇipuṣhpakau",
        meaning: "ರಾಜ ಯುಧಿಷ್ಠಿರನು ಅನಂತವಿಜಯವನ್ನೂ, ನಕುಲ ಸಹದೇವರು ಸುಘೋಷ ಮಣಿಪುಷ್ಪಕಗಳನ್ನೂ ಊದಿದರು."
      },
      {
        id: "1-17",
        chapter: 1,
        verse: 17,
        kannada: "ಕಾಶ್ಯಶ್ಚ ಪರಮೇಷ್ವಾಸಃ ಶಿಖಂಡೀ ಚ ಮಹಾರಥಃ | ಧೃಷ್ಟದ್ಯುಮ್ನೋ ವಿರಾಟಶ್ಚ ಸಾತ್ಯಕಿಶ್ಚಾಪರಾಜಿತಃ ||",
        transliteration: "kāśyaśhcha parameṣhvāsaḥ śhikhaṇḍī cha mahā-rathaḥ | dhṛiṣhṭadyumno virāṭaśhcha sātyakiśh chāparājitaḥ",
        meaning: "ಕಾಶಿರಾಜ, ಮಹಾಧನುರ್ಧರ ಶಿಖಂಡಿ, ಮಹಾರಥ ಧೃಷ್ಟದ್ಯುಮ್ನ, ವಿರಾಟ ಮತ್ತು ಅಪರಾಜಿತ ಸಾತ್ಯಕಿ ಇವರೆಲ್ಲರೂ..."
      },
      {
        id: "1-18",
        chapter: 1,
        verse: 18,
        kannada: "ದ್ರುಪದೋ ದ್ರೌಪದೇಯಾಶ್ಚ ಸರ್ವಶಃ ಪೃಥಿವೀಪತೇ | ಸೌಭದ್ರಶ್ಚ ಮಹಾಬಾಹುಃ ಶಂಖಾನ್ದಧ್ಮುಃ ಪೃಥಕ್ ಪೃಥಕ್ ||",
        transliteration: "drupado draupadeyāśhcha sarvaśhaḥ pṛithivī-pate | saubhadraśhcha mahā-bāhuḥ śhaṅkhān dadhmuḥ pṛithak pṛithak",
        meaning: "ದ್ರುಪದ, ದ್ರೌಪದೇಯರು, ಮಹಾಬಾಹು ಸೌಭದ್ರ - ಇವರೆಲ್ಲರೂ ಪ್ರತ್ಯೇಕವಾಗಿ ಶಂಖಗಳನ್ನು ಊದಿದರು."
      },
      {
        id: "1-19",
        chapter: 1,
        verse: 19,
        kannada: "ಸ ಘೋಷೋ ಧಾರ್ತರಾಷ್ಟ್ರಾಣಾಂ ಹೃದಯಾನಿ ವ್ಯದಾರಯತ್ | ನಭಶ್ಚ ಪೃಥಿವೀಂ ಚೈವ ತುಮುಲೋ ವ್ಯನುನಾದಯನ್ ||",
        transliteration: "sa ghoṣho dhārtarāṣhṭrāṇāṁ hṛidayāni vyadārayat | nabhaśhcha pṛithivīṁ chaiva tumulo vyanunādayan",
        meaning: "ಆ ಘೋಷವು ಧಾರ್ತರಾಷ್ಟ್ರರ ಹೃದಯಗಳನ್ನು ಭೇದಿಸಿತು. ಆಕಾಶ ಮತ್ತು ಭೂಮಿಯನ್ನು ಪ್ರತಿಧ್ವನಿಸುವ ತುಮುಲ ಶಬ್ದವಾಯಿತು."
      },
      {
        id: "1-20",
        chapter: 1,
        verse: 20,
        kannada: "ಅಥ ವ್ಯವಸ್ಥಿತಾನ್ದೃಷ್ಟ್ವಾ ಧಾರ್ತರಾಷ್ಟ್ರಾನ್ ಕಪಿಧ್ವಜಃ | ಪ್ರವೃತ್ತೇ ಶಸ್ತ್ರ�ಂಪಾತೇ ಧನುರುದ್ಯಮ್ಯ ಪಾಂಡವಃ ||",
        transliteration: "atha vyavasthitān dṛiṣhṭvā dhārtarāṣhṭrān kapidhvajaḥ | pravṛitte śhastrasampāte dhanurudyamya pāṇḍavaḥ",
        meaning: "ಆಗ ವ್ಯವಸ್ಥಿತರಾಗಿ ನಿಂತಿರುವ ಧಾರ್ತರಾಷ್ಟ್ರರನ್ನು ನೋಡಿ, ಶಸ್ತ್ರಸಂಪಾತ ಪ್ರಾರಂಭವಾದಾಗ ಕಪಿಧ್ವಜ ಪಾಂಡವನು..."
      },
      {
        id: "1-21",
        chapter: 1,
        verse: 21,
        kannada: "ಹೃಷೀಕೇಶಂ ತದಾ ವಾಕ್ಯಮಿದಮಾಹ ಮಹೀಪತೇ | ಅರ್ಜುನ ಉವಾಚ | ಸೇನಯೋರುಭಯೋರ್ಮಧ್ಯೇ ರಥಂ ಸ್ಥಾಪಯ ಮೇऽಚ್ಯುತ ||",
        transliteration: "hṛiṣhīkeśhaṁ tadā vākyam idam āha mahī-pate | arjuna uvācha | senayor ubhayor madhye rathaṁ sthāpaya me 'chyuta",
        meaning: "ಅರ್ಜುನನು ಹೇಳಿದನು: ಅಚ್ಯುತನೇ, ಎರಡು ಸೇನೆಗಳ ಮಧ್ಯದಲ್ಲಿ ನನ್ನ ರಥವನ್ನು ನಿಲ್ಲಿಸು."
      },
      {
        id: "1-22",
        chapter: 1,
        verse: 22,
        kannada: "ಯಾವದೇತಾನ್ನಿರೀಕ್ಷೇऽಹಂ ಯೋದ್ಧುಕಾಮಾನವಸ್ಥಿತಾನ್ | ಕೈರ್ಮಯಾ ಸಹ ಯೋದ್ಧವ್ಯಮಸ್ಮಿನ್ರಣಸಮುದ್ಯಮೇ ||",
        transliteration: "yāvad etān nirīkṣhe 'haṁ yoddhu-kāmān avasthitān | kair mayā saha yoddhavyam asmin raṇa-samudyame",
        meaning: "ಯುದ್ಧಕ್ಕೆ ಸಿದ್ಧರಾಗಿ ನಿಂತಿರುವ ಇವರನ್ನು ನೋಡಲಿ, ಈ ಯುದ್ಧದಲ್ಲಿ ನನ್ನೊಡನೆ ಯಾರೊಡನೆ ಯುದ್ಧ ಮಾಡಬೇಕಾಗಿದೆ ಎಂದು."
      },
      {
        id: "1-23",
        chapter: 1,
        verse: 23,
        kannada: "ಯೋತ್ಸ್ಯಮಾನಾನವೇಕ್ಷೇऽಹಂ ಯ ಏತೇऽತ್ರ ಸಮಾಗತಾಃ | ಧಾರ್ತರಾಷ್ಟ್ರಸ್ಯ ದುರ್ಬುದ್ಧೇರ್ಯುದ್ಧೇ ಪ್ರಿಯಚಿಕೀರ್ಷವಃ ||",
        transliteration: "yotsyamānān avekṣhe 'haṁ ya ete 'tra samāgatāḥ | dhārtarāṣhṭrasya durbuddher yuddhe priya-chikīrṣhavaḥ",
        meaning: "ಧಾರ್ತರಾಷ್ಟ್ರನ ದುರ್ಬುದ್ಧಿಗೆ ಪ್ರಿಯವನ್ನು ಮಾಡಲು ಇಲ್ಲಿ ಸೇರಿದ್ದು, ಯುದ್ಧ ಮಾಡಲು ಬಂದವರನ್ನು ನೋಡಲಿ."
      },
      {
        id: "1-24",
        chapter: 1,
        verse: 24,
        kannada: "ಸಂಜಯ ಉವಾಚ | ಏವಮುಕ್ತೋ ಹೃಷೀಕೇಶೋ ಗುಡಾಕೇಶೇನ ಭಾರತ | ಸೇನಯೋರುಭಯೋರ್ಮಧ್ಯೇ ಸ್ಥಾಪಯಿತ್ವಾ ರಥೋತ್ತಮಮ್ ||",
        transliteration: "sañjaya uvācha | evam ukto hṛiṣhīkeśho guḍākeśhena bhārata | senayor ubhayor madhye sthāpayitvā rathottamam",
        meaning: "ಸಂಜಯನು ಹೇಳಿದನು: ಭಾರತನೇ, ಹೀಗೆ ಗುಡಾಕೇಶನಿಂದ ಹೇಳಲ್ಪಟ್ಟ ಹೃಷೀಕೇಶನು ಎರಡು ಸೇನೆಗಳ ಮಧ್ಯದಲ್ಲಿ ಉತ್ತಮ ರಥವನ್ನು ನಿಲ್ಲಿಸಿದನು."
      },
      {
        id: "1-25",
        chapter: 1,
        verse: 25,
        kannada: "ಭೀಷ್ಮದ್ರೋಣಪ್ರಮುಖತಃ ಸರ್ವೇಷಾಂ ಚ ಮಹೀಕ್ಷಿತಾಮ್ | ಉವಾಚ ಪಾರ್ಥ ಪಶ್ಯೈತಾನ್ ಸಮವೇತಾನ್ ಕುರುನಿತಿ ||",
        transliteration: "bhīṣhma-droṇa-pramukhataḥ sarveṣhāṁ cha mahī-kṣhitām | uvācha pārtha paśhyaitān samavetān kurūn iti",
        meaning: "ಭೀಷ್ಮ, ದ್ರೋಣ ಮೊದಲಾದ ಎಲ್ಲಾ ರಾಜರ ಮುಂದೆ ಹೇಳಿದನು: ಪಾರ್ಥನೇ, ಸೇರಿರುವ ಕೌರವರನ್ನು ನೋಡು."
      },
      {
        id: "1-26",
        chapter: 1,
        verse: 26,
        kannada: "ತತ್ರಾಪಶ್ಯತ್ಸ್ಥಿತಾನ್ ಪಾರ್ಥಃ ಪಿತೄ್ನಥ ಪಿತಾಮಹಾನ್ | ಆಚಾರ್ಯಾನ್ ಮಾತುಲಾನ್ ಭ್ರಾತೄನ್ ಪುತ್ರಾನ್ ಪೌತ್ರಾನ್ ಸಖೀಂಸ್ತಥಾ ||",
        transliteration: "tatrāpaśhyat sthitān pārthaḥ pitṝn atha pitāmahān | āchāryān mātulān bhrātṝn putrān pautrān sakhīns tathā",
        meaning: "ಅಲ್ಲಿ ಪಾರ್ಥನು ತಂದೆಗಳು, ತಾತಂದಿರು, ಆಚಾರ್ಯರು, ಮಾವಂದಿರು, ಸಹೋದರರು, ಮಕ್ಕಳು, ಮೊಮ್ಮಕ್ಕಳು, ಸ್ನೇಹಿತರು ಇವರೆಲ್ಲರನ್ನು ನಿಂತಿರುವುದನ್ನು ಕಂಡನು."
      },
      {
        id: "1-27",
        chapter: 1,
        verse: 27,
        kannada: "ಶ್ವಶುರಾನ್ ಸುಹೃದಶ್ಚೈವ ಸೇನಯೋರುಭಯೋರಪಿ | ತಾನ್ ಸಮೀಕ್ಷ್ಯ ಸ ಕೌಂತೇಯಃ ಸರ್ವಾನ್ ಬಂಧೂನವಸ್ಥಿತಾನ್ ||",
        transliteration: "śhvaśhurān suhṛidaśh chaiva senayor ubhayor api | tān samīkṣhya sa kaunteyaḥ sarvān bandhūn avasthitān",
        meaning: "ಎರಡು ಸೇನೆಗಳಲ್ಲಿಯೂ ಮಾವಂದಿರು, ಸ್ನೇಹಿತರು ಇವರೆಲ್ಲರನ್ನು ನಿಂತಿರುವುದನ್ನು ಕಂಡು ಕೌಂತೇಯನಾದ ಅವನು..."
      },
      {
        id: "1-28",
        chapter: 1,
        verse: 28,
        kannada: "ಕೃಪಯಾ ಪರಯಾವಿಷ್ಟೋ ವಿಷೀದನ್ನಿದಮಬ್ರವೀತ್ | ದೃಷ್ಟ್ವೇಮಂ ಸ್ವಜನಂ ಕೃಷ್ಣ ಯುಯುತ್ಸುಂ ಸಮುಪಸ್ಥಿತಮ್ ||",
        transliteration: "kṛipayā parayāviṣhṭo viṣhīdann idam abravīt | dṛiṣhṭvemaṁ sva-janaṁ kṛiṣhṇa yuyutsuṁ samupasthitam",
        meaning: "ಪರಮ ದಯೆಯಿಂದ ತುಂಬಿ ದುಃಖಿಸುತ್ತಾ ಹೇಳಿದನು: ಕೃಷ್ಣನೇ, ಯುದ್ಧಕ್ಕೆ ಸಿದ್ಧರಾಗಿ ನಿಂತಿರುವ ಈ ಸ್ವಜನರನ್ನು ನೋಡಿ."
      },
      {
        id: "1-29",
        chapter: 1,
        verse: 29,
        kannada: "ಸೀದಂತಿ ಮಮ ಗಾತ್ರಾಣಿ ಮುಖಂ ಚ ಪರಿಶುಷ್ಯತಿ | ವೇಪಥುಶ್ಚ ಶರೀರೇ ಮೇ ರೋಮಹರ್ಷಶ್ಚ ಜಾಯತೇ ||",
        transliteration: "sīdanti mama gātrāṇi mukhaṁ cha pariśhuṣhyati | vepathuśh cha śharīre me roma-harṣhaśh cha jāyate",
        meaning: "ನನ್ನ ಅಂಗಗಳು ಬಳಲುತ್ತವೆ, ಬಾಯಿ ಒಣಗುತ್ತದೆ, ದೇಹದಲ್ಲಿ ನಡುಕವುಂಟಾಗುತ್ತದೆ, ರೋಮಾಂಚವು ಉಂಟಾಗುತ್ತದೆ."
      },
      {
        id: "1-30",
        chapter: 1,
        verse: 30,
        kannada: "ಗಾಂಡೀವಂ ಸ್ರಂಸತೇ ಹಸ್ತಾತ್ತ್ವಕ್ಚೈವ ಪರಿದಹ್ಯತೇ | ನ ಚ ಶಕ್ನೋಮ್ಯವಸ್ಥಾತುಂ ಭ್ರಮತೀವ ಚ ಮೇ ಮನಃ ||",
        transliteration: "gāṇḍīvaṁ sramsate hastāt tvak chaiva paridahyate | na cha śhaknomy avasthātuṁ bhramatīva cha me manaḥ",
        meaning: "ಗಾಂಡೀವವು ಕೈಯಿಂದ ಜಾರುತ್ತದೆ, ಚರ್ಮವು ಸುಡುತ್ತದೆ, ನಿಲ್ಲಲು ಸಾಧ್ಯವಿಲ್ಲ, ನನ್ನ ಮನಸ್ಸು ಭ್ರಮಿಸುತ್ತದೆ."
      },
      {
        id: "1-31",
        chapter: 1,
        verse: 31,
        kannada: "ನಿಮಿತ್ತಾನಿ ಚ ಪಶ್ಯಾಮಿ ವಿಪರೀತಾನಿ ಕೇಶವ | ನ ಚ ಶ್ರೇಯೋऽನುಪಶ್ಯಾಮಿ ಹತ್ವಾ ಸ್ವಜನಮಾಹವೇ ||",
        transliteration: "nimittāni cha paśhyāmi viparītāni keśhava | na cha śhreyo 'nupaśhyāmi hatvā sva-janam āhave",
        meaning: "ಕೇಶವನೇ, ವಿಪರೀತ ನಿಮಿತ್ತಗಳನ್ನು ನೋಡುತ್ತೇನೆ. ಸ್ವಜನರನ್ನು ಕೊಂದು ಯುದ್ಧದಲ್ಲಿ ಶ್ರೇಯಸ್ಸನ್ನು ಕಾಣುತ್ತಿಲ್ಲ."
      },
      {
        id: "1-32",
        chapter: 1,
        verse: 32,
        kannada: "ನ ಕಾಂಕ್ಷೇ ವಿಜಯಂ ಕೃಷ್ಣ ನ ಚ ರಾಜ್ಯಂ ಸುಖಾನಿ ಚ | ಕಿಂ ನೋ ರಾಜ್ಯೇನ ಗೋವಿಂದ ಕಿಂ ಭೋಗೈರ್ಜೀವಿತೇನ ವಾ ||",
        transliteration: "na kāṅkṣhe vijayaṁ kṛiṣhṇa na cha rājyaṁ sukhāni cha | kiṁ no rājyena govinda kiṁ bhogair jīvitena vā",
        meaning: "ಕೃಷ್ಣನೇ, ನನಗೆ ವಿಜಯ ಬೇಡ, ರಾಜ್ಯ ಬೇಡ, ಸುಖಗಳು ಬೇಡ. ಗೋವಿಂದನೇ, ರಾಜ್ಯದಿಂದ, ಭೋಗಗಳಿಂದ, ಜೀವನದಿಂದ ನಮಗೇನು ಪ್ರಯೋಜನ?"
      },
      {
        id: "1-33",
        chapter: 1,
        verse: 33,
        kannada: "ಯೇಷಾಮರ್ಥೇ ಕಾಂಕ್ಷಿತಂ ನೋ ರಾಜ್ಯಂ ಭೋಗಾಃ ಸುಖಾನಿ ಚ | ತ ಇಮೇऽವಸ್ಥಿತಾ ಯುದ್ಧೇ ಪ್ರಾಣಾಂಸ್ತ್ಯಕ್ತ್ವಾ ಧನಾನಿ ಚ ||",
        transliteration: "yeṣhām arthe kāṅkṣhitaṁ no rājyaṁ bhogāḥ sukhāni cha | ta ime 'vasthitā yuddhe prāṇāns tyaktvā dhanāni cha",
        meaning: "ಯಾರ ಅರ್ಥೆ ನಾವು ರಾಜ್ಯ, ಭೋಗ, ಸುಖಗಳನ್ನು ಬಯಸುತ್ತಿದ್ದೆವೋ, ಅವರು ಯುದ್ಧದಲ್ಲಿ ನಿಂತು ಪ್ರಾಣ ಮತ್ತು ಧನಗಳನ್ನು ತ್ಯಾಗ ಮಾಡುತ್ತಿದ್ದಾರೆ."
      },
      {
        id: "1-34",
        chapter: 1,
        verse: 34,
        kannada: "ಆಚಾರ್ಯಾಃ ಪಿತರಃ ಪುತ್ರಾಸ್ತಥೈವ ಚ ಪಿತಾಮಹಾಃ | ಮಾತುಲಾಃ ಶ್ವಶುರಾಃ ಪೌತ್ರಾಃ ಶ್ಯಾಲಾಃ ಸಂಬಂಧಿನಸ್ತಥಾ ||",
        transliteration: "āchāryāḥ pitaraḥ putrās tathaiva cha pitāmahāḥ | mātulāḥ śhvaśhurāḥ pautrāḥ śhyālāḥ sambandhinas tathā",
        meaning: "ಆಚಾರ್ಯರು, ತಂದೆಗಳು, ಮಕ್ಕಳು, ತಾತಂದಿರು, ಮಾವಂದಿರು, ಶ್ವಶುರರು, ಮೊಮ್ಮಕ್ಕಳು, ಶ್ಯಾಲಕರು, ಸಂಬಂಧಿಗಳು ಇವರೆಲ್ಲರೂ."
      },
      {
        id: "1-35",
        chapter: 1,
        verse: 35,
        kannada: "ಏತಾನ್ನ ಹಂತುಮಿಚ್ಛಾಮಿ ಘ್ನತೋऽಪಿ ಮಧುಸೂದನ | ಅಪಿ ತ್ರೈಲೋಕ್ಯರಾಜ್ಯಸ್ಯ ಹೇತೋಃ ಕಿಂ ನು ಮಹೀಕೃತೇ ||",
        transliteration: "etān na hantum ichchhāmi ghnato 'pi madhusūdana | api trailokya-rājyasya hetoḥ kiṁ nu mahī-kṛite",
        meaning: "ಮಧುಸೂದನನೇ, ಇವರನ್ನು ಕೊಲ್ಲಲು ನಾನು ಬಯಸುವುದಿಲ್ಲ. ಕೊಂದರೂ ಸಹ, ಮೂರು ಲೋಕಗಳ ರಾಜ್ಯಕ್ಕಾಗಿಯೂ ಏಕೆ ಹೇಳಬೇಕು, ಈ ಭೂಮಿಗಾಗಿಯೇ?"
      },
      {
        id: "1-36",
        chapter: 1,
        verse: 36,
        kannada: "ನಿಹತ್ಯ ಧಾರ್ತರಾಷ್ಟ್ರಾನ್ನಃ ಕಾ ಪ್ರೀತಿಃ ಸ್ಯಾಜ್ಜನಾರ್ದನ | ಪಾಪಮೇವಾಶ್ರಯೇದಸ್ಮಾನ್ ಹತ್ವೈತಾನಾತತಾಯಿನಃ ||",
        transliteration: "nihatya dhārtarāṣhṭrān naḥ kā prītiḥ syāj janārdana | pāpam evāśhrayed asmān hatvaitān ātatāyinaḥ",
        meaning: "ಜನಾರ್ದನನೇ, ಧಾರ್ತರಾಷ್ಟ್ರರನ್ನು ಕೊಂದರೆ ನಮಗೆ ಯಾವ ಸಂತೋಷ? ಈ ಆತತಾಯಿಗಳನ್ನು ಕೊಂದರೆ ಪಾಪವೇ ನಮ್ಮನ್ನು ಆಶ್ರಯಿಸುವುದು."
      },
      {
        id: "1-37",
        chapter: 1,
        verse: 37,
        kannada: "ತಸ್ಮಾನ್ನಾರ್ಹಾ ವಯಂ ಹಂತುಂ ಧಾರ್ತರಾಷ್ಟ್ರಾನ್ ಸ್ವಬಾಂಧವಾನ್ | ಸ್ವಜನಂ ಹಿ ಕಥಂ ಹತ್ವಾ ಸುಖಿನಃ ಸ್ಯಾಮ ಮಾಧವ ||",
        transliteration: "tasmān nārhā vayaṁ hantuṁ dhārtarāṣhṭrān sva-bāndhavān | sva-janaṁ hi kathaṁ hatvā sukhinaḥ syāma mādhava",
        meaning: "ಮಾಧವನೇ, ಆದ್ದರಿಂದ ಸ್ವಬಾಂಧವರಾದ ಧಾರ್ತರಾಷ್ಟ್ರರನ್ನು ಕೊಲ್ಲಲು ನಾವು ಯೋಗ್ಯರಲ್ಲ. ಸ್ವಜನರನ್ನು ಕೊಂದು ನಾವು ಹೇಗೆ ಸುಖಿಗಳಾಗಬಹುದು?"
      },
      {
        id: "1-38",
        chapter: 1,
        verse: 38,
        kannada: "ಯದ್ಯಪ್ಯೇತೇ ನ ಪಶ್ಯಂತಿ ಲೋಭೋಪಹತಚೇತಸಃ | ಕುಲಕ್ಷಯಕೃತಂ ದೋಷಂ ಮಿತ್ರದ್ರೋಹೇ ಚ ಪಾತಕಮ್ ||",
        transliteration: "yady apy ete na paśhyanti lobhopahata-chetasaḥ | kula-kṣhaya-kṛitaṁ doṣhaṁ mitra-drohe cha pātakam",
        meaning: "ಲೋಭದಿಂದ ಹತಚೇತನರಾದ ಇವರು ಕುಲಕ್ಷಯದ ದೋಷವನ್ನೂ, ಮಿತ್ರದ್ರೋಹದ ಪಾಪವನ್ನೂ ನೋಡುವುದಿಲ್ಲ."
      },
      {
        id: "1-39",
        chapter: 1,
        verse: 39,
        kannada: "ಕಥಂ ನ ಜ್ಞೇಯಮಸ್ಮಾಭಿಃ ಪಾಪಾದಸ್ಮಾನ್ನಿವರ್ತಿತುಮ್ | ಕುಲಕ್ಷಯಕೃತಂ ದೋಷಂ ಪ್ರಪಶ್ಯದ್ಭಿರ್ಜನಾರ್ದನ ||",
        transliteration: "kathaṁ na jñeyam asmābhiḥ pāpād asmān nivartitum | kula-kṣhaya-kṛitaṁ doṣhaṁ prapaśhyadbhir janārdana",
        meaning: "ಜನಾರ್ದನನೇ, ಕುಲಕ್ಷಯದ ದೋಷವನ್ನು ನೋಡುತ್ತಿರುವ ನಮಗೆ ಈ ಪಾಪದಿಂದ ನಿವೃತ್ತರಾಗಲು ತಿಳಿಯದೇ ಇರುವುದು ಹೇಗೆ?"
      },
      {
        id: "1-40",
        chapter: 1,
        verse: 40,
        kannada: "ಕುಲಕ್ಷಯೇ ಪ್ರಣಶ್ಯಂತಿ ಕುಲಧರ್ಮಾಃ ಸನಾತನಾಃ | ಧರ್ಮೇ ನಷ್ಟೇ ಕುಲಂ ಕೃತ್ಸ್ನಮಧರ್ಮೋऽಭಿಭವತ್ಯುತ ||",
        transliteration: "kula-kṣhaye praṇaśhyanti kula-dharmāḥ sanātanāḥ | dharme naṣhṭe kulaṁ kṛitsnam adharmo 'bhibhavaty uta",
        meaning: "ಕುಲಕ್ಷಯದಲ್ಲಿ ಸನಾತನ ಕುಲಧರ್ಮಗಳು ನಾಶವಾಗುತ್ತವೆ. ಧರ್ಮ ನಾಶವಾದಾಗ ಸಂಪೂರ್ಣ ಕುಲವನ್ನು ಅಧರ್ಮ ಆವರಿಸುತ್ತದೆ."
      },
      {
        id: "1-41",
        chapter: 1,
        verse: 41,
        kannada: "ಅಧರ್ಮಾಭಿಭವಾತ್ ಕೃಷ್ಣ ಪ್ರದುಷ್ಯಂತಿ ಕುಲಸ್ತ್ರಿಯಃ | ಸ್ತ್ರೀಷು ದುಷ್ಟಾಸು ವಾರ್ಷ್ಣೇಯ ಜಾಯತೇ ವರ್ಣಸಂಕರಃ ||",
        transliteration: "adharmābhibhavāt kṛiṣhṇa praduṣhyanti kula-striyaḥ | strīṣhu duṣhṭāsu vārṣhṇeya jāyate varṇa-saṅkaraḥ",
        meaning: "ಕೃಷ್ಣನೇ, ಅಧರ್ಮದ ಆವರಣದಿಂದ ಕುಲಸ್ತ್ರೀಯರು ದೂಷಿತರಾಗುತ್ತಾರೆ. ವಾರ್ಷ್ಣೇಯನೇ, ಸ್ತ್ರೀಯರು ದೂಷಿತರಾದಾಗ ವರ್ಣಸಂಕರ ಉಂಟಾಗುತ್ತದೆ."
      },
      {
        id: "1-42",
        chapter: 1,
        verse: 42,
        kannada: "ಸಂಕರೋ ನರಕಾಯೈವ ಕುಲಘ್ನಾನಾಂ ಕುಲಸ್ಯ ಚ | ಪತಂತಿ ಪಿತರೋ ಹ್ಯೇಷಾಂ ಲುಪ್ತಪಿಂಡೋದಕಕ್ರಿಯಾಃ ||",
        transliteration: "saṅkaro narakāyaiva kula-ghnānāṁ kulasya cha | patanti pitaro hy eṣhāṁ lupta-piṇḍodaka-kriyāḥ",
        meaning: "ವರ್ಣಸಂಕರವು ಕುಲಘಾತಕರಿಗೂ ಕುಲಕ್ಕೂ ನರಕಕ್ಕೆ ಕಾರಣವಾಗುತ್ತದೆ. ಪಿಂಡೋದಕ ಕ್ರಿಯೆಗಳು ನಿಂತ ಈ ಜನಗಳ ಪಿತೃಗಳು ಪತನಹೊಂದುತ್ತಾರೆ."
      },
      {
        id: "1-43",
        chapter: 1,
        verse: 43,
        kannada: "ದೋಷೈರೇತೈಃ ಕುಲಘ್ನಾನಾಂ ವರ್ಣಸಂಕರಕಾರಕೈಃ | ಉತ್ಸಾದ್ಯಂತೇ ಜಾತಿಧರ್ಮಾಃ ಕುಲಧರ್ಮಾಶ್ಚ ಶಾಶ್ವತಾಃ ||",
        transliteration: "doṣhair etaiḥ kula-ghnānāṁ varṇa-saṅkara-kārakaiḥ | utsādyante jāti-dharmāḥ kula-dharmāśh cha śhāśhvatāḥ",
        meaning: "ಈ ದೋಷಗಳಿಂದ ಕುಲಘಾತಕರಾದ ವರ್ಣಸಂಕರ ಕಾರಕರಿಂದ ಜಾತಿಧರ್ಮ ಮತ್ತು ಶಾಶ್ವತ ಕುಲಧರ್ಮಗಳು ನಾಶವಾಗುತ್ತವೆ."
      },
      {
        id: "1-44",
        chapter: 1,
        verse: 44,
        kannada: "ಉತ್ಸನ್ನಕುಲಧರ್ಮಾಣಾಂ ಮನುಷ್ಯಾಣಾಂ ಜನಾರ್ದನ | ನರಕೇ ನಿಯತಂ ವಾಸೋ ಭವತೀತ್ಯನುಶುಶ್ರುಮ ||",
        transliteration: "utsanna-kula-dharmāṇāṁ manuṣhyāṇāṁ janārdana | narake niyataṁ vāso bhavatīty anuśhuśhruma",
        meaning: "ಜನಾರ್ದನನೇ, ಕುಲಧರ್ಮ ನಾಶವಾದ ಮನುಷ್ಯರು ನರಕದಲ್ಲಿ ನಿಯತವಾಗಿ ವಾಸಿಸುತ್ತಾರೆಂದು ನಾನು ಕೇಳಿದ್ದೇನೆ."
      },
      {
        id: "1-45",
        chapter: 1,
        verse: 45,
        kannada: "ಅಹೋ ಬತ ಮಹತ್ಪಾಪಂ ಕರ್ತುಂ ವ್ಯವಸಿತಾ ವಯಮ್ | ಯದ್ರಾಜ್ಯಸುಖಲೋಭೇನ ಹಂತುಂ ಸ್ವಜನಮುದ್ಯತಾಃ ||",
        transliteration: "aho bata mahat pāpaṁ kartuṁ vyavasitā vayam | yad rājya-sukha-lobhena hantuṁ sva-janam udyatāḥ",
        meaning: "ಅಹೋ, ರಾಜ್ಯಸುಖದ ಲೋಭದಿಂದ ಸ್ವಜನರನ್ನು ಕೊಲ್ಲಲು ಉದ್ಯುಕ್ತರಾದ ನಾವು ಮಹಾಪಾಪ ಮಾಡಲು ನಿಶ್ಚಯಿಸಿದ್ದೇವೆ."
      },
      {
        id: "1-46",
        chapter: 1,
        verse: 46,
        kannada: "ಯದಿ ಮಾಮಪ್ರತೀಕಾರಮಶಸ್ತ್ರಂ ಶಸ್ತ್ರಪಾಣಯಃ | ಧಾರ್ತರಾಷ್ಟ್ರಾ ರಣೇ ಹನ್ಯುಸ್ತನ್ಮೇ ಕ್ಷೇಮತರಂ ಭವೇತ್ ||",
        transliteration: "yadi mām apratīkāram aśhastraṁ śhastra-pāṇayaḥ | dhārtarāṣhṭrā raṇe hanyus tan me kṣhemataraṁ bhavet",
        meaning: "ಶಸ್ತ್ರಪಾಣಿಗಳಾದ ಧಾರ್ತರಾಷ್ಟ್ರರು ಯುದ್ಧದಲ್ಲಿ ಪ್ರತೀಕಾರವಿಲ್ಲದ, ಅಶಸ್ತ್ರನಾದ ನನ್ನನ್ನು ಕೊಂದರೆ ಅದು ನನಗೆ ಹಿತಕರವಾಗಿರುತ್ತದೆ."
      },
      {
        id: "1-47",
        chapter: 1,
        verse: 47,
        kannada: "ಸಂಜಯ ಉವಾಚ | ಏವಮುಕ್ತ್ವಾರ್ಜುನಃ ಸಂಖ್ಯೇ ರಥೋಪಸ್ಥ ಉಪಾವಿಶತ್ | ವಿಸೃಜ್ಯ ಸಶರಂ ಚಾಪಂ ಶೋಕಸಂವಿಗ್ನಮಾನಸಃ ||",
        transliteration: "sañjaya uvācha | evam uktvārjunaḥ saṅkhye rathopastha upāviśhat | visṛijya sa-śharaṁ chāpaṁ śhoka-saṁvigna-mānasaḥ",
        meaning: "ಸಂಜಯನು ಹೇಳಿದನು: ಹೀಗೆ ಹೇಳಿ ಅರ್ಜುನನು ಯುದ್ಧಭೂಮಿಯಲ್ಲಿ ರಥದ ಮೇಲೆ ಕುಳಿತು, ಬಾಣಸಹಿತ ಧನುಸ್ಸನ್ನು ಬಿಟ್ಟು ಶೋಕದಿಂದ ವ್ಯಾಕುಲಚಿತ್ತನಾದನು."
      }
    ]
  },
  {
    id: 2,
    title: "Sankhya Yoga",
    kannadaTitle: "ಸಾಂಖ್ಯ ಯೋಗ",
    description: "ಆತ್ಮಜ್ಞಾನ ಮತ್ತು ಕರ್ಮಯೋಗ - Knowledge of the soul and the path of action",
    totalVerses: 72,
    verses: [
      {
        id: "2-1",
        chapter: 2,
        verse: 1,
        kannada: "ಸಂಜಯ ಉವಾಚ | ತಂ ತಥಾ ಕೃಪಯಾವಿಷ್ಟಮಶ್ರುಪೂರ್ಣಾಕುಲೇಕ್ಷಣಮ್ | ವಿಷೀದಂತಮಿದಂ ವಾಕ್ಯಮುವಾಚ ಮಧುಸೂದನಃ ||",
        transliteration: "sañjaya uvācha | taṁ tathā kṛipayāviṣhṭamaśhru-pūrṇākulekṣhaṇam | viṣhīdantamidaṁ vākyamuvācha madhusūdanaḥ",
        meaning: "ಸಂಜಯನು ಹೇಳಿದನು: ಹೀಗೆ ದಯೆಯಿಂದ ತುಂಬಿ, ಕಣ್ಣುಗಳಲ್ಲಿ ಕಣ್ಣೀರು ತುಂಬಿ ದುಃಖಿಸುತ್ತಿರುವ ಅರ್ಜುನನಿಗೆ ಮಧುಸೂದನನು ಈ ಮಾತುಗಳನ್ನು ಹೇಳಿದನು."
      },
      {
        id: "2-2",
        chapter: 2,
        verse: 2,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಕುತಸ್ತ್ವಾ ಕಶ್ಮಲಮಿದಂ ವಿಷಮೇ ಸಮುಪಸ್ಥಿತಮ್ | ಅನಾರ್ಯಜುಷ್ಟಮಸ್ವರ್ಗ್ಯಮಕೀರ್ತಿಕರಮರ್ಜುನ ||",
        transliteration: "śhrī-bhagavān uvācha | kutastvā kaśhmalamidaṁ viṣhame samupasthitam | anārya-juṣhṭamasvargyamakīrti-karamarjuna",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ಅರ್ಜುನನೇ, ಈ ಸಂಕಟದ ಸಮಯದಲ್ಲಿ ನಿನಗೆ ಈ ಮೋಹ ಎಲ್ಲಿಂದ ಬಂತು? ಇದು ಶ್ರೇಷ್ಠರಿಗೆ ಯೋಗ್ಯವಲ್ಲ, ಸ್ವರ್ಗವನ್ನು ಕೊಡದು ಮತ್ತು ಅಪಕೀರ್ತಿಯನ್ನು ತರುತ್ತದೆ."
      },
      {
        id: "2-3",
        chapter: 2,
        verse: 3,
        kannada: "ಕ್ಲೈಬ್ಯಂ ಮಾ ಸ್ಮ ಗಮಃ ಪಾರ್ಥ ನೈತತ್ತ್ವಯ್ಯುಪಪದ್ಯತೇ | ಕ್ಷುದ್ರಂ ಹೃದಯದೌರ್ಬಲ್ಯಂ ತ್ಯಕ್ತ್ವೋತ್ತಿಷ್ಠ ಪರಂತಪ ||",
        transliteration: "klaibyaṁ mā sma gamaḥ pārtha naitat tvayyupapadyate | kṣhudraṁ hṛidaya-daurbalyaṁ tyaktvottiṣhṭha parantapa",
        meaning: "ಪಾರ್ಥನೇ, ಈ ಕ್ಲೀಬತ್ವವನ್ನು ತ್ಯಜಿಸು. ಇದು ನಿನಗೆ ಶೋಭಿಸುವುದಿಲ್ಲ. ಹೃದಯದ ಕ್ಷುದ್ರ ದೌರ್ಬಲ್ಯವನ್ನು ಬಿಟ್ಟು ಏಳು, ಶತ್ರುಗಳನ್ನು ದಂಡಿಸುವವನೇ."
      },
      {
        id: "2-4",
        chapter: 2,
        verse: 4,
        kannada: "ಅರ್ಜುನ ಉವಾಚ | ಕಥಂ ಭೀಷ್ಮಮಹಂ ಸಂಖ್ಯೇ ದ್ರೋಣಂ ಚ ಮಧುಸೂದನ | ಇಷುಭಿಃ ಪ್ರತಿಯೋತ್ಸ್ಯಾಮಿ ಪೂಜಾರ್ಹಾವರಿಸೂದನ ||",
        transliteration: "arjuna uvācha | kathaṁ bhīṣhmam ahaṁ saṅkhye droṇaṁ cha madhusūdana | iṣhubhiḥ pratiyotsyāmi pūjārhāv ari-sūdana",
        meaning: "ಅರ್ಜುನನು ಹೇಳಿದನು: ಮಧುಸೂದನನೇ, ಶತ್ರುಸೂದನನೇ, ಯುದ್ಧದಲ್ಲಿ ಪೂಜಾರ್ಹರಾದ ಭೀಷ್ಮ ಮತ್ತು ದ್ರೋಣರ ಮೇಲೆ ಬಾಣಗಳಿಂದ ಹೇಗೆ ಯುದ್ಧ ಮಾಡಲಿ?"
      },
      {
        id: "2-5",
        chapter: 2,
        verse: 5,
        kannada: "ಗುರುನಹತ್ವಾ ಹಿ ಮಹಾನುಭಾವಾನ್ ಶ್ರೇಯೋ ಭೋಕ್ತುಂ ಭೈಕ್ಷ್ಯಮಪೀಹ ಲೋಕೇ | ಹತ್ವಾರ್ಥಕಾಮಾಂಸ್ತು ಗುರುನಿಹೈವ ಭುಂಜೀಯ ಭೋಗಾನ್ ರುಧಿರಪ್ರದಿಗ್ಧಾನ್ ||",
        transliteration: "gurūn ahatvā hi mahānubhāvān śhreyo bhoktuṁ bhaikṣhyam apīha loke | hatvārtha-kāmāṁs tu gurun ihaiva bhuñjīya bhogān rudhira-pradigdhān",
        meaning: "ಮಹಾನುಭಾವ ಗುರುಗಳನ್ನು ಕೊಲ್ಲದೆ ಈ ಲೋಕದಲ್ಲಿ ಭಿಕ್ಷೆಯನ್ನು ತಿನ್ನುವುದು ಶ್ರೇಯಸ್ಕರ. ಗುರುಗಳನ್ನು ಕೊಂದು ರಕ್ತದಿಂದ ಕಲೆತ ಭೋಗಗಳನ್ನು ಅನುಭವಿಸುವುದಕ್ಕಿಂತ."
      },
      {
        id: "2-6",
        chapter: 2,
        verse: 6,
        kannada: "ನ ಚೈತದ್ವಿದ್ಮಃ ಕತರನ್ನೋ ಗರೀಯೋ ಯದ್ವಾ ಜಯೇಮ ಯದಿ ವಾ ನೋ ಜಯೇಯುಃ | ಯಾನೇವ ಹತ್ವಾ ನ ಜಿಜೀವಿಷಾಮಸ್ತೇऽವಸ್ಥಿತಾಃ ಪ್ರಮುಖೇ ಧಾರ್ತರಾಷ್ಟ್ರಾಃ ||",
        transliteration: "na chaitad vidmaḥ kataranno garīyo yadvā jayema yadi vā no jayeyuḥ | yān eva hatvā na jijīviṣhāmas te 'vasthitāḥ pramukhe dhārtarāṣhṭrāḥ",
        meaning: "ಯಾರನ್ನು ಕೊಂದು ಬದುಕಲು ಬಯಸುವುದಿಲ್ಲವೋ, ಅವರು ಧಾರ್ತರಾಷ್ಟ್ರರು ನಮ್ಮ ಮುಂದೆ ನಿಂತಿದ್ದಾರೆ. ನಾವು ಗೆದ್ದರೂ ಜಯಿಸಿದರೂ ಯಾವುದು ಉತ್ತಮವೆಂದು ತಿಳಿಯುವುದಿಲ್ಲ."
      },
      {
        id: "2-7",
        chapter: 2,
        verse: 7,
        kannada: "ಕಾರ್ಪಣ್ಯದೋಷೋಪಹತಸ್ವಭಾವಃ ಪೃಚ್ಛಾಮಿ ತ್ವಾಂ ಧರ್ಮಸಂಮೂಢಚೇತಾಃ | ಯಚ್ಛ್ರೇಯಃ ಸ್ಯಾನ್ನಿಶ್ಚಿತಂ ಬ್ರೂಹಿ ತನ್ಮೇ ಶಿಷ್ಯಸ್ತೇऽಹಂ ಶಾಧಿ ಮಾಂ ತ್ವಾಂ ಪ್ರಪನ್ನಮ್ ||",
        transliteration: "kārpaṇya-doṣhopahata-svabhāvaḥ pṛichchhāmi tvāṁ dharma-sammūḍha-chetāḥ | yach chhreyaḥ syān niśhchitaṁ brūhi tan me śhiṣhyas te 'haṁ śhādhi māṁ tvāṁ prapannam",
        meaning: "ಕಾರ್ಪಣ್ಯದೋಷದಿಂದ ಹತಸ್ವಭಾವನಾಗಿ, ಧರ್ಮದಲ್ಲಿ ಮೂಢಚಿತ್ತನಾಗಿ ನಿನ್ನನ್ನು ಕೇಳುತ್ತೇನೆ. ನನಗೆ ನಿಶ್ಚಿತವಾಗಿ ಯಾವುದು ಶ್ರೇಯಸ್ಕರವೋ ಅದನ್ನು ಹೇಳು. ನಾನು ನಿನ್ನ ಶಿಷ್ಯನಾಗಿ, ನಿನ್ನನ್ನು ಶರಣು ಹೋದವನಾಗಿ, ನನ್ನನ್ನು ಉಪದೇಶಿಸು."
      },
      {
        id: "2-8",
        chapter: 2,
        verse: 8,
        kannada: "ನ ಹಿ ಪ್ರಪಶ್ಯಾಮಿ ಮಮಾಪನುದ್ಯಾದ್ಯಚ್ಛೋಕಮುಚ್ಛೋಷಣಮಿಂದ್ರಿಯಾಣಾಮ್ | ಅವಾಪ್ಯ ಭೂಮಾವಸಪತ್ನಮೃದ್ಧಂ ರಾಜ್ಯಂ ಸುರಾಣಾಮಪಿ ಚಾಧಿಪತ್ಯಮ್ ||",
        transliteration: "na hi prapaśhyāmi mamāpanudyād yach chhokam uchchhoṣhaṇam indriyāṇām | avāpya bhūmāv asapatnam ṛiddhaṁ rājyaṁ surāṇām api chādhipatyam",
        meaning: "ಯಾವುದು ನನ್ನ ಶೋಕವನ್ನು ಹೋಗಲಾಡಿಸುವುದೋ, ಇಂದ್ರಿಯಗಳ ಶೋಷಣೆಯನ್ನು ನಿವಾರಿಸುವುದೋ, ಅದನ್ನು ನಾನು ಕಾಣೆ. ಶತ್ರುರಹಿತವಾದ ಈ ಭೂಮಿಯಲ್ಲಿ ಸಮೃದ್ಧ ರಾಜ್ಯವನ್ನೂ, ದೇವತೆಗಳ ಅಧಿಪತ್ಯವನ್ನೂ ಪಡೆದರೂ ಸಹ."
      },
      {
        id: "2-9",
        chapter: 2,
        verse: 9,
        kannada: "ಸಂಜಯ ಉವಾಚ | ಏವಮುಕ್ತ್ವಾ ಹೃಷೀಕೇಶಂ ಗುಡಾಕೇಶಃ ಪರಂತಪಃ | ನ ಯೋತ್ಸ್ಯ ಇತಿ ಗೋವಿಂದಮುಕ್ತ್ವಾ ತೂಷ್ಣೀಂ ಬಭೂವ ಹ ||",
        transliteration: "sañjaya uvācha | evam uktvā hṛiṣhīkeśhaṁ guḍākeśhaḥ parantapaḥ | na yotsya iti govindam uktvā tūṣhṇīṁ babhūva ha",
        meaning: "ಸಂಜಯನು ಹೇಳಿದನು: ಹೀಗೆ ಹೇಳಿ, ಶತ್ರುಗಳನ್ನು ದಂಡಿಸುವ ಗುಡಾಕೇಶನು ಹೃಷೀಕೇಶನಿಗೆ 'ಗೋವಿಂದನೇ, ನಾನು ಯುದ್ಧ ಮಾಡುವುದಿಲ್ಲ' ಎಂದು ಹೇಳಿ ಮೌನವಾಗಿ ನಿಂತನು."
      },
      {
        id: "2-10",
        chapter: 2,
        verse: 10,
        kannada: "ತಮುವಾಚ ಹೃಷೀಕೇಶಃ ಪ್ರಹಸನ್ನಿವ ಭಾರತ | ಸೇನಯೋರುಭಯೋರ್ಮಧ್ಯೇ ವಿಷೀದಂತಮಿದಂ ವಚಃ ||",
        transliteration: "tam uvācha hṛiṣhīkeśhaḥ prahasann iva bhārata | senayor ubhayor madhye viṣhīdantam idaṁ vachaḥ",
        meaning: "ಭಾರತನೇ, ಎರಡು ಸೇನೆಗಳ ಮಧ್ಯದಲ್ಲಿ ದುಃಖಿಸುತ್ತಿರುವ ಅವನಿಗೆ ಹೃಷೀಕೇಶನು ಹಾಸ್ಯಮಾಡುವಂತೆ ಈ ಮಾತುಗಳನ್ನು ಹೇಳಿದನು."
      },
      {
        id: "2-11",
        chapter: 2,
        verse: 11,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಅಶೋಚ್ಯಾನನ್ವಶೋಚಸ್ತ್ವಂ ಪ್ರಜ್ಞಾವಾದಾಂಶ್ಚ ಭಾಷಸೇ | ಗತಾಸೂನಗತಾಸೂಂಶ್ಚ ನಾನುಶೋಚಂತಿ ಪಂಡಿತಾಃ ||",
        transliteration: "śhrī-bhagavān uvācha | aśhochyān anvaśhochas tvaṁ prajñā-vādāṁśh cha bhāṣhase | gatāsūn agatāsūṁśh cha nānuśhochanti paṇḍitāḥ",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ನೀನು ಶೋಚ್ಯರಲ್ಲದವರಿಗಾಗಿ ಶೋಕಿಸುತ್ತೀ, ಪಂಡಿತರ ಮಾತುಗಳನ್ನಾಡುತ್ತೀ. ಆದರೆ ಪಂಡಿತರು ಜೀವ ಹೋದವರಿಗಾಗಿಯೂ, ಜೀವ ಇರುವವರಿಗಾಗಿಯೂ ಶೋಕಿಸುವುದಿಲ್ಲ."
      },
      {
        id: "2-12",
        chapter: 2,
        verse: 12,
        kannada: "ನ ತ್ವೇವಾಹಂ ಜಾತು ನಾಸಂ ನ ತ್ವಂ ನೇಮೇ ಜನಾಧಿಪಾಃ | ನ ಚೈವ ನ ಭವಿಷ್ಯಾಮಃ ಸರ್ವೇ ವಯಮತಃ ಪರಮ್ ||",
        transliteration: "na tvevāhaṁ jātu nāsaṁ na tvaṁ neme janādhipāḥ | na chaiva na bhaviṣhyāmaḥ sarve vayam ataḥ param",
        meaning: "ನಾನು ಎಂದೂ ಇರಲಿಲ್ಲ ಎಂದು ಇಲ್ಲ, ನೀನು ಇರಲಿಲ್ಲ ಎಂದು ಇಲ್ಲ, ಈ ರಾಜರುಗಳು ಇರಲಿಲ್ಲ ಎಂದು ಇಲ್ಲ. ಇನ್ನು ಮುಂದೆಯೂ ನಾವೆಲ್ಲರೂ ಇರುವುದಿಲ್ಲ ಎಂದು ಇಲ್ಲ."
      },
      {
        id: "2-13",
        chapter: 2,
        verse: 13,
        kannada: "ದೇಹಿನೋऽಸ್ಮಿನ್ಯಥಾ ದೇಹೇ ಕೌಮಾರಂ ಯೌವನಂ ಜರಾ | ತಥಾ ದೇಹಾಂತರಪ್ರಾಪ್ತಿರ್ಧೀರಸ್ತತ್ರ ನ ಮುಹ್ಯತಿ ||",
        transliteration: "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā | tathā dehāntara-prāptir dhīras tatra na muhyati",
        meaning: "ಈ ದೇಹದಲ್ಲಿ ಜೀವಾತ್ಮನಿಗೆ ಬಾಲ್ಯ, ಯೌವನ, ವಾರ್ಧಕ್ಯಗಳು ಬರುತ್ತವೆ. ಹಾಗೆಯೇ ದೇಹಾಂತರ ಪ್ರಾಪ್ತಿಯೂ ಉಂಟು. ಇದರಿಂದ ಧೀರನು ಮೋಹಗೊಳ್ಳುವುದಿಲ್ಲ."
      },
      {
        id: "2-14",
        chapter: 2,
        verse: 14,
        kannada: "ಮಾತ್ರಾಸ್ಪರ್ಶಾಸ್ತು ಕೌಂತೇಯ ಶೀತೋಷ್ಣಸುಖದುಃಖದಾಃ | ಆಗಮಾಪಾಯಿನೋऽನಿತ್ಯಾಸ್ತಾಂಸ್ತಿತಿಕ್ಷಸ್ವ ಭಾರತ ||",
        transliteration: "mātrā-sparśhās tu kaunteya śhītoṣhṇa-sukha-duḥkha-dāḥ | āgamāpāyino 'nityās tāns titikṣhasva bhārata",
        meaning: "ಕೌಂತೇಯನೇ, ಇಂದ್ರಿಯಗಳಿಗೆ ವಿಷಯಗಳ ಸಂಪರ್ಕದಿಂದ ಶೀತೋಷ್ಣ, ಸುಖದುಃಖಗಳು ಉಂಟಾಗುತ್ತವೆ. ಅವು ಆಗಮನಾಪಾಯಗಳುಳ್ಳವು, ಅನಿತ್ಯವಾದವು. ಅವುಗಳನ್ನು ಸಹಿಸಿಕೊಳ್ಳು, ಭಾರತನೇ."
      },
      {
        id: "2-15",
        chapter: 2,
        verse: 15,
        kannada: "ಯಂ ಹಿ ನ ವ್ಯಥಯಂತ್ಯೇತೇ ಪುರುಷಂ ಪುರುಷರ್ಷಭ | ಸಮದುಃಖಸುಖಂ ಧೀರಂ ಸೋऽಮೃತತ್ವಾಯ ಕಲ್ಪತೇ ||",
        transliteration: "yaṁ hi na vyathayanty ete puruṣhaṁ puruṣharṣhabha | sama-duḥkha-sukhaṁ dhīraṁ so 'mṛitatvāya kalpate",
        meaning: "ಪುರುಷಶ್ರೇಷ್ಠನೇ, ಈ ಸುಖದುಃಖಗಳು ಯಾರನ್ನು ವ್ಯಥೆಪಡಿಸುವುದಿಲ್ಲವೋ, ಸಮದುಃಖಸುಖನಾದ ಧೀರನಾದ ಅವನು ಅಮರತ್ವಕ್ಕೆ ಯೋಗ್ಯನಾಗುತ್ತಾನೆ."
      },
      {
        id: "2-16",
        chapter: 2,
        verse: 16,
        kannada: "ನಾಸತೋ ವಿದ್ಯತೇ ಭಾವೋ ನಾಭಾವೋ ವಿದ್ಯತೇ ಸತಃ | ಉಭಯೋರಪಿ ದೃಷ್ಟೋऽಂತಸ್ತ್ವನಯೋಸ್ತತ್ತ್ವದರ್ಶಿಭಿಃ ||",
        transliteration: "nāsato vidyate bhāvo nābhāvo vidyate sataḥ | ubhayor api dṛiṣhṭo 'ntas tv anayos tattva-darśhibhiḥ",
        meaning: "ಅಸತ್ತಿಗೆ ಭಾವವಿಲ್ಲ, ಸತ್ತಿಗೆ ಅಭಾವವಿಲ್ಲ. ಇವೆರಡರ ಅಂತಃಸ್ಥಿತಿಯನ್ನು ತತ್ತ್ವದರ್ಶಿಗಳು ನೋಡಿದ್ದಾರೆ."
      },
      {
        id: "2-17",
        chapter: 2,
        verse: 17,
        kannada: "ಅವಿನಾಶಿ ತು ತದ್ವಿದ್ಧಿ ಯೇನ ಸರ್ವಮಿದಂ ತತಮ್ | ವಿನಾಶಮವ್ಯಯಸ್ಯಾಸ್ಯ ನ ಕಶ್ಚಿತ್ಕರ್ತುಮರ್ಹತಿ ||",
        transliteration: "avināśhi tu tad viddhi yena sarvam idaṁ tatam | vināśham avyayasyāsya na kaśhchit kartum arhati",
        meaning: "ಅವಿನಾಶಿಯಾದ ಆ ಆತ್ಮವನ್ನು ತಿಳಿದುಕೊಳ್ಳು, ಅದರಿಂದ ಈ ಸಮಸ್ತವೂ ವ್ಯಾಪ್ತವಾಗಿದೆ. ಈ ಅವ್ಯಯ ಆತ್ಮನ ವಿನಾಶವನ್ನು ಯಾರೂ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ."
      },
      {
        id: "2-18",
        chapter: 2,
        verse: 18,
        kannada: "ಅಂತವಂತ ಇಮೇ ದೇಹಾ ನಿತ್ಯಸ್ಯೋಕ್ತಾಃ ಶರೀರಿಣಃ | ಅನಾಶಿನೋऽಪ್ರಮೇಯಸ್ಯ ತಸ್ಮಾದ್ಯುದ್ಧ್ಯಸ್ವ ಭಾರತ ||",
        transliteration: "antavanta ime dehā nityasyoktāḥ śharīriṇaḥ | anāśhino 'prameyasya tasmād yuddhyasva bhārata",
        meaning: "ಈ ದೇಹಗಳು ಅಂತ್ಯವುಳ್ಳವು. ಆದರೆ ಶರೀರಿಯಾದ ಆತ್ಮನಿತ್ಯ, ಅನಾಶಿ, ಅಪ್ರಮೇಯ. ಆದ್ದರಿಂದ ಭಾರತನೇ, ಯುದ್ಧ ಮಾಡು."
      },
      {
        id: "2-19",
        chapter: 2,
        verse: 19,
        kannada: "ಯ ಏನಂ ವೇತ್ತಿ ಹಂತಾರಂ ಯಶ್ಚೈನಂ ಮನ್ಯತೇ ಹತಮ್ | ಉಭೌ ತೌ ನ ವಿಜಾನೀತೋ ನಾಯಂ ಹಂತಿ ನ ಹನ್ಯತೇ ||",
        transliteration: "ya enaṁ vetti hantāraṁ yaśh chainaṁ manyate hatam | ubhau tau na vijānīto nāyaṁ hanti na hanyate",
        meaning: "ಯಾರು ಇವನನ್ನು ಕೊಲ್ಲುವವನೆಂದೂ, ಇವನು ಕೊಲ್ಲಲ್ಪಡುವನೆಂದೂ ಭಾವಿಸುವರೋ, ಅವರಿಬ್ಬರೂ ತಿಳಿಯದವರು. ಇವನು ಕೊಲ್ಲುವುದಿಲ್ಲ, ಕೊಲ್ಲಲ್ಪಡುವುದಿಲ್ಲ."
      },
      {
        id: "2-20",
        chapter: 2,
        verse: 20,
        kannada: "ನ ಜಾಯತೇ ಮ್ರಿಯತೇ ವಾ ಕದಾಚಿನ್ನಾಯಂ ಭೂತ್ವಾ ಭವಿತಾ ವಾ ನ ಭೂಯಃ | ಅಜೋ ನಿತ್ಯಃ ಶಾಶ್ವತೋऽಯಂ ಪುರಾಣೋ ನ ಹನ್ಯತೇ ಹನ್ಯಮಾನೇ ಶರೀರೇ ||",
        transliteration: "na jāyate mriyate vā kadāchin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ | ajo nityaḥ śhāśhvato 'yaṁ purāṇo na hanyate hanyamāne śharīre",
        meaning: "ಇವನು ಎಂದೂ ಜನಿಸುವುದಿಲ್ಲ, ಸಾಯುವುದೂ ಇಲ್ಲ. ಇವನು ಹುಟ್ಟಿ ಮತ್ತೆ ಇರುವವನೂ ಅಲ್ಲ. ಇವನು ಅಜ, ನಿತ್ಯ, ಶಾಶ್ವತ, ಪುರಾಣ. ದೇಹ ಕೊಲ್ಲಲ್ಪಟ್ಟಾಗಲೂ ಇವನು ಕೊಲ್ಲಲ್ಪಡುವುದಿಲ್ಲ."
      },
      {
        id: "2-21",
        chapter: 2,
        verse: 21,
        kannada: "ವೇದಾವಿನಾಶಿನಂ ನಿತ್ಯಂ ಯ ಏನಮಜಮವ್ಯಯಮ್ | ಕಥಂ ಸ ಪುರುಷಃ ಪಾರ್ಥ ಕಂ ಘಾತಯತಿ ಹಂತಿ ಕಮ್ ||",
        transliteration: "vedāvināśhinaṁ nityaṁ ya enam ajam avyayam | kathaṁ sa puruṣhaḥ pārtha kaṁ ghātayati hanti kam",
        meaning: "ಪಾರ್ಥನೇ, ಯಾರು ಇವನು ಅವಿನಾಶಿ, ನಿತ್ಯ, ಅಜ, ಅವ್ಯಯ ಎಂದು ತಿಳಿಯುವನೋ, ಅವನು ಯಾರನ್ನು ಕೊಲ್ಲುತ್ತಾನೆ, ಯಾರನ್ನು ಕೊಲ್ಲಿಸುತ್ತಾನೆ?"
      },
      {
        id: "2-22",
        chapter: 2,
        verse: 22,
        kannada: "ವಾಸಾಂಸಿ ಜೀರ್ಣಾನಿ ಯಥಾ ವಿಹಾಯ ನವಾನಿ ಗೃಹ್ಣಾತಿ ನರೋऽಪರಾಣಿ | ತಥಾ ಶರೀರಾಣಿ ವಿಹಾಯ ಜೀರ್ಣಾನ್ಯನ್ಯಾನಿ ಸಂಯಾತಿ ನವಾನಿ ದೇಹೀ ||",
        transliteration: "vāsāṁsi jīrṇāni yathā vihāya navāni gṛihṇāti naro 'parāṇi | tathā śharīrāṇi vihāya jīrṇāny anyāni saṁyāti navāni dehī",
        meaning: "ಮನುಷ್ಯನು ಜೀರ್ಣವಸ್ತ್ರಗಳನ್ನು ತ್ಯಜಿಸಿ ಹೊಸ ವಸ್ತ್ರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವಂತೆ, ದೇಹಿಯು ಜೀರ್ಣ ದೇಹಗಳನ್ನು ತ್ಯಜಿಸಿ ಹೊಸ ದೇಹಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "2-23",
        chapter: 2,
        verse: 23,
        kannada: "ನೈನಂ ಛಿಂದಂತಿ ಶಸ್ತ್ರಾಣಿ ನೈನಂ ದಹತಿ ಪಾವಕಃ | ನ ಚೈನಂ ಕ್ಲೇದಯಂತ್ಯಾಪೋ ನ ಶೋಷಯತಿ ಮಾರುತಃ ||",
        transliteration: "nainaṁ chhindanti śhastrāṇi nainaṁ dahati pāvakaḥ | na chainaṁ kledayanty āpo na śhoṣhayati mārutaḥ",
        meaning: "ಶಸ್ತ್ರಗಳು ಇವನನ್ನು ಕತ್ತರಿಸಲಾರವು, ಅಗ್ನಿ ಇವನನ್ನು ಸುಡಲಾರದು, ನೀರು ಇವನನ್ನು ತೋಯಿಸಲಾರದು, ವಾಯು ಇವನನ್ನು ಒಣಗಿಸಲಾರದು."
      },
      {
        id: "2-24",
        chapter: 2,
        verse: 24,
        kannada: "ಅಚ್ಛೇದ್ಯೋऽಯಮದಾಹ್ಯೋऽಯಮಕ್ಲೇದ್ಯೋऽಶೋಷ್ಯ ಏವ ಚ | ನಿತ್ಯಃ ಸರ್ವಗತಃ ಸ್ಥಾಣುರಚಲೋऽಯಂ ಸನಾತನಃ ||",
        transliteration: "achchhedyo 'yam adāhyo 'yam akledyo 'śhoṣhya eva cha | nityaḥ sarva-gataḥ sthāṇur achalo 'yaṁ sanātanaḥ",
        meaning: "ಇವನು ಅಚ್ಛೇದ್ಯ, ಅದಾಹ್ಯ, ಅಕ್ಲೇದ್ಯ, ಅಶೋಷ್ಯ. ಇವನು ನಿತ್ಯ, ಸರ್ವಗತ, ಸ್ಥಾಣು, ಅಚಲ, ಸನಾತನ."
      },
      {
        id: "2-25",
        chapter: 2,
        verse: 25,
        kannada: "ಅವ್ಯಕ್ತೋऽಯಮಚಿಂತ್ಯೋऽಯಮವಿಕಾರ್ಯೋऽಯಮುಚ್ಯತೇ | ತಸ್ಮಾದೇವಂ ವಿದಿತ್ವೈನಂ ನಾನುಶೋಚಿತುಮರ್ಹಸಿ ||",
        transliteration: "avyakto 'yam achintyo 'yam avikāryo 'yam uchyate | tasmād evaṁ viditvainam nānuśhochitum arhasi",
        meaning: "ಇವನು ಅವ್ಯಕ್ತ, ಅಚಿಂತ್ಯ, ಅವಿಕಾರ್ಯ ಎಂದು ಹೇಳಲ್ಪಡುತ್ತಾನೆ. ಆದ್ದರಿಂದ ಇವನನ್ನು ಈ ರೀತಿ ತಿಳಿದು ನೀನು ಶೋಕಿಸಲು ಯೋಗ್ಯನಲ್ಲ."
      },
      {
        id: "2-26",
        chapter: 2,
        verse: 26,
        kannada: "ಅಥ ಚೈನಂ ನಿತ್ಯಜಾತಂ ನಿತ್ಯಂ ವಾ ಮನ್ಯಸೇ ಮೃತಮ್ | ತಥಾಪಿ ತ್ವಂ ಮಹಾಬಾಹೋ ನೈವಂ ಶೋಚಿತುಮರ್ಹಸಿ ||",
        transliteration: "atha chainaṁ nitya-jātaṁ nityaṁ vā manyase mṛitam | tathāpi tvaṁ mahā-bāho naivaṁ śhochitum arhasi",
        meaning: "ಮಹಾಬಾಹುವೇ, ನೀನು ಇವನು ನಿತ್ಯ ಜನಿಸುವನೆಂದೂ, ನಿತ್ಯ ಸಾಯುವನೆಂದೂ ಭಾವಿಸಿದರೂ ಸಹ, ಹೀಗೆ ಶೋಕಿಸಲು ಯೋಗ್ಯನಲ್ಲ."
      },
      {
        id: "2-27",
        chapter: 2,
        verse: 27,
        kannada: "ಜಾತಸ್ಯ ಹಿ ಧ್ರುವೋ ಮೃತ್ಯುರ್ಧ್ರುವಂ ಜನ್ಮ ಮೃತಸ್ಯ ಚ | ತಸ್ಮಾದಪರಿಹಾರ್ಯೇऽರ್ಥೇ ನ ತ್ವಂ ಶೋಚಿತುಮರ್ಹಸಿ ||",
        transliteration: "jātasya hi dhruvo mṛityur dhruvaṁ janma mṛitasya cha | tasmād aparihārye 'rthe na tvaṁ śhochitum arhasi",
        meaning: "ಹುಟ್ಟಿದವನಿಗೆ ಮರಣ ಧ್ರುವವಾಗಿದೆ, ಸತ್ತವನಿಗೆ ಜನ್ಮ ಧ್ರುವವಾಗಿದೆ. ಆದ್ದರಿಂದ ಅಪರಿಹಾರ್ಯವಾದ ಈ ವಿಷಯದಲ್ಲಿ ನೀನು ಶೋಕಿಸಲು ಯೋಗ್ಯನಲ್ಲ."
      },
      {
        id: "2-28",
        chapter: 2,
        verse: 28,
        kannada: "ಅವ್ಯಕ್ತಾದೀನಿ ಭೂತಾನಿ ವ್ಯಕ್ತಮಧ್ಯಾನಿ ಭಾರತ | ಅವ್ಯಕ್ತನಿಧನಾನ್ಯೇವ ತತ್ರ ಕಾ ಪರಿದೇವನಾ ||",
        transliteration: "avyaktādīni bhūtāni vyakta-madhyāni bhārata | avyakta-nidhanāny eva tatra kā paridevanā",
        meaning: "ಭಾರತನೇ, ಭೂತಗಳು ಆದಿಯಲ್ಲಿ ಅವ್ಯಕ್ತವಾಗಿದ್ದು, ಮಧ್ಯದಲ್ಲಿ ವ್ಯಕ್ತವಾಗುತ್ತವೆ. ಅಂತ್ಯದಲ್ಲಿ ಅವ್ಯಕ್ತವಾಗಿಯೇ ನಾಶವಾಗುತ್ತವೆ. ಆದ್ದರಿಂದ ಇಲ್ಲಿ ಏನು ಶೋಕ?"
      },
      {
        id: "2-29",
        chapter: 2,
        verse: 29,
        kannada: "ಆಶ್ಚರ್ಯವತ್ ಪಶ್ಯತಿ ಕಶ್ಚಿದೇನಮಾಶ್ಚರ್ಯವದ್ವದತಿ ತಥೈವ ಚಾನ್ಯಃ | ಆಶ್ಚರ್ಯವಚ್ಚೈನಮನ್ಯಃ ಶೃಣೋತಿ ಶೃತ್ವಾಪ್ಯೇನಂ ವೇದ ನ ಚೈವ ಕಶ್ಚಿತ್ ||",
        transliteration: "āśhcharya-vat paśhyati kaśhchid enam āśhcharya-vad vadati tathaiva chānyaḥ | āśhchyarya-vach chainam anyaḥ śhṛiṇoti śhṛitvāpy enaṁ veda na chaiva kaśhchit",
        meaning: "ಯಾರೋ ಇವನನ್ನು ಆಶ್ಚರ್ಯದಿಂದ ನೋಡುತ್ತಾರೆ, ಯಾರೋ ಆಶ್ಚರ್ಯದಿಂದ ಹೇಳುತ್ತಾರೆ, ಯಾರೋ ಆಶ್ಚರ್ಯದಿಂದ ಕೇಳುತ್ತಾರೆ. ಕೇಳಿದರೂ ಯಾರೂ ಇವನನ್ನು ತಿಳಿಯುವುದಿಲ್ಲ."
      },
      {
        id: "2-30",
        chapter: 2,
        verse: 30,
        kannada: "ದೇಹೀ ನಿತ್ಯಮವಧ್ಯೋऽಯಂ ದೇಹೇ ಸರ್ವಸ್ಯ ಭಾರತ | ತಸ್ಮಾತ್ ಸರ್ವಾಣಿ ಭೂತಾನಿ ನ ತ್ವಂ ಶೋಚಿತುಮರ್ಹಸಿ ||",
        transliteration: "dehī nityam avadhyo 'yaṁ dehe sarvasya bhārata | tasmāt sarvāṇi bhūtāni na tvaṁ śhochitum arhasi",
        meaning: "ಭಾರತನೇ, ಸರ್ವದೇಹಗಳಲ್ಲಿಯೂ ಈ ದೇಹಿಯು ನಿತ್ಯ ಅವಧ್ಯ. ಆದ್ದರಿಂದ ಎಲ್ಲ ಭೂತಗಳಿಗಾಗಿಯೂ ನೀನು ಶೋಕಿಸಲು ಯೋಗ್ಯನಲ್ಲ."
      },
      {
        id: "2-31",
        chapter: 2,
        verse: 31,
        kannada: "ಸ್ವಧರ್ಮಮಪಿ ಚಾವೇಕ್ಷ್ಯ ನ ವಿಕಂಪಿತುಮರ್ಹಸಿ | ಧರ್ಮ್ಯಾದ್ಧಿ ಯುದ್ಧಾಚ್ಛ್ರೇಯೋऽನ್ಯತ್ಕ್ಷತ್ರಿಯಸ್ಯ ನ ವಿದ್ಯತೇ ||",
        transliteration: "sva-dharmam api chāvekṣhya na vikampitum arhasi | dharmyād dhi yuddhāch chhreyo 'nyat kṣhatriyasya na vidyate",
        meaning: "ನಿನ್ನ ಸ್ವಧರ್ಮವನ್ನು ಪರಿಗಣಿಸಿ ನೀನು ಕಂಪಿಸಲು ಯೋಗ್ಯನಲ್ಲ. ಧರ್ಮಯುಕ್ತವಾದ ಯುದ್ಧಕ್ಕಿಂತ ಕ್ಷತ್ರಿಯನಿಗೆ ಬೇರೆ ಶ್ರೇಯಸ್ಸು ಇಲ್ಲ."
      },
      {
        id: "2-32",
        chapter: 2,
        verse: 32,
        kannada: "ಯದೃಚ್ಛಯಾ ಚೋಪಪನ್ನಂ ಸ್ವರ್ಗದ್ವಾರಮಪಾವೃತಮ್ | ಸುಖಿನಃ ಕ್ಷತ್ರಿಯಾಃ ಪಾರ್ಥ ಲಭಂತೇ ಯುದ್ಧಮೀದೃಶಮ್ ||",
        transliteration: "yadṛichchhayā chopapannaṁ svarga-dvāram apāvṛitam | sukhinaḥ kṣhatriyāḥ pārtha labhante yuddham īdṛiśham",
        meaning: "ಪಾರ್ಥನೇ, ಯದೃಚ್ಛೆಯಿಂದ ಲಭಿಸಿದ, ಸ್ವರ್ಗದ್ವಾರವನ್ನು ತೆರೆದ ಈ ರೀತಿಯ ಯುದ್ಧವನ್ನು ಸುಖಿಗಳಾದ ಕ್ಷತ್ರಿಯರು ಪಡೆಯುತ್ತಾರೆ."
      },
      {
        id: "2-33",
        chapter: 2,
        verse: 33,
        kannada: "ಅಥ ಚೇತ್ತ್ವಮಿಮಂ ಧರ್ಮ್ಯಂ ಸಂಗ್ರಾಮಂ ನ ಕರಿಷ್ಯಸಿ | ತತಃ ಸ್ವಧರ್ಮಂ ಕೀರ್ತಿಂ ಚ ಹಿತ್ವಾ ಪಾಪಮವಾಪ್ಸ್ಯಸಿ ||",
        transliteration: "atha chet tvam imaṁ dharmyaṁ saṅgrāmaṁ na kariṣhyasi | tataḥ sva-dharmaṁ kīrtiṁ cha hitvā pāpam avāpsyasi",
        meaning: "ಈ ಧರ್ಮಯುಕ್ತವಾದ ಯುದ್ಧವನ್ನು ನೀನು ಮಾಡದಿದ್ದರೆ, ಸ್ವಧರ್ಮ ಮತ್ತು ಕೀರ್ತಿಯನ್ನು ಕಳೆದುಕೊಂಡು ಪಾಪವನ್ನು ಪಡೆಯುವೆ."
      },
      {
        id: "2-34",
        chapter: 2,
        verse: 34,
        kannada: "ಅಕೀರ್ತಿಂ ಚಾಪಿ ಭೂತಾನಿ ಕಥಯಿಷ್ಯಂತಿ ತೇऽವ್ಯಯಾಮ್ | ಸಂಭಾವಿತಸ್ಯ ಚಾಕೀರ್ತಿರ್ಮರಣಾದತಿರಿಚ್ಯತೇ ||",
        transliteration: "akīrtiṁ chāpi bhūtāni kathayiṣhyanti te 'vyayām | sambhāvitasya chākīrtir maraṇād atirichyate",
        meaning: "ಭೂತಗಳು ನಿನ್ನ ಅವ್ಯಯ ಅಕೀರ್ತಿಯನ್ನು ಹೇಳುತ್ತವೆ. ಸಂಭಾವಿತನಾದವನಿಗೆ ಅಕೀರ್ತಿಯು ಮರಣಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ."
      },
      {
        id: "2-35",
        chapter: 2,
        verse: 35,
        kannada: "ಭಯಾದ್ರಣಾದುಪರತಂ ಮಂಸ್ಯಂತೇ ತ್ವಾಂ ಮಹಾರಥಾಃ | ಯೇಷಾಂ ಚ ತ್ವಂ ಬಹುಮತೋ ಭೂತ್ವಾ ಯಾಸ್ಯಸಿ ಲಾಘವಮ್ ||",
        transliteration: "bhayād raṇād uparataṁ maṁsyante tvāṁ mahā-rathāḥ | yeṣhāṁ cha tvaṁ bahu-mato bhūtvā yāsyasi lāghavam",
        meaning: "ಮಹಾರಥರು ನಿನ್ನನ್ನು ಭಯದಿಂದ ಯುದ್ಧದಿಂದ ಹಿಂತಿರುಗಿದವನೆಂದು ಭಾವಿಸುವರು. ನೀನು ಅವರಿಂದ ಬಹುಮಾನಿತನಾಗಿದ್ದು, ಲಘುತ್ವವನ್ನು ಪಡೆಯುವೆ."
      },
      {
        id: "2-36",
        chapter: 2,
        verse: 36,
        kannada: "ಅವಾಚ್ಯವಾದಾಂಶ್ಚ ಬಹೂನ್ವದಿಷ್ಯಂತಿ ತವಾಹಿತಾಃ | ನಿಂದಂತಸ್ತವ ಸಾಮರ್ಥ್ಯಂ ತತೋ ದುಃಖತರಂ ನು ಕಿಮ್ ||",
        transliteration: "avāchya-vādāṁśh cha bahūn vadiṣhyanti tavāhitāḥ | nindantas tava sāmarthyaṁ tato duḥkhataraṁ nu kim",
        meaning: "ಶತ್ರುಗಳು ನಿನ್ನ ಬಗ್ಗೆ ಅವಾಚ್ಯವಾದ ಮಾತುಗಳನ್ನು ಹೇಳುವರು. ನಿನ್ನ ಸಾಮರ್ಥ್ಯವನ್ನು ನಿಂದಿಸುವರು. ಅದಕ್ಕಿಂತ ದುಃಖತರವಾದದ್ದು ಬೇರೆ ಏನಿದೆ?"
      },
      {
        id: "2-37",
        chapter: 2,
        verse: 37,
        kannada: "ಹತೋ ವಾ ಪ್ರಾಪ್ಸ್ಯಸಿ ಸ್ವರ್ಗಂ ಜಿತ್ವಾ ವಾ ಭೋಕ್ಷ್ಯಸೇ ಮಹೀಮ್ | ತಸ್ಮಾದುತ್ತಿಷ್ಠ ಕೌಂತೇಯ ಯುದ್ಧಾಯ ಕೃತನಿಶ್ಚಯಃ ||",
        transliteration: "hato vā prāpsyasi svargaṁ jitvā vā bhokṣhyase mahīm | tasmād uttiṣhṭha kaunteya yuddhāya kṛita-niśhchayaḥ",
        meaning: "ಕೌಂತೇಯನೇ, ನೀನು ಕೊಲ್ಲಲ್ಪಟ್ಟರೆ ಸ್ವರ್ಗವನ್ನು ಪಡೆಯುವೆ, ಜಯಿಸಿದರೆ ಭೂಮಿಯನ್ನು ಅನುಭವಿಸುವೆ. ಆದ್ದರಿಂದ ಯುದ್ಧಕ್ಕೆ ನಿಶ್ಚಯಿಸಿ ಏಳು."
      },
      {
        id: "2-38",
        chapter: 2,
        verse: 38,
        kannada: "ಸುಖದುಃಖೇ ಸಮೇ ಕೃತ್ವಾ ಲಾಭಾಲಾಭೌ ಜಯಾಜಯೌ | ತತೋ ಯುದ್ಧಾಯ ಯುಜ್ಯಸ್ವ ನೈವಂ ಪಾಪಮವಾಪ್ಸ್ಯಸಿ ||",
        transliteration: "sukha-duḥkhe same kṛitvā lābhālābhau jayājayau | tato yuddhāya yujyasva naivaṁ pāpam avāpsyasi",
        meaning: "ಸುಖದುಃಖಗಳನ್ನು ಸಮವಾಗಿ ಮಾಡಿ, ಲಾಭಾಲಾಭ, ಜಯಾಜಯಗಳನ್ನು ಸಮವಾಗಿ ಮಾಡಿ, ಆಮೇಲೆ ಯುದ್ಧಕ್ಕೆ ಸಿದ್ಧನಾಗು. ಹೀಗೆ ಮಾಡಿದರೆ ಪಾಪವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ."
      },
      {
        id: "2-39",
        chapter: 2,
        verse: 39,
        kannada: "ಏಷಾ ತೇऽಭಿಹಿತಾ ಸಾಂಖ್ಯೇ ಬುದ್ಧಿರ್ಯೋಗೇ ತ್ವಿಮಾಂ ಶೃಣು | ಬುದ್ಧ್ಯಾ ಯುಕ್ತೋ ಯಯಾ ಪಾರ್ಥ ಕರ್ಮಬಂಧಂ ಪ್ರಹಾಸ್ಯಸಿ ||",
        transliteration: "eṣhā te 'bhihitā sāṅkhye buddhir yoge tv imāṁ śhṛiṇu | buddhyā yukto yayā pārtha karma-bandhaṁ prahāsyasi",
        meaning: "ಪಾರ್ಥನೇ, ಸಾಂಖ್ಯದಲ್ಲಿ ಈ ಬುದ್ಧಿಯನ್ನು ಹೇಳಿದೆ. ಯೋಗದಲ್ಲಿ ಈ ಬುದ್ಧಿಯನ್ನು ಕೇಳು. ಯಾವ ಬುದ್ಧಿಯಿಂದ ಯುಕ್ತನಾದರೆ ನೀನು ಕರ್ಮಬಂಧವನ್ನು ಕಳಚಿಬಿಡುವೆ."
      },
      {
        id: "2-40",
        chapter: 2,
        verse: 40,
        kannada: "ನೇಹಾಭಿಕ್ರಮನಾಶೋऽಸ್ತಿ ಪ್ರತ್ಯವಾಯೋ ನ ವಿದ್ಯತೇ | ಸ್ವಲ್ಪಮಪ್ಯಸ್ಯ ಧರ್ಮಸ್ಯ ತ್ರಾಯತೇ ಮಹತೋ ಭಯಾತ್ ||",
        transliteration: "nehābhikrama-nāśho 'sti pratyavāyo na vidyate | svalpam apyasya dharmasya trāyate mahato bhayāt",
        meaning: "ಇಲ್ಲಿ ಪ್ರಯತ್ನದ ನಾಶವಿಲ್ಲ, ಪ್ರತ್ಯವಾಯವಿಲ್ಲ. ಈ ಧರ್ಮದ ಸ್ವಲ್ಪವನ್ನಾದರೂ ಆಚರಿಸಿದರೆ ಮಹಾಭಯದಿಂದ ರಕ್ಷಿಸುತ್ತದೆ."
      },
      {
        id: "2-41",
        chapter: 2,
        verse: 41,
        kannada: "ವ್ಯವಸಾಯಾತ್ಮಿಕಾ ಬುದ್ಧಿರೇಕೇಹ ಕುರುನಂದನ | ಬಹುಶಾಖಾ ಹ್ಯನಂತಾಶ್ಚ ಬುದ್ಧಯೋऽವ್ಯವಸಾಯಿನಾಮ್ ||",
        transliteration: "vyavasāyātmikā buddhir ekeha kuru-nandana | bahu-śhākhā hy anantāśh cha buddhayo 'vyavasāyinām",
        meaning: "ಕುರುನಂದನನೇ, ಇಲ್ಲಿ ಬುದ್ಧಿಯು ವ್ಯವಸಾಯಾತ್ಮಕವಾದದ್ದು ಒಂದೇ. ಅವ್ಯವಸಾಯಿಗಳ ಬುದ್ಧಿಗಳು ಅನೇಕ ಶಾಖೆಗಳುಳ್ಳವು, ಅನಂತವಾದವು."
      },
      {
        id: "2-42",
        chapter: 2,
        verse: 42,
        kannada: "ಯಾಮಿಮಾಂ ಪುಷ್ಪಿತಾಂ ವಾಚಂ ಪ್ರವದಂತ್ಯವಪಶ್ಚಿತಃ | ವೇದವಾದರತಾಃ ಪಾರ್ಥ ನಾನ್ಯದಸ್ತೀತಿ ವಾದಿನಃ ||",
        transliteration: "yām imāṁ puṣhpitāṁ vāchaṁ pravadanty avapaśhchitaḥ | veda-vāda-ratāḥ pārtha nānyad astīti vādinaḥ",
        meaning: "ಪಾರ್ಥನೇ, ಅಲ್ಪಬುದ್ಧಿಯರು ವೇದವಾದಗಳಲ್ಲಿ ರತರಾಗಿ, 'ಇದೇ ಸತ್ಯ, ಬೇರೆ ಇಲ್ಲ' ಎಂದು ಹೇಳುವ ಈ ಪುಷ್ಪಿತವಾಕ್ಯಗಳನ್ನು ಹೇಳುತ್ತಾರೆ."
      },
      {
        id: "2-43",
        chapter: 2,
        verse: 43,
        kannada: "ಕಾಮಾತ್ಮಾನಃ ಸ್ವರ್ಗಪರಾ ಜನ್ಮಕರ್ಮಫಲಪ್ರದಾಮ್ | ಕ್ರಿಯಾವಿಶೇಷಬಹುಲಾಂ ಭೋಗೈಶ್ವರ್ಯಗತಿಂ ಪ್ರತಿ ||",
        transliteration: "kāmātmānaḥ svarga-parā janma-karma-phala-pradām | kriyā-viśheṣha-bahulāṁ bhogaiśhvarya-gatiṁ prati",
        meaning: "ಕಾಮಾತ್ಮರಾದವರು ಸ್ವರ್ಗವನ್ನೇ ಗುರಿಯಾಗುಳ್ಳವರಾಗಿ, ಜನ್ಮಕರ್ಮಫಲಗಳನ್ನು ಕೊಡುವ, ಭೋಗೈಶ್ವರ್ಯಗತಿಗಾಗಿ ಕ್ರಿಯಾವಿಶೇಷಗಳಿಂದ ಬಹುಳವಾದ ವೇದಗಳನ್ನು ಹೇಳುತ್ತಾರೆ."
      },
      {
        id: "2-44",
        chapter: 2,
        verse: 44,
        kannada: "ಭೋಗೈಶ್ವರ್ಯಪ್ರಸಕ್ತಾನಾಂ ತಯಾಽಪಹೃತಚೇತಸಾಮ್ | ವ್ಯವಸಾಯಾತ್ಮಿಕಾ ಬುದ್ಧಿಃ ಸಮಾಧೌ ನ ವಿಧೀಯತೇ ||",
        transliteration: "bhogaiśhvarya-prasaktānāṁ tayā 'pahṛita-chetasām | vyavasāyātmikā buddhiḥ samādhau na vidhīyate",
        meaning: "ಭೋಗೈಶ್ವರ್ಯಗಳಲ್ಲಿ ಪ್ರಸಕ್ತರಾದ, ಅಪಹೃತಚೇತಸರಾದವರಿಗೆ ವ್ಯವಸಾಯಾತ್ಮಕ ಬುದ್ಧಿಯು ಸಮಾಧಿಯಲ್ಲಿ ನಿಲ್ಲುವುದಿಲ್ಲ."
      },
      {
        id: "2-45",
        chapter: 2,
        verse: 45,
        kannada: "ತ್ರೈಗುಣ್ಯವಿಷಯಾ ವೇದಾ ನಿಸ್ತ್ರೈಗುಣ್ಯೋ ಭವಾರ್ಜುನ | ನಿರ್ದ್ವಂದ್ವೋ ನಿತ್ಯಸತ್ತ್ವಸ್ಥೋ ನಿರ್ಯೋಗಕ್ಷೇಮ ಆತ್ಮವಾನ್ ||",
        transliteration: "trai-guṇya-viṣhayā vedā nistrai-guṇyo bhavārjuna | nirdvandvo nitya-sattva-stho niryoga-kṣhema ātmavān",
        meaning: "ಅರ್ಜುನನೇ, ವೇದಗಳು ತ್ರೈಗುಣ್ಯ ವಿಷಯಗಳು. ನೀನು ತ್ರೈಗುಣ್ಯಾತೀತನಾಗು, ದ್ವಂದ್ವರಹಿತನಾಗು, ನಿತ್ಯಸತ್ತ್ವಸ್ಥನಾಗು, ಯೋಗಕ್ಷೇಮರಹಿತನಾಗು, ಆತ್ಮವಂತನಾಗು."
      },
      {
        id: "2-46",
        chapter: 2,
        verse: 46,
        kannada: "ಯಾವಾನರ್ಥ ಉದಪಾನೇ ಸರ್ವತಃ ಸಂಪ್ಲುತೋದಕೇ | ತಾವಾನ್ ಸರ್ವೇಷು ವೇದೇಷು ಬ್ರಾಹ್ಮಣಸ್ಯ ವಿಜಾನತಃ ||",
        transliteration: "yāvān artha uda-pāne sarvataḥ samplutodake | tāvān sarveṣhu vedeṣhu brāhmaṇasya vijānataḥ",
        meaning: "ಸರ್ವತ್ರ ಸಂಪ್ಲುತೋದಕವಿದ್ದಾಗ ಉದಪಾನದಲ್ಲಿ ಯಾವ ಪ್ರಯೋಜನವೋ, ವೇದಗಳಲ್ಲಿ ವಿಜ್ಞಾನಿಯಾದ ಬ್ರಾಹ್ಮಣನಿಗೆ ಅದೇ ಪ್ರಯೋಜನ."
      },
      {
        id: "2-47",
        chapter: 2,
        verse: 47,
        kannada: "ಕರ್ಮಣ್ಯೇವಾಧಿಕಾರಸ್ತೇ ಮಾ ಫಲೇಷು ಕದಾಚನ | ಮಾ ಕರ್ಮಫಲಹೇತುರ್ಭೂರ್ಮಾ ತೇ ಸಂಗೋऽಸ್ತ್ವಕರ್ಮಣಿ ||",
        transliteration: "karmaṇy evādhikāras te mā phaleṣhu kadāchana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
        meaning: "ನಿನಗೆ ಕರ್ಮದಲ್ಲಿ ಮಾತ್ರ ಅಧಿಕಾರವಿದೆ, ಫಲಗಳಲ್ಲಿ ಎಂದಿಗೂ ಇಲ್ಲ. ಕರ್ಮಫಲದ ಹೇತುವಾಗಬೇಡ, ಅಕರ್ಮದಲ್ಲಿಯೂ ಆಸಕ್ತನಾಗಬೇಡ."
      },
      {
        id: "2-48",
        chapter: 2,
        verse: 48,
        kannada: "ಯೋಗಸ್ಥಃ ಕುರು ಕರ್ಮಾಣಿ ಸಂಗಂ ತ್ಯಕ್ತ್ವಾ ಧನಂಜಯ | ಸಿದ್ಧ್ಯಸಿದ್ಧ್ಯೋಃ ಸಮೋ ಭೂತ್ವಾ ಸಮತ್ವಂ ಯೋಗ ಉಚ್ಯತೇ ||",
        transliteration: "yoga-sthaḥ kuru karmaṇi saṅgaṁ tyaktvā dhanañjaya | siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga uchyate",
        meaning: "ಧನಂಜಯನೇ, ಯೋಗಸ್ಥನಾಗಿ, ಆಸಕ್ತಿಯನ್ನು ತ್ಯಜಿಸಿ, ಕರ್ಮಗಳನ್ನು ಮಾಡು. ಸಿದ್ಧ್ಯಸಿದ್ಧ್ಯಗಳಲ್ಲಿ ಸಮನಾಗಿರು. ಸಮತ್ವವೇ ಯೋಗ ಎನ್ನಲ್ಪಡುತ್ತದೆ."
      },
      {
        id: "2-49",
        chapter: 2,
        verse: 49,
        kannada: "ದೂರೇಣ ಹ್ಯವರಂ ಕರ್ಮ ಬುದ್ಧಿಯೋಗಾದ್ಧನಂಜಯ | ಬುದ್ಧೌ ಶರಣಮನ್ವಿಚ್ಛ ಕೃಪಣಾಃ ಫಲಹೇತವಃ ||",
        transliteration: "dūreṇa hy avaraṁ karma buddhi-yogād dhanañjaya | buddhau śharaṇam anvichchha kṛipaṇāḥ phala-hetavaḥ",
        meaning: "ಧನಂಜಯನೇ, ಬುದ್ಧಿಯೋಗಕ್ಕಿಂತ ಕರ್ಮ ಬಹಳ ದೂರದ್ದು, ಹೀನವಾದದ್ದು. ಬುದ್ಧಿಯಲ್ಲಿ ಶರಣು ಹೋಗು. ಫಲಹೇತುಗಳು ಕೃಪಣರು."
      },
      {
        id: "2-50",
        chapter: 2,
        verse: 50,
        kannada: "ಬುದ್ಧಿಯುಕ್ತೋ ಜಹಾತೀಹ ಉಭೇ ಸುಕೃತದುಷ್ಕೃತೇ | ತಸ್ಮಾದ್ಯೋಗಾಯ ಯುಜ್ಯಸ್ವ ಯೋಗಃ ಕರ್ಮಸು ಕೌಶಲಮ್ ||",
        transliteration: "buddhi-yukto jahātīha ubhe sukṛita-duṣhkṛite | tasmād yogāya yujyasva yogaḥ karmasu kauśhalam",
        meaning: "ಬುದ್ಧಿಯುಕ್ತನಾದವನು ಇಹಲೋಕದಲ್ಲಿ ಸುಕೃತದುಷ್ಕೃತಗಳೆರಡನ್ನೂ ತ್ಯಜಿಸುತ್ತಾನೆ. ಆದ್ದರಿಂದ ಯೋಗಕ್ಕೆ ಯತ್ನಿಸು. ಯೋಗವೇ ಕರ್ಮಗಳಲ್ಲಿ ಕೌಶಲ್ಯ."
      },
      {
        id: "2-51",
        chapter: 2,
        verse: 51,
        kannada: "ಕರ್ಮಜಂ ಬುದ್ಧಿಯುಕ್ತಾ ಹಿ ಫಲಂ ತ್ಯಕ್ತ್ವಾ ಮನೀಷಿಣಃ | ಜನ್ಮಬಂಧವಿನಿರ್ಮುಕ್ತಾಃ ಪದಂ ಗಚ್ಛಂತ್ಯನಾಮಯಮ್ ||",
        transliteration: "karma-jaṁ buddhi-yuktā hi phalaṁ tyaktvā manīṣhiṇaḥ | janma-bandha-vinirmuktāḥ padaṁ gachchhanty anāmayam",
        meaning: "ಬುದ್ಧಿಯುಕ್ತರಾದ ಮನೀಷಿಗಳು ಕರ್ಮಜನ್ಯವಾದ ಫಲವನ್ನು ತ್ಯಜಿಸಿ, ಜನ್ಮಬಂಧದಿಂದ ವಿನಿರ್ಮುಕ್ತರಾಗಿ ಅನಾಮಯ ಪದವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
      },
      {
        id: "2-52",
        chapter: 2,
        verse: 52,
        kannada: "ಯದಾ ತೇ ಮೋಹಕಲಿಲಂ ಬುದ್ಧಿರ್ವ್ಯತಿತರಿಷ್ಯತಿ | ತದಾ ಗಂತಾಸಿ ನಿರ್ವೇದಂ ಶ್ರೋತವ್ಯಸ್ಯ ಶ್ರುತಸ್ಯ ಚ ||",
        transliteration: "yadā te moha-kalilaṁ buddhir vyatitariṣhyati | tadā gantāsi nirvedaṁ śhrotavyasya śhrutasya cha",
        meaning: "ನಿನ್ನ ಬುದ್ಧಿಯು ಮೋಹಕಲಿಲವನ್ನು ದಾಟಿದಾಗ, ಶ್ರೋತವ್ಯ ಮತ್ತು ಶ್ರುತಗಳೆರಡರಲ್ಲಿಯೂ ನಿರ್ವೇದವನ್ನು ಪಡೆಯುವೆ."
      },
      {
        id: "2-53",
        chapter: 2,
        verse: 53,
        kannada: "ಶ್ರುತಿವಿಪ್ರತಿಪನ್ನಾ ತೇ ಯದಾ ಸ್ಥಾಸ್ಯತಿ ನಿಶ್ಚಲಾ | ಸಮಾಧಾವಚಲಾ ಬುದ್ಧಿಸ್ತದಾ ಯೋಗಮವಾಪ್ಸ್ಯಸಿ ||",
        transliteration: "śhruti-vipratipannā te yadā sthāsyati niśhchalā | samādhāv achalā buddhis tadā yogam avāpsyasi",
        meaning: "ಶ್ರುತಿಗಳಲ್ಲಿ ವಿಪ್ರತಿಪನ್ನವಾದ ನಿನ್ನ ಬುದ್ಧಿಯು ನಿಶ್ಚಲವಾಗಿ, ಸಮಾಧಿಯಲ್ಲಿ ಅಚಲವಾಗಿ ನಿಲ್ಲುವಾಗ, ನೀನು ಯೋಗವನ್ನು ಪಡೆಯುವೆ."
      },
      {
        id: "2-54",
        chapter: 2,
        verse: 54,
        kannada: "ಅರ್ಜುನ ಉವಾಚ | ಸ್ಥಿತಪ್ರಜ್ಞಸ್ಯ ಕಾ ಭಾಷಾ ಸಮಾಧಿಸ್ಥಸ್ಯ ಕೇಶವ | ಸ್ಥಿತಧೀಃ ಕಿಂ ಪ್ರಭಾಷೇತ ಕಿಮಾಸೀತ ವ್ರಜೇತ ಕಿಮ್ ||",
        transliteration: "arjuna uvācha | sthita-prajñasya kā bhāṣhā samādhi-sthasya keśhava | sthita-dhīḥ kiṁ prabhāṣheta kim āsīta vrajeta kim",
        meaning: "ಅರ್ಜುನನು ಹೇಳಿದನು: ಕೇಶವನೇ, ಸ್ಥಿತಪ್ರಜ್ಞನ ಭಾಷೆ ಯಾವುದು? ಸಮಾಧಿಸ್ಥನಾದವನು ಹೇಗೆ ಮಾತನಾಡುತ್ತಾನೆ? ಹೇಗೆ ಕುಳಿತಿರುತ್ತಾನೆ? ಹೇಗೆ ನಡೆಯುತ್ತಾನೆ?"
      },
      {
        id: "2-55",
        chapter: 2,
        verse: 55,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಪ್ರಜಹಾತಿ ಯದಾ ಕಾಮಾನ್ ಸರ್ವಾನ್ ಪಾರ್ಥ ಮನೋಗತಾನ್ | ಆತ್ಮನ್ಯೇವಾತ್ಮನಾ ತುಷ್ಟಃ ಸ್ಥಿತಪ್ರಜ್ಞಸ್ತದೋಚ್ಯತೇ ||",
        transliteration: "śhrī-bhagavān uvācha | prajahāti yadā kāmān sarvān pārtha mano-gatān | ātmany evātmanā tuṣhṭaḥ sthita-prajñas tadochyate",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ಪಾರ್ಥನೇ, ಮನಸ್ಸಿನಲ್ಲಿರುವ ಎಲ್ಲಾ ಕಾಮಗಳನ್ನು ತ್ಯಜಿಸಿ, ಆತ್ಮನಿಂದಲೇ ಆತ್ಮನಲ್ಲಿ ತೃಪ್ತನಾದಾಗ, ಅವನು ಸ್ಥಿತಪ್ರಜ್ಞನೆಂದು ಹೇಳಲ್ಪಡುತ್ತಾನೆ."
      },
      {
        id: "2-56",
        chapter: 2,
        verse: 56,
        kannada: "ದುಃಖೇಷ್ವನುದ್ವಿಗ್ನಮನಾಃ ಸುಖೇಷು ವಿಗತಸ್ಪೃಹಃ | ವೀತರಾಗಭಯಕ್ರೋಧಃ ಸ್ಥಿತಧೀರ್ಮುನಿರುಚ್ಯತೇ ||",
        transliteration: "duḥkheṣhv anudvigna-manāḥ sukheṣhu vigata-spṛihaḥ | vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir uchyate",
        meaning: "ದುಃಖಗಳಲ್ಲಿ ಅನುದ್ವಿಗ್ನಮನಸ್ಕನಾಗಿ, ಸುಖಗಳಲ್ಲಿ ವಿಗತಸ್ಪೃಹನಾಗಿ, ರಾಗಭಯಕ್ರೋಧಗಳಿಲ್ಲದವನು ಸ್ಥಿತಧೀ ಮುನಿ ಎನ್ನಲ್ಪಡುತ್ತಾನೆ."
      },
      {
        id: "2-57",
        chapter: 2,
        verse: 57,
        kannada: "ಯಃ ಸರ್ವತ್ರಾನಭಿಸ್ನೇಹಸ್ತತ್ತತ್ಪ್ರಾಪ್ಯ ಶುಭಾಶುಭಮ್ | ನಾಭಿನಂದತಿ ನ ದ್ವೇಷ್ಟಿ ತಸ್ಯ ಪ್ರಜ್ಞಾ ಪ್ರತಿಷ್ಠಿತಾ ||",
        transliteration: "yaḥ sarvatrānabhisnehas tat tat prāpya śhubhāśhubham | nābhinandati na dveṣhṭi tasya prajñā pratiṣhṭhitā",
        meaning: "ಯಾವನು ಸರ್ವತ್ರ ಅಭಿಸ್ನೇಹರಹಿತನಾಗಿ, ಶುಭಾಶುಭಗಳನ್ನು ಪಡೆದರೂ ಅಭಿನಂದಿಸುವುದಿಲ್ಲ, ದ್ವೇಷಿಸುವುದಿಲ್ಲವೋ, ಅವನ ಪ್ರಜ್ಞೆ ಪ್ರತಿಷ್ಠಿತವಾಗಿರುತ್ತದೆ."
      },
      {
        id: "2-58",
        chapter: 2,
        verse: 58,
        kannada: "ಯದಾ ಸಂಹರತೇ ಚಾಯಂ ಕೂರ್ಮೋऽಂಗಾನೀವ ಸರ್ವಶಃ | ಇಂದ್ರಿಯಾಣೀಂದ್ರಿಯಾರ್ಥೇಭ್ಯಸ್ತಸ್ಯ ಪ್ರಜ್ಞಾ ಪ್ರತಿಷ್ಠಿತಾ ||",
        transliteration: "yadā saṁharate chāyaṁ kūrmo 'ṅgānīva sarvaśhaḥ | indriyāṇīndriyārthebhyas tasya prajñā pratiṣhṭhitā",
        meaning: "ಕೂರ್ಮನು ಅಂಗಗಳನ್ನು ಸಂಹರಿಸಿಕೊಳ್ಳುವಂತೆ, ಇಂದ್ರಿಯಗಳನ್ನು ಇಂದ್ರಿಯಾರ್ಥಗಳಿಂದ ಸಂಹರಿಸಿಕೊಳ್ಳುವಾಗ, ಅವನ ಪ್ರಜ್ಞೆ ಪ್ರತಿಷ್ಠಿತವಾಗಿರುತ್ತದೆ."
      },
      {
        id: "2-59",
        chapter: 2,
        verse: 59,
        kannada: "ವಿಷಯಾ ವಿನಿವರ್ತಂತೇ ನಿರಾಹಾರಸ್ಯ ದೇಹಿನಃ | ರಸವರ್ಜಂ ರಸೋऽಪ್ಯಸ್ಯ ಪರಂ ದೃಷ್ಟ್ವಾ ನಿವರ್ತತೇ ||",
        transliteration: "viṣhayā vinivartante nirāhārasya dehinaḥ | rasa-varjaṁ raso 'py asya paraṁ dṛiṣhṭvā nivartate",
        meaning: "ದೇಹಿಯು ನಿರಾಹಾರನಾದಾಗ ವಿಷಯಗಳು ನಿವರ್ತಿಸುತ್ತವೆ. ರಸವನ್ನು ಬಿಟ್ಟರೂ ರಸವು ಪರಮಾತ್ಮನನ್ನು ದರ್ಶನಮಾಡಿ ನಿವರ್ತಿಸುತ್ತದೆ."
      },
      {
        id: "2-60",
        chapter: 2,
        verse: 60,
        kannada: "ಯತತೋ ಹ್ಯಪಿ ಕೌಂತೇಯ ಪುರುಷಸ್ಯ ವಿಪಶ್ಚಿತಃ | ಇಂದ್ರಿಯಾಣಿ ಪ್ರಮಾಥೀನಿ ಹರಂತಿ ಪ್ರಸಭಂ ಮನಃ ||",
        transliteration: "yatato hy api kaunteya puruṣhasya vipaśhchitaḥ | indriyāṇi pramāthīni haranti prasabhaṁ manaḥ",
        meaning: "ಕೌಂತೇಯನೇ, ಯತ್ನಿಸುತ್ತಿರುವ ವಿಪಶ್ಚಿತ್ ಪುರುಷನ ಮನಸ್ಸನ್ನು ಪ್ರಮಾಥೀನಿಯಾದ ಇಂದ್ರಿಯಗಳು ಬಲಾತ್ಕಾರದಿಂದ ಹರಣಮಾಡುತ್ತವೆ."
      },
      {
        id: "2-61",
        chapter: 2,
        verse: 61,
        kannada: "ತಾನಿ ಸರ್ವಾಣಿ ಸಂಯಮ್ಯ ಯುಕ್ತ ಆಸೀತ ಮತ್ಪರಃ | ವಶೇ ಹಿ ಯಸ್ಯೇಂದ್ರಿಯಾಣಿ ತಸ್ಯ ಪ್ರಜ್ಞಾ ಪ್ರತಿಷ್ಠಿತಾ ||",
        transliteration: "tāni sarvāṇi saṁyamya yukta āsīta mat-paraḥ | vaśhe hi yasyendriyāṇi tasya prajñā pratiṣhṭhitā",
        meaning: "ಎಲ್ಲ ಇಂದ್ರಿಯಗಳನ್ನು ಸಂಯಮಿಸಿ, ಮತ್ಪರನಾಗಿ ಯುಕ್ತನಾಗಿ ಕುಳಿತುಕೊಳ್ಳುವನಾಗಲಿ. ಯಾರ ಇಂದ್ರಿಯಗಳು ವಶದಲ್ಲಿರುವುವೋ, ಅವನ ಪ್ರಜ್ಞೆ ಪ್ರತಿಷ್ಠಿತವಾಗಿರುವುದು."
      },
      {
        id: "2-62",
        chapter: 2,
        verse: 62,
        kannada: "ಧ್ಯಾಯತೋ ವಿಷಯಾನ್ಪುಂಸಃ ಸಂಗಸ್ತೇಷೂಪಜಾಯತೇ | ಸಂಗಾತ್ ಸಂಜಾಯತೇ ಕಾಮಃ ಕಾಮಾತ್ಕ್ರೋಧೋऽಭಿಜಾಯತೇ ||",
        transliteration: "dhyāyato viṣhayān puṁsaḥ saṅgas teṣhūpajāyate | saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
        meaning: "ವಿಷಯಗಳನ್ನು ಧ್ಯಾನಮಾಡುವ ಪುರುಷನಿಗೆ ಅವುಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಉಂಟಾಗುತ್ತದೆ. ಆಸಕ್ತಿಯಿಂದ ಕಾಮ ಉತ್ಪನ್ನವಾಗುತ್ತದೆ. ಕಾಮದಿಂದ ಕ್ರೋಧ ಉತ್ಪನ್ನವಾಗುತ್ತದೆ."
      },
      {
        id: "2-63",
        chapter: 2,
        verse: 63,
        kannada: "ಕ್ರೋಧಾದ್ಭವತಿ ಸಂಮೋಹಃ ಸಂಮೋಹಾತ್ಸ್ಮೃತಿವಿಭ್ರಮಃ | ಸ್ಮೃತಿಭ್ರಂಶಾದ್ಬುದ್ಧಿನಾಶೋ ಬುದ್ಧಿನಾಶಾತ್ಪ್ರಣಶ್ಯತಿ ||",
        transliteration: "krodhād bhavati sammohaḥ sammohāt smṛiti-vibhramaḥ | smṛiti-bhranśhād buddhi-nāśho buddhi-nāśhāt praṇaśhyati",
        meaning: "ಕ್ರೋಧದಿಂದ ಸಂಮೋಹ ಉಂಟಾಗುತ್ತದೆ. ಸಂಮೋಹದಿಂದ ಸ್ಮೃತಿವಿಭ್ರಮ ಉಂಟಾಗುತ್ತದೆ. ಸ್ಮೃತಿಭ್ರಂಶದಿಂದ ಬುದ್ಧಿನಾಶವಾಗುತ್ತದೆ. ಬುದ್ಧಿನಾಶದಿಂದ ಅವನು ನಾಶವಾಗುತ್ತಾನೆ."
      },
      {
        id: "2-64",
        chapter: 2,
        verse: 64,
        kannada: "ರಾಗದ್ವೇಷವಿಯುಕ್ತೈಸ್ತು ವಿಷಯಾನಿಂದ್ರಿಯೈಶ್ಚರನ್ | ಆತ್ಮವಶ್ಯೈರ್ವಿಧೇಯಾತ್ಮಾ ಪ್ರಸಾದಮಧಿಗಚ್ಛತಿ ||",
        transliteration: "rāga-dveṣha-viyuktais tu viṣhayān indriyaiśh charan | ātma-vaśhyair vidheyātmā prasādam adhigachchhati",
        meaning: "ರಾಗದ್ವೇಷರಹಿತನಾಗಿ, ಇಂದ್ರಿಯಗಳನ್ನು ಆತ್ಮವಶದಲ್ಲಿಟ್ಟುಕೊಂಡು, ವಿಧೇಯಾತ್ಮನಾಗಿ ವಿಷಯಗಳಲ್ಲಿ ಚರಿಸುವವನು ಪ್ರಸಾದವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "2-65",
        chapter: 2,
        verse: 65,
        kannada: "ಪ್ರಸಾದೇ ಸರ್ವದುಃಖಾನಾಂ ಹಾನಿರಸ್ಯೋಪಜಾಯತೇ | ಪ್ರಸನ್ನಚೇತಸೋ ಹ್ಯಾಶು ಬುದ್ಧಿಃ ಪರ್ಯವತಿಷ್ಠತೇ ||",
        transliteration: "prasāde sarva-duḥkhānāṁ hānir asyopajāyate | prasanna-chetaso hy āśhu buddhiḥ paryavatiṣhṭhate",
        meaning: "ಪ್ರಸಾದದಿಂದ ಅವನ ಎಲ್ಲ ದುಃಖಗಳ ನಾಶವಾಗುತ್ತದೆ. ಪ್ರಸನ್ನಚಿತ್ತನ ಬುದ್ಧಿಯು ಶೀಘ್ರವಾಗಿ ಪರ್ಯವತಿಷ್ಠಿತವಾಗುತ್ತದೆ."
      },
      {
        id: "2-66",
        chapter: 2,
        verse: 66,
        kannada: "ನಾಸ್ತಿ ಬುದ್ಧಿರಯುಕ್ತಸ್ಯ ನ ಚಾಯುಕ್ತಸ್ಯ ಭಾವನಾ | ನ ಚಾಭಾವಯತಃ ಶಾಂತಿರಶಾಂತಸ್ಯ ಕುತಃ ಸುಖಮ್ ||",
        transliteration: "nāsti buddhir ayuktasya na chāyuktasya bhāvanā | na chābhāvayataḥ śhāntir aśhāntasya kutaḥ sukham",
        meaning: "ಅಯುಕ್ತನಿಗೆ ಬುದ್ಧಿಯಿಲ್ಲ, ಭಾವನೆಯಿಲ್ಲ. ಭಾವನೆಯಿಲ್ಲದವನಿಗೆ ಶಾಂತಿಯಿಲ್ಲ. ಶಾಂತಿಯಿಲ್ಲದವನಿಗೆ ಸುಖವೆಲ್ಲಿಂದ?"
      },
      {
        id: "2-67",
        chapter: 2,
        verse: 67,
        kannada: "ಇಂದ್ರಿಯಾಣಾಂ ಹಿ ಚರತಾಂ ಯನ್ಮನೋऽನುವಿಧೀಯತೇ | ತದಸ್ಯ ಹರತಿ ಪ್ರಜ್ಞಾಂ ವಾಯುರ್ನಾವಮಿವಾಂಭಸಿ ||",
        transliteration: "indriyāṇāṁ hi charatāṁ yan mano 'nuvidhīyate | tad asya harati prajñāṁ vāyur nāvam ivāmbhasi",
        meaning: "ಚರಿಸುವ ಇಂದ್ರಿಯಗಳನ್ನು ಮನಸ್ಸು ಅನುವಿಧೀಯತೇ. ಅದು ಅವನ ಪ್ರಜ್ಞೆಯನ್ನು ಹರಣಮಾಡುತ್ತದೆ. ನೀರಿನಲ್ಲಿ ಹಡಗನ್ನು ವಾಯುವು ಹೊತ್ತುಕೊಂಡು ಹೋಗುವಂತೆ."
      },
      {
        id: "2-68",
        chapter: 2,
        verse: 68,
        kannada: "ತಸ್ಮಾದ್ಯಸ್ಯ ಮಹಾಬಾಹೋ ನಿಗೃಹೀತಾನಿ ಸರ್ವಶಃ | ಇಂದ್ರಿಯಾಣೀಂದ್ರಿಯಾರ್ಥೇಭ್ಯಸ್ತಸ್ಯ ಪ್ರಜ್ಞಾ ಪ್ರತಿಷ್ಠಿತಾ ||",
        transliteration: "tasmād yasya mahā-bāho nigṛihītāni sarvaśhaḥ | indriyāṇīndriyārthebhyas tasya prajñā pratiṣhṭhitā",
        meaning: "ಮಹಾಬಾಹುವೇ, ಆದ್ದರಿಂದ ಯಾರ ಇಂದ್ರಿಯಗಳು ಇಂದ್ರಿಯಾರ್ಥಗಳಿಂದ ಸರ್ವಶಃ ನಿಗೃಹೀತವಾಗಿರುವುವೋ, ಅವನ ಪ್ರಜ್ಞೆ ಪ್ರತಿಷ್ಠಿತವಾಗಿರುವುದು."
      },
      {
        id: "2-69",
        chapter: 2,
        verse: 69,
        kannada: "ಯಾ ನಿಶಾ ಸರ್ವಭೂತಾನಾಂ ತಸ್ಯಾಂ ಜಾಗರ್ತಿ ಸಂಯಮೀ | ಯಸ್ಯಾಂ ಜಾಗ್ರತಿ ಭೂತಾನಿ ಸಾ ನಿಶಾ ಪಶ್ಯತೋ ಮುನೇಃ ||",
        transliteration: "yā niśhā sarva-bhūtānāṁ tasyāṁ jāgarti saṁyamī | yasyāṁ jāgrati bhūtāni sā niśhā paśhyato muneḥ",
        meaning: "ಯಾವ ರಾತ್ರಿ ಸರ್ವಭೂತಗಳಿಗೂ, ಆ ರಾತ್ರಿಯಲ್ಲಿ ಸಂಯಮಿ ಜಾಗರಿಸುತ್ತಾನೆ. ಯಾವ ರಾತ್ರಿಯಲ್ಲಿ ಭೂತಗಳು ಜಾಗರಿಸುತ್ತವೆಯೋ, ಆ ರಾತ್ರಿಯು ದರ್ಶನಶೀಲ ಮುನಿಗೆ."
      },
      {
        id: "2-70",
        chapter: 2,
        verse: 70,
        kannada: "ಆಪೂರ್ಯಮಾಣಮಚಲಪ್ರತಿಷ್ಠಂ ಸಮುದ್ರಮಾಪಃ ಪ್ರವಿಶಂತಿ ಯದ್ವತ್ | ತದ್ವತ್ಕಾಮಾ ಯಂ ಪ್ರವಿಶಂತಿ ಸರ್ವೇ ಸ ಶಾಂತಿಮಾಪ್ನೋತಿ ನ ಕಾಮಕಾಮೀ ||",
        transliteration: "āpūryamāṇam achala-pratiṣhṭhaṁ samudram āpaḥ praviśhanti yadvat | tadvat kāmā yaṁ praviśhanti sarve sa śhāntim āpnoti na kāma-kāmī",
        meaning: "ನದಿಗಳು ಆಪೂರ್ಯಮಾಣವಾದ, ಅಚಲಪ್ರತಿಷ್ಠವಾದ ಸಮುದ್ರದಲ್ಲಿ ಪ್ರವೇಶಿಸುವಂತೆ, ಕಾಮಗಳು ಯಾರಲ್ಲಿ ಪ್ರವೇಶಿಸುತ್ತವೆಯೋ, ಅವನು ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ, ಕಾಮಕಾಮಿಯಲ್ಲ."
      },
      {
        id: "2-71",
        chapter: 2,
        verse: 71,
        kannada: "ವಿಹಾಯ ಕಾಮಾನ್ಯಃ ಸರ್ವಾನ್ ಪುಮಾಂಶ್ಚರತಿ ನಿಃಸ್ಪೃಹಃ | ನಿರ್ಮಮೋ ನಿರಹಂಕಾರಃ ಸ ಶಾಂತಿಮಧಿಗಚ್ಛತಿ ||",
        transliteration: "vihāya kāmān yaḥ sarvān pumāṁś charati niḥspṛihaḥ | nirmamo nirahaṅkāraḥ sa śhāntim adhigachchhati",
        meaning: "ಯಾವ ಪುರುಷನು ಎಲ್ಲಾ ಕಾಮಗಳನ್ನು ತ್ಯಜಿಸಿ, ನಿಃಸ್ಪೃಹನಾಗಿ, ನಿರ್ಮಮನಾಗಿ, ನಿರಹಂಕಾರನಾಗಿ ಚರಿಸುತ್ತಾನೆಯೋ, ಅವನು ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "2-72",
        chapter: 2,
        verse: 72,
        kannada: "ಏಷಾ ಬ್ರಾಹ್ಮೀ ಸ್ಥಿತಿಃ ಪಾರ್ಥ ನೈನಾಂ ಪ್ರಾಪ್ಯ ವಿಮುಹ್ಯತಿ | ಸ್ಥಿತ್ವಾಸ್ಯಾಮಂತಕಾಲೇऽಪಿ ಬ್ರಹ್ಮನಿರ್ವಾಣಮೃಚ್ಛತಿ ||",
        transliteration: "eṣhā brāhmī sthitiḥ pārtha naināṁ prāpya vimuhyati | sthitvāsyām antakāle 'pi brahma-nirvāṇam ṛichchhati",
        meaning: "ಪಾರ್ಥನೇ, ಇದು ಬ್ರಾಹ್ಮೀ ಸ್ಥಿತಿ. ಇದನ್ನು ಪಡೆದವನು ಮೋಹಗೊಳ್ಳುವುದಿಲ್ಲ. ಅಂತ್ಯಕಾಲದಲ್ಲಿಯೂ ಇದರಲ್ಲಿ ಸ್ಥಿತನಾಗಿ ಬ್ರಹ್ಮನಿರ್ವಾಣವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      }
    ]
  },
  { 
    id: 3,
    title: "Karma Yoga",
    kannadaTitle: "ಕರ್ಮ ಯೋಗ", 
    description: "ನಿಷ್ಕಾಮ ಕರ್ಮ - The path of selfless action",
    totalVerses: 43,
    verses: [
      {
        id: "3-1",
        chapter: 3,
        verse: 1,
        kannada: "ಅರ್ಜುನ ಉವಾಚ | ಜ್ಯಾಯಸೀ ಚೇತ್ಕರ್ಮಣಸ್ತೇ ಮತಾ ಬುದ್ಧಿರ್ಜನಾರ್ದನ | ತತ್ಕಿಂ ಕರ್ಮಣಿ ಘೋರೇ ಮಾಂ ನಿಯೋಜಯಸಿ ಕೇಶವ ||",
        transliteration: "arjuna uvācha jyāyasī chet karmaṇas te matā buddhir janārdana tat kiṁ karmaṇi ghore māṁ niyojayasi keśhava",
        meaning: "ಅರ್ಜುನನು ಹೇಳಿದನು: ಜನಾರ್ದನನೇ, ಕರ್ಮಕ್ಕಿಂತ ಬುದ್ಧಿಯೇ ಶ್ರೇಷ್ಠವೆಂದು ನೀನು ಭಾವಿಸಿದರೆ, ಕೇಶವನೇ, ನನ್ನನ್ನು ಈ ಭಯಾನಕ ಕರ್ಮದಲ್ಲಿ ಏಕೆ ತೊಡಗಿಸುತ್ತೀ?"
      },
      {
        id: "3-2",
        chapter: 3,
        verse: 2,
        kannada: "ವ್ಯಾಮಿಶ್ರೇಣೇವ ವಾಕ್ಯೇನ ಬುದ್ಧಿಂ ಮೋಹಯಸೀವ ಮೇ | ತದೇಕಂ ವದ ನಿಶ್ಚಿತ್ಯ ಯೇನ ಶ್ರೇಯೋऽಹಮಾಪ್ನುಯಾಮ್ ||",
        transliteration: "vyāmiśhreṇeva vākyena buddhiṁ mohayasīva me tad ekaṁ vada niśhchitya yena śhreyo 'ham āpnuyām",
        meaning: "ವ್ಯಾಮಿಶ್ರವಾದ ಮಾತುಗಳಿಂದ ನನ್ನ ಬುದ್ಧಿಯನ್ನು ಮೋಹಗೊಳಿಸುತ್ತೀಯೋ ಎನ್ನುವಂತಿದೆ. ನಿಶ್ಚಯವಾಗಿ ಒಂದನ್ನು ಹೇಳು, ಅದರಿಂದ ನಾನು ಶ್ರೇಯಸ್ಸನ್ನು ಪಡೆಯಲಿ."
      },
      {
        id: "3-3",
        chapter: 3,
        verse: 3,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಲೋಕೇऽಸ್ಮಿನ್ದ್ವಿವಿಧಾ ನಿಷ್ಠಾ ಪುರಾ ಪ್ರೋಕ್ತಾ ಮಯಾನಘ | ಜ್ಞಾನಯೋಗೇನ ಸಾಂಖ್ಯಾನಾಂ ಕರ್ಮಯೋಗೇನ ಯೋಗಿನಾಮ್ ||",
        transliteration: "śhrī-bhagavān uvācha loke 'smin dvividhā niṣhṭhā purā proktā mayānagha jñāna-yogena sāṅkhyānāṁ karma-yogena yoginām",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ಅನಘನೇ, ಈ ಲೋಕದಲ್ಲಿ ಪೂರ್ವದಲ್ಲಿ ನಾನು ಎರಡು ವಿಧದ ನಿಷ್ಠೆಯನ್ನು ಹೇಳಿದೆನು - ಸಾಂಖ್ಯರಿಗೆ ಜ್ಞಾನಯೋಗದಿಂದ, ಯೋಗಿಗಳಿಗೆ ಕರ್ಮಯೋಗದಿಂದ."
      },
      {
        id: "3-4",
        chapter: 3,
        verse: 4,
        kannada: "ನ ಕರ್ಮಣಾಮನಾರಂಭಾನ್ನೈಷ್ಕರ್ಮ್ಯಂ ಪುರುಷೋऽಶ್ನುತೇ | ನ ಚ ಸಂನ್ಯಸನಾದೇವ ಸಿದ್ಧಿಂ ಸಮಧಿಗಚ್ಛತಿ ||",
        transliteration: "na karmaṇām anārambhān naiṣhkarmyaṁ puruṣho 'śhnute na cha sannyasanād eva siddhiṁ samadhigachchhati",
        meaning: "ಕರ್ಮಗಳನ್ನು ಆರಂಭಿಸದೆ ನೈಷ್ಕರ್ಮ್ಯವನ್ನು ಪುರುಷನು ಪಡೆಯುವುದಿಲ್ಲ. ಸಂನ್ಯಾಸದಿಂದ ಮಾತ್ರವೇ ಸಿದ್ಧಿಯನ್ನು ಪಡೆಯುವುದಿಲ್ಲ."
      },
      {
        id: "3-5",
        chapter: 3,
        verse: 5,
        kannada: "ನ ಹಿ ಕಶ್ಚಿತ್ಕ್ಷಣಮಪಿ ಜಾತು ತಿಷ್ಠತ್ಯಕರ್ಮಕೃತ್ | ಕಾರ್ಯತೇ ಹ್ಯವಶಃ ಕರ್ಮ ಸರ್ವಃ ಪ್ರಕೃತಿಜೈರ್ಗುಣೈಃ ||",
        transliteration: "na hi kaśhchit kṣhaṇam api jātu tiṣhṭhaty akarma-kṛit kāryate hy avaśhaḥ karma sarvaḥ prakṛiti-jair guṇaiḥ",
        meaning: "ಯಾರೂ ಕ್ಷಣಮಾತ್ರವೂ ಅಕರ್ಮಕೃತನಾಗಿ ನಿಲ್ಲಲಾರನು. ಪ್ರಕೃತಿಜ ಗುಣಗಳಿಂದ ಸರ್ವರೂ ಅವಶಃ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತಾರೆ."
      },
      {
        id: "3-6",
        chapter: 3,
        verse: 6,
        kannada: "ಕರ್ಮೇಂದ್ರಿಯಾಣಿ ಸಂಯಮ್ಯ ಯ ಆಸ್ತೇ ಮನಸಾ ಸ್ಮರನ್ | ಇಂದ್ರಿಯಾರ್ಥಾನ್ವಿಮೂಢಾತ್ಮಾ ಮಿಥ್ಯಾಚಾರಃ ಸ ಉಚ್ಯತೇ ||",
        transliteration: "karmendriyāṇi saṁyamya ya āste manasā smaran indriyārthān vimūḍhātmā mithyāchāraḥ sa uchyate",
        meaning: "ಕರ್ಮೇಂದ್ರಿಯಗಳನ್ನು ಸಂಯಮಿಸಿ, ಮನಸ್ಸಿನಿಂದ ಇಂದ್ರಿಯಾರ್ಥಗಳನ್ನು ಸ್ಮರಿಸುತ್ತ ಕುಳಿತಿರುವ ವಿಮೂಢಾತ್ಮನು ಮಿಥ್ಯಾಚಾರನೆಂದು ಹೇಳಲ್ಪಡುತ್ತಾನೆ."
      },
      {
        id: "3-7",
        chapter: 3,
        verse: 7,
        kannada: "ಯಸ್ತ್ವಿಂದ್ರಿಯಾಣಿ ಮನಸಾ ನಿಯಮ್ಯಾರಭತೇऽರ್ಜುನ | ಕರ್ಮೇಂದ್ರಿಯೈಃ ಕರ್ಮಯೋಗಮಸಕ್ತಃ ಸ ವಿಶಿಷ್ಯತೇ ||",
        transliteration: "yas tv indriyāṇi manasā niyamyārabhate 'rjuna karmendriyaiḥ karma-yogam asaktaḥ sa viśhiṣhyate",
        meaning: "ಅರ್ಜುನನೇ, ಯಾವನು ಮನಸ್ಸಿನಿಂದ ಇಂದ್ರಿಯಗಳನ್ನು ನಿಯಮಿಸಿ, ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಕರ್ಮೇಂದ್ರಿಯಗಳಿಂದ ಕರ್ಮಯೋಗವನ್ನು ಆರಂಭಿಸುತ್ತಾನೆಯೋ, ಅವನು ಶ್ರೇಷ್ಠನಾಗುತ್ತಾನೆ."
      },
      {
        id: "3-8",
        chapter: 3,
        verse: 8,
        kannada: "ನಿಯತಂ ಕುರು ಕರ್ಮ ತ್ವಂ ಕರ್ಮ ಜ್ಯಾಯೋ ಹ್ಯಕರ್ಮಣಃ | ಶರೀರಯಾತ್ರಾಪಿ ಚ ತೇ ನ ಪ್ರಸಿದ್ಧ್ಯೇದಕರ್ಮಣಃ ||",
        transliteration: "niyataṁ kuru karma tvaṁ karma jyāyo hy akarmaṇaḥ śharīra-yātrāpi cha te na prasiddhyed akarmaṇaḥ",
        meaning: "ನೀನು ನಿಯತ ಕರ್ಮವನ್ನು ಮಾಡು. ಕರ್ಮವು ಅಕರ್ಮಕ್ಕಿಂತ ಶ್ರೇಷ್ಠ. ಅಕರ್ಮದಿಂದ ಶರೀರಯಾತ್ರೆಯೂ ಸಿದ್ಧಿಸುವುದಿಲ್ಲ."
      },
      {
        id: "3-9",
        chapter: 3,
        verse: 9,
        kannada: "ಯಜ್ಞಾರ್ಥಾತ್ಕರ್ಮಣೋऽನ್ಯತ್ರ ಲೋಕೋऽಯಂ ಕರ್ಮಬಂಧನಃ | ತದರ್ಥಂ ಕರ್ಮ ಕೌಂತೇಯ ಮುಕ್ತಸಂಗಃ ಸಮಾಚರ ||",
        transliteration: "yajñārthāt karmaṇo 'nyatra loko 'yaṁ karma-bandhanaḥ tad-arthaṁ karma kaunteya mukta-saṅgaḥ samāchara",
        meaning: "ಕೌಂತೇಯನೇ, ಯಜ್ಞಾರ್ಥವಾಗಿ ಮಾಡದೆ ಇರುವ ಕರ್ಮ ಈ ಲೋಕವನ್ನು ಕರ್ಮಬಂಧನಗೊಳಿಸುತ್ತದೆ. ಆ ಯಜ್ಞಾರ್ಥವಾಗಿ ಕರ್ಮವನ್ನು ಮಾಡು, ಸಂಗವನ್ನು ಬಿಟ್ಟು."
      },
      {
        id: "3-10",
        chapter: 3,
        verse: 10,
        kannada: "ಸಹಯಜ್ಞಾಃ ಪ್ರಜಾಃ ಸೃಷ್ಟ್ವಾ ಪುರೋವಾಚ ಪ್ರಜಾಪತಿಃ | ಅನೇನ ಪ್ರಸವಿಷ್ಯಧ್ವಮೇಷ ವೋऽಸ್ತ್ವಿಷ್ಟಕಾಮಧುಕ್ ||",
        transliteration: "saha-yajñāḥ prajāḥ sṛiṣhṭvā purovācha prajāpatiḥ anena prasaviṣhyadhvam eṣha vo 'stviṣhṭa-kāmadhuk",
        meaning: "ಪ್ರಜಾಪತಿಯು ಸಹಯಜ್ಞರಾದ ಪ್ರಜೆಗಳನ್ನು ಸೃಷ್ಟಿಸಿ, 'ಇದರಿಂದ ನೀವು ವೃದ್ಧಿಯಾಗಿರಿ, ಇದು ನಿಮ್ಮ ಇಷ್ಟಕಾಮಧುಕ್ ಆಗಲಿ' ಎಂದು ಹೇಳಿದನು."
      },
      {
        id: "3-11",
        chapter: 3,
        verse: 11,
        kannada: "ದೇವಾನ್ಭಾವಯತಾನೇನ ತೇ ದೇವಾ ಭಾವಯಂತು ವಃ | ಪರಸ್ಪರಂ ಭಾವಯಂತಃ ಶ್ರೇಯಃ ಪರಮವಾಪ್ಸ್ಯಥ ||",
        transliteration: "devān bhāvayatānena te devā bhāvayantu vaḥ parasparaṁ bhāvayantaḥ śhreyaḥ param avāpsyatha",
        meaning: "ಇದರಿಂದ ದೇವತೆಗಳನ್ನು ಭಾವಿಸಿರಿ, ಅವರು ನಿಮ್ಮನ್ನು ಭಾವಿಸಲಿ. ಪರಸ್ಪರ ಭಾವಿಸುತ್ತ ಪರಮ ಶ್ರೇಯಸ್ಸನ್ನು ಪಡೆಯುವಿರಿ."
      },
      {
        id: "3-12",
        chapter: 3,
        verse: 12,
        kannada: "ಇಷ್ಟಾನ್ಭೋಗಾನ್ಹಿ ವೋ ದೇವಾ ದಾಸ್ಯಂತೇ ಯಜ್ಞಭಾವಿತಾಃ | ತೈರ್ದತ್ತಾನಪ್ರದಾಯೈಭ್ಯೋ ಯೋ ಭುಂಕ್ತೇ ಸ್ತೇನ ಏವ ಸಃ ||",
        transliteration: "iṣhṭān bhogān hi vo devā dāsyante yajña-bhāvitāḥ tair dattān apradāyaibhyo yo bhuṅkte stena eva saḥ",
        meaning: "ಯಜ್ಞಭಾವಿತರಾದ ದೇವತೆಗಳು ನಿಮಗೆ ಇಷ್ಟಭೋಗಗಳನ್ನು ಕೊಡುವರು. ಅವರು ಕೊಟ್ಟದ್ದನ್ನು ಅವರಿಗೆ ಕೊಡದೆ ಯಾರು ಭುಂಜಿಸುವನೋ, ಅವನು ಚೋರನೇ."
      },
      {
        id: "3-13",
        chapter: 3,
        verse: 13,
        kannada: "ಯಜ್ಞಶಿಷ್ಟಾಶಿನಃ ಸಂತೋ ಮುಚ್ಯಂತೇ ಸರ್ವಕಿಲ್ಬಿಷೈಃ | ಭುಂಜತೇ ತೇ ತ್ವಘಂ ಪಾಪಾ ಯೇ ಪಚಂತ್ಯಾತ್ಮಕಾರಣಾತ್ ||",
        transliteration: "yajña-śhiṣhṭāśhinaḥ santo muchyante sarva-kilbiṣhaiḥ bhuñjate te tv aghaṁ pāpā ye pachanty ātma-kāraṇāt",
        meaning: "ಯಜ್ಞಶಿಷ್ಟವನ್ನು ಭುಂಜಿಸುವ ಸಜ್ಜನರು ಸರ್ವ ಪಾಪಗಳಿಂದ ಮುಕ್ತರಾಗುತ್ತಾರೆ. ಆತ್ಮಕಾರಣದಿಂದ ಪಚಿಸುವ ಪಾಪಿಗಳು ಅಘವನ್ನು ಭುಂಜಿಸುತ್ತಾರೆ."
      },
      {
        id: "3-14",
        chapter: 3,
        verse: 14,
        kannada: "ಅನ್ನಾದ್ಭವಂತಿ ಭೂತಾನಿ ಪರ್ಜನ್ಯಾದನ್ನಸಂಭವಃ | ಯಜ್ಞಾದ್ಭವತಿ ಪರ್ಜನ್ಯೋ ಯಜ್ಞಃ ಕರ್ಮಸಮುದ್ಭವಃ ||",
        transliteration: "annād bhavanti bhūtāni parjanyād anna-sambhavaḥ yajñād bhavati parjanyo yajñaḥ karma-samudbhavaḥ",
        meaning: "ಅನ್ನದಿಂದ ಭೂತಗಳು ಉಂಟಾಗುತ್ತವೆ. ಪರ್ಜನ್ಯದಿಂದ ಅನ್ನ ಉಂಟಾಗುತ್ತದೆ. ಯಜ್ಞದಿಂದ ಪರ್ಜನ್ಯ ಉಂಟಾಗುತ್ತದೆ. ಯಜ್ಞವು ಕರ್ಮದಿಂದ ಉದ್ಭವಿಸುತ್ತದೆ."
      },
      {
        id: "3-15",
        chapter: 3,
        verse: 15,
        kannada: "ಕರ್ಮ ಬ್ರಹ್ಮೋದ್ಭವಂ ವಿದ್ಧಿ ಬ್ರಹ್ಮಾಕ್ಷರಸಮುದ್ಭವಮ್ | ತಸ್ಮಾತ್ಸರ್ವಗತಂ ಬ್ರಹ್ಮ ನಿತ್ಯಂ ಯಜ್ಞೇ ಪ್ರತಿಷ್ಠಿತಮ್ ||",
        transliteration: "karma brahmodbhavaṁ viddhi brahmākṣhara-samudbhavam tasmāt sarva-gataṁ brahma nityaṁ yajñe pratiṣhṭitam",
        meaning: "ಕರ್ಮವು ಬ್ರಹ್ಮದಿಂದ ಉದ್ಭವಿಸಿದ್ದೆಂದು ತಿಳಿ. ಬ್ರಹ್ಮವು ಅಕ್ಷರದಿಂದ ಉದ್ಭವಿಸುತ್ತದೆ. ಆದ್ದರಿಂದ ಸರ್ವಗತವಾದ ಬ್ರಹ್ಮವು ಯಜ್ಞದಲ್ಲಿ ನಿತ್ಯ ಪ್ರತಿಷ್ಠಿತವಾಗಿದೆ."
      },
      {
        id: "3-16",
        chapter: 3,
        verse: 16,
        kannada: "ಏವಂ ಪ್ರವರ್ತಿತಂ ಚಕ್ರಂ ನಾನುವರ್ತಯತೀಹ ಯಃ | ಅಘಾಯುರಿಂದ್ರಿಯಾರಾಮೋ ಮೋಘಂ ಪಾರ್ಥ ಸ ಜೀವತಿ ||",
        transliteration: "evaṁ pravartitaṁ chakraṁ nānuvartayatīha yaḥ aghāyur indriyārāmo moghaṁ pārtha sa jīvati",
        meaning: "ಪಾರ್ಥನೇ, ಈ ರೀತಿ ಪ್ರವರ್ತಿತವಾದ ಚಕ್ರವನ್ನು ಇಲ್ಲಿ ಅನುವರ್ತಿಸದವನು ಇಂದ್ರಿಯಾರಾಮನಾಗಿ ಅಘಾಯುಸ್ಸಿನಿಂದ ಮೋಘವಾಗಿ ಜೀವಿಸುತ್ತಾನೆ."
      },
      {
        id: "3-17",
        chapter: 3,
        verse: 17,
        kannada: "ಯಸ್ತ್ವಾತ್ಮರತಿರೇವ ಸ್ಯಾದಾತ್ಮತೃಪ್ತಶ್ಚ ಮಾನವಃ | ಆತ್ಮನ್ಯೇವ ಚ ಸಂತುಷ್ಟಸ್ತಸ್ಯ ಕಾರ್ಯಂ ನ ವಿದ್ಯತೇ ||",
        transliteration: "yas tv ātma-ratir eva syād ātma-tṛiptaśh cha mānavaḥ ātmany eva cha santuṣhṭas tasya kāryaṁ na vidyate",
        meaning: "ಯಾವ ಮನುಷ್ಯನು ಆತ್ಮರತಿಯಾಗಿಯೇ ಇರುವನೋ, ಆತ್ಮತೃಪ್ತನಾಗಿಯೇ ಇರುವನೋ, ಆತ್ಮನಲ್ಲಿಯೇ ಸಂತುಷ್ಟನಾಗಿರುವನೋ, ಅವನಿಗೆ ಕಾರ್ಯವಿಲ್ಲ."
      },
      {
        id: "3-18",
        chapter: 3,
        verse: 18,
        kannada: "ನೈವ ತಸ್ಯ ಕೃತೇನಾರ್ಥೋ ನಾಕೃತೇನೇಹ ಕಶ್ಚನ | ನ ಚಾಸ್ಯ ಸರ್ವಭೂತೇಷು ಕಶ್ಚಿದರ್ಥವ್ಯಪಾಶ್ರಯಃ ||",
        transliteration: "naiva tasya kṛitenārtho nākṛiteneha kaśhchana na chāsya sarva-bhūteṣhu kaśhchid artha-vyapāśrayaḥ",
        meaning: "ಅವನಿಗೆ ಕೃತದಿಂದಲೂ ಪ್ರಯೋಜನವಿಲ್ಲ, ಅಕೃತದಿಂದಲೂ ಪ್ರಯೋಜನವಿಲ್ಲ. ಸರ್ವಭೂತಗಳಲ್ಲಿ ಅವನಿಗೆ ಯಾವುದರ ಆಶ್ರಯವೂ ಇಲ್ಲ."
      },
      {
        id: "3-19",
        chapter: 3,
        verse: 19,
        kannada: "ತಸ್ಮಾದಸಕ್ತಃ ಸತತಂ ಕಾರ್ಯಂ ಕರ್ಮ ಸಮಾಚರ | ಅಸಕ್ತೋ ಹ್ಯಾಚರನ್ಕರ್ಮ ಪರಮಾಪ್ನೋತಿ ಪೂರುಷಃ ||",
        transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samāchara asakto hy ācharan karma param āpnoti pūruṣhaḥ",
        meaning: "ಆದ್ದರಿಂದ ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಸತತವಾಗಿ ಕಾರ್ಯಕರ್ಮವನ್ನು ಸಮಾಚರಿಸು. ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಕರ್ಮವನ್ನು ಆಚರಿಸುವ ಪುರುಷನು ಪರಮವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "3-20",
        chapter: 3,
        verse: 20,
        kannada: "ಕರ್ಮಣೈವ ಹಿ ಸಂಸಿದ್ಧಿಮಾಸ್ಥಿತಾ ಜನಕಾದಯಃ | ಲೋಕಸಂಗ್ರಹಮೇವಾಪಿ ಸಂಪಶ್ಯನ್ಕರ್ತುಮರ್ಹಸಿ ||",
        transliteration: "karmaṇaiva hi saṁsiddhim āsthitaḥ janakādayaḥ loka-saṅgraham evāpi sampaśhyan kartum arhasi",
        meaning: "ಜನಕಾದಿಗಳು ಕರ್ಮದಿಂದಲೇ ಸಂಸಿದ್ಧಿಯನ್ನು ಪಡೆದರು. ಲೋಕಸಂಗ್ರಹವನ್ನೂ ನೋಡಿ ಮಾಡಲು ಯೋಗ್ಯನಾಗು."
      },
      {
        id: "3-21",
        chapter: 3,
        verse: 21,
        kannada: "ಯದ್ಯದಾಚರತಿ ಶ್ರೇಷ್ಠಸ್ತತ್ತದೇವೇತರೋ ಜನಃ | ಸ ಯತ್ಪ್ರಮಾಣಂ ಕುರುತೇ ಲೋಕಸ್ತದನುವರ್ತತೇ ||",
        transliteration: "yad yad ācharati śhreṣhṭhas tat tad evetaro janaḥ sa yat pramāṇaṁ kurute lokas tad anuvartate",
        meaning: "ಶ್ರೇಷ್ಠನು ಯಾವುದನ್ನು ಆಚರಿಸುವನೋ, ಅದನ್ನೇ ಇತರ ಜನರು ಆಚರಿಸುತ್ತಾರೆ. ಅವನು ಯಾವುದನ್ನು ಪ್ರಮಾಣವನ್ನಾಗಿ ಮಾಡುವನೋ, ಲೋಕವು ಅದನ್ನೇ ಅನುವರ್ತಿಸುತ್ತದೆ."
      },
      {
        id: "3-22",
        chapter: 3,
        verse: 22,
        kannada: "ನ ಮೇ ಪಾರ್ಥಾಸ್ತಿ ಕರ್ತವ್ಯಂ ತ್ರಿಷು ಲೋಕೇಷು ಕಿಂಚನ | ನಾನವಾಪ್ತಮವಾಪ್ತವ್ಯಂ ವರ್ತ ಏವ ಚ ಕರ್ಮಣಿ ||",
        transliteration: "na me pārthāsti kartavyaṁ triṣhu lokeṣhu kiṁchana nānavāptam avāptavyaṁ varta eva cha karmaṇi",
        meaning: "ಪಾರ್ಥನೇ, ಮೂರು ಲೋಕಗಳಲ್ಲಿ ನನಗೆ ಏನೂ ಕರ್ತವ್ಯವಿಲ್ಲ. ಅವಾಪ್ತವಾಗದ್ದೂ ಇಲ್ಲ, ಅವಾಪ್ತವ್ಯವೂ ಇಲ್ಲ. ಆದರೂ ನಾನು ಕರ್ಮದಲ್ಲಿಯೇ ವರ್ತಿಸುತ್ತೇನೆ."
      },
      {
        id: "3-23",
        chapter: 3,
        verse: 23,
        kannada: "ಯದಿ ಹ್ಯಹಂ ನ ವರ್ತೇಯಂ ಜಾತು ಕರ್ಮಣ್ಯತಂದ್ರಿತಃ | ಮಮ ವರ್ತ್ಮಾನುವರ್ತಂತೇ ಮನುಷ್ಯಾಃ ಪಾರ್ಥ ಸರ್ವಶಃ ||",
        transliteration: "yadi hy ahaṁ na varteyaṁ jātu karmaṇy atandritaḥ mama vartmānuvartante manuṣhyāḥ pārtha sarvaśhaḥ",
        meaning: "ಪಾರ್ಥನೇ, ನಾನು ಅತಂದ್ರಿತನಾಗಿ ಕರ್ಮದಲ್ಲಿ ವರ್ತಿಸದಿದ್ದರೆ, ಮನುಷ್ಯರು ಸರ್ವಶಃ ನನ್ನ ಮಾರ್ಗವನ್ನೇ ಅನುವರ್ತಿಸುವರು."
      },
      {
        id: "3-24",
        chapter: 3,
        verse: 24,
        kannada: "ಉತ್ಸೀದೇಯುರಿಮೇ ಲೋಕಾ ನ ಕುರ್ಯಾಂ ಕರ್ಮ ಚೇದಹಮ್ | ಸಂಕರಸ್ಯ ಚ ಕರ್ತಾ ಸ್ಯಾಮುಪಹನ್ಯಾಮಿಮಾಃ ಪ್ರಜಾಃ ||",
        transliteration: "utsīdeyur ime lokā na kuryāṁ karma ched aham saṅkarasya cha kartā syām upahanyām imāḥ prajāḥ",
        meaning: "ನಾನು ಕರ್ಮವನ್ನು ಮಾಡದಿದ್ದರೆ ಈ ಲೋಕಗಳು ನಾಶವಾಗುತ್ತವೆ. ಸಂಕರದ ಕರ್ತನಾಗಿ ಈ ಪ್ರಜೆಗಳನ್ನು ಹಾನಿಮಾಡುವೆನು."
      },
      {
        id: "3-25",
        chapter: 3,
        verse: 25,
        kannada: "ಸಕ್ತಾಃ ಕರ್ಮಣ್ಯವಿದ್ವಾಂಸೋ ಯಥಾ ಕುರ್ವಂತಿ ಭಾರತ | ಕುರ್ಯಾದ್ವಿದ್ವಾಂಸ್ತಥಾಸಕ್ತಶ್ಚಿಕೀರ್ಷುರ್ಲೋಕಸಂಗ್ರಹಮ್ ||",
        transliteration: "saktāḥ karmaṇy avidvāṁso yathā kurvanti bhārata kuryād vidvāns tathāsaktaśh chikīrṣhur loka-saṅgraham",
        meaning: "ಭಾರತನೇ, ಅವಿದ್ವಾಂಸರು ಕರ್ಮದಲ್ಲಿ ಆಸಕ್ತರಾಗಿ ಯಾವ ರೀತಿ ಮಾಡುವರೋ, ಆ ರೀತಿ ವಿದ್ವಾಂಸನು ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಲೋಕಸಂಗ್ರಹವನ್ನು ಇಚ್ಛಿಸಿ ಮಾಡಲಿ."
      },
      {
        id: "3-26",
        chapter: 3,
        verse: 26,
        kannada: "ನ ಬುದ್ಧಿಭೇದಂ ಜನಯೇದಜ್ಞಾನಾಂ ಕರ್ಮಸಂಗಿನಾಮ್ | ಜೋಷಯೇತ್ಸರ್ವಕರ್ಮಾಣಿ ವಿದ್ವಾನ್ಯುಕ್ತಃ ಸಮಾಚರನ್ ||",
        transliteration: "na buddhi-bhedaṁ janayed ajñānāṁ karma-saṅginām joṣhayet sarva-karmāṇi vidvān yuktaḥ samācharan",
        meaning: "ಕರ್ಮಸಂಗಿಗಳಾದ ಅಜ್ಞಾನಿಗಳಲ್ಲಿ ಬುದ್ಧಿಭೇದವನ್ನು ಉಂಟುಮಾಡಬಾರದು. ಯುಕ್ತನಾಗಿ ಸಮಾಚರಿಸುವ ವಿದ್ವಾಂಸನು ಸರ್ವಕರ್ಮಗಳನ್ನು ಪ್ರೀತಿಯಿಂದ ಮಾಡಲಿ."
      },
      {
        id: "3-27",
        chapter: 3,
        verse: 27,
        kannada: "ಪ್ರಕೃತೇಃ ಕ್ರಿಯಮಾಣಾನಿ ಗುಣೈಃ ಕರ್ಮಾಣಿ ಸರ್ವಶಃ | ಅಹಂಕಾರವಿಮೂಢಾತ್ಮಾ ಕರ್ತಾಹಮಿತಿ ಮನ್ಯತೇ ||",
        transliteration: "prakṛiteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśhaḥ ahaṅkāra-vimūḍhātmā kartāham iti manyate",
        meaning: "ಪ್ರಕೃತಿಯ ಗುಣಗಳಿಂದ ಸರ್ವಕರ್ಮಗಳು ಮಾಡಲ್ಪಡುತ್ತವೆ. ಅಹಂಕಾರದಿಂದ ವಿಮೂಢಾತ್ಮನಾದವನು 'ನಾನು ಕರ್ತನು' ಎಂದು ಭಾವಿಸುತ್ತಾನೆ."
      },
      {
        id: "3-28",
        chapter: 3,
        verse: 28,
        kannada: "ತತ್ತ್ವವಿತ್ತು ಮಹಾಬಾಹೋ ಗುಣಕರ್ಮವಿಭಾಗಯೋಃ | ಗುಣಾ ಗುಣೇಷು ವರ್ತಂತ ಇತಿ ಮತ್ವಾ ನ ಸಜ್ಜತೇ ||",
        transliteration: "tattva-vittu mahā-bāho guṇa-karma-vibhāgayoḥ guṇā guṇeṣhu vartanta iti matvā na sajjate",
        meaning: "ಮಹಾಬಾಹುವೇ, ಗುಣಕರ್ಮವಿಭಾಗಗಳ ತತ್ತ್ವವನ್ನು ತಿಳಿದವನು 'ಗುಣಗಳು ಗುಣಗಳಲ್ಲಿಯೇ ವರ್ತಿಸುತ್ತವೆ' ಎಂದು ಭಾವಿಸಿ ಆಸಕ್ತನಾಗುವುದಿಲ್ಲ."
      },
      {
        id: "3-29",
        chapter: 3,
        verse: 29,
        kannada: "ಪ್ರಕೃತೇರ್ಗುಣಸಂಮೂಢಾಃ ಸಜ್ಜಂತೇ ಗುಣಕರ್ಮಸು | ತಾನಕೃತ್ಸ್ನವಿದೋ ಮಂದಾನ್ ಕೃತ್ಸ್ನವಿನ್ನ ವಿಚಾಲಯೇತ್ ||",
        transliteration: "prakṛiter guṇa-sammūḍhāḥ sajjante guṇa-karmasu tān akṛitsna-vido mandān kṛitsna-vin na vichālayet",
        meaning: "ಪ್ರಕೃತಿಯ ಗುಣಗಳಿಂದ ಸಂಮೂಢರಾದವರು ಗುಣಕರ್ಮಗಳಲ್ಲಿ ಆಸಕ್ತರಾಗುತ್ತಾರೆ. ಅಕೃತ್ಸ್ನವಿದರಾದ ಆ ಮಂದರನ್ನು ಕೃತ್ಸ್ನವಿತ್ತು ಚಲಿಸಗೊಡಬಾರದು."
      },
      {
        id: "3-30",
        chapter: 3,
        verse: 30,
        kannada: "ಮಯಿ ಸರ್ವಾಣಿ ಕರ್ಮಾಣಿ ಸಂನ್ಯಸ್ಯಾಧ್ಯಾತ್ಮಚೇತಸಾ | ನಿರಾಶೀರ್ನಿರ್ಮಮೋ ಭೂತ್ವಾ ಯುಧ್ಯಸ್ವ ವಿಗತಜ್ವರಃ ||",
        transliteration: "mayi sarvāṇi karmāṇi sannyasyādhyātma-chetasā nirāśhīr nirmamo bhūtvā yudhyasva vigata-jvaraḥ",
        meaning: "ಅಧ್ಯಾತ್ಮಚೇತಸ್ಸಿನಿಂದ ಸರ್ವಕರ್ಮಗಳನ್ನು ನನ್ನಲ್ಲಿ ಸಂನ್ಯಸಿಸಿ, ನಿರಾಶೀ, ನಿರ್ಮಮನಾಗಿ, ವಿಗತಜ್ವರನಾಗಿ ಯುದ್ಧಮಾಡು."
      },
      {
        id: "3-31",
        chapter: 3,
        verse: 31,
        kannada: "ಯೇ ಮೇ ಮತಮಿದಂ ನಿತ್ಯಮನುತಿಷ್ಠಂತಿ ಮಾನವಾಃ | ಶ್ರದ್ಧಾವಂತೋऽನಸೂಯಂತೋ ಮುಚ್ಯಂತೇ ತೇऽಪಿ ಕರ್ಮಭಿಃ ||",
        transliteration: "ye me matam idaṁ nityam anutiṣhṭhanti mānavāḥ śhraddhāvanto 'nasūyanto muchyante te 'pi karmabhiḥ",
        meaning: "ಯಾವ ಮನುಷ್ಯರು ಶ್ರದ್ಧಾವಂತರಾಗಿ, ಅನಸೂಯರಾಗಿ ಈ ನನ್ನ ಮತವನ್ನು ನಿತ್ಯ ಅನುತಿಷ್ಠಿಸುವರೋ, ಅವರೂ ಕರ್ಮಗಳಿಂದ ಮುಕ್ತರಾಗುತ್ತಾರೆ."
      },
      {
        id: "3-32",
        chapter: 3,
        verse: 32,
        kannada: "ಯೇ ತ್ವೇತದಭ್ಯಸೂಯಂತೋ ನಾನುತಿಷ್ಠಂತಿ ಮೇ ಮತಮ್ | ಸರ್ವಜ್ಞಾನವಿಮೂಢಾಂಸ್ತಾನ್ವಿದ್ಧಿ ನಷ್ಟಾನಚೇತಸಃ ||",
        transliteration: "ye tv etad abhyasūyanto nānutiṣhṭhanti me matam sarva-jñāna-vimūḍhāns tān viddhi naṣhṭān achetasaḥ",
        meaning: "ಯಾರು ಇದನ್ನು ಅಭ್ಯಸೂಯಿಸಿ ನನ್ನ ಮತವನ್ನು ಅನುತಿಷ್ಠಿಸದಿರುವರೋ, ಅವರನ್ನು ಸರ್ವಜ್ಞಾನದಿಂದ ವಿಮೂಢರಾದ, ನಷ್ಟರಾದ, ಅಚೇತಸರಾದವರೆಂದು ತಿಳಿ."
      },
      {
        id: "3-33",
        chapter: 3,
        verse: 33,
        kannada: "ಸದೃಶಂ ಚೇಷ್ಟತೇ ಸ್ವಸ್ಯಾಃ ಪ್ರಕೃತೇರ್ಜ್ಞಾನವಾನಪಿ | ಪ್ರಕೃತಿಂ ಯಾಂತಿ ಭೂತಾನಿ ನಿಗ್ರಹಃ ಕಿಂ ಕರಿಷ್ಯತಿ ||",
        transliteration: "sadṛiśhaṁ cheṣhṭate svasyaḥ prakṛiter jñānavān api prakṛitiṁ yānti bhūtāni nigrahaḥ kiṁ kariṣhyati",
        meaning: "ಜ್ಞಾನವಂತನೂ ತನ್ನ ಪ್ರಕೃತಿಯ ಸದೃಶವನ್ನೇ ಇಚ್ಛಿಸುತ್ತಾನೆ. ಭೂತಗಳು ಪ್ರಕೃತಿಯನ್ನೇ ಹೋಗುತ್ತವೆ. ನಿಗ್ರಹವೇನು ಮಾಡುವುದು?"
      },
      {
        id: "3-34",
        chapter: 3,
        verse: 34,
        kannada: "ಇಂದ್ರಿಯಸ್ಯೇಂದ್ರಿಯಸ್ಯಾರ್ಥೇ ರಾಗದ್ವೇಷೌ ವ್ಯವಸ್ಥಿತೌ | ತಯೋರ್ನ ವಶಮಾಗಚ್ಛೇತ್ತೌ ಹ್ಯಸ್ಯ ಪರಿಪಂಥಿನೌ ||",
        transliteration: "indriyasye indriyasyārthe rāga-dveṣhau vyavasthitau tayor na vaśham āgachchhet tau hy asya paripanthinau",
        meaning: "ಇಂದ್ರಿಯಕ್ಕೆ ಇಂದ್ರಿಯಾರ್ಥದಲ್ಲಿ ರಾಗದ್ವೇಷಗಳು ವ್ಯವಸ್ಥಿತವಾಗಿವೆ. ಅವುಗಳ ವಶಕ್ಕೆ ಹೋಗಬಾರದು. ಅವುಗಳೇ ಅವನಿಗೆ ಶತ್ರುಗಳು."
      },
      {
        id: "3-35",
        chapter: 3,
        verse: 35,
        kannada: "ಶ್ರೇಯಾನ್ಸ್ವಧರ್ಮೋ ವಿಗುಣಃ ಪರಧರ್ಮಾತ್ಸ್ವನುಷ್ಠಿತಾತ್ | ಸ್ವಧರ್ಮೇ ನಿಧನಂ ಶ್ರೇಯಃ ಪರಧರ್ಮೋ ಭಯಾವಹಃ ||",
        transliteration: "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt sva-dharme nidhanaṁ śhreyaḥ para-dharmo bhayāvahaḥ",
        meaning: "ಸ್ವನುಷ್ಠಿತವಾದ ಪರಧರ್ಮಕ್ಕಿಂತ ವಿಗುಣವಾದ ಸ್ವಧರ್ಮವೇ ಶ್ರೇಷ್ಠ. ಸ್ವಧರ್ಮದಲ್ಲಿ ನಿಧನವೇ ಶ್ರೇಯಸ್ಕರ, ಪರಧರ್ಮವು ಭಯಾವಹ."
      },
      {
        id: "3-36",
        chapter: 3,
        verse: 36,
        kannada: "ಅರ್ಜುನ ಉವಾಚ | ಅಥ ಕೇನ ಪ್ರಯುಕ್ತೋऽಯಂ ಪಾಪಂ ಚರತಿ ಪೂರುಷಃ | ಅನಿಚ್ಛನ್ನಪಿ ವಾರ್ಷ್ಣೇಯ ಬಲಾದಿವ ನಿಯೋಜಿತಃ ||",
        transliteration: "arjuna uvācha atha kena prayukto 'yaṁ pāpaṁ charati pūruṣhaḥ anichchhann api vārṣhṇeya balād iva niyojitaḥ",
        meaning: "ಅರ್ಜುನನು ಹೇಳಿದನು: ವಾರ್ಷ್ಣೇಯನೇ, ಆದರೆ ಯಾವುದರಿಂದ ಪ್ರೇರಿತನಾಗಿ ಪುರುಷನು ಪಾಪವನ್ನು ಆಚರಿಸುತ್ತಾನೆ? ಅನಿಚ್ಛೆಯಿಂದಲೂ ಬಲಾತ್ಕಾರದಿಂದ ನಿಯೋಜಿತನಾದಂತೆ."
      },
      {
        id: "3-37",
        chapter: 3,
        verse: 37,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಕಾಮ ಏಷ ಕ್ರೋಧ ಏಷ ರಜೋಗುಣಸಮುದ್ಭವಃ | ಮಹಾಶನೋ ಮಹಾಪಾಪ್ಮಾ ವಿದ್ಧ್ಯೇನಮಿಹ ವೈರಿಣಮ್ ||",
        transliteration: "śhrī-bhagavān uvācha kāma eṣha krodha eṣha rajo-guṇa-samudbhavaḥ mahāśhano mahā-pāpmā viddhy enam iha vairiṇam",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ಇದು ಕಾಮ, ಇದು ಕ್ರೋಧ, ರಜೋಗುಣದಿಂದ ಉದ್ಭವಿಸಿದ್ದು, ಮಹಾಶನ, ಮಹಾಪಾಪ್ಮಾ. ಇದನ್ನು ಇಲ್ಲಿ ಶತ್ರುವೆಂದು ತಿಳಿ."
      },
      {
        id: "3-38",
        chapter: 3,
        verse: 38,
        kannada: "ಧೂಮೇನಾವ್ರಿಯತೇ ವಹ್ನಿರ್ಯಥಾದರ್ಶೋ ಮಲೇನ ಚ | ಯಥೋಲ್ಬೇನಾವೃತೋ ಗರ್ಭಸ್ತಥಾ ತೇನೇದಮಾವೃತಮ್ ||",
        transliteration: "dhūmenāvriyate vahnir yathādarśho malena cha yatholbenāvṛito garbhas tathā tenedam āvṛitam",
        meaning: "ಧೂಮದಿಂದ ಅಗ್ನಿಯು, ಮಲದಿಂದ ದರ್ಪಣವು, ಉಲ್ಬದಿಂದ ಗರ್ಭವು ಆವೃತವಾಗುವಂತೆ, ಇದರಿಂದ ಇದು ಆವೃತವಾಗಿದೆ."
      },
      {
        id: "3-39",
        chapter: 3,
        verse: 39,
        kannada: "ಆವೃತಂ ಜ್ಞಾನಮೇತೇನ ಜ್ಞಾನಿನೋ ನಿತ್ಯವೈರಿಣಾ | ಕಾಮರೂಪೇಣ ಕೌಂತೇಯ ದುಷ್ಪೂರೇಣಾನಲೇನ ಚ ||",
        transliteration: "āvṛitaṁ jñānam etena jñānino nitya-vairiṇā kāma-rūpeṇa kaunteya duṣhpūreṇānalena cha",
        meaning: "ಕೌಂತೇಯನೇ, ಜ್ಞಾನವು ಈ ನಿತ್ಯವೈರಿಯಾದ, ಕಾಮರೂಪಿಯಾದ, ದುಷ್ಪೂರವಾದ, ಅನಲನಾದ ಇದರಿಂದ ಆವೃತವಾಗಿದೆ."
      },
      {
        id: "3-40",
        chapter: 3,
        verse: 40,
        kannada: "ಇಂದ್ರಿಯಾಣಿ ಮನೋ ಬುದ್ಧಿರಸ್ಯಾಧಿಷ್ಠಾನಮುಚ್ಯತೇ | ಏತೈರ್ವಿಮೋಹಯತ್ಯೇಷ ಜ್ಞಾನಮಾವೃತ್ಯ ದೇಹಿನಮ್ ||",
        transliteration: "indriyāṇi mano buddhir asyādhiṣhṭhānam uchyate etair vimohayatyeṣha jñānam āvṛitya dehinam",
        meaning: "ಇಂದ್ರಿಯಗಳು, ಮನಸ್ಸು, ಬುದ್ಧಿ - ಇವುಗಳು ಇದರ ಆಧಿಷ್ಠಾನವೆಂದು ಹೇಳಲ್ಪಡುತ್ತದೆ. ಇವುಗಳಿಂದ ಇದು ಜ್ಞಾನವನ್ನು ಆವರಿಸಿ ದೇಹಿಯನ್ನು ವಿಮೋಹಗೊಳಿಸುತ್ತದೆ."
      },
      {
        id: "3-41",
        chapter: 3,
        verse: 41,
        kannada: "ತಸ್ಮಾತ್ತ್ವಮಿಂದ್ರಿಯಾಣ್ಯಾದೌ ನಿಯಮ್ಯ ಭರತರ್ಷಭ | ಪಾಪ್ಮಾನಂ ಪ್ರಜಹಿ ಹ್ಯೇನಂ ಜ್ಞಾನವಿಜ್ಞಾನನಾಶನಮ್ ||",
        transliteration: "tasmāt tvam indriyāṇy ādau niyamya bharatarṣhabha pāpmānaṁ prajahi hy enaṁ jñāna-vijñāna-nāśhanam",
        meaning: "ಭರತರ್ಷಭನೇ, ಆದ್ದರಿಂದ ನೀನು ಇಂದ್ರಿಯಗಳನ್ನು ಆದಿಯಲ್ಲಿ ನಿಯಮಿಸಿ, ಜ್ಞಾನವಿಜ್ಞಾನನಾಶನವಾದ ಈ ಪಾಪ್ಮಾನನ್ನು ನಾಶಮಾಡು."
      },
      {
        id: "3-42",
        chapter: 3,
        verse: 42,
        kannada: "ಇಂದ್ರಿಯಾಣಿ ಪರಾಣ್ಯಾಹುರಿಂದ್ರಿಯೇಭ್ಯಃ ಪರಂ ಮನಃ | ಮನಸಸ್ತು ಪರಾ ಬುದ್ಧಿರ್ಯೋ ಬುದ್ಧೇಃ ಪರತಸ್ತು ಸಃ ||",
        transliteration: "indriyāṇi parāṇyāhur indriyebhyaḥ paraṁ manaḥ manasas tu parā buddhir yo buddheḥ paratas tu saḥ",
        meaning: "ಇಂದ್ರಿಯಗಳು ಪರವೆನ್ನಲ್ಪಡುತ್ತವೆ. ಇಂದ್ರಿಯಗಳಿಗಿಂತ ಮನಸ್ಸು ಪರ. ಮನಸ್ಸಿಗಿಂತ ಬುದ್ಧಿ ಪರ. ಬುದ್ಧಿಗಿಂತ ಯಾವುದು ಪರವೋ ಅದು ಆ ಆತ್ಮ."
      },
      {
        id: "3-43",
        chapter: 3,
        verse: 43,
        kannada: "ಏವಂ ಬುದ್ಧೇಃ ಪರಂ ಬುದ್ಧ್ವಾ ಸಂಸ್ತಭ್ಯಾತ್ಮಾನಮಾತ್ಮನಾ | ಜಹಿ ಶತ್ರುಂ ಮಹಾಬಾಹೋ ಕಾಮರೂಪಂ ದುರಾಸದಮ್ ||",
        transliteration: "evaṁ buddheḥ paraṁ buddhvā sanstabhyātmānam ātmanā jahi śhatruṁ mahā-bāho kāma-rūpaṁ durāsadam",
        meaning: "ಮಹಾಬಾಹುವೇ, ಹೀಗೆ ಬುದ್ಧಿಗಿಂತ ಪರವಾದ ಆತ್ಮನನ್ನು ತಿಳಿದು, ಆತ್ಮನಿಂದ ಆತ್ಮನನ್ನು ಸಂಸ್ತಭ್ಯ, ದುರಾಸದವಾದ ಕಾಮರೂಪ ಶತ್ರುವನ್ನು ನಾಶಮಾಡು."
      }
    ],
  },
  {
    id: 4,
    title: "Jnana Karma Sanyasa Yoga",
    kannadaTitle: "ಜ್ಞಾನ ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ",
    description: "ಜ್ಞಾನ ಮತ್ತು ಕರ್ಮ ಸಂನ್ಯಾಸ - Knowledge and renunciation of action",
    totalVerses: 42,
    verses: [
      {
        id: "4-1",
        chapter: 4,
        verse: 1,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಇಮಂ ವಿವಸ್ವತೇ ಯೋಗಂ ಪ್ರೋಕ್ತವಾನಹಮವ್ಯಯಮ್ | ವಿವಸ್ವಾನ್ಮನವೇ ಪ್ರಾಹ ಮನುರಿಕ್ಷ್ವಾಕವೇऽಬ್ರವೀತ್ ||",
        transliteration: "śhrī-bhagavān uvācha imaṁ vivasvate yogaṁ proktavānaham avyayam vivasvān manave prāha manur ikṣhvākave 'bravīt",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ಈ ಅವ್ಯಯ ಯೋಗವನ್ನು ನಾನು ವಿವಸ್ವಾನನಿಗೆ ಹೇಳಿದೆನು. ವಿವಸ್ವಾನನು ಮನುವಿಗೆ ಹೇಳಿದನು. ಮನುವು ಇಕ್ಷ್ವಾಕುವಿಗೆ ಹೇಳಿದನು."
      },
      {
        id: "4-2",
        chapter: 4,
        verse: 2,
        kannada: "ಏವಂ ಪರಂಪರಾಪ್ರಾಪ್ತಮಿಮಂ ರಾಜರ್ಷಯೋ ವಿದುಃ | ಸ ಕಾಲೇನೇಹ ಮಹತಾ ಯೋಗೋ ನಷ್ಟಃ ಪರಂತಪ ||",
        transliteration: "evaṁ paramparā-prāptam imaṁ rājarṣhayo viduḥ sa kāleneha mahatā yogo naṣhṭaḥ parantapa",
        meaning: "ಪರಂತಪನೇ, ಈ ರೀತಿ ಪರಂಪರೆಯಿಂದ ಪಡೆದ ಈ ಯೋಗವನ್ನು ರಾಜರ್ಷಿಗಳು ತಿಳಿದಿದ್ದರು. ಕಾಲಕ್ರಮೇಣ ಅದು ಇಲ್ಲಿ ನಷ್ಟವಾಯಿತು."
      },
      {
        id: "4-3",
        chapter: 4,
        verse: 3,
        kannada: "ಸ ಏವಾಯಂ ಮಯಾ ತೇऽದ್ಯ ಯೋಗಃ ಪ್ರೋಕ್ತಃ ಪುರಾತನಃ | ಭಕ್ತೋऽಸಿ ಮೇ ಸಖಾ ಚೇತಿ ರಹಸ್ಯಂ ಹ್ಯೇತದುತ್ತಮಮ್ ||",
        transliteration: "sa evāyaṁ mayā te 'dya yogaḥ proktaḥ purātanaḥ bhakto 'si me sakhā cheti rahasyaṁ hy etad uttamam",
        meaning: "ಅದೇ ಈ ಪುರಾತನ ಯೋಗವನ್ನು ನಾನು ಇಂದು ನಿನಗೆ ಹೇಳುತ್ತೇನೆ. ನೀನು ನನ್ನ ಭಕ್ತನೂ ಸ್ನೇಹಿತನೂ ಆಗಿರುವುದರಿಂದ, ಈ ಉತ್ತಮ ರಹಸ್ಯವನ್ನು ಹೇಳುತ್ತೇನೆ."
      },
      {
        id: "4-4",
        chapter: 4,
        verse: 4,
        kannada: "ಅರ್ಜುನ ಉವಾಚ | ಅಪರಂ ಭವತೋ ಜನ್ಮ ಪರಂ ಜನ್ಮ ವಿವಸ್ವತಃ | ಕಥಮೇತದ್ವಿಜಾನೀಯಾಂ ತ್ವಮಾದೌ ಪ್ರೋಕ್ತವಾನಿತಿ ||",
        transliteration: "arjuna uvācha aparaṁ bhavato janma paraṁ janma vivasvataḥ katham etad vijānīyāṁ tvam ādau proktavān iti",
        meaning: "ಅರ್ಜುನನು ಹೇಳಿದನು: ನಿನ್ನ ಜನ್ಮ ಅಪರ, ವಿವಸ್ವಾನನ ಜನ್ಮ ಪರ. ಆದಿಯಲ್ಲಿ ನೀನು ಇದನ್ನು ಹೇಳಿದೆಯೆಂದು ಹೇಗೆ ತಿಳಿಯಲಿ?"
      },
      {
        id: "4-5",
        chapter: 4,
        verse: 5,
        kannada: "ಶ್ರೀಭಗವಾನುವಾಚ | ಬಹೂನಿ ಮೇ ವ್ಯತೀತಾನಿ ಜನ್ಮಾನಿ ತವ ಚಾರ್ಜುನ | ತಾನ್ಯಹಂ ವೇದ ಸರ್ವಾಣಿ ನ ತ್ವಂ ವೇತ್ಥ ಪರಂತಪ ||",
        transliteration: "śhrī-bhagavān uvācha bahūni me vyatītāni janmāni tava chārjuna tāny ahaṁ veda sarvāṇi na tvaṁ vettha parantapa",
        meaning: "ಶ್ರೀಭಗವಾನು ಹೇಳಿದನು: ಪರಂತಪನೇ, ನನಗೂ ನಿನಗೂ ಅನೇಕ ಜನ್ಮಗಳು ಕಳೆದಿವೆ. ಅವೆಲ್ಲವನ್ನೂ ನಾನು ತಿಳಿದಿದ್ದೇನೆ, ನೀನು ತಿಳಿಯುವುದಿಲ್ಲ."
      },
      {
        id: "4-6",
        chapter: 4,
        verse: 6,
        kannada: "ಅಜೋऽಪಿ ಸನ್ನವ್ಯಯಾತ್ಮಾ ಭೂತಾನಾಮೀಶ್ವರೋऽಪಿ ಸನ್ | ಪ್ರಕೃತಿಂ ಸ್ವಾಮಧಿಷ್ಠಾಯ ಸಂಭವಾಮ್ಯಾತ್ಮಮಾಯಯಾ ||",
        transliteration: "ajo 'pi san navyayātmā bhūtānām īśhvaro 'pi san prakṛitiṁ svām adhiṣhṭhāya sambhavāmy ātma-māyayā",
        meaning: "ಅಜನಾಗಿಯೂ, ಅವ್ಯಯಾತ್ಮನಾಗಿಯೂ, ಭೂತಗಳ ಈಶ್ವರನಾಗಿಯೂ ಇರುವ ನಾನು ನನ್ನ ಪ್ರಕೃತಿಯನ್ನು ಆಧಿಷ್ಠಾನಮಾಡಿ ಆತ್ಮಮಾಯೆಯಿಂದ ಜನಿಸುತ್ತೇನೆ."
      },
      {
        id: "4-7",
        chapter: 4,
        verse: 7,
        kannada: "ಯದಾ ಯದಾ ಹಿ ಧರ್ಮಸ್ಯ ಗ್ಲಾನಿರ್ಭವತಿ ಭಾರತ | ಅಭ್ಯುತ್ಥಾನಮಧರ್ಮಸ್ಯ ತದಾತ್ಮಾನಂ ಸೃಜಾಮ್ಯಹಮ್ ||",
        transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata abhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
        meaning: "ಭಾರತನೇ, ಧರ್ಮಕ್ಕೆ ಗ್ಲಾನಿಯೂ ಅಧರ್ಮಕ್ಕೆ ಅಭ್ಯುತ್ಥಾನವೂ ಯಾವಾಗ ಯಾವಾಗ ಉಂಟಾಗುವುದೋ, ಆಗ ಆಗ ನಾನು ಆತ್ಮನನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇನೆ."
      },
      {
        id: "4-8",
        chapter: 4,
        verse: 8,
        kannada: "ಪರಿತ್ರಾಣಾಯ ಸಾಧೂನಾಂ ವಿನಾಶಾಯ ಚ ದುಷ್ಕೃತಾಮ್ | ಧರ್ಮಸಂಸ್ಥಾಪನಾರ್ಥಾಯ ಸಂಭವಾಮಿ ಯುಗೇ ಯುಗೇ ||",
        transliteration: "paritrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām dharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
        meaning: "ಸಾಧುಗಳ ರಕ್ಷಣೆಗಾಗಿ, ದುಷ್ಕೃತಿಗಳ ನಾಶಕ್ಕಾಗಿ, ಧರ್ಮಸಂಸ್ಥಾಪನೆಗಾಗಿ ಯುಗಯುಗದಲ್ಲಿ ಜನಿಸುತ್ತೇನೆ."
      },
      {
        id: "4-9",
        chapter: 4,
        verse: 9,
        kannada: "ಜನ್ಮ ಕರ್ಮ ಚ ಮೇ ದಿವ್ಯಮೇವಂ ಯೋ ವೇತ್ತಿ ತತ್ತ್ವತಃ | ತ್ಯಕ್ತ್ವಾ ದೇಹಂ ಪುನರ್ಜನ್ಮ ನೈತಿ ಮಾಮೇತಿ ಸೋऽರ್ಜುನ ||",
        transliteration: "janma karma cha me divyam evaṁ yo vetti tattvataḥ tyaktvā dehaṁ punar janma naiti mām eti so 'rjuna",
        meaning: "ಅರ್ಜುನನೇ, ಯಾವನು ನನ್ನ ದಿವ್ಯ ಜನ್ಮಕರ್ಮಗಳನ್ನು ತತ್ತ್ವತಃ ತಿಳಿಯುವನೋ, ಅವನು ದೇಹವನ್ನು ತ್ಯಜಿಸಿದ ಮೇಲೆ ಪುನರ್ಜನ್ಮವನ್ನು ಪಡೆಯದೆ ನನ್ನನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "4-10",
        chapter: 4,
        verse: 10,
        kannada: "ವೀತರಾಗಭಯಕ್ರೋಧಾ ಮನ್ಮಯಾ ಮಾಮುಪಾಶ್ರಿತಾಃ | ಬಹವೋ ಜ್ಞಾನತಪಸಾ ಪೂತಾ ಮದ್ಭಾವಮಾಗತಾಃ ||",
        transliteration: "vīta-rāga-bhaya-krodhā man-mayā mām upāśhritāḥ bahavo jñāna-tapasā pūtā mad-bhāvam āgatāḥ",
        meaning: "ರಾಗಭಯಕ್ರೋಧಗಳನ್ನು ಬಿಟ್ಟು, ನನ್ನಲ್ಲಿ ಶರಣುಹೋದ, ನನ್ನಿಂದ ತುಂಬಿದ, ಜ್ಞಾನತಪಸ್ಸಿನಿಂದ ಪವಿತ್ರರಾದ ಅನೇಕರು ನನ್ನ ಭಾವವನ್ನು ಪಡೆದಿದ್ದಾರೆ."
      },
      {
        id: "4-11",
        chapter: 4,
        verse: 11,
        kannada: "ಯೇ ಯಥಾ ಮಾಂ ಪ್ರಪದ್ಯಂತೇ ತಾಂಸ್ತಥೈವ ಭಜಾಮ್ಯಹಮ್ | ಮಮ ವರ್ತ್ಮಾನುವರ್ತಂತೇ ಮನುಷ್ಯಾಃ ಪಾರ್ಥ ಸರ್ವಶಃ ||",
        transliteration: "ye yathā māṁ prapadyante tāns tathaiva bhajāmyaham mama vartmānuvartante manuṣhyāḥ pārtha sarvaśhaḥ",
        meaning: "ಪಾರ್ಥನೇ, ಯಾರು ಯಾವ ರೀತಿ ನನ್ನನ್ನು ಪ್ರಪತ್ತರಾಗುವರೋ, ಅವರನ್ನು ಅದೇ ರೀತಿ ಭಜಿಸುತ್ತೇನೆ. ಮನುಷ್ಯರು ಸರ್ವಶಃ ನನ್ನ ಮಾರ್ಗವನ್ನೇ ಅನುವರ್ತಿಸುತ್ತಾರೆ."
      },
      {
        id: "4-12",
        chapter: 4,
        verse: 12,
        kannada: "ಕಾಂಕ್ಷಂತಃ ಕರ್ಮಣಾಂ ಸಿದ್ಧಿಂ ಯಜಂತ ಇಹ ದೇವತಾಃ | ಕ್ಷಿಪ್ರಂ ಹಿ ಮಾನುಷೇ ಲೋಕೇ ಸಿದ್ಧಿರ್ಭವತಿ ಕರ್ಮಜಾ ||",
        transliteration: "kāṅkṣhantaḥ karmaṇāṁ siddhiṁ yajanta iha devatāḥ kṣhipraṁ hi mānuṣhe loke siddhir bhavati karma-jā",
        meaning: "ಕರ್ಮಗಳ ಸಿದ್ಧಿಯನ್ನು ಕಾಂಕ್ಷಿಸುವವರು ಇಲ್ಲಿ ದೇವತೆಗಳನ್ನು ಯಜಿಸುತ್ತಾರೆ. ಮನುಷ್ಯಲೋಕದಲ್ಲಿ ಕರ್ಮಜ ಸಿದ್ಧಿಯು ಶೀಘ್ರವಾಗಿ ಉಂಟಾಗುತ್ತದೆ."
      },
      {
        id: "4-13",
        chapter: 4,
        verse: 13,
        kannada: "ಚಾತುರ್ವರ್ಣ್ಯಂ ಮಯಾ ಸೃಷ್ಟಂ ಗುಣಕರ್ಮವಿಭಾಗಶಃ | ತಸ್ಯ ಕರ್ತಾರಮಪಿ ಮಾಂ ವಿದ್ಧ್ಯಕರ್ತಾರಮವ್ಯಯಮ್ ||",
        transliteration: "chātur-varṇyaṁ mayā sṛiṣhṭaṁ guṇa-karma-vibhāgaśhaḥ tasya kartāram api māṁ viddhy akartāram avyayam",
        meaning: "ಗುಣಕರ್ಮವಿಭಾಗದಿಂದ ಚಾತುರ್ವರ್ಣ್ಯವನ್ನು ನಾನು ಸೃಷ್ಟಿಸಿದೆನು. ಅದರ ಕರ್ತೃವಾದ ನನ್ನನ್ನು ಅಕರ್ತೃವಾದ ಅವ್ಯಯನೆಂದು ತಿಳಿ."
      },
      {
        id: "4-14",
        chapter: 4,
        verse: 14,
        kannada: "ನ ಮಾಂ ಕರ್ಮಾಣಿ ಲಿಮ್ಪಂತಿ ನ ಮೇ ಕರ್ಮಫಲೇ ಸ್ಪೃಹಾ | ಇತಿ ಮಾಂ ಯೋऽಭಿಜಾನಾತಿ ಕರ್ಮಭಿರ್ನ ಸ ಬಧ್ಯತೇ ||",
        transliteration: "na māṁ karmāṇi limpanti na me karma-phale spṛihā iti māṁ yo 'bhijānāti karmabhir na sa badhyate",
        meaning: "ಕರ್ಮಗಳು ನನ್ನನ್ನು ಲಿಪ್ತಮಾಡುವುದಿಲ್ಲ, ಕರ್ಮಫಲದಲ್ಲಿ ನನಗೆ ಸ್ಪೃಹೆಯಿಲ್ಲ. ಈ ರೀತಿ ಯಾರು ನನ್ನನ್ನು ಅಭಿಜ್ಞಾನ ಮಾಡುವನೋ, ಅವನು ಕರ್ಮಗಳಿಂದ ಬದ್ಧನಾಗುವುದಿಲ್ಲ."
      },
      {
        id: "4-15",
        chapter: 4,
        verse: 15,
        kannada: "ಏವಂ ಜ್ಞಾತ್ವಾ ಕೃತಂ ಕರ್ಮ ಪೂರ್ವೈರಪಿ ಮುಮುಕ್ಷುಭಿಃ | ಕುರು ಕರ್ಮೈವ ತಸ್ಮಾತ್ತ್ವಂ ಪೂರ್ವೈಃ ಪೂರ್ವತರಂ ಕೃತಮ್ ||",
        transliteration: "evaṁ jñātvā kṛitaṁ karma pūrvair api mumukṣhubhiḥ kuru karmaiva tasmāt tvaṁ pūrvaiḥ pūrvataraṁ kṛitam",
        meaning: "ಹೀಗೆ ತಿಳಿದು ಪೂರ್ವದ ಮುಮುಕ್ಷುಗಳೂ ಕರ್ಮವನ್ನು ಮಾಡಿದ್ದಾರೆ. ಆದ್ದರಿಂದ ನೀನೂ ಪೂರ್ವದವರು ಮಾಡಿದ ಕರ್ಮವನ್ನೇ ಮಾಡು."
      },
      {
        id: "4-16",
        chapter: 4,
        verse: 16,
        kannada: "ಕಿಂ ಕರ್ಮ ಕಿಮಕರ್ಮೇತಿ ಕವಯೋऽಪ್ಯತ್ರ ಮೋಹಿತಾಃ | ತತ್ತೇ ಕರ್ಮ ಪ್ರವಕ್ಷ್ಯಾಮಿ ಯಜ್ಜ್ಞಾತ್ವಾ ಮೋಕ್ಷ್ಯಸೇऽಶುಭಾತ್ ||",
        transliteration: "kiṁ karma kim akarmeti kavayo 'py atra mohitāḥ tat te karma pravakṣhyāmi yaj jñātvā mokṣhyase 'śhubhāt",
        meaning: "ಏನು ಕರ್ಮ, ಏನು ಅಕರ್ಮ ಎಂದು ಕವಿಗಳೂ ಇಲ್ಲಿ ಮೋಹಿತರಾಗಿದ್ದಾರೆ. ಅದನ್ನು ನಿನಗೆ ಹೇಳುತ್ತೇನೆ. ಅದನ್ನು ತಿಳಿದು ಅಶುಭದಿಂದ ಮುಕ್ತನಾಗುವೆ."
      },
      {
        id: "4-17",
        chapter: 4,
        verse: 17,
        kannada: "ಕರ್ಮಣೋ ಹ್ಯಪಿ ಬೋದ್ಧವ್ಯಂ ಬೋದ್ಧವ್ಯಂ ಚ ವಿಕರ್ಮಣಃ | ಅಕರ್ಮಣಶ್ಚ ಬೋದ್ಧವ್ಯಂ ಗಹನಾ ಕರ್ಮಣೋ ಗತಿಃ ||",
        transliteration: "karmaṇo hy api boddhavyaṁ boddhavyaṁ cha vikarmaṇaḥ akarmaṇaśh cha boddhavyaṁ gahanā karmaṇo gatiḥ",
        meaning: "ಕರ್ಮವನ್ನೂ ತಿಳಿಯಬೇಕು, ವಿಕರ್ಮವನ್ನೂ ತಿಳಿಯಬೇಕು, ಅಕರ್ಮವನ್ನೂ ತಿಳಿಯಬೇಕು. ಕರ್ಮದ ಗತಿಯು ಗಹನವಾದದ್ದು."
      },
      {
        id: "4-18",
        chapter: 4,
        verse: 18,
        kannada: "ಕರ್ಮಣ್ಯಕರ್ಮ ಯಃ ಪಶ್ಯೇದಕರ್ಮಣಿ ಚ ಕರ್ಮ ಯಃ | ಸ ಬುದ್ಧಿಮಾನ್ಮನುಷ್ಯೇಷು ಸ ಯುಕ್ತಃ ಕೃತ್ಸ್ನಕರ್ಮಕೃತ್ ||",
        transliteration: "karmaṇy akarma yaḥ paśhyed akarmaṇi cha karma yaḥ sa buddhimān manuṣhyeṣhu sa yuktaḥ kṛitsna-karma-kṛit",
        meaning: "ಕರ್ಮದಲ್ಲಿ ಅಕರ್ಮವನ್ನೂ, ಅಕರ್ಮದಲ್ಲಿ ಕರ್ಮವನ್ನೂ ಯಾರು ನೋಡುವರೋ, ಅವನು ಮನುಷ್ಯರಲ್ಲಿ ಬುದ್ಧಿಮಾನ್, ಯುಕ್ತ, ಕೃತ್ಸ್ನಕರ್ಮಕೃತ್."
      },
      {
        id: "4-19",
        chapter: 4,
        verse: 19,
        kannada: "ಯಸ್ಯ ಸರ್ವೇ ಸಮಾರಂಭಾಃ ಕಾಮಸಂಕಲ್ಪವರ್ಜಿತಾಃ | ಜ್ಞಾನಾಗ್ನಿದಗ್ಧಕರ್ಮಾಣಂ ತಮಾಹುಃ ಪಂಡಿತಂ ಬುಧಾಃ ||",
        transliteration: "yasya sarve samārambhāḥ kāma-saṅkalpa-varjitāḥ jñānāgni-dagdha-karmāṇaṁ tam āhuḥ paṇḍitaṁ budhāḥ",
        meaning: "ಯಾರ ಎಲ್ಲ ಆರಂಭಗಳು ಕಾಮಸಂಕಲ್ಪವರ್ಜಿತವಾಗಿರುವುವೋ, ಜ್ಞಾನಾಗ್ನಿಯಿಂದ ದಗ್ಧಕರ್ಮನಾದ ಅವನನ್ನು ಬುಧರು ಪಂಡಿತನೆಂದು ಹೇಳುವರು."
      },
      {
        id: "4-20",
        chapter: 4,
        verse: 20,
        kannada: "ತ್ಯಕ್ತ್ವಾ ಕರ್ಮಫಲಾಸಂಗಂ ನಿತ್ಯತೃಪ್ತೋ ನಿರಾಶ್ರಯಃ | ಕರ್ಮಣ್ಯಭಿಪ್ರವೃತ್ತೋऽಪಿ ನೈವ ಕಿಂಚಿತ್ಕರೋತಿ ಸಃ ||",
        transliteration: "tyaktvā karma-phalāsaṅgaṁ nitya-tṛipto nirāśrayaḥ karmaṇy abhipravṛitto 'pi naiva kiṁchit karoti saḥ",
        meaning: "ಕರ್ಮಫಲಾಸಂಗವನ್ನು ತ್ಯಜಿಸಿ, ನಿತ್ಯತೃಪ್ತನಾಗಿ, ನಿರಾಶ್ರಯನಾಗಿ, ಕರ್ಮದಲ್ಲಿ ಅಭಿಪ್ರವೃತ್ತನಾದರೂ ಅವನು ಏನೂ ಮಾಡುವುದಿಲ್ಲ."
      },
      {
        id: "4-21",
        chapter: 4,
        verse: 21,
        kannada: "ನಿರಾಶೀರ್ಯತಚಿತ್ತಾತ್ಮಾ ತ್ಯಕ್ತಸರ್ವಪರಿಗ್ರಹಃ | ಶಾರೀರಂ ಕೇವಲಂ ಕರ್ಮ ಕುರ್ವನ್ನಾಪ್ನೋತಿ ಕಿಲ್ಬಿಷಮ್ ||",
        transliteration: "nirāśhīr yata-chittātmā tyakta-sarva-parigrahaḥ śhārīraṁ kevalaṁ karma kurvan nāpnoti kilbiṣham",
        meaning: "ನಿರಾಶೀ, ಯತಚಿತ್ತಾತ್ಮ, ತ್ಯಕ್ತಸರ್ವಪರಿಗ್ರಹನಾಗಿ, ಶಾರೀರ ಕರ್ಮವನ್ನು ಮಾತ್ರ ಮಾಡುತ್ತ ಕಿಲ್ಬಿಷವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ."
      },
      {
        id: "4-22",
        chapter: 4,
        verse: 22,
        kannada: "ಯದೃಚ್ಛಾಲಾಭಸಂತುಷ್ಟೋ ದ್ವಂದ್ವಾತೀತೋ ವಿಮತ್ಸರಃ | ಸಮಃ ಸಿದ್ಧಾವಸಿದ್ಧೌ ಚ ಕೃತ್ವಾಪಿ ನ ನಿಬಧ್ಯತೇ ||",
        transliteration: "yadṛichchhā-lābha-santuṣhṭo dvandvātīto vimatsaraḥ samaḥ siddhāv asiddhau cha kṛitvāpi na nibadhyate",
        meaning: "ಯದೃಚ್ಛಾಲಾಭಸಂತುಷ್ಟ, ದ್ವಂದ್ವಾತೀತ, ವಿಮತ್ಸರ, ಸಿದ್ಧಾಸಿದ್ಧಗಳಲ್ಲಿ ಸಮನಾಗಿ, ಮಾಡಿದರೂ ಬದ್ಧನಾಗುವುದಿಲ್ಲ."
      },
      {
        id: "4-23",
        chapter: 4,
        verse: 23,
        kannada: "ಗತಸಂಗಸ್ಯ ಮುಕ್ತಸ್ಯ ಜ್ಞಾನಾವಸ್ಥಿತಚೇತಸಃ | ಯಜ್ಞಾಯಾಚರತಃ ಕರ್ಮ ಸಮಗ್ರಂ ಪ್ರವಿಲೀಯತೇ ||",
        transliteration: "gata-saṅgasya muktasya jñānāvasthita-chetasaḥ yajñāyācharataḥ karma samagraṁ pravilīyate",
        meaning: "ಗತಸಂಗ, ಮುಕ್ತ, ಜ್ಞಾನಾವಸ್ಥಿತಚೇತಸ್ಸುಳ್ಳವನು ಯಜ್ಞಾರ್ಥವಾಗಿ ಆಚರಿಸುವ ಕರ್ಮವು ಸಮಗ್ರವಾಗಿ ಪ್ರವಿಲೀನವಾಗುತ್ತದೆ."
      },
      {
        id: "4-24",
        chapter: 4,
        verse: 24,
        kannada: "ಬ್ರಹ್ಮಾರ್ಪಣಂ ಬ್ರಹ್ಮ ಹವಿರ್ಬ್ರಹ್ಮಾಗ್ನೌ ಬ್ರಹ್ಮಣಾ ಹುತಮ್ | ಬ್ರಹ್ಮೈವ ತೇನ ಗಂತವ್ಯಂ ಬ್ರಹ್ಮಕರ್ಮಸಮಾಧಿನಾ ||",
        transliteration: "brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam brahmaiva tena gantavyaṁ brahma-karma-samādhinā",
        meaning: "ಬ್ರಹ್ಮಾರ್ಪಣ, ಬ್ರಹ್ಮಹವಿ, ಬ್ರಹ್ಮಾಗ್ನಿ, ಬ್ರಹ್ಮಣಾ ಹುತ, ಬ್ರಹ್ಮಕರ್ಮಸಮಾಧಿಯಿಂದ ಬ್ರಹ್ಮವನ್ನೇ ಪಡೆಯಬೇಕು."
      },
      {
        id: "4-25",
        chapter: 4,
        verse: 25,
        kannada: "ದೈವಮೇವಾಪರೇ ಯಜ್ಞಂ ಯೋಗಿನಃ ಪರ್ಯುಪಾಸತೇ | ಬ್ರಹ್ಮಾಗ್ನಾವಪರೇ ಯಜ್ಞಂ ಯಜ್ಞೇನೈವೋಪಜುಹ್ವತಿ ||",
        transliteration: "daivam evāpare yajñaṁ yoginaḥ paryupāsate brahmāgnāv apare yajñaṁ yajñenaivopajuhvati",
        meaning: "ಯೋಗಿಗಳು ದೈವಯಜ್ಞವನ್ನೇ ಉಪಾಸಿಸುವರು. ಇತರರು ಬ್ರಹ್ಮಾಗ್ನಿಯಲ್ಲಿ ಯಜ್ಞದಿಂದಲೇ ಹೋಮಮಾಡುವರು."
      },
      {
        id: "4-26",
        chapter: 4,
        verse: 26,
        kannada: "ಶ್ರೋತ್ರಾದೀನೀಂದ್ರಿಯಾಣ್ಯನ್ಯೇ ಸಂಯಮಾಗ್ನಿಷು ಜುಹ್ವತಿ | ಶಬ್ದಾದೀನ್ವಿಷಯಾನನ್ಯ ಇಂದ್ರಿಯಾಗ್ನಿಷು ಜುಹ್ವತಿ ||",
        transliteration: "śhrotrādīnīndriyāṇy anye saṁyamāgniṣhu juhvati śhabdādīn viṣhayān anya indriyāgniṣhu juhvati",
        meaning: "ಇತರರು ಶ್ರೋತ್ರಾದಿ ಇಂದ್ರಿಯಗಳನ್ನು ಸಂಯಮಾಗ್ನಿಯಲ್ಲಿ ಹೋಮಮಾಡುವರು. ಇತರರು ಶಬ್ದಾದಿ ವಿಷಯಗಳನ್ನು ಇಂದ್ರಿಯಾಗ್ನಿಯಲ್ಲಿ ಹೋಮಮಾಡುವರು."
      },
      {
        id: "4-27",
        chapter: 4,
        verse: 27,
        kannada: "ಸರ್ವಾಣೀಂದ್ರಿಯಕರ್ಮಾಣಿ ಪ್ರಾಣಕರ್ಮಾಣಿ ಚಾಪರೇ | ಆತ್ಮಸಂಯಮಯೋಗಾಗ್ನೌ ಜುಹ್ವತಿ ಜ್ಞಾನದೀಪಿತೇ ||",
        transliteration: "sarvāṇīndriya-karmāṇi prāṇa-karmāṇi chāpare ātma-saṁyama-yogāgnau juhvati jñāna-dīpite",
        meaning: "ಇತರರು ಸರ್ವೇಂದ್ರಿಯಕರ್ಮಗಳನ್ನೂ ಪ್ರಾಣಕರ್ಮಗಳನ್ನೂ ಆತ್ಮಸಂಯಮಯೋಗಾಗ್ನಿಯಲ್ಲಿ ಜ್ಞಾನದೀಪಿತವಾಗಿ ಹೋಮಮಾಡುವರು."
      },
      {
        id: "4-28",
        chapter: 4,
        verse: 28,
        kannada: "ದ್ರವ್ಯಯಜ್ಞಾಸ್ತಪೋಯಜ್ಞಾ ಯೋಗಯಜ್ಞಾಸ್ತಥಾಪರೇ | ಸ್ವಾಧ್ಯಾಯಜ್ಞಾನಯಜ್ಞಾಶ್ಚ ಯತಯಃ ಸಂಶಿತವ್ರತಾಃ ||",
        transliteration: "dravya-yajñās tapo-yajñā yoga-yajñās tathāpare svādhyāya-jñāna-yajñāśh cha yatayaḥ saṁśhita-vratāḥ",
        meaning: "ದ್ರವ್ಯಯಜ್ಞ, ತಪೋಯಜ್ಞ, ಯೋಗಯಜ್ಞ, ಸ್ವಾಧ್ಯಾಯಜ್ಞಾನಯಜ್ಞ - ಈ ರೀತಿ ಇತರರು ಸಂಶಿತವ್ರತರಾದ ಯತಿಗಳು."
      },
      {
        id: "4-29",
        chapter: 4,
        verse: 29,
        kannada: "ಅಪಾನೇ ಜುಹ್ವತಿ ಪ್ರಾಣಂ ಪ್ರಾಣೇऽಪಾನಂ ತಥಾಪರೇ | ಪ್ರಾಣಾಪಾನಗತೀ ರುಧ್ವಾ ಪ್ರಾಣಾಯಾಮಪರಾಯಣಾಃ ||",
        transliteration: "apāne juhvati prāṇaṁ prāṇe 'pānaṁ tathāpare prāṇāpāna-gatī rudhvā prāṇāyāma-parāyaṇāḥ",
        meaning: "ಇತರರು ಅಪಾನದಲ್ಲಿ ಪ್ರಾಣವನ್ನೂ, ಪ್ರಾಣದಲ್ಲಿ ಅಪಾನವನ್ನೂ ಹೋಮಮಾಡುವರು. ಪ್ರಾಣಾಪಾನಗತಿಗಳನ್ನು ರುಧ್ವಾ ಪ್ರಾಣಾಯಾಮಪರಾಯಣರು."
      },
      {
        id: "4-30",
        chapter: 4,
        verse: 30,
        kannada: "ಅಪರೇ ನಿಯತಾಹಾರಾಃ ಪ್ರಾಣಾನ್ಪ್ರಾಣೇಷು ಜುಹ್ವತಿ | ಸರ್ವೇऽಪ್ಯೇತೇ ಯಜ್ಞವಿದೋ ಯಜ್ಞಕ್ಷಪಿತಕಲ್ಮಷಾಃ ||",
        transliteration: "apare niyatāhārāḥ prāṇān prāṇeṣhu juhvati sarve 'py ete yajña-vido yajña-kṣhapita-kalmaṣhāḥ",
        meaning: "ಇತರರು ನಿಯತಾಹಾರರು ಪ್ರಾಣಗಳನ್ನು ಪ್ರಾಣಗಳಲ್ಲಿ ಹೋಮಮಾಡುವರು. ಇವರೆಲ್ಲರೂ ಯಜ್ಞವಿದರು, ಯಜ್ಞಕ್ಷಪಿತಕಲ್ಮಷರು."
      },
      {
        id: "4-31",
        chapter: 4,
        verse: 31,
        kannada: "ಯಜ್ಞಶಿಷ್ಟಾಮೃತಭುಜೋ ಯಾಂತಿ ಬ್ರಹ್ಮ ಸನಾತನಮ್ | ನಾಯಂ ಲೋಕೋऽಸ್ತ್ಯಯಜ್ಞಸ್ಯ ಕುತೋऽನ್ಯಃ ಕುರುಸತ್ತಮ ||",
        transliteration: "yajña-śhiṣhṭāmṛita-bhujo yānti brahma sanātanam nāyaṁ loko 'sty ayajñasya kuto 'nyaḥ kuru-sattama",
        meaning: "ಯಜ್ಞಶಿಷ್ಟಾಮೃತಭುಜರು ಸನಾತನ ಬ್ರಹ್ಮವನ್ನು ಪಡೆಯುವರು. ಕುರುಶ್ರೇಷ್ಠನೇ, ಅಯಜ್ಞನಿಗೆ ಈ ಲೋಕವೂ ಇಲ್ಲ, ಇನ್ನಾವುದು?"
      },
      {
        id: "4-32",
        chapter: 4,
        verse: 32,
        kannada: "ಏವಂ ಬಹುವಿಧಾ ಯಜ್ಞಾ ವಿತತಾ ಬ್ರಹ್ಮಣೋ ಮುಖೇ | ಕರ್ಮಜಾನ್ವಿದ್ಧಿ ತಾನ್ಸರ್ವಾನೇವಂ ಜ್ಞಾತ್ವಾ ವಿಮೋಕ್ಷ್ಯಸೇ ||",
        transliteration: "evaṁ bahu-vidhā yajñā vitatā brahmaṇo mukhe karma-jān viddhi tān sarvān evaṁ jñātvā vimokṣhyase",
        meaning: "ಈ ರೀತಿ ಬಹುವಿಧ ಯಜ್ಞಗಳು ಬ್ರಹ್ಮನ ಮುಖದಲ್ಲಿ ವಿತತವಾಗಿವೆ. ಅವೆಲ್ಲವೂ ಕರ್ಮಜವೆಂದು ತಿಳಿ. ಹೀಗೆ ತಿಳಿದು ಮುಕ್ತನಾಗುವೆ."
      },
      {
        id: "4-33",
        chapter: 4,
        verse: 33,
        kannada: "ಶ್ರೇಯಾನ್ದ್ರವ್ಯಮಯಾದ್ಯಜ್ಞಾಜ್ಜ್ಞಾನಯಜ್ಞಃ ಪರಂತಪ | ಸರ್ವಂ ಕರ್ಮಾಖಿಲಂ ಪಾರ್ಥ ಜ್ಞಾನೇ ಪರಿಸಮಾಪ್ಯತೇ ||",
        transliteration: "śhreyān dravya-mayād yajñāj jñāna-yajñaḥ parantapa sarvaṁ karmākhilaṁ pārtha jñāne parisamāpyate",
        meaning: "ಪರಂತಪನೇ, ದ್ರವ್ಯಮಯ ಯಜ್ಞಕ್ಕಿಂತ ಜ್ಞಾನಯಜ್ಞ ಶ್ರೇಷ್ಠ. ಪಾರ್ಥನೇ, ಸರ್ವಕರ್ಮವು ಜ್ಞಾನದಲ್ಲಿ ಪರಿಸಮಾಪ್ತವಾಗುತ್ತದೆ."
      },
      {
        id: "4-34",
        chapter: 4,
        verse: 34,
        kannada: "ತದ್ವಿದ್ಧಿ ಪ್ರಣಿಪಾತೇನ ಪರಿಪ್ರಶ್ನೇನ ಸೇವಯಾ | ಉಪದೇಕ್ಷ್ಯಂತಿ ತೇ ಜ್ಞಾನಂ ಜ್ಞಾನಿನಸ್ತತ್ತ್ವದರ್ಶಿನಃ ||",
        transliteration: "tad viddhi praṇipātena paripraśhnena sevayā upadekṣhyanti te jñānaṁ jñāninas tattva-darśhinaḥ",
        meaning: "ಪ್ರಣಿಪಾತ, ಪರಿಪ್ರಶ್ನ, ಸೇವೆ - ಇವುಗಳಿಂದ ತತ್ತ್ವದರ್ಶಿ ಜ್ಞಾನಿಗಳು ನಿನಗೆ ಜ್ಞಾನವನ್ನು ಉಪದೇಶಿಸುವರು."
      },
      {
        id: "4-35",
        chapter: 4,
        verse: 35,
        kannada: "ಯಜ್ಜ್ಞಾತ್ವಾ ನ ಪುನರ್ಮೋಹಮೇವಂ ಯಾಸ್ಯಸಿ ಪಾಂಡವ | ಯೇನ ಭೂತಾನ್ಯಶೇಷೇಣ ದ್ರಕ್ಷ್ಯಸ್ಯಾತ್ಮನ್ಯಥೋ ಮಯಿ ||",
        transliteration: "yaj jñātvā na punar moham evaṁ yāsyasi pāṇḍava yena bhūtāny aśheṣheṇa drakṣhyasy ātmany atho mayi",
        meaning: "ಪಾಂಡವನೇ, ಅದನ್ನು ತಿಳಿದು ನೀನು ಈ ರೀತಿ ಪುನರ್ಮೋಹವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ. ಅದರಿಂದ ಅಶೇಷ ಭೂತಗಳನ್ನು ಆತ್ಮನಲ್ಲಿಯೂ ನನ್ನಲ್ಲಿಯೂ ನೋಡುವೆ."
      },
      {
        id: "4-36",
        chapter: 4,
        verse: 36,
        kannada: "ಅಪಿ ಚೇದಸಿ ಪಾಪೇಭ್ಯಃ ಸರ್ವೇಭ್ಯಃ ಪಾಪಕೃತ್ತಮಃ | ಸರ್ವಂ ಜ್ಞಾನಪ್ಲವೇನೈವ ವೃಜಿನಂ ಸಂತರಿಷ್ಯಸಿ ||",
        transliteration: "api ched asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛittamaḥ sarvaṁ jñāna-plavenaiva vṛijinaṁ santariṣhyasi",
        meaning: "ನೀನು ಸರ್ವಪಾಪೇಭ್ಯಃ ಪಾಪಕೃತ್ತಮನಾದರೂ ಸಹ, ಜ್ಞಾನಪ್ಲವದಿಂದ ಸರ್ವ ವೃಜಿನವನ್ನು ದಾಟುವೆ."
      },
      {
        id: "4-37",
        chapter: 4,
        verse: 37,
        kannada: "ಯಥೈಧಾಂಸಿ ಸಮಿದ್ಧೋऽಗ್ನಿರ್ಭಸ್ಮಸಾತ್ಕುರುತೇऽರ್ಜುನ | ಜ್ಞಾನಾಗ್ನಿಃ ಸರ್ವಕರ್ಮಾಣಿ ಭಸ್ಮಸಾತ್ಕುರುತೇ ತಥಾ ||",
        transliteration: "yathaidhāṁsi samiddho 'gnir bhasma-sāt kurute 'rjuna jñānāgniḥ sarva-karmāṇi bhasma-sāt kurute tathā",
        meaning: "ಅರ್ಜುನನೇ, ಸಮಿದ್ಧ ಅಗ್ನಿಯು ಇಧುಗಳನ್ನು ಭಸ್ಮಮಾಡುವಂತೆ, ಜ್ಞಾನಾಗ್ನಿಯು ಸರ್ವಕರ್ಮಗಳನ್ನು ಭಸ್ಮಮಾಡುತ್ತದೆ."
      },
      {
        id: "4-38",
        chapter: 4,
        verse: 38,
        kannada: "ನ ಹಿ ಜ್ಞಾನೇನ ಸದೃಶಂ ಪವಿತ್ರಮಿಹ ವಿದ್ಯತೇ | ತತ್ಸ್ವಯಂ ಯೋಗಸಂಸಿದ್ಧಃ ಕಾಲೇನಾತ್ಮನಿ ವಿಂದತಿ ||",
        transliteration: "na hi jñānena sadṛiśhaṁ pavitram iha vidyate tat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",
        meaning: "ಇಲ್ಲಿ ಜ್ಞಾನದಂತೆ ಪವಿತ್ರವಾದದ್ದು ಬೇರೆ ಇಲ್ಲ. ಯೋಗಸಂಸಿದ್ಧನಾದವನು ಕಾಲಕ್ರಮೇಣ ಆತ್ಮನಲ್ಲಿ ಅದನ್ನು ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "4-39",
        chapter: 4,
        verse: 39,
        kannada: "ಶ್ರದ್ಧಾವಾಂಲ್ಲಭತೇ ಜ್ಞಾನಂ ತತ್ಪರಃ ಸಂಯತೇಂದ್ರಿಯಃ | ಜ್ಞಾನಂ ಲಬ್ಧ್ವಾ ಪರಾಂ ಶಾಂತಿಮಚಿರೇಣಾಧಿಗಚ್ಛತಿ ||",
        transliteration: "śhraddhāvāll labhate jñānaṁ tat-paraḥ saṁyatendriyaḥ jñānaṁ labdhvā parāṁ śhāntim achireṇādhigachchhati",
        meaning: "ಶ್ರದ್ಧಾವಂತ, ತತ್ಪರ, ಸಂಯತೇಂದ್ರಿಯನಾದವನು ಜ್ಞಾನವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಜ್ಞಾನವನ್ನು ಪಡೆದು ಪರಮ ಶಾಂತಿಯನ್ನು ಶೀಘ್ರವಾಗಿ ಪಡೆಯುತ್ತಾನೆ."
      },
      {
        id: "4-40",
        chapter: 4,
        verse: 40,
        kannada: "ಅಜ್ಞಶ್ಚಾಶ್ರದ್ದಧಾನಶ್ಚ ಸಂಶಯಾತ್ಮಾ ವಿನಶ್ಯತಿ | ನಾಯಂ ಲೋಕೋऽಸ್ತಿ ನ ಪರೋ ನ ಸುಖಂ ಸಂಶಯಾತ್ಮನಃ ||",
        transliteration: "ajñaśh chāśhraddadhānaśh cha saṁśhayātmā vinaśhyati nāyaṁ loko 'sti na paro na sukhaṁ saṁśhayātmanaḥ",
        meaning: "ಅಜ್ಞ, ಅಶ್ರದ್ದಧಾನ, ಸಂಶಯಾತ್ಮನಾದವನು ನಶಿಸುತ್ತಾನೆ. ಸಂಶಯಾತ್ಮನಿಗೆ ಈ ಲೋಕವೂ ಇಲ್ಲ, ಪರಲೋಕವೂ ಇಲ್ಲ, ಸುಖವೂ ಇಲ್ಲ."
      },
      {
        id: "4-41",
        chapter: 4,
        verse: 41,
        kannada: "ಯೋಗಸಂನ್ಯಸ್ತಕರ್ಮಾಣಂ ಜ್ಞಾನಸಂಛಿನ್ನಸಂಶಯಮ್ | ಆತ್ಮವಂತಂ ನ ಕರ್ಮಾಣಿ ನಿಬಧ್ನಂತಿ ಧನಂಜಯ ||",
        transliteration: "yoga-sannyasta-karmāṇaṁ jñāna-saṁchhinna-saṁśhayam ātmavantaṁ na karmāṇi nibadhnanti dhanañjaya",
        meaning: "ಧನಂಜಯನೇ, ಯೋಗಸಂನ್ಯಸ್ತಕರ್ಮ, ಜ್ಞಾನಸಂಛಿನ್ನಸಂಶಯ, ಆತ್ಮವಂತನಾದವನನ್ನು ಕರ್ಮಗಳು ಬಂಧಿಸುವುದಿಲ್ಲ."
      },
      {
        id: "4-42",
        chapter: 4,
        verse: 42,
        kannada: "ತಸ್ಮಾದಜ್ಞಾನಸಂಭೂತಂ ಹೃತ್ಸ್ಥಂ ಜ್ಞಾನಸಿನಾತ್ಮನಃ | ಛಿತ್ತ್ವೈನಂ ಸಂಶಯಂ ಯೋಗಮಾತಿಷ್ಠೋತ್ತಿಷ್ಠ ಭಾರತ ||",
        transliteration: "tasmād ajñāna-sambhūtaṁ hṛit-sthaṁ jñānāsinātmanaḥ chhittvainaṁ saṁśhayaṁ yogam ātiṣhṭhottiṣhṭha bhārata",
        meaning: "ಭಾರತನೇ, ಆದ್ದರಿಂದ ಆತ್ಮನ ಜ್ಞಾನಾಸಿಯಿಂದ ಹೃದಯಸ್ಥವಾದ ಅಜ್ಞಾನಸಂಭೂತ ಸಂಶಯವನ್ನು ಛೇದಿಸಿ, ಯೋಗವನ್ನು ಆಶ್ರಯಿಸಿ, ಏಳು."
      }
    ]
  },
  {
  id: 5,
  title: "Karma Sanyasa Yoga",
  kannadaTitle: "ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ",
  description: "ಕರ್ಮ ಸಂನ್ಯಾಸ - Renunciation of action",
  totalVerses: 29,
   verses: [
  {
    id: "5-1",
    chapter: 5,
    verse: 1,
    kannada: "ಸಂನ್ಯಾಸಂ ಕರ್ಮಣಾಂ ಕೃಷ್ಣ ಪುನರ್ಯೋಗಂ ಚ ಶಂಸಸಿ | ಯಚ್ಛ್ರೇಯ ಏತಯೋರೇಕಂ ತನ್ಮೇ ಬ್ರೂಹಿ ಸುನಿಶ್ಚಿತಮ್ ||",
    transliteration: "sannyāsaṁ karmaṇāṁ kṛiṣhṇa punar yogaṁ cha śhansasi yach chhreya etayor ekaṁ tan me brūhi su-niśhchitam",
    meaning: "ಕೃಷ್ಣಾ, ನೀನು ಕರ್ಮಗಳ ತ್ಯಾಗವನ್ನೂ ಮತ್ತೆ ಯೋಗವನ್ನೂ ಹೇಳುತ್ತೀ. ಇವೆರಡರಲ್ಲಿ ಒಂದು ಯಾವುದು ಶ್ರೇಯಸ್ಕರವಾದುದೆಂದು ನನಗೆ ನಿಶ್ಚಯವಾಗಿ ತಿಳಿಸು."
  },
  {
    id: "5-2",
    chapter: 5,
    verse: 2,
    kannada: "ಶ್ರೀ ಭಗವಾನುವಾಚ | ಸಂನ್ಯಾಃ ಕರ್ಮಯೋಗಶ್ಚ ನಿಃಶ್ರೇಯಸಕರಾವುಭೌ | ತಯೋಸ್ತು ಕರ್ಮಸಂನ್ಯಸಾತ್ ಕರ್ಮಯೋಗೋ ವಿಶಿಷ್ಯತೇ ||",
    transliteration: "śhrī bhagavān uvācha sannyāsaḥ karma-yogaśh cha niḥśhreyasa-karāv ubhau tayos tu karma-sannyāsāt karma-yogo viśhiṣhyate",
    meaning: "ಶ್ರೀ ಭಗವಂತನು ಹೇಳಿದರು - ಕರ್ಮಸಂನ್ಯಾಸ ಮತ್ತು ಕರ್ಮಯೋಗ ಇವೆರಡೂ ಮೋಕ್ಷಪ್ರದವಾಗಿರುತ್ತವೆ. ಆದರೆ ಅವೆರಡರಲ್ಲಿ ಕರ್ಮಸಂನ್ಯಾಸಕ್ಕಿಂತ ಕರ್ಮಯೋಗವೇ ಶ್ರೇಷ್ಠವಾದುದು."
  },
  {
    id: "5-3",
    chapter: 5,
    verse: 3,
    kannada: "ಜ್ಞೇಯಃ ಸ ನಿತ್ಯಸಂನ್ಯಾಸೀ ಯೋ ನ ದ್ವೇಷ್ಟಿ ನ ಕಾಂಕ್ಷತಿ | ನಿರ್ದ್ವಂದ್ವೋ ಹಿ ಮಹಾಬಾಹೋ ಸುಖಂ ಬಂಧಾತ್ಪ್ರಮುಚ್ಯತೇ ||",
    transliteration: "jñeyaḥ sa nitya-sannyāsī yo na dveṣhṭi na kāṅkṣhati nirdvandvo hi mahā-bāho sukhaṁ bandhāt pramuchyate",
    meaning: "ಮಹಾಬಾಹುವೇ, ದ್ವೇಷ ಮತ್ತು ಆಶೆ ಇಲ್ಲದವನು, ದ್ವಂದ್ವಗಳಿಂದ ಮುಕ್ತನಾದವನು ನಿತ್ಯಸಂನ್ಯಾಸಿ ಎಂದು ತಿಳಿಯಬೇಕು. ಅವನು ಸುಖವಾಗಿ ಬಂಧನದಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ."
  },
  {
    id: "5-4",
    chapter: 5,
    verse: 4,
    kannada: "ಸಾಂಖ್ಯಯೋಗೌ ಪೃಥಗ್ಬಾಲಾಃ ಪ್ರವದಂತಿ ನ ಪಂಡಿತಾಃ | ಏಕಮಪ್ಯಾಸ್ಥಿತಃ ಸಮ್ಯಗುಭಯೋರ್ವಿಂದತೇ ಫಲಮ್ ||",
    transliteration: "sāṅkhya-yogau pṛithag bālāḥ pravadanti na paṇḍitāḥ ekam apy āsthitaḥ samyag ubhayor vindate phalam",
    meaning: "ಸಾಂಖ್ಯ ಮತ್ತು ಯೋಗವನ್ನು ಬಾಲಕರು ಭಿನ್ನವೆಂದು ಹೇಳುತ್ತಾರೆ, ಪಂಡಿತರು ಅಲ್ಲ. ಒಂದನ್ನು ಸರಿಯಾಗಿ ಆಶ್ರಯಿಸಿದರೆ ಎರಡರ ಫಲವೂ ದೊರಕುವುದು."
  },
  {
    id: "5-5",
    chapter: 5,
    verse: 5,
    kannada: "ಯತ್ಸಾಂಖ್ಯೈಃ ಪ್ರಾಪ್ಯತೇ ಸ್ಥಾನಂ ತದ್ಯೋಗೈರಪಿ ಗಮ್ಯತೇ | ಏಕಂ ಸಾಂಖ್ಯಂ ಚ ಯೋಗಂ ಚ ಯಃ ಪಶ್ಯತಿ ಸ ಪಶ್ಯತಿ ||",
    transliteration: "yat sāṅkhyaiḥ prāpyate sthānaṁ tad yogair api gamyate ekaṁ sāṅkhyaṁ cha yogaṁ cha yaḥ paśhyati sa paśhyati",
    meaning: "ಸಾಂಖ್ಯರಿಂದ ಪ್ರಾಪ್ತವಾಗುವ ಸ್ಥಾನವು ಯೋಗಿಗಳಿಂದಲೂ ಪ್ರಾಪ್ತವಾಗುವುದು. ಸಾಂಖ್ಯ ಮತ್ತು ಯೋಗವು ಒಂದೇ ಎಂದು ತಿಳಿಯುವವನೇ ನಿಜವಾಗಿ ತಿಳಿದವನು."
  },
  {
    id: "5-6",
    chapter: 5,
    verse: 6,
    kannada: "ಸಂನ್ಯಾಸಸ್ತು ಮಹಾಬಾಹೋ ದುಃಖಮಾಪ್ತುಮಯೋಗತಃ | ಯೋಗಯುಕ್ತೋ ಮುನಿರ್ಬ್ರಹ್ಮ ನಚಿರೇಣಾಧಿಗಚ್ಛತಿ ||",
    transliteration: "sannyāsas tu mahā-bāho duḥkham āptum ayogataḥ yoga-yukto munir brahma na chireṇādhigachchhati",
    meaning: "ಮಹಾಬಾಹುವೇ, ಯೋಗರಹಿತ ಸಂನ್ಯಾಸವು ದುಃಖಪ್ರದವಾಗಿರುತ್ತದೆ. ಯೋಗಯುಕ್ತ ಮುನಿಯಾದರೋ ಬ್ರಹ್ಮವನ್ನು ಶೀಘ್ರದಲ್ಲೇ ಪಡೆಯುತ್ತಾನೆ."
  },
  {
    id: "5-7",
    chapter: 5,
    verse: 7,
    kannada: "ಯೋಗಯುಕ್ತೋ ವಿಶುದ್ಧಾತ್ಮಾ ವಿಜಿತಾತ್ಮಾ ಜಿತೇಂದ್ರಿಯಃ | ಸರ್ವಭೂತಾತ್ಮಭೂತಾತ್ಮಾ ಕುರ್ವನ್ನಪಿ ನ ಲಿಪ್ಯತೇ ||",
    transliteration: "yoga-yukto viśhuddhātmā vijitātmā jitendriyaḥ sarva-bhūtātma-bhūtātmā kurvann api na lipyate",
    meaning: "ಯೋಗಯುಕ್ತನಾದವನು, ಶುದ್ಧಾತ್ಮನಾದವನು, ಜಿತೇಂದ್ರಿಯನಾದವನು, ಸರ್ವಭೂತಗಳಲ್ಲಿ ಆತ್ಮಭಾವನೆಯುಳ್ಳವನು ಕರ್ಮ ಮಾಡುತ್ತಿದ್ದರೂ ಲೇಪಿಸಲ್ಪಡುವುದಿಲ್ಲ."
  },
  {
    id: "5-8",
    chapter: 5,
    verse: 8,
    kannada: "ನೈವ ಕಿಂಚಿತ್ಕರೋಮೀತಿ ಯುಕ್ತೋ ಮನ್ಯೇತ ತತ್ತ್ವವಿತ್ | ಪಶ್ಯನ್ ಶೃಣ್ವನ್ ಸ್ಪೃಶನ್ ಜಿಘ್ರನ್ನಶ್ನನ್ ಗಚ್ಛನ್ ಸ್ವಪನ್ ಶ್ವಸನ್ ||",
    transliteration: "naiva kiṁchit karomīti yukto manyeta tattva-vit paśhyan śhṛiṇvan spṛiśhan jighrann aśhnan gachchhan svapan śhvasan",
    meaning: "ತತ್ತ್ವಜ್ಞನು 'ನಾನೇನೂ ಮಾಡುವುದಿಲ್ಲ' ಎಂದು ತಿಳಿದುಕೊಳ್ಳುವನು - ನೋಡುವಾಗ, ಕೇಳುವಾಗ, ಸ್ಪರ್ಶಿಸುವಾಗ, ವಾಸನೆ ತೆಗೆದುಕೊಳ್ಳುವಾಗ, ತಿನ್ನುವಾಗ, ನಡೆಯುವಾಗ, ನಿದ್ರಿಸುವಾಗ, ಉಸಿರಾಡುವಾಗ."
  },
  {
    id: "5-9",
    chapter: 5,
    verse: 9,
    kannada: "ಪ್ರಲಪನ್ ವಿಸೃಜನ್ ಗೃಹ್ಣನ್ನುನ್ಮಿಷನ್ ನಿಮಿಷನ್ನಪಿ | ಇಂದ್ರಿಯಾಣೀಂದ್ರಿಯಾರ್ಥೇಷು ವರ್ತಂತ ಇತಿ ಧಾರಯನ್ ||",
    transliteration: "pralapan visṛijan gṛihṇann unmiṣhan nimiṣhann api indriyāṇīndriyārtheṣhu vartanta iti dhārayan",
    meaning: "ಮಾತನಾಡುವಾಗ, ಬಿಡುವಾಗ, ಪಡೆಯುವಾಗ, ಕಣ್ಣು ತೆರೆಯುವಾಗ ಮುಚ್ಚುವಾಗ - ಇಂದ್ರಿಯಗಳು ಇಂದ್ರಿಯ ವಿಷಯಗಳಲ್ಲಿ ವರ್ತಿಸುತ್ತವೆ ಎಂದು ತಿಳಿಯುವನು."
  },
  {
    id: "5-10",
    chapter: 5,
    verse: 10,
    kannada: "ಬ್ರಹ್ಮಣ್ಯಾಧಾಯ ಕರ್ಮಾಣಿ ಸಂಗಂ ತ್ಯಕ್ತ್ವಾ ಕರೋತಿ ಯಃ | ಲಿಪ್ಯತೇ ನ ಸ ಪಾಪೇನ ಪದ್ಮಪತ್ರಮಿವಾಂಭಸಾ ||",
    transliteration: "brahmaṇyādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ lipyate na sa pāpena padma-patram ivāmbhasā",
    meaning: "ಎಲ್ಲ ಕರ್ಮಗಳನ್ನು ಬ್ರಹ್ಮನಲ್ಲಿ ಅರ್ಪಿಸಿ, ಆಸಕ್ತಿಯನ್ನು ತ್ಯಜಿಸಿ ಕರ್ಮ ಮಾಡುವವನು, ನೀರಿನಿಂದ ತೊಯ್ಯದ ತಾವರೆ ಎಲೆಯಂತೆ ಪಾಪದಿಂದ ಲೇಪಿಸಲ್ಪಡುವುದಿಲ್ಲ."
  },
  {
    id: "5-11",
    chapter: 5,
    verse: 11,
    kannada: "ಕಾಯೇನ ಮನಸಾ ಬುದ್ಧ್ಯಾ ಕೇವಲೈರಿಂದ್ರಿಯೈರಪಿ | ಯೋಗಿನಃ ಕರ್ಮ ಕುರ್ವಂತಿ ಸಂಗಂ ತ್ಯಕ್ತ್ವಾತ್ಮಶುದ್ಧಯೇ ||",
    transliteration: "kāyena manasā buddhyā kevalair indriyair api yoginaḥ karma kurvanti saṅgaṁ tyaktvātma-śhuddhaye",
    meaning: "ಯೋಗಿಗಳು ಆತ್ಮಶುದ್ಧಿಗಾಗಿ ಆಸಕ್ತಿಯನ್ನು ತ್ಯಜಿಸಿ, ದೇಹದಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಬುದ್ಧಿಯಿಂದ ಮತ್ತು ಇಂದ್ರಿಯಗಳಿಂದಲೂ ಕರ್ಮ ಮಾಡುತ್ತಾರೆ."
  },
  {
    id: "5-12",
    chapter: 5,
    verse: 12,
    kannada: "ಯುಕ್ತಃ ಕರ್ಮಫಲಂ ತ್ಯಕ್ತ್ವಾ ಶಾಂತಿಮಾಪ್ನೋತಿ ನೈಷ್ಠಿಕೀಮ್ | ಅಯುಕ್ತಃ ಕಾಮಕಾರೇಣ ಫಲೇ ಸಕ್ತೋ ನಿಬಧ್ಯತೇ ||",
    transliteration: "yuktaḥ karma-phalaṁ tyaktvā śhāntim āpnoti naiṣhṭhikīm ayuktaḥ kāma-kāreṇa phale sakto nibadhyate",
    meaning: "ಯುಕ್ತನಾದವನು ಕರ್ಮಫಲವನ್ನು ತ್ಯಜಿಸಿ ನಿಶ್ಚಲ ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಅಯುಕ್ತನಾದವನು ಕಾಮನೆಯಿಂದ ಕರ್ಮ ಮಾಡಿ ಫಲದಲ್ಲಿ ಆಸಕ್ತನಾಗಿ ಬಂಧಿಸಲ್ಪಡುತ್ತಾನೆ."
  },
  {
    id: "5-13",
    chapter: 5,
    verse: 13,
    kannada: "ಸರ್ವಕರ್ಮಾಣಿ ಮನಸಾ ಸಂನ್ಯಸ್ಯಾಸ್ತೇ ಸುಖಂ ವಶೀ | ನವದ್ವಾರೇ ಪುರೇ ದೇಹೀ ನೈವ ಕುರ್ವನ್ನ ಕಾರಯನ್ ||",
    transliteration: "sarva-karmāṇi manasā sannyasyāste sukhaṁ vaśhī nava-dvāre pure dehī naiva kurvan na kārayan",
    meaning: "ದೇಹವೆಂಬ ಒಂಬತ್ತು ದ್ವಾರಗಳುಳ್ಳ ಪುರದಲ್ಲಿ ವಾಸಿಸುವ ಜೀವಾತ್ಮನು ಮನಸ್ಸಿನಿಂದ ಎಲ್ಲ ಕರ್ಮಗಳನ್ನು ತ್ಯಜಿಸಿ, ಜಯಿಸಿದವನಾಗಿ ಸುಖವಾಗಿರುತ್ತಾನೆ. ಅವನು ಯಾವುದನ್ನೂ ಮಾಡುವವನಲ್ಲ, ಮಾಡಿಸುವವನಲ್ಲ."
  },
  {
    id: "5-14",
    chapter: 5,
    verse: 14,
    kannada: "ನ ಕರ್ತೃತ್ವಂ ನ ಕರ್ಮಾಣಿ ಲೋಕಸ್ಯ ಸೃಜತಿ ಪ್ರಭುಃ | ನ ಕರ್ಮಫಲಸಂಯೋಗಂ ಸ್ವಭಾವಸ್ತು ಪ್ರವರ್ತತೇ ||",
    transliteration: "na kartṛitvaṁ na karmāṇi lokasya sṛijati prabhuḥ na karma-phala-saṁyogaṁ svabhāvas tu pravartate",
    meaning: "ಪ್ರಭುವು ಜಗತ್ತಿನಲ್ಲಿ ಯಾರಿಗೂ ಕರ್ತೃತ್ವ ಅಥವಾ ಕರ್ಮಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ, ಕರ್ಮಫಲ ಸಂಯೋಗವನ್ನೂ ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ. ಸ್ವಭಾವವೇ ಪ್ರವರ್ತಿಸುತ್ತದೆ."
  },
  {
    id: "5-15",
    chapter: 5,
    verse: 15,
    kannada: "ನಾದತ್ತೇ ಕಸ್ಯಚಿತ್ಪಾಪಂ ನ ಚೈವ ಸುಕೃತಂ ವಿಭುಃ | ಅಜ್ಞಾನೇನಾವೃತಂ ಜ್ಞಾನಂ ತೇನ ಮುಹ್ಯಂತಿ ಜಂತವಃ ||",
    transliteration: "nādatte kasyachit pāpaṁ na chaiva sukṛitaṁ vibhuḥ ajñānenāvṛitaṁ jñānaṁ tena muhyanti jantavaḥ",
    meaning: "ವಿಭು ಯಾರ ಪಾಪವನ್ನೂ ಪಡೆಯುವುದಿಲ್ಲ, ಪುಣ್ಯವನ್ನೂ ಪಡೆಯುವುದಿಲ್ಲ. ಜ್ಞಾನವು ಅಜ್ಞಾನದಿಂದ ಮರೆಮಾಡಲ್ಪಟ್ಟಿರುವುದರಿಂದ ಜೀವಿಗಳು ಮೋಹಗೊಳ್ಳುತ್ತವೆ."
  },
  {
    id: "5-16",
    chapter: 5,
    verse: 16,
    kannada: "ಜ್ಞಾನೇನ ತು ತದಜ್ಞಾನಂ ಯೇಷಾಂ ನಾಶಿತಮಾತ್ಮನಃ | ತೇಷಾಮಾದಿತ್ಯವಜ್ಜ್ಞಾನಂ ಪ್ರಕಾಶಯತಿ ತತ್ಪರಮ್ ||",
    transliteration: "jñānena tu tad ajñānaṁ yeṣhāṁ nāśhitam ātmanaḥ teṣhām āditya-vaj jñānaṁ prakāśhayati tat param",
    meaning: "ಯಾರ ಅಜ್ಞಾನವು ಜ್ಞಾನದಿಂದ ನಾಶವಾಗಿದೆಯೋ, ಅವರ ಜ್ಞಾನವು ಸೂರ್ಯನಂತೆ ಪರಮಾತ್ಮನನ್ನು ಪ್ರಕಾಶಪಡಿಸುತ್ತದೆ."
  },
  {
    id: "5-17",
    chapter: 5,
    verse: 17,
    kannada: "ತದ್ಬುದ್ಧಯಸ್ತದಾತ್ಮಾನಸ್ತನ್ನಿಷ್ಠಾಸ್ತತ್ಪರಾಯಣಾಃ | ಗಚ್ಛಂತ್ಯಪುನರಾವೃತ್ತಿಂ ಜ್ಞಾನನಿರ್ಧೂತಕಲ್ಮಷಾಃ ||",
    transliteration: "tad-buddhayas tad-ātmānas tan-niṣhṭhās tat-parāyaṇāḥ gachchhanty apunar-āvṛittiṁ jñāna-nirdhūta-kalmaṣhāḥ",
    meaning: "ಅವರ ಬುದ್ಧಿ ಆತ್ಮನಲ್ಲಿ ನಿಷ್ಠೆಯುಳ್ಳವರಾಗಿ, ಆತ್ಮನನ್ನೇ ಶರಣು ಹೋಗಿರುವವರಾಗಿ, ಜ್ಞಾನದಿಂದ ಕಲ್ಮಷಗಳನ್ನು ನೀಗಿಸಿಕೊಂಡವರಾಗಿ, ಮರಳಿ ಬಾರದ ಮೋಕ್ಷವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
  },
  {
    id: "5-18",
    chapter: 5,
    verse: 18,
    kannada: "ವಿದ್ಯಾವಿನಯಸಂಪನ್ನೇ ಬ್ರಾಹ್ಮಣೇ ಗವಿ ಹಸ್ತಿನಿ | ಶುನಿ ಚೈವ ಶ್ವಪಾಕೇ ಚ ಪಂಡಿತಾಃ ಸಮದರ್ಶಿನಃ ||",
    transliteration: "vidyā-vinaya-sampanne brāhmaṇe gavi hastini śhuni chaiva śhva-pāke cha paṇḍitāḥ sama-darśhinaḥ",
    meaning: "ವಿದ್ಯಾವಿನಯ ಸಂಪನ್ನ ಬ್ರಾಹ್ಮಣನಲ್ಲಿ, ಹಸುವಿನಲ್ಲಿ, ಹಸ್ತಿಯಲ್ಲಿ, ನಾಯಿಯಲ್ಲಿ ಮತ್ತು ಚಂಡಾಲನಲ್ಲಿ ಸಮದರ್ಶನವುಳ್ಳವರು ಪಂಡಿತರು."
  },
  {
    id: "5-19",
    chapter: 5,
    verse: 19,
    kannada: "ಇಹೈವ ತೈರ್ಜಿತಃ ಸರ್ಗೋ ಯೇಷಾಂ ಸಾಮ್ಯೇ ಸ್ಥಿತಂ ಮನಃ | ನಿರ್ದೋಷಂ ಹಿ ಸಮಂ ಬ್ರಹ್ಮ ತಸ್ಮಾದ್ಬ್ರಹ್ಮಣಿ ತೇ ಸ್ಥಿತಾಃ ||",
    transliteration: "ihaiva tair jitaḥ sargo yeṣhāṁ sāmye sthitaṁ manaḥ nirdoṣhaṁ hi samaṁ brahma tasmād brahmaṇi te sthitāḥ",
    meaning: "ಇಹಲೋಕದಲ್ಲೇ ಸಂಸಾರವನ್ನು ಜಯಿಸಿದವರು, ಸಮತ್ವದಲ್ಲಿ ಸ್ಥಿರಚಿತ್ತರಾಗಿರುವವರು. ನಿರ್ದೋಷವಾದ ಬ್ರಹ್ಮವು ಸಮವಾಗಿರುವುದರಿಂದ, ಅವರು ಬ್ರಹ್ಮನಲ್ಲಿ ಸ್ಥಿತರಾಗಿರುತ್ತಾರೆ."
  },
  {
    id: "5-20",
    chapter: 5,
    verse: 20,
    kannada: "ನ ಪ್ರಹೃಷ್ಯೇತ್ಪ್ರಿಯಂ ಪ್ರಾಪ್ಯ ನೋದ್ವಿಜೇತ್ಪ್ರಾಪ್ಯ ಚಾಪ್ರಿಯಮ್ | ಸ್ಥಿರಬುದ್ಧಿರಸಂಮೂಢೋ ಬ್ರಹ್ಮವಿದ್ಬ್ರಹ್ಮಣಿ ಸ್ಥಿತಃ ||",
    transliteration: "na prahṛiṣhyet priyaṁ prāpya nodvijet prāpya chāpriyam sthira-buddhir asammūḍho brahma-vid brahmaṇi sthitaḥ",
    meaning: "ಪ್ರಿಯವನ್ನು ಪಡೆದಾಗ ಹರ್ಷಿಸುವುದಿಲ್ಲ, ಅಪ್ರಿಯವನ್ನು ಪಡೆದಾಗ ವ್ಯಥೆಪಡುವುದಿಲ್ಲ. ಸ್ಥಿರಬುದ್ಧಿಯುಳ್ಳ, ಮೋಹರಹಿತನಾದ, ಬ್ರಹ್ಮವೇತ್ತನು ಬ್ರಹ್ಮನಲ್ಲಿ ಸ್ಥಿತನಾಗಿರುತ್ತಾನೆ."
  },
  {
    id: "5-21",
    chapter: 5,
    verse: 21,
    kannada: "ಬಾಹ್ಯಸ್ಪರ್ಶೇಷ್ವಸಕ್ತಾತ್ಮಾ ವಿಂದತ್ಯಾತ್ಮನಿ ಯತ್ಸುಖಮ್ | ಸ ಬ್ರಹ್ಮಯೋಗಯುಕ್ತಾತ್ಮಾ ಸುಖಮಕ್ಷಯಮಶ್ನುತೇ ||",
    transliteration: "bāhya-sparśheṣhv asaktātmā vindaty ātmani yat sukham sa brahma-yoga-yuktātmā sukham akṣhayam aśhnute",
    meaning: "ಬಾಹ್ಯ ಸ್ಪರ್ಶಗಳಲ್ಲಿ ಅಸಕ್ತನಾದವನು ಆತ್ಮನಲ್ಲಿ ಯಾವ ಸುಖವಿದೆಯೋ ಅದನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಬ್ರಹ್ಮಯೋಗದಲ್ಲಿ ಯುಕ್ತಾತ್ಮನಾದವನು ಅಕ್ಷಯ ಸುಖವನ್ನು ಅನುಭವಿಸುತ್ತಾನೆ."
  },
  {
    id: "5-22",
    chapter: 5,
    verse: 22,
    kannada: "ಯೇ ಹಿ ಸಂಸ್ಪರ್ಶಜಾ ಭೋಗಾ ದುಃಖಯೋನಯ ಏವ ತೇ | ಆದ್ಯಂತವಂತಃ ಕೌನ್ತೇಯ ನ ತೇಷು ರಮತೇ ಬುಧಃ ||",
    transliteration: "ye hi saṁsparśha-jā bhogā duḥkha-yonaya eva te ādy-antavantaḥ kaunteya na teṣhu ramate budhaḥ",
    meaning: "ಕೌಂತೇಯ, ಇಂದ್ರಿಯ ಸಂಪರ್ಕದಿಂದ ಉಂಟಾಗುವ ಭೋಗಗಳು ದುಃಖದ ಕಾರಣವಾಗಿರುತ್ತವೆ. ಅವುಗಳಿಗೆ ಆದಿ ಮತ್ತು ಅಂತ್ಯವಿರುತ್ತದೆ. ಬುಧನಾದವನು ಅವುಗಳಲ್ಲಿ ರಮಿಸುವುದಿಲ್ಲ."
  },
  {
    id: "5-23",
    chapter: 5,
    verse: 23,
    kannada: "ಶಕ್ನೋತೀಹೈವ ಯಃ ಸೋಢುಂ ಪ್ರಾಕ್ಶರೀರವಿಮೋಕ್ಷಣಾತ್ | ಕಾಮಕ್ರೋಧೋದ್ಭವಂ ವೇಗಂ ಸ ಯುಕ್ತಃ ಸ ಸುಖೀ ನರಃ ||",
    transliteration: "śhaknotīhaiva yaḥ soḍhuṁ prāk śharīra-vimokṣhaṇāt kāma-krodhodbhavaṁ vegaṁ sa yuktaḥ sa sukhī naraḥ",
    meaning: "ದೇಹತ್ಯಾಗಕ್ಕೆ ಮುಂಚೆಯೇ ಕಾಮಕ್ರೋಧಗಳಿಂದ ಉದ್ಭವಿಸುವ ವೇಗವನ್ನು ಸಹಿಸಲು ಶಕ್ತನಾದವನು ಯುಕ್ತನು, ಸುಖಿಯು."
  },
  {
    id: "5-24",
    chapter: 5,
    verse: 24,
    kannada: "ಯೋಽಂತಃಸುಖೋಽಂತರಾರಾಮಸ್ತಥಾಽಂತರ್ಜ್ಯೋತಿರೇವ ಯಃ | ಸ ಯೋಗೀ ಬ್ರಹ್ಮನಿರ್ವಾಣಂ ಬ್ರಹ್ಮಭೂತೋಽಧಿಗಚ್ಛತಿ ||",
    transliteration: "yo 'ntaḥ-sukho 'ntar-ārāmas tathā 'ntar-jyotir eva yaḥ sa yogī brahma-nirvāṇaṁ brahma-bhūto 'dhigachchhati",
    meaning: "ಯಾರು ಆಂತರಿಕ ಸುಖವುಳ್ಳವರಾಗಿ, ಆಂತರಿಕ ಆರಾಮವುಳ್ಳವರಾಗಿ, ಆಂತರಿಕ ಜ್ಯೋತಿಯುಳ್ಳವರಾಗಿರುತ್ತಾರೋ, ಅಂತಹ ಯೋಗಿಯು ಬ್ರಹ್ಮನಿರ್ವಾಣವನ್ನು ಪಡೆದು ಬ್ರಹ್ಮಭೂತನಾಗುತ್ತಾನೆ."
  },
  {
    id: "5-25",
    chapter: 5,
    verse: 25,
    kannada: "ಲಭಂತೇ ಬ್ರಹ್ಮನಿರ್ವಾಣಮೃಷಯಃ ಕ್ಷೀಣಕಲ್ಮಷಾಃ | ಛಿನ್ನೈದ್ವೈಧಾ ಯತಾತ್ಮಾನಃ ಸರ್ವಭೂತಹಿತೇ ರತಾಃ ||",
    transliteration: "labhante brahma-nirvāṇam ṛiṣhayaḥ kṣhīṇa-kalmaṣhāḥ chhinnai-dvaidhā yatātmānaḥ sarva-bhūta-hite ratāḥ",
    meaning: "ಕಲ್ಮಷರಹಿತರಾದ, ಸಂಶಯ ಛೇದನ ಮಾಡಿದ, ಆತ್ಮಸಂಯಮವುಳ್ಳ, ಸರ್ವಭೂತ ಹಿತದಲ್ಲಿ ರತರಾದ ಋಷಿಗಳು ಬ್ರಹ್ಮನಿರ್ವಾಣವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
  },
  {
    id: "5-26",
    chapter: 5,
    verse: 26,
    kannada: "ಕಾಮಕ್ರೋಧವಿಯುಕ್ತಾನಾಂ ಯತೀನಾಂ ಯತಚೇತಸಾಮ್ | ಅಭಿತೋ ಬ್ರಹ್ಮನಿರ್ವಾಣಂ ವರ್ತತೇ ವಿದಿತಾತ್ಮನಾಮ್ ||",
    transliteration: "kāma-krodha-viyuktānāṁ yatīnāṁ yata-chetasām abhito brahma-nirvāṇaṁ vartate viditātmanām",
    meaning: "ಕಾಮಕ್ರೋಧಗಳಿಂದ ವಿಯುಕ್ತರಾದ, ಜಿತೇಂದ್ರಿಯರಾದ, ಆತ್ಮಜ್ಞಾನವುಳ್ಳ ಯತಿಗಳಿಗೆ ಸರ್ವತ್ರ ಬ್ರಹ್ಮನಿರ್ವಾಣವಿರುತ್ತದೆ."
  },
  {
    id: "5-27",
    chapter: 5,
    verse: 27,
    kannada: "ಸ್ಪರ್ಶಾನ್ ಕೃತ್ವಾ ಬಹಿರ್ಬಾಹ್ಯಾಂಶ್ಚಕ್ಷುಶ್ಚೈವಾಂತರೇ ಭ್ರುವೋಃ | ಪ್ರಾಣಾಪಾನೌ ಸಮೌ ಕೃತ್ವಾ ನಾಸಾಭ್ಯಂತರಚಾರಿಣೌ ||",
    transliteration: "sparśhān kṛitvā bahir bāhyānśh chakṣhuśh chaivāntare bhruvoḥ prāṇāpānau samau kṛitvā nāsābhyantara-chāriṇau",
    meaning: "ಬಾಹ್ಯ ವಿಷಯಗಳ ಸಂಪರ್ಕವನ್ನು ಬಹಿರ್ಗತ ಮಾಡಿ, ದೃಷ್ಟಿಯನ್ನು ಭ್ರೂಮಧ್ಯದಲ್ಲಿ ಸ್ಥಾಪಿಸಿ, ಪ್ರಾಣ ಮತ್ತು ಅಪಾನವಾಯುಗಳನ್ನು ನಾಸಿಕದಲ್ಲಿ ಸಮಮಾಡಿ."
  },
  {
    id: "5-28",
    chapter: 5,
    verse: 28,
    kannada: "ಯತೇಂದ್ರಿಯಮನೋಬುದ್ಧಿರ್ಮುನಿರ್ಮೋಕ್ಷಪರಾಯಣಃ | ವಿಗತೇಚ್ಛಾಭಯಕ್ರೋಧೋ ಯಃ ಸದಾ ಮುಕ್ತ ಏವ ಸಃ ||",
    transliteration: "yata-indriya-mano-buddhir munir mokṣha-parāyaṇaḥ vigatecchā-bhaya-krodho yaḥ sadā mukta eva saḥ",
    meaning: "ಇಂದ್ರಿಯ, ಮನ, ಬುದ್ಧಿಗಳನ್ನು ನಿಗ್ರಹಿಸಿಕೊಂಡು, ಮೋಕ್ಷಪರಾಯಣನಾದ, ಇಚ್ಛೆ, ಭಯ, ಕ್ರೋಧಗಳನ್ನು ತ್ಯಜಿಸಿದ ಮುನಿಯು ಸದಾ ಮುಕ್ತನೇ."
  },
  {
    id: "5-29",
    chapter: 5,
    verse: 29,
    kannada: "ಭೋಕ್ತಾರಂ ಯಜ್ಞತಪಸಾಂ ಸರ್ವಲೋಕಮಹೇಶ್ವರಮ್ | ಸುಹೃದಂ ಸರ್ವಭೂತಾನಾಂ ಜ್ಞಾತ್ವಾ ಮಾಂ ಶಾಂತಿಮೃಚ್ಛತಿ ||",
    transliteration: "bhoktāraṁ yajña-tapasāṁ sarva-loka-maheśhvaram suhṛidaṁ sarva-bhūtānāṁ jñātvā māṁ śhāntim ṛichchhati" ,
    meaning: "ಯಜ್ಞ ಮತ್ತು ತಪಸ್ಸುಗಳ ಭೋಕ್ತನೂ, ಸರ್ವಲೋಕ ಮಹೇಶ್ವರನೂ, ಸರ್ವಭೂತಗಳ ಸುಹೃದನೂ ಆದ ನನ್ನನ್ನು ತಿಳಿದು ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
  }
  ]},
  {
  id: 6,
  title: "Atma Samyama Yoga",
  kannadaTitle: "ಆತ್ಮ ಸಂಯಮ ಯೋಗ",
  description: "ಆತ್ಮನ ಸಂಯಮ - Self-control",
  totalVerses: 47,
  verses: [
    {
id: "6-1",
chapter: 6,
verse: 1,
kannada: "ಅನಾಶ್ರಿತಃ ಕರ್ಮಫಲಂ ಕಾರ್ಯಂ ಕರ್ಮ ಕರೋತಿ ಯಃ | ಸ ಸಂನ್ಯಾಸೀ ಚ ಯೋಗೀ ಚ ನ ನಿರಗ್ನಿರ್ನ ಚಾಕ್ರಿಯಃ ||",
transliteration: "anāśhritaḥ karma-phalaṁ kāryaṁ karma karoti yaḥ sa sannyāsī cha yogī cha na niragnir na chākriyaḥ",
meaning: "ಯಾವ ಮನುಷ್ಯನು ಕರ್ಮಫಲಕ್ಕೆ ಆಶ್ರಯಿಸದೆ, ಕರ್ತವ್ಯವೆಂದು ಭಾವಿಸಿದ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತಾನೆಯೋ, ಅವನೇ ನಿಜವಾದ ಸಂನ್ಯಾಸಿ ಮತ್ತು ಯೋಗಿ. ಅವನು ಅಗ್ನಿಹೋತ್ರಿಯೂ ಅಲ್ಲ, ಕರ್ಮರಹಿತನೂ ಅಲ್ಲ."
},
{
id: "6-2",
chapter: 6,
verse: 2,
kannada: "ಯಂ ಸಂನ್ಯಾಸಮಿತಿ ಪ್ರಾಹುರ್ಯೋಗಂ ತಂ ವಿದ್ಧಿ ಪಾಂಡವ | ನ ಹ್ಯಸಂನ್ಯಸ್ತಸಂಕಲ್ಪೋ ಯೋಗೀ ಭವತಿ ಕಶ್ಚನ ||",
transliteration: "yaṁ sannyāsam iti prāhuryogaṁ taṁ viddhi pāṇḍava na hyasannyasta-saṅkalpo yogī bhavati kaśhchana",
meaning: "ಹೇ ಪಾಂಡವಾ, ಸಂನ್ಯಾಸವೆಂದು ಹೇಳುವುದು ಯೋಗವೇ ಆಗಿದೆ ಎಂದು ತಿಳಿ. ಯಾಕೆಂದರೆ ಸಂಕಲ್ಪಗಳನ್ನು ತ್ಯಜಿಸದವನು ಯೋಗಿಯಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ."
},
{
id: "6-3",
chapter: 6,
verse: 3,
kannada: "ಆರುರುಕ್ಷೋರ್ಮುನೇರ್ಯೋಗಂ ಕರ್ಮ ಕಾರಣಮುಚ್ಯತೇ | ಯೋಗಾರೂಢಸ್ಯ ತಸ್ಯೈವ ಶಮಃ ಕಾರಣಮುಚ್ಯತೇ ||",
transliteration: "ārurukṣhor muneḥ yogaṁ karma kāraṇam uchyate yogārūḍhasya tasyaiva śhamaḥ kāraṇam uchyate",
meaning: "ಯೋಗವನ್ನು ಪಡೆಯಲು ಇಚ್ಛಿಸುವ ಮುನಿಗೆ ಕರ್ಮವೇ ಸಾಧನವೆನ್ನಲಾಗುತ್ತದೆ. ಯೋಗವನ್ನು ಪಡೆದವನಿಗೆ ನಿಶ್ಚಲತೆಯೇ (ಮನಸ್ಸಿನ ಶಾಂತಿ) ಸಾಧನವೆನ್ನಲಾಗುತ್ತದೆ."
},
{
id: "6-4",
chapter: 6,
verse: 4,
kannada: "ಯದಾ ಹಿ ನೇಂದ್ರಿಯಾರ್ಥೇಷು ನ ಕರ್ಮಸ್ವನುಷಜ್ಜತೇ | ಸರ್ವಸಂಕಲ್ಪಸಂನ್ಯಾಸೀ ಯೋಗಾರೂಢಸ್ತದೋಚ್ಯತೇ ||",
transliteration: "yadā hi nendriyārtheṣhu na karmasv anuṣhajjate sarva-saṅkalpa-sannyāsī yogārūḍhas tadochyate",
meaning: "ಯಾವಾಗ ಮನುಷ್ಯನು ಇಂದ್ರಿಯ ವಿಷಯಗಳಲ್ಲಿಯೂ, ಕರ್ಮಗಳಲ್ಲಿಯೂ ಆಸಕ್ತನಾಗಿರುವುದಿಲ್ಲವೋ, ಎಲ್ಲಾ ಸಂಕಲ್ಪಗಳನ್ನು ತ್ಯಜಿಸಿದವನಾದಾಗ, ಆಗ ಅವನು ಯೋಗಾರೂಢನೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
id: "6-5",
chapter: 6,
verse: 5,
kannada: "ಉದ್ಧರೇದಾತ್ಮನಾತ್ಮಾನಂ ನಾತ್ಮಾನಮವಸಾದಯೇತ್ | ಆತ್ಮೈವ ಹ್ಯಾತ್ಮನೋ ಬಂಧುರಾತ್ಮೈವ ರಿಪುರಾತ್ಮನಃ ||",
transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet ātmaiva hyātmano bandhur ātmaiva ripur ātmanaḥ",
meaning: "ಮನುಷ್ಯನು ತನ್ನಿಂದ ತನ್ನನ್ನೇ ಉನ್ನತಿಗೆ ತರಬೇಕು; ತನ್ನಿಂದ ತನ್ನನ್ನೇ ಅಧೋಗತಿಗೆ ತಂದುಕೊಳ್ಳಬಾರದು. ತನಗೆ ತಾನೇ ಬಂಧುವೂ ಹೌದು, ತನಗೆ ತಾನೇ ಶತ್ರುವೂ ಹೌದು."
},
{
id: "6-6",
"chapter": 6,
"verse": 6,
"kannada": "ಬಂಧುರಾತ್ಮಾತ್ಮನಸ್ತಸ್ಯ ಯೇನಾತ್ಮೈವಾತ್ಮನಾ ಜಿತಃ | ಅನಾತ್ಮನಸ್ತು ಶತ್ರುತ್ವೇ ವರ್ತೇತಾತ್ಮೈವ ಶತ್ರುವತ್ ||",
"transliteration": "bandhur ātmātmanas tasya yenātmaivātmanā jitaḥ anātmanas tu śhatrutve vartetātmaiva śhatru-vat",
"meaning": "ಯಾರು ತಮ್ಮನ್ನು ತಾವೇ ಜಯಿಸಿಕೊಂಡಿರುತ್ತಾರೆಯೋ, ಅವರಿಗೆ ಆತ್ಮವೇ ಬಂಧುವಾಗಿರುತ್ತದೆ. ಆದರೆ ಯಾರು ತಮ್ಮನ್ನು ತಾವೇ ಜಯಿಸಿಕೊಳ್ಳದಿರುತ್ತಾರೆಯೋ, ಅವರಿಗೆ ಆತ್ಮವೇ ಶತ್ರುವಿನಂತೆ ವರ್ತಿಸುತ್ತದೆ."
},
{
"id": "6-7",
"chapter": 6,
"verse": 7,
"kannada": "ಜಿತಾತ್ಮನಃ ಪ್ರಶಾಂತಸ್ಯ ಪರಮಾತ್ಮಾ ಸಮಾಹಿತಃ | ಶೀತೋಷ್ಣಸುಖದುಃಖೇಷು ತಥಾ ಮಾನಾಪಮಾನಯೋಃ ||",
"transliteration": "jitātmanaḥ praśhāntasya paramātmā samāhitaḥ śhītoṣhṇa-sukha-duḥkheṣhu tathā mānāpamānayoḥ",
"meaning": "ಯಾರು ತಮ್ಮ ಮನಸ್ಸನ್ನು ಜಯಿಸಿ, ಪ್ರಶಾಂತರಾಗಿದ್ದಾರೆಯೋ, ಅವರಿಗೆ ಪರಮಾತ್ಮನು ಸಮಾಧಿಸ್ಥನಾಗಿರುತ್ತಾನೆ. ಅವರು ಶೀತ-ಉಷ್ಣ, ಸುಖ-ದುಃಖ, ಮಾನ-ಅಪಮಾನಗಳಲ್ಲಿ ಸಮಬುದ್ಧಿಯಿಂದ ಇರುತ್ತಾರೆ."
},
{
"id": "6-8",
"chapter": 6,
"verse": 8,
"kannada": "ಜ್ಞಾನವಿಜ್ಞಾನತೃಪ್ತಾತ್ಮಾ ಕೂಟಸ್ಥೋ ವಿಜಿತೇಂದ್ರಿಯಃ | ಯುಕ್ತ ಇತ್ಯುಚ್ಯತೇ ಯೋಗೀ ಸಮಲೋಷ್ಟಾಶ್ಮಕಾಂಚನಃ ||",
"transliteration": "jñāna-vijñāna-tṛiptātmā kūṭa-stho vijitendriyaḥ yukta ity uchyate yogī sama-loṣhṭāśhma-kāñchanaḥ",
"meaning": "ಜ್ಞಾನ ಮತ್ತು ವಿಜ್ಞಾನದಿಂದ ತೃಪ್ತನಾದ, ಸ್ಥಿರಚಿತ್ತನಾದ, ಇಂದ್ರಿಯಗಳನ್ನು ಜಯಿಸಿದ ಯೋಗಿಯು ಮಣ್ಣು, ಕಲ್ಲು ಮತ್ತು ಬಂಗಾರದಲ್ಲಿ ಸಮಾನ ದೃಷ್ಟಿ ಇಟ್ಟವನೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "6-9",
"chapter": 6,
"verse": 9,
"kannada": "ಸುಹೃನ್ಮಿತ್ರಾರ್ಯುದಾಸೀನಮಧ್ಯಸ್ಥದ್ವೇಷ್ಯಬಂಧುಷು | ಸಾಧುಷ್ವಪಿ ಚ ಪಾಪೇಷು ಸಮಬುದ್ಧಿರ್ವಿಶಿಷ್ಯತೇ ||",
"transliteration": "suhṛin-mitrāry-udāsīna-madhyastha-dveṣhya-bandhuṣhu sādhuṣhvapi cha pāpeṣhu sama-buddhir viśhiṣhyate",
"meaning": "ಶುಭಚಿಂತಕರು, ಮಿತ್ರರು, ಶತ್ರುಗಳು, ಉದಾಸೀನರು, ತಟಸ್ಥರು, ದ್ವೇಷಿಗಳು, ಬಂಧುಗಳು, ಸಜ್ಜನರು ಮತ್ತು ದುಷ್ಟರು ಇವರೆಲ್ಲರಲ್ಲೂ ಸಮಬುದ್ಧಿಯುಳ್ಳವನು ಶ್ರೇಷ್ಠನಾಗಿದ್ದಾನೆ."
},
{
"id": "6-10",
"chapter": 6,
"verse": 10,
"kannada": "ಯೋಗೀ ಯುಂಜೀತ ಸತತಮಾತ್ಮಾನಂ ರಹಸಿ ಸ್ಥಿತಃ | ಏಕಾಕೀ ಯತಚಿತ್ತಾತ್ಮಾ ನಿರಾಶೀರಪರಿಗ್ರಹಃ ||",
"transliteration": "yogī yuñjīta satatam ātmānaṁ rahasi sthitaḥ ekākī yata-chittātmā nirāśhīr aparigrahaḥ",
"meaning": "ಯೋಗಿಯು ಏಕಾಂತದಲ್ಲಿ, ಏಕಾಗ್ರಚಿತ್ತದಿಂದ, ಚಿತ್ತ ಮತ್ತು ಇಂದ್ರಿಯಗಳನ್ನು ನಿಗ್ರಹಿಸಿಕೊಂಡು, ಆಶೆ ಮತ್ತು ಸಂಗ್ರಹವಿಲ್ಲದೆ, ನಿರಂತರವಾಗಿ ಆತ್ಮದ ಧ್ಯಾನದಲ್ಲಿ ನಿರತನಾಗಿರಬೇಕು."
},
{
"id": "6-11",
"chapter": 6,
"verse": 11,
"kannada": "ಶುಚೌ ದೇಶೇ ಪ್ರತಿಷ್ಠಾಪ್ಯ ಸ್ಥಿರಮಾಸನಮಾತ್ಮನಃ | ನಾತ್ಯುಚ್ಛ್ರಿತಂ ನಾತಿನೀಚಂ ಚೈಲಾಜಿನಕುಶೋತ್ತರಮ್ ||",
"transliteration": "śhuchau deśhe pratiṣhṭhāpya sthiram āsanam ātmanaḥ nāty-uchchhritaṁ nāti-nīchaṁ chailājina-kuśhottaram",
"meaning": "ಯೋಗಾಭ್ಯಾಸಕ್ಕೆ ಶುದ್ಧವಾದ ಸ್ಥಳದಲ್ಲಿ, ದರ್ಭೆ, ಜಿಂಕೆಚರ್ಮ ಮತ್ತು ಬಟ್ಟೆಯನ್ನು ಹಾಸಿ, ಅತಿ ಎತ್ತರವಲ್ಲದ, ಅತಿ ತಗ್ಗಲ್ಲದ, ಸ್ಥಿರವಾದ ಆಸನವನ್ನು ಸಿದ್ಧಪಡಿಸಬೇಕು."
},
{
"id": "6-12",
"chapter": 6,
"verse": 12,
"kannada": "ತತ್ರೈಕಾಗ್ರಂ ಮನಃ ಕೃತ್ವಾ ಯತಚಿತ್ತೇಂದ್ರಿಯಕ್ರಿಯಃ | ಉಪವಿಶ್ಯಾಸನೇ ಯುಂಜ್ಯಾದ್ಯೋಗಮಾತ್ಮವಿಶುದ್ಧಯೇ ||",
"transliteration": "tatraikāgraṁ manaḥ kṛitvā yata-chittendriya-kriyaḥ upaviśhyāsane yuñjyād yogam ātma-viśhuddhaye",
"meaning": "ಆ ಆಸನದಲ್ಲಿ ಕುಳಿತು, ಚಿತ್ತ ಮತ್ತು ಇಂದ್ರಿಯಗಳನ್ನು ನಿಗ್ರಹಿಸಿ, ಮನಸ್ಸನ್ನು ಏಕಾಗ್ರಗೊಳಿಸಿ, ಆತ್ಮಶುದ್ಧಿಗಾಗಿ ಯೋಗಾಭ್ಯಾಸ ಮಾಡಬೇಕು."
},
{
"id": "6-13",
"chapter": 6,
"verse": 13,
"kannada": "ಸಮಂ ಕಾಯಶಿರೋಗ್ರೀವಂ ಧಾರಯನ್ನಚಲಂ ಸ್ಥಿರಃ | ಸಂಪ್ರೇಕ್ಷ್ಯ ನಾಸಿಕಾಗ್ರಂ ಸ್ವಂ ದಿಶಶ್ಚಾನವಲೋಕಯನ್ ||",
"transliteration": "samaṁ kāya-śhiro-grīvaṁ dhārayann achalaṁ sthiraḥ samprekṣhya nāsikāgraṁ svaṁ diśhaśh chānavalokayan",
"meaning": "ದೇಹ, ತಲೆ ಮತ್ತು ಕುತ್ತಿಗೆಯನ್ನು ನೇರವಾಗಿ ಚಲಿಸದಂತೆ ಸ್ಥಿರವಾಗಿ ಹಿಡಿದು, ದೃಷ್ಟಿಯನ್ನು ತನ್ನ ನಾಸಿಕಾಗ್ರದ ಮೇಲೆ ಸ್ಥಿರಗೊಳಿಸಿ, ಬೇರೆ ದಿಕ್ಕುಗಳನ್ನು ನೋಡದೆ ಇರಬೇಕು."
},
{
"id": "6-14",
"chapter": 6,
"verse": 14,
"kannada": "ಪ್ರಶಾಂತಾತ್ಮಾ ವಿಗತಭೀರ್ಬ್ರಹ್ಮಚಾರಿವ್ರತೇ ಸ್ಥಿತಃ | ಮನಃ ಸಂಯಮ್ಯ ಮಚ್ಚಿತ್ತೋ ಯುಕ್ತ ಆಸೀತ ಮತ್ಪರಃ ||",
"transliteration": "praśhāntātmā vigata-bhīr brahmachāri-vrate sthitaḥ manaḥ saṁyamya mach-chitto yukta āsīta mat-paraḥ",
"meaning": "ಪ್ರಶಾಂತ ಮನಸ್ಸಿನಿಂದ, ಭಯವನ್ನು ತ್ಯಜಿಸಿ, ಬ್ರಹ್ಮಚರ್ಯವ್ರತದಲ್ಲಿ ನಿಷ್ಠೆಯಿಂದ, ಮನಸ್ಸನ್ನು ನಿಗ್ರಹಿಸಿ, ನನ್ನಲ್ಲಿಯೇ ಚಿತ್ತವನ್ನು ನೆಲೆಗೊಳಿಸಿ, ನನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಯೋಗಿಯಾಗಿರಬೇಕು."
},
{
"id": "6-15",
"chapter": 6,
"verse": 15,
"kannada": "ಯುಂಜನ್ನೇವಂ ಸದಾತ್ಮಾನಂ ಯೋಗೀ ನಿಯತಮಾನಸಃ | ಶಾಂತಿಂ ನಿರ್ವಾಣಪರಮಾಂ ಮತ್ಸಂಸ್ಥಾಮಧಿಗಚ್ಛತಿ ||",
"transliteration": "yuñjann evaṁ sadātmānaṁ yogī niyata-mānasaḥ śhāntiṁ nirvāṇa-paramāṁ mat-saṁsthām adhigachchhati",
"meaning": "ಈ ರೀತಿಯಾಗಿ ನಿರಂತರವಾಗಿ ತನ್ನನ್ನು ನಿಗ್ರಹಿಸಿಕೊಂಡು, ನಿಯಂತ್ರಿತ ಮನಸ್ಕನಾದ ಯೋಗಿಯು ನನ್ನಲ್ಲಿ ಸ್ಥಿತವಾದ, ನಿರ್ವಾಣಪರವಾದ ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "6-16",
"chapter": 6,
"verse": 16,
"kannada": "ನಾತ್ಯಶ್ನತಸ್ತು ಯೋಗೋಽಸ್ತಿ ನ ಚೈಕಾಂತಮನಶ್ನತಃ | ನ ಚಾತಿಸ್ವಪ್ನಶೀಲಸ್ಯ ಜಾಗ್ರತೋ ನೈವ ಚಾರ್ಜುನ ||",
"transliteration": "nātyaśhnatastu yogosti na chaikāntam anaśhnataḥ na chāti-svapna-śhīlasya jāgrato naiva chārjuna",
"meaning": "ಹೇ ಅರ್ಜುನ, ಅತಿ ಊಟ ಮಾಡುವವನಿಗೆ, ಬಹಳ ಕಡಿಮೆ ಊಟ ಮಾಡುವವನಿಗೆ, ಅತಿ ನಿದ್ರೆ ಮಾಡುವವನಿಗೆ ಮತ್ತು ಬಹಳ ಎಚ್ಚರವಾಗಿರುವವನಿಗೆ ಯೋಗ ಸಿದ್ಧಿಸುವುದಿಲ್ಲ."
},
{
"id": "6-17",
"chapter": 6,
"verse": 17,
"kannada": "ಯುಕ್ತಾಹಾರವಿಹಾರಸ್ಯ ಯುಕ್ತಚೇಷ್ಟಸ್ಯ ಕರ್ಮಸು | ಯುಕ್ತಸ್ವಪ್ನಾವಬೋಧಸ್ಯ ಯೋಗೋ ಭವತಿ ದುಃಖಹಾ ||",
"transliteration": "yuktāhāra-vihārasya yukta-cheṣhṭasya karmasu yukta-svapnāvabodhasya yoga bhavati duḥkha-hā",
"meaning": "ಯಾರು ಆಹಾರ-ವಿಹಾರಗಳಲ್ಲಿ, ಕರ್ಮಗಳಲ್ಲಿ, ನಿದ್ರೆ-ಜಾಗರಣೆಗಳಲ್ಲಿ ಮಿತವಾಗಿರುತ್ತಾರೆಯೋ, ಅವರಿಗೆ ದುಃಖನಾಶಕವಾದ ಯೋಗ ಸಿದ್ಧಿಸುತ್ತದೆ."
},
{
"id": "6-18",
"chapter": 6,
"verse": 18,
"kannada": "ಯದಾ ವಿನಿಯತಂ ಚಿತ್ತಮಾತ್ಮನ್ಯೇವಾವತಿಷ್ಠತೇ | ನಿಃಸ್ಪೃಹಃ ಸರ್ವಕಾಮೇಭ್ಯೋ ಯುಕ್ತ ಇತ್ಯುಚ್ಯತೇ ತದಾ ||",
"transliteration": "yadā viniyataṁ chittam ātmany evāvatiṣhṭhate niḥspṛihaḥ sarva-kāmebhyo yukta ity uchyate tadā",
"meaning": "ಯಾವಾಗ ನಿಗ್ರಹಿಸಲ್ಪಟ್ಟ ಚಿತ್ತವು ಆತ್ಮನಲ್ಲಿ ಸ್ಥಿರವಾಗಿ ನಿಲ್ಲುತ್ತದೆಯೋ, ಎಲ್ಲಾ ಕಾಮನೆಗಳಿಂದ ವಿರಕ್ತನಾಗಿರುತ್ತಾನೆಯೋ, ಆಗ ಅವನು ಯುಕ್ತನೆಂದು (ಯೋಗಸ್ಥನೆಂದು) ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "6-19",
"chapter": 6,
"verse": 19,
"kannada": "ಯಥಾ ದೀಪೋ ನಿವಾತಸ್ಥೋ ನೇಂಗತೇ ಸೋಪಮಾ ಸ್ಮೃತಾ | ಯೋಗಿನೋ ಯತಚಿತ್ತಸ್ಯ ಯುಂಜತೋ ಯೋಗಮಾತ್ಮನಃ ||",
"transliteration": "yathā dīpo nivāta-stho neṅgate sopamā smṛitā yogino yata-chittasya yuñjato yogam ātmanaḥ",
"meaning": "ಗಾಳಿಯಿಲ್ಲದ ಸ್ಥಳದಲ್ಲಿ ದೀಪದ ಜ್ಯೋತಿ ಅಚಲವಾಗಿರುವಂತೆ, ಯತಚಿತ್ತನಾದ ಯೋಗಿಯು ಆತ್ಮಯೋಗದಲ್ಲಿ ನಿರತನಾಗಿರುತ್ತಾನೆ ಎಂದು ಸಾಮ್ಯ ಹೇಳಲಾಗಿದೆ."
},
{
"id": "6-20",
"chapter": 6,
"verse": 20,
"kannada": "ಯತ್ರೋಪರಮತೇ ಚಿತ್ತಂ ನಿರುದ್ಧಂ ಯೋಗಸೇವಯಾ | ಯತ್ರ ಚೈವಾತ್ಮನಾತ್ಮಾನಂ ಪಶ್ಯನ್ನಾತ್ಮನಿ ತುಷ್ಯತಿ ||",
"transliteration": "yatroparamate chittaṁ niruddhaṁ yoga-sevayā yatra chaivātmanātmānaṁ paśhyann ātmani tuṣhyati",
"meaning": "ಯೋಗಾಭ್ಯಾಸದಿಂದ ಚಿತ್ತವು ನಿಗ್ರಹಿಸಲ್ಪಟ್ಟು ನಿಶ್ಚಲವಾಗಿರುವ ಸ್ಥಿತಿಯಲ್ಲಿ, ಆತ್ಮನಿಂದ ಆತ್ಮನನ್ನು ದರ್ಶನ ಮಾಡಿ, ಆತ್ಮನಲ್ಲಿಯೇ ತೃಪ್ತನಾಗಿರುತ್ತಾನೆ."
},
{
"id": "6-21",
"chapter": 6,
"verse": 21,
"kannada": "ಸುಖಮಾತ್ಯಂತಿಕಂ ಯತ್ತದ್ಬುದ್ಧಿಗ್ರಾಹ್ಯಮತೀಂದ್ರಿಯಮ್ | ವೇತ್ತಿ ಯತ್ರ ನ ಚೈವಾಯಂ ಸ್ಥಿತಶ್ಚಲತಿ ತತ್ತ್ವತಃ ||",
"transliteration": "sukham ātyantikaṁ yat tad buddhi-grāhyam atīndriyam vetti yatra na chaivāyaṁ sthitaśh chalati tattvataḥ",
"meaning": "ಆ ಅತೀಂದ್ರಿಯವಾದ, ಬುದ್ಧಿಗೆ ಗ್ರಾಹ್ಯವಾದ, ಅತ್ಯಂತಿಕ ಸುಖವನ್ನು ಅನುಭವಿಸಿ, ಅಲ್ಲಿಂದ ಸತ್ಯವನ್ನು ಬಿಟ್ಟು ಚಲಿಸುವುದಿಲ್ಲ."
},
{
"id": "6-22",
"chapter": 6,
"verse": 22,
"kannada": "ಯಂ ಲಬ್ಧ್ವಾ ಚಾಪರಂ ಲಾಭಂ ಮನ್ಯತೇ ನಾಧಿಕಂ ತತಃ | ಯಸ್ಮಿನ್ಸ್ಥಿತೋ ನ ದುಃಖೇನ ಗುರುಣಾಪಿ ವಿಚಾಲ್ಯತೇ ||",
"transliteration": "yaṁ labdhvā chāparaṁ lābhaṁ manyate nādhikaṁ tataḥ yasmin sthito na duḥkhena guruṇāpi vichālyate",
"meaning": "ಅದನ್ನು ಪಡೆದ ಮೇಲೆ ಅದಕ್ಕಿಂತ ಉತ್ತಮವಾದ ಬೇರೆ ಲಾಭವಿಲ್ಲ ಎಂದು ಭಾವಿಸುತ್ತಾನೆ. ಅದರಲ್ಲಿ ಸ್ಥಿತನಾದವನು ಗುರುತರವಾದ ದುಃಖದಿಂದಲೂ ಚಲಿಸಲ್ಪಡುವುದಿಲ್ಲ."
},
{
"id": "6-23",
"chapter": 6,
"verse": 23,
"kannada": "ತಂ ವಿದ್ಯಾದ್ದುಃಖಸಂಯೋಗವಿಯೋಗಂ ಯೋಗಸಂಜ್ಞಿತಮ್ | ಸ ನಿಶ್ಚಯೇನ ಯೋಕ್ತವ್ಯೋ ಯೋಗೋಽನಿರ್ವಿಣ್ಣಚೇತಸಾ ||",
"transliteration": "taṁ vidyād duḥkha-saṁyoga-viyogaṁ yoga-saṁjñitam sa niśhchayena yoktavyo yogonirviṇṇa-chetasā",
"meaning": "ದುಃಖಸಂಯೋಗದ ವಿಯೋಗವೇ ಯೋಗ ಎಂದು ತಿಳಿಯಬೇಕು. ಅದನ್ನು ನಿರ್ವಿಣ್ಣಚಿತ್ತನಾಗದೆ, ದೃಢನಿಶ್ಚಯದಿಂದ ಅಭ್ಯಾಸ ಮಾಡಬೇಕು."
},
{
"id": "6-24",
"chapter": 6,
"verse": 24,
"kannada": "ಸಂಕಲ್ಪಪ್ರಭವಾನ್ ಕಾಮಾನ್ ತ್ಯಕ್ತ್ವಾ ಸರ್ವಾನಶೇಷತಃ | ಮನಸೈವೇಂದ್ರಿಯಗ್ರಾಮಂ ವಿನಿಯಮ್ಯ ಸಮಂತತಃ ||",
"transliteration": "saṅkalpa-prabhavān kāmān tyaktvā sarvān aśheṣhataḥ manasaivendriya-grāmaṁ viniyamya samantataḥ",
"meaning": "ಸಂಕಲ್ಪದಿಂದ ಉತ್ಪನ್ನವಾದ ಎಲ್ಲಾ ಕಾಮನೆಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತ್ಯಜಿಸಿ, ಮನಸ್ಸಿನಿಂದಲೇ ಸಮಸ್ತ ಇಂದ್ರಿಯಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿಗ್ರಹಿಸಬೇಕು."
},
{
"id": "6-25",
"chapter": 6,
"verse": 25,
"kannada": "ಶನೈಃ ಶನೈರುಪರಮೇದ್ಬುದ್ಧ್ಯಾ ಧೃತಿಗೃಹೀತಯಾ | ಆತ್ಮಸಂಸ್ಥಂ ಮನಃ ಕೃತ್ವಾ ನ ಕಿಂಚಿದಪಿ ಚಿಂತಯೇತ್ ||",
"transliteration": "śhanaiḥ śhanair uparamet buddhyā dhṛiti-gṛihītayā ātma-saṁsthaṁ manaḥ kṛitvā na kiṁchid api chintayet",
"meaning": "ದೃಢವಾದ ಬುದ್ಧಿಯಿಂದ ಮೆಲ್ಲಮೆಲ್ಲಗೆ ವಿರಮಿಸಿ, ಮನಸ್ಸನ್ನು ಆತ್ಮದಲ್ಲಿ ನೆಲೆಗೊಳಿಸಿ, ಯಾವುದನ್ನೂ ಚಿಂತಿಸಬಾರದು."
},
{
"id": "6-26",
"chapter": 6,
"verse": 26,
"kannada": "ಯತೋ ಯತೋ ನಿಶ್ಚರತಿ ಮನಶ್ಚಂಚಲಮಸ್ಥಿರಮ್ | ತತಸ್ತತೋ ನಿಯಮ್ಯೈತದಾತ್ಮನ್ಯೇವ ವಶಂ ನಯೇತ್ ||",
"transliteration": "yato yato niśhcharati manaśh chañchalam asthiram tatas tato niyamyaitad ātmany eva vaśhaṁ nayet",
"meaning": "ಚಂಚಲವಾದ ಮನಸ್ಸು ಎಲ್ಲಿಂದ ಎಲ್ಲಿಗೆ ಚಲಿಸುತ್ತದೆಯೋ, ಅಲ್ಲಿಂದ ಅದನ್ನು ಹಿಂದಕ್ಕೆ ತಂದು ಆತ್ಮದ ವಶಕ್ಕೆ ತರಬೇಕು."
},
{
"id": "6-27",
"chapter": 6,
"verse": 27,
"kannada": "ಪ್ರಶಾಂತಮನಸಂ ಹ್ಯೇನಂ ಯೋಗಿನಂ ಸುಖಮುತ್ತಮಮ್ | ಉಪೈತಿ ಶಾಂತರಜಸಂ ಬ್ರಹ್ಮಭೂತಮಕಲ್ಮಷಮ್ ||",
"transliteration": "praśhānta-manasaṁ hy enaṁ yoginaṁ sukham uttamam upaiti śhānta-rajasaṁ brahma-bhūtam akalmaṣham",
"meaning": "ಪ್ರಶಾಂತ ಮನಸ್ಕನಾದ, ರಜೋಗುಣದಿಂದ ಮುಕ್ತನಾದ, ಬ್ರಹ್ಮಭೂತನಾದ, ನಿಷ್ಕಲ್ಮಷನಾದ ಯೋಗಿಗೆ ಪರಮ ಸುಖವು ಲಭಿಸುತ್ತದೆ."
},
{
"id": "6-28",
"chapter": 6,
"verse": 28,
"kannada": "ಯುಂಜನ್ನೇವಂ ಸದಾತ್ಮಾನಂ ಯೋಗೀ ವಿಗತಕಲ್ಮಷಃ | ಸುಖೇನ ಬ್ರಹ್ಮಸಂಸ್ಪರ್ಶಮತ್ಯಂತಂ ಸುಖಮಶ್ನುತೇ ||",
"transliteration": "yuñjann evaṁ sadātmānaṁ yogī vigata-kalmaṣhaḥ sukhena brahma-saṁsparśham atyantaṁ sukham aśhnute",
"meaning": "ಈ ರೀತಿ ನಿರಂತರವಾಗಿ ಆತ್ಮಯೋಗದಲ್ಲಿ ನಿರತನಾದ, ಕಲ್ಮಷರಹಿತನಾದ ಯೋಗಿಯು ಬ್ರಹ್ಮಸಾಕ್ಷಾತ್ಕಾರದ ಅತ್ಯಂತ ಸುಖವನ್ನು ಅನುಭವಿಸುತ್ತಾನೆ."
},
{
"id": "6-29",
"chapter": 6,
"verse": 29,
"kannada": "ಸರ್ವಭೂತಸ್ಥಮಾತ್ಮಾನಂ ಸರ್ವಭೂತಾನಿ ಚಾತ್ಮನಿ | ಈಕ್ಷತೇ ಯೋಗಯುಕ್ತಾತ್ಮಾ ಸರ್ವತ್ರ ಸಮದರ್ಶನಃ ||",
"transliteration": "sarva-bhūta-stham ātmānaṁ sarva-bhūtāni chātmani īkṣhate yoga-yuktātmā sarvatra sama-darśhanaḥ",
"meaning": "ಯೋಗಯುಕ್ತಾತ್ಮನಾದ, ಸಮದರ್ಶಿಯಾದ ಯೋಗಿಯು ಎಲ್ಲಾ ಭೂತಗಳಲ್ಲಿ ಆತ್ಮನನ್ನು ಮತ್ತು ಆತ್ಮನಲ್ಲಿ ಎಲ್ಲಾ ಭೂತಗಳನ್ನು ದರ್ಶನ ಮಾಡುತ್ತಾನೆ."
},
{
"id": "6-30",
"chapter": 6,
"verse": 30,
"kannada": "ಯೋ ಮಾಂ ಪಶ್ಯತಿ ಸರ್ವತ್ರ ಸರ್ವಂ ಚ ಮಯಿ ಪಶ್ಯತಿ | ತಸ್ಯಾಹಂ ನ ಪ್ರಣಶ್ಯಾಮಿ ಸ ಚ ಮೇ ನ ಪ್ರಣಶ್ಯತಿ ||",
"transliteration": "yo māṁ paśhyati sarvatra sarvaṁ cha mayi paśhyati tasyāhaṁ na praṇaśhyāmi sa cha me na praṇaśhyati",
"meaning": "ಯಾರು ಎಲ್ಲೆಡೆ ನನ್ನನ್ನು ನೋಡುತ್ತಾನೆಯೋ ಮತ್ತು ಎಲ್ಲವನ್ನೂ ನನ್ನಲ್ಲಿಯೇ ನೋಡುತ್ತಾನೆಯೋ, ಅವನಿಗೆ ನಾನು ಕಣ್ಮರೆಯಾಗುವುದಿಲ್ಲ ಮತ್ತು ಅವನು ನನಗೆ ಕಣ್ಮರೆಯಾಗುವುದಿಲ್ಲ."
},
{
"id": "6-31",
"chapter": 6,
"verse": 31,
"kannada": "ಸರ್ವಭೂತಸ್ಥಿತಂ ಯೋ ಮಾಂ ಭಜತ್ಯೇಕತ್ವಮಾಸ್ಥಿತಃ | ಸರ್ವಥಾ ವರ್ತಮಾನೋಽಪಿ ಸ ಯೋಗೀ ಮಯಿ ವರ್ತತೇ ||",
"transliteration": "sarva-bhūta-sthitaṁ yo māṁ bhajatyekatvam āsthitaḥ sarvathā vartamāno api sa yogī mayi vartate",
"meaning": "ಏಕತ್ವಭಾವದಿಂದ, ಸರ್ವಭೂತಗಳಲ್ಲಿ ವ್ಯಾಪಿಸಿರುವ ನನ್ನನ್ನು ಭಜಿಸುವ ಯೋಗಿಯು ಎಲ್ಲಾ ರೀತಿಯಲ್ಲಿ ನಡೆದಾಡುತ್ತಿದ್ದರೂ ನನ್ನಲ್ಲಿಯೇ ಇರುತ್ತಾನೆ."
},
{
"id": "6-32",
"chapter": 6,
"verse": 32,
"kannada": "ಆತ್ಮೌಪಮ್ಯೇನ ಸರ್ವತ್ರ ಸಮಂ ಪಶ್ಯತಿ ಯೋಽರ್ಜುನ | ಸುಖಂ ವಾ ಯದಿ ವಾ ದುಃಖಂ ಸ ಯೋಗೀ ಪರಮೋ ಮತಃ ||",
"transliteration": "ātmaupamyena sarvatra samaṁ paśhyati yo'rjuna sukhaṁ vā yadi vā duḥkhaṁ sa yogī paramo mataḥ",
"meaning": "ಹೇ ಅರ್ಜುನ, ಯಾವ ಯೋಗಿಯು ಸರ್ವಭೂತಗಳಲ್ಲಿ ತನ್ನನ್ನೇ ಕಾಣುತ್ತಾನೆಯೋ (ಆತ್ಮೌಪಮ್ಯದಿಂದ ಸಮದೃಷ್ಟಿಯಿಂದ ನೋಡುತ್ತಾನೆಯೋ), ಸುಖ-ದುಃಖಗಳಲ್ಲಿ ಸಮಬುದ್ಧಿಯಿಂದ ಇರುವನೋ, ಅವನೇ ಉತ್ತಮ ಯೋಗಿಯೆಂದು ನನ್ನ ಮತ."
},
{
"id": "6-33",
"chapter": 6,
"verse": 33,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಯೋಽಯಂ ಯೋಗಸ್ತ್ವಯಾ ಪ್ರೋಕ್ತಃ ಸಾಮ್ಯೇನ ಮಧುಸೂದನ | ಎತಸ್ಯಾಹಂ ನ ಪಶ್ಯಾಮಿ ಚಂಚಲತ್ವಾತ್ಸ್ಥಿತಿಂ ಸ್ಥಿರಾಮ್ ||",
"transliteration": "arjuna uvācha yo'yaṁ yogas tvayā proktaḥ sāmyena madhusūdana etasyāhaṁ na paśhyāmi chañchalatvāt sthitiṁ sthirām",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಮಧುಸೂದನ, ನೀನು ಹೇಳಿದ ಈ ಯೋಗವನ್ನು ಸಮತ್ವದಿಂದ ಪಾಲಿಸುವಲ್ಲಿ, ಚಂಚಲವಾದ ಮನಸ್ಸಿನ ಕಾರಣ, ನಾನು ಸ್ಥಿರ ಸ್ಥಿತಿಯನ್ನು ನೋಡುತ್ತಿಲ್ಲ."
},
{
"id": "6-34",
"chapter": 6,
"verse": 34,
"kannada": "ಚಂಚಲಂ ಹಿ ಮನಃ ಕೃಷ್ಣ ಪ್ರಮಾಥಿ ಬಲವದ್ದೃಢಮ್ | ತಸ್ಯಾಹಂ ನಿಗ್ರಹಂ ಮನ್ಯೇ ವಾಯೋರಿವ ಸುದುಷ್ಕರಮ್ ||",
"transliteration": "chañchalaṁ hi manaḥ kṛiṣhṇa pramāthi balavad dṛiḍham tasyāhaṁ nigrahaṁ manye vāyor iva su-duṣhkaram",
"meaning": "ಹೇ ಕೃಷ್ಣ, ಚಂಚಲವಾದ, ಪ್ರಮಾಥಿಯಾದ, ಬಲಶಾಲಿಯಾದ ಮತ್ತು ದೃಢವಾದ ಮನಸ್ಸನ್ನು ನಿಗ್ರಹಿಸುವುದು ಗಾಳಿಯನ್ನು ಅದುಮಿಡುವಂತೆ ಬಹಳ ಕಷ್ಟವೆಂದು ನಾನು ಭಾವಿಸುತ್ತೇನೆ."
},
{
"id": "6-35",
"chapter": 6,
"verse": 35,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಅಸಂಶಯಂ ಮಹಾಬಾಹೋ ಮನೋ ದುರ್ನಿಗ್ರಹಂ ಚಲಮ್ | ಅಭ್ಯಾಸೇನ ತು ಕೌಂತೇಯ ವೈರಾಗ್ಯೇಣ ಚ ಗೃಹ್ಯತೇ ||",
"transliteration": "śhrī bhagavān uvācha asanśhayaṁ mahā-bāho mano durnigrahaṁ chalam abhyāsena tu kaunteya vairāgyeṇa cha gṛihyate",
"meaning": "ಶ್ರೀಭಗವಂತನು ಹೇಳಿದನು: ಹೇ ಮಹಾಬಾಹುವೇ, ಸಂದೇಹವಿಲ್ಲ, ಮನಸ್ಸು ಚಂಚಲವಾಗಿದ್ದು ನಿಗ್ರಹಿಸಲು ಕಷ್ಟವಾಗಿದೆ. ಆದರೆ, ಹೇ ಕೌಂತೇಯ, ಅಭ್ಯಾಸ ಮತ್ತು ವೈರಾಗ್ಯದಿಂದ ಅದನ್ನು ಗ್ರಹಿಸಲು ಸಾಧ್ಯ."
},
{
"id": "6-36",
"chapter": 6,
"verse": 36,
"kannada": "ಅಸಂಯತಾತ್ಮನಾ ಯೋಗ ದುಷ್ಪ್ರಾಪ ಇತಿ ಮೇ ಮತಿಃ | ವಶ್ಯಾತ್ಮನಾ ತು ಯತತಾ ಶಕ್ಯೋಽವಾಪ್ತುಮುಪಾಯತಃ ||",
"transliteration": "asaṁyatātmanā yoga duṣhprāpa iti me matiḥ vaśhyātmanā tu yatatā śhakyo'vāptum upāyataḥ",
"meaning": "ನನ್ನ ಮತದಲ್ಲಿ, ಅಸಂಯತಾತ್ಮನಿಗೆ ಯೋಗವನ್ನು ಪಡೆಯುವುದು ಕಷ್ಟ. ಆದರೆ ವಶೀಕೃತಾತ್ಮನಾದವನು ಸರಿಯಾದ ಉಪಾಯದಿಂದ ಅದನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯ."
},
{
"id": "6-37",
"chapter": 6,
"verse": 37,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಅಯತಿಃ ಶ್ರದ್ಧಯೋಪೇತೋ ಯೋಗಾಚ್ಚಲಿತಮಾನಸಃ | ಅಪ್ರಾಪ್ಯ ಯೋಗಸಂಸಿದ್ಧಿಂ ಕಾಂ ಗತಿಂ ಕೃಷ್ಣ ಗಚ್ಛತಿ ||",
"transliteration": "arjuna uvācha ayatiḥ śhraddhayopeto yogāch chalita-mānasaḥ aprāpya yoga-saṁsiddhiṁ kāṁ gatiṁ kṛiṣhṇa gachchhati",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಕೃಷ್ಣ, ಶ್ರದ್ಧೆಯುಳ್ಳವನಾದರೂ ಯೋಗದಿಂದ ಚಲಿಸಿದ ಮನಸ್ಸಿನವನಾದ ಅಯತಿ (ಅಸಿದ್ಧ ಯೋಗಿ) ಯೋಗಸಿದ್ಧಿಯನ್ನು ಪಡೆಯದೆ, ಯಾವ ಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ?"
},
{
"id": "6-38",
"chapter": 6,
"verse": 38,
"kannada": "ಕಚ್ಚಿನ್ನೋಭಯವಿಭ್ರಷ್ಟಶ್ಛಿನ್ನಾಭ್ರಮಿವ ನಶ್ಯತಿ | ಅಪ್ರತಿಷ್ಠೋ ಮಹಾಬಾಹೋ ವಿಮೂಢೋ ಬ್ರಹ್ಮಣಃ ಪಥಿ ||",
"transliteration": "kachchin nobhaya-vibhraṣṭaśh chhinnābhram iva naśhyati apratiṣhṭho mahā-bāho vimūḍho brahmaṇaḥ pathi",
"meaning": "ಹೇ ಮಹಾಬಾಹೋ, ಉಭಯವಿಭ್ರಷ್ಟನಾದ (ಯೋಗ ಮತ್ತು ಭೋಗ ಎರಡರಿಂದಲೂ ಭ್ರಷ್ಟನಾದ) ಆತನು ಬ್ರಹ್ಮಪಥದಲ್ಲಿ ವಿಮೂಢನಾಗಿ, ಮೇಘಚ್ಛಿನ್ನವಾದ ಆಕಾಶದಂತೆ ನಾಶವಾಗಿ ಹೋಗುತ್ತಾನೆಯೇ? ನಿನಗೆ ಅವನಲ್ಲಿ ಸ್ಥಿರತೆಯಿಲ್ಲವೇ?"
},
{
"id": "6-39",
"chapter": 6,
"verse": 39,
"kannada": "ಏತನ್ಮೇ ಸಂಶಯಂ ಕೃಷ್ಣ ಛೇತ್ತುಮರ್ಹಸ್ಯಶೇಷತಃ | ತ್ವದನ್ಯಃ ಸಂಶಯಸ್ಯಾಸ್ಯ ಛೇತ್ತಾ ನ ಹ್ಯುಪಪದ್ಯತೇ ||",
"transliteration": "etan me sanśhayaṁ kṛiṣhṇa chhettum arhasy aśheṣhataḥ tvad-anyaḥ sanśhayasyāsya chhettā na hy upapadyate",
"meaning": "ಹೇ ಕೃಷ್ಣ, ನನ್ನ ಈ ಸಂಶಯವನ್ನು ನೀನೇ ಸಂಪೂರ್ಣವಾಗಿ ಛೇದಿಸಬೇಕು. ಯಾಕೆಂದರೆ ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಈ ಸಂಶಯವನ್ನು ಛೇದಿಸುವವನು ಬೇರೆ ಯಾರೂ ಇಲ್ಲ."
},
{
"id": "6-40",
"chapter": 6,
"verse": 40,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಪಾರ್ಥ ನೈವೇಹ ನಾಮುತ್ರ ವಿನಾಶಸ್ತಸ್ಯ ವಿದ್ಯತೇ | ನ ಹಿ ಕಲ್ಯಾಣಕೃತ್ತ್ಕಶ್ಚಿದ್ದುರ್ಗತಿಂ ತಾತ ಗಚ್ಛತಿ ||",
"transliteration": "śhrī bhagavān uvācha pārtha naiveha nāmutra vināśhas tasya vidyate na hi kalyāṇa-kṛit kaśhchid durgatiṁ tāta gachchhati",
"meaning": "ಶ್ರೀಭಗವಂತನು ಹೇಳಿದನು: ಹೇ ಪಾರ್ಥ, ಇಹದಲ್ಲಿಯೂ ಪರದಲ್ಲಿಯೂ ಅವನಿಗೆ ನಾಶವಿಲ್ಲ. ಯಾಕೆಂದರೆ, ಹೇ ತಾತ, ಯಾವ ಕಲ್ಯಾಣಕರ್ತನೂ ದುರ್ಗತಿಯನ್ನು ಪಡೆಯುವುದಿಲ್ಲ."
},
{
"id": "6-41",
"chapter": 6,
"verse": 41,
"kannada": "ಪ್ರಾಪ್ಯ ಪುಣ್ಯಕೃತಾಂ ಲೋಕಾನುಷಿತ್ವಾ ಶಾಶ್ವತೀಃ ಸಮಾಃ | ಶುಚೀನಾಂ ಶ್ರೀಮತಾಂ ಗೇಹೇ ಯೋಗಭ್ರಷ್ಟೋಽಭಿಜಾಯತೇ ||",
"transliteration": "prāpya puṇya-kṛitāṁ lokān uṣhitvā śhāśhvatīḥ samāḥ śhuchīnāṁ śhrīmatāṁ gehe yoga-bhraṣhṭo bhijāyate",
"meaning": "ಯೋಗಭ್ರಷ್ಟನು ಪುಣ್ಯವಂತರ ಲೋಕವನ್ನು ಪಡೆದು ಅಲ್ಲಿ ಅನೇಕ ವರ್ಷಗಳ ಕಾಲ ವಾಸಿಸಿ, ಶುಚಿ ಮತ್ತು ಶ್ರೀಮಂತರ ಕುಟುಂಬದಲ್ಲಿ ಜನಿಸುತ್ತಾನೆ."
},
{
"id": "6-42",
"chapter": 6,
"verse": 42,
"kannada": "ಅಥವಾ ಯೋಗಿನಾಮೇವ ಕುಲೇ ಭವತಿ ಧೀಮತಾಮ್ | ಎತದ್ಧಿ ದುರ್ಲಭತರಂ ಲೋಕೇ ಜನ್ಮ ಯದೀದೃಶಮ್ ||",
"transliteration": "athavā yoginām eva kule bhavati dhīmatām etad dhi durlabhataraṁ loke janma yad īdṛiśham",
"meaning": "ಅಥವಾ ಬುದ್ಧಿವಂತ ಯೋಗಿಗಳ ಕುಲದಲ್ಲಿಯೇ ಜನಿಸುತ್ತಾನೆ. ಯಾಕೆಂದರೆ ಈ ರೀತಿಯ ಜನ್ಮವು ಈ ಲೋಕದಲ್ಲಿ ಬಹಳ ದುರ್ಲಭ."
},
{
"id": "6-43",
"chapter": 6,
"verse": 43,
"kannada": "ತತ್ರ ತಂ ಬುದ್ಧಿಸಂಯೋಗಂ ಲಭತೇ ಪೌರ್ವದೇಹಿಕಮ್ | ಯತತೇ ಚ ತತೋ ಭೂಯಃ ಸಂಸಿದ್ಧೌ ಕುರುನಂದನ ||",
"transliteration": "tatra taṁ buddhi-saṁyogaṁ labhate paurva-dehikam yatate cha tato bhūyaḥ saṁsiddhau kuru-nandana",
"meaning": "ಹೇ ಕುರುನಂದನ, ಅಲ್ಲಿ ಅವನು ಪೂರ್ವದೇಹದ ಬುದ್ಧಿಸಂಯೋಗವನ್ನು ಪಡೆದು, ಮತ್ತೆ ಸಿದ್ಧಿಯತ್ತ ಪ್ರಯತ್ನಿಸುತ್ತಾನೆ."
},
{
"id": "6-44",
"chapter": 6,
"verse": 44,
"kannada": "ಪೂರ್ವಾಭ್ಯಾಸೇನ ತೇನೈವ ಹ್ರಿಯತೇ ಹ್ಯವಶೋಽಪಿ ಸಃ | ಜಿಜ್ಞಾಸುರಪಿ ಯೋಗಸ್ಯ ಶಬ್ದಬ್ರಹ್ಮಾತಿವರ್ತತೇ ||",
"transliteration": "pūrvābhyāsena tenaiva hriyate hyavaśho 'pi saḥ jijñāsur api yogasya śhabda-brahmātivartate",
"meaning": "ಪೂರ್ವಾಭ್ಯಾಸದಿಂದ ಅವನು ಸ್ವತಃ ಅನಿಚ್ಛೆಯಿಂದಲೂ ಆಕರ್ಷಿತನಾಗುತ್ತಾನೆ. ಯೋಗದ ಬಗ್ಗೆ ಕೇವಲ ಜಿಜ್ಞಾಸುವಾಗಿದ್ದರೂ, ಅವನು ಶಬ್ದಬ್ರಹ್ಮವನ್ನು (ವೇದಗಳನ್ನು) ಅತಿಕ್ರಮಿಸುತ್ತಾನೆ."
},
{
"id": "6-45",
"chapter": 6,
"verse": 45,
"kannada": "ಪ್ರಯತ್ನಾದ್ಯತಮಾನಸ್ತು ಯೋಗೀ ಸಂಶುದ್ಧಕಿಲ್ಬಿಷಃ | ಅನೇಕಜನ್ಮಸಂಸಿದ್ಧಸ್ತತೋ ಯಾತಿ ಪರಾಂ ಗತಿಮ್ ||",
"transliteration": "prayatnād yatamānas tu yogī sanśhuddha-kilbiṣhaḥ aneka-janma-saṁsiddhas tato yāti parāṁ gatim",
"meaning": "ಪ್ರಯತ್ನಪೂರ್ವಕವಾಗಿ ಅಭ್ಯಾಸ ಮಾಡುವ ಯೋಗಿಯು ಅನೇಕ ಜನ್ಮಗಳ ಸಂಸಿದ್ಧಿಯಿಂದ ಪಾಪರಹಿತನಾಗಿ, ಅಂತಿಮವಾಗಿ ಪರಮಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "6-46",
"chapter": 6,
"verse": 46,
"kannada": "ತಪಸ್ವಿಭ್ಯೋಽಧಿಕೋ ಯೋಗೀ ಜ್ಞಾನಿಭ್ಯೋಽಪಿ ಮತೋಽಧಿಕಃ | ಕರ್ಮಿಭ್ಯಶ್ಚಾಧಿಕೋ ಯೋಗೀ ತಸ್ಮಾದ್ಯೋಗೀ ಭವಾರ್ಜುನ ||",
"transliteration": "tapasvibhyo 'dhiko yogī jñānibhyo 'pi mato 'dhikaḥ karmibhyaśh chādhiko yogī tasmād yogī bhavārjuna",
"meaning": "ಯೋಗಿಯು ತಪಸ್ವಿಗಳಿಗಿಂತಲೂ, ಜ್ಞಾನಿಗಳಿಗಿಂತಲೂ ಮತ್ತು ಕರ್ಮಿಗಳಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠನೆಂದು ನನ್ನ ಮತ. ಆದ್ದರಿಂದ, ಹೇ ಅರ್ಜುನ, ಯೋಗಿಯಾಗು."
},
{
"id": "6-47",
"chapter": 6,
"verse": 47,
"kannada": "ಯೋಗಿನಾಮಪಿ ಸರ್ವೇಷಾಂ ಮದ್ಗತೇನಾಂತರಾತ್ಮನಾ | ಶ್ರದ್ಧಾವಾನ್ಭಜತೇ ಯೋ ಮಾಂ ಸ ಮೇ ಯುಕ್ತತಮೋ ಮತಃ ||",
"transliteration": "yoginām api sarveṣhāṁ mad-gatena antar-ātmanā śhraddhāvān bhajate yo māṁ sa me yukta-tamo mataḥ",
"meaning": "ಎಲ್ಲ ಯೋಗಿಗಳಲ್ಲಿ, ಯಾರು ಅಂತರಾತ್ಮನಿಂದ ನನ್ನಲ್ಲಿಯೇ ನೆಲೆಗೊಂಡು, ಶ್ರದ್ಧೆಯಿಂದ ನನ್ನನ್ನು ಭಜಿಸುತ್ತಾರೋ, ಅವರೇ ನನ್ನ ಮತದಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಯೋಗಿಯಾಗಿದ್ದಾರೆ."
},

    ]
  },
  {
    id: 7,
    title: "Jnana Vijnana Yoga",
    kannadaTitle: "ಜ್ಞಾನ ವಿಜ್ಞಾನ ಯೋಗ",
    description: "ಜ್ಞಾನ ಮತ್ತು ವಿಜ್ಞಾನ - Knowledge and wisdom",
    totalVerses: 30,
    verses: [
{
"id": "7-1",
"chapter": 7,
"verse": 1,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಮಯ್ಯಾಸಕ್ತಮನಾಃ ಪಾರ್ಥ ಯೋಗಂ ಯುಂಜನ್ಮದಾಶ್ರಯಃ | ಅಸಂಶಯಂ ಸಮಗ್ರಂ ಮಾಂ ಯಥಾ ಜ್ಞಾಸ್ಯಸಿ ತಚ್ಛೃಣು ||",
"transliteration": "śhrī bhagavān uvācha mayyāsakta-manāḥ pārtha yogaṁ yuñjan mad-āśhrayaḥ asanśhayaṁ samagraṁ māṁ yathā jñāsyasi tach chhṛiṇu",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಹೇ ಪಾರ್ಥ, ನನ್ನಲ್ಲಿ ಮನಸ್ಸನ್ನು ಲಗ್ನ ಮಾಡಿಕೊಂಡು, ನನ್ನ ಆಶ್ರಯದಿಂದ ಯೋಗವನ್ನು ಅಭ್ಯಾಸ ಮಾಡುವವನು, ಸಂಶಯವಿಲ್ಲದೆ, ಸಮಗ್ರವಾಗಿ ನನ್ನನ್ನು ಹೇಗೆ ತಿಳಿಯುತ್ತಾನೆಂಬುದನ್ನು ಕೇಳು."
},
{
"id": "7-2",
"chapter": 7,
"verse": 2,
"kannada": "ಜ್ಞಾನಂ ತೇಽಹಂ ಸವಿಜ್ಞಾನಮಿದಂ ವಕ್ಷ್ಯಾಮ್ಯಶೇಷತಃ | ಯಜ್ಜ್ಞಾತ್ವಾ ನೇಹ ಭೂಯೋಽನ್ಯಜ್ಜ್ಞಾತವ್ಯಮವಶಿಷ್ಯತೇ ||",
"transliteration": "jñānaṁ te'haṁ sa-vijñānam idaṁ vakṣhyāmy aśheṣhataḥ yaj jñātvā neha bhūyo'nyaj jñātavyam avaśhiṣhyate",
"meaning": "ಜ್ಞಾನ ಮತ್ತು ವಿಜ್ಞಾನ ಸಹಿತವಾದ ಈ ಜ್ಞಾನವನ್ನು ನಾನು ನಿನಗೆ ಪೂರ್ಣವಾಗಿ ಹೇಳುತ್ತೇನೆ. ಇದನ್ನು ತಿಳಿದಮೇಲೆ ಈ ಲೋಕದಲ್ಲಿ ತಿಳಿಯಬೇಕಾದ ಬೇರೆ ಯಾವುದೂ ಉಳಿಯುವುದಿಲ್ಲ."
},
{
"id": "7-3",
"chapter": 7,
"verse": 3,
"kannada": "ಮನುಷ್ಯಾಣಾಂ ಸಹಸ್ರೇಷು ಕಶ್ಚಿದ್ಯತತಿ ಸಿದ್ಧಯೇ | ಯತತಾಮಪಿ ಸಿದ್ಧಾನಾಂ ಕಶ್ಚಿನ್ಮಾಂ ವೇತ್ತಿ ತತ್ತ್ವತಃ ||",
"transliteration": "manuṣhyāṇāṁ sahasreṣhu kaśhchid yatati siddhaye yatatām api siddhānāṁ kaśhchin māṁ vetti tattvataḥ",
"meaning": "ಸಾವಿರಾರು ಮನುಷ್ಯರಲ್ಲಿ ಒಬ್ಬನು ಸಿದ್ಧಿಯನ್ನು ಪಡೆಯಲು ಪ್ರಯತ್ನಿಸುತ್ತಾನೆ. ಅಂತಹ ಪ್ರಯತ್ನಶೀಲರಲ್ಲಿ ಒಬ್ಬನು ಸಿದ್ಧಿಯನ್ನು ಪಡೆದರೂ, ಅವರಲ್ಲಿ ಒಬ್ಬನೇ ನನ್ನನ್ನು ತತ್ತ್ವತಃ ತಿಳಿಯುತ್ತಾನೆ."
},
{
"id": "7-4",
"chapter": 7,
"verse": 4,
"kannada": "ಭೂಮಿರಾಪೋಽನಲೋ ವಾಯುಃ ಖಂ ಮನೋ ಬುದ್ಧಿರೇವ ಚ | ಅಹಂಕಾರ ಇತೀಯಂ ಮೇ ಭಿನ್ನಾ ಪ್ರಕೃತಿರಷ್ಟಧಾ ||",
"transliteration": "bhūmir-āpo'nalo vāyuḥ khaṁ mano buddhir eva cha ahankāra itīyaṁ me bhinnā prakṛitir aṣhṭadhā",
"meaning": "ಭೂಮಿ, ನೀರು, ಅಗ್ನಿ, ವಾಯು, ಆಕಾಶ, ಮನಸ್ಸು, ಬುದ್ಧಿ ಮತ್ತು ಅಹಂಕಾರ - ಇದು ನನ್ನ ಭಿನ್ನವಾದ ಅಷ್ಟಧಾ ಪ್ರಕೃತಿಯಾಗಿದೆ."
},
{
"id": "7-5",
"chapter": 7,
"verse": 5,
"kannada": "ಅಪರೇಯಮಿತಸ್ತ್ವನ್ಯಾಂ ಪ್ರಕೃತಿಂ ವಿದ್ಧಿ ಮೇ ಪರಾಮ್ | ಜೀವಭೂತಾಂ ಮಹಾಬಾಹೋ ಯಯೇದಂ ಧಾರ್ಯತೇ ಜಗತ್ ||",
"transliteration": "apareyam itas tv anyāṁ prakṛitiṁ viddhi me parām jīva-bhūtāṁ mahā-bāho yayedaṁ dhāryate jagat",
"meaning": "ಹೇ ಮಹಾಬಾಹೋ, ಇದಕ್ಕಿಂತ ಬೇರೆಯಾದ, ಜೀವರೂಪಿಣಿಯಾದ ನನ್ನ ಪರಾ ಪ್ರಕೃತಿಯನ್ನು ತಿಳಿ. ಅದರಿಂದ ಈ ಜಗತ್ತು ಧಾರಣೆಗೊಳ್ಳುತ್ತದೆ."
},
{
"id": "7-6",
"chapter": 7,
"verse": 6,
"kannada": "ಏತದ್ಯೋನೀನಿ ಭೂತಾನಿ ಸರ್ವಾಣೀತ್ಯುಪಧಾರಯ | ಅಹಂ ಕೃತ್ಸ್ನಸ್ಯ ಜಗತಃ ಪ್ರಭವಃ ಪ್ರಲಯಸ್ತಥಾ ||",
"transliteration": "etad-yonīni bhūtāni sarvāṇīty upadhāraya ahaṁ kṛitsnasya jagataḥ prabhavaḥ pralayas tathā",
"meaning": "ಎಲ್ಲ ಭೂತಗಳೂ ಈ ಎರಡು ಪ್ರಕೃತಿಗಳಿಂದ ಹುಟ್ಟಿದವು ಎಂದು ತಿಳಿ. ಈ ಸಮಸ್ತ ಜಗತ್ತಿಗೂ ನಾನೇ ಉತ್ಪತ್ತಿ ಮತ್ತು ಪ್ರಳಯದ ಕಾರಣನಾಗಿದ್ದೇನೆ."
},
{
"id": "7-7",
"chapter": 7,
"verse": 7,
"kannada": "ಮತ್ತಃ ಪರತರಂ ನಾನ್ಯತ್ಕಿಂಚಿದಸ್ತಿ ಧನಂಜಯ | ಮಯಿ ಸರ್ವಮಿದಂ ಪ್ರೋತಂ ಸೂತ್ರೇ ಮಣಿಗಣಾ ಇವ ||",
"transliteration": "mattaḥ parataraṁ nānyat kiṁchid asti dhanañjaya mayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",
"meaning": "ಹೇ ಧನಂಜಯ, ನನ್ನಿಂದ ಭಿನ್ನವಾದ ಬೇರೆ ಯಾವುದೂ ಇಲ್ಲ. ಎಲ್ಲವೂ ನನ್ನಲ್ಲಿಯೇ ಪ್ರೋತವಾಗಿದೆ, ಸೂತ್ರದಲ್ಲಿ ಮಣಿಗಳು ಇರುವಂತೆ."
},
{
"id": "7-8",
"chapter": 7,
"verse": 8,
"kannada": "ರಸೋಽಹಮಪ್ಸು ಕೌಂತೇಯ ಪ್ರಭಾಸ್ಮಿ ಶಶಿಸೂರ್ಯಯೋಃ | ಪ್ರಣವಃ ಸರ್ವವೇದೇಷು ಶಬ್ದಃ ಖೇ ಪೌರುಷಂ ನೃಷು ||",
"transliteration": "raso'ham apsu kaunteya prabhāsmi śhaśhi-sūryayoḥ praṇavaḥ sarva-vedeṣhu śhabdaḥ khe pauruṣhaṁ nṛiṣhu",
"meaning": "ಹೇ ಕೌಂತೇಯ, ನಾನು ನೀರಿನ ರಸ, ಸೂರ್ಯಚಂದ್ರರ ಪ್ರಭೆ, ಸರ್ವವೇದಗಳಲ್ಲಿ ಓಂಕಾರ, ಆಕಾಶದಲ್ಲಿ ಶಬ್ದ ಮತ್ತು ಮನುಷ್ಯರಲ್ಲಿ ಪೌರುಷವಾಗಿದ್ದೇನೆ."
},
{
"id": "7-9",
"chapter": 7,
"verse": 9,
"kannada": "ಪುಣ್ಯೋ ಗಂಧಃ ಪೃಥಿವ್ಯಾಂ ಚ ತೇಜಶ್ಚಾಸ್ಮಿ ವಿಭಾವಸೌ | ಜೀವನಂ ಸರ್ವಭೂತೇಷು ತಪಶ್ಚಾಸ್ಮಿ ತಪಸ್ವಿಷು ||",
"transliteration": "puṇyo gandhaḥ pṛithivyāṁ cha tejaśh chāsmi vibhāvasau jīvanaṁ sarva-bhūteṣhu tapaśh chāsmi tapasviṣhu",
"meaning": "ನಾನು ಭೂಮಿಯಲ್ಲಿ ಪುಣ್ಯಗಂಧ, ಅಗ್ನಿಯಲ್ಲಿ ತೇಜಸ್ಸು, ಸರ್ವಭೂತಗಳಲ್ಲಿ ಜೀವನ ಮತ್ತು ತಪಸ್ವಿಗಳಲ್ಲಿ ತಪಸ್ಸಾಗಿದ್ದೇನೆ."
},
{
"id": "7-10",
"chapter": 7,
"verse": 10,
"kannada": "ಬೀಜಂ ಮಾಂ ಸರ್ವಭೂತಾನಾಂ ವಿದ್ಧಿ ಪಾರ್ಥ ಸನಾತನಮ್ | ಬುದ್ಧಿರ್ಬುದ್ಧಿಮತಾಮಸ್ಮಿ ತೇಜಸ್ತೇಜಸ್ವಿನಾಮಹಮ್ ||",
"transliteration": "bījaṁ māṁ sarva-bhūtānāṁ viddhi pārtha sanātanam buddhir buddhi-matām asmi tejas tejasvinām aham",
"meaning": "ಹೇ ಪಾರ್ಥ, ಸಕಲ ಭೂತಗಳ ಸನಾತನ ಬೀಜವನ್ನು ನಾನಾಗಿ ತಿಳಿ. ಬುದ್ಧಿವಂತರ ಬುದ್ಧಿ ಮತ್ತು ತೇಜಸ್ವಿಗಳ ತೇಜಸ್ಸನ್ನು ನಾನಾಗಿದ್ದೇನೆ."
},
{
"id": "7-11",
"chapter": 7,
"verse": 11,
"kannada": "ಬಲಂ ಬಲವತಾಂ ಚಾಹಂ ಕಾಮರಾಗವಿವರ್ಜಿತಮ್ | ಧರ್ಮಾವಿರುದ್ಧೋ ಭೂತೇಷು ಕಾಮೋಽಸ್ಮಿ ಭರತರ್ಷಭ ||",
"transliteration": "balaṁ bala-vatāṁ chāhaṁ kāma-rāga-vivarjitam dharmāviruddho bhūteṣhu kāmo'smi bharatarṣhabha",
"meaning": "ಬಲವಂತರಲ್ಲಿ ಕಾಮರಾಗರಹಿತವಾದ ಬಲವನ್ನು ನಾನಾಗಿದ್ದೇನೆ. ಭೂತಗಳಲ್ಲಿ ಧರ್ಮಾವಿರುದ್ಧವಲ್ಲದ ಕಾಮವನ್ನು ನಾನಾಗಿದ್ದೇನೆ, ಹೇ ಭರತರ್ಷಭ."
},
{
"id": "7-12",
"chapter": 7,
"verse": 12,
"kannada": "ಯೇ ಚೈವ ಸಾತ್ತ್ವಿಕಾ ಭಾವಾ ರಾಜಸಾಸ್ತಾಮಸಾಶ್ಚ ಯೇ | ಮತ್ತ ಏವೇತಿ ತಾನ್ವಿದ್ಧಿ ನ ತ್ವಹಂ ತೇಷು ತೇ ಮಯಿ ||",
"transliteration": "ye chaiva sāttvikā bhāvā rājasās tāmasāśh cha ye matta eveti tān viddhi na tv ahaṁ teṣhu te mayi",
"meaning": "ಸಾತ್ತ್ವಿಕ, ರಾಜಸ ಮತ್ತು ತಾಮಸ ಭಾವಗಳೆಲ್ಲವೂ ನನ್ನಿಂದಲೇ ಹುಟ್ಟಿದವು ಎಂದು ತಿಳಿ. ಆದರೆ ನಾನು ಅವುಗಳಲ್ಲಿಲ್ಲ, ಅವು ನನ್ನಲ್ಲಿವೆ."
},
{
"id": "7-13",
"chapter": 7,
"verse": 13,
"kannada": "ತ್ರಿಭಿರ್ಗುಣಮಯೈರ್ಭಾವೈರೇಭಿಃ ಸರ್ವಮಿದಂ ಜಗತ್ | ಮೋಹಿತಂ ನಾಭಿಜಾನಾತಿ ಮಾಮೇಭ್ಯಃ ಪರಮವ್ಯಯಮ್ ||",
"transliteration": "tribhir guṇa-mayair bhāvair ebhiḥ sarvam idaṁ jagat mohitaṁ nābhijānāti mām ebhyaḥ param avyayam",
"meaning": "ಈ ತ್ರಿಗುಣಮಯ ಭಾವಗಳಿಂದ ಮೋಹಿತವಾದ ಈ ಜಗತ್ತು ನನ್ನನ್ನು ಅವುಗಳಿಗಿಂತ ಪರಮವಾದ, ಅವ್ಯಯನಾದವನೆಂದು ತಿಳಿಯಲಾರದು."
},
{
"id": "7-14",
"chapter": 7,
"verse": 14,
"kannada": "ದೈವೀ ಹ್ಯೇಷಾ ಗುಣಮಯೀ ಮಮ ಮಾಯಾ ದುರತ್ಯಯಾ | ಮಾಮೇವ ಯೇ ಪ್ರಪದ್ಯಂತೇ ಮಾಯಾಮೇತಾಂ ತರಂತಿ ತೇ ||",
"transliteration": "daivī hyeṣhā guṇa-mayī mama māyā duratyayā mām eva ye prapadyante māyām etāṁ taranti te",
"meaning": "ನನ್ನ ಈ ದೈವೀ ಸ್ವರೂಪದ, ಗುಣಮಯಿಯಾದ ಮಾಯೆಯನ್ನು ದಾಟುವುದು ಕಷ್ಟ. ಆದರೆ ಯಾರು ನನ್ನನ್ನು ಶರಣುಹೊಂದುತ್ತಾರೋ, ಅವರು ಈ ಮಾಯೆಯನ್ನು ದಾಟುತ್ತಾರೆ."
},
{
"id": "7-15",
"chapter": 7,
"verse": 15,
"kannada": "ನ ಮಾಂ ದುಷ್ಕೃತಿನೋ ಮೂಢಾಃ ಪ್ರಪದ್ಯಂತೇ ನರಾಧಮಾಃ | ಮಾಯಯಾಽಪಹೃತಜ್ಞಾನಾ ಆಸುರಂ ಭಾವಮಾಶ್ರಿತಾಃ ||",
"transliteration": "na māṁ duṣhkṛitino mūḍhāḥ prapadyante narādhamāḥ māyayā'pahṛita-jñānā āsuraṁ bhāvam āśhritāḥ",
"meaning": "ದುಷ್ಕರ್ಮಿಗಳಾದ, ಮೂಢರಾದ, ನರಾಧಮರಾದ, ಮಾಯೆಯಿಂದ ಅಪಹೃತಜ್ಞಾನರಾದ, ಆಸುರ ಭಾವವನ್ನು ಆಶ್ರಯಿಸಿದವರು ನನ್ನನ್ನು ಶರಣಾಗುವುದಿಲ್ಲ."
},
{
"id": "7-16",
"chapter": 7,
"verse": 16,
"kannada": "ಚತುರ್ವಿಧಾ ಭಜಂತೇ ಮಾಂ ಜನಾಃ ಸುಕೃತಿನೋಽರ್ಜುನ | ಆರ್ತೋ ಜಿಜ್ಞಾಸುರರ್ಥಾರ್ಥೀ ಜ್ಞಾನೀ ಚ ಭರತರ್ಷಭ ||",
"transliteration": "chatur-vidhā bhajante māṁ janāḥ sukṛitino 'rjuna ārto jijñāsur arthārthī jñānī cha bharatarṣhabha",
"meaning": "ಹೇ ಭರತರ್ಷಭ, ನಾಲ್ಕು ವಿಧದ ಸುಕೃತಿಯುಳ್ಳ ಜನರು ನನ್ನನ್ನು ಭಜಿಸುತ್ತಾರೆ: ಆರ್ತ, ಜಿಜ್ಞಾಸು, ಅರ್ಥಾರ್ಥಿ ಮತ್ತು ಜ್ಞಾನಿ."
},
{
"id": "7-17",
"chapter": 7,
"verse": 17,
"kannada": "ತೇಷಾಂ ಜ್ಞಾನೀ ನಿತ್ಯಯುಕ್ತ ಏಕಭಕ್ತಿರ್ವಿಶಿಷ್ಯತೇ | ಪ್ರಿಯೋ ಹಿ ಜ್ಞಾನಿನೋಽತ್ಯರ್ಥಮಹಂ ಸ ಚ ಮಮ ಪ್ರಿಯಃ ||",
"transliteration": "teṣhāṁ jñānī nitya-yukta eka-bhaktir viśhiṣhyate priyo hi jñānino 'tyartham ahaṁ sa cha mama priyaḥ",
"meaning": "ಅವರಲ್ಲಿ ಜ್ಞಾನಿಯು ನಿರಂತರ ಯುಕ್ತನಾಗಿ, ಏಕಭಕ್ತಿಯಿಂದ ಶ್ರೇಷ್ಠನಾಗಿದ್ದಾನೆ. ಯಾಕೆಂದರೆ ನಾನು ಜ್ಞಾನಿಗೆ ಅತ್ಯಂತ ಪ್ರಿಯನಾಗಿದ್ದೇನೆ ಮತ್ತು ಅವನೂ ನನಗೆ ಪ್ರಿಯನಾಗಿದ್ದಾನೆ."
},
{
"id": "7-18",
"chapter": 7,
"verse": 18,
"kannada": "ಉದಾರಾಃ ಸರ್ವ ಏವೈತೇ ಜ್ಞಾನೀ ತ್ವಾತ್ಮೈವ ಮೇ ಮತಮ್ | ಆಸ್ಥಿತಃ ಸ ಹಿ ಯುಕ್ತಾತ್ಮಾ ಮಾಮೇವಾನುತ್ತಮಾಂ ಗತಿಮ್ ||",
"transliteration": "udārāḥ sarva evaite jñānī tv ātmaiva me matam āsthitaḥ sa hi yuktātmā mām evānuttamāṁ gatim",
"meaning": "ಎಲ್ಲರೂ ಉದಾರರು; ಆದರೆ ಜ್ಞಾನಿಯೇ ನನ್ನ ಆತ್ಮಸ್ವರೂಪನೆಂದು ನನ್ನ ಮತ. ಯಾಕೆಂದರೆ ಅವನು ಯುಕ್ತಾತ್ಮನಾಗಿ ನನ್ನಲ್ಲಿಯೇ ನೆಲೆಗೊಂಡು, ಅನುತ್ತಮ ಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "7-19",
"chapter": 7,
"verse": 19,
"kannada": "ಬಹೂನಾಂ ಜನ್ಮನಾಮಂತೇ ಜ್ಞಾನವಾನ್ಮಾಂ ಪ್ರಪದ್ಯತೇ | ವಾಸುದೇವಃ ಸರ್ವಮಿತಿ ಸ ಮಹಾತ್ಮಾ ಸುದುರ್ಲಭಃ ||",
"transliteration": "bahūnāṁ janmanām ante jñānavān māṁ prapadyate vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ",
"meaning": "ಅನೇಕ ಜನ್ಮಗಳ ಕೊನೆಯಲ್ಲಿ, 'ವಾಸುದೇವನೇ ಸರ್ವವು' ಎಂದು ತಿಳಿದ ಜ್ಞಾನವಂತನು ನನ್ನನ್ನು ಶರಣು ಹೊಂದುತ್ತಾನೆ. ಅಂತಹ ಮಹಾತ್ಮನು ಬಹಳ ದುರ್ಲಭ."
},
{
"id": "7-20",
"chapter": 7,
"verse": 20,
"kannada": "ಕಾಮೈಸ್ತೈಸ್ತೈರ್ಹೃತಜ್ಞಾನಾಃ ಪ್ರಪದ್ಯಂತೇಽನ್ಯದೇವತಾಃ | ತಂ ತಂ ನಿಯಮಮಾಸ್ಥಾಯ ಪ್ರಕೃತ್ಯಾ ನಿಯತಾಃ ಸ್ವಯಾ ||",
"transliteration": "kāmais tais tair hṛita-jñānāḥ prapadyante 'nya-devatāḥ taṁ taṁ niyamam āsthāya prakṛityā niyatāḥ svayā",
"meaning": "ಕಾಮಗಳಿಂದ ಮೋಹಿತರಾಗಿ, ಜ್ಞಾನಹೀನರಾದವರು ಇತರ ದೇವತೆಗಳನ್ನು ಶರಣಾಗುತ್ತಾರೆ. ತಮ್ಮ ಸ್ವಭಾವದಿಂದ ನಿಯಮಿತರಾಗಿ, ತಮ್ಮ ತಮ್ಮ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸುತ್ತಾರೆ."
},
{
"id": "7-21",
"chapter": 7,
"verse": 21,
"kannada": "ಯೋ ಯೋ ಯಾಂ ಯಾಂ ತನುಂ ಭಕ್ತಃ ಶ್ರದ್ಧಯಾರ್ಚಿತುಮಿಚ್ಛತಿ | ತಸ್ಯ ತಸ್ಯಾಚಲಾಂ ಶ್ರದ್ಧಾಂ ತಾಮೇವ ವಿದಧಾಮ್ಯಹಮ್ ||",
"transliteration": "yo yo yāṁ yāṁ tanuṁ bhaktaḥ śhraddhayārchitum ichchhati tasya tasyāchalāṁ śhraddhāṁ tām eva vidadhāmy aham",
"meaning": "ಯಾವ ಯಾವ ಭಕ್ತನು ಯಾವ ಯಾವ ದೇವತೆಯನ್ನು ಶ್ರದ್ಧೆಯಿಂದ ಆರಾಧಿಸಲು ಇಚ್ಛಿಸುತ್ತಾನೋ, ಅವನ ಆ ಅಚಲ ಶ್ರದ್ಧೆಯನ್ನು ನಾನೇ ನೆಲೆಗೊಳಿಸುತ್ತೇನೆ."
},
{
"id": "7-22",
"chapter": 7,
"verse": 22,
"kannada": "ಸ ತಯಾ ಶ್ರದ್ಧಯಾ ಯುಕ್ತಸ್ತಸ್ಯಾರಾಧನಮೀಹತೇ | ಲಭತೇ ಚ ತತಃ ಕಾಮಾನ್ಮಯೈವ ವಿಹಿತಾನ್ಹಿ ತಾನ್ ||",
"transliteration": "sa tayā śhraddhayā yuktas tasyārādhanam īhate labhate cha tataḥ kāmān mayaiva vihitān hi tān",
"meaning": "ಅಂತಹವನು ಆ ಶ್ರದ್ಧೆಯಿಂದ ಯುಕ್ತನಾಗಿ ಆ ದೇವತೆಯ ಆರಾಧನೆಯನ್ನು ಮಾಡುತ್ತಾನೆ ಮತ್ತು ನನ್ನಿಂದಲೇ ನಿಯಮಿತವಾದ ಆ ಆಶಯಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "7-23",
"chapter": 7,
"verse": 23,
"kannada": "ಅಂತವತ್ತು ಫಲಂ ತೇಷಾಂ ತದ್ಭವತ್ಯಲ್ಪಮೇಧಸಾಮ್ | ದೇವಾನ್ದೇವಯಜೋ ಯಾನ್ತಿ ಮದ್ಭಕ್ತಾ ಯಾನ್ತಿ ಮಾಮಪಿ ||",
"transliteration": "anta-vat tu phalaṁ teṣhāṁ tad bhavaty alpa-medhasām devān deva-yajo yānti mad-bhaktā yānti mām api",
"meaning": "ಆದರೆ ಅಲ್ಪಬುದ್ಧಿಯವರಿಗೆ ಆ ಫಲ ಅಂತ್ಯವುಳ್ಳದ್ದಾಗಿರುತ್ತದೆ. ದೇವತೆಗಳನ್ನು ಉಪಾಸಿಸುವವರು ದೇವತೆಗಳಿಗೆ ಹೋಗುತ್ತಾರೆ; ನನ್ನ ಭಕ್ತರು ನನ್ನನ್ನೇ ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "7-24",
"chapter": 7,
"verse": 24,
"kannada": "ಅವ್ಯಕ್ತಂ ವ್ಯಕ್ತಿಮಾಪನ್ನಂ ಮನ್ಯಂತೇ ಮಾಮಬುದ್ಧಯಃ | ಪರಂ ಭಾವಮಜಾನಂತೋ ಮಮಾವ್ಯಯಮನುತ್ತಮಮ್ ||",
"transliteration": "avyaktaṁ vyaktim āpannaṁ manyante mām abuddhayaḥ paraṁ bhāvam ajānanto mamāvyayam anuttamam",
"meaning": "ಅಬುದ್ಧಿಜನರು ನನ್ನನ್ನು ಅವ್ಯಕ್ತನಾದವನು ವ್ಯಕ್ತಸ್ವರೂಪವನ್ನು ಪಡೆದವನಾಗಿ ತಿಳಿಯುತ್ತಾರೆ. ನನ್ನ ಪರಮ, ಅವ್ಯಯ, ಅನುತ್ತಮ ಸ್ವರೂಪವನ್ನು ಅರಿಯರು."
},
{
"id": "7-25",
"chapter": 7,
"verse": 25,
"kannada": "ನಾಹಂ ಪ್ರಕಾಶಃ ಸರ್ವಸ್ಯ ಯೋಗಮಾಯಾಸಮಾವೃತಃ | ಮೂಢೋಽಯಂ ನಾಭಿಜಾನಾತಿ ಲೋಕೋ ಮಾಮಜಮವ್ಯಯಮ್ ||",
"transliteration": "nāhaṁ prakāśhaḥ sarvasya yoga-māyā-samāvṛitaḥ mūḍho 'yaṁ nābhijānāti loko mām ajam avyayam",
"meaning": "ನಾನು ಯೋಗಮಾಯೆಯಿಂದ ಆವೃತನಾಗಿರುವುದರಿಂದ ಎಲ್ಲರಿಗೂ ಪ್ರಕಾಶಿಸುವವನಲ್ಲ. ಈ ಮೂಢ ಲೋಕವು ಅಜನೂ ಅವ್ಯಯನೂ ಆದ ನನ್ನನ್ನು ತಿಳಿಯಲಾರದು."
},
{
"id": "7-26",
"chapter": 7,
"verse": 26,
"kannada": "ವೇದಾಹಂ ಸಮತೀತಾನಿ ವರ್ತಮಾನಾನಿ ಚಾರ್ಜುನ | ಭವಿಷ್ಯಾಣಿ ಚ ಭೂತಾನಿ ಮಾಂ ತು ವೇದ ನ ಕಶ್ಚನ ||",
"transliteration": "vedāhaṁ samatītāni vartamānāni chārjuna bhaviṣhyāṇi cha bhūtāni māṁ tu veda na kaśhchana",
"meaning": "ಹೇ ಅರ್ಜುನ, ಭೂತಗಳ ಭೂತ, ವರ್ತಮಾನ ಮತ್ತು ಭವಿಷ್ಯತ್ತುಗಳನ್ನು ನಾನು ತಿಳಿದಿದ್ದೇನೆ. ಆದರೆ ನನ್ನನ್ನು ಯಾರೂ ತಿಳಿಯಲಾರರು."
},
{
"id": "7-27",
"chapter": 7,
"verse": 27,
"kannada": "ಇಚ್ಛಾದ್ವೇಷಸಮುತ್ಥೇನ ದ್ವಂದ್ವಮೋಹೇನ ಭಾರತ | ಸರ್ವಭೂತಾನಿ ಸಂಮೋಹಂ ಸರ್ಗೇ ಯಾನ್ತಿ ಪರಂತಪ ||",
"transliteration": "ichchhā-dveṣha-samutthena dvandva-mohena bhārata sarva-bhūtāni sammohaṁ sarge yānti parantapa",
"meaning": "ಹೇ ಭಾರತ, ಹೇ ಪರಂತಪ, ಇಚ್ಛೆ-ದ್ವೇಷಗಳಿಂದ ಉದ್ಭವಿಸಿದ ದ್ವಂದ್ವಮೋಹದಿಂದ ಸಮಸ್ತ ಭೂತಗಳು ಜನ್ಮದಲ್ಲಿ ಮೋಹಕ್ಕೊಳಗಾಗುತ್ತವೆ."
},
{
"id": "7-28",
"chapter": 7,
"verse": 28,
"kannada": "ಯೇಷಾಂ ತ್ವಂತಗತಂ ಪಾಪಂ ಜನಾನಾಂ ಪುಣ್ಯಕರ್ಮಣಾಮ್ | ತೇ ದ್ವಂದ್ವಮೋಹನಿರ್ಮುಕ್ತಾ ಭಜಂತೇ ಮಾಂ ದೃಢವ್ರತಾಃ ||",
"transliteration": "yeṣhāṁ tv anta-gataṁ pāpaṁ janānāṁ puṇya-karmaṇām te dvandva-moha-nirmuktā bhajante māṁ dṛiḍha-vratāḥ",
"meaning": "ಯಾರ ಪಾಪವು ಪುಣ್ಯಕರ್ಮಗಳಿಂದ ನಾಶವಾಗಿದೆಯೋ, ಅವರು ದ್ವಂದ್ವಮೋಹದಿಂದ ಮುಕ್ತರಾಗಿ, ದೃಢವ್ರತರಾಗಿ ನನ್ನನ್ನು ಭಜಿಸುತ್ತಾರೆ."
},
{
"id": "7-29",
"chapter": 7,
"verse": 29,
"kannada": "ಜರಾಮರಣಮೋಕ್ಷಾಯ ಮಾಮಾಶ್ರಿತ್ಯ ಯತಂತಿ ಯೇ | ತೇ ಬ್ರಹ್ಮ ತದ್ವಿದುಃ ಕೃತ್ಸ್ನಮಧ್ಯಾತ್ಮಂ ಕರ್ಮ ಚಾಖಿಲಮ್ ||",
"transliteration": "jarā-maraṇa-mokṣhāya mām āśhritya yatanti ye te brahma tad viduḥ kṛitsnam adhyātmaṁ karma chākhilam",
"meaning": "ಜರಾಮರಣಗಳಿಂದ ಮೋಕ್ಷವನ್ನು ಪಡೆಯಲು ನನ್ನನ್ನು ಆಶ್ರಯಿಸಿ ಯತ್ನಿಸುವವರು ಬ್ರಹ್ಮ, ಅಧ್ಯಾತ್ಮ ಮತ್ತು ಸಮಸ್ತ ಕರ್ಮವನ್ನು ತಿಳಿದವರಾಗುತ್ತಾರೆ."
},
{
"id": "7-30",
"chapter": 7,
"verse": 30,
"kannada": "ಸಾಧಿಭಾವಾಧಿಭೂತಂ ಚ ಮತ್ತೈವೇತಿ ವಿದಿತ್ವಾ | ಮದ್ಭಾವಾಯೋಪಪದ್ಯಂತೇ ಮಮೈವಾನುಶಯೇನ ತೇ ||",
"transliteration": "sādhibhūtādhidaivaṁ cha mamaitān eti viditvā mad-bhāvāyopapadyante mamaivānuśhayena te",
"meaning": "ಅಧಿಭೂತ, ಅಧಿದೈವ ಮತ್ತು ಅಧಿಯಜ್ಞಗಳೆಲ್ಲವೂ ನನ್ನಿಂದಲೇ ಎಂದು ತಿಳಿದು, ಮರಣಕಾಲದಲ್ಲಿಯೂ ನನ್ನ ಭಾವನೆಯನ್ನು ಪಡೆದು, ನನ್ನಲ್ಲಿಯೇ ಪ್ರವೇಶಿಸುತ್ತಾರೆ."
},

    ]
  },
  {
    id: 8,
    title: "Aksara Brahma Yoga",
    kannadaTitle: "ಅಕ್ಷರ ಬ್ರಹ್ಮ ಯೋಗ",
    description: "ಅಕ್ಷರ ಬ್ರಹ್ಮ - The imperishable absolute",
    totalVerses: 28,
    verses: [
{
"id": "8-1",
"chapter": 8,
"verse": 1,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಕಿಂ ತದ್ಬ್ರಹ್ಮ ಕಿಮಧ್ಯಾತ್ಮಂ ಕಿಂ ಕರ್ಮ ಪುರುಷೋತ್ತಮ | ಅಧಿಭೂತಂ ಚ ಕಿಂ ಪ್ರೋಕ್ತಮಧಿದೈವಂ ಕಿಮುಚ್ಯತೇ ||",
"transliteration": "arjuna uvācha kiṁ tad brahma kim adhyātmaṁ kiṁ karma puruṣhottama adhibhūtaṁ cha kiṁ proktam adhidaivaṁ kim uchyate",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಪುರುಷೋತ್ತಮ, ಬ್ರಹ್ಮ ಎಂದರೇನು? ಅಧ್ಯಾತ್ಮ ಎಂದರೇನು? ಕರ್ಮ ಎಂದರೇನು? ಅಧಿಭೂತ ಮತ್ತು ಅಧಿದೈವ ಎಂದು ಏನು ಹೇಳಲಾಗಿದೆ?"
},
{
"id": "8-2",
"chapter": 8,
"verse": 2,
"kannada": "ಅಧಿಯಜ್ಞಃ ಕಥಂ ಕೋಽತ್ರ ದೇಹೇಽಸ್ಮಿನ್ಮಧುಸೂದನ | ಪ್ರಯಾಣಕಾಲೇ ಚ ಕಥಂ ಜ್ಞೇಯೋಽಸಿ ನಿಯತಾತ್ಮಭಿಃ ||",
"transliteration": "adhiyajñaḥ kathaṁ ko'tra dehe'smin madhusūdana prayāṇa-kāle cha kathaṁ jñeyo'si niyatātmabhiḥ",
"meaning": "ಹೇ ಮಧುಸೂದನ, ಈ ದೇಹದಲ್ಲಿ ಅಧಿಯಜ್ಞನೆಂದರೆ ಯಾರು? ಪ್ರಯಾಣಕಾಲದಲ್ಲಿ ನಿಯತಾತ್ಮರಾದವರು ನಿನ್ನನ್ನು ಹೇಗೆ ತಿಳಿಯಬೇಕು?"
},
{
"id": "8-3",
"chapter": 8,
"verse": 3,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಅಕ್ಷರಂ ಬ್ರಹ್ಮ ಪರಮಂ ಸ್ವಭಾವೋಽಧ್ಯಾತ್ಮಮುಚ್ಯತೇ | ಭೂತಭಾವೋದ್ಭವಕರೋ ವಿಸರ್ಗಃ ಕರ್ಮಸಂಜ್ಞಿತಃ ||",
"transliteration": "śhrī bhagavān uvācha akṣharaṁ brahma paramaṁ svabhāvo'dhyātmam uchyate bhūta-bhāvodbhava-karo visargaḥ karma-saṁjñitaḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಅಕ್ಷರವಾದ ಪರಬ್ರಹ್ಮ, ಸ್ವಭಾವವೇ ಅಧ್ಯಾತ್ಮ, ಭೂತಭಾವಗಳ ಉತ್ಪತ್ತಿ ಮಾಡುವ ವಿಸರ್ಗವೇ ಕರ್ಮವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "8-4",
"chapter": 8,
"verse": 4,
"kannada": "ಅಧಿಭೂತಂ ಕ್ಷರೋ ಭಾವಃ ಪುರುಷಶ್ಚಾಧಿದೈವತಮ್ | ಅಧಿಯಜ್ಞೋಽಹಮೇವಾತ್ರ ದೇಹೇ ದೇಹಭೃತಾಂ ವರ ||",
"transliteration": "adhibhūtaṁ kṣharo bhāvaḥ puruṣhaśh chādhidaivatam adhiyajño'hamevātra dehe deha-bhṛitāṁ vara",
"meaning": "ಕ್ಷರ ಭಾವವೇ ಅಧಿಭೂತ, ಪುರುಷನೇ ಅಧಿದೈವ. ಹೇ ದೇಹಧಾರಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠನೇ, ಈ ದೇಹದಲ್ಲಿ ಅಧಿಯಜ್ಞನು ನಾನೇ ಆಗಿದ್ದೇನೆ."
},
{
"id": "8-5",
"chapter": 8,
"verse": 5,
"kannada": "ಅಂತಕಾಲೇ ಚ ಮಾಮೇವ ಸ್ಮರನ್ಮುಕ್ತ್ವಾ ಕಲೇವರಮ್ | ಯಃ ಪ್ರಯಾತಿ ಸ ಮದ್ಭಾವಂ ಯಾತಿ ನಾಸ್ತ್ಯತ್ರ ಸಂಶಯಃ ||",
"transliteration": "anta-kāle cha mām eva smaran muktvā kalevaram yaḥ prayāti sa mad-bhāvaṁ yāti nāstyatra sanśhayaḥ",
"meaning": "ಅಂತ್ಯಕಾಲದಲ್ಲಿ ಯಾರು ನನ್ನನ್ನೇ ಸ್ಮರಿಸುತ್ತಾ ದೇಹವನ್ನು ತ್ಯಜಿಸಿ ಹೋಗುತ್ತಾನೆಯೋ, ಅವನು ನನ್ನ ಭಾವವನ್ನು ಪಡೆಯುತ್ತಾನೆ - ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ."
},
{
"id": "8-6",
"chapter": 8,
"verse": 6,
"kannada": "ಯಂ ಯಂ ವಾಪಿ ಸ್ಮರನ್ಭಾವಂ ತ್ಯಜತ್ಯಂತೇ ಕಲೇವರಮ್ | ತಂ ತಮೇವೈತಿ ಕೌಂತೇಯ ಸದಾ ತದ್ಭಾವಭಾವಿತಃ ||",
"transliteration": "yaṁ yaṁ vāpi smaran bhāvaṁ tyajaty ante kalevaram taṁ tam evaiti kaunteya sadā tad-bhāva-bhāvitaḥ",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಅಂತ್ಯಕಾಲದಲ್ಲಿ ಯಾವ ಯಾವ ಭಾವವನ್ನು ಸ್ಮರಿಸುತ್ತಾ ದೇಹವನ್ನು ತ್ಯಜಿಸುತ್ತಾನೆಯೋ, ಅವನು ಅದೇ ಅದೇ ಭಾವವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "8-7",
"chapter": 8,
"verse": 7,
"kannada": "ತಸ್ಮಾತ್ಸರ್ವೇಷು ಕಾಲೇಷು ಮಾಮನುಸ್ಮರ ಯುಧ್ಯ ಚ | ಮಯ್ಯರ್ಪಿತಮನೋಬುದ್ಧಿರ್ಮಾಮೇವೈಷ್ಯಸ್ಯಸಂಶಯಃ ||",
"transliteration": "tasmāt sarveṣhu kāleṣhu mām anusmara yudhya cha mayyarpita-mano-buddhir mām evaiṣhyasyasanśhayaḥ",
"meaning": "ಆದ್ದರಿಂದ ಎಲ್ಲಾ ಕಾಲದಲ್ಲೂ ನನ್ನನ್ನು ಸ್ಮರಿಸುತ್ತಾ ಯುದ್ಧ ಮಾಡು. ನನಗೇ ಮನೋಬುದ್ಧಿಗಳನ್ನು ಅರ್ಪಿಸಿದವನು ನನ್ನನ್ನೇ ಪಡೆಯುತ್ತಾನೆ - ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ."
},
{
"id": "8-8",
"chapter": 8,
"verse": 8,
"kannada": "ಅಭ್ಯಾಸಯೋಗಯುಕ್ತೇನ ಚೇತಸಾ ನಾನ್ಯಗಾಮಿನಾ | ಪರಮಂ ಪುರುಷಂ ದಿವ್ಯಂ ಯಾತಿ ಪಾರ್ಥಾನುಚಿಂತಯನ್ ||",
"transliteration": "abhyāsa-yoga-yuktena chetasā nānyagāminā paramaṁ puruṣhaṁ divyaṁ yāti pārthānuchintayan",
"meaning": "ಅಭ್ಯಾಸಯೋಗದಿಂದ ಯುಕ್ತನಾಗಿ, ಬೇರೆಡೆಗೆ ಹೋಗದ ಚಿತ್ತದಿಂದ, ದಿವ್ಯ ಪುರುಷನಾದ ನನ್ನನ್ನೇ ಅನುಚಿಂತನ ಮಾಡುತ್ತಾ ಹೇ ಪಾರ್ಥ, ಪರಮಪುರುಷನನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "8-9",
"chapter": 8,
"verse": 9,
"kannada": "ಕವಿಂ ಪುರಾಣಮನುಶಾಸಿತಾರಮಣೋರಣೀಯಾಂಸಮನುಸ್ಮರೇದ್ಯಃ | ಸರ್ವಸ್ಯ ಧಾತಾರಮಚಿಂತ್ಯರೂಪಮಾದಿತ್ಯವರ್ಣಂ ತಮಸಃ ಪರಸ್ತಾತ್ ||",
"transliteration": "kaviṁ purāṇam anuśhāsitāram aṇor aṇīyānsam anusmared yaḥ sarvasya dhātāram achintya-rūpam āditya-varṇaṁ tamasaḥ parastāt",
"meaning": "ಯಾವನು ಕವಿಯೂ, ಪುರಾಣನೂ, ಅನುಶಾಸಕನೂ, ಅಣುವಿಗಿಂತ ಸೂಕ್ಷ್ಮನೂ, ಸರ್ವಧಾತನೂ, ಅಚಿಂತ್ಯರೂಪನೂ, ಆದಿತ್ಯವರ್ಣನೂ, ತಮಸ್ಸಿಗೆ ಪರನೂ ಆದವನನ್ನು ಸ್ಮರಿಸುತ್ತಾನೆಯೋ."
},
{
"id": "8-10",
"chapter": 8,
"verse": 10,
"kannada": "ಪ್ರಯಾಣಕಾಲೇ ಮನಸಾಚಲೇನ ಭಕ್ತ್ಯಾ ಯುಕ್ತೋ ಯೋಗಬಲೇನ ಚೈವ | ಭೃವೋರ್ಮಧ್ಯೇ ಪ್ರಾಣಮಾವೇಶ್ಯ ಸಮ್ಯಕ್ಸ ತಂ ಪರಂ ಪುರುಷಮುಪೈತಿ ದಿವ್ಯಮ್ ||",
"transliteration": "prayāṇa-kāle manasāchalena bhaktyā yukto yoga-balena chaiva bhṛuvor madhye prāṇam āveśhya samyak sa taṁ param puruṣham upaiti divyam",
"meaning": "ಪ್ರಯಾಣಕಾಲದಲ್ಲಿ ಅಚಲ ಮನಸ್ಸಿನಿಂದ, ಭಕ್ತಿಯಿಂದ, ಯೋಗಬಲದಿಂದ, ಭ್ರೂಮಧ್ಯದಲ್ಲಿ ಪ್ರಾಣವನ್ನು ನಿಲ್ಲಿಸಿ, ಯಾವನು ದಿವ್ಯ ಪರಮಪುರುಷನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾನೆಯೋ, ಅವನು ಅವನನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "8-11",
"chapter": 8,
"verse": 11,
"kannada": "ಯದಕ್ಷರಂ ವೇದವಿದೋ ವದಂತಿ ವಿಶಂತಿ ಯದ್ಯತಯೋ ವೀತರಾಗಾಃ | ಯದಿಚ್ಛಂತೋ ಬ್ರಹ್ಮಚರ್ಯಂ ಚರಂತಿ ತತ್ತೇ ಪದಂ ಸಂಗ್ರಹೇಣ ಪ್ರವಕ್ಷ್ಯೇ ||",
"transliteration": "yad akṣharaṁ vedavido vadanti viśhanti yad yatayo vītarāgāḥ yad ichchhanto brahmacharyaṁ charanti tat te padaṁ saṅgraheṇa pravakṣhye",
"meaning": "ವೇದವಿದರು ಯಾವುದನ್ನು ಅಕ್ಷರವೆಂದು ಹೇಳುತ್ತಾರೆಯೋ, ವೀತರಾಗರಾದ ಯತಿಗಳು ಯಾವುದನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾರೆಯೋ, ಯಾವುದನ್ನು ಇಚ್ಛಿಸಿ ಬ್ರಹ್ಮಚರ್ಯವನ್ನು ಆಚರಿಸುತ್ತಾರೆಯೋ, ಆ ಪದವನ್ನು ನಾನು ಸಂಕ್ಷೇಪವಾಗಿ ಹೇಳುತ್ತೇನೆ."
},
{
"id": "8-12",
"chapter": 8,
"verse": 12,
"kannada": "ಸರ್ವದ್ವಾರಾಣಿ ಸಂಯಮ್ಯ ಮನೋ ಹೃದಿ ನಿರುಧ್ಯ ಚ | ಮೂರ್ಧ್ನ್ಯಾಧಾಯಾತ್ಮನಃ ಪ್ರಾಣಮಾಸ್ಥಿತೋ ಯೋಗಧಾರಣಾಮ್ ||",
"transliteration": "sarva-dvārāṇi sanyamya mano hṛidi nirudhya cha mūrdhny ādhāyātmanaḥ prāṇam āsthito yoga-dhāraṇām",
"meaning": "ಸರ್ವೇಂದ್ರಿಯಗಳನ್ನು ನಿಗ್ರಹಿಸಿ, ಮನಸ್ಸನ್ನು ಹೃದಯದಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ಪ್ರಾಣವನ್ನು ತಲೆಯಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ಯೋಗಧಾರಣೆಯಲ್ಲಿ ನಿಂತು."
},
{
"id": "8-13",
"chapter": 8,
"verse": 13,
"kannada": "ಓಮಿತ್ಯೇಕಾಕ್ಷರಂ ಬ್ರಹ್ಮ ವ್ಯಾಹರನ್ನಮನುಸ್ಮರನ್ | ಯಃ ಪ್ರಯಾತಿ ತ್ಯಜನ್ದೇಹಂ ಸ ಯಾತಿ ಪರಮಾಂ ಗತಿಮ್ ||",
"transliteration": "om ity ekākṣharaṁ brahma vyāharan mām anusmaran yaḥ prayāti tyajan dehaṁ sa yāti paramāṁ gatim",
"meaning": "ಓಂ ಎಂಬ ಏಕಾಕ್ಷರ ಬ್ರಹ್ಮವನ್ನು ಉಚ್ಚರಿಸುತ್ತಾ ನನ್ನನ್ನು ಸ್ಮರಿಸುತ್ತಾ ದೇಹವನ್ನು ತ್ಯಜಿಸಿ ಹೋಗುವವನು ಪರಮಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "8-14",
"chapter": 8,
"verse": 14,
"kannada": "ಅನನ್ಯಚೇತಾಃ ಸತತಂ ಯೋ ಮಾಂ ಸ್ಮರತಿ ನಿತ್ಯಶಃ | ತಸ್ಯಾಹಂ ಸುಲಭಃ ಪಾರ್ಥ ನಿತ್ಯಯುಕ್ತಸ್ಯ ಯೋಗಿನಃ ||",
"transliteration": "ananya-chetāḥ satataṁ yo māṁ smarati nityaśhaḥ tasyāhaṁ sulabhaḥ pārtha nitya-yuktasya yoginaḥ",
"meaning": "ಹೇ ಪಾರ್ಥ, ಯಾವನು ಅನನ್ಯಚಿತ್ತನಾಗಿ ನಿರಂತರವಾಗಿ ನನ್ನನ್ನು ಸ್ಮರಿಸುತ್ತಾನೆಯೋ, ಅಂತಹ ನಿತ್ಯಯುಕ್ತ ಯೋಗಿಗೆ ನಾನು ಸುಲಭವಾಗಿ ಲಭಿಸುತ್ತೇನೆ."
},
{
"id": "8-15",
"chapter": 8,
"verse": 15,
"kannada": "ಮಾಮುಪೇತ್ಯ ಪುನರ್ಜನ್ಮ ದುಃಖಾಲಯಮಶಾಶ್ವತಮ್ | ನಾಪ್ನುವಂತಿ ಮಹಾತ್ಮಾನಃ ಸಂಸಿದ್ಧಿಂ ಪರಮಾಂ ಗತಾಃ ||",
"transliteration": "mām upetya punar janma duḥkhālayam aśhāśhvatam nāpnuvanti mahātmānaḥ sansiddhiṁ paramāṁ gatāḥ",
"meaning": "ನನ್ನನ್ನು ಪಡೆದ ಮಹಾತ್ಮರು, ದುಃಖಾಲಯವಾದ, ಅಶಾಶ್ವತವಾದ ಪುನರ್ಜನ್ಮವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ; ಅವರು ಪರಮ ಸಿದ್ಧಿಯನ್ನು ಪಡೆದವರಾಗುತ್ತಾರೆ."
},
{
"id": "8-16",
"chapter": 8,
"verse": 16,
"kannada": "ಆಬ್ರಹ್ಮಭುವನಾಲ್ಲೋಕಾಃ ಪುನರಾವರ್ತಿನೋಽರ್ಜುನ | ಮಾಮುಪೇತ್ಯ ತು ಕೌಂತೇಯ ಪುನರ್ಜನ್ಮ ನ ವಿದ್ಯತೇ ||",
"transliteration": "ā-brahma-bhuvanāl lokāḥ punar āvartino'rjuna mām upetya tu kaunteya punar janma na vidyate",
"meaning": "ಹೇ ಅರ್ಜುನ, ಬ್ರಹ್ಮಲೋಕದವರೆಗೂ ಎಲ್ಲ ಲೋಕಗಳು ಪುನರಾವರ್ತನೆಯುಳ್ಳವು. ಆದರೆ ಹೇ ಕೌಂತೇಯ, ನನ್ನನ್ನು ಪಡೆದವನಿಗೆ ಪುನರ್ಜನ್ಮವಿಲ್ಲ."
},
{
"id": "8-17",
"chapter": 8,
"verse": 17,
"kannada": "ಸಹಸ್ರಯುಗಪರ್ಯಂತಮಹರ್ಯದ್ಬ್ರಹ್ಮಣೋ ವಿದುಃ | ರಾತ್ರಿಂ ಯುಗಸಹಸ್ರಾಂತಾಂ ತೇಽಹೋರಾತ್ರವಿದೋ ಜನಾಃ ||",
"transliteration": "sahasra-yuga-paryantam ahar yad brahmaṇo viduḥ rātriṁ yuga-sahasrāntāṁ te'ho-rātra-vido janāḥ",
"meaning": "ಬ್ರಹ್ಮನ ಒಂದು ದಿನವು ಸಹಸ್ರಯುಗಗಳಿಗೆ ಸಮನೆಂದೂ, ರಾತ್ರಿಯು ಸಹಸ್ರಯುಗಗಳಿಗೆ ಸಮನೆಂದೂ ತಿಳಿಯುವವರು ಅಹೋರಾತ್ರವಿದರು."
},
{
"id": "8-18",
"chapter": 8,
"verse": 18,
"kannada": "ಅವ್ಯಕ್ತಾದ್ವ್ಯಕ್ತಯಃ ಸರ್ವಾಃ ಪ್ರಭವನ್ತ್ಯಹರಾಗಮೇ | ರಾತ್ರ್ಯಾಗಮೇ ಪ್ರಲೀಯಂತೇ ತತ್ರೈವಾವ್ಯಕ್ತಸಂಜ್ಞಕೇ ||",
"transliteration": "avyaktād vyaktayaḥ sarvāḥ prabhavanty ahar-āgame rātry-āgame pralīyante tatraivāvyakta-saṁjñake",
"meaning": "ದಿನದ ಆಗಮನದಲ್ಲಿ ಅವ್ಯಕ್ತದಿಂದ ಎಲ್ಲ ವ್ಯಕ್ತಗಳು ಹುಟ್ಟುತ್ತವೆ. ರಾತ್ರಿಯ ಆಗಮನದಲ್ಲಿ ಅವೇ ಅವ್ಯಕ್ತಸಂಜ್ಞಕವಾದ ಅದರಲ್ಲಿಯೇ ಲೀನವಾಗುತ್ತವೆ."
},
{
"id": "8-19",
"chapter": 8,
"verse": 19,
"kannada": "ಭೂತಗ್ರಾಮಃ ಸ ಏವಾಯಂ ಭೂತ್ವಾ ಭೂತ್ವಾ ಪ್ರಲೀಯತೇ | ರಾತ್ರ್ಯಾಗಮೇಽವಶಃ ಪಾರ್ಥ ಪ್ರಭವತ್ಯಹರಾಗಮೇ ||",
"transliteration": "bhūta-grāmaḥ sa evāyaṁ bhūtvā bhūtvā pralīyate rātry-āgame'vaśhaḥ pārtha prabhavaty ahar-āgame",
"meaning": "ಹೇ ಪಾರ್ಥ, ಈ ಭೂತಸಮೂಹವು ರಾತ್ರಿಯಾಗಮನದಲ್ಲಿ ಅನಿವಾರ್ಯವಾಗಿ ಲೀನವಾಗುತ್ತದೆ ಮತ್ತು ದಿನದಾಗಮನದಲ್ಲಿ ಹುಟ್ಟುತ್ತದೆ."
},
{
"id": "8-20",
"chapter": 8,
"verse": 20,
"kannada": "ಪರಸ್ತಸ್ಮಾತ್ತು ಭಾವೋಽನ್ಯೋಽವ್ಯಕ್ತೋಽವ್ಯಕ್ತಾತ್ಸನಾತನಃ | ಯಃ ಸ ಸರ್ವೇಷು ಭೂತೇಷು ನಶ್ಯತ್ಸು ನ ವಿನಶ್ಯತಿ ||",
"transliteration": "paras tasmāt tu bhāvo'nyo'vyakto'vyaktāt sanātanaḥ yaḥ sa sarveṣhu bhūteṣhu naśhyatsu na vinaśhyati",
"meaning": "ಅದಕ್ಕಿಂತ ಪರನಾದ, ಅವ್ಯಕ್ತಕ್ಕಿಂತ ಪರನಾದ, ಸನಾತನನಾದ ಇನ್ನೊಂದು ಭಾವವಿದೆ. ಅದು ಸರ್ವಭೂತಗಳು ನಾಶವಾದರೂ ನಾಶವಾಗದು."
},
{
"id": "8-21",
"chapter": 8,
"verse": 21,
"kannada": "ಅವ್ಯಕ್ತೋಽಕ್ಷರ ಇತ್ಯುಕ್ತಸ್ತಮಾಹುಃ ಪರಮಾಂ ಗತಿಮ್ | ಯಂ ಪ್ರಾಪ್ಯ ನ ನಿವರ್ತಂತೇ ತದ್ಧಾಮ ಪರಮಂ ಮಮ ||",
"transliteration": "avyakto'kṣhara ity uktas tam āhuḥ paramāṁ gatim yaṁ prāpya na nivartante tad dhāma paramaṁ mama",
"meaning": "ಅವ್ಯಕ್ತ, ಅಕ್ಷರ ಎಂದು ಹೇಳಲ್ಪಟ್ಟ ಅದನ್ನು ಪರಮಗತಿಯೆಂದು ಹೇಳುತ್ತಾರೆ. ಅದನ್ನು ಪಡೆದವರು ಮರಳುವುದಿಲ್ಲ. ಅದು ನನ್ನ ಪರಮಧಾಮವಾಗಿದೆ."
},
{
"id": "8-22",
"chapter": 8,
"verse": 22,
"kannada": "ಪುರುಷಃ ಸ ಪರಃ ಪಾರ್ಥ ಭಕ್ತ್ಯಾ ಲಭ್ಯಸ್ತ್ವನನ್ಯಯಾ | ಯಸ್ಯಾಂತಃಸ್ಥಾನಿ ಭೂತಾನಿ ಯೇನ ಸರ್ವಮಿದಂ ತತಮ್ ||",
"transliteration": "puruṣhaḥ sa paraḥ pārtha bhaktyā labhyas tv ananyayā yasyāntaḥ-sthāni bhūtāni yena sarvam idaṁ tatam",
"meaning": "ಹೇ ಪಾರ್ಥ, ಆ ಪರಮಪುರುಷನು ಅನನ್ಯಭಕ್ತಿಯಿಂದ ಲಭ್ಯನಾಗುತ್ತಾನೆ. ಯಾವನಲ್ಲಿ ಎಲ್ಲ ಭೂತಗಳೂ ಅಂತಃಸ್ಥವಾಗಿವೆಯೋ, ಯಾವನಿಂದ ಈ ಸರ್ವವೂ ವ್ಯಾಪ್ತವಾಗಿದೆಯೋ."
},
{
"id": "8-23",
"chapter": 8,
"verse": 23,
"kannada": "ಯತ್ರ ಕಾಲೇ ತ್ವನಾವೃತ್ತಿಮಾವೃತ್ತಿಂ ಚೈವ ಯೋಗಿನಃ | ಪ್ರಯಾತಾ ಯಾನ್ತಿ ತಂ ಕಾಲಂ ವಕ್ಷ್ಯಾಮಿ ಭರತರ್ಷಭ ||",
"transliteration": "yatra kāle tv anāvṛittim āvṛittiṁ chaiva yoginaḥ prayātā yānti taṁ kālaṁ vakṣhyāmi bharatarṣhabha",
"meaning": "ಹೇ ಭರತರ್ಷಭ, ಯಾವ ಕಾಲದಲ್ಲಿ ಪ್ರಯಾಣಮಾಡಿದ ಯೋಗಿಗಳು ಪುನರಾವರ್ತನೆಯಿಲ್ಲದೆಯೂ, ಪುನರಾವರ್ತನೆಯುಳ್ಳದ್ದನ್ನೂ ಪಡೆಯುತ್ತಾರೋ, ಆ ಕಾಲವನ್ನು ಹೇಳುತ್ತೇನೆ."
},
{
"id": "8-24",
"chapter": 8,
"verse": 24,
"kannada": "ಅಗ್ನಿರ್ಜ್ಯೋತಿರಹಃ ಶುಕ್ಲಃ ಷಣ್ಮಾಸಾ ಉತ್ತರಾಯಣಮ್ | ತತ್ರ ಪ್ರಯಾತಾ ಗಚ್ಛಂತಿ ಬ್ರಹ್ಮ ಬ್ರಹ್ಮವಿದೋ ಜನಾಃ ||",
"transliteration": "agnir jyotir ahaḥ śhuklaḥ ṣhaṇ māsā uttarāyaṇam tatra prayātā gachchhanti brahma brahma-vido janāḥ",
"meaning": "ಅಗ್ನಿ, ಜ್ಯೋತಿ, ದಿವಸ, ಶುಕ್ಲಪಕ್ಷ, ಉತ್ತರಾಯಣದ ಆರು ತಿಂಗಳು - ಇಲ್ಲಿ ಪ್ರಯಾಣಮಾಡಿದ ಬ್ರಹ್ಮವಿದರು ಬ್ರಹ್ಮವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "8-25",
"chapter": 8,
"verse": 25,
"kannada": "ಧೂಮೋ ರಾತ್ರಿಸ್ತಥಾ ಕೃಷ್ಣಃ ಷಣ್ಮಾಸಾ ದಕ್ಷಿಣಾಯನಮ್ | ತತ್ರ ಚಾನ್ದ್ರಮಸಂ ಜ್ಯೋತಿರ್ಯೋಗೀ ಪ್ರಾಪ್ಯ ನಿವರ್ತತೇ ||",
"transliteration": "dhūmo rātris tathā kṛiṣhṇaḥ ṣhaṇ māsā dakṣhiṇāyanam tatra chāndramasaṁ jyotir yogī prāpya nivartate",
"meaning": "ಧೂಮ, ರಾತ್ರಿ, ಕೃಷ್ಣಪಕ್ಷ, ದಕ್ಷಿಣಾಯಣದ ಆರು ತಿಂಗಳು - ಇಲ್ಲಿ ಪ್ರಯಾಣಮಾಡಿದ ಯೋಗಿ ಚಂದ್ರಲೋಕವನ್ನು ಪಡೆದು ಮರಳುತ್ತಾನೆ."
},
{
"id": "8-26",
"chapter": 8,
"verse": 26,
"kannada": "ಶುಕ್ಲಕೃಷ್ಣೇ ಗತೀ ಹ್ಯೇತೇ ಜಗತಃ ಶಾಶ್ವತೇ ಮತೇ | ಏಕಯಾ ಯಾತ್ಯನಾವೃತ್ತಿಮನ್ಯಯಾವರ್ತತೇ ಪುನಃ ||",
"transliteration": "śhukla-kṛiṣhṇe gatī hy ete jagataḥ śhāśhvate mate ekayā yāty anāvṛittim anyayāvartate punaḥ",
"meaning": "ಶುಕ್ಲ ಮತ್ತು ಕೃಷ್ಣ - ಜಗತ್ತಿನ ಈ ಎರಡು ಗತಿಗಳು ಶಾಶ್ವತವೆಂದು ತಿಳಿಯಲಾಗಿದೆ. ಒಂದರಿಂದ ಮರಳದೆ ಹೋಗುತ್ತಾನೆ, ಇನ್ನೊಂದರಿಂದ ಮರಳಿ ಬರುತ್ತಾನೆ."
},
{
"id": "8-27",
"chapter": 8,
"verse": 27,
"kannada": "ನೈತೇ ಸೃತೀ ಪಾರ್ಥ ಜಾನನ್ಯೋಗೀ ಮುಹ್ಯತಿ ಕಶ್ಚನ | ತಸ್ಮಾತ್ಸರ್ವೇಷು ಕಾಲೇಷು ಯೋಗಯುಕ್ತೋ ಭವಾರ್ಜುನ ||",
"transliteration": "naite sṛitī pārtha jānan yogī muhyati kaśhchana tasmāt sarveṣhu kāleṣhu yoga-yukto bhavārjuna",
"meaning": "ಹೇ ಪಾರ್ಥ, ಈ ಎರಡು ಗತಿಗಳನ್ನು ತಿಳಿದ ಯೋಗಿ ಎಂದಿಗೂ ಮೋಹಗೊಳ್ಳುವುದಿಲ್ಲ. ಆದ್ದರಿಂದ ಹೇ ಅರ್ಜುನ, ಎಲ್ಲಾ ಕಾಲದಲ್ಲೂ ಯೋಗಯುಕ್ತನಾಗಿರು."
},
{
"id": "8-28",
"chapter": 8,
"verse": 28,
"kannada": "ವೇದೇಷು ಯಜ್ಞೇಷು ತಪಃಸು ಚೈವ ದಾನೇಷು ಯತ್ಪುಣ್ಯಫಲಂ ಪ್ರದಿಷ್ಟಮ್ | ಅತ್ಯೇತಿ ತತ್ಸರ್ವಮಿದಂ ವಿದಿತ್ವಾ ಯೋಗೀ ಪರಂ ಸ್ಥಾನಮುಪೈತಿ ಚಾದ್ಯಮ್ ||",
"transliteration": "vedeṣhu yajñeṣhu tapaḥsu chaiva dāneṣhu yat puṇya-phalaṁ pradiṣhṭam atyeti tat sarvam idaṁ viditvā yogī paraṁ sthānam upaiti chādyam",
"meaning": "ವೇದ, ಯಜ್ಞ, ತಪಸ್ಸು, ದಾನಗಳಲ್ಲಿ ಪ್ರದಿಷ್ಟವಾದ ಪುಣ್ಯಫಲವನ್ನು ಎಲ್ಲವನ್ನೂ ತಿಳಿದು ಅತಿಕ್ರಮಿಸಿದ ಯೋಗಿ ಆದಿಪರಮಸ್ಥಾನವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},

    ]
  },
  {
    id: 9,
    title: "Raja Vidya Raja Guhya Yoga",
    kannadaTitle: "ರಾಜ ವಿದ್ಯಾ ರಾಜ ಗುಹ್ಯ ಯೋಗ",
    description: "ರಾಜವಿದ್ಯೆ ಮತ್ತು ರಾಜಗುಹ್ಯ - The king of knowledge and the king of secrets",
    totalVerses: 34,
    verses: [
{
"id": "9-1",
"chapter": 9,
"verse": 1,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಇದಂ ತು ತೇ ಗುಹ್ಯತಮಂ ಪ್ರವಕ್ಷ್ಯಾಮ್ಯನಸೂಯವೇ | ಜ್ಞಾನಂ ವಿಜ್ಞಾನಸಹಿತಂ ಯಜ್ಜ್ಞಾತ್ವಾ ಮೋಕ್ಷ್ಯಸೇಽಶುಭಾತ್ ||",
"transliteration": "śhrī bhagavān uvācha idaṁ tu te guhyatamaṁ pravakṣhyāmy anasūyave jñānaṁ vijñāna-sahitaṁ yaj jñātvā mokṣhyase 'śhubhāt",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಅನಸೂಯುವೇ (ದ್ವೇಷರಹಿತನೇ), ನಿನಗೆ ಗುಹ್ಯತಮವಾದ ಈ ಜ್ಞಾನವನ್ನು ಹೇಳುತ್ತೇನೆ. ಇದನ್ನು ತಿಳಿದು ನೀನು ಅಶುಭದಿಂದ ಮುಕ್ತನಾಗುವೆ."
},
{
"id": "9-2",
"chapter": 9,
"verse": 2,
"kannada": "ರಾಜವಿದ್ಯಾ ರಾಜಗುಹ್ಯಂ ಪವಿತ್ರಮಿದಮುತ್ತಮಮ್ | ಪ್ರತ್ಯಕ್ಷಾವಗಮಂ ಧರ್ಮ್ಯಂ ಸುಸುಖಂ ಕರ್ತುಮವ್ಯಯಮ್ ||",
"transliteration": "rāja-vidyā rāja-guhyaṁ pavitram idam uttamam pratyakṣhāvagamaṁ dharmyaṁ susukhaṁ kartum avyayam",
"meaning": "ಇದು ರಾಜವಿದ್ಯೆ, ರಾಜಗುಹ್ಯ, ಪವಿತ್ರ, ಉತ್ತಮ, ಪ್ರತ್ಯಕ್ಷವಾಗಿ ತಿಳಿಯಬಹುದಾದ, ಧರ್ಮ್ಯ, ಸುಸುಖವಾಗಿ ಆಚರಿಸಬಹುದಾದ, ಅವ್ಯಯವಾದುದು."
},
{
"id": "9-3",
"chapter": 9,
"verse": 3,
"kannada": "ಅಶ್ರದ್ಧಧಾನಾಃ ಪುರುಷಾ ಧರ್ಮಸ್ಯಾಸ್ಯ ಪರಂತಪ | ಅಪ್ರಾಪ್ಯ ಮಾಂ ನಿವರ್ತಂತೇ ಮೃತ್ಯುಸಂಸಾರವರ್ತ್ಮನಿ ||",
"transliteration": "aśhraddadhānāḥ puruṣhā dharmasyāsya parantapa aprāpya māṁ nivartante mṛityu-saṁsāra-vartmani",
"meaning": "ಹೇ ಪರಂತಪ, ಈ ಧರ್ಮದಲ್ಲಿ ಅಶ್ರದ್ಧೆಯುಳ್ಳ ಪುರುಷರು ನನ್ನನ್ನು ಪಡೆಯದೆ ಮೃತ್ಯು-ಸಂಸಾರ ಮಾರ್ಗದಲ್ಲಿ ತಿರುಗುತ್ತಾರೆ."
},
{
"id": "9-4",
"chapter": 9,
"verse": 4,
"kannada": "ಮಯಾ ತತಮಿದಂ ಸರ್ವಂ ಜಗದವ್ಯಕ್ತಮೂರ್ತಿನಾ | ಮತ್ಸ್ಥಾನಿ ಸರ್ವಭೂತಾನಿ ನ ಚಾಹಂ ತೇಷ್ವವಸ್ಥಿತಃ ||",
"transliteration": "mayā tatam idaṁ sarvaṁ jagad avyakta-mūrtinā mat-sthāni sarva-bhūtāni na chāhaṁ teṣhv avasthitaḥ",
"meaning": "ಅವ್ಯಕ್ತಮೂರ್ತಿಯಿಂದ ಈ ಸಮಸ್ತ ಜಗತ್ತನ್ನು ನಾನು ವ್ಯಾಪಿಸಿದ್ದೇನೆ. ಎಲ್ಲ ಭೂತಗಳೂ ನನ್ನಲ್ಲಿ ಇವೆ, ಆದರೆ ನಾನು ಅವುಗಳಲ್ಲಿಲ್ಲ."
},
{
"id": "9-5",
"chapter": 9,
"verse": 5,
"kannada": "ನ ಚ ಮತ್ಸ್ಥಾನಿ ಭೂತಾನಿ ಪಶ್ಯ ಮೇ ಯೋಗಮೈಶ್ವರಮ್ | ಭೂತಭೃನ್ನ ಚ ಭೂತಸ್ಥೋ ಮಮಾತ್ಮಾ ಭೂತಭಾವನಃ ||",
"transliteration": "na cha mat-sthāni bhūtāni paśhya me yogam aiśhvaram bhūta-bhṛin na cha bhūta-stho mamātmā bhūta-bhāvanaḥ",
"meaning": "ಭೂತಗಳು ನನ್ನಲ್ಲಿಲ್ಲ, ನನ್ನ ಐಶ್ವರ್ಯಯೋಗವನ್ನು ನೋಡು. ನಾನು ಭೂತಗಳನ್ನು ಧರಿಸುವವನೂ ಅಲ್ಲ, ಭೂತಗಳಲ್ಲಿರುವವನೂ ಅಲ್ಲ - ಆತ್ಮನು ಭೂತಗಳನ್ನು ಉತ್ಪಾದಿಸುವವನಾಗಿದ್ದಾನೆ."
},
{
"id": "9-6",
"chapter": 9,
"verse": 6,
"kannada": "ಯಥಾಕಾಶಸ್ಥಿತೋ ನಿತ್ಯಂ ವಾಯುಃ ಸರ್ವತ್ರಗೋ ಮಹಾನ್ | ತಥಾ ಸರ್ವಾಣಿ ಭೂತಾನಿ ಮತ್ಸ್ಥಾನೀತ್ಯುಪಧಾರಯ ||",
"transliteration": "yathākāśha-sthito nityaṁ vāyuḥ sarvatra-go mahān tathā sarvāṇi bhūtāni mat-sthānīty upadhāraya",
"meaning": "ಮಹಾನಾದ ವಾಯು ಸರ್ವತ್ರಗಾಮಿಯಾಗಿ ಆಕಾಶದಲ್ಲಿ ನಿತ್ಯ ಸ್ಥಿತನಾಗಿರುವಂತೆ, ಎಲ್ಲ ಭೂತಗಳೂ ನನ್ನಲ್ಲಿಯೇ ಇವೆ ಎಂದು ತಿಳಿ."
},
{
"id": "9-7",
"chapter": 9,
"verse": 7,
"kannada": "ಸರ್ವಭೂತಾನಿ ಕೌಂತೇಯ ಪ್ರಕೃತಿಂ ಯಾನ್ತಿ ಮಾಮಿಕಾಮ್ | ಕಲ್ಪಕ್ಷಯೇ ಪುನಸ್ತಾನಿ ಕಲ್ಪಾದೌ ವಿಸೃಜಾಮ್ಯಹಮ್ ||",
"transliteration": "sarva-bhūtāni kaunteya prakṛitiṁ yānti māmikām kalpa-kṣhaye punas tāni kalpādau visṛijāmy aham",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಕಲ್ಪಕ್ಷಯದಲ್ಲಿ ಎಲ್ಲ ಭೂತಗಳೂ ನನ್ನ ಪ್ರಕೃತಿಯಲ್ಲಿ ಪ್ರವೇಶಿಸುತ್ತವೆ. ಕಲ್ಪಾದಿಯಲ್ಲಿ ಅವುಗಳನ್ನು ಪುನಃ ಸೃಷ್ಟಿಸುತ್ತೇನೆ."
},
{
"id": "9-8",
"chapter": 9,
"verse": 8,
"kannada": "ಪ್ರಕೃತಿಂ ಸ್ವಾಮವಷ್ಟಭ್ಯ ವಿಸೃಜಾಮಿ ಪುನಃ ಪುನಃ | ಭೂತಗ್ರಾಮಮಿಮಂ ಕೃತ್ಸ್ನಮವಶಂ ಪ್ರಕೃತೇರ್ವಶಾತ್ ||",
"transliteration": "prakṛitiṁ svām avaṣhṭabhya visṛijāmi punaḥ punaḥ bhūta-grāmam imaṁ kṛitsnam avaśhaṁ prakṛiter vaśhāt",
"meaning": "ನನ್ನ ಪ್ರಕೃತಿಯನ್ನು ಆಶ್ರಯಿಸಿ, ಪ್ರಕೃತಿಯ ವಶದಲ್ಲಿರುವ ಈ ಸಮಸ್ತ ಭೂತಸಮೂಹವನ್ನು ಪುನಃ ಪುನಃ ಸೃಷ್ಟಿಸುತ್ತೇನೆ."
},
{
"id": "9-9",
"chapter": 9,
"verse": 9,
"kannada": "ನ ಚ ಮಾಂ ತಾನಿ ಕರ್ಮಾಣಿ ನಿಬಧ್ನನ್ತಿ ಧನಂಜಯ | ಉದಾಸೀನವದಾಸೀನಮಸಕ್ತಂ ತೇಷು ಕರ್ಮಸು ||",
"transliteration": "na cha māṁ tāni karmāṇi nibadhnanti dhanañjaya udāsīna-vad āsīnam asaktaṁ teṣhu karmasu",
"meaning": "ಹೇ ಧನಂಜಯ, ಈ ಕರ್ಮಗಳು ನನ್ನನ್ನು ಬಂಧಿಸುವುದಿಲ್ಲ. ನಾನು ಆ ಕರ್ಮಗಳಲ್ಲಿ ಅಸಕ್ತನಾಗಿ ಉದಾಸೀನನಂತೆ ಇರುತ್ತೇನೆ."
},
{
"id": "9-10",
"chapter": 9,
"verse": 10,
"kannada": "ಮಯಾಧ್ಯಕ್ಷೇಣ ಪ್ರಕೃತಿಃ ಸೂಯತೇ ಸಚರಾಚರಮ್ | ಹೇತುನಾನೇನ ಕೌಂತೇಯ ಜಗದ್ವಿಪರಿವರ್ತತೇ ||",
"transliteration": "mayādhyakṣheṇa prakṛitiḥ sūyate sa-charācharam hetunānena kaunteya jagad viparivartate",
"meaning": "ನನ್ನ ಅಧ್ಯಕ್ಷತ್ವದಲ್ಲಿ ಪ್ರಕೃತಿ ಚರಾಚರಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ. ಈ ಕಾರಣದಿಂದ ಹೇ ಕೌಂತೇಯ, ಜಗತ್ತು ಪರಿವರ್ತನೆ ಹೊಂದುತ್ತದೆ."
},
{
"id": "9-11",
"chapter": 9,
"verse": 11,
"kannada": "ಅವಜಾನಂತಿ ಮಾಂ ಮೂಢಾ ಮಾನುಷೀಂ ತನುಮಾಶ್ರಿತಮ್ | ಪರಂ ಭಾವಮಜಾನಂತೋ ಮಮ ಭೂತಮಹೇಶ್ವರಮ್ ||",
"transliteration": "avajānanti māṁ mūḍhā mānuṣhīṁ tanum āśhritam paraṁ bhāvam ajānanto mama bhūta-maheśhvaram",
"meaning": "ಮೂಢರು ಮಾನುಷದೇಹವನ್ನು ಧರಿಸಿರುವ ನನ್ನನ್ನು ತುಚ್ಛವಾಗಿ ನೋಡುತ್ತಾರೆ. ನನ್ನ ಪರಮಭಾವವಾದ ಭೂತಮಹೇಶ್ವರತ್ವವನ್ನು ಅರಿಯರು."
},
{
"id": "9-12",
"chapter": 9,
"verse": 12,
"kannada": "ಮೋಘಾಶಾ ಮೋಘಕರ್ಮಾಣೋ ಮೋಘಜ್ಞಾನಾ ವಿಚೇತಸಃ | ರಾಕ್ಷಸೀಮಾಸುರೀಂ ಚೈವ ಪ್ರಕೃತಿಂ ಮೋಹಿನೀಂ ಶ್ರಿತಾಃ ||",
"transliteration": "moghāśhā mogha-karmāṇo mogha-jñānā vicheetasaḥ rākṣhasīm āsurīṁ chaiva prakṛitiṁ mohinīṁ śhritāḥ",
"meaning": "ಮೋಹಿತರಾದ ಅವರು ಮೋಘಾಶೆಯುಳ್ಳವರಾಗಿ, ಮೋಘಕರ್ಮಿಗಳಾಗಿ, ಮೋಘಜ್ಞಾನಿಗಳಾಗಿ, ರಾಕ್ಷಸೀ ಮತ್ತು ಆಸುರೀ ಪ್ರಕೃತಿಯನ್ನು ಆಶ್ರಯಿಸಿರುತ್ತಾರೆ."
},
{
"id": "9-13",
"chapter": 9,
"verse": 13,
"kannada": "ಮಹಾತ್ಮಾನಸ್ತು ಮಾಂ ಪಾರ್ಥ ದೈವೀಂ ಪ್ರಕೃತಿಮಾಶ್ರಿತಾಃ | ಭಜಂತ್ಯನನ್ಯಮನಸೋ ಜ್ಞಾತ್ವಾ ಭೂತಾದಿಮವ್ಯಯಮ್ ||",
"transliteration": "mahātmānas tu māṁ pārtha daivīṁ prakṛitim āśhritāḥ bhajanty ananya-manaso jñātvā bhūtādim avyayam",
"meaning": "ಹೇ ಪಾರ್ಥ, ಮಹಾತ್ಮರು ದೈವೀಪ್ರಕೃತಿಯನ್ನು ಆಶ್ರಯಿಸಿ, ಭೂತಾದಿಯೂ ಅವ್ಯಯನೂ ಆದ ನನ್ನನ್ನು ಅನನ್ಯಮನಸ್ಸಿನಿಂದ ಭಜಿಸುತ್ತಾರೆ."
},
{
"id": "9-14",
"chapter": 9,
"verse": 14,
"kannada": "ಸತತಂ ಕೀರ್ತಯಂತೋ ಮಾಂ ಯತನ್ತಶ್ಚ ದೃಢವ್ರತಾಃ | ನಮಸ್ಯಂತಶ್ಚ ಮಾಂ ಭಕ್ತ್ಯಾ ನಿತ್ಯಯುಕ್ತಾ ಉಪಾಸತೇ ||",
"transliteration": "satataṁ kīrtayanto māṁ yatantaśh cha dṛiḍha-vratāḥ namasyantaśh cha māṁ bhaktyā nitya-yuktā upāsate",
"meaning": "ನಿರಂತರವಾಗಿ ನನ್ನನ್ನು ಕೀರ್ತಿಸುತ್ತಾ, ಯತ್ನಿಸುತ್ತಾ, ದೃಢವ್ರತರಾಗಿ, ಭಕ್ತಿಯಿಂದ ನಮಸ್ಕರಿಸುತ್ತಾ, ನಿತ್ಯಯುಕ್ತರಾಗಿ ನನ್ನನ್ನು ಉಪಾಸಿಸುತ್ತಾರೆ."
},
{
"id": "9-15",
"chapter": 9,
"verse": 15,
"kannada": "ಜ್ಞಾನಯಜ್ಞೇನ ಚಾಪ್ಯನ್ಯೇ ಯಜನ್ತೋ ಮಾಮುಪಾಸತೇ | ಏಕತ್ವೇನ ಪೃಥಕ್ತ್ವೇನ ಬಹುಧಾ ವಿಶ್ವತೋಮುಖಮ್ ||",
"transliteration": "jñāna-yajñena chāpy anye yajanto mām upāsate ekatvena pṛithaktvena bahudhā viśhvato-mukham",
"meaning": "ಇತರರು ಜ್ಞಾನಯಜ್ಞದಿಂದ ನನ್ನನ್ನು ಯಜಿಸುತ್ತಾ, ಏಕತ್ವದಿಂದ, ಪೃಥಕ್ತ್ವದಿಂದ, ಬಹುಧಾ, ವಿಶ್ವತೋಮುಖನಾಗಿ ನನ್ನನ್ನು ಉಪಾಸಿಸುತ್ತಾರೆ."
},
{
"id": "9-16",
"chapter": 9,
"verse": 16,
"kannada": "ಅಹಂ ಕ್ರತುರಹಂ ಯಜ್ಞಃ ಸ್ವಧಾಹಮಹಮೌಷಧಮ್ | ಮಂತ್ರೋಽಹಮಹಮೇವಾಜ್ಯಮಹಮಗ್ನಿರಹಂ ಹುತಮ್ ||",
"transliteration": "ahaṁ kratur ahaṁ yajñaḥ svadhāham aham auṣhadham mantro'ham aham evājyam aham agnir ahaṁ hutam",
"meaning": "ನಾನೇ ಕ್ರತು, ನಾನೇ ಯಜ್ಞ, ನಾನೇ ಸ್ವಧಾ, ನಾನೇ ಔಷಧ, ನಾನೇ ಮಂತ್ರ, ನಾನೇ ಅಜ್ಯ, ನಾನೇ ಅಗ್ನಿ, ನಾನೇ ಹವನ."
},
{
"id": "9-17",
"chapter": 9,
"verse": 17,
"kannada": "ಪಿತಾಹಮಸ್ಯ ಜಗತೋ ಮಾತಾ ಧಾತಾ ಪಿತಾಮಹಃ | ವೇದ್ಯಂ ಪವಿತ್ರಮೋಂಕಾರ ಋಕ್ಸಾಮ ಯಜುರೇವ ಚ ||",
"transliteration": "pitāham asya jagato mātā dhātā pitāmahaḥ vedyam pavitram omkāra ṛik sāma yajur eva cha",
"meaning": "ಈ ಜಗತ್ತಿನ ಪಿತಾ, ಮಾತಾ, ಧಾತಾ, ಪಿತಾಮಹ, ವೇದ್ಯ, ಪವಿತ್ರ, ಓಂಕಾರ, ಋಕ್, ಸಾಮ, ಯಜುಸ್ಸು ಎಲ್ಲವೂ ನಾನೇ."
},
{
"id": "9-18",
"chapter": 9,
"verse": 18,
"kannada": "ಗತಿರ್ಭರ್ತಾ ಪ್ರಭುಃ ಸಾಕ್ಷೀ ನಿವಾಸಃ ಶರಣಂ ಸುಹೃತ್ | ಪ್ರಭವಃ ಪ್ರಲಯಃ ಸ್ಥಾನಂ ನಿಧಾನಂ ಬೀಜಮವ್ಯಯಮ್ ||",
"transliteration": "gatir bhartā prabhuḥ sākṣhī nivāsaḥ śharaṇaṁ suhṛit prabhavaḥ pralayaḥ sthānaṁ nidhānaṁ bījam avyayam",
"meaning": "ಗತಿ, ಭರ್ತಾ, ಪ್ರಭು, ಸಾಕ್ಷಿ, ನಿವಾಸ, ಶರಣ, ಸುಹೃತ್, ಪ್ರಭವ, ಪ್ರಲಯ, ಸ್ಥಾನ, ನಿಧಾನ, ಬೀಜ, ಅವ್ಯಯ - ಎಲ್ಲವೂ ನಾನೇ."
},
{
"id": "9-19",
"chapter": 9,
"verse": 19,
"kannada": "ತಪಾಮ್ಯಹಮಹಂ ವರ್ಷಂ ನಿಗೃಹ್ಣಾಮ್ಯುತ್ಸೃಜಾಮಿ ಚ | ಅಮೃತಂ ಚೈವ ಮೃತ್ಯುಶ್ಚ ಸದಸಚ್ಚಾಹಮರ್ಜುನ ||",
"transliteration": "tapāmy aham ahaṁ varṣhaṁ nigṛihṇāmy utsṛijāmi cha amṛitaṁ chaiva mṛityuśh cha sad asach chāham arjuna",
"meaning": "ನಾನೇ ತಪಿಸುತ್ತೇನೆ, ಮಳೆ ಕೊಡುತ್ತೇನೆ, ತಡೆದಿಟ್ಟುಕೊಳ್ಳುತ್ತೇನೆ, ಬಿಡುತ್ತೇನೆ. ಅಮೃತ ಮತ್ತು ಮೃತ್ಯು, ಸತ್ ಮತ್ತು ಅಸತ್ ಎಲ್ಲವೂ ನಾನೇ, ಹೇ ಅರ್ಜುನ."
},
{
"id": "9-20",
"chapter": 9,
"verse": 20,
"kannada": "ತ್ರೈವಿದ್ಯಾ ಮಾಂ ಸೋಮಪಾಃ ಪೂತಪಾಪಾ ಯಜ್ಞೈರಿಷ್ಟ್ವಾ ಸ್ವರ್ಗತಿಂ ಪ್ರಾರ್ಥಯಂತೇ | ತೇ ಪುಣ್ಯಮಾಸಾದ್ಯ ಸುರೇಂದ್ರಲೋಕಮಶ್ನನ್ತಿ ದಿವ್ಯಾನ್ದಿವಿ ದೇವಭೋಗಾನ್ ||",
"transliteration": "trai-vidyā māṁ soma-pāḥ pūta-pāpā yajñair iṣhṭvā svargatiṁ prārthayante te puṇyam āsādya surendra-lokam aśhnanti divyān divi deva-bhogān",
"meaning": "ತ್ರೈವಿದ್ಯರು (ತ್ರಿವೇದಜ್ಞರು) ಸೋಮಪಾನ ಮಾಡಿ ಪೂತಪಾಪರಾಗಿ, ಯಜ್ಞಗಳಿಂದ ನನ್ನನ್ನು ಯಜಿಸಿ ಸ್ವರ್ಗಗತಿಯನ್ನು ಬಯಸುತ್ತಾರೆ. ಅವರು ಪುಣ್ಯವನ್ನು ಪಡೆದು ಇಂದ್ರಲೋಕವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "9-21",
"chapter": 9,
"verse": 21,
"kannada": "ತೇ ತಂ ಭುಕ್ತ್ವಾ ಸ್ವರ್ಗಲೋಕಂ ವಿಶಾಲಂ ಕ್ಷೀಣೇ ಪುಣ್ಯೇ ಮರ್ತ್ಯಲೋಕಂ ವಿಶನ್ತಿ | ಏವಂ ತ್ರಯೀಧರ್ಮಮನುಪ್ರಪನ್ನಾ ಗತಾಗತಂ ಕಾಮಕಾಮಾ ಲಭನ್ತೇ ||",
"transliteration": "te taṁ bhuktvā svarga-lokaṁ viśhālaṁ kṣhīṇe puṇye martya-lokaṁ viśhanti evaṁ trayī-dharmam anuprapannā gatāgataṁ kāma-kāmā labhante",
"meaning": "ಅವರು ಆ ವಿಶಾಲ ಸ್ವರ್ಗಲೋಕವನ್ನು ಅನುಭವಿಸಿ, ಪುಣ್ಯ ಕ್ಷಯವಾದ ಮೇಲೆ ಮರ್ತ್ಯಲೋಕಕ್ಕೆ ಬರುತ್ತಾರೆ. ಹೀಗೆ ತ್ರಯೀಧರ್ಮವನ್ನು ಅನುಸರಿಸುವವರು ಗತಾಗತವನ್ನು ಪಡೆದು ಕಾಮನೆಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "9-22",
"chapter": 9,
"verse": 22,
"kannada": "ಅನನ್ಯಾಶ್ಚಿಂತಯಂತೋ ಮಾಂ ಯೇ ಜನಾಃ ಪರ್ಯುಪಾಸತೇ | ತೇಷಾಂ ನಿತ್ಯಾಭಿಯುಕ್ತಾನಾಂ ಯೋಗಕ್ಷೇಮಂ ವಹಾಮ್ಯಹಮ್ ||",
"transliteration": "ananyāśh chintayanto māṁ ye janāḥ paryupāsate teṣhāṁ nityābhiyuktānāṁ yoga-kṣhemaṁ vahāmy aham",
"meaning": "ಅನನ್ಯಭಕ್ತಿಯಿಂದ ನನ್ನನ್ನೇ ಚಿಂತಿಸುತ್ತಾ, ನಿರಂತರವಾಗಿ ನನ್ನ ಧ್ಯಾನದಲ್ಲಿರುವವರ ಯೋಗಕ್ಷೇಮವನ್ನು ನಾನೇ ವಹಿಸಿಕೊಳ್ಳುತ್ತೇನೆ."
},
{
"id": "9-23",
"chapter": 9,
"verse": 23,
"kannada": "ಯೇಽಪ್ಯನ್ಯದೇವತಾಭಕ್ತಾ ಯಜನ್ತೇ ಶ್ರದ್ಧಯಾನ್ವಿತಾಃ | ತೇಽಪಿ ಮಾಮೇವ ಕೌಂತೇಯ ಯಜನ್ತ್ಯವಿಧಿಪೂರ್ವಕಮ್ ||",
"transliteration": "ye 'py anya-devatā-bhaktā yajante śhraddhayānvitāḥ te 'pi mām eva kaunteya yajanty avidhi-pūrvakam",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಇತರ ದೇವತೆಗಳ ಭಕ್ತರು ಶ್ರದ್ಧೆಯಿಂದ ಯಜಿಸಿದರೂ, ಅವಿಧಿಪೂರ್ವಕವಾಗಿ ನನ್ನನ್ನೇ ಯಜಿಸುತ್ತಾರೆ."
},
{
"id": "9-24",
"chapter": 9,
"verse": 24,
"kannada": "ಅಹಂ ಹಿ ಸರ್ವಯಜ್ಞಾನಾಂ ಭೋಕ್ತಾ ಚ ಪ್ರಭುರೇವ ಚ | ನ ತು ಮಾಮಭಿಜಾನನ್ತಿ ತತ್ತ್ವೇನಾತಶ್ಚ್ಯವಿನ್ತಿ ತೇ ||",
"transliteration": "ahaṁ hi sarva-yajñānāṁ bhoktā cha prabhur eva cha na tu mām abhijānanti tattvenātaśh chyavanti te",
"meaning": "ಯಾಕೆಂದರೆ ನಾನು ಸರ್ವಯಜ್ಞಗಳ ಭೋಕ್ತಾ ಮತ್ತು ಪ್ರಭುವೂ ಆಗಿದ್ದೇನೆ. ಆದರೆ ಅವರು ನನ್ನನ್ನು ತತ್ತ್ವತಃ ತಿಳಿಯದೆ, ಆದ್ದರಿಂದ ನಾಶವಾಗುತ್ತಾರೆ."
},
{
"id": "9-25",
"chapter": 9,
"verse": 25,
"kannada": "ಯಾನ್ತಿ ದೇವವ್ರತಾ ದೇವಾನ್ಪಿತೄನ್ಯಾನ್ತಿ ಪಿತೃವ್ರತಾಃ | ಭೂತಾನಿ ಯಾನ್ತಿ ಭೂತೇಜ್ಯಾ ಯಾನ್ತಿ ಮದ್ಯಾಜಿನೋಽಪಿ ಮಾಮ್ ||",
"transliteration": "yānti deva-vratā devān pitṝīn yānti pitṛi-vratāḥ bhūtāni yānti bhūtejyā yānti mad-yājino 'pi mām",
"meaning": "ದೇವವ್ರತರಾದವರು ದೇವತೆಗಳನ್ನು, ಪಿತೃವ್ರತರಾದವರು ಪಿತೃಗಳನ್ನು, ಭೂತೇಜ್ಯರು ಭೂತಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ. ನನ್ನ ಯಜನೆ ಮಾಡುವವರೂ ನನ್ನನ್ನೇ ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "9-26",
"chapter": 9,
"verse": 26,
"kannada": "ಪತ್ರಂ ಪುಷ್ಪಂ ಫಲಂ ತೋಯಂ ಯೋ ಮೇ ಭಕ್ತ್ಯಾ ಪ್ರಯಚ್ಛತಿ | ತದಹಂ ಭಕ್ತ್ಯುಪಹೃತಮಶ್ನಾಮಿ ಪ್ರಯತಾತ್ಮನಃ ||",
"transliteration": "patraṁ puṣhpaṁ phalaṁ toyaṁ yo me bhaktyā prayachchhati tad ahaṁ bhakty-upahṛitam aśhnāmi prayatātmanaḥ",
"meaning": "ಯಾರು ಭಕ್ತಿಯಿಂದ ಪತ್ರ, ಪುಷ್ಪ, ಫಲ, ತೋಯಗಳನ್ನು ನನಗೆ ಅರ್ಪಿಸುತ್ತಾರೆಯೋ, ಆ ಪ್ರಯತಾತ್ಮನಿಂದ ಭಕ್ತಿಯಿಂದ ಅರ್ಪಿಸಲ್ಪಟ್ಟ ಅರ್ಪಣೆಯನ್ನು ನಾನು ಸ್ವೀಕರಿಸುತ್ತೇನೆ."
},
{
"id": "9-27",
"chapter": 9,
"verse": 27,
"kannada": "ಯತ್ಕರೋಷಿ ಯದಶ್ನಾಸಿ ಯಜ್ಜುಹೋಷಿ ದದಾಸಿ ಯತ್ | ಯತ್ತಪಸ್ಯಸಿ ಕೌಂತೇಯ ತತ್ಕುರುಷ್ವ ಮದರ್ಪಣಮ್ ||",
"transliteration": "yat karoṣhi yad aśhnāsi yaj juhoṣhi dadāsi yat yat tapasyasi kaunteya tat kuruṣhva mad-arpaṇam",
"meaning": "ಹೇ ಕೌಂತೇಯ, ನೀನು ಏನು ಮಾಡುತ್ತೀಯೋ, ಏನು ಭಕ್ಷಿಸುತ್ತೀಯೋ, ಏನು ಹೋಮ ಮಾಡುತ್ತೀಯೋ, ಏನು ದಾನ ಮಾಡುತ್ತೀಯೋ, ಏನು ತಪಸ್ಸು ಮಾಡುತ್ತೀಯೋ, ಅದೆಲ್ಲವನ್ನೂ ನನಗೆ ಅರ್ಪಣ ಮಾಡು."
},
{
"id": "9-28",
"chapter": 9,
"verse": 28,
"kannada": "ಶುಭಾಶುಭಫಲೈರೇವಂ ಮೋಕ್ಷ್ಯಸೇ ಕರ್ಮಬಂಧನೈಃ | ಸಂನ್ಯಾಸಯೋಗಯುಕ್ತಾತ್ಮಾ ವಿಮುಕ್ತೋ ಮಾಮುಪೈಷ್ಯಸಿ ||",
"transliteration": "śhubhāśhubha-phalair evaṁ mokṣhyase karma-bandhanaiḥ sannyāsa-yoga-yuktātmā vimukto mām upaiṣhyasi",
"meaning": "ಶುಭಾಶುಭ ಫಲಗಳಿಂದ ನೀನು ಕರ್ಮಬಂಧನಗಳಿಂದ ಮುಕ್ತನಾಗುವೆ. ಸಂನ್ಯಾಸಯೋಗಯುಕ್ತಾತ್ಮನಾಗಿ ಮುಕ್ತನಾಗಿ ನನ್ನನ್ನು ಪಡೆಯುವೆ."
},
{
"id": "9-29",
"chapter": 9,
"verse": 29,
"kannada": "ಸಮೋಽಹಂ ಸರ್ವಭೂತೇಷು ನ ಮೇ ದ್ವೇಷ್ಯೋಽಸ್ತಿ ನ ಪ್ರಿಯಃ | ಯೇ ಭಜನ್ತಿ ತು ಮಾಂ ಭಕ್ತ್ಯಾ ಮಯಿ ತೇ ತೇಷು ಚಾಪ್ಯಹಮ್ ||",
"transliteration": "samo 'haṁ sarva-bhūteṣhu na me dveṣhyo 'sti na priyaḥ ye bhajanti tu māṁ bhaktyā mayi te teṣhu chāpy aham",
"meaning": "ನಾನು ಸರ್ವಭೂತಗಳಲ್ಲಿ ಸಮನಾಗಿದ್ದೇನೆ. ನನಗೆ ದ್ವೇಷ್ಯನೂ ಇಲ್ಲ, ಪ್ರಿಯನೂ ಇಲ್ಲ. ಆದರೆ ಯಾರು ನನ್ನನ್ನು ಭಕ್ತಿಯಿಂದ ಭಜಿಸುತ್ತಾರೆಯೋ, ಅವರು ನನ್ನಲ್ಲಿಯೂ, ನಾನು ಅವರಲ್ಲಿಯೂ ಇರುತ್ತೇನೆ."
},
{
"id": "9-30",
"chapter": 9,
"verse": 30,
"kannada": "ಅಪಿ ಚೇತ್ಸುದುರಾಚಾರೋ ಭಜತೇ ಮಾಮನನ್ಯಭಾಕ್ | ಸಾಧುರೇವ ಸ ಮಂತವ್ಯಃ ಸಮ್ಯಗ್ವ್ಯವಸಿತೋ ಹಿ ಸಃ ||",
"transliteration": "api chet su-durāchāro bhajate mām ananya-bhāk sādhur eva sa mantavyaḥ samyag vyavasito hi saḥ",
"meaning": "ಸುದುರಾಚಾರನಾದರೂ ಯಾರು ಅನನ್ಯಭಕ್ತಿಯಿಂದ ನನ್ನನ್ನು ಭಜಿಸುತ್ತಾನೆಯೋ, ಅವನು ಸಾಧುವೆಂದೇ ತಿಳಿಯಬೇಕು. ಯಾಕೆಂದರೆ ಅವನು ಸಮ್ಯಗ್ವ್ಯವಸಿತನಾಗಿದ್ದಾನೆ."
},
{
"id": "9-31",
"chapter": 9,
"verse": 31,
"kannada": "ಕ್ಷಿಪ್ರಂ ಭವತಿ ಧರ್ಮಾತ್ಮಾ ಶಶ್ವಚ್ಛಾನ್ತಿಂ ನಿಗಚ್ಛತಿ | ಕೌಂತೇಯ ಪ್ರತಿಜಾನೀಹಿ ನ ಮೇ ಭಕ್ತಃ ಪ್ರಣಶ್ಯತಿ ||",
"transliteration": "kṣhipraṁ bhavati dharmātmā śhaśhvach-chhāntiṁ nigachchhati kaunteya pratijānīhi na me bhaktaḥ praṇaśhyati",
"meaning": "ಅವನು ಶೀಘ್ರವಾಗಿ ಧರ್ಮಾತ್ಮನಾಗಿ ಶಾಶ್ವತ ಶಾಂತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಹೇ ಕೌಂತೇಯ, ಪ್ರತಿಜ್ಞೆ ಮಾಡುತ್ತೇನೆ - ನನ್ನ ಭಕ್ತನು ನಾಶವಾಗುವುದಿಲ್ಲ."
},
{
"id": "9-32",
"chapter": 9,
"verse": 32,
"kannada": "ಮಾಂ ಹಿ ಪಾರ್ಥ ವ್ಯಪಾಶ್ರಿತ್ಯ ಯೇಽಪಿ ಸ್ಯುಃ ಪಾಪಯೋನಯಃ | ಸ್ತ್ರಿಯೋ ವೈಶ್ಯಾಸ್ತಥಾ ಶೂದ್ರಾಸ್ತೇಽಪಿ ಯಾನ್ತಿ ಪರಾಂ ಗತಿಮ್ ||",
"transliteration": "māṁ hi pārtha vyapāśhritya ye 'pi syuḥ pāpa-yonayaḥ striyo vaiśhyās tathā śhūdrās te 'pi yānti parāṁ gatim",
"meaning": "ಹೇ ಪಾರ್ಥ, ಪಾಪಯೋನಿಯಾದವರೂ, ಸ್ತ್ರೀಯರೂ, ವೈಶ್ಯರೂ, ಶೂದ್ರರೂ ನನ್ನನ್ನು ಶರಣಾಗಿದ್ದರೆ ಪರಮಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "9-33",
"chapter": 9,
"verse": 33,
"kannada": "ಕಿಂ ಪುನರ್ಬ್ರಾಹ್ಮಣಾಃ ಪುಣ್ಯಾ ಭಕ್ತಾ ರಾಜರ್ಷಯಸ್ತಥಾ | ಅನಿತ್ಯಮಸುಖಂ ಲೋಕಮಿಮಂ ಪ್ರಾಪ್ಯ ಭಜಸ್ವ ಮಾಮ್ ||",
"transliteration": "kiṁ punar brāhmaṇāḥ puṇyā bhaktā rājarṣhayas tathā anityam asukhaṁ lokam imaṁ prāpya bhajasva mām",
"meaning": "ಹಾಗಾದರೆ ಪುಣ್ಯಶೀಲರಾದ ಬ್ರಾಹ್ಮಣರೂ, ಭಕ್ತರಾದ ರಾಜರ್ಷಿಗಳೂ ಎಷ್ಟೋ ಮೇಲು. ಆದ್ದರಿಂದ ಈ ಅನಿತ್ಯವಾದ, ಅಸುಖವಾದ ಲೋಕವನ್ನು ಪಡೆದು ನನ್ನನ್ನು ಭಜಿಸು."
},
{
"id": "9-34",
"chapter": 9,
"verse": 34,
"kannada": "ಮನ್ಮನಾ ಭವ ಮದ್ಭಕ್ತೋ ಮದ್ಯಾಜೀ ಮಾಂ ನಮಸ್ಕುರು | ಮಾಮೇವೈಷ್ಯಸಿ ಯುಕ್ತ್ವೈವಮಾತ್ಮಾನಂ ಮತ್ಪರಾಯಣಃ ||",
"transliteration": "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣhyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ",
"meaning": "ನನ್ನಲ್ಲಿ ಮನಸ್ಸನ್ನು ಇಟ್ಟುಕೋ, ನನ್ನ ಭಕ್ತನಾಗು, ನನ್ನ ಯಜನೆ ಮಾಡು, ನನಗೆ ನಮಸ್ಕರಿಸು. ಈ ರೀತಿ ನನ್ನಲ್ಲಿ ಆತ್ಮವನ್ನು ಏಕಾಗ್ರಗೊಳಿಸಿದವನು ನನ್ನನ್ನೇ ಪಡೆಯುವೆ."
},

    ]
  },
  {
    id: 10,
    title: "Vibhuti Yoga",
    kannadaTitle: "ವಿಭೂತಿ ಯೋಗ",
    description: "ದೈವಿಕ ವೈಭವಗಳು - Divine manifestations",
    totalVerses: 42,
    verses: [
{
"id": "10-1",
"chapter": 10,
"verse": 1,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಭೂಯ ಏವ ಮಹಾಬಾಹೋ ಶೃಣು ಮೇ ಪರಮಂ ವಚಃ | ಯತ್ತೇಽಹಂ ಪ್ರೀಯಮಾಣಾಯ ವಕ್ಷ್ಯಾಮಿ ಹಿತಕಾಮ್ಯಯಾ ||",
"transliteration": "śhrī bhagavān uvācha bhūya eva mahā-bāho śhṛiṇu me paramaṁ vachaḥ yat te'haṁ prīyamāṇāya vakṣhyāmi hita-kāmyayā",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಮತ್ತೊಮ್ಮೆ ಹೇ ಮಹಾಬಾಹೋ, ನನ್ನ ಪರಮವಾಕ್ಯವನ್ನು ಕೇಳು. ನಿನಗೆ ಪ್ರೀತಿಯಿಂದ ಹಿತವನ್ನು ಬಯಸಿ ಹೇಳುತ್ತೇನೆ."
},
{
"id": "10-2",
"chapter": 10,
"verse": 2,
"kannada": "ನ ಮೇ ವಿದುಃ ಸುರಗಣಾಃ ಪ್ರಭವಂ ನ ಮಹರ್ಷಯಃ | ಅಹಮಾದಿರ್ಹಿ ದೇವಾನಾಂ ಮಹರ್ಷೀಣಾಂ ಚ ಸರ್ವಶಃ ||",
"transliteration": "na me viduḥ sura-gaṇāḥ prabhavaṁ na maharṣhayaḥ aham ādir hi devānāṁ maharṣhīṇāṁ cha sarvaśhaḥ",
"meaning": "ದೇವಗಣಗಳೂ, ಮಹರ್ಷಿಗಳೂ ನನ್ನ ಪ್ರಭವವನ್ನು ತಿಳಿಯರು. ಯಾಕೆಂದರೆ ನಾನೇ ಸರ್ವಥಾ ದೇವತೆಗಳಿಗೂ ಮಹರ್ಷಿಗಳಿಗೂ ಆದಿಯಾಗಿದ್ದೇನೆ."
},
{
"id": "10-3",
"chapter": 10,
"verse": 3,
"kannada": "ಯೋ ಮಾಮಜಮನಾದಿಂ ಚ ವೇತ್ತಿ ಲೋಕಮಹೇಶ್ವರಮ್ | ಅಸಮ್ಮೂಢಃ ಸ ಮರ್ತ್ಯೇಷು ಸರ್ವಪಾಪೈಃ ಪ್ರಮುಚ್ಯತೇ ||",
"transliteration": "yo mām ajam anādiṁ cha vetti loka-maheśhvaram asammūḍhaḥ sa martyeṣhu sarva-pāpaiḥ pramuchyate",
"meaning": "ಯಾರು ನನ್ನನ್ನು ಅಜ, ಅನಾದಿ, ಲೋಕಮಹೇಶ್ವರನೆಂದು ತಿಳಿಯುತ್ತಾನೆಯೋ, ಅವನು ಮರ್ತ್ಯರಲ್ಲಿ ಅಸಮ್ಮೂಢನಾಗಿ ಸರ್ವಪಾಪಗಳಿಂದ ಮುಕ್ತನಾಗುತ್ತಾನೆ."
},
{
"id": "10-4",
"chapter": 10,
"verse": 4,
"kannada": "ಬುದ್ಧಿರ್ಜ್ಞಾನಮಸಮ್ಮೋಹಃ ಕ್ಷಮಾ ಸತ್ಯಂ ದಮಃ ಶಮಃ | ಸುಖಂ ದುಃಖಂ ಭವೋಽಭಾವೋ ಭಯಂ ಚಾಭಯಮೇವ ಚ ||",
"transliteration": "buddhir jñānam asammohaḥ kṣhamā satyaṁ damaḥ śhamaḥ sukhaṁ duḥkhaṁ bhavo 'bhāvo bhayaṁ chābhayam eva cha",
"meaning": "ಬುದ್ಧಿ, ಜ್ಞಾನ, ಅಸಮ್ಮೋಹ, ಕ್ಷಮಾ, ಸತ್ಯ, ದಮ, ಶಮ, ಸುಖ, ದುಃಖ, ಭವ, ಅಭಾವ, ಭಯ, ಅಭಯ - ಇವೆಲ್ಲವೂ ನನ್ನಿಂದಲೇ."
},
{
"id": "10-5",
"chapter": 10,
"verse": 5,
"kannada": "ಅಹಿಂಸಾ ಸಮತಾ ತುಷ್ಟಿಸ್ತಪೋ ದಾನಂ ಯಶೋಽಯಶಃ | ಭವಂತಿ ಭಾವಾ ಭೂತಾನಾಂ ಮತ್ತ ಏವ ಪೃಥಗ್ವಿಧಾಃ ||",
"transliteration": "ahiṁsā samatā tuṣhṭis tapo dānaṁ yaśho 'yaśhaḥ bhavanti bhāvā bhūtānāṁ matta eva pṛithag-vidhāḥ",
"meaning": "ಅಹಿಂಸೆ, ಸಮತಾ, ತುಷ್ಟಿ, ತಪಸ್ಸು, ದಾನ, ಯಶಸ್ಸು, ಅಯಶಸ್ಸು - ಭೂತಗಳ ಈ ವಿವಿಧ ಭಾವಗಳು ನನ್ನಿಂದಲೇ ಉಂಟಾಗುತ್ತವೆ."
},
{
"id": "10-6",
"chapter": 10,
"verse": 6,
"kannada": "ಮಹರ್ಷಯಃ ಸಪ್ತ ಪೂರ್ವೇ ಚತ್ವಾರೋ ಮನವಸ್ತಥಾ | ಮದ್ಭಾವಾ ಮಾನಸಾ ಜಾತಾ ಯೇಷಾಂ ಲೋಕ ಇಮಾಃ ಪ್ರಜಾಃ ||",
"transliteration": "maharṣhayaḥ sapta pūrve chatvāro manavas tathā mad-bhāvā mānasā jātā yeṣhāṁ loka imāḥ prajāḥ",
"meaning": "ಪೂರ್ವದ ಸಪ್ತಮಹರ್ಷಿಗಳೂ, ಚತುರ್ಮನುಗಳೂ ನನ್ನ ಮಾನಸಪುತ್ರರಾಗಿದ್ದಾರೆ. ಇವರಿಂದ ಈ ಲೋಕದ ಪ್ರಜೆಗಳು ಹುಟ್ಟಿದ್ದಾರೆ."
},
{
"id": "10-7",
"chapter": 10,
"verse": 7,
"kannada": "ಏತಂ ವಿಭೂತಿಂ ಯೋಗಂ ಚ ಮಮ ಯೋ ವೇತ್ತಿ ತತ್ತ್ವತಃ | ಸೋಽವಿಕಲ್ಪೇನ ಯೋಗೇನ ಯುಜ್ಯತೇ ನಾತ್ರ ಸಂಶಯಃ ||",
"transliteration": "etaṁ vibhūtiṁ yogaṁ cha mama yo vetti tattvataḥ so 'vikalpena yogena yujyate nātra sanśhayaḥ",
"meaning": "ಯಾರು ನನ್ನ ಈ ವಿಭೂತಿ ಮತ್ತು ಯೋಗವನ್ನು ತತ್ತ್ವತಃ ತಿಳಿಯುತ್ತಾನೆಯೋ, ಅವನು ಅವಿಕಲ್ಪಯೋಗದಿಂದ ಯುಕ್ತನಾಗುತ್ತಾನೆ - ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ."
},
{
"id": "10-8",
"chapter": 10,
"verse": 8,
"kannada": "ಅಹಂ ಸರ್ವಸ್ಯ ಪ್ರಭವೋ ಮತ್ತಃ ಸರ್ವಂ ಪ್ರವರ್ತತೇ | ಇತಿ ಮತ್ವಾ ಭಜಂತೇ ಮಾಂ ಬುಧಾ ಭಾವಸಮನ್ವಿತಾಃ ||",
"transliteration": "ahaṁ sarvasya prabhavo mattaḥ sarvaṁ pravartate iti matvā bhajante māṁ budhā bhāva-samanvitāḥ",
"meaning": "ನಾನು ಸರ್ವದ ಪ್ರಭವ, ನನ್ನಿಂದ ಸರ್ವಂ ಪ್ರವರ್ತಿಸುತ್ತದೆ - ಇದನ್ನರಿತು ಭಾವಸಮನ್ವಿತರಾದ ಬುಧರು ನನ್ನನ್ನು ಭಜಿಸುತ್ತಾರೆ."
},
{
"id": "10-9",
"chapter": 10,
"verse": 9,
"kannada": "ಮಚ್ಚಿತ್ತಾ ಮದ್ಗತಪ್ರಾಣಾ ಬೋಧಯನ್ತಃ ಪರಸ್ಪರಮ್ | ಕಥಯನ್ತಶ್ಚ ಮಾಂ ನಿತ್ಯಂ ತುಷ್ಯನ್ತಿ ಚ ರಮನ್ತಿ ಚ ||",
"transliteration": "mach-chittā mad-gata-prāṇā bodhayantaḥ parasparam kathayantaśh cha māṁ nityaṁ tuṣhyanti cha ramanti cha",
"meaning": "ನನ್ನಲ್ಲಿಯೇ ಚಿತ್ತವನ್ನಿಟ್ಟು, ನನ್ನಲ್ಲಿಯೇ ಪ್ರಾಣವನ್ನಿಟ್ಟು, ಪರಸ್ಪರ ಬೋಧಿಸುತ್ತಾ, ನನ್ನನ್ನು ನಿತ್ಯ ಕಥನ ಮಾಡುತ್ತಾ, ತುಷ್ಟರಾಗಿ, ರಮಿಸುತ್ತಾರೆ."
},
{
"id": "10-10",
"chapter": 10,
"verse": 10,
"kannada": "ತೇಷಾಂ ಸತತಯುಕ್ತಾನಾಂ ಭಜತಾಂ ಪ್ರೀತಿಪೂರ್ವಕಮ್ | ದದಾಮಿ ಬುದ್ಧಿಯೋಗಂ ತಂ ಯೇನ ಮಾಮುಪಯಾನ್ತಿ ತೇ ||",
"transliteration": "teṣhāṁ satata-yuktānāṁ bhajatāṁ prīti-pūrvakam dadāmi buddhi-yogaṁ taṁ yena mām upayānti te",
"meaning": "ಸತತಯುಕ್ತರಾಗಿ ಪ್ರೀತಿಪೂರ್ವಕವಾಗಿ ಭಜಿಸುವವರಿಗೆ, ಅವರು ನನ್ನನ್ನು ಪಡೆಯುವಂತೆ, ನಾನು ಬುದ್ಧಿಯೋಗವನ್ನು ಕೊಡುತ್ತೇನೆ."
},
{
"id": "10-11",
"chapter": 10,
"verse": 11,
"kannada": "ತೇಷಾಮೇವಾನುಕಂಪಾರ್ಥಮಹಮಜ್ಞಾನಜಂ ತಮಃ | ನಾಶಯಾಮ್ಯಾತ್ಮಭಾವಸ್ಥೋ ಜ್ಞಾನದೀಪೇನ ಭಾಸ್ವತಾ ||",
"transliteration": "teṣhām evānukampārtham aham ajñāna-jaṁ tamaḥ nāśhayāmy ātma-bhāva-stho jñāna-dīpena bhāsvatā",
"meaning": "ಅವರ ಮೇಲೆ ಅನುಕಂಪಿಸಿ, ಆತ್ಮಭಾವದಲ್ಲಿ ಸ್ಥಿತನಾಗಿ, ಭಾಸ್ವತವಾದ ಜ್ಞಾನದೀಪದಿಂದ ಅಜ್ಞಾನಜನ್ಯವಾದ ಅಂಧಕಾರವನ್ನು ನಾಶಪಡಿಸುತ್ತೇನೆ."
},
{
"id": "10-12",
"chapter": 10,
"verse": 12,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಪರಂ ಬ್ರಹ್ಮ ಪರಂ ಧಾಮ ಪವಿತ್ರಂ ಪರಮಂ ಭವಾನ್ | ಪುರುಷಂ ಶಾಶ್ವತಂ ದಿವ್ಯಮಾದಿದೇವಮಜಂ ವಿಭುಮ್ ||",
"transliteration": "arjuna uvācha paraṁ brahma paraṁ dhāma pavitraṁ paramaṁ bhavān puruṣhaṁ śhāśhvataṁ divyam ādi-devam ajaṁ vibhum",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ನೀನು ಪರಬ್ರಹ್ಮ, ಪರಧಾಮ, ಪವಿತ್ರ, ಪರಮ, ಶಾಶ್ವತ, ದಿವ್ಯ, ಆದಿದೇವ, ಅಜ, ವಿಭು ಪುರುಷನಾಗಿದ್ದೀ."
},
{
"id": "10-13",
"chapter": 10,
"verse": 13,
"kannada": "ಆಹುಸ್ತ್ವಾಮೃಷಯಃ ಸರ್ವೇ ದೇವರ್ಷಿರ್ನಾರದಸ್ತಥಾ | ಅಸಿತೋ ದೇವಲೋ ವ್ಯಾಸಃ ಸ್ವಯಂ ಚೈವ ಬ್ರವೀಷಿ ಮೇ ||",
"transliteration": "āhus tvām ṛiṣhayaḥ sarve devarṣhir nāradas tathā asito devalo vyāsaḥ svayaṁ chaiva bravīṣhi me",
"meaning": "ಸರ್ವಋಷಿಗಳೂ, ದೇವರ್ಷಿ ನಾರದನೂ, ಅಸಿತ ದೇವಲನೂ, ವ್ಯಾಸನೂ ನಿನ್ನನ್ನು ಹೇಳಿದ್ದಾರೆ. ನೀನೂ ಸ್ವಯಂ ನನಗೆ ಹೇಳುತ್ತಿದ್ದೀ."
},
{
"id": "10-14",
"chapter": 10,
"verse": 14,
"kannada": "ಸರ್ವಮೇತದೃತಂ ಮನ್ಯೇ ಯನ್ಮಾಂ ವದಸಿ ಕೇಶವ | ನ ಹಿ ತೇ ಭಗವನ್ವ್ಯಕ್ತಿಂ ವಿದುರ್ದೇವಾ ನ ದಾನವಾಃ ||",
"transliteration": "sarvam etad ṛitaṁ manye yan māṁ vadasi keśhava na hi te bhagavan vyaktiṁ vidur devā na dānavāḥ",
"meaning": "ಹೇ ಕೇಶವ, ನೀನು ನನಗೆ ಹೇಳುವುದೆಲ್ಲವೂ ಸತ್ಯವೆಂದು ಭಾವಿಸುತ್ತೇನೆ. ಹೇ ಭಗವನ್, ದೇವತೆಗಳೂ ದಾನವರೂ ನಿನ್ನ ವ್ಯಕ್ತಿತ್ವವನ್ನು ತಿಳಿಯಲಾರರು."
},
{
"id": "10-15",
"chapter": 10,
"verse": 15,
"kannada": "ಸ್ವಯಮೇವಾತ್ಮನಾತ್ಮಾನಂ ವೇತ್ತ್ಸಿ ತ್ವಂ ಪುರುಷೋತ್ತಮ | ಭೂತಭಾವನ ಭೂತೇಶ ದೇವದೇವ ಜಗತ್ಪತೇ ||",
"transliteration": "svayam evātmanātmānaṁ vettha si tvaṁ puruṣhottama bhūta-bhāvana bhūteśha deva-deva jagat-pate",
"meaning": "ಹೇ ಪುರುಷೋತ್ತಮ, ಭೂತಭಾವನ, ಭೂತೇಶ, ದೇವದೇವ, ಜಗತ್ಪತೇ, ನೀನು ಸ್ವಯಂ ಆತ್ಮನಿಂದ ಆತ್ಮನನ್ನು ತಿಳಿಯುತ್ತೀ."
},
{
"id": "10-16",
"chapter": 10,
"verse": 16,
"kannada": "ವಕ್ತುಮರ್ಹಸ್ಯಶೇಷೇಣ ದಿವ್ಯಾ ಹ್ಯಾತ್ಮವಿಭೂತಯಃ | ಯಾಭಿರ್ವಿಭೂತಿಭಿರ್ಲೋಕಾನಿಮಾಂಸ್ತ್ವಂ ವ್ಯಾಪ್ಯ ತಿಷ್ಠಸಿ ||",
"transliteration": "vaktum arhasy aśheṣheṇa divyā hy ātma-vibhūtayaḥ yābhir vibhūtibhir lokān imāns tvaṁ vyāpya tiṣhṭhasi",
"meaning": "ನಿನ್ನ ಆತ್ಮವಿಭೂತಿಗಳನ್ನು ಪೂರ್ಣವಾಗಿ ಹೇಳಬೇಕು. ಯಾವ ವಿಭೂತಿಗಳಿಂದ ಈ ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿ ನಿಂತಿದ್ದೀಯೋ."
},
{
"id": "10-17",
"chapter": 10,
"verse": 17,
"kannada": "ಕಥಂ ವಿದ್ಯಾಮಹಂ ಯೋಗಿಂಸ್ತ್ವಾಂ ಸದಾ ಪರಿಚಿಂತಯನ್ | ಕೇಷು ಕೇಷು ಚ ಭಾವೇಷು ಚಿಂತ್ಯೋಽಸಿ ಭಗವನ್ನಯ ||",
"transliteration": "kathaṁ vidyām ahaṁ yogiṁs tvāṁ sadā parichintayan keṣhu keṣhu cha bhāveṣhu chintyo 'si bhagavan mayi",
"meaning": "ಹೇ ಯೋಗಿನ್, ಹೇ ಭಗವನ್, ನಾನು ನಿನ್ನನ್ನು ಸದಾ ಯಾವ ಯಾವ ಭಾವಗಳಲ್ಲಿ ಚಿಂತಿಸಬೇಕು? ನೀನು ಯಾವ ಯಾವ ರೂಪಗಳಲ್ಲಿ ಚಿಂತನೀಯನಾಗಿದ್ದೀಯೋ?"
},
{
"id": "10-18",
"chapter": 10,
"verse": 18,
"kannada": "ವಿಸ್ತರೇಣಾತ್ಮನೋ ಯೋಗಂ ವಿಭೂತಿಂ ಚ ಜನಾರ್ದನ | ಭೂಯಃ ಕಥಯ ತೃಪ್ತಿರ್ಹಿ ಶೃಣ್ವತೋ ನಾಸ್ತಿ ಮೇಽಮೃತಮ್ ||",
"transliteration": "vistareṇātmano yogaṁ vibhūtiṁ cha janārdana bhūyaḥ kathaya tṛiptir hi śhṛiṇvato nāsti me 'mṛitam",
"meaning": "ಹೇ ಜನಾರ್ದನ, ನಿನ್ನ ಯೋಗ ಮತ್ತು ವಿಭೂತಿಯನ್ನು ವಿಸ್ತಾರವಾಗಿ ಹೇಳು. ನಿನ್ನ ಅಮೃತವಾಣಿಯನ್ನು ಕೇಳುತ್ತಾ ನನಗೆ ತೃಪ್ತಿಯಿಲ್ಲ."
},
{
"id": "10-19",
"chapter": 10,
"verse": 19,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಹಂತ ತೇ ಕಥಯಿಷ್ಯಾಮಿ ದಿವ್ಯಾ ಹ್ಯಾತ್ಮವಿಭೂತಯಃ | ಪ್ರಾಧಾನ್ಯತಃ ಕುರುಶ್ರೇಷ್ಠ ನಾಸ್ತ್ಯನ್ತೋ ವಿಸ್ತರಸ್ಯ ಮೇ ||",
"transliteration": "śhrī bhagavān uvācha hanta te kathayiṣhyāmi divyā hy ātma-vibhūtayaḥ prādhānyataḥ kuru-śhreṣhṭha nāsty anto vistarasya me",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಹಾಗಾದರೆ ಹೇ ಕುರುಶ್ರೇಷ್ಠ, ನನ್ನ ದಿವ್ಯ ಆತ್ಮವಿಭೂತಿಗಳನ್ನು ಪ್ರಾಧಾನ್ಯವಾಗಿ ಹೇಳುತ್ತೇನೆ. ನನ್ನ ವಿಸ್ತಾರಕ್ಕೆ ಅಂತ್ಯವಿಲ್ಲ."
},
{
"id": "10-20",
"chapter": 10,
"verse": 20,
"kannada": "ಅಹಮಾತ್ಮಾ ಗುಡಾಕೇಶ ಸರ್ವಭೂತಾಶಯಸ್ಥಿತಃ | ಅಹಮಾದಿಶ್ಚ ಮಧ್ಯಂ ಚ ಭೂತಾನಾಮನ್ತ ಏವ ಚ ||",
"transliteration": "aham ātmā guḍākeśha sarva-bhūtāśhaya-sthitaḥ aham ādiśh cha madhyaṁ cha bhūtānām anta eva cha",
"meaning": "ಹೇ ಗುಡಾಕೇಶ, ನಾನೇ ಸರ್ವಭೂತಾಶಯಸ್ಥಿತನಾದ ಆತ್ಮನು. ಭೂತಗಳ ಆದಿ, ಮಧ್ಯ, ಅಂತ್ಯ - ಎಲ್ಲವೂ ನಾನೇ."
},
{
"id": "10-21",
"chapter": 10,
"verse": 21,
"kannada": "ಆದಿತ್ಯಾನಾಮಹಂ ವಿಷ್ಣುರ್ಜ್ಯೋತಿಷಾಂ ರವಿರಂಶುಮಾನ್ | ಮರೀಚಿರ್ಮರುತಾಮಸ್ಮಿ ನಕ್ಷತ್ರಾಣಾಮಹಂ ಶಶೀ ||",
"transliteration": "ādityānām ahaṁ viṣhṇur jyotiṣhāṁ ravir anśhumān marīchir marutām asmi nakṣhatrāṇām ahaṁ śhaśhī",
"meaning": "ಆದಿತ್ಯರಲ್ಲಿ ನಾನು ವಿಷ್ಣು, ಜ್ಯೋತಿಗಳಲ್ಲಿ ರವಿ, ಮರುತ್ಗಳಲ್ಲಿ ಮರೀಚಿ, ನಕ್ಷತ್ರಗಳಲ್ಲಿ ಚಂದ್ರನಾಗಿದ್ದೇನೆ."
},
{
"id": "10-22",
"chapter": 10,
"verse": 22,
"kannada": "ವೇದಾನಾಂ ಸಾಮವೇದೋಽಸ್ಮಿ ದೇವಾನಾಮಸ್ಮಿ ವಾಸವಃ | ಇಂದ್ರಿಯಾಣಾಂ ಮನಶ್ಚಾಸ್ಮಿ ಭೂತಾನಾಮಸ್ಮಿ ಚೇತನಾ ||",
"transliteration": "vedānāṁ sāma-vedo 'smi devānām asmi vāsavaḥ indriyāṇāṁ manaśh chāsmi bhūtānām asmi chetanā",
"meaning": "ವೇದಗಳಲ್ಲಿ ಸಾಮವೇದ, ದೇವತೆಗಳಲ್ಲಿ ಇಂದ್ರ, ಇಂದ್ರಿಯಗಳಲ್ಲಿ ಮನಸ್ಸು, ಭೂತಗಳಲ್ಲಿ ಚೇತನೆಯಾಗಿದ್ದೇನೆ."
},
{
"id": "10-23",
"chapter": 10,
"verse": 23,
"kannada": "ರುದ್ರಾಣಾಂ ಶಂಕರಶ್ಚಾಸ್ಮಿ ವಿತ್ತೇಶೋ ಯಕ್ಷರಕ್ಷಸಾಮ್ | ವಸೂನಾಂ ಪಾವಕಶ್ಚಾಸ್ಮಿ ಮೇರುಃ ಶಿಖರಿಣಾಮಹಮ್ ||",
"transliteration": "rudrāṇāṁ śhaṅkaraśh chāsmi vitteśho yakṣha-rakṣhasām vasūnāṁ pāvakaśh chāsmi meruḥ śhikhariṇām aham",
"meaning": "ರುದ್ರರಲ್ಲಿ ಶಂಕರ, ಯಕ್ಷರಕ್ಷಸರಲ್ಲಿ ಕುಬೇರ, ವಸುಗಳಲ್ಲಿ ಅಗ್ನಿ, ಪರ್ವತಗಳಲ್ಲಿ ಮೇರುವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-24",
"chapter": 10,
"verse": 24,
"kannada": "ಪುರೋಧಸಾಂ ಚ ಮುಖ್ಯಂ ಮಾಂ ವಿದ್ಧಿ ಪಾರ್ಥ ಬೃಹಸ್ಪತಿಮ್ | ಸೇನಾನೀನಾಮಹಂ ಸ್ಕನ್ದಃ ಸರಸಾಮಸ್ಮಿ ಸಾಗರಃ ||",
"transliteration": "purodhasāṁ cha mukhyaṁ māṁ viddhi pārtha bṛihaspatim senānīnām ahaṁ skandaḥ sarasām asmi sāgaraḥ",
"meaning": "ಹೇ ಪಾರ್ಥ, ಪುರೋಧಸರಲ್ಲಿ ಬೃಹಸ್ಪತಿ, ಸೇನಾನಿಗಳಲ್ಲಿ ಸ್ಕಂದ, ಸರಸ್ಸುಗಳಲ್ಲಿ ಸಾಗರವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-25",
"chapter": 10,
"verse": 25,
"kannada": "ಮಹರ್ಷೀಣಾಂ ಭೃಗುರಹಂ ಗಿರಾಮಸ್ಮ್ಯೇಕಮಕ್ಷರಮ್ | ಯಜ್ಞಾನಾಂ ಜಪಯಜ್ಞೋಽಸ್ಮಿ ಸ್ಥಾವರಾಣಾಂ ಹಿಮಾಲಯಃ ||",
"transliteration": "maharṣhīṇāṁ bhṛigur ahaṁ girām asmy ekam akṣharam yajñānāṁ japa-yajño 'smi sthāvarāṇāṁ himālayaḥ",
"meaning": "ಮಹರ್ಷಿಗಳಲ್ಲಿ ಭೃಗು, ವಾಕ್ಕುಗಳಲ್ಲಿ ಏಕಾಕ್ಷರ ಓಂ, ಯಜ್ಞಗಳಲ್ಲಿ ಜಪಯಜ್ಞ, ಸ್ಥಾವರಗಳಲ್ಲಿ ಹಿಮಾಲಯವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-26",
"chapter": 10,
"verse": 26,
"kannada": "ಅಶ್ವತ್ಥಃ ಸರ್ವವೃಕ್ಷಾಣಾಂ ದೇವರ್ಷೀಣಾಂ ಚ ನಾರದಃ | ಗಂಧರ್ವಾಣಾಂ ಚಿತ್ರರಥಃ ಸಿದ್ಧಾನಾಂ ಕಪಿಲೋ ಮುನಿಃ ||",
"transliteration": "aśhvatthaḥ sarva-vṛikṣhāṇāṁ devarṣhīṇāṁ cha nāradaḥ gandharvāṇāṁ chitrarathaḥ siddhānāṁ kapilo muniḥ",
"meaning": "ವೃಕ್ಷಗಳಲ್ಲಿ ಅಶ್ವತ್ಥ, ದೇವರ್ಷಿಗಳಲ್ಲಿ ನಾರದ, ಗಂಧರ್ವರಲ್ಲಿ ಚಿತ್ರರಥ, ಸಿದ್ಧರಲ್ಲಿ ಕಪಿಲಮುನಿಯಾಗಿದ್ದೇನೆ."
},
{
"id": "10-27",
"chapter": 10,
"verse": 27,
"kannada": "ಉಚ್ಚೈಃಶ್ರವಸಮಶ್ವಾನಾಂ ವಿದ್ಧಿ ಮಾಮಮೃತೋದ್ಭವಮ್ | ಐರಾವತಂ ಗಜೇಂದ್ರಾಣಾಂ ನರಾಣಾಂ ಚ ನರಾಧಿಪಮ್ ||",
"transliteration": "uchchaiḥśhravasam aśhvānāṁ viddhi mām amṛitodbhavam airāvataṁ gajendrāṇāṁ narāṇāṁ cha narādhipam",
"meaning": "ಅಶ್ವಗಳಲ್ಲಿ ಅಮೃತೋದ್ಭವನಾದ ಉಚ್ಚೈಃಶ್ರವಸ, ಗಜೇಂದ್ರಗಳಲ್ಲಿ ಐರಾವತ, ನರರಲ್ಲಿ ನರಾಧಿಪನಾಗಿದ್ದೇನೆ."
},
{
"id": "10-28",
"chapter": 10,
"verse": 28,
"kannada": "ಆಯುಧಾನಾಮಹಂ ವಜ್ರಂ ಧೇನೂನಾಮಸ್ಮಿ ಕಾಮಧುಕ್ | ಪ್ರಜನಶ್ಚಾಸ್ಮಿ ಕಂದರ್ಪಃ ಸರ್ಪಾಣಾಮಸ್ಮಿ ವಾಸುಕಿಃ ||",
"transliteration": "āyudhānām ahaṁ vajraṁ dhenūnām asmi kāmadhuk prajanaśh chāsmi kandarpaḥ sarpāṇām asmi vāsukiḥ",
"meaning": "ಆಯುಧಗಳಲ್ಲಿ ವಜ್ರ, ಧೇನುಗಳಲ್ಲಿ ಕಾಮಧೇನು, ಪ್ರಜನಕರಲ್ಲಿ ಕಂದರ್ಪ, ಸರ್ಪಗಳಲ್ಲಿ ವಾಸುಕಿಯಾಗಿದ್ದೇನೆ."
},
{
"id": "10-29",
"chapter": 10,
"verse": 29,
"kannada": "ಅನಂತಶ್ಚಾಸ್ಮಿ ನಾಗಾನಾಂ ವರುಣೋ ಯಾದಸಾಮಹಮ್ | ಪಿತೄಣಾಮರ್ಯಮಾ ಚಾಸ್ಮಿ ಯಮಃ ಸಂಯಮತಾಮಹಮ್ ||",
"transliteration": "anantaśh chāsmi nāgānāṁ varuṇo yādasām aham pitṝṇām aryamā chāsmi yamaḥ sanyamatām aham",
"meaning": "ನಾಗಗಳಲ್ಲಿ ಅನಂತ, ಯಾದಸ್ಸುಗಳಲ್ಲಿ ವರುಣ, ಪಿತೃಗಳಲ್ಲಿ ಅರ್ಯಮಾ, ಸಂಯಮತರಲ್ಲಿ ಯಮನಾಗಿದ್ದೇನೆ."
},
{
"id": "10-30",
"chapter": 10,
"verse": 30,
"kannada": "ಪ್ರಹ್ಲಾದಶ್ಚಾಸ್ಮಿ ದೈತ್ಯಾನಾಂ ಕಾಲಃ ಕಲಯತಾಮಹಮ್ | ಮೃಗಾಣಾಂ ಚ ಮೃಗೇಂದ್ರೋಽಹಂ ವೈನತೇಯಶ್ಚ ಪಕ್ಷಿಣಾಮ್ ||",
"transliteration": "prahlādaśh chāsmi daityānāṁ kālaḥ kalayatām aham mṛigāṇāṁ cha mṛigendro 'haṁ vainateyaśh cha pakṣhiṇām",
"meaning": "ದೈತ್ಯರಲ್ಲಿ ಪ್ರಹ್ಲಾದ, ಕಲಯತರಲ್ಲಿ ಕಾಲ, ಮೃಗಗಳಲ್ಲಿ ಸಿಂಹ, ಪಕ್ಷಿಗಳಲ್ಲಿ ಗರುಡನಾಗಿದ್ದೇನೆ."
},
{
"id": "10-31",
"chapter": 10,
"verse": 31,
"kannada": "ಪವನಃ ಪವತಾಮಸ್ಮಿ ರಾಮಃ ಶಸ್ತ್ರಭೃತಾಮಹಮ್ | ಝಷಾಣಾಂ ಮಕರಶ್ಚಾಸ್ಮಿ ಸ್ರೋತಸಾಮಸ್ಮಿ ಜಾಹ್ನವೀ ||",
"transliteration": "pavanaḥ pavatām asmi rāmaḥ śhastra-bhṛitām aham jhaṣhāṇāṁ makaraśh chāsmi srotasām asmi jāhnavī",
"meaning": "ಪವನಗಳಲ್ಲಿ ಪವನ, ಶಸ್ತ್ರಧಾರಿಗಳಲ್ಲಿ ರಾಮ, ಮೀನುಗಳಲ್ಲಿ ಮಕರ, ನದಿಗಳಲ್ಲಿ ಗಂಗೆಯಾಗಿದ್ದೇನೆ."
},
{
"id": "10-32",
"chapter": 10,
"verse": 32,
"kannada": "ಸರ್ಗಾಣಾಮಾದಿರನ್ತಶ್ಚ ಮಧ್ಯಂ ಚೈವಾಹಮರ್ಜುನ | ಅಧ್ಯಾತ್ಮವಿದ್ಯಾ ವಿದ್ಯಾನಾಂ ವಾದಃ ಪ್ರವದತಾಮಹಮ್ ||",
"transliteration": "sargāṇām ādir antaśh cha madhyaṁ chaivāham arjuna adhyātma-vidyā vidyānāṁ vādaḥ pravadatām aham",
"meaning": "ಹೇ ಅರ್ಜುನ, ಸರ್ಗಗಳ ಆದಿ, ಅಂತ್ಯ, ಮಧ್ಯ - ಎಲ್ಲವೂ ನಾನೇ. ವಿದ್ಯೆಗಳಲ್ಲಿ ಅಧ್ಯಾತ್ಮವಿದ್ಯೆ, ವಾದಗಳಲ್ಲಿ ವಾದವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-33",
"chapter": 10,
"verse": 33,
"kannada": "ಅಕ್ಷರಾಣಾಮಕಾರೋಽಸ್ಮಿ ದ್ವಂದ್ವಃ ಸಾಮಾಸಿಕಸ್ಯ ಚ | ಅಹಮೇವಾಕ್ಷಯಃ ಕಾಲೋ ಧಾತಾಹಂ ವಿಶ್ವತೋಮುಖಃ ||",
"transliteration": "akṣharāṇām a-kāro 'smi dvandvaḥ sāmāsikasya cha aham evākṣhayaḥ kālo dhātāham viśhvato-mukhaḥ",
"meaning": "ಅಕ್ಷರಗಳಲ್ಲಿ 'ಅ'ಕಾರ, ದ್ವಂದ್ವಸಮಾಸದಲ್ಲಿ ದ್ವಂದ್ವ, ಅಕ್ಷಯಕಾಲ, ವಿಶ್ವತೋಮುಖ ಧಾತೃವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-34",
"chapter": 10,
"verse": 34,
"kannada": "ಮೃತ್ಯುಃ ಸರ್ವಹರಶ್ಚಾಹಮುದ್ಭವಾಶ್ಚ ಭವಿಷ್ಯತಾಮ್ | ಕೀರ್ತಿಃ ಶ್ರೀರ್ವಾಕ್ಚ ನಾರೀಣಾಂ ಸ್ಮೃತಿರ್ಮೇಧಾ ಧೃತಿಃ ಕ್ಷಮಾ ||",
"transliteration": "mṛityuḥ sarva-haraśh chāham udbhavāśh cha bhaviṣhyatām kīrtiḥ śhrīr vāk cha nārīṇāṁ smṛitir medhā dhṛitiḥ kṣhamā",
"meaning": "ಸರ್ವಹರನಾದ ಮೃತ್ಯು, ಭವಿಷ್ಯತ್ತಿನ ಉದ್ಭವಗಳು, ನಾರೀಣಾಂ (ಸ್ತ್ರೀಯರಲ್ಲಿ) ಕೀರ್ತಿ, ಶ್ರೀ, ವಾಕ್, ಸ್ಮೃತಿ, ಮೇಧಾ, ಧೃತಿ, ಕ್ಷಮಾ - ಎಲ್ಲವೂ ನಾನೇ."
},
{
"id": "10-35",
"chapter": 10,
"verse": 35,
"kannada": "ಬೃಹತ್ಸಾಮ ತಥಾ ಸಾಮ್ನಾಂ ಗಾಯತ್ರೀ ಛಂದಸಾಮಹಮ್ | ಮಾಸಾನಾಂ ಮಾರ್ಗಶೀರ್ಷೋಽಹಮೃತೂನಾಂ ಕುಸುಮಾಕರಃ ||",
"transliteration": "bṛihat-sāma tathā sāmnāṁ gāyatrī chhandasām aham māsānāṁ mārga-śhīrṣho 'ham ṛitūnāṁ kusumākaraḥ",
"meaning": "ಸಾಮಗಳಲ್ಲಿ ಬೃಹತ್ಸಾಮ, ಛಂದಸ್ಸುಗಳಲ್ಲಿ ಗಾಯತ್ರಿ, ಮಾಸಗಳಲ್ಲಿ ಮಾರ್ಗಶೀರ್ಷ, ಋತುಗಳಲ್ಲಿ ವಸಂತವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-36",
"chapter": 10,
"verse": 36,
"kannada": "ದ್ಯೂತಂ ಛಲಯತಾಮಸ್ಮಿ ತೇಜಸ್ತೇಜಸ್ವಿನಾಮಹಮ್ | ಜಯೋಽಸ್ಮಿ ವ್ಯವಸಾಯೋಽಸ್ಮಿ ಸತ್ತ್ವಂ ಸತ್ತ್ವವತಾಮಹಮ್ ||",
"transliteration": "dyūtaṁ chhalayatām asmi tejas tejasvinām aham jayo 'smi vyavasāyo 'smi sattvaṁ sattvavatām aham",
"meaning": "ದ್ಯೂತದಲ್ಲಿ ಛಲ, ತೇಜಸ್ವಿಗಳಲ್ಲಿ ತೇಜಸ್ಸು, ಜಯ, ವ್ಯವಸಾಯ, ಸತ್ತ್ವವಂತರಲ್ಲಿ ಸತ್ತ್ವವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-37",
"chapter": 10,
"verse": 37,
"kannada": "ವೃಷ್ಣೀನಾಂ ವಾಸುದೇವೋಽಸ್ಮಿ ಪಾಂಡವಾನಾಂ ಧನಂಜಯಃ | ಮುನೀನಾಮಪ್ಯಹಂ ವ್ಯಾಸಃ ಕವೀನಾಮುಶನಾ ಕವಿಃ ||",
"transliteration": "vṛiṣhṇīnāṁ vāsudevo 'smi pāṇḍavānāṁ dhanañjayaḥ munīnām apy ahaṁ vyāsaḥ kavīnām uśhanā kaviḥ",
"meaning": "ವೃಷ್ಣಿಗಳಲ್ಲಿ ವಾಸುದೇವ, ಪಾಂಡವರಲ್ಲಿ ಧನಂಜಯ, ಮುನಿಗಳಲ್ಲಿ ವ್ಯಾಸ, ಕವಿಗಳಲ್ಲಿ ಶುಕ್ರಾಚಾರ್ಯನಾಗಿದ್ದೇನೆ."
},
{
"id": "10-38",
"chapter": 10,
"verse": 38,
"kannada": "ದಂಡೋ ದಮಯತಾಮಸ್ಮಿ ನೀತಿರಸ್ಮಿ ಜಿಗೀಷತಾಮ್ | ಮೌನಂ ಚೈವಾಸ್ಮಿ ಗುಹ್ಯಾನಾಂ ಜ್ಞಾನಂ ಜ್ಞಾನವತಾಮಹಮ್ ||",
"transliteration": "daṇḍo damayatām asmi nītir asmi jigīṣhatām maunaṁ chaivāsmi guhyānāṁ jñānaṁ jñānavatām aham",
"meaning": "ದಮನಕರರಲ್ಲಿ ದಂಡ, ಜಿಗೀಷುಗಳಲ್ಲಿ ನೀತಿ, ಗುಹ್ಯಗಳಲ್ಲಿ ಮೌನ, ಜ್ಞಾನವಂತರಲ್ಲಿ ಜ್ಞಾನವಾಗಿದ್ದೇನೆ."
},
{
"id": "10-39",
"chapter": 10,
"verse": 39,
"kannada": "ಯಚ್ಚಾಪಿ ಸರ್ವಭೂತಾನಾಂ ಬೀಜಂ ತದಹಮರ್ಜುನ | ನ ತದಸ್ತಿ ವಿನಾ ಯತ್ಸ್ಯಾನ್ಮಯಾ ಭೂತಂ ಚರಾಚರಮ್ ||",
"transliteration": "yach chāpi sarva-bhūtānāṁ bījaṁ tad aham arjuna na tad asti vinā yat syān mayā bhūtaṁ charācharam",
"meaning": "ಹೇ ಅರ್ಜುನ, ಸರ್ವಭೂತಗಳ ಬೀಜವೂ ನಾನೇ. ನನ್ನಿಲ್ಲದೆ ಚರಾಚರವಾದ ಯಾವುದೂ ಇಲ್ಲ."
},
{
"id": "10-40",
"chapter": 10,
"verse": 40,
"kannada": "ನಾನ್ತೋಽಸ್ತಿ ಮಮ ದಿವ್ಯಾನಾಂ ವಿಭೂತೀನಾಂ ಪರಂತಪ | ಏಷ ತೂದ್ದೇಶತಃ ಪ್ರೋಕ್ತೋ ವಿಭೂತೇರ್ವಿಸ್ತರೋ ಮಯಾ ||",
"transliteration": "nānto 'sti mama divyānāṁ vibhūtīnāṁ parantapa eṣha tūddeśhataḥ prokto vibhūter vistaro mayā",
"meaning": "ಹೇ ಪರಂತಪ, ನನ್ನ ದಿವ್ಯವಿಭೂತಿಗಳಿಗೆ ಅಂತ್ಯವಿಲ್ಲ. ಈ ವಿಭೂತಿಯ ವಿಸ್ತಾರವನ್ನು ಸಂಕ್ಷೇಪವಾಗಿ ಹೇಳಿದ್ದೇನೆ."
},
{
"id": "10-41",
"chapter": 10,
"verse": 41,
"kannada": "ಯದ್ಯದ್ವಿಭೂತಿಮತ್ಸತ್ತ್ವಂ ಶ್ರೀಮದೂರ್ಜಿತಮೇವ ವಾ | ತತ್ತದೇವಾವಗಚ್ಛ ತ್ವಂ ಮಮ ತೇಜೋಽಂಶಸಂಭವಮ್ ||",
"transliteration": "yad yad vibhūtimat sattvaṁ śhrīmad ūrjitam eva vā tat tad evāvagachchha tvaṁ mama tejo 'ṁśha-sambhavam",
"meaning": "ಯಾವ ಯಾವ ವಿಭೂತಿಮತ್ತಾದ, ಶ್ರೀಮತ್ತಾದ, ಊರ್ಜಿತವಾದ ಸತ್ತ್ವವಿದೆಯೋ, ಅದೆಲ್ಲವೂ ನನ್ನ ತೇಜೋಽಂಶದಿಂದ ಉದ್ಭವಿಸಿದ್ದೆಂದು ತಿಳಿ."
},
{
"id": "10-42",
"chapter": 10,
"verse": 42,
"kannada": "ಅಥವಾ ಬಹುನೈತೇನ ಕಿಂ ಜ್ಞಾತೇನ ತವಾರ್ಜುನ | ವಿಷ್ಟಭ್ಯಾಹಮಿದಂ ಕೃತ್ಸ್ನಮೇಕಾಂಶೇನ ಸ್ಥಿತೋ ಜಗತ್ ||",
"transliteration": "athavā bahunaitena kiṁ jñātena tavārjuna viṣhṭabhyāham idaṁ kṛitsnam ekāṁśhena sthito jagat",
"meaning": "ಹೇ ಅರ್ಜುನ, ಇದರಿಂದ ಬಹಳ ಏನು ತಿಳಿಯಬೇಕು? ಈ ಸಮಸ್ತ ಜಗತ್ತನ್ನು ನನ್ನ ಒಂದು ಅಂಶದಿಂದ ವ್ಯಾಪಿಸಿ ನಿಂತಿದ್ದೇನೆ."
},

    ]
  },
  {
    id: 11,
    title: "Visvarupa Darsana Yoga",
    kannadaTitle: "ವಿಶ್ವರೂಪ ದರ್ಶನ ಯೋಗ",
    description: "ವಿಶ್ವರೂಪ ದರ್ಶನ - Vision of the universal form",
    totalVerses: 55,
    verses: [
{
"id": "11-1",
"chapter": 11,
"verse": 1,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಮದನುಗ್ರಹಾಯ ಪರಮಂ ಗುಹ್ಯಮಧ್ಯಾತ್ಮಸಂಜ್ಞಿತಮ್ | ಯತ್ತ್ವಯೋಕ್ತಂ ವಚಸ್ತೇನ ಮೋಹೋಽಯಂ ವಿಗತೋ ಮಮ ||",
"transliteration": "arjuna uvācha mad-anugrahāya paramaṁ guhyam adhyātma-saṁjñitam yat tvayoktaṁ vachas tena moho 'yaṁ vigato mama",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ನನಗೆ ಅನುಗ್ರಹಿಸಲು ನೀನು ಹೇಳಿದ ಪರಮ ಗುಹ್ಯವಾದ ಅಧ್ಯಾತ್ಮಸಂಜ್ಞಿತ ವಚನದಿಂದ ನನ್ನ ಈ ಮೋಹ ನಾಶವಾಗಿದೆ."
},
{
"id": "11-2",
"chapter": 11,
"verse": 2,
"kannada": "ಭವಾಪ್ಯಯೌ ಹಿ ಭೂತಾನಾಂ ಶ್ರುತೌ ವಿಸ್ತರಶೋ ಮಯಾ | ತ್ವತ್ತಃ ಕಮಲಪತ್ರಾಕ್ಷ ಮಾಹಾತ್ಮ್ಯಮಪಿ ಚಾವ್ಯಯಮ್ ||",
"transliteration": "bhavāpyayau hi bhūtānāṁ śhrutau vistaraśho mayā tvattaḥ kamala-patrākṣha māhātmyam api chāvyayam",
"meaning": "ಹೇ ಕಮಲಪತ್ರಾಕ್ಷ, ಭೂತಗಳ ಉತ್ಪತ್ತಿ-ಪ್ರಳಯಗಳನ್ನು ವಿಸ್ತಾರವಾಗಿ ಕೇಳಿದ್ದೇನೆ. ನಿನ್ನ ಅವ್ಯಯ ಮಹಾತ್ಮ್ಯವನ್ನೂ ಕೇಳಿದ್ದೇನೆ."
},
{
"id": "11-3",
"chapter": 11,
"verse": 3,
"kannada": "ಏವಮೇತದ್ಯಥಾತ್ಥ ತ್ವಮಾತ್ಮಾನಂ ಪರಮೇಶ್ವರ | ದ್ರಷ್ಟುಮಿಚ್ಛಾಮಿ ತೇ ರೂಪಮೈಶ್ವರಂ ಪುರುಷೋತ್ತಮ ||",
"transliteration": "evam etad yathāttha tvam ātmānaṁ parameśhvara draṣhṭum ichchhāmi te rūpam aiśhvaraṁ puruṣhottama",
"meaning": "ಹೇ ಪರಮೇಶ್ವರ, ಹೇ ಪುರುಷೋತ್ತಮ, ನೀನು ಹೇಳಿದಂತೆಯೇ ನಿನ್ನನ್ನು ತಿಳಿದೆನು. ನಿನ್ನ ಐಶ್ವರ್ಯ ರೂಪವನ್ನು ನೋಡಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
},
{
"id": "11-4",
"chapter": 11,
"verse": 4,
"kannada": "ಮನ್ಯಸೇ ಯದಿ ತಚ್ಛಕ್ಯಂ ಮಯಾ ದ್ರಷ್ಟುಮಿತಿ ಪ್ರಭೋ | ಯೋಗೇಶ್ವರ ತತೋ ಮೇ ತ್ವಂ ದರ್ಶಯಾತ್ಮಾನಮವ್ಯಯಮ್ ||",
"transliteration": "manyase yadi tach chhakyaṁ mayā draṣhṭum iti prabho yogeśhvara tato me tvaṁ darśhayāt mānam avyayam",
"meaning": "ಹೇ ಪ್ರಭೋ, ಹೇ ಯೋಗೇಶ್ವರ, ನನ್ನಿಂದ ನೋಡಲು ಸಾಧ್ಯವೆಂದು ನೀನು ಭಾವಿಸಿದರೆ, ನನಗೆ ನಿನ್ನ ಅವ್ಯಯ ಆತ್ಮನನ್ನು ತೋರಿಸು."
},
{
"id": "11-5",
"chapter": 11,
"verse": 5,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಪಶ್ಯ ಮೇ ಪಾರ್ಥ ರೂಪಾಣಿ ಶತಶೋಽಥ ಸಹಸ್ರಶಃ | ನಾನಾವಿಧಾನಿ ದಿವ್ಯಾನಿ ನಾನಾವರ್ಣಾಕೃತೀನಿ ಚ ||",
"transliteration": "śhrī bhagavān uvācha paśhya me pārtha rūpāṇi śhataśho 'tha sahasraśhaḥ nānā-vidhāni divyāni nānā-varṇākṛitīni cha",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಹೇ ಪಾರ್ಥ, ನನ್ನ ನಾನಾವಿಧವಾದ, ನಾನಾವರ್ಣಾಕೃತಿಗಳ ದಿವ್ಯರೂಪಗಳನ್ನು ನೂರಾರು, ಸಹಸ್ರಾರು ನೋಡು."
},
{
"id": "11-6",
"chapter": 11,
"verse": 6,
"kannada": "ಪಶ್ಯಾದಿತ್ಯಾನ್ವಸೂನ್ ರುದ್ರಾನಶ್ವಿನೌ ಮರುತಸ್ತಥಾ | ಬಹೂನ್ಯದೃಷ್ಟಪೂರ್ವಾಣಿ ಪಶ್ಯಾಶ್ಚರ್ಯಾಣಿ ಭಾರತ ||",
"transliteration": "paśhyādityān vasūn rudrān aśhvinau marutas tathā bahūny adṛiṣhṭa-pūrvāṇi paśhyāśhcharyāṇi bhārata",
"meaning": "ಹೇ ಭಾರತ, ಆದಿತ್ಯರು, ವಸುಗಳು, ರುದ್ರರು, ಅಶ್ವಿನಿದೇವತೆಗಳು, ಮರುತ್ಗಳು, ಇದುವರೆಗೆ ಕಂಡಿರದ ಅನೇಕ ಆಶ್ಚರ್ಯಗಳನ್ನು ನೋಡು."
},
{
"id": "11-7",
"chapter": 11,
"verse": 7,
"kannada": "ಇಹೈಕಸ್ಥಂ ಜಗತ್ಕೃತ್ಸ್ನಂ ಪಶ್ಯಾದ್ಯ ಸಚರಾಚರಮ್ | ಮಮ ದೇಹೇ ಗುಡಾಕೇಶ ಯಚ್ಚಾನ್ಯದ್ದ್ರಷ್ಟುಮಿಚ್ಛಸಿ ||",
"transliteration": "ihaikasthaṁ jagat kṛitsnaṁ paśhyādya sa-charācharam mama dehe guḍākeśha yach chānyad draṣhṭum ichchhasi",
"meaning": "ಹೇ ಗುಡಾಕೇಶ, ಇಂದು ಚರಾಚರವಾದ ಸಮಸ್ತ ಜಗತ್ತನ್ನು ಏಕಸ್ಥವಾಗಿ ನನ್ನ ದೇಹದಲ್ಲಿಯೇ ನೋಡು. ನೋಡಲು ಇಚ್ಛಿಸುವ ಬೇರೆಯದನ್ನೂ ನೋಡು."
},
{
"id": "11-8",
"chapter": 11,
"verse": 8,
"kannada": "ನ ತು ಮಾಂ ಶಕ್ಯಸೇ ದ್ರಷ್ಟುಮನೇನೈವ ಸ್ವಚಕ್ಷುಷಾ | ದಿವ್ಯಂ ದದಾಮಿ ತೇ ಚಕ್ಷುಃ ಪಶ್ಯ ಮೇ ಯೋಗಮೈಶ್ವರಮ್ ||",
"transliteration": "na tu māṁ śhakyase draṣhṭum anenaiva sva-chakṣhuṣhā divyaṁ dadāmi te chakṣhuḥ paśhya me yogam aiśhvaram",
"meaning": "ಆದರೆ ನಿನ್ನ ಈ ಸ್ವಚಕ್ಷುಗಳಿಂದ ನನ್ನನ್ನು ನೋಡಲು ಸಾಧ್ಯವಿಲ್ಲ. ನಿನಗೆ ದಿವ್ಯಚಕ್ಷುಗಳನ್ನು ಕೊಡುತ್ತೇನೆ. ನನ್ನ ಐಶ್ವರ್ಯಯೋಗವನ್ನು ನೋಡು."
},
{
"id": "11-9",
"chapter": 11,
"verse": 9,
"kannada": "ಸಂಜಯ ಉವಾಚ | ಏವಮುಕ್ತ್ವಾ ತತೋ ರಾಜನ್ಮಹಾಯೋಗೇಶ್ವರೋ ಹರಿಃ | ದರ್ಶಯಾಮಾಸ ಪಾರ್ಥಾಯ ಪರಮಂ ರೂಪಮೈಶ್ವರಮ್ ||",
"transliteration": "sañjaya uvācha evam uktvā tato rājan mahā-yogeśhvaro hariḥ darśhayāmāsa pārthāya paramaṁ rūpam aiśhvaram",
"meaning": "ಸಂಜಯನು ಹೇಳಿದನು: ಹೇ ರಾಜನೇ, ಹೀಗೆ ಹೇಳಿ ಮಹಾಯೋಗೇಶ್ವರನಾದ ಹರಿಯು ಅರ್ಜುನನಿಗೆ ಪರಮ ಐಶ್ವರ್ಯ ರೂಪವನ್ನು ತೋರಿಸಿದನು."
},
{
"id": "11-10",
"chapter": 11,
"verse": 10,
"kannada": "ಅನೇಕವಕ್ತ್ರನಯನಮನೇಕಾದ್ಭುತದರ್ಶನಮ್ | ಅನೇಕದಿವ್ಯಾಭರಣಂ ದಿವ್ಯಾನೇಕೋದ್ಯತಾಯುಧಮ್ ||",
"transliteration": "aneka-vaktra-nayanam anekādbhuta-darśhanam aneka-divyābharaṇaṁ divyānekodyatāyudham",
"meaning": "ಅನೇಕ ಮುಖ-ನೇತ್ರಗಳು, ಅನೇಕ ಅದ್ಭುತ ದರ್ಶನ, ಅನೇಕ ದಿವ್ಯಾಭರಣಗಳು, ದಿವ್ಯವಾದ ಅನೇಕ ಉದ್ಯತಾಯುಧಗಳು."
},
{
"id": "11-11",
"chapter": 11,
"verse": 11,
"kannada": "ದಿವ್ಯಮಾಲ್ಯಾಂಬರಧರಂ ದಿವ್ಯಗಂಧಾನುಲೇಪನಮ್ | ಸರ್ವಾಶ್ಚರ್ಯಮಯಂ ದೇವಮನಂತಂ ವಿಶ್ವತೋಮುಖಮ್ ||",
"transliteration": "divya-mālyāmbara-dharaṁ divya-gandhānulepanam sarvāśhcharya-mayaṁ devam anantaṁ viśhvato-mukham",
"meaning": "ದಿವ್ಯಮಾಲ್ಯಾಂಬರಧಾರಿ, ದಿವ್ಯಗಂಧಾನುಲೇಪನ, ಸರ್ವಾಶ್ಚರ್ಯಮಯ, ಅನಂತ, ವಿಶ್ವತೋಮುಖ ದೇವನನ್ನು."
},
{
"id": "11-12",
"chapter": 11,
"verse": 12,
"kannada": "ದಿವಿ ಸೂರ್ಯಸಹಸ್ರಸ್ಯ ಭವೇದ್ಯುಗಪದುತ್ಥಿತಾ | ಯದಿ ಭಾಃ ಸದೃಶೀ ಸಾ ಸ್ಯಾದ್ಭಾಸಸ್ತಸ್ಯ ಮಹಾತ್ಮನಃ ||",
"transliteration": "divi sūrya-sahasrasya bhaved yugapad utthitā yadi bhāḥ sadṛiśhī sā syād bhāsas tasya mahātmanaḥ",
"meaning": "ಆಕಾಶದಲ್ಲಿ ಸಹಸ್ರಸೂರ್ಯರು ಏಕಕಾಲದಲ್ಲಿ ಉದಯಿಸಿದರೆ, ಆ ಮಹಾತ್ಮನ ತೇಜಸ್ಸಿಗೆ ಸದೃಶವಾಗಬಹುದು."
},
{
"id": "11-13",
"chapter": 11,
"verse": 13,
"kannada": "ತತ್ರೈಕಸ್ಥಂ ಜಗತ್ಕೃತ್ಸ್ನಂ ಪ್ರವಿಭಕ್ತಮನೇಕಧಾ | ಅಪಶ್ಯದ್ದೇವದೇವಸ್ಯ ಶರೀರೇ ಪಾಂಡವಸ್ತದಾ ||",
"transliteration": "tatraikasthaṁ jagat kṛitsnaṁ pravibhaktam anekadhā apaśhyad deva-devasya śharīre pāṇḍavas tadā",
"meaning": "ಅಲ್ಲಿ ಸಮಸ್ತ ಜಗತ್ತೂ ಏಕಸ್ಥವಾಗಿ ಅನೇಕಧಾ ವಿಭಕ್ತವಾಗಿ ದೇವದೇವನ ಶರೀರದಲ್ಲಿ ಪಾಂಡವನು ನೋಡಿದನು."
},
{
"id": "11-14",
"chapter": 11,
"verse": 14,
"kannada": "ತತಃ ಸ ವಿಸ್ಮಯಾವಿಷ್ಟೋ ಹೃಷ್ಟರೋಮಾ ಧನಂಜಯಃ | ಪ್ರಣಮ್ಯ ಶಿರಸಾ ದೇವಂ ಕೃತಾಂಜಲಿರಭಾಷತ ||",
"transliteration": "tataḥ sa vismayāviṣhṭo hṛiṣhṭa-romā dhanañjayaḥ praṇamya śhirasā devaṁ kṛitānjalir abhāṣhata",
"meaning": "ಆಗ ವಿಸ್ಮಯಾವಿಷ್ಟನಾಗಿ ಹೃಷ್ಟರೋಮನಾದ ಧನಂಜಯನು ತಲೆಬಗ್ಗಿ ನಮಸ್ಕರಿಸಿ, ಕೃತಾಂಜಲಿಯಾಗಿ ಮಾತನಾಡಿದನು."
},
{
"id": "11-15",
"chapter": 11,
"verse": 15,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಪಶ್ಯಾಮಿ ದೇವಾಂಸ್ತವ ದೇವ ದೇಹೇ ಸರ್ವಾಂಸ್ತಥಾ ಭೂತವಿಶೇಷಸಂಘಾನ್ | ಬ್ರಹ್ಮಾಣಮೀಶಂ ಕಮಲಾಸನಸ್ಥಮೃಷೀಂಶ್ಚ ಸರ್ವಾನುರಗಾಂಶ್ಚ ದಿವ್ಯಾನ್ ||",
"transliteration": "arjuna uvācha paśhyāmi devāns tava deva dehe sarvāns tathā bhūta-viśheṣha-saṅghān brahmāṇam īśhaṁ kamalāsana-stham ṛiṣhīṁśh cha sarvān uragāṁśh cha divyān",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ದೇವ, ನಿನ್ನ ದೇಹದಲ್ಲಿ ಸರ್ವ ದೇವತೆಗಳನ್ನೂ, ಭೂತವಿಶೇಷಸಂಘಗಳನ್ನೂ, ಕಮಲಾಸನಸ್ಥ ಬ್ರಹ್ಮೇಶ್ವರನನ್ನೂ, ಸರ್ವ ಋಷಿಗಳನ್ನೂ, ದಿವ್ಯ ಸರ್ಪಗಳನ್ನೂ ನೋಡುತ್ತಿದ್ದೇನೆ."
},
{
"id": "11-16",
"chapter": 11,
"verse": 16,
"kannada": "ಅನೇಕಬಾಹೂದರವಕ್ತ್ರನೇತ್ರಂ ಪಶ್ಯಾಮಿ ತ್ವಾಂ ಸರ್ವತೋಽನಂತರೂಪಮ್ | ನಾನ್ತಂ ನ ಮಧ್ಯಂ ನ ಪುನಸ್ತವಾದಿಂ ಪಶ್ಯಾಮಿ ವಿಶ್ವೇಶ್ವರ ವಿಶ್ವರೂಪ ||",
"transliteration": "aneka-bāhūdara-vaktra-netraṁ paśhyāmi tvāṁ sarvato 'nantarūpam nāntaṁ na madhyaṁ na punas tavādiṁ paśhyāmi viśhveśhvara viśhva-rūpa",
"meaning": "ಹೇ ವಿಶ್ವೇಶ್ವರ, ಹೇ ವಿಶ್ವರೂಪ, ಅನೇಕ ಬಾಹು, ಉದರ, ವಕ್ತ್ರ, ನೇತ್ರಗಳುಳ್ಳ, ಸರ್ವತೋಽನಂತರೂಪನಾದ ನಿನ್ನನ್ನು ನೋಡುತ್ತಿದ್ದೇನೆ. ನಿನಗೆ ಅಂತ್ಯ, ಮಧ್ಯ, ಆದಿ ಇವುಗಳನ್ನು ನೋಡುತ್ತಿಲ್ಲ."
},
{
"id": "11-17",
"chapter": 11,
"verse": 17,
"kannada": "ಕಿರೀಟಿನಂ ಗದಿನಂ ಚಕ್ರಿಣಂ ಚ ತೇಜೋರಾಶಿಂ ಸರ್ವತೋ ದಿಪ್ತಿಮಂತಮ್ | ಪಶ್ಯಾಮಿ ತ್ವಾಂ ದುರ್ನಿರೀಕ್ಷ್ಯಂ ಸಮಂತಾದ್ದೀಪ್ತಾನಲಾರ್ಕದ್ಯುತಿಮಪ್ರಮೇಯಮ್ ||",
"transliteration": "kirīṭinaṁ gadinaṁ chakriṇaṁ cha tejo-rāśhiṁ sarvato diptimantam paśhyāmi tvāṁ durnirīkṣhyaṁ samantād dīptānalārka-dyutim aprameyam",
"meaning": "ಕಿರೀಟಿ, ಗದಿನ್, ಚಕ್ರಿಯೂ ಆದ, ತೇಜೋರಾಶಿಯೂ, ಸರ್ವತೋ ದಿಪ್ತಿಮಂತನೂ, ದುರ್ನಿರೀಕ್ಷ್ಯನೂ, ಸರ್ವತಃ ದೀಪ್ತಾಂಗಾರ-ಸೂರ್ಯದ್ಯುತಿಯೂ, ಅಪ್ರಮೇಯನೂ ಆದ ನಿನ್ನನ್ನು ನೋಡುತ್ತಿದ್ದೇನೆ."
},
{
"id": "11-18",
"chapter": 11,
"verse": 18,
"kannada": "ತ್ವಮಕ್ಷರಂ ಪರಮಂ ವೇದಿತವ್ಯಂ ತ್ವಮಸ್ಯ ವಿಶ್ವಸ್ಯ ಪರಂ ನಿಧಾನಮ್ | ತ್ವಮವ್ಯಯಃ ಶಾಶ್ವತಧರ್ಮಗೋಪ್ತಾ ಸನಾತನಸ್ತ್ವಂ ಪುರುಷೋ ಮತೋ ಮೇ ||",
"transliteration": "tvam akṣharaṁ paramaṁ veditavyaṁ tvam asya viśhvasya paraṁ nidhānam tvam avyayaḥ śhāśhvata-dharma-goptā sanātanas tvaṁ puruṣho mato me",
"meaning": "ನೀನೇ ಅಕ್ಷರ ಪರಮ ತತ್ತ್ವ, ಈ ವಿಶ್ವದ ಪರ ನಿಧಾನ, ನೀನೇ ಅವ್ಯಯ, ಶಾಶ್ವತ ಧರ್ಮಗೋಪ್ತ, ಸನಾತನ ಪುರುಷ - ಇದೇ ನನ್ನ ಮತ."
},
{
"id": "11-19",
"chapter": 11,
"verse": 19,
"kannada": "ಅನಾದಿಮಧ್ಯಾನ್ತಮನಂತವೀರ್ಯಮನಂತಬಾಹುಂ ಶಶಿಸೂರ್ಯನೇತ್ರಮ್ | ಪಶ್ಯಾಮಿ ತ್ವಾಂ ದೀಪ್ತಹುತಾಶವಕ್ತ್ರಂ ಸ್ವತೇಜಸಾ ವಿಶ್ವಮಿದಂ ತಪಂತಮ್ ||",
"transliteration": "anādi-madhyāntam ananta-vīryam ananta-bāhuṁ śhaśhi-sūrya-netram paśhyāmi tvāṁ dīpta-hutāśha-vaktraṁ sva-tejasā viśhvam idaṁ tapantam",
"meaning": "ಅನಾದಿ-ಮಧ್ಯ-ಅಂತ, ಅನಂತವೀರ್ಯ, ಅನಂತಬಾಹು, ಶಶಿಸೂರ್ಯನೇತ್ರ, ದೀಪ್ತಹುತಾಶವಕ್ತ್ರನೂ, ಸ್ವತೇಜಸ್ಸಿನಿಂದ ಈ ವಿಶ್ವವನ್ನು ತಪಿಸುವವನೂ ಆದ ನಿನ್ನನ್ನು ನೋಡುತ್ತಿದ್ದೇನೆ."
},
{
"id": "11-20",
"chapter": 11,
"verse": 20,
"kannada": "ದ್ಯಾವಾಪೃಥಿವ್ಯೋರಿದಮಂತರಂ ಹಿ ವ್ಯಾಪ್ತಂ ತ್ವಯೈಕೇನ ದಿಶಶ್ಚ ಸರ್ವಾಃ | ದೃಷ್ಟ್ವಾದ್ಭುತಂ ರೂಪಮುಗ್ರಂ ತವೇದಂ ಲೋಕತ್ರಯಂ ಪ್ರವ್ಯಥಿತಂ ಮಹಾತ್ಮನ್ ||",
"transliteration": "dyāvā-pṛithivyor idam antaraṁ hi vyāptaṁ tvayaikena diśaśh cha sarvāḥ dṛiṣhṭvādbhutaṁ rūpam ugraṁ tavedaṁ loka-trayaṁ pravyathitaṁ mahātman",
"meaning": "ಹೇ ಮಹಾತ್ಮನೇ, ಆಕಾಶ-ಭೂಮಿಗಳ ಮಧ್ಯದಲ್ಲಿಯೂ, ಸರ್ವದಿಕ್ಕುಗಳಲ್ಲಿಯೂ ನೀನೊಬ್ಬನೇ ವ್ಯಾಪಿಸಿರುವೆ. ಈ ಭಯಂಕರ ಅದ್ಭುತ ರೂಪವನ್ನು ನೋಡಿ ಲೋಕತ್ರಯವೂ ಪ್ರವ್ಯಥಿತವಾಗಿದೆ."
},
{
"id": "11-21",
"chapter": 11,
"verse": 21,
"kannada": "ಅಮೀ ಹಿ ತ್ವಾಂ ಸುರಸಂಘಾ ವಿಶನ್ತಿ ಕೇಚಿದ್ಭೀತಾಃ ಪ್ರಾಂಜಲಯೋ ಗೃಣನ್ತಿ | ಸ್ವಸ್ತೀತ್ಯುಕ್ತ್ವಾ ಮಹರ್ಷಿಸಿದ್ಧಸಂಘಾಃ ಸ್ತುವನ್ತಿ ತ್ವಾಂ ಸ್ತುತಿಭಿಃ ಪುಷ್ಕಲಾಭಿಃ ||",
"transliteration": "amī hi tvāṁ sura-saṅghā viśhanti kechid bhītāḥ prāñjalayo gṛiṇanti svastīty uktvā maharṣhi-siddha-saṅghāḥ stuvanti tvāṁ stutibhiḥ puṣhkalābhiḥ",
"meaning": "ಈ ದೇವಸಂಘಗಳು ನಿನ್ನೊಳಗೆ ಪ್ರವೇಶಿಸುತ್ತಿದ್ದಾರೆ. ಕೆಲವರು ಭಯಭೀತರಾಗಿ ಪ್ರಾಂಜಲಿಯಿಂದ ಸ್ತುತಿಸುತ್ತಿದ್ದಾರೆ. ಮಹರ್ಷಿ-ಸಿದ್ಧಸಂಘಗಳು 'ಸ್ವಸ್ತಿ' ಎಂದು ಹೇಳಿ ಪುಷ್ಕಲ ಸ್ತುತಿಗಳಿಂದ ಸ್ತುತಿಸುತ್ತಿದ್ದಾರೆ."
},
{
"id": "11-22",
"chapter": 11,
"verse": 22,
"kannada": "ರುದ್ರಾದಿತ್ಯಾ ವಸವೋ ಯೇ ಚ ಸಾಧ್ಯಾ ವಿಶ್ವೇಽಶ್ವಿನೌ ಮರುತಶ್ಚೋಷ್ಮಪಾಶ್ಚ | ಗಂಧರ್ವಯಕ್ಷಾಸುರಸಿದ್ಧಸಂಘಾ ವೀಕ್ಷನ್ತೇ ತ್ವಾಂ ವಿಸ್ಮಿತಾಶ್ಚೈವ ಸರ್ವೇ ||",
"transliteration": "rudrādityā vasavo ye cha sādhyā viśhve 'śhvinau marutaśh choṣhmapāśh cha gandharva-yakṣhāsura-siddha-saṅghā vīkṣhante tvāṁ vismitāśh chaiva sarve",
"meaning": "ರುದ್ರರು, ಆದಿತ್ಯರು, ವಸುಗಳು, ಸಾಧ್ಯರು, ವಿಶ್ವೇದೇವರು, ಅಶ್ವಿನಿದೇವತೆಗಳು, ಮರುತ್ಗಳು, ಉಷ್ಮಪರು, ಗಂಧರ್ವ-ಯಕ್ಷ-ಅಸುರ-ಸಿದ್ಧ ಸಂಘಗಳು ಎಲ್ಲರೂ ವಿಸ್ಮಯಗೊಂಡು ನಿನ್ನನ್ನು ನೋಡುತ್ತಿದ್ದಾರೆ."
},
{
"id": "11-23",
"chapter": 11,
"verse": 23,
"kannada": "ರೂಪಂ ಮಹತ್ತೇ ಬಹುವಕ್ತ್ರನೇತ್ರಂ ಮಹಾಬಾಹೋ ಬಹುಬಾಹೂರುಪಾದಮ್ | ಬಹೂದರಂ ಬಹುದಂಷ್ಟ್ರಾಕರಾಳಂ ದೃಷ್ಟ್ವಾ ಲೋಕಾಃ ಪ್ರವ್ಯಥಿತಾಸ್ತಥಾಹಮ್ ||",
"transliteration": "rūpaṁ mahat te bahu-vaktra-netraṁ mahā-bāho bahu-bāhūrupādam bahūdaraṁ bahu-danṣhṭrā-karāḻaṁ dṛiṣhṭvā lokāḥ pravyathitās tathāham",
"meaning": "ಹೇ ಮಹಾಬಾಹೋ, ನಿನ್ನ ಬಹುವಕ್ತ್ರನೇತ್ರ, ಬಹುಬಾಹೂರುಪಾದ, ಬಹೂದರ, ಬಹುದಂಷ್ಟ್ರಾಕರಾಳವಾದ ಮಹಾರೂಪವನ್ನು ನೋಡಿ ಲೋಕಗಳು ಪ್ರವ್ಯಥಿತವಾಗಿರುವಂತೆ ನಾನೂ ಹಾಗೆಯೇ."
},
{
"id": "11-24",
"chapter": 11,
"verse": 24,
"kannada": "ನಭಃಸ್ಪೃಶಂ ದೀಪ್ತಮನೇಕವರ್ಣಂ ವ್ಯಾತ್ತಾನನಂ ದೀಪ್ತವಿಶಾಲನೇತ್ರಮ್ | ದೃಷ್ಟ್ವಾ ಹಿ ತ್ವಾಂ ಪ್ರವ್ಯಥಿತಾಂತರಾತ್ಮಾ ಧೃತಿಂ ನ ವಿಂದಾಮಿ ಶಮಂ ಚ ವಿಷ್ಣೋ ||",
"transliteration": "nabhaḥ-spṛiśhaṁ dīptam aneka-varṇaṁ vyāttānanam dīpta-viśhāla-netram dṛiṣhṭvā hi tvāṁ pravyathitāntarātmā dhṛitiṁ na vindāmi śhamaṁ cha viṣhṇo",
"meaning": "ಹೇ ವಿಷ್ಣೋ, ಆಕಾಶಸ್ಪರ್ಶಿಯೂ, ದೀಪ್ತವೂ, ಅನೇಕವರ್ಣವೂ, ವ್ಯಾತ್ತಾನನವೂ, ದೀಪ್ತವಿಶಾಲನೇತ್ರವೂ ಆದ ನಿನ್ನನ್ನು ನೋಡಿ ಪ್ರವ್ಯಥಿತಾಂತರಾತ್ಮನಾದ ನನಗೆ ಧೃತಿ ಮತ್ತು ಶಮ ಸಿಕ್ಕುತ್ತಿಲ್ಲ."
},
{
"id": "11-25",
"chapter": 11,
"verse": 25,
"kannada": "ದಂಷ್ಟ್ರಾಕರಾಳಾನಿ ಚ ತೇ ಮುಖಾನಿ ದೃಷ್ಟ್ವೈವ ಕಾಲಾನಲಸನ್ನಿಭಾನಿ | ದಿಶೋ ನ ಜಾನೇ ನ ಲಭೇ ಚ ಶರ್ಮ ಪ್ರಸೀದ ದೇವೇಶ ಜಗನ್ನಿವಾಸ ||",
"transliteration": "danṣhṭrā-karāḻāni cha te mukhāni dṛiṣhṭvaiva kālānala-sannibhāni diśho na jāne na labhe cha śharma prasīda deveśha jagannivāsa",
"meaning": "ಕಾಲಾಗ್ನಿ ಸದೃಶವಾದ, ದಂಷ್ಟ್ರಾಕರಾಳವಾದ ನಿನ್ನ ಮುಖಗಳನ್ನು ನೋಡಿಯೇ ದಿಕ್ಕು ತಿಳಿಯಲಾರೆ, ಶಾಂತಿ ಪಡೆಯಲಾರೆ. ಹೇ ದೇವೇಶ, ಹೇ ಜಗನ್ನಿವಾಸ, ಪ್ರಸನ್ನನಾಗು."
},
{
"id": "11-26",
"chapter": 11,
"verse": 26,
"kannada": "ಅಮೀ ಚ ತ್ವಾಂ ಧೃತರಾಷ್ಟ್ರಸ್ಯ ಪುತ್ರಾಃ ಸರ್ವೇ ಸಹೈವಾವನಿಪಾಲಸಂಘೈಃ | ಭೀಷ್ಮೋ ದ್ರೋಣಃ ಸೂತಪುತ್ರಸ್ತಥಾಸೌ ಸಹಾಸ್ಮದೀಯೈರಪಿ ಯೋಧಮುಖ್ಯೈಃ ||",
"transliteration": "amī cha tvāṁ dhṛitarāśhṭrasya putrāḥ sarve sahaivāvani-pāla-saṅghaiḥ bhīṣhmo droṇaḥ sūta-putras tathāsau sahāsmadīyair api yodha-mukhyaiḥ",
"meaning": "ಧೃತರಾಷ್ಟ್ರನ ಪುತ್ರರೆಲ್ಲರೂ, ಅವನಿಪಾಲಸಂಘಗಳೂ, ಭೀಷ್ಮ, ದ್ರೋಣ, ಸೂತಪುತ್ರ (ಕರ್ಣ) ಮತ್ತು ನಮ್ಮ ಯೋಧಮುಖ್ಯರೂ ನಿನ್ನೊಳಗೆ ಪ್ರವೇಶಿಸುತ್ತಿದ್ದಾರೆ."
},
{
"id": "11-27",
"chapter": 11,
"verse": 27,
"kannada": "ವಕ್ತ್ರಾಣಿ ತೇ ತ್ವರಮಾಣಾ ವಿಶನ್ತಿ ದಂಷ್ಟ್ರಾಕರಾಳಾನಿ ಭಯಾನಕಾನಿ | ಕೇಚಿದ್ವಿಲಗ್ನಾ ದಶನಾನ್ತರೇಷು ಸಂದೃಶ್ಯನ್ತೇ ಚೂರ್ಣಿತೈರುತ್ತಮಾಂಗೈಃ ||",
"transliteration": "vaktrāṇi te tvaramāṇā viśhanti danṣhṭrā-karāḻāni bhayānakāni kechid vilagnā daśhanāntareṣhu sandṛiśhyante chūrṇitair uttamāṅgaiḥ",
"meaning": "ಭಯಾನಕವಾದ, ದಂಷ್ಟ್ರಾಕರಾಳವಾದ ನಿನ್ನ ಮುಖಗಳಲ್ಲಿ ತ್ವರಿತವಾಗಿ ಪ್ರವೇಶಿಸುತ್ತಿದ್ದಾರೆ. ಕೆಲವರು ದಶನಾಂತರಗಳಲ್ಲಿ ಸಿಲುಕಿ, ಚೂರ್ಣಿತ ಉತ್ತಮಾಂಗಗಳಿಂದ ಕಾಣಿಸುತ್ತಿದ್ದಾರೆ."
},
{
"id": "11-28",
"chapter": 11,
"verse": 28,
"kannada": "ಯಥಾ ನದೀನಾಂ ಬಹವೋಽಂಬುವೇಗಾಃ ಸಮುದ್ರಮೇವಾಭಿಮುಖಾ ದ್ರವನ್ತಿ | ತಥಾ ತವಾಮೀ ನರಲೋಕವೀರಾ ವಿಶನ್ತಿ ವಕ್ತ್ರಾಣ್ಯಭಿವಿಜ್ವಲನ್ತಿ ||",
"transliteration": "yathā nadīnāṁ bahavo 'mbu-vegāḥ samudram evābhimukhā dravanti tathā tavāmī nara-loka-vīrā viśhanti vaktrāṇy abhivijvalanti",
"meaning": "ನದಿಗಳ ಅನೇಕ ಜಲವೇಗಗಳು ಸಮುದ್ರದ ಕಡೆಗೆ ಧಾವಿಸುವಂತೆ, ನರಲೋಕವೀರರು ಪ್ರಜ್ವಲಿಸುವ ನಿನ್ನ ಮುಖಗಳಲ್ಲಿ ಪ್ರವೇಶಿಸುತ್ತಿದ್ದಾರೆ."
},
{
"id": "11-29",
"chapter": 11,
"verse": 29,
"kannada": "ಯಥಾ ಪ್ರದೀಪ್ತಂ ಜ್ವಲನಂ ಪತಂಗಾ ವಿಶನ್ತಿ ನಾಶಾಯ ಸಮೃದ್ಧವೇಗಾಃ | ತಥೈವ ನಾಶಾಯ ವಿಶನ್ತಿ ಲೋಕಾಸ್ತವಾಪಿ ವಕ್ತ್ರಾಣಿ ಸಮೃದ್ಧವೇಗಾಃ ||",
"transliteration": "yathā pradīptaṁ jvalanaṁ patangā viśhanti nāśhāya samṛiddha-vegāḥ tathaiva nāśhāya viśhanti lokās tavāpi vaktrāṇi samṛiddha-vegāḥ",
"meaning": "ಪತಂಗಗಳು ಪ್ರದೀಪ್ತ ಅಗ್ನಿಯಲ್ಲಿ ಸಮೃದ್ಧವೇಗದಿಂದ ನಾಶಕ್ಕಾಗಿ ಪ್ರವೇಶಿಸುವಂತೆ, ಲೋಕಗಳು ನಿನ್ನ ಮುಖಗಳಲ್ಲಿ ಸಮೃದ್ಧವೇಗದಿಂದ ನಾಶಕ್ಕಾಗಿ ಪ್ರವೇಶಿಸುತ್ತಿವೆ."
},
{
"id": "11-30",
"chapter": 11,
"verse": 30,
"kannada": "ಲೇಲಿಹ್ಯಸೇ ಗ್ರಸಮಾನಃ ಸಮಂತಾಲ್ಲೋಕಾನ್ಸಮಗ್ರಾನ್ವದನೈರ್ಜ್ವಲದ್ಭಿಃ | ತೇಜೋಭಿರಾಪೂರ್ಯ ಜಗತ್ಸಮಗ್ರಂ ಭಾಸಸ್ತವೋಗ್ರಾಃ ಪ್ರತಪನ್ತಿ ವಿಷ್ಣೋ ||",
"transliteration": "lelihyase grasamānaḥ samantāl lokān samagrān vadanair jvaladbhiḥ tejobhir āpūrya jagat samagraṁ bhāsas tavogrāḥ pratapanti viṣhṇo",
"meaning": "ಹೇ ವಿಷ್ಣೋ, ನೀನು ಸಮಸ್ತ ಲೋಕಗಳನ್ನು ನಿಷ್ಟುರವಾಗಿ ನುಂಗುತ್ತಾ, ಪ್ರಜ್ವಲಿಸುವ ಮುಖಗಳಿಂದ ಸರ್ವತಃ ಲೇಲಿಹ್ಯಸುತ್ತೀ. ನಿನ್ನ ಉಗ್ರ ಕಿರಣಗಳು ಸಮಸ್ತ ಜಗತ್ತನ್ನು ಆವರಿಸಿ ಪ್ರತಪಿಸುತ್ತಿವೆ."
},
{
"id": "11-31",
"chapter": 11,
"verse": 31,
"kannada": "ಆಖ್ಯಾಹಿ ಮೇ ಕೋ ಭವಾನುಗ್ರರೂಪೋ ನಮೋಽಸ್ತು ತೇ ದೇವವರ ಪ್ರಸೀದ | ವಿಜ್ಞಾತುಮಿಚ್ಛಾಮಿ ಭವನ್ತಮಾದ್ಯಂ ನ ಹಿ ಪ್ರಜಾನಾಮಿ ತವ ಪ್ರವೃತ್ತಿಮ್ ||",
"transliteration": "ākhyāhi me ko bhavān ugra-rūpo namo 'stu te deva-vara prasīda vijñātum ichchhāmi bhavantam ādyaṁ na hi prajānāmi tava pravṛittim",
"meaning": "ಹೇ ದೇವವರ, ಉಗ್ರರೂಪನಾದ ನೀನು ಯಾರು? ನಿನಗೆ ನಮಸ್ಕಾರ. ಪ್ರಸನ್ನನಾಗು. ನಿನ್ನ ಪ್ರವೃತ್ತಿಯನ್ನು ತಿಳಿಯಲಾರೆನು. ಆದ್ಯನಾದ ನಿನ್ನನ್ನು ತಿಳಿಯಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
},
{
"id": "11-32",
"chapter": 11,
"verse": 32,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಕಾಲೋಽಸ್ಮಿ ಲೋಕಕ್ಷಯಕೃತ್ಪ್ರವೃದ್ಧೋ ಲೋಕಾನ್ಸಮಾಹರ್ತುಮಿಹ ಪ್ರವೃತ್ತಃ | ಋತೇಽಪಿ ತ್ವಾಂ ನ ಭವಿಷ್ಯನ್ತಿ ಸರ್ವೇ ಯೇಽವಸ್ಥಿತಾಃ ಪ್ರತ್ಯನೀಕೇಷು ಯೋಧಾಃ ||",
"transliteration": "śhrī bhagavān uvācha kālo 'smi loka-kṣhaya-kṛit pravṛiddho lokān samāhartum iha pravṛittaḥ ṛite 'pi tvāṁ na bhaviṣhyanti sarve ye 'vasthitāḥ pratyanīkeṣhu yodhāḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ನಾನೇ ಪ್ರವೃದ್ಧವಾದ ಲೋಕಕ್ಷಯಕರ್ತೃ ಕಾಲ. ಲೋಕಗಳನ್ನು ಸಂಹರಿಸಲು ಇಲ್ಲಿ ಪ್ರವೃತ್ತನಾಗಿದ್ದೇನೆ. ಪ್ರತ್ಯನೀಕಗಳಲ್ಲಿ ನಿಂತಿರುವ ಯೋಧರೆಲ್ಲರೂ ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಇರಲಾರರು."
},
{
"id": "11-33",
"chapter": 11,
"verse": 33,
"kannada": "ತಸ್ಮಾತ್ತ್ವಮುತ್ತಿಷ್ಠ ಯಶೋ ಲಭಸ್ವ ಜಿತ್ವಾ ಶತ್ರೂನ್ಭುಙ್ಕ್ಷ್ವ ರಾಜ್ಯಂ ಸಮೃದ್ಧಮ್ | ಮಯೈವೈತೇ ನಿಹತಾಃ ಪೂರ್ವಮೇವ ನಿಮಿತ್ತಮಾತ್ರಂ ಭವ ಸವ್ಯಸಾಚಿನ್ ||",
"transliteration": "tasmāt tvam uttiṣhṭha yaśho labhasva jitvā śhatrūn bhuṅkṣhva rājyaṁ samṛiddham mayaivaite nihatāḥ pūrvam eva nimitta-mātraṁ bhava savya-sāchin",
"meaning": "ಆದ್ದರಿಂದ ಹೇ ಸವ್ಯಸಾಚಿನ್, ನೀನೇ ಎದ್ದು ಯಶಸ್ಸನ್ನು ಪಡೆ, ಶತ್ರುಗಳನ್ನು ಜಯಿಸಿ ಸಮೃದ್ಧ ರಾಜ್ಯವನ್ನನುಭವಿಸು. ಇವರೆಲ್ಲರೂ ನನ್ನಿಂದಲೇ ಪೂರ್ವೇ ನಿಹತರಾಗಿದ್ದಾರೆ. ನೀನು ನಿಮಿತ್ತಮಾತ್ರನಾಗು."
},
{
"id": "11-34",
"chapter": 11,
"verse": 34,
"kannada": "ದ್ರೋಣಂ ಚ ಭೀಷ್ಮಂ ಚ ಜಯದ್ರಥಂ ಚ ಕರ್ಣಂ ತಥಾನ್ಯಾನಪಿ ಯೋಧವೀರಾನ್ | ಮಯಾ ಹತಾಂಸ್ತ್ವಂ ಜಹಿ ಮಾ ವ್ಯಥಿಷ್ಠಾ ಯುಧ್ಯಸ್ವ ಜೇತಾಸಿ ರಣೇ ಸಪತ್ನಾನ್ ||",
"transliteration": "droṇaṁ cha bhīṣhmaṁ cha jayadrathaṁ cha karṇaṁ tathānyān api yodha-vīrān mayā hatāns tvaṁ jahi mā vyathiṣhṭhā yudhyasva jetāsi raṇe sapatnān",
"meaning": "ದ್ರೋಣ, ಭೀಷ್ಮ, ಜಯದ್ರಥ, ಕರ್ಣ ಮತ್ತು ಇತರ ಯೋಧವೀರರನ್ನು ನಾನೇ ಹತರಾಗಿಸಿದ್ದೇನೆ. ನೀನು ಕೊಲ್ಲು, ದುಃಖಿಸಬೇಡ. ಯುದ್ಧ ಮಾಡು, ರಣದಲ್ಲಿ ಶತ್ರುಗಳನ್ನು ಜಯಿಸುವೆ."
},
{
"id": "11-35",
"chapter": 11,
"verse": 35,
"kannada": "ಸಂಜಯ ಉವಾಚ | ಏತಚ್ಛ್ರುತ್ವಾ ವಚನಂ ಕೇಶವಸ್ಯ ಕೃತಾಂಜಲಿರ್ವೇಪಮಾನಃ ಕಿರೀಟೀ | ನಮಸ್ಕೃತ್ವಾ ಭೂಯ ಏವಾಹ ಕೃಷ್ಣಂ ಸಗದ್ಗದಂ ಭೀತಭೀತಃ ಪ್ರಣಮ್ಯ ||",
"transliteration": "sañjaya uvācha etach chhrutvā vachanaṁ keśhavasya kṛitāñjalir vepamānaḥ kirīṭī namaskṛitvā bhūya evāha kṛiṣhṇaṁ sa-gadgadaṁ bhīta-bhītaḥ praṇamya",
"meaning": "ಸಂಜಯನು ಹೇಳಿದನು: ಕೇಶವನ ಈ ವಚನವನ್ನು ಕೇಳಿ, ಕಿರೀಟಿಯಾದ ಅರ್ಜುನನು ಕೃತಾಂಜಲಿಯಾಗಿ ವೇಪಮಾನನಾಗಿ, ನಮಸ್ಕರಿಸಿ, ಭೀತಭೀತನಾಗಿ, ಗದ್ಗದಸ್ವರದಿಂದ ಕೃಷ್ಣನನ್ನು ಮತ್ತೆ ಹೇಳಿದನು."
},
{
"id": "11-36",
"chapter": 11,
"verse": 36,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಸ್ಥಾನೇ ಹೃಷೀಕೇಶ ತವ ಪ್ರಕೀರ್ತ್ಯಾ ಜಗತ್ಪ್ರಹೃಷ್ಯತ್ಯನುರಜ್ಯತೇ ಚ | ರಕ್ಷಾಂಸಿ ಭೀತಾನಿ ದಿಶೋ ದ್ರವನ್ತಿ ಸರ್ವೇ ನಮಸ್ಯನ್ತಿ ಚ ಸಿದ್ಧಸಂಘಾಃ ||",
"transliteration": "arjuna uvācha sthāne hṛiṣhīkeśha tava prakīrtyā jagat prahṛiṣhyaty anurajyate cha rakṣhāṁsi bhītāni diśho dravanti sarve namasyanti cha siddha-saṅghāḥ",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಹೃಷೀಕೇಶ, ನಿನ್ನ ಕೀರ್ತಿಯಿಂದ ಜಗತ್ತು ಹರ್ಷಿಸುತ್ತದೆ, ಅನುರಕ್ತವಾಗುತ್ತದೆ. ರಾಕ್ಷಸರು ಭಯಭೀತರಾಗಿ ದಿಕ್ಕುಗಳಲ್ಲಿ ಓಡುತ್ತಾರೆ. ಸರ್ವ ಸಿದ್ಧಸಂಘಗಳು ನಮಸ್ಕರಿಸುತ್ತಾರೆ."
},
{
"id": "11-37",
"chapter": 11,
"verse": 37,
"kannada": "ಕಸ್ಮಾಚ್ಚ ತೇ ನ ನಮೇರನ್ಮಹಾತ್ಮನ್ಗರೀಯಸೇ ಬ್ರಹ್ಮಣೋಽಪ್ಯಾದಿಕರ್ತ್ರೇ | ಅನನ್ತದೇವೇಶ ಜಗನ್ನಿವಾಸ ತ್ವಮಕ್ಷರಂ ಸದಸತ್ತತ್ಪರಂ ಯತ್ ||",
"transliteration": "kasmāch cha te na nameran mahātman garīyase brahmaṇo 'py ādi-kartre ananta-deveśha jagannivāsa tvam akṣharaṁ sad-asat tat paraṁ yat",
"meaning": "ಹೇ ಮಹಾತ್ಮನೇ, ಬ್ರಹ್ಮನಿಗಿಂತಲೂ ಗರೀಯಸನೂ, ಆದಿಕರ್ತೃವೂ ಆದ ನಿನಗೆ ನಮಸ್ಕರಿಸದಿದ್ದರೇಕೆ? ಹೇ ಅನಂತದೇವೇಶ, ಹೇ ಜಗನ್ನಿವಾಸ, ಸದಸತ್ತುಗಳಿಗೆ ಪರವೂ, ಅಕ್ಷರವೂ ಆದ ನೀನು."
},
{
"id": "11-38",
"chapter": 11,
"verse": 38,
"kannada": "ತ್ವಮಾದಿದೇವಃ ಪುರುಷಃ ಪುರಾಣಸ್ತ್ವಮಸ್ಯ ವಿಶ್ವಸ್ಯ ಪರಂ ನಿಧಾನಮ್ | ವೇತ್ತಾಸಿ ವೇದ್ಯಂ ಚ ಪರಂ ಚ ಧಾಮ ತ್ವಯಾ ತತಂ ವಿಶ್ವಮನನ್ತರೂಪ ||",
"transliteration": "tvam ādi-devaḥ puruṣhaḥ purāṇas tvam asya viśhvasya paraṁ nidhānam vettāsi vedyam cha paraṁ cha dhāma tvayā tataṁ viśhvam ananta-rūpa",
"meaning": "ನೀನೇ ಆದಿದೇವ, ಪುರಾಣ ಪುರುಷ, ಈ ವಿಶ್ವದ ಪರ ನಿಧಾನ, ವೇದ್ಯ ಮತ್ತು ಪರಧಾಮವನ್ನು ತಿಳಿದವ, ಹೇ ಅನನ್ತರೂಪ, ನಿನ್ನಿಂದ ವಿಶ್ವವೇ ವ್ಯಾಪ್ತವಾಗಿದೆ."
},
{
"id": "11-39",
"chapter": 11,
"verse": 39,
"kannada": "ವಾಯುರ್ಯಮೋಽಗ್ನಿರ್ವರುಣಃ ಶಶಾಂಕಃ ಪ್ರಜಾಪತಿಸ್ತ್ವಂ ಪ್ರಪಿತಾಮಹಶ್ಚ | ನಮೋ ನಮಸ್ತೇಽಸ್ತು ಸಹಸ್ರಕೃತ್ವಃ ಪುನಶ್ಚ ಭೂಯೋಽಪಿ ನಮೋ ನಮಸ್ತೇ ||",
"transliteration": "vāyur yamo 'gnir varuṇaḥ śhaśhāṅkaḥ prajāpatis tvaṁ prapitāmahaśh cha namo namas te 'stu sahasra-kṛitvaḥ punaśh cha bhūyo 'pi namo namas te",
"meaning": "ನೀನೇ ವಾಯು, ಯಮ, ಅಗ್ನಿ, ವರುಣ, ಚಂದ್ರ, ಪ್ರಜಾಪತಿ, ಪ್ರಪಿತಾಮಹ. ನಿನಗೆ ಸಹಸ್ರಸಲ ನಮಸ್ಕಾರ, ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ."
},
{
"id": "11-40",
"chapter": 11,
"verse": 40,
"kannada": "ನಮಃ ಪುರಸ್ತಾದಥ ಪೃಷ್ಠತಸ್ತೇ ನಮೋಽಸ್ತು ತೇ ಸರ್ವತ ಏವ ಸರ್ವ | ಅನನ್ತವೀರ್ಯಾಮಿತವಿಕ್ರಮಸ್ತ್ವಂ ಸರ್ವಂ ಸಮಾಪ್ನೋಷಿ ತತೋಽಸಿ ಸರ್ವಃ ||",
"transliteration": "namaḥ purastād atha pṛiṣhṭhatas te namo 'stu te sarvata eva sarva ananta-vīryāmita-vikramas tvaṁ sarvaṁ samāpnoṣhi tato 'si sarvaḥ",
"meaning": "ಮುಂದೆ, ಹಿಂದೆ, ಸರ್ವತಃ, ಸರ್ವವಾಗಿ ನಿನಗೆ ನಮಸ್ಕಾರ. ಅನಂತವೀರ್ಯ, ಅಮಿತವಿಕ್ರಮನಾದ ನೀನು ಸರ್ವವನ್ನು ಸಮಾಪ್ನೋಷಿ, ಆದ್ದರಿಂದ ನೀನೇ ಸರ್ವನಾಗಿದ್ದೀ."
},
{
"id": "11-41",
"chapter": 11,
"verse": 41,
"kannada": "ಸಖೇತಿ ಮತ್ವಾ ಪ್ರಸಭಂ ಯದುಕ್ತಂ ಹೇ ಕೃಷ್ಣ ಹೇ ಯಾದವ ಹೇ ಸಖೇತಿ | ಅಜಾನತಾ ಮಹಿಮಾನಂ ತವೇದಂ ಮಯಾ ಪ್ರಮಾದಾತ್ಪ್ರಣಯೇನ ವಾಪಿ ||",
"transliteration": "sakheti matvā prasabhaṁ yad uktaṁ he kṛiṣhṇa he yādava he sakheti ajānatā mahimānaṁ tavedaṁ mayā pramādāt praṇayena vāpi",
"meaning": "ಹೇ ಕೃಷ್ಣ, ಹೇ ಯಾದವ, ಹೇ ಸಖೇ, ಎಂದು ಸಖ ಎಂದು ಭಾವಿಸಿ, ಪ್ರಮಾದದಿಂದ ಅಥವಾ ಪ್ರಣಯದಿಂದ ನಿನ್ನ ಮಹಿಮೆಯನ್ನು ತಿಳಿಯದೆ ಪ್ರಸಭವಾಗಿ ಹೇಳಿದ್ದನ್ನು."
},
{
"id": "11-42",
"chapter": 11,
"verse": 42,
"kannada": "ಯಚ್ಚಾವಹಾಸಾರ್ಥಮಸತ್ಕೃತೋಽಸಿ ವಿಹಾರಶಯ್ಯಾಸನಭೋಜನೇಷು | ಏಕೋಽಥವಾಪ್ಯಚ್ಯುತ ತತ್ಸಮಕ್ಷಂ ತತ್ಕ್ಷಾಮಯೇ ತ್ವಾಮಹಮಪ್ರಮೇಯಮ್ ||",
"transliteration": "yach chāvahāsārtham asatkṛito 'si vihāra-śhayyāsana-bhojaneṣhu eko 'thavāpy achyuta tat-samakṣhaṁ tat kṣhāmaye tvām aham aprameyam",
"meaning": "ವಿಹಾರ, ಶಯ್ಯಾ, ಆಸನ, ಭೋಜನಗಳಲ್ಲಿ ಏಕಾಕಿಯಾಗಿಯೂ, ಇತರರೆದುರಿನಲ್ಲಿಯೂ ನಿನಗೆ ಅವಹಾಸಾರ್ಥವಾಗಿ ಅಸತ್ಕೃತ ಮಾಡಿದ್ದನ್ನು, ಹೇ ಅಚ್ಯುತ, ಅಪ್ರಮೇಯನಾದ ನಿನ್ನನ್ನು ಕ್ಷಮಿಸು."
},
{
"id": "11-43",
"chapter": 11,
"verse": 43,
"kannada": "ಪಿತಾಸಿ ಲೋಕಸ್ಯ ಚರಾಚರಸ್ಯ ತ್ವಮಸ್ಯ ಪೂಜ್ಯಶ್ಚ ಗುರುರ್ಗರೀಯಾನ್ | ನ ತ್ವತ್ಸಮೋಽಸ್ತ್ಯಭ್ಯಧಿಕಃ ಕುತೋಽನ್ಯೋ ಲೋಕತ್ರಯೇಽಪ್ಯಪ್ರತಿಮಪ್ರಭಾವ ||",
"transliteration": "pitāsi lokasya charācharasya tvam asya pūjyaśh cha gurur garīyān na tvat-samo 'sty abhyadhikaḥ kuto 'nyo loka-traye 'py apratima-prabhāva",
"meaning": "ನೀನೇ ಚರಾಚರ ಲೋಕದ ಪಿತಾ, ಪೂಜ್ಯ, ಗುರುಗಳಿಗಿಂತ ಗರೀಯಸ್. ಲೋಕತ್ರಯದಲ್ಲಿಯೂ ನಿನಗೆ ಸಮನೂ, ಅಧಿಕನೂ ಇಲ್ಲ, ಹೇ ಅಪ್ರತಿಮಪ್ರಭಾವ."
},
{
"id": "11-44",
"chapter": 11,
"verse": 44,
"kannada": "ತಸ್ಮಾತ್ಪ್ರಣಮ್ಯ ಪ್ರಣಿಧಾಯ ಕಾಯಂ ಪ್ರಸಾದಯೇ ತ್ವಾಮಹಮೀಶಮೀಡ್ಯಮ್ | ಪಿತೇವ ಪುತ್ರಸ್ಯ ಸಖೇವ ಸಖ್ಯುಃ ಪ್ರಿಯಃ ಪ್ರಿಯಾಯಾರ್ಹಸಿ ದೇವ ಸೋಢುಮ್ ||",
"transliteration": "tasmāt praṇamya praṇidhāya kāyaṁ prasādaye tvām aham īśham īḍyam piteva putrasya sakheva sakhyuḥ priyaḥ priyāyārhasi deva soḍhum",
"meaning": "ಆದ್ದರಿಂದ ಪ್ರಣಮ್ಯ, ಕಾಯವನ್ನು ಪ್ರಣಿಧಾಯ, ಪೂಜ್ಯ ಈಶ್ವರನಾದ ನಿನ್ನನ್ನು ಪ್ರಸಾದಿಸುತ್ತೇನೆ. ಪಿತನು ಪುತ್ರನನ್ನು, ಸಖನು ಸಖ್ಯುವನ್ನು, ಪ್ರಿಯನು ಪ್ರಿಯೆಯನ್ನು ಸಹಿಸುವಂತೆ, ಹೇ ದೇವ, ಸಹಿಸಲು ಅರ್ಹನಾಗು."
},
{
"id": "11-45",
"chapter": 11,
"verse": 45,
"kannada": "ಅದೃಷ್ಟಪೂರ್ವಂ ಹೃಷಿತೋಽಸ್ಮಿ ದೃಷ್ಟ್ವಾ ಭಯೇನ ಚ ಪ್ರವ್ಯಥಿತಂ ಮನೋ ಮೇ | ತದೇವ ಮೇ ದರ್ಶಯ ದೇವ ರೂಪಂ ಪ್ರಸೀದ ದೇವೇಶ ಜಗನ್ನಿವಾಸ ||",
"transliteration": "adṛiṣhṭa-pūrvaṁ hṛiṣhito 'smi dṛiṣhṭvā bhayena cha pravyathitaṁ mano me tadeva me darśhaya deva rūpaṁ prasīda deveśha jagannivāsa",
"meaning": "ಇದುವರೆಗೆ ಕಂಡಿರದ ರೂಪವನ್ನು ನೋಡಿ ಹರ್ಷಿತನಾಗಿದ್ದೇನೆ, ಆದರೆ ಭಯದಿಂದ ನನ್ನ ಮನಸ್ಸು ಪ್ರವ್ಯಥಿತವಾಗಿದೆ. ಹೇ ದೇವ, ಹೇ ದೇವೇಶ, ಹೇ ಜಗನ್ನಿವಾಸ, ನನಗೆ ಆ ರೂಪವನ್ನೇ ತೋರಿಸು, ಪ್ರಸನ್ನನಾಗು."
},
{
"id": "11-46",
"chapter": 11,
"verse": 46,
"kannada": "ಕಿರೀಟಿನಂ ಗದಿನಂ ಚಕ್ರಹಸ್ತಮಿಚ್ಛಾಮಿ ತ್ವಾಂ ದ್ರಷ್ಟುಮಹಂ ತಥೈವ | ತೇನೈವ ರೂಪೇಣ ಚತುರ್ಭುಜೇನ ಸಹಸ್ರಬಾಹೋ ಭವ ವಿಶ್ವಮೂರ್ತೇ ||",
"transliteration": "kirīṭinaṁ gadinaṁ chakra-hastam ichchhāmi tvāṁ draṣhṭum ahaṁ tathaiva tenaiva rūpeṇa chatur-bhujena sahasra-bāho bhava viśhva-mūrte",
"meaning": "ಕಿರೀಟಿ, ಗದಿನ್, ಚಕ್ರಹಸ್ತನೂ ಆದ ನಿನ್ನನ್ನು ಆ ರೂಪದಲ್ಲಿಯೇ ನೋಡಲು ಇಚ್ಛಿಸುತ್ತೇನೆ. ಹೇ ಸಹಸ್ರಬಾಹೋ, ಹೇ ವಿಶ್ವಮೂರ್ತೇ, ನಾಲ್ಕು ಬಾಹುಗಳ ರೂಪದಿಂದ ಇರು."
},
{
"id": "11-47",
"chapter": 11,
"verse": 47,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಮಯಾ ಪ್ರಸನ್ನೇನ ತವಾರ್ಜುನೇದಂ ರೂಪಂ ಪರಂ ದರ್ಶಿತಮಾತ್ಮಯೋಗಾತ್ | ತೇಜೋಮಯಂ ವಿಶ್ವಮನನ್ತಮಾದ್ಯಂ ಯನ್ಮೇ ತ್ವದನ್ಯೇನ ನ ದೃಷ್ಟಪೂರ್ವಮ್ ||",
"transliteration": "śhrī bhagavān uvācha mayā prasannena tavārjunedaṁ rūpaṁ paraṁ darśhitam ātma-yogāt tejo-mayaṁ viśhvam anantam ādyaṁ yan me tvad anyena na dṛiṣhṭa-pūrvam",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ನಿನಗೆ ಪ್ರಸನ್ನನಾಗಿ, ಆತ್ಮಯೋಗದಿಂದ ಈ ಪರಂ ರೂಪವನ್ನು ತೋರಿಸಿದ್ದೇನೆ. ತೇಜೋಮಯ, ವಿಶ್ವ, ಅನಂತ, ಆದ್ಯ ರೂಪವನ್ನು ನಿನ್ನನ್ನು ಬಿಟ್ಟು ಇನ್ನಾರೂ ಇದುವರೆಗೆ ನೋಡಿರಲಿಲ್ಲ."
},
{
"id": "11-48",
"chapter": 11,
"verse": 48,
"kannada": "ನ ವೇದಯಜ್ಞಾದ್ಯತನೈರ್ನ ದಾನೈರ್ನ ಚ ಕ್ರಿಯಾಭಿರ್ನ ತಪೋಭಿರುಗ್ರೈಃ | ಏವಂರೂಪಃ ಶಕ್ಯ ಅಹಂ ನೃಲೋಕೇ ದ್ರಷ್ಟುಂ ತ್ವದನ್ಯೇನ ಕುರುಪ್ರವೀರ ||",
"transliteration": "na veda-yajñādhyayanair na dānair na cha kriyābhir na tapobhir ugraiḥ evaṁ-rūpaḥ śhakya ahaṁ nṛi-loke draṣhṭuṁ tvad anyena kuru-pravīra",
"meaning": "ಹೇ ಕುರುಪ್ರವೀರ, ವೇದಯಜ್ಞಾಧ್ಯಯನ, ದಾನ, ಕ್ರಿಯೆ, ಉಗ್ರ ತಪಸ್ಸುಗಳಿಂದಲೂ ನನ್ನ ಈ ರೂಪವನ್ನು ನಿನ್ನನ್ನು ಬಿಟ್ಟು ನರಲೋಕದಲ್ಲಿ ಯಾರೂ ನೋಡಲು ಸಾಧ್ಯವಿಲ್ಲ."
},
{
"id": "11-49",
"chapter": 11,
"verse": 49,
"kannada": "ಮಾ ತೇ ವ್ಯಥಾ ಮಾ ಚ ವಿಮೂಢಭಾವೋ ದೃಷ್ಟ್ವಾ ರೂಪಂ ಘೋರಮೀದೃಙ್ಮಮೇದಮ್ | ವ್ಯಪೇತಭೀಃ ಪ್ರೀತಮನಾಃ ಪುನಸ್ತ್ವಂ ತದೇವ ಮೇ ರೂಪಮಿದಂ ಪ್ರಪಶ್ಯ ||",
"transliteration": "mā te vyathā mā cha vimūḍha-bhāvo dṛiṣhṭvā rūpaṁ ghoram īdṛiṅ mamedam vyapeta-bhīḥ prīta-manāḥ punas tvaṁ tadeva me rūpam idaṁ prapaśhya",
"meaning": "ನನ್ನ ಈ ಘೋರ ರೂಪವನ್ನು ನೋಡಿ ವ್ಯಥೆಪಡಬೇಡ, ವಿಮೂಢಭಾವ ಹೊಂದಬೇಡ. ಭಯವನ್ನು ತ್ಯಜಿಸಿ, ಪ್ರೀತಮನಸ್ಸಿನಿಂದ ಮತ್ತೆ ನನ್ನ ಈ ರೂಪವನ್ನು ನೋಡು."
},
{
"id": "11-50",
"chapter": 11,
"verse": 50,
"kannada": "ಸಂಜಯ ಉವಾಚ | ಇತ್ಯರ್ಜುನಂ ವಾಸುದೇವಸ್ತಥೋಕ್ತ್ವಾ ಸ್ವಕಂ ರೂಪಂ ದರ್ಶಯಾಮಾಸ ಭೂಯಃ | ಆಶ್ವಾಸಯಾಮಾಸ ಚ ಭೀತಮೇನಂ ಭೂತ್ವಾ ಪುನಃ ಸೌಮ್ಯವಪುರ್ಮಹಾತ್ಮಾ ||",
"transliteration": "sañjaya uvācha ity arjunaṁ vāsudevas tathoktvā svakaṁ rūpaṁ darśhayāmāsa bhūyaḥ āśhvāsayāmāsa cha bhītam enaṁ bhūtvā punaḥ saumya-vapur mahātmā",
"meaning": "ಸಂಜಯನು ಹೇಳಿದನು: ಹೀಗೆ ಹೇಳಿ ವಾಸುದೇವನು ತನ್ನ ಸ್ವಕೀಯ ರೂಪವನ್ನು ಮತ್ತೆ ತೋರಿಸಿದನು. ಮಹಾತ್ಮನಾದ ಅವನು ಸೌಮ್ಯವಪುವನ್ನು ಧರಿಸಿ ಭೀತನಾದ ಅವನನ್ನು ಆಶ್ವಾಸನೆಗೊಳಿಸಿದನು."
},
{
"id": "11-51",
"chapter": 11,
"verse": 51,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ದೃಷ್ಟ್ವೇದಂ ಮಾನುಷಂ ರೂಪಂ ತವ ಸೌಮ್ಯಂ ಜನಾರ್ದನ | ಇದಾನೀಮಸ್ಮಿ ಸಂವೃತ್ತಃ ಸಚೇತಾಃ ಪ್ರಕೃತಿಂ ಗತಃ ||",
"transliteration": "arjuna uvācha dṛiṣhṭvedaṁ mānuṣhaṁ rūpaṁ tava saumyaṁ janārdana idānīm asmi saṁvṛittaḥ sa-chetāḥ prakṛitiṁ gataḥ",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಜನಾರ್ದನ, ನಿನ್ನ ಈ ಸೌಮ್ಯ ಮಾನುಷ ರೂಪವನ್ನು ನೋಡಿ ಈಗ ನಾನು ಸಂವೃತ್ತನಾಗಿ, ಸಚೇತನನಾಗಿ, ಪ್ರಕೃತಿಗೆ ಬಂದಿದ್ದೇನೆ."
},
{
"id": "11-52",
"chapter": 11,
"verse": 52,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಸುದುರ್ದರ್ಶಮಿದಂ ರೂಪಂ ದೃಷ್ಟವಾನಸಿ ಯನ್ಮಮ | ದೇವಾ ಅಪ್ಯಸ್ಯ ರೂಪಸ್ಯ ನಿತ್ಯಂ ದರ್ಶನಕಾಂಕ್ಷಿಣಃ ||",
"transliteration": "śhrī bhagavān uvācha su-dur-darśham idaṁ rūpaṁ dṛiṣhṭavān asi yan mama devā apyasya rūpasya nityaṁ darśhana-kāṅkṣhiṇaḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ನನ್ನ ಈ ಸುದುರ್ದರ್ಶ ರೂಪವನ್ನು ನೀನು ನೋಡಿದ್ದೀ. ಈ ರೂಪವನ್ನು ನಿತ್ಯ ದರ್ಶನಕಾಂಕ್ಷಿಗಳಾದ ದೇವತೆಗಳೂ ನೋಡಲಾರರು."
},
{
"id": "11-53",
"chapter": 11,
"verse": 53,
"kannada": "ನಾಹಂ ವೇದೈರ್ನ ತಪಸಾ ನ ದಾನೇನ ನ ಚೇಜ್ಯಯಾ | ಶಕ್ಯ ಏವಂವಿಧೋ ದ್ರಷ್ಟುಂ ದೃಷ್ಟವಾನಸಿ ಮಾಂ ಯಥಾ ||",
"transliteration": "nāhaṁ vedair na tapasā na dānena na cha ijyayā śhakya evaṁ-vidho draṣhṭuṁ dṛiṣhṭavān asi māṁ yathā",
"meaning": "ವೇದಗಳಿಂದಲೂ, ತಪಸ್ಸಿನಿಂದಲೂ, ದಾನದಿಂದಲೂ, ಇಜ್ಯೆಯಿಂದಲೂ ನನ್ನನ್ನು ಈ ರೀತಿ ನೋಡಲು ಸಾಧ್ಯವಿಲ್ಲ. ನೀನು ನೋಡಿದಂತೆ."
},
{
"id": "11-54",
"chapter": 11,
"verse": 54,
"kannada": "ಭಕ್ತ್ಯಾ ತ್ವನನ್ಯಯಾ ಶಕ್ಯ ಅಹಮೇವಂವಿಧೋಽರ್ಜುನ | ಜ್ಞಾತುಂ ದ್ರಷ್ಟುಂ ಚ ತತ್ತ್ವೇನ ಪ್ರವೇಷ್ಟುಂ ಚ ಪರಂತಪ ||",
"transliteration": "bhaktyā tvananyayā śhakya aham evaṁ-vidho 'rjuna jñātuṁ draṣhṭuṁ cha tattvena praveṣhṭuṁ cha parantapa",
"meaning": "ಹೇ ಅರ್ಜುನ, ಹೇ ಪರಂತಪ, ಅನನ್ಯಭಕ್ತಿಯಿಂದ ಮಾತ್ರ ನನ್ನನ್ನು ಈ ರೀತಿ ತಿಳಿಯಲು, ನೋಡಲು, ತತ್ತ್ವತಃ ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯ."
},
{
"id": "11-55",
"chapter": 11,
"verse": 55,
"kannada": "ಮತ್ಕರ್ಮಕೃನ್ಮತ್ಪರಮೋ ಮದ್ಭಕ್ತಃ ಸಂಗವರ್ಜಿತಃ | ನಿರ್ವೈರಃ ಸರ್ವಭೂತೇಷು ಯಃ ಸ ಮಾಮೇತಿ ಪಾಂಡವ ||",
"transliteration": "mat-karma-kṛin mat-paramo mad-bhaktaḥ saṅga-varjitaḥ nirvairaḥ sarva-bhūteṣhu yaḥ sa mām eti pāṇḍava",
"meaning": "ಹೇ ಪಾಂಡವ, ಯಾರು ನನ್ನ ಕರ್ಮವನ್ನು ಮಾಡುವವರೂ, ನನ್ನ ಪರಮರೂ, ನನ್ನ ಭಕ್ತರೂ, ಸಂಗವರ್ಜಿತರೂ, ಸರ್ವಭೂತಗಳಲ್ಲಿ ನಿರ್ವೈರರೂ ಆಗಿರುತ್ತಾರೋ, ಅವರು ನನ್ನನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},

    ]
  },
  {
    id: 12,
    title: "Bhakti Yoga",
    kannadaTitle: "ಭಕ್ತಿ ಯೋಗ",
    description: "ಭಕ್ತಿಯ ಮಾರ್ಗ - The path of devotion",
    totalVerses: 20,
    verses: [
{
"id": "12-1",
"chapter": 12,
"verse": 1,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಏವಂ ಸತತಯುಕ್ತಾ ಯೇ ಭಕ್ತಾಸ್ತ್ವಾಂ ಪರ್ಯುಪಾಸತೇ | ಯೇ ಚಾಪ್ಯಕ್ಷರಮವ್ಯಕ್ತಂ ತೇಷಾಂ ಕೇ ಯೋಗವಿತ್ತಮಾಃ ||",
"transliteration": "arjuna uvācha evaṁ satata-yuktā ye bhaktās tvāṁ paryupāsate ye chāpy akṣharam avyaktaṁ teṣhāṁ ke yoga-vittamāḥ",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಈ ರೀತಿ ಸತತಯುಕ್ತರಾಗಿ ನಿನ್ನನ್ನು ಉಪಾಸಿಸುವ ಭಕ್ತರೂ, ಅಕ್ಷರ ಅವ್ಯಕ್ತವನ್ನು ಉಪಾಸಿಸುವವರೂ - ಇವರಲ್ಲಿ ಯಾರು ಯೋಗವಿತ್ತಮರು?"
},
{
"id": "12-2",
"chapter": 12,
"verse": 2,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಮಯ್ಯಾವೇಶ್ಯ ಮನೋ ಯೇ ಮಾಂ ನಿತ್ಯಯುಕ್ತಾ ಉಪಾಸತೇ | ಶ್ರದ್ಧಯಾ ಪರಯೋಪೇತಾಸ್ತೇ ಮೇ ಯುಕ್ತತಮಾ ಮತಾಃ ||",
"transliteration": "śhrī bhagavān uvācha mayy āveśhya mano ye māṁ nitya-yuktā upāsate śhraddhayā parayopetās te me yukta-tamā matāḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಯಾರು ಮನಸ್ಸನ್ನು ನನ್ನಲ್ಲಿ ನಿಲ್ಲಿಸಿ, ನಿರಂತರ ಯುಕ್ತರಾಗಿ, ಪರಮ ಶ್ರದ್ಧೆಯಿಂದ ನನ್ನನ್ನು ಉಪಾಸಿಸುತ್ತಾರೋ, ಅವರೇ ನನ್ನ ಮತದಲ್ಲಿ ಯುಕ್ತತಮರು."
},
{
"id": "12-3",
"chapter": 12,
"verse": 3,
"kannada": "ಯೇ ತ್ವಕ್ಷರಮನಿರ್ದೇಶ್ಯಮವ್ಯಕ್ತಂ ಪರ್ಯುಪಾಸತೇ | ಸರ್ವತ್ರಗಮಚಿಂತ್ಯಂ ಚ ಕೂಟಸ್ಥಮಚಲಂ ಧ್ರುವಮ್ ||",
"transliteration": "ye tv akṣharam anirdeśhyam avyaktaṁ paryupāsate sarvatra-gam achintyaṁ cha kūṭa-stham achalaṁ dhruvam",
"meaning": "ಆದರೆ ಯಾರು ಅನಿರ್ದೇಶ್ಯವಾದ, ಅವ್ಯಕ್ತವಾದ, ಸರ್ವತ್ರಗವಾದ, ಅಚಿಂತ್ಯವಾದ, ಕೂಟಸ್ಥವಾದ, ಅಚಲವಾದ, ಧ್ರುವವಾದ ಅಕ್ಷರವನ್ನು ಉಪಾಸಿಸುತ್ತಾರೋ."
},
{
"id": "12-4",
"chapter": 12,
"verse": 4,
"kannada": "ಸಂನಿಯಮ್ಯೇಂದ್ರಿಯಗ್ರಾಮಂ ಸರ್ವತ್ರ ಸಮಬುದ್ಧಯಃ | ತೇ ಪ್ರಾಪ್ನುವನ್ತಿ ಮಾಮೇವ ಸರ್ವಭೂತಹಿತೇ ರತಾಃ ||",
"transliteration": "sanniyamyendriya-grāmaṁ sarvatra sama-buddhayaḥ te prāpnuvanti mām eva sarva-bhūta-hite ratāḥ",
"meaning": "ಇಂದ್ರಿಯಗಳನ್ನು ಸಂನಿಯಮ್ಯ, ಸರ್ವತ್ರ ಸಮಬುದ್ಧಿಯುಳ್ಳವರಾಗಿ, ಸರ್ವಭೂತಹಿತದಲ್ಲಿ ರತರಾಗಿ, ಅವರೂ ನನ್ನನ್ನೇ ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "12-5",
"chapter": 12,
"verse": 5,
"kannada": "ಕ್ಲೇಶೋಽಧಿಕತರಸ್ತೇಷಾಮವ್ಯಕ್ತಾಸಕ್ತಚೇತಸಾಮ್ | ಅವ್ಯಕ್ತಾ ಹಿ ಗತಿರ್ದುಃಖಂ ದೇಹವದ್ಭಿರವಾಪ್ಯತೇ ||",
"transliteration": "kleśho 'dhikataras teṣhām avyaktāsakta-chetasām avyaktā hi gatir duḥkhaṁ dehavadbhir avāpyate",
"meaning": "ಅವ್ಯಕ್ತಕ್ಕೆ ಆಸಕ್ತಚಿತ್ತರಾದವರಿಗೆ ಕ್ಲೇಶ ಅಧಿಕವಾಗಿರುತ್ತದೆ. ದೇಹವಂತರಿಗೆ ಅವ್ಯಕ್ತಗತಿಯು ದುಃಖದಿಂದ ಪ್ರಾಪ್ಯವಾಗುತ್ತದೆ."
},
{
"id": "12-6",
"chapter": 12,
"verse": 6,
"kannada": "ಯೇ ತು ಸರ್ವಾಣಿ ಕರ್ಮಾಣಿ ಮಯಿ ಸಂನ್ಯಸ್ಯ ಮತ್ಪರಾಃ | ಅನನ್ಯೇನೈವ ಯೋಗೇನ ಮಾಂ ಧ್ಯಾಯನ್ತ ಉಪಾಸತೇ ||",
"transliteration": "ye tu sarvāṇi karmāṇi mayi sannyasya mat-parāḥ ananyenaiva yogena māṁ dhyāyanta upāsate",
"meaning": "ಆದರೆ ಯಾರು ಸರ್ವ ಕರ್ಮಗಳನ್ನು ನನ್ನಲ್ಲಿ ಸಂನ್ಯಸ್ಯ, ಮತ್ಪರರಾಗಿ, ಅನನ್ಯಯೋಗದಿಂದ ನನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಉಪಾಸಿಸುತ್ತಾರೋ."
},
{
"id": "12-7",
"chapter": 12,
"verse": 7,
"kannada": "ತೇಷಾಮಹಂ ಸಮುದ್ಧರ್ತಾ ಮೃತ್ಯುಸಂಸಾರಸಾಗರಾತ್ | ಭವಾಮಿ ನಚಿರಾತ್ಪಾರ್ಥ ಮಯ್ಯಾವೇಶಿತಚೇತಸಾಮ್ ||",
"transliteration": "teṣhām ahaṁ samuddhartā mṛityu-saṁsāra-sāgarāt bhavāmi na chirāt pārtha mayy āveśhita-chetasām",
"meaning": "ಹೇ ಪಾರ್ಥ, ನನ್ನಲ್ಲಿ ಚಿತ್ತವನ್ನು ನಿಲ್ಲಿಸಿದವರನ್ನು ಮೃತ್ಯುಸಂಸಾರಸಾಗರದಿಂದ ನಾನೇ ಶೀಘ್ರದಲ್ಲಿ ಉದ್ಧರಿಸುತ್ತೇನೆ."
},
{
"id": "12-8",
"chapter": 12,
"verse": 8,
"kannada": "ಮಯ್ಯೇವ ಮನ ಆಧತ್ಸ್ವ ಮಯಿ ಬುದ್ಧಿಂ ನಿವೇಶಯ | ನಿವಸಿಷ್ಯಸಿ ಮಯ್ಯೇವ ಅತ ಊರ್ಧ್ವಂ ನ ಸಂಶಯಃ ||",
"transliteration": "mayy eva mana ādhatsva mayi buddhiṁ niveśhaya nivasiṣhyasi mayy eva ata ūrdhvaṁ na sanśhayaḥ",
"meaning": "ನನ್ನಲ್ಲೇ ಮನಸ್ಸನ್ನು ನೆಲೆಗೊಳಿಸು, ನನ್ನಲ್ಲೇ ಬುದ್ಧಿಯನ್ನು ನೆಲೆಗೊಳಿಸು; ಅನಂತರ ನೀನು ನನ್ನಲ್ಲೇ ವಾಸಮಾಡುತ್ತೀ ಎಂಬುದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ."
},
{
"id": "12-9",
"chapter": 12,
"verse": 9,
"kannada": "ಅಥ ಚಿತ್ತಂ ಸಮಾಧಾತುಂ ನ ಶಕ್ನೋಷಿ ಮಯಿ ಸ್ಥಿರಮ್ | ಅಭ್ಯಾಸಯೋಗೇನ ತತೋ ಮಾಮಿಚ್ಛಾಪ್ತುಂ ಧನಂಜಯ ||",
"transliteration": "atha chittaṁ samādhātuṁ na śhaknoṣhi mayi sthiram abhyāsa-yogena tato mām ichchhāptuṁ dhanañjaya",
"meaning": "ಹೇ ಧನಂಜಯ, ನನ್ನಲ್ಲಿ ಚಿತ್ತವನ್ನು ಸ್ಥಿರವಾಗಿ ಸಮಾಧಾನಪಡಿಸಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ, ಅಭ್ಯಾಸಯೋಗದಿಂದ ನನ್ನನ್ನು ಪಡೆಯಲು ಇಚ್ಛಿಸು."
},
{
"id": "12-10",
"chapter": 12,
"verse": 10,
"kannada": "ಅಭ್ಯಾಸೇಽಪ್ಯಸಮರ್ಥೋಽಸಿ ಮತ್ಕರ್ಮಪರಮೋ ಭವ | ಮದರ್ಥಮಪಿ ಕರ್ಮಾಣಿ ಕುರ್ವನ್ಸಿದ್ಧಿಮವಾಪ್ಸ್ಯಸಿ ||",
"transliteration": "abhyāse 'py asamartho 'si mat-karma-paramo bhava mad-artham api karmāṇi kurvan siddhim avāpsyasi",
"meaning": "ಅಭ್ಯಾಸದಲ್ಲಿಯೂ ಅಸಮರ್ಥನಾದರೆ, ಮತ್ಕರ್ಮಪರನಾಗು. ನನ್ನ ಅರ್ಥವಾಗಿ ಕರ್ಮಗಳನ್ನು ಮಾಡುತ್ತಾ ಸಿದ್ಧಿಯನ್ನು ಪಡೆಯುವೆ."
},
{
"id": "12-11",
"chapter": 12,
"verse": 11,
"kannada": "ಅಥೈತದಪ್ಯಶಕ್ತೋಽಸಿ ಕರ್ತುಂ ಮದ್ಯೋಗಮಾಶ್ರಿತಃ | ಸರ್ವಕರ್ಮಫಲತ್ಯಾಗಂ ತತಃ ಕುರು ಯತಾತ್ಮವಾನ್ ||",
"transliteration": "athaitad apy aśhakto 'si kartuṁ mad-yogam āśhritaḥ sarva-karma-phala-tyāgaṁ tataḥ kuru yatātmavān",
"meaning": "ಇದನ್ನೂ ಮಾಡಲು ಅಶಕ್ತನಾದರೆ, ಮದ್ಯೋಗವನ್ನು ಆಶ್ರಯಿಸಿ, ಸರ್ವಕರ್ಮಫಲಗಳನ್ನು ತ್ಯಜಿಸು, ಯತಾತ್ಮವಾನನಾಗು."
},
{
"id": "12-12",
"chapter": 12,
"verse": 12,
"kannada": "ಶ್ರೇಯೋ ಹಿ ಜ್ಞಾನಮಭ್ಯಾಸಾಜ್ಜ್ಞಾನಾದ್ಧ್ಯಾನಂ ವಿಶಿಷ್ಯತೇ | ಧ್ಯಾನಾತ್ಕರ್ಮಫಲತ್ಯಾಗಸ್ತ್ಯಾಗಾಚ್ಛಾನ್ತಿರನನ್ತರಮ್ ||",
"transliteration": "śhreyo hi jñānam abhyāsāj jñānād dhyānaṁ viśhiṣhyate dhyānāt karma-phala-tyāgas tyāgāch chhāntir anantaram",
"meaning": "ಅಭ್ಯಾಸದಿಂದ ಜ್ಞಾನ ಶ್ರೇಯಸ್ಕರ, ಜ್ಞಾನದಿಂದ ಧ್ಯಾನ ಶ್ರೇಷ್ಠ, ಧ್ಯಾನದಿಂದ ಕರ್ಮಫಲತ್ಯಾಗ, ತ್ಯಾಗದಿಂದ ಶಾಂತಿ ತಕ್ಷಣ ಲಭಿಸುತ್ತದೆ."
},
{
"id": "12-13",
"chapter": 12,
"verse": 13,
"kannada": "ಅದ್ವೇಷ್ಟಾ ಸರ್ವಭೂತಾನಾಂ ಮೈತ್ರಃ ಕರುಣ ಏವ ಚ | ನಿರ್ಮಮೋ ನಿರಹಂಕಾರಃ ಸಮದುಃಖಸುಖಃ ಕ್ಷಮೀ ||",
"transliteration": "adveṣhṭā sarva-bhūtānāṁ maitraḥ karuṇa eva cha nirmamo nirahankāraḥ sama-duḥkha-sukhaḥ kṣhamī",
"meaning": "ಸರ್ವಭೂತಗಳಿಗೆ ಅದ್ವೇಷ್ಟಾ, ಮೈತ್ರ, ಕರುಣಾಮಯ, ನಿರ್ಮಮ, ನಿರಹಂಕಾರ, ಸಮದುಃಖಸುಖ, ಕ್ಷಮಾವಂತ."
},
{
"id": "12-14",
"chapter": 12,
"verse": 14,
"kannada": "ಸಂತುಷ್ಟಃ ಸತತಂ ಯೋಗೀ ಯತಾತ್ಮಾ ದೃಢನಿಶ್ಚಯಃ | ಮಯ್ಯರ್ಪಿತಮನೋಬುದ್ಧಿರ್ಯೋ ಮದ್ಭಕ್ತಃ ಸ ಮೇ ಪ್ರಿಯಃ ||",
"transliteration": "santuṣhṭaḥ satataṁ yogī yatātmā dṛiḍha-niśhchayaḥ mayyarpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ",
"meaning": "ಸತತಂ ಸಂತುಷ್ಟನೂ, ಯೋಗಿಯೂ, ಯತಾತ್ಮನೂ, ದೃಢನಿಶ್ಚಯನೂ, ಮನೋಬುದ್ಧಿಗಳನ್ನು ನನಗೆ ಅರ್ಪಿಸಿದವನೂ ಆದವನೇ ನನ್ನ ಭಕ್ತ, ಅವನೇ ನನಗೆ ಪ್ರಿಯ."
},
{
"id": "12-15",
"chapter": 12,
"verse": 15,
"kannada": "ಯಸ್ಮಾನ್ನೋದ್ವಿಜತೇ ಲೋಕೋ ಲೋಕಾನ್ನೋದ್ವಿಜತೇ ಚ ಯಃ | ಹರ್ಷಾಮರ್ಷಭಯೋದ್ವೇಗೈರ್ಮುಕ್ತೋ ಯಃ ಸ ಚ ಮೇ ಪ್ರಿಯಃ ||",
"transliteration": "yasmān nodvijate loko lokān nodvijate cha yaḥ harṣhāmarṣha-bhayodvegair mukto yaḥ sa cha me priyaḥ",
"meaning": "ಯಾರಿಂದ ಲೋಕವು ಉದ್ವಿಗ್ನವಾಗುವುದಿಲ್ಲ, ಯಾರು ಲೋಕಗಳಿಂದ ಉದ್ವಿಗ್ನರಾಗುವುದಿಲ್ಲ, ಹರ್ಷ-ಅಮರ್ಷ-ಭಯ-ಉದ್ವೇಗಗಳಿಂದ ಮುಕ್ತರೋ, ಅವನೂ ನನಗೆ ಪ್ರಿಯ."
},
{
"id": "12-16",
"chapter": 12,
"verse": 16,
"kannada": "ಅನಪೇಕ್ಷಃ ಶುಚಿರ್ದಕ್ಷ ಉದಾಸೀನೋ ಗತವ್ಯಥಃ | ಸರ್ವಾರಂಭಪರಿತ್ಯಾಗೀ ಯೋ ಮದ್ಭಕ್ತಃ ಸ ಮೇ ಪ್ರಿಯಃ ||",
"transliteration": "anapekṣhaḥ śhuchir dakṣha udāsīno gata-vyathaḥ sarvārambha-parityāgī yo mad-bhaktaḥ sa me priyaḥ",
"meaning": "ಅನಪೇಕ್ಷ, ಶುಚಿ, ದಕ್ಷ, ಉದಾಸೀನ, ಗತವ್ಯಥ, ಸರ್ವಾರಂಭಪರಿತ್ಯಾಗಿ - ಯಾರು ನನ್ನ ಭಕ್ತರೋ, ಅವರೇ ನನಗೆ ಪ್ರಿಯರು."
},
{
"id": "12-17",
"chapter": 12,
"verse": 17,
"kannada": "ಯೋ ನ ಹೃಷ್ಯತಿ ನ ದ್ವೇಷ್ಟಿ ನ ಶೋಚತಿ ನ ಕಾಂಕ್ಷತಿ | ಶುಭಾಶುಭಪರಿತ್ಯಾಗೀ ಭಕ್ತಿಮಾನ್ಯಃ ಸ ಮೇ ಪ್ರಿಯಃ ||",
"transliteration": "yo na hṛiṣhyati na dveṣhṭi na śhochati na kāṅkṣhati śhubhāśhubha-parityāgī bhakti-mān yaḥ sa me priyaḥ",
"meaning": "ಯಾರು ಹರ್ಷಿಸುವುದಿಲ್ಲ, ದ್ವೇಷಿಸುವುದಿಲ್ಲ, ಶೋಚಿಸುವುದಿಲ್ಲ, ಕಾಂಕ್ಷಿಸುವುದಿಲ್ಲ, ಶುಭಾಶುಭಗಳನ್ನು ತ್ಯಜಿಸಿದವರೂ, ಭಕ್ತಿಯುಳ್ಳವರೂ ಆಗಿರುತ್ತಾರೋ, ಅವರೇ ನನಗೆ ಪ್ರಿಯರು."
},
{
"id": "12-18",
"chapter": 12,
"verse": 18,
"kannada": "ಸಮಃ ಶತ್ರೌ ಚ ಮಿತ್ರೇ ಚ ತಥಾ ಮಾನಾವಮಾನಯೋಃ | ಶೀತೋಷ್ಣಸುಖದುಃಖೇಷು ಸಮಃ ಸಂಗವಿವರ್ಜಿತಃ ||",
"transliteration": "samaḥ śhatrau cha mitre cha tathā mānāvamānayoḥ śhītoṣhṇa-sukha-duḥkheṣhu samaḥ saṅga-vivarjitaḥ",
"meaning": "ಶತ್ರು ಮಿತ್ರರಲ್ಲಿ, ಮಾನಾವಮಾನಗಳಲ್ಲಿ, ಶೀತೋಷ್ಣ ಸುಖದುಃಖಗಳಲ್ಲಿ ಸಮನಾಗಿ, ಸಂಗವರ್ಜಿತನಾಗಿ."
},
{
"id": "12-19",
"chapter": 12,
"verse": 19,
"kannada": "ತುಲ್ಯನಿಂದಾಸ್ತುತಿರ್ಮೌನೀ ಸಂತುಷ್ಟೋ ಯೇನ ಕೇನಚಿತ್ | ಅನಿಕೇತಃ ಸ್ಥಿರಮತಿರ್ಭಕ್ತಿಮಾನ್ಮೇ ಪ್ರಿಯೋ ನರಃ ||",
"transliteration": "tulya-nindā-stutir maunī santuṣhṭo yena kenachit aniketaḥ sthira-matir bhakti-mān me priyo naraḥ",
"meaning": "ನಿಂದಾ-ಸ್ತುತಿಗಳಲ್ಲಿ ಸಮ, ಮೌನಿ, ಯಾವುದರಿಂದಲಾದರೂ ಸಂತುಷ್ಟ, ಅನಿಕೇತ, ಸ್ಥಿರಮತಿ, ಭಕ್ತಿಮಾನ್ - ಅಂತಹ ನರನು ನನಗೆ ಪ್ರಿಯ."
},
{
"id": "12-20",
"chapter": 12,
"verse": 20,
"kannada": "ಯೇ ತು ಧರ್ಮ್ಯಾಮೃತಮಿದಂ ಯಥೋಕ್ತಂ ಪರ್ಯುಪಾಸತೇ | ಶ್ರದ್ಧದಾನಾ ಮತ್ಪರಮಾ ಭಕ್ತಾಸ್ತೇಽತೀವ ಮೇ ಪ್ರಿಯಾಃ ||",
"transliteration": "ye tu dharmyāmṛitam idaṁ yathoktaṁ paryupāsate śhraddadhānā mat-paramā bhaktās te 'tīva me priyāḥ",
"meaning": "ಯಾರು ಧರ್ಮ್ಯಾಮೃತವಾದ ಈ ಉಪದೇಶವನ್ನು ಹೇಳಿದಂತೆ ಶ್ರದ್ಧೆಯಿಂದ, ಮತ್ಪರರಾಗಿ ಉಪಾಸಿಸುತ್ತಾರೋ, ಅಂತಹ ಭಕ್ತರು ನನಗೆ ಅತೀವ ಪ್ರಿಯರು."
},

    ]
  },
  {
    id: 13,
    title: "Kshetra Kshetrajna Vibhaga Yoga",
    kannadaTitle: "ಕ್ಷೇತ್ರ ಕ್ಷೇತ್ರಜ್ಞ ವಿಭಾಗ ಯೋಗ",
    description: "ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞ - Field and the knower of the field",
    totalVerses: 35,
    verses: [
{
"id": "13-1",
"chapter": 13,
"verse": 1,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಪ್ರಕೃತಿಂ ಪುರುಷಂ ಚೈವ ಕ್ಷೇತ್ರಂ ಕ್ಷೇತ್ರಜ್ಞಮೇವ ಚ | ಎತದ್ವೇದಿತುಮಿಚ್ಛಾಮಿ ಜ್ಞಾನಂ ಜ್ಞೇಯಂ ಚ ಕೇಶವ ||",
"transliteration": "arjuna uvācha prakṛitiṁ puruṣhaṁ chaiva kṣhetraṁ kṣhetra-jñam eva cha etad veditum ichchhāmi jñānaṁ jñeyaṁ cha keśhava",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಕೇಶವ, ಪ್ರಕೃತಿ, ಪುರುಷ, ಕ್ಷೇತ್ರ, ಕ್ಷೇತ್ರಜ್ಞ, ಜ್ಞಾನ ಮತ್ತು ಜ್ಞೇಯ - ಇವನ್ನು ತಿಳಿಯಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
},
{
"id": "13-2",
"chapter": 13,
"verse": 2,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಇದಂ ಶರೀರಂ ಕೌಂತೇಯ ಕ್ಷೇತ್ರಮಿತ್ಯಭಿಧೀಯತೇ | ಏತದ್ಯೋ ವೇತ್ತಿ ತಂ ಪ್ರಾಹುಃ ಕ್ಷೇತ್ರಜ್ಞ ಇತಿ ತದ್ವಿದಃ ||",
"transliteration": "śhrī bhagavān uvācha idaṁ śharīraṁ kaunteya kṣhetram ity abhidhīyate etad yo vetti taṁ prāhuḥ kṣhetra-jña iti tad-vidaḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಹೇ ಕೌಂತೇಯ, ಈ ಶರೀರವನ್ನು ಕ್ಷೇತ್ರ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ. ಇದನ್ನು ಯಾರು ತಿಳಿಯುತ್ತಾರೋ, ಅವರನ್ನು ಕ್ಷೇತ್ರಜ್ಞ ಎಂದು ತತ್ತ್ವಜ್ಞರು ಹೇಳುತ್ತಾರೆ."
},
{
"id": "13-3",
"chapter": 13,
"verse": 3,
"kannada": "ಕ್ಷೇತ್ರಜ್ಞಂ ಚಾಪಿ ಮಾಂ ವಿದ್ಧಿ ಸರ್ವಕ್ಷೇತ್ರೇಷು ಭಾರತ | ಕ್ಷೇತ್ರಕ್ಷೇತ್ರಜ್ಞಯೋರ್ಜ್ಞಾನಂ ಯತ್ತತ್ಜ್ಞಾನಂ ಮತಂ ಮಮ ||",
"transliteration": "kṣhetra-jñaṁ chāpi māṁ viddhi sarva-kṣhetreṣhu bhārata kṣhetra-kṣhetra-jñayor jñānaṁ yat tat jñānaṁ mataṁ mama",
"meaning": "ಹೇ ಭಾರತ, ಸರ್ವಕ್ಷೇತ್ರಗಳಲ್ಲಿಯೂ ಕ್ಷೇತ್ರಜ್ಞನು ನಾನೇ ಎಂದು ತಿಳಿ. ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞರ ಜ್ಞಾನವೇ ನನ್ನ ಮತದಲ್ಲಿ ಜ್ಞಾನವಾಗಿದೆ."
},
{
"id": "13-4",
"chapter": 13,
"verse": 4,
"kannada": "ತತ್ಕ್ಷೇತ್ರಂ ಯಚ್ಚ ಯಾದೃಕ್ ಚ ಯದ್ವಿಕಾರಿ ಯತಶ್ಚ ಯತ್ | ಸ ಚ ಯೋ ಯತ್ಪ್ರಭಾವಶ್ಚ ತತ್ಸಮಾಸೇನ ಮೇ ಶೃಣು ||",
"transliteration": "tat kṣhetraṁ yach cha yādṛik cha yad-vikāri yataśh cha yat sa cha yo yat-prabhāvaśh cha tat samāsena me śhṛiṇu",
"meaning": "ಆ ಕ್ಷೇತ್ರವು ಏನು, ಎಂತಹದು, ಏನೇನು ವಿಕಾರವುಳ್ಳದ್ದು, ಎಲ್ಲಿಂದ ಹುಟ್ಟಿದೆ, ಕ್ಷೇತ್ರಜ್ಞನು ಯಾರು, ಅವನ ಪ್ರಭಾವವೇನು - ಇವನ್ನು ಸಂಕ್ಷೇಪವಾಗಿ ಕೇಳು."
},
{
"id": "13-5",
"chapter": 13,
"verse": 5,
"kannada": "ಋಷಿಭಿರ್ಬಹುಧಾ ಗೀತಂ ಛಂದೋಭಿರ್ವಿವಿಧೈಃ ಪೃಥಕ್ | ಬ್ರಹ್ಮಸೂತ್ರಪದೈಶ್ಚೈವ ಹೇತುಮದ್ಭಿರ್ವಿನಿಶ್ಚಿತೈಃ ||",
"transliteration": "ṛiṣhibhir bahudhā gītaṁ chhandobhir vividhaiḥ pṛithak brahma-sūtra-padaiśh chaiva hetumadbhir viniśhchitaiḥ",
"meaning": "ಋಷಿಗಳಿಂದ ಬಹುಧಾ ಹೇಳಲ್ಪಟ್ಟಿದೆ, ವಿವಿಧ ಛಂದಸ್ಸುಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಹೇಳಲ್ಪಟ್ಟಿದೆ, ಬ್ರಹ್ಮಸೂತ್ರಪದಗಳಿಂದಲೂ, ಹೇತುಮದ್ಭಿರ್ವಿನಿಶ್ಚಿತಗಳಿಂದಲೂ ಹೇಳಲ್ಪಟ್ಟಿದೆ."
},
{
"id": "13-6",
"chapter": 13,
"verse": 6,
"kannada": "ಮಹಾಭೂತಾನ್ಯಹಂಕಾರೋ ಬುದ್ಧಿರವ್ಯಕ್ತಮೇವ ಚ | ಇಂದ್ರಿಯಾಣಿ ದಶೈಕಂ ಚ ಪಂಚ ಚೇಂದ್ರಿಯಗೋಚರಾಃ ||",
"transliteration": "mahā-bhūtāny ahankāro buddhir avyaktam eva cha indriyāṇi daśhaikaṁ cha pañcha chendriya-gocharāḥ",
"meaning": "ಮಹಾಭೂತಗಳು, ಅಹಂಕಾರ, ಬುದ್ಧಿ, ಅವ್ಯಕ್ತ, ಹತ್ತು ಇಂದ್ರಿಯಗಳು, ಐದು ಇಂದ್ರಿಯಗೋಚರಗಳು."
},
{
"id": "13-7",
"chapter": 13,
"verse": 7,
"kannada": "ಇಚ್ಛಾ ದ್ವೇಷಃ ಸುಖಂ ದುಃಖಂ ಸಂಘಾತಶ್ಚೇತನಾ ಧೃತಿಃ | ಏತತ್ಕ್ಷೇತ್ರಂ ಸಮಾಸೇನ ಸವಿಕಾರಮುದಾಹೃತಮ್ ||",
"transliteration": "ichchhā dveṣhaḥ sukhaṁ duḥkhaṁ saṅghātaśh chetanā dhṛitiḥ etat kṣhetraṁ samāsena sa-vikāram udāhṛitam",
"meaning": "ಇಚ್ಛೆ, ದ್ವೇಷ, ಸುಖ, ದುಃಖ, ಸಂಘಾತ, ಚೇತನೆ, ಧೃತಿ - ಇದು ಸವಿಕಾರವಾದ ಕ್ಷೇತ್ರವು ಸಂಕ್ಷೇಪವಾಗಿ ಹೇಳಲ್ಪಟ್ಟಿದೆ."
},
{
"id": "13-8",
"chapter": 13,
"verse": 8,
"kannada": "ಅಮಾನಿತ್ವಮದಂಭಿತ್ವಮಹಿಂಸಾ ಕ್ಷಾನ್ತಿರಾರ್ಜವಮ್ | ಆಚಾರ್ಯೋಪಾಸನಂ ಶೌಚಂ ಸ್ಥೈರ್ಯಮಾತ್ಮವಿನಿಗ್ರಹಃ ||",
"transliteration": "amānitvam adambhitvam ahiṁsā kṣhāntir ārjavam āchāryopāsanaṁ śhauchaṁ sthairyam ātma-vinigrahaḥ",
"meaning": "ಅಮಾನಿತ್ವ, ಅದಂಭಿತ್ವ, ಅಹಿಂಸೆ, ಕ್ಷಾಂತಿ, ಆರ್ಜವ, ಆಚಾರ್ಯೋಪಾಸನ, ಶೌಚ, ಸ್ಥೈರ್ಯ, ಆತ್ಮವಿನಿಗ್ರಹ."
},
{
"id": "13-9",
"chapter": 13,
"verse": 9,
"kannada": "ಇಂದ್ರಿಯಾರ್ಥೇಷು ವೈರಾಗ್ಯಮನಹಂಕಾರ ಏವ ಚ | ಜನ್ಮಮೃತ್ಯುಜರಾವ್ಯಾಧಿದುಃಖದೋಷಾನುದರ್ಶನಮ್ ||",
"transliteration": "indriyārtheṣhu vairāgyam anahankāra eva cha janma-mṛityu-jarā-vyādhi-duḥkha-doṣhānudarśhanam",
"meaning": "ಇಂದ್ರಿಯಾರ್ಥಗಳಲ್ಲಿ ವೈರಾಗ್ಯ, ಅನಹಂಕಾರ, ಜನ್ಮ-ಮೃತ್ಯು-ಜರಾ-ವ್ಯಾಧಿ-ದುಃಖ-ದೋಷಗಳ ಅನುದರ್ಶನ."
},
{
"id": "13-10",
"chapter": 13,
"verse": 10,
"kannada": "ಅಸಕ್ತಿರನಭಿಷ್ವಂಗಃ ಪುತ್ರದಾರಗೃಹಾದಿಷು | ನಿತ್ಯಂ ಚ ಸಮಚಿತ್ತತ್ವಮಿಷ್ಟಾನಿಷ್ಟೋಪಪತ್ತಿಷು ||",
"transliteration": "asaktir anabhiṣhvaṅgaḥ putra-dāra-gṛihādiṣhu nityaṁ cha sama-chittatvam iṣhṭāniṣhṭopapattiṣhu",
"meaning": "ಅಸಕ್ತಿ, ಪುತ್ರ-ದಾರ-ಗೃಹಾದಿಗಳಲ್ಲಿ ಅನಭಿಷ್ವಂಗ, ಇಷ್ಟಾನಿಷ್ಟಗಳಲ್ಲಿ ನಿತ್ಯ ಸಮಚಿತ್ತತ್ವ."
},
{
"id": "13-11",
"chapter": 13,
"verse": 11,
"kannada": "ಮಯಿ ಚಾನನ್ಯಯೋಗೇನ ಭಕ್ತಿರವ್ಯಭಿಚಾರಿಣೀ | ವಿವಿಕ್ತದೇಶಸೇವಿತ್ವಮರತಿರ್ಜನಸಂಸದಿ ||",
"transliteration": "mayi chānanya-yogena bhaktir avyabhichāriṇī vivikta-deśha-sevitvam aratir jana-saṁsadi",
"meaning": "ನನ್ನಲ್ಲಿ ಅನನ್ಯಯೋಗದಿಂದ ಅವ್ಯಭಿಚಾರಿಣಿ ಭಕ್ತಿ, ವಿವಿಕ್ತದೇಶಸೇವಿತ್ವ, ಜನಸಂಸದಿಯಲ್ಲಿ ಅರತಿ."
},
{
"id": "13-12",
"chapter": 13,
"verse": 12,
"kannada": "ಅಧ್ಯಾತ್ಮಜ್ಞಾನನಿತ್ಯತ್ವಂ ತತ್ತ್ವಜ್ಞಾನಾರ್ಥದರ್ಶನಮ್ | ಎತಜ್ಜ್ಞಾನಮಿತಿ ಪ್ರೋಕ್ತಮಜ್ಞಾನಂ ಯದತೋಽನ್ಯಥಾ ||",
"transliteration": "adhyātma-jñāna-nityatvaṁ tattva-jñānārtha-darśhanam etaj jñānam iti proktam ajñānaṁ yad ato 'nyathā",
"meaning": "ಅಧ್ಯಾತ್ಮಜ್ಞಾನದ ನಿತ್ಯತ್ವ, ತತ್ತ್ವಜ್ಞಾನಾರ್ಥದ ದರ್ಶನ - ಇದೇ ಜ್ಞಾನ ಎಂದು ಹೇಳಲ್ಪಟ್ಟಿದೆ. ಇದರ ಹೊರತು ಬೇರೆಯದು ಅಜ್ಞಾನ."
},
{
"id": "13-13",
"chapter": 13,
"verse": 13,
"kannada": "ಜ್ಞೇಯಂ ಯತ್ತತ್ಪ್ರವಕ್ಷ್ಯಾಮಿ ಯಜ್ಜ್ಞಾತ್ವಾಮೃತಮಶ್ನುತೇ | ಅನಾದಿಮತ್ಪರಂ ಬ್ರಹ್ಮ ನ ಸತ್ತನ್ನಾಸದುಚ್ಯತೇ ||",
"transliteration": "jñeyaṁ yat tat pravakṣhyāmi yaj jñātvāmṛitam aśhnute anādi mat-paraṁ brahma na sat tan nāsad uchyate",
"meaning": "ಜ್ಞೇಯವನ್ನು ಹೇಳುತ್ತೇನೆ, ಅದನ್ನು ತಿಳಿದು ಅಮೃತವನ್ನು ಅನುಭವಿಸುತ್ತಾರೆ. ಅನಾದಿ, ಮತ್ಪರವಾದ ಬ್ರಹ್ಮ, ಸತ್ ಅಲ್ಲ, ಅಸತ್ ಅಲ್ಲ ಎಂದು ಹೇಳಲ್ಪಟ್ಟಿದೆ."
},
{
"id": "13-14",
"chapter": 13,
"verse": 14,
"kannada": "ಸರ್ವತಃ ಪಾಣಿಪಾದಂ ತತ್ಸರ್ವತೋಽಕ್ಷಿಶಿರೋಮುಖಮ್ | ಸರ್ವತಃ ಶ್ರುತಿಮಲ್ಲೋಕೇ ಸರ್ವಮಾವೃತ್ಯ ತಿಷ್ಠತಿ ||",
"transliteration": "sarvataḥ pāṇi-pādaṁ tat sarvato 'kṣhi-śhiro-mukham sarvataḥ śhrutim al loke sarvam āvṛitya tiṣhṭhati",
"meaning": "ಸರ್ವತಃ ಪಾಣಿಪಾದ, ಸರ್ವತಃ ಅಕ್ಷಿ-ಶಿರೋ-ಮುಖ, ಸರ್ವತಃ ಶ್ರುತಿ, ಲೋಕದಲ್ಲಿ ಸರ್ವವನ್ನು ಆವೃತ್ಯ ತಿಷ್ಠತಿ."
},
{
"id": "13-15",
"chapter": 13,
"verse": 15,
"kannada": "ಸರ್ವೇಂದ್ರಿಯಗುಣಾಭಾಸಂ ಸರ್ವೇಂದ್ರಿಯವಿವರ್ಜಿತಮ್ | ಅಸಕ್ತಂ ಸರ್ವಭೃಚ್ಚೈವ ನಿರ್ಗುಣಂ ಗುಣಭೋಕ್ತೃ ಚ ||",
"transliteration": "sarve-indriya-guṇābhāsaṁ sarve-indriya-vivarjitam asaktaṁ sarva-bhṛich chaiva nirguṇaṁ guṇa-bhoktṛi cha",
"meaning": "ಸರ್ವೇಂದ್ರಿಯಗುಣಾಭಾಸ, ಸರ್ವೇಂದ್ರಿಯವಿವರ್ಜಿತ, ಅಸಕ್ತ, ಸರ್ವಭೃತ್, ನಿರ್ಗುಣ, ಗುಣಭೋಕ್ತೃ."
},
{
"id": "13-16",
"chapter": 13,
"verse": 16,
"kannada": "ಬಹಿರನ್ತಶ್ಚ ಭೂತಾನಾಮಚರಂ ಚರಮೇವ ಚ | ಸೂಕ್ಷ್ಮತ್ವಾತ್ತದವಿಜ್ಞೇಯಂ ದೂರಸ್ಥಂ ಚಾನ್ತಿಕೇ ಚ ತತ್ ||",
"transliteration": "bahir antaśh cha bhūtānām acharaṁ charam eva cha sūkṣhmatvāt tad avijñeyaṁ dūra-sthaṁ chāntike cha tat",
"meaning": "ಭೂತಗಳ ಬಹಿರಂತಃ, ಅಚರ, ಚರ, ಸೂಕ್ಷ್ಮತ್ವದಿಂದ ಅವಿಜ್ಞೇಯ, ದೂರಸ್ಥ, ಅಂತಿಕೇ."
},
{
"id": "13-17",
"chapter": 13,
"verse": 17,
"kannada": "ಅವಿಭಕ್ತಂ ಚ ಭೂತೇಷು ವಿಭಕ್ತಮಿವ ಚ ಸ್ಥಿತಮ್ | ಭೂತಭರ್ತೃ ಚ ತಜ್ಜ್ಞೇಯಂ ಗ್ರಸಿಷ್ಣು ಪ್ರಭವಿಷ್ಣು ಚ ||",
"transliteration": "avibhaktaṁ cha bhūteṣhu vibhaktam iva cha sthitam bhūta-bhartṛi cha taj jñeyaṁ grasiṣhṇu prabhaviṣhṇu cha",
"meaning": "ಭೂತಗಳಲ್ಲಿ ಅವಿಭಕ್ತ, ವಿಭಕ್ತ ಇವ ಸ್ಥಿತ, ಭೂತಭರ್ತೃ, ಗ್ರಸಿಷ್ಣು, ಪ್ರಭವಿಷ್ಣು."
},
{
"id": "13-18",
"chapter": 13,
"verse": 18,
"kannada": "ಜ್ಯೋತಿಷಾಮಪಿ ತಜ್ಜ್ಯೋತಿಸ್ತಮಸಃ ಪರಮುಚ್ಯತೇ | ಜ್ಞಾನಂ ಜ್ಞೇಯಂ ಜ್ಞಾನಗಮ್ಯಂ ಹೃದಿ ಸರ್ವಸ್ಯ ಧಿಷ್ಠಿತಮ್ ||",
"transliteration": "jyotiṣhām api taj jyotis tamasaḥ param uchyate jñānaṁ jñeyaṁ jñāna-gamyaṁ hṛidi sarvasya dhiṣhṭhitam",
"meaning": "ಜ್ಯೋತಿಗಳಿಗೂ ಆ ಜ್ಯೋತಿ, ತಮಸ್ಸಿಗೆ ಪರ, ಜ್ಞಾನ, ಜ್ಞೇಯ, ಜ್ಞಾನಗಮ್ಯ, ಸರ್ವರ ಹೃದಯದಲ್ಲಿ ಧಿಷ್ಠಿತ."
},
{
"id": "13-19",
"chapter": 13,
"verse": 19,
"kannada": "ಇತಿ ಕ್ಷೇತ್ರಂ ತಥಾ ಜ್ಞಾನಂ ಜ್ಞೇಯಂ ಚೋಕ್ತಂ ಸಮಾಸತಃ | ಮದ್ಭಕ್ತ ಏತದ್ವಿಜ್ಞಾಯ ಮದ್ಭಾವಾಯೋಪಪದ್ಯತೇ ||",
"transliteration": "iti kṣhetraṁ tathā jñānaṁ jñeyaṁ choktaṁ samāsataḥ mad-bhakta etad vijñāya mad-bhāvāyopapadyate",
"meaning": "ಈ ರೀತಿ ಕ್ಷೇತ್ರ, ಜ್ಞಾನ, ಜ್ಞೇಯ - ಇವು ಸಂಕ್ಷೇಪವಾಗಿ ಹೇಳಲ್ಪಟ್ಟಿವೆ. ನನ್ನ ಭಕ್ತನು ಇವನ್ನು ತಿಳಿದು ನನ್ನ ಭಾವವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "13-20",
"chapter": 13,
"verse": 20,
"kannada": "ಪ್ರಕೃತಿಂ ಪುರುಷಂ ಚೈವ ವಿದ್ದ್ಯನಾದೀ ಉಭಾವಪಿ | ವಿಕಾರಾಂಶ್ಚ ಗುಣಾಂಶ್ಚೈವ ವಿದ್ದಿ ಪ್ರಕೃತಿಸಂಭವಾನ್ ||",
"transliteration": "prakṛitiṁ puruṣhaṁ chaiva viddhy anādī ubhāv api vikārānśh cha guṇānśh chaiva viddhi prakṛiti-sambhavān",
"meaning": "ಪ್ರಕೃತಿ ಮತ್ತು ಪುರುಷ ಇವೆರಡೂ ಅನಾದಿ ಎಂದು ತಿಳಿ. ವಿಕಾರಗಳು ಮತ್ತು ಗುಣಗಳು ಪ್ರಕೃತಿಯಿಂದ ಹುಟ್ಟಿದವು ಎಂದು ತಿಳಿ."
},
{
"id": "13-21",
"chapter": 13,
"verse": 21,
"kannada": "ಕಾರ್ಯಕಾರಣಕರ್ತೃತ್ವೇ ಹೇತುಃ ಪ್ರಕೃತಿರುಚ್ಯತೇ | ಪುರುಷಃ ಸುಖದುಃಖಾನಾಂ ಭೋಕ್ತೃತ್ವೇ ಹೇತುರುಚ್ಯತೇ ||",
"transliteration": "kārya-kāraṇa-kartṛitve hetuḥ prakṛitir uchyate puruṣhaḥ sukha-duḥkhānāṁ bhoktṛitve hetur uchyate",
"meaning": "ಕಾರ್ಯ-ಕಾರಣ-ಕರ್ತೃತ್ವದಲ್ಲಿ ಹೇತು ಪ್ರಕೃತಿ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ. ಸುಖ-ದುಃಖಗಳ ಭೋಕ್ತೃತ್ವದಲ್ಲಿ ಹೇತು ಪುರುಷ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "13-22",
"chapter": 13,
"verse": 22,
"kannada": "ಪುರುಷಃ ಪ್ರಕೃತಿಸ್ಥೋ ಹಿ ಭುಙ್ಕ್ತೇ ಪ್ರಕೃತಿಜಾನ್ ಗುಣಾನ್ | ಕಾರಣಂ ಗುಣಸಂಗೋಽಸ್ಯ ಸದಸದ್ಯೋನಿಜನ್ಮಸು ||",
"transliteration": "puruṣhaḥ prakṛiti-stho hi bhuṅkte prakṛiti-jān guṇān kāraṇaṁ guṇa-saṅgo 'sya sad-asad-yoni-janmasu",
"meaning": "ಪ್ರಕೃತಿಸ್ಥ ಪುರುಷನು ಪ್ರಕೃತಿಜ ಗುಣಗಳನ್ನು ಭುಜಿಸುತ್ತಾನೆ. ಸತ್-ಅಸತ್ ಯೋನಿಗಳಲ್ಲಿ ಜನ್ಮ ಪಡೆಯುವುದಕ್ಕೆ ಗುಣಸಂಗವೇ ಕಾರಣ."
},
{
"id": "13-23",
"chapter": 13,
"verse": 23,
"kannada": "ಉಪದ್ರಷ್ಟಾನುಮನ್ತಾ ಚ ಭರ್ತಾ ಭೋಕ್ತಾ ಮಹೇಶ್ವರಃ | ಪರಮಾತ್ಮೇತಿ ಚಾಪ್ಯುಕ್ತೋ ದೇಹೇಽಸ್ಮಿನ್ಪುರುಷಃ ಪರಃ ||",
"transliteration": "upadraṣhṭānumantā cha bhartā bhoktā maheśhvaraḥ paramātmeti chāpy ukto dehe 'smin puruṣhaḥ paraḥ",
"meaning": "ಉಪದ್ರಷ್ಟಾ, ಅನುಮನ್ತಾ, ಭರ್ತಾ, ಭೋಕ್ತಾ, ಮಹೇಶ್ವರ, ಪರಮಾತ್ಮ - ಈ ದೇಹದಲ್ಲಿರುವ ಪರ ಪುರುಷನು ಹೀಗೆ ಹೇಳಲ್ಪಟ್ಟಿದ್ದಾನೆ."
},
{
"id": "13-24",
"chapter": 13,
"verse": 24,
"kannada": "ಯ ಏವಂ ವೇತ್ತಿ ಪುರುಷಂ ಪ್ರಕೃತಿಂ ಚ ಗುಣೈಃ ಸಹ | ಸರ್ವಥಾ ವರ್ತಮಾನೋಽಪಿ ನ ಸ ಭೂಯೋಽಭಿಜಾಯತೇ ||",
"transliteration": "ya evaṁ vetti puruṣhaṁ prakṛitiṁ cha guṇaiḥ saha sarvathā vartamāno 'pi na sa bhūyo 'bhijāyate",
"meaning": "ಯಾರು ಈ ರೀತಿ ಪುರುಷ ಮತ್ತು ಗುಣಗಳೊಂದಿಗೆ ಪ್ರಕೃತಿಯನ್ನು ತಿಳಿಯುತ್ತಾರೋ, ಅವರು ಸರ್ವಥಾ ವರ್ತಿಸುತ್ತಿದ್ದರೂ ಪುನರ್ಜನ್ಮ ಪಡೆಯುವುದಿಲ್ಲ."
},
{
"id": "13-25",
"chapter": 13,
"verse": 25,
"kannada": "ಧ್ಯಾನೇನಾತ್ಮನಿ ಪಶ್ಯನ್ತಿ ಕೇಚಿದಾತ್ಮಾನಮಾತ್ಮನಾ | ಅನ್ಯೇ ಸಾಂಖ್ಯೇನ ಯೋಗೇನ ಕರ್ಮಯೋಗೇನ ಚಾಪರೇ ||",
"transliteration": "dhyānenātmani paśhyanti kechid ātmānam ātmanā anye sāṅkhyena yogena karma-yogena chāpare",
"meaning": "ಕೆಲವರು ಧ್ಯಾನದಿಂದ ಆತ್ಮನಲ್ಲಿ ಆತ್ಮನನ್ನು ನೋಡುತ್ತಾರೆ. ಇತರರು ಸಾಂಖ್ಯಯೋಗದಿಂದ, ಮತ್ತೆ ಕೆಲವರು ಕರ್ಮಯೋಗದಿಂದ."
},
{
"id": "13-26",
"chapter": 13,
"verse": 26,
"kannada": "ಅನ್ಯೇ ತ್ವೇವಮಜಾನನ್ತಃ ಶ್ರುತ್ವಾನ್ಯೇಭ್ಯ ಉಪಾಸತೇ | ತೇಽಪಿ ಚಾತಿತರನ್ತ್ಯೇವ ಮೃತ್ಯುಂ ಶ್ರುತಿಪರಾಯಣಾಃ ||",
"transliteration": "anye tv evam ajānantaḥ śhrutvānyebhya upāsate te 'pi chātitarantyeva mṛityuṁ śhruti-parāyaṇāḥ",
"meaning": "ಇನ್ನು ಕೆಲವರು ಇದನ್ನು ತಿಳಿಯದೆ ಇತರರಿಂದ ಕೇಳಿ ಉಪಾಸಿಸುತ್ತಾರೆ. ಅವರೂ ಶ್ರುತಿಪರಾಯಣರಾಗಿ ಮೃತ್ಯುವನ್ನು ತರಗತಿಯುವರು."
},
{
"id": "13-27",
"chapter": 13,
"verse": 27,
"kannada": "ಯಾವತ್ಸಂಜಾಯತೇ ಕಿಂಚಿತ್ಸತ್ತ್ವಂ ಸ್ಥಾವರಜಂಗಮಮ್ | ಕ್ಷೇತ್ರಕ್ಷೇತ್ರಜ್ಞಸಂಯೋಗಾತ್ತದ್ವಿದ್ಧಿ ಭರತರ್ಷಭ ||",
"transliteration": "yāvat saṁjāyate kiṁchit sattvaṁ sthāvara-jaṅgamam kṣhetra-kṣhetra-jña-saṁyogāt tad viddhi bharatarṣhabha",
"meaning": "ಹೇ ಭರತರ್ಷಭ, ಯಾವುದಾದರೂ ಸತ್ತ್ವ ಸ್ಥಾವರಜಂಗಮವಾಗಿ ಹುಟ್ಟುವುದೆಲ್ಲವೂ ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞರ ಸಂಯೋಗದಿಂದ ಎಂದು ತಿಳಿ."
},
{
"id": "13-28",
"chapter": 13,
"verse": 28,
"kannada": "ಸಮಂ ಸರ್ವೇಷು ಭೂತೇಷು ತಿಷ್ಠನ್ತಂ ಪರಮೇಶ್ವರಮ್ | ವಿನಶ್ಯತ್ಸ್ವವಿನಶ್ಯನ್ತಂ ಯಃ ಪಶ್ಯತಿ ಸ ಪಶ್ಯತಿ ||",
"transliteration": "samaṁ sarveṣhu bhūteṣhu tiṣhṭhantaṁ parameśhvaram vinaśhyatsv avinaśhyantaṁ yaḥ paśhyati sa paśhyati",
"meaning": "ಸರ್ವಭೂತಗಳಲ್ಲಿ ಸಮನಾಗಿ ನಿಂತಿರುವ ಪರಮೇಶ್ವರನನ್ನು, ನಶ್ವರಗಳಲ್ಲಿ ಅವಿನಶ್ವರನಾಗಿ ನೋಡುವವನೇ ನಿಜವಾಗಿ ನೋಡುತ್ತಾನೆ."
},
{
"id": "13-29",
"chapter": 13,
"verse": 29,
"kannada": "ಸಮಂ ಪಶ್ಯನ್ಹಿ ಸರ್ವತ್ರ ಸಮವಸ್ಥಿತಮೀಶ್ವರಮ್ | ನ ಹಿನಸ್ತ್ಯಾತ್ಮನಾತ್ಮಾನಂ ತತೋ ಯಾತಿ ಪರಾಂ ಗತಿಮ್ ||",
"transliteration": "samaṁ paśhyan hi sarvatra samavasthitam īśhvaram na hinasty ātmanātmānaṁ tato yāti parāṁ gatim",
"meaning": "ಸರ್ವತ್ರ ಸಮವಸ್ಥಿತನಾದ ಈಶ್ವರನನ್ನು ಸಮನಾಗಿ ನೋಡುತ್ತಾ, ಆತ್ಮನಿಂದ ಆತ್ಮನನ್ನು ಹೀನ ಮಾಡಿಕೊಳ್ಳುವುದಿಲ್ಲ. ಆದ್ದರಿಂದ ಪರಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "13-30",
"chapter": 13,
"verse": 30,
"kannada": "ಪ್ರಕೃತ್ಯೈವ ಚ ಕರ್ಮಾಣಿ ಕ್ರಿಯಮಾಣಾನಿ ಸರ್ವಶಃ | ಯಃ ಪಶ್ಯತಿ ತಥಾತ್ಮಾನಮಕರ್ತಾರಂ ಸ ಪಶ್ಯತಿ ||",
"transliteration": "prakṛityaiva cha karmāṇi kriyamāṇāni sarvaśhaḥ yaḥ paśhyati tathātmānam akartāraṁ sa paśhyati",
"meaning": "ಪ್ರಕೃತಿಯಿಂದಲೇ ಸರ್ವ ಕರ್ಮಗಳು ಕ್ರಿಯಮಾಣವಾಗುವುದನ್ನು, ಆತ್ಮನನ್ನು ಅಕರ್ತಾರನೆಂದು ನೋಡುವವನೇ ನೋಡುತ್ತಾನೆ."
},
{
"id": "13-31",
"chapter": 13,
"verse": 31,
"kannada": "ಯದಾ ಭೂತಪೃಥಗ್ಭಾವಮೇಕಸ್ಥಮನುಪಶ್ಯತಿ | ತತ ಏವ ಚ ವಿಸ್ತಾರಂ ಬ್ರಹ್ಮ ಸಂಪದ್ಯತೇ ತದಾ ||",
"transliteration": "yadā bhūta-pṛithag-bhāvam eka-stham anupaśhyati tata eva cha vistāraṁ brahma sampadyate tadā",
"meaning": "ಯಾವಾಗ ಭೂತಗಳ ಪೃಥಗ್ಭಾವವನ್ನು ಏಕಸ್ಥವಾಗಿ ನೋಡುತ್ತಾನೋ, ಆಗ ಅದರಿಂದ ವಿಸ್ತಾರವನ್ನು ಪಡೆದು ಬ್ರಹ್ಮವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "13-32",
"chapter": 13,
"verse": 32,
"kannada": "ಅನಾದಿತ್ವಾನ್ನಿರ್ಗುಣತ್ವಾತ್ಪರಮಾತ್ಮಾಯಮವ್ಯಯಃ | ಶರೀರಸ್ಥೋಽಪಿ ಕೌಂತೇಯ ನ ಕರೋತಿ ನ ಲಿಪ್ಯತೇ ||",
"transliteration": "anāditvān nirguṇatvāt paramātmāyam avyayaḥ śharīra-stho 'pi kaunteya na karoti na lipyate",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಅನಾದಿತ್ವದಿಂದ, ನಿರ್ಗುಣತ್ವದಿಂದ ಈ ಪರಮಾತ್ಮನು ಅವ್ಯಯನಾಗಿದ್ದಾನೆ. ಶರೀರಸ್ಥನಾದರೂ ಕರೋತಿ ಇಲ್ಲ, ಲಿಪ್ಯತೇ ಇಲ್ಲ."
},
{
"id": "13-33",
"chapter": 13,
"verse": 33,
"kannada": "ಯಥಾ ಸರ್ವಗತಂ ಸೌಕ್ಷ್ಮ್ಯಾದಾಕಾಶಂ ನೋಪಲಿಪ್ಯತೇ | ಸರ್ವತ್ರಾವಸ್ಥಿತೋ ದೇಹೇ ತಥಾತ್ಮಾ ನೋಪಲಿಪ್ಯತೇ ||",
"transliteration": "yathā sarva-gataṁ saukṣhmyād ākāśhaṁ nopalipyate sarvatrāvasthito dehe tathātmā nopalipyate",
"meaning": "ಸರ್ವಗತವಾದ, ಸೌಕ್ಷ್ಮ್ಯದಿಂದ ಆಕಾಶ ಲೇಪಿಸಲ್ಪಡದಿರುವಂತೆ, ಸರ್ವತ್ರ ಅವಸ್ಥಿತನಾದ ದೇಹದಲ್ಲಿಯೂ ಆತ್ಮನು ಲೇಪಿಸಲ್ಪಡುವುದಿಲ್ಲ."
},
{
"id": "13-34",
"chapter": 13,
"verse": 34,
"kannada": "ಯಥಾ ಪ್ರಕಾಶಯತ್ಯೇಕಃ ಕೃತ್ಸ್ನಂ ಲೋಕಮಿಮಂ ರವಿಃ | ಕ್ಷೇತ್ರಂ ಕ್ಷೇತ್ರೀ ತಥಾ ಕೃತ್ಸ್ನಂ ಪ್ರಕಾಶಯತಿ ಭಾರತ ||",
"transliteration": "yathā prakāśhayaty ekaḥ kṛitsnaṁ lokam imaṁ raviḥ kṣhetraṁ kṣhetrī tathā kṛitsnaṁ prakāśhayati bhārata",
"meaning": "ಹೇ ಭಾರತ, ಒಬ್ಬ ಸೂರ್ಯನು ಈ ಸಮಸ್ತ ಲೋಕವನ್ನು ಪ್ರಕಾಶಿಸುವಂತೆ, ಕ್ಷೇತ್ರಿಯು ಸಮಸ್ತ ಕ್ಷೇತ್ರವನ್ನು ಪ್ರಕಾಶಿಸುತ್ತಾನೆ."
},
{
"id": "13-35",
"chapter": 13,
"verse": 35,
"kannada": "ಕ್ಷೇತ್ರಕ್ಷೇತ್ರಜ್ಞಯೋರೇವಮಂತರಂ ಜ್ಞಾನಚಕ್ಷುಷಾ | ಭೂತಪ್ರಕೃತಿಮೋಕ್ಷಂ ಚ ಯೇ ವಿದುರ್ಯಾನ್ತಿ ತೇ ಪರಮ್ ||",
"transliteration": "kṣhetra-kṣhetra-jñayor evam antaraṁ jñāna-chakṣhuṣhā bhūta-prakṛiti-mokṣhaṁ cha ye vidur yānti te param",
"meaning": "ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞರ ಅಂತರವನ್ನು ಜ್ಞಾನಚಕ್ಷುಗಳಿಂದ ತಿಳಿದು, ಭೂತಪ್ರಕೃತಿಮೋಕ್ಷವನ್ನು ತಿಳಿದವರು ಪರವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},

    ]
  },
  {
    id: 14,
    title: "Gunatraya Vibhaga Yoga",
    kannadaTitle: "ಗುಣತ್ರಯ ವಿಭಾಗ ಯೋಗ",
    description: "ಮೂರು ಗುಣಗಳ ವಿಭಾಗ - The three qualities of nature",
    totalVerses: 27,
    verses: [
{
"id": "14-1",
"chapter": 14,
"verse": 1,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಪರಂ ಭೂಯಃ ಪ್ರವಕ್ಷ್ಯಾಮಿ ಜ್ಞಾನಾನಾಂ ಜ್ಞಾನಮುತ್ತಮಮ್ | ಯಜ್ಜ್ಞಾತ್ವಾ ಮುನಯಃ ಸರ್ವೇ ಪರಾಂ ಸಿದ್ಧಿಮಿತೋ ಗತಾಃ ||",
"transliteration": "śhrī bhagavān uvācha paraṁ bhūyaḥ pravakṣhyāmi jñānānāṁ jñānam uttamam yaj jñātvā munayaḥ sarve parāṁ siddhim ito gatāḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಮತ್ತೆ ಪರಮವಾದ, ಜ್ಞಾನಗಳಲ್ಲಿ ಉತ್ತಮವಾದ ಜ್ಞಾನವನ್ನು ಹೇಳುತ್ತೇನೆ. ಇದನ್ನು ತಿಳಿದು ಸರ್ವ ಮುನಿಗಳು ಇಂದು ಪರಮ ಸಿದ್ಧಿಯನ್ನು ಪಡೆದಿದ್ದಾರೆ."
},
{
"id": "14-2",
"chapter": 14,
"verse": 2,
"kannada": "ಇದಂ ಜ್ಞಾನಮುಪಾಶ್ರಿತ್ಯ ಮಮ ಸಾಧರ್ಮ್ಯಮಾಗತಾಃ | ಸರ್ಗೇಽಪಿ ನೋಪಜಾಯನ್ತೇ ಪ್ರಲಯೇ ನ ವ್ಯಥನ್ತಿ ಚ ||",
"transliteration": "idaṁ jñānam upāśhritya mama sādharmyam āgatāḥ sarge 'pi nopajāyante pralaye na vyathanti cha",
"meaning": "ಈ ಜ್ಞಾನವನ್ನು ಆಶ್ರಯಿಸಿ ನನ್ನ ಸಾಧರ್ಮ್ಯವನ್ನು ಪಡೆದು, ಸೃಷ್ಟಿಯಲ್ಲಿಯೂ ಹುಟ್ಟುವುದಿಲ್ಲ, ಪ್ರಳಯದಲ್ಲಿಯೂ ವ್ಯಥೆಪಡುವುದಿಲ್ಲ."
},
{
"id": "14-3",
"chapter": 14,
"verse": 3,
"kannada": "ಮಮ ಯೋನಿರ್ಮಹದ್ಬ್ರಹ್ಮ ತಸ್ಮಿನ್ಗರ್ಭಂ ದಧಾಮ್ಯಹಮ್ | ಸಂಭವಃ ಸರ್ವಭೂತಾನಾಂ ತತೋ ಭವತಿ ಭಾರತ ||",
"transliteration": "mama yonir mahad brahma tasmin garbhaṁ dadhāmy aham sambhavaḥ sarva-bhūtānāṁ tato bhavati bhārata",
"meaning": "ಹೇ ಭಾರತ, ಮಹತ್ ಬ್ರಹ್ಮವೇ ನನ್ನ ಯೋನಿ. ಅದರಲ್ಲಿ ಗರ್ಭವನ್ನು ನಾನು ಧರಿಸುತ್ತೇನೆ. ಆದ್ದರಿಂದ ಸರ್ವಭೂತಗಳ ಸಂಭವವಾಗುತ್ತದೆ."
},
{
"id": "14-4",
"chapter": 14,
"verse": 4,
"kannada": "ಸರ್ವಯೋನಿಷು ಕೌಂತೇಯ ಮೂರ್ತಯಃ ಸಂಭವನ್ತಿ ಯಾಃ | ತಾಸಾಂ ಬ್ರಹ್ಮ ಮಹದ್ಯೋನಿರಹಂ ಬೀಜಪ್ರದಃ ಪಿತಾ ||",
"transliteration": "sarva-yoniṣhu kaunteya mūrtayaḥ sambhavanti yāḥ tāsāṁ brahma mahad yonir ahaṁ bīja-pradaḥ pitā",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಸರ್ವಯೋನಿಗಳಲ್ಲಿ ಯಾವ ಮೂರ್ತಿಗಳು ಹುಟ್ಟುತ್ತವೆಯೋ, ಅವುಗಳಲ್ಲಿ ಬ್ರಹ್ಮವೇ ಮಹದ್ಯೋನಿ, ನಾನೇ ಬೀಜಪ್ರದ ಪಿತಾ."
},
{
"id": "14-5",
"chapter": 14,
"verse": 5,
"kannada": "ಸತ್ತ್ವಂ ರಜಸ್ತಮ ಇತಿ ಗುಣಾಃ ಪ್ರಕೃತಿಸಂಭವಾಃ | ನಿಬಧ್ನನ್ತಿ ಮಹಾಬಾಹೋ ದೇಹೇ ದೇಹಿನಮವ್ಯಯಮ್ ||",
"transliteration": "sattvaṁ rajas tama iti guṇāḥ prakṛiti-sambhavāḥ nibadhnanti mahā-bāho dehe dehinam avyayam",
"meaning": "ಹೇ ಮಹಾಬಾಹೋ, ಸತ್ತ್ವ, ರಜಸ್, ತಮಸ್ - ಈ ಗುಣಗಳು ಪ್ರಕೃತಿಸಂಭವಗಳು. ಇವು ದೇಹದಲ್ಲಿ ಅವ್ಯಯನಾದ ದೇಹಿಯನ್ನು ಬಂಧಿಸುತ್ತವೆ."
},
{
"id": "14-6",
"chapter": 14,
"verse": 6,
"kannada": "ತತ್ರ ಸತ್ತ್ವಂ ನಿರ್ಮಲತ್ವಾತ್ಪ್ರಕಾಶಕಮನಾಮಯಮ್ | ಸುಖಸಂಗೇನ ಬಧ್ನಾತಿ ಜ್ಞಾನಸಂಗೇನ ಚಾನಘ ||",
"transliteration": "tatra sattvaṁ nirmalatvāt prakāśhakam anāmayam sukha-saṅgena badhnāti jñāna-saṅgena chānagha",
"meaning": "ಅಲ್ಲಿ ಸತ್ತ್ವ ಗುಣವು ನಿರ್ಮಲತ್ವದಿಂದ ಪ್ರಕಾಶಕವೂ, ಅನಾಮಯವೂ ಆಗಿದೆ. ಸುಖಸಂಗ ಮತ್ತು ಜ್ಞಾನಸಂಗದಿಂದ ಬಂಧಿಸುತ್ತದೆ, ಹೇ ಅನಘ."
},
{
"id": "14-7",
"chapter": 14,
"verse": 7,
"kannada": "ರಜೋ ರಾಗಾತ್ಮಕಂ ವಿದ್ಧಿ ತೃಷ್ಣಾಸಂಗಸಮುದ್ಭವಮ್ | ತನ್ನಿಬಧ್ನಾತಿ ಕೌಂತೇಯ ಕರ್ಮಸಂಗೇನ ದೇಹಿನಮ್ ||",
"transliteration": "rajo rāgātmakaṁ viddhi tṛiṣhṇā-saṅga-samudbhavam tan nibadhnāti kaunteya karma-saṅgena dehinam",
"meaning": "ರಜಸ್ಸು ರಾಗಾತ್ಮಕವೆಂದು ತಿಳಿ. ತೃಷ್ಣಾ ಮತ್ತು ಸಂಗದಿಂದ ಉದ್ಭವಿಸುತ್ತದೆ. ಹೇ ಕೌಂತೇಯ, ಅದು ಕರ್ಮಸಂಗದಿಂದ ದೇಹಿಯನ್ನು ಬಂಧಿಸುತ್ತದೆ."
},
{
"id": "14-8",
"chapter": 14,
"verse": 8,
"kannada": "ತಮಸ್ತ್ವಜ್ಞಾನಜಂ ವಿದ್ಧಿ ಮೋಹನಂ ಸರ್ವದೇಹಿನಾಮ್ | ಪ್ರಮಾದಾಲಸ್ಯನಿದ್ರಾಭಿಸ್ತನ್ನಿಬಧ್ನಾತಿ ಭಾರತ ||",
"transliteration": "tamas tv ajñāna-jaṁ viddhi mohanaṁ sarva-dehinām pramādālasya-nidrābhis tan nibadhnāti bhārata",
"meaning": "ತಮಸ್ಸು ಅಜ್ಞಾನಜವೆಂದು ತಿಳಿ. ಸರ್ವದೇಹಿಗಳನ್ನು ಮೋಹಿಸುತ್ತದೆ. ಹೇ ಭಾರತ, ಪ್ರಮಾದ, ಆಲಸ್ಯ, ನಿದ್ರೆಗಳಿಂದ ಬಂಧಿಸುತ್ತದೆ."
},
{
"id": "14-9",
"chapter": 14,
"verse": 9,
"kannada": "ಸತ್ತ್ವಂ ಸುಖೇ ಸಂಜಯತಿ ರಜಃ ಕರ್ಮಣಿ ಭಾರತ | ಜ್ಞಾನಮಾವೃತ್ಯ ತು ತಮಃ ಪ್ರಮಾದೇ ಸಂಜಯತ್ಯುತ ||",
"transliteration": "sattvaṁ sukhe sañjayati rajaḥ karmaṇi bhārata jñānam āvṛitya tu tamaḥ pramāde sañjayaty uta",
"meaning": "ಸತ್ತ್ವ ಸುಖದಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತದೆ. ರಜಸ್ಸು ಕರ್ಮದಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತದೆ, ಹೇ ಭಾರತ. ತಮಸ್ಸು ಜ್ಞಾನವನ್ನು ಆವೃತ ಮಾಡಿ ಪ್ರಮಾದದಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತದೆ."
},
{
"id": "14-10",
"chapter": 14,
"verse": 10,
"kannada": "ರಜಸ್ತಮಶ್ಚಾಭಿಭೂಯ ಸತ್ತ್ವಂ ಭವತಿ ಭಾರತ | ರಜಃ ಸತ್ತ್ವಂ ತಮಶ್ಚೈವ ತಮಃ ಸತ್ತ್ವಂ ರಜಸ್ತಥಾ ||",
"transliteration": "rajas tamaśh chābhibhūya sattvaṁ bhavati bhārata rajaḥ sattvaṁ tamaśh chaiva tamaḥ sattvaṁ rajas tathā",
"meaning": "ಹೇ ಭಾರತ, ರಜಸ್ಸು ಮತ್ತು ತಮಸ್ಸನ್ನು ಅಭಿಭೂತ ಮಾಡಿ ಸತ್ತ್ವವು ಭವಿಸುತ್ತದೆ. ರಜಸ್ಸು ಸತ್ತ್ವ ಮತ್ತು ತಮಸ್ಸನ್ನು, ತಮಸ್ಸು ಸತ್ತ್ವ ಮತ್ತು ರಜಸ್ಸನ್ನು ಅಭಿಭೂತ ಮಾಡುತ್ತದೆ."
},
{
"id": "14-11",
"chapter": 14,
"verse": 11,
"kannada": "ಸರ್ವದ್ವಾರೇಷು ದೇಹೇಽಸ್ಮಿನ್ಪ್ರಕಾಶ ಉಪಜಾಯತೇ | ಜ್ಞಾನಂ ಯದಾ ತದಾ ವಿದ್ಯಾದ್ವಿವೃದ್ಧಂ ಸತ್ತ್ವಮಿತ್ಯುತ ||",
"transliteration": "sarva-dvāreṣhu dehe 'smin prakāśha upajāyate jñānaṁ yadā tadā vidyād vivṛiddhaṁ sattvam ity uta",
"meaning": "ಈ ದೇಹದ ಸರ್ವದ್ವಾರಗಳಲ್ಲಿ ಪ್ರಕಾಶವು ಉಪಜಾಯತೇ (ಹುಟ್ಟುತ್ತದೆ). ಜ್ಞಾನವು ಯಾವಾಗ ಹುಟ್ಟುತ್ತದೆಯೋ, ಆಗ ವಿವೃದ್ಧ ಸತ್ತ್ವವೆಂದು ತಿಳಿಯಬೇಕು."
},
{
"id": "14-12",
"chapter": 14,
"verse": 12,
"kannada": "ಲೋಭಃ ಪ್ರವೃತ್ತಿರಾರಂಭಃ ಕರ್ಮಣಾಮಶಮಃ ಸ್ಪೃಹಾ | ರಜಸ್ಯೇತಾನಿ ಜಾಯನ್ತೇ ವಿವೃದ್ಧೇ ಭರತರ್ಷಭ ||",
"transliteration": "lobhaḥ pravṛittir ārambhaḥ karmaṇām aśhamaḥ spṛihā rajasy etāni jāyante vivṛiddhe bharatarṣhabha",
"meaning": "ಲೋಭ, ಪ್ರವೃತ್ತಿ, ಆರಂಭ, ಕರ್ಮಗಳ ಅಶಮ, ಸ್ಪೃಹೆ - ಇವು ರಜಸ್ಸು ವಿವೃದ್ಧವಾದಾಗ ಹುಟ್ಟುತ್ತವೆ, ಹೇ ಭರತರ್ಷಭ."
},
{
"id": "14-13",
"chapter": 14,
"verse": 13,
"kannada": "ಅಪ್ರಕಾಶೋಽಪ್ರವೃತ್ತಿಶ್ಚ ಪ್ರಮಾದೋ ಮೋಹ ಏವ ಚ | ತಮಸ್ಯೇತಾನಿ ಜಾಯನ್ತೇ ವಿವೃದ್ಧೇ ಕುರುನಂದನ ||",
"transliteration": "aprakāśho 'pravṛittiśh cha pramādo moha eva cha tamasy etāni jāyante vivṛiddhe kuru-nandana",
"meaning": "ಅಪ್ರಕಾಶ, ಅಪ್ರವೃತ್ತಿ, ಪ್ರಮಾದ, ಮೋಹ - ಇವು ತಮಸ್ಸು ವಿವೃದ್ಧವಾದಾಗ ಹುಟ್ಟುತ್ತವೆ, ಹೇ ಕುರುನಂದನ."
},
{
"id": "14-14",
"chapter": 14,
"verse": 14,
"kannada": "ಯದಾ ಸತ್ತ್ವೇ ಪ್ರವೃದ್ಧೇ ತು ಪ್ರಲಯಂ ಯಾತಿ ದೇಹಭೃತ್ | ತದೋತ್ತಮವಿದಾಂ ಲೋಕಾನಮಲಾನ್ಪ್ರತಿಪದ್ಯತೇ ||",
"transliteration": "yadā sattve pravṛiddhe tu pralayaṁ yāti deha-bhṛit tadottama-vidāṁ lokān amalān pratipadyate",
"meaning": "ಸತ್ತ್ವ ಪ್ರವೃದ್ಧವಾದಾಗ ದೇಹಭೃತ್ ಪ್ರಳಯವನ್ನು ಪಡೆದು, ಉತ್ತಮವಿದರ ಲೋಕವಾದ ಅಮಲಾನ್ ಲೋಕವನ್ನು ಪ್ರತಿಪದ್ಯತೇ (ಪಡೆಯುತ್ತಾನೆ)."
},
{
"id": "14-15",
"chapter": 14,
"verse": 15,
"kannada": "ರಜಸಿ ಪ್ರಲಯಂ ಗತ್ವಾ ಕರ್ಮಸಂಗಿಷು ಜಾಯತೇ | ತಥಾ ಪ್ರಲೀನಸ್ತಮಸಿ ಮೂಢಯೋನಿಷು ಜಾಯತೇ ||",
"transliteration": "rajasi pralayaṁ gatvā karma-saṅgiṣhu jāyate tathā pralīnas tamasi mūḍha-yoniṣhu jāyate",
"meaning": "ರಜಸ್ಸಿನಲ್ಲಿ ಪ್ರಳಯವನ್ನು ಪಡೆದು ಕರ್ಮಸಂಗಿಗಳಲ್ಲಿ ಜನಿಸುತ್ತಾನೆ. ತಮಸ್ಸಿನಲ್ಲಿ ಪ್ರಳೀನನಾಗಿ ಮೂಢಯೋನಿಗಳಲ್ಲಿ ಜನಿಸುತ್ತಾನೆ."
},
{
"id": "14-16",
"chapter": 14,
"verse": 16,
"kannada": "ಕರ್ಮಣಃ ಸುಕೃತಸ್ಯಾಹುಃ ಸಾತ್ತ್ವಿಕಂ ನಿರ್ಮಲಂ ಫಲಮ್ | ರಜಸಸ್ತು ಫಲಂ ದುಃಖಮಜ್ಞಾನಂ ತಮಸಃ ಫಲಮ್ ||",
"transliteration": "karmaṇaḥ sukṛitasya āhuḥ sāttvikaṁ nirmalaṁ phalam rajasaśh tu phalaṁ duḥkham ajñānaṁ tamasaḥ phalam",
"meaning": "ಸುಕೃತ ಕರ್ಮದ ಫಲವನ್ನು ಸಾತ್ತ್ವಿಕ, ನಿರ್ಮಲವೆಂದು ಹೇಳುತ್ತಾರೆ. ರಜಸ್ಸಿನ ಫಲವು ದುಃಖ, ತಮಸ್ಸಿನ ಫಲವು ಅಜ್ಞಾನ."
},
{
"id": "14-17",
"chapter": 14,
"verse": 17,
"kannada": "ಸತ್ತ್ವಾತ್ಸಂಜಾಯತೇ ಜ್ಞಾನಂ ರಜಸೋ ಲೋಭ ಏವ ಚ | ಪ್ರಮಾದಮೋಹೌ ತಮಸೋ ಭವತೋಽಜ್ಞಾನಮೇವ ಚ ||",
"transliteration": "sattvāt sañjāyate jñānaṁ rajaso lobha eva cha pramāda-mohau tamaso bhavato 'jñānam eva cha",
"meaning": "ಸತ್ತ್ವದಿಂದ ಜ್ಞಾನ, ರಜಸ್ಸಿನಿಂದ ಲೋಭ, ತಮಸ್ಸಿನಿಂದ ಪ್ರಮಾದ-ಮೋಹ ಮತ್ತು ಅಜ್ಞಾನ ಹುಟ್ಟುತ್ತದೆ."
},
{
"id": "14-18",
"chapter": 14,
"verse": 18,
"kannada": "ಊರ್ಧ್ವಂ ಗಚ್ಛನ್ತಿ ಸತ್ತ್ವಸ್ಥಾ ಮಧ್ಯೇ ತಿಷ್ಠನ್ತಿ ರಾಜಸಾಃ | ಜಘನ್ಯಗುಣವೃತ್ತಿಸ್ಥಾ ಅಧೋ ಗಚ್ಛನ್ತಿ ತಾಮಸಾಃ ||",
"transliteration": "ūrdhvaṁ gachchhanti sattva-sthā madhye tiṣhṭhanti rājasāḥ jaghanya-guṇa-vṛitti-sthā adho gachchhanti tāmasāḥ",
"meaning": "ಸತ್ತ್ವಸ್ಥರು ಊರ್ಧ್ವಕ್ಕೆ ಹೋಗುತ್ತಾರೆ, ರಾಜಸರು ಮಧ್ಯದಲ್ಲಿ ನಿಲ್ಲುತ್ತಾರೆ, ಜಘನ್ಯ ಗುಣವೃತ್ತಿಸ್ಥರು (ತಾಮಸರು) ಅಧೋಗತಿಗೆ ಹೋಗುತ್ತಾರೆ."
},
{
"id": "14-19",
"chapter": 14,
"verse": 19,
"kannada": "ನಾನ್ಯಂ ಗುಣೇಭ್ಯಃ ಕರ್ತಾರಂ ಯದಾ ದ್ರಷ್ಟಾನುಪಶ್ಯತಿ | ಗುಣೇಭ್ಯಶ್ಚ ಪರಂ ವೇತ್ತಿ ಮದ್ಭಾವಂ ಸೋಽಧಿಗಚ್ಛತಿ ||",
"transliteration": "nānyaṁ guṇebhyaḥ kartāraṁ yadā draṣhṭānupaśhyati guṇebhyaśh cha paraṁ vetti mad-bhāvaṁ so 'dhigachchhati",
"meaning": "ಯಾವಾಗ ದ್ರಷ್ಟನು ಗುಣಗಳಿಗಿಂತ ಬೇರೆಯಾದ ಕರ್ತಾರನನ್ನು ನೋಡುತ್ತಾನೋ, ಗುಣಗಳಿಗೆ ಪರನನ್ನು ತಿಳಿಯುತ್ತಾನೋ, ಆಗ ಅವನು ನನ್ನ ಭಾವವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "14-20",
"chapter": 14,
"verse": 20,
"kannada": "ಗುಣಾನೇತಾನತೀತ್ಯ ತ್ರೀನ್ದೇಹೀ ದೇಹಸಮುದ್ಭವಾನ್ | ಜನ್ಮಮೃತ್ಯುಜರಾದುಃಖೈರ್ವಿಮುಕ್ತೋಽಮೃತಮಶ್ನುತೇ ||",
"transliteration": "guṇān etān atītya trīn dehī deha-samudbhavān janma-mṛityu-jarā-duḥkhair vimukto 'mṛitam aśhnute",
"meaning": "ದೇಹಿಯು ಈ ದೇಹಸಮುದ್ಭವವಾದ ಮೂರು ಗುಣಗಳನ್ನು ಅತೀತ್ಯ, ಜನ್ಮ-ಮೃತ್ಯು-ಜರಾ-ದುಃಖಗಳಿಂದ ವಿಮುಕ್ತನಾಗಿ ಅಮೃತವನ್ನು ಅನುಭವಿಸುತ್ತಾನೆ."
},
{
"id": "14-21",
"chapter": 14,
"verse": 21,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಕೈರ್ಲಿಂಗೈಸ್ತ್ರೀನ್ಗುಣಾನೇತಾನತೀತೋ ಭವತಿ ಪ್ರಭೋ | ಕಿಮಾಚಾರಃ ಕಥಂ ಚೈತಾಂಸ್ತ್ರೀನ್ಗುಣಾನತಿವರ್ತತೇ ||",
"transliteration": "arjuna uvācha kair liṅgais trīn guṇān etān atīto bhavati prabho kim āchāraḥ kathaṁ chaitāṁs trīn guṇān ativartate",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಪ್ರಭೋ, ಯಾವ ಲಿಂಗಗಳಿಂದ ಈ ಮೂರು ಗುಣಗಳನ್ನು ಅತೀತವಾದವನಾಗುತ್ತಾನೆ? ಯಾವ ಆಚಾರದಿಂದ, ಹೇಗೆ ಈ ಗುಣಗಳನ್ನು ಅತಿಕ್ರಮಿಸುತ್ತಾನೆ?"
},
{
"id": "14-22",
"chapter": 14,
"verse": 22,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಪ್ರಕಾಶಂ ಚ ಪ್ರವೃತ್ತಿಂ ಚ ಮೋಹಮೇವ ಚ ಪಾಂಡವ | ನ ದ್ವೇಷ್ಟಿ ಸಂಪ್ರವೃತ್ತಾನಿ ನ ನಿವೃತ್ತಾನಿ ಕಾಂಕ್ಷತಿ ||",
"transliteration": "śhrī bhagavān uvācha prakāśhaṁ cha pravṛittiṁ cha moham eva cha pāṇḍava na dveṣhṭi sampravṛittāni na nivṛittāni kāṅkṣhati",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಹೇ ಪಾಂಡವ, ಪ್ರಕಾಶ (ಸತ್ತ್ವ), ಪ್ರವೃತ್ತಿ (ರಜಸ್), ಮೋಹ (ತಮಸ್) - ಇವು ಸಂಪ್ರವೃತ್ತವಾದಾಗ ದ್ವೇಷಿಸುವುದಿಲ್ಲ, ನಿವೃತ್ತವಾದಾಗ ಕಾಂಕ್ಷಿಸುವುದಿಲ್ಲ."
},
{
"id": "14-23",
"chapter": 14,
"verse": 23,
"kannada": "ಉದಾಸೀನವದಾಸೀನೋ ಗುಣೈರ್ಯೋ ನ ವಿಚಾಲ್ಯತೇ | ಗುಣಾ ವರ್ತನ್ತ ಇತ್ಯೇವಂ ಯೋಽವತಿಷ್ಠತಿ ನೇಂಗತೇ ||",
"transliteration": "udāsīna-vad āsīno guṇair yo na vichālyate guṇā vartanta ity evaṁ yo 'vatiṣhṭhati neṅgate",
"meaning": "ಗುಣಗಳಿಂದ ಚಲಿಸಲ್ಪಡದೆ, ಉದಾಸೀನನಂತೆ ಇರುವವನು, 'ಗುಣಗಳು ವರ್ತಿಸುತ್ತಿವೆ' ಎಂದು ತಿಳಿದು ನಿಲ್ಲುತ್ತಾನೆ, ಚಲಿಸುವುದಿಲ್ಲ."
},
{
"id": "14-24",
"chapter": 14,
"verse": 24,
"kannada": "ಸಮದುಃಖಸುಖಃ ಸ್ವಸ್ಥಃ ಸಮಲೋಷ್ಟಾಶ್ಮಕಾಂಚನಃ | ತುಲ್ಯಪ್ರಿಯಾಪ್ರಿಯೋ ಧೀರಸ್ತುಲ್ಯನಿಂದಾತ್ಮಸಂಸ್ತುತಿಃ ||",
"transliteration": "sama-duḥkha-sukhaḥ svasthaḥ sama-loṣhṭāśhma-kāñchanaḥ tulya-priyāpriyo dhīras tulya-nindātma-saṁstutiḥ",
"meaning": "ಸಮದುಃಖಸುಖ, ಸ್ವಸ್ಥ, ಸಮಲೋಷ್ಟಾಶ್ಮಕಾಂಚನ, ತುಲ್ಯಪ್ರಿಯಾಪ್ರಿಯ, ಧೀರ, ತುಲ್ಯನಿಂದಾತ್ಮಸಂಸ್ತುತಿ."
},
{
"id": "14-25",
"chapter": 14,
"verse": 25,
"kannada": "ಮಾನಾಪಮಾನಯೋಸ್ತುಲ್ಯಸ್ತುಲ್ಯೋ ಮಿತ್ರಾರಿಪಕ್ಷಯೋಃ | ಸರ್ವಾರಂಭಪರಿತ್ಯಾಗೀ ಗುಣಾತೀತಃ ಸ ಉಚ್ಯತೇ ||",
"transliteration": "mānāpamānayos tulyas tulyo mitrāri-pakṣhayoḥ sarvārambha-parityāgī guṇātītaḥ sa uchyate",
"meaning": "ಮಾನಾಪಮಾನಗಳಲ್ಲಿ ತುಲ್ಯ, ಮಿತ್ರಾರಿ ಪಕ್ಷಗಳಲ್ಲಿ ತುಲ್ಯ, ಸರ್ವಾರಂಭಪರಿತ್ಯಾಗಿ - ಅವನು ಗುಣಾತೀತನೆಂದು ಹೇಳಲ್ಪಡುತ್ತಾನೆ."
},
{
"id": "14-26",
"chapter": 14,
"verse": 26,
"kannada": "ಮಾಂ ಚ ಯೋಽವ್ಯಭಿಚಾರೇಣ ಭಕ್ತಿಯೋಗೇನ ಸೇವತೇ | ಸ ಗುಣಾನ್ಸಮತೀತ್ಯೈತಾನ್ಬ್ರಹ್ಮಭೂಯಾಯ ಕಲ್ಪತೇ ||",
"transliteration": "māṁ cha yo 'vyabhichāreṇa bhakti-yogena sevate sa guṇān samatītyaitān brahma-bhūyāya kalpate",
"meaning": "ಯಾರು ಅವ್ಯಭಿಚಾರ ಭಕ್ತಿಯೋಗದಿಂದ ನನ್ನನ್ನು ಸೇವಿಸುತ್ತಾರೋ, ಅವರು ಈ ಗುಣಗಳನ್ನು ಸಮತೀತ್ಯ, ಬ್ರಹ್ಮಭೂಯಾಯ (ಬ್ರಹ್ಮನಾಗಲು) ಕಲ್ಪಿತರಾಗುತ್ತಾರೆ."
},
{
"id": "14-27",
"chapter": 14,
"verse": 27,
"kannada": "ಬ್ರಹ್ಮಣೋ ಹಿ ಪ್ರತಿಷ್ಠಾಹಮಮೃತಸ್ಯಾವ್ಯಯಸ್ಯ ಚ | ಶಾಶ್ವತಸ್ಯ ಚ ಧರ್ಮಸ್ಯ ಸುಖಸ್ಯೈಕಾಂತಿಕಸ್ಯ ಚ ||",
"transliteration": "brahmaṇo hi pratiṣhṭhāham amṛitasyāvyayasya cha śhāśhvatasya cha dharmasya sukhasyaikāntikasya cha",
"meaning": "ಯಾಕೆಂದರೆ ನಾನೇ ಬ್ರಹ್ಮನ ಪ್ರತಿಷ್ಠಾ, ಅಮೃತದ ಪ್ರತಿಷ್ಠಾ, ಅವ್ಯಯದ ಪ್ರತಿಷ್ಠಾ, ಶಾಶ್ವತ ಧರ್ಮದ ಪ್ರತಿಷ್ಠಾ, ಏಕಾಂತಿಕ ಸುಖದ ಪ್ರತಿಷ್ಠಾ."
},

    ]
  },
  {
    id: 15,
    title: "Purushottama Yoga",
    kannadaTitle: "ಪುರುಷೋತ್ತಮ ಯೋಗ",
    description: "ಪರಮಾತ್ಮ - The supreme self",
    totalVerses: 20,
    verses: [
{
"id": "15-1",
"chapter": 15,
"verse": 1,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಊರ್ಧ್ವಮೂಲಮಧಃಶಾಖಮಶ್ವತ್ಥಂ ಪ್ರಾಹುರವ್ಯಯಮ್ | ಛಂದಾಂಸಿ ಯಸ್ಯ ಪರ್ನಾನಿ ಯಸ್ತಂ ವೇದ ಸ ವೇದವಿತ್ ||",
"transliteration": "śhrī bhagavān uvācha ūrdhva-mūlam adhaḥ-śhākham aśhvatthaṁ prāhur avyayam chhandāṁsi yasya parṇāni yas taṁ veda sa veda-vit",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಊರ್ಧ್ವಮೂಲವೂ, ಅಧಃಶಾಖೆಯೂ ಉಳ್ಳ ಅಶ್ವತ್ಥವನ್ನು ಅವ್ಯಯವೆಂದು ಹೇಳುತ್ತಾರೆ. ಯಾವ ಮರದ ಪರ್ಣಗಳು ಛಂದಸ್ಸುಗಳೋ, ಯಾರು ಅದನ್ನು ತಿಳಿಯುತ್ತಾರೋ, ಅವರೇ ವೇದವಿತ್ತರು."
},
{
"id": "15-2",
"chapter": 15,
"verse": 2,
"kannada": "ಅಧಶ್ಚೋರ್ಧ್ವಂ ಪ್ರಸೃತಾಸ್ತಸ್ಯ ಶಾಖಾ ಗುಣಪ್ರವೃದ್ಧಾ ವಿಷಯಪ್ರವಾಲಾಃ | ಅಧಶ್ಚ ಮೂಲಾನ್ಯನುಸಂತತಾನಿ ಕರ್ಮಾನುಬಂಧೀನಿ ಮನುಷ್ಯಲೋಕೇ ||",
"transliteration": "adhaśh chordhvaṁ prasṛitās tasya śhākhā guṇa-pravṛiddhā viṣhaya-pravālāḥ adhaśh cha mūlāny anusantatāni karmānubandhīni manuṣhya-loke",
"meaning": "ಅದರ ಶಾಖೆಗಳು ಗುಣಪ್ರವೃದ್ಧವಾಗಿ ಅಧಃ-ಊರ್ಧ್ವವಾಗಿ ಹರಡಿವೆ. ವಿಷಯಗಳೇ ಅದರ ಪ್ರವಾಲಗಳು (ಕುಡಿಗಳು). ಅಧಃಭಾಗದಲ್ಲಿ ಮೂಲಗಳು ಮನುಷ್ಯಲೋಕದಲ್ಲಿ ಕರ್ಮಾನುಬಂಧಗಳಾಗಿ ಅನುಸಂತತವಾಗಿವೆ."
},
{
"id": "15-3",
"chapter": 15,
"verse": 3,
"kannada": "ನ ರೂಪಮಸ್ಯೇಹ ತಥೋಪಲಭ್ಯತೇ ನಾನ್ತೋ ನ ಚಾದಿರ್ನ ಚ ಸಂಪ್ರತಿಷ್ಠಾ | ಅಶ್ವತ್ಥಮೇನಂ ಸುವಿರೂಢಮೂಲಮಸಂಗಶಸ್ತ್ರೇಣ ದೃಢೇನ ಛಿತ್ತ್ವಾ ||",
"transliteration": "na rūpam asyeha tathopalabhyate nānto na chādir na cha sampartiṣhṭhā aśhvattham enaṁ su-virūḍha-mūlam asaṅga-śhastreṇa dṛiḍhena chhittvā",
"meaning": "ಇಲ್ಲಿ ಅದರ ರೂಪವು ಹಾಗೆ ಉಪಲಭ್ಯವಾಗುವುದಿಲ್ಲ. ಅಂತ್ಯವಿಲ್ಲ, ಆದಿಯಿಲ್ಲ, ಸಂಪ್ರತಿಷ್ಠೆಯಿಲ್ಲ. ಈ ಸುವಿರೂಢಮೂಲವಾದ ಅಶ್ವತ್ಥವನ್ನು ಅಸಂಗಶಸ್ತ್ರದಿಂದ ದೃಢವಾಗಿ ಛೇದಿಸಿ."
},
{
"id": "15-4",
"chapter": 15,
"verse": 4,
"kannada": "ತತಃ ಪದಂ ತತ್ಪರಿಮಾರ್ಗಿತವ್ಯಂ ಯಸ್ಮಿನ್ಗತಾ ನ ನಿವರ್ತನ್ತಿ ಭೂಯಃ | ತಮೇವ ಚಾದ್ಯಂ ಪುರುಷಂ ಪ್ರಪದ್ಯೇ ಯತಃ ಪ್ರವೃತ್ತಿಃ ಪ್ರಸೃತಾ ಪುರಾಣೀ ||",
"transliteration": "tataḥ padaṁ tat parimārgitavyaṁ yasmin gatā na nivartanti bhūyaḥ tam eva chādyaṁ puruṣhaṁ prapadye yataḥ pravṛittiḥ prasṛitā purāṇī",
"meaning": "ಆಮೇಲೆ ಆ ಪದವನ್ನು ಪರಿಮಾರ್ಗಿತವ್ಯ (ಅನ್ವೇಷಿಸಬೇಕಾದದ್ದು), ಅದರಲ್ಲಿ ಹೋಗಿದ್ದವರು ಮರಳುವುದಿಲ್ಲ. ಪುರಾಣೀ ಪ್ರವೃತ್ತಿಯು ಪ್ರಸೃತವಾಗಿರುವ ಆ ಆದ್ಯ ಪುರುಷನನ್ನೇ ನಾನು ಪ್ರಪದ್ಯೇ (ಶರಣುಹೋಗುತ್ತೇನೆ)."
},
{
"id": "15-5",
"chapter": 15,
"verse": 5,
"kannada": "ನಿರ್ಮಾನಮೋಹಾ ಜಿತಸಂಗದೋಷಾ ಅಧ್ಯಾತ್ಮನಿತ್ಯಾ ವಿನಿವೃತ್ತಕಾಮಾಃ | ದ್ವಂದ್ವೈರ್ವಿಮುಕ್ತಾಃ ಸುಖದುಃಖಸಂಜ್ಞೈರ್ಗಚ್ಛನ್ತ್ಯಮೂಢಾಃ ಪದಮವ್ಯಯಂ ತತ್ ||",
"transliteration": "nir-māna-mohā jita-saṅga-doṣhā adhyātma-nityā vinivṛitta-kāmāḥ dvandvair vimuktāḥ sukha-duḥkha-saṁjñair gachchhanty amūḍhāḥ padam avyayaṁ tat",
"meaning": "ನಿರ್ಮಾನಮೋಹರು, ಜಿತಸಂಗದೋಷರು, ಅಧ್ಯಾತ್ಮನಿತ್ಯರು, ವಿನಿವೃತ್ತಕಾಮರು, ದ್ವಂದ್ವಗಳಿಂದ ವಿಮುಕ್ತರು, ಸುಖದುಃಖಸಂಜ್ಞೆಗಳಿಂದ ಮುಕ್ತರು, ಅಮೂಢರು ಆ ಅವ್ಯಯ ಪದವನ್ನು ಪಡೆಯುತ್ತಾರೆ."
},
{
"id": "15-6",
"chapter": 15,
"verse": 6,
"kannada": "ನ ತದ್ಭಾಸಯತೇ ಸೂರ್ಯೋ ನ ಶಶಾಂಕೋ ನ ಪಾವಕಃ | ಯದ್ಗತ್ವಾ ನ ನಿವರ್ತನ್ತೇ ತದ್ಧಾಮ ಪರಮಂ ಮಮ ||",
"transliteration": "na tad bhāsayate sūryo na śhaśhāṅko na pāvakaḥ yad gatvā na nivartante tad dhāma paramaṁ mama",
"meaning": "ಆ ಧಾಮವನ್ನು ಸೂರ್ಯನೂ ಪ್ರಕಾಶಿಸುವುದಿಲ್ಲ, ಚಂದ್ರನೂ ಇಲ್ಲ, ಅಗ್ನಿಯೂ ಇಲ್ಲ. ಅದನ್ನು ಪಡೆದವರು ಮರಳುವುದಿಲ್ಲ. ಅದು ನನ್ನ ಪರಮ ಧಾಮ."
},
{
"id": "15-7",
"chapter": 15,
"verse": 7,
"kannada": "ಮಮೈವಾಂಶೋ ಜೀವಲೋಕೇ ಜೀವಭೂತಃ ಸನಾತನಃ | ಮನಃಷಷ್ಠಾನೀಂದ್ರಿಯಾಣಿ ಪ್ರಕೃತಿಸ್ಥಾನಿ ಕರ್ಷತಿ ||",
"transliteration": "mamaivānśho jīva-loke jīva-bhūtaḥ sanātanaḥ manaḥ-ṣhaṣhṭhānīndriyāṇi prakṛiti-sthāni karṣhati",
"meaning": "ಜೀವಲೋಕದಲ್ಲಿ ನನ್ನ ಅಂಶವೇ ಸನಾತನ ಜೀವಭೂತವಾಗಿದೆ. ಮನಸ್ಸು ಮತ್ತು ಐದು ಇಂದ್ರಿಯಗಳನ್ನು ಪ್ರಕೃತಿಸ್ಥವಾಗಿರುವಾಗ ಕರ್ಷತಿ (ಎಳೆಯುತ್ತದೆ)."
},
{
"id": "15-8",
"chapter": 15,
"verse": 8,
"kannada": "ಶರೀರಂ ಯದವಾಪ್ನೋತಿ ಯಚ್ಚಾಪ್ಯುತ್ಕ್ರಾಮತೀಶ್ವರಃ | ಗೃಹೀತ್ವೈತಾನಿ ಸಂಯಾತಿ ವಾಯುರ್ಗಂಧಾನಿವಾಶಯಾತ್ ||",
"transliteration": "śharīraṁ yad avāpnoti yach chāpy utkrāmatīśhvaraḥ gṛihītvaitāni saṁyāti vāyur gandhān ivāśhayāt",
"meaning": "ಯಾವ ಶರೀರವನ್ನು ಪಡೆಯುತ್ತಾನೆಯೋ, ಯಾವಾಗ ಈಶ್ವರ (ಜೀವ) ಉತ್ಕ್ರಮಿಸುತ್ತಾನೆಯೋ, ಆಗ ಈ ಇಂದ್ರಿಯಗಳನ್ನು ತೆಗೆದುಕೊಂಡು ಹೋಗುತ್ತಾನೆ, ಗಂಧಗಳನ್ನು ವಾಯು ಆಶಯದಿಂದ ತೆಗೆದುಕೊಂಡು ಹೋಗುವಂತೆ."
},
{
"id": "15-9",
"chapter": 15,
"verse": 9,
"kannada": "ಶ್ರೋತ್ರಂ ಚಕ್ಷುಃ ಸ್ಪರ್ಶನಂ ಚ ರಸನಂ ಘ್ರಾಣಮೇವ ಚ | ಅಧಿಷ್ಠಾಯ ಮನಶ್ಚಾಯಂ ವಿಷಯಾನುಪಸೇವತೇ ||",
"transliteration": "śhotraṁ chakṣhuḥ sparśhanaṁ cha rasanaṁ ghrāṇam eva cha adhiṣhṭhāya manaśh chāyaṁ viṣhayān upasevate",
"meaning": "ಶ್ರೋತ್ರ, ಚಕ್ಷುಃ, ಸ್ಪರ್ಶನ, ರಸನ, ಘ್ರಾಣ - ಇವುಗಳನ್ನು ಅಧಿಷ್ಠಾಯ, ಮನಸ್ಸಿನೊಂದಿಗೆ ಈ ಜೀವ ವಿಷಯಗಳನ್ನು ಉಪಸೇವತೇ (ಅನುಭವಿಸುತ್ತಾನೆ)."
},
{
"id": "15-10",
"chapter": 15,
"verse": 10,
"kannada": "ಉತ್ಕ್ರಾಮನ್ತಂ ಸ್ಥಿತಂ ವಾಪಿ ಭುಂಜಾನಂ ವಾ ಗುಣಾನ್ವಿತಮ್ | ವಿಮೂಢಾ ನಾನುಪಶ್ಯನ್ತಿ ಪಶ್ಯನ್ತಿ ಜ್ಞಾನಚಕ್ಷುಷಃ ||",
"transliteration": "utkrāmantaṁ sthitaṁ vāpi bhuñjānaṁ vā guṇānvitam vimūḍhā nānupaśhyanti paśhyanti jñāna-chakṣhuṣhaḥ",
"meaning": "ಉತ್ಕ್ರಾಮಿಸುತ್ತಿರುವ, ಸ್ಥಿತನಾಗಿರುವ ಅಥವಾ ಗುಣಗಳೊಂದಿಗೆ ಭುಂಜಾನನಾಗಿರುವ ಜೀವನನ್ನು ವಿಮೂಢರು ನೋಡುವುದಿಲ್ಲ. ಜ್ಞಾನಚಕ್ಷುಗಳುಳ್ಳವರು ನೋಡುತ್ತಾರೆ."
},
{
"id": "15-11",
"chapter": 15,
"verse": 11,
"kannada": "ಯತನ್ತೋ ಯೋಗಿನಶ್ಚೈನಂ ಪಶ್ಯನ್ತ್ಯಾತ್ಮನ್ಯವಸ್ಥಿತಮ್ | ಯತನ್ತೋಽಪ್ಯಕೃತಾತ್ಮಾನೋ ನೈನಂ ಪಶ್ಯನ್ತ್ಯಚೇತಸಃ ||",
"transliteration": "yatanto yoginaśh chainaṁ paśhyanty ātmany avasthitam yatanto 'py akṛitātmāno nainaṁ paśhyanty achetasaḥ",
"meaning": "ಯತ್ನಿಸುವ ಯೋಗಿಗಳು ಆತ್ಮನಲ್ಲಿ ಅವಸ್ಥಿತನಾದ ಇವನನ್ನು ನೋಡುತ್ತಾರೆ. ಆದರೆ ಅಕೃತಾತ್ಮರಾದ, ಅಚೇತಸರಾದವರು ಯತ್ನಿಸಿದರೂ ಇವನನ್ನು ನೋಡುವುದಿಲ್ಲ."
},
{
"id": "15-12",
"chapter": 15,
"verse": 12,
"kannada": "ಯದಾದಿತ್ಯಗತಂ ತೇಜೋ ಜಗದ್ಭಾಸಯತೇಽಖಿಲಮ್ | ಯಚ್ಚಂದ್ರಮಸಿ ಯಚ್ಚಾಗ್ನೌ ತತ್ತೇಜೋ ವಿದ್ಧಿ ಮಾಮಕಮ್ ||",
"transliteration": "yad āditya-gataṁ tejo jagad bhāsayate 'khilam yach chandramasi yach chāgnau tat tejo viddhi māmakam",
"meaning": "ಆದಿತ್ಯದಲ್ಲಿರುವ ತೇಜಸ್ಸು ಸಮಸ್ತ ಜಗತ್ತನ್ನು ಪ್ರಕಾಶಿಸುತ್ತದೆ. ಚಂದ್ರನಲ್ಲಿರುವದ್ದು, ಅಗ್ನಿಯಲ್ಲಿರುವದ್ದು - ಆ ತೇಜಸ್ಸು ನನ್ನದೆಂದು ತಿಳಿ."
},
{
"id": "15-13",
"chapter": 15,
"verse": 13,
"kannada": "ಗಾಮಾವಿಶ್ಯ ಚ ಭೂತಾನಿ ಧಾರಯಾಮ್ಯಹಮೋಜಸಾ | ಪುಷ್ಣಾಮಿ ಚೌಷಧೀಃ ಸರ್ವಾಃ ಸೋಮೋ ಭೂತ್ವಾ ರಸಾತ್ಮಕಃ ||",
"transliteration": "gām āviśhya cha bhūtāni dhārayāmy aham ojasā puṣhṇāmi chauṣhadhīḥ sarvāḥ somo bhūtvā rasātmakaḥ",
"meaning": "ನಾನು ಭೂಮಿಯನ್ನು ಪ್ರವೇಶಿಸಿ ಓಜಸ್ಸಿನಿಂದ ಭೂತಗಳನ್ನು ಧಾರಣೆ ಮಾಡುತ್ತೇನೆ. ಸೋಮನಾಗಿ ರಸಾತ್ಮಕನಾಗಿ ಸರ್ವ ಓಷಧಿಗಳನ್ನು ಪೋಷಿಸುತ್ತೇನೆ."
},
{
"id": "15-14",
"chapter": 15,
"verse": 14,
"kannada": "ಅಹಂ ವೈಶ್ವಾನರೋ ಭೂತ್ವಾ ಪ್ರಾಣಿನಾಂ ದೇಹಮಾಶ್ರಿತಃ | ಪ್ರಾಣಾಪಾನಸಮಾಯುಕ್ತಃ ಪಚಾಮ್ಯನ್ನಂ ಚತುರ್ವಿಧಮ್ ||",
"transliteration": "ahaṁ vaiśhvānaro bhūtvā prāṇināṁ deham āśhritaḥ prāṇāpāna-samāyuktaḥ pachāmy annaṁ chatur-vidham",
"meaning": "ನಾನು ವೈಶ್ವಾನರನಾಗಿ ಪ್ರಾಣಿಗಳ ದೇಹದಲ್ಲಿ ಆಶ್ರಿತನಾಗಿ, ಪ್ರಾಣಾಪಾನಗಳಿಂದ ಯುಕ್ತನಾಗಿ ನಾಲ್ಕು ವಿಧದ ಅನ್ನವನ್ನು ಪಚನ ಮಾಡುತ್ತೇನೆ."
},
{
"id": "15-15",
"chapter": 15,
"verse": 15,
"kannada": "ಸರ್ವಸ್ಯ ಚಾಹಂ ಹೃದಿ ಸಂನಿವಿಷ್ಟೋ ಮತ್ತಃ ಸ್ಮೃತಿರ್ಜ್ಞಾನಮಪೋಹನಂ ಚ | ವೇದೈಶ್ಚ ಸರ್ವೈರಹಮೇವ ವೇದ್ಯೋ ವೇದಾಂತಕೃದ್ವೇದವಿದೇವ ಚಾಹಮ್ ||",
"transliteration": "sarvasya chāhaṁ hṛidi sanniviṣhṭo mattaḥ smṛitir jñānam apohanaṁ cha vedaiśh cha sarvair aham eva vedyo vedānta-kṛid veda-vid eva chāham",
"meaning": "ಸರ್ವರ ಹೃದಯದಲ್ಲಿಯೂ ಸಂನಿವಿಷ್ಟನಾಗಿದ್ದೇನೆ. ನನ್ನಿಂದ ಸ್ಮೃತಿ, ಜ್ಞಾನ, ಅಪೋಹನ (ಅಪನೋದನ). ಸರ್ವ ವೇದಗಳಿಂದಲೂ ವೇದ್ಯನು ನಾನೇ. ವೇದಾಂತಕೃತ್, ವೇದವಿತ್ತು ನಾನೇ."
},
{
"id": "15-16",
"chapter": 15,
"verse": 16,
"kannada": "ದ್ವಾವಿಮೌ ಪುರುಷೌ ಲೋಕೇ ಕ್ಷರಶ್ಚಾಕ್ಷರ ಏವ ಚ | ಕ್ಷರಃ ಸರ್ವಾಣಿ ಭೂತಾನಿ ಕೂಟಸ್ಥೋಽಕ್ಷರ ಉಚ್ಯತೇ ||",
"transliteration": "dvāv imau puruṣhau loke kṣharaśh chākṣhara eva cha kṣharaḥ sarvāṇi bhūtāni kūṭa-stho 'kṣhara uchyate",
"meaning": "ಲೋಕದಲ್ಲಿ ಇಬ್ಬರು ಪುರುಷರು: ಕ್ಷರ ಮತ್ತು ಅಕ್ಷರ. ಸರ್ವ ಭೂತಗಳು ಕ್ಷರ. ಕೂಟಸ್ಥನಾದವನು ಅಕ್ಷರ ಎಂದು ಹೇಳಲ್ಪಡುತ್ತಾನೆ."
},
{
"id": "15-17",
"chapter": 15,
"verse": 17,
"kannada": "ಉತ್ತಮಃ ಪುರುಷಸ್ತ್ವನ್ಯಃ ಪರಮಾತ್ಮೇತ್ಯುದಾಹೃತಃ | ಯೋ ಲೋಕತ್ರಯಮಾವಿಶ್ಯ ಬಿಭರ್ತ್ಯವ್ಯಯ ಈಶ್ವರಃ ||",
"transliteration": "uttamaḥ puruṣhas tv anyaḥ paramātmety udāhṛitaḥ yo loka-trayam āviśhya bibharty avyaya īśhvaraḥ",
"meaning": "ಆದರೆ ಉತ್ತಮ ಪುರುಷನು ಬೇರೆಯವನು. ಅವನು ಪರಮಾತ್ಮ ಎಂದು ಹೇಳಲ್ಪಡುತ್ತಾನೆ. ಅವ್ಯಯ ಈಶ್ವರನಾಗಿ ಲೋಕತ್ರಯವನ್ನು ಆವಿಶ್ಯ (ಪ್ರವೇಶಿಸಿ) ಬಿಭರ್ತಿ (ಧರಿಸುತ್ತಾನೆ)."
},
{
"id": "15-18",
"chapter": 15,
"verse": 18,
"kannada": "ಯಸ್ಮಾತ್ಕ್ಷರಮತೀತೋಽಹಮಕ್ಷರಾದಪಿ ಚೋತ್ತಮಃ | ಅತೋಽಸ್ಮಿ ಲೋಕೇ ವೇದೇ ಚ ಪ್ರಥಿತಃ ಪುರುಷೋತ್ತಮಃ ||",
"transliteration": "yasmāt kṣharam atīto 'ham akṣharād api chottamaḥ ato 'smi loke vede cha prathitaḥ puruṣhottamaḥ",
"meaning": "ನಾನು ಕ್ಷರವನ್ನು ಅತೀತನಾಗಿದ್ದೇನೆ, ಅಕ್ಷರಕ್ಕಿಂತಲೂ ಉತ್ತಮನಾಗಿದ್ದೇನೆ. ಆದ್ದರಿಂದ ಲೋಕದಲ್ಲಿಯೂ, ವೇದದಲ್ಲಿಯೂ ಪುರುಷೋತ್ತಮನೆಂದು ಪ್ರಸಿದ್ಧನಾಗಿದ್ದೇನೆ."
},
{
"id": "15-19",
"chapter": 15,
"verse": 19,
"kannada": "ಯೋ ಮಾಮೇವಮಸಮ್ಮೂಢೋ ಜಾನಾತಿ ಪುರುಷೋತ್ತಮಮ್ | ಸ ಸರ್ವವಿದ್ಭಜತಿ ಮಾಂ ಸರ್ವಭಾವೇನ ಭಾರತ ||",
"transliteration": "yo mām evam asammūḍho jānāti puruṣhottamam sa sarva-vid bhajati māṁ sarva-bhāvena bhārata",
"meaning": "ಯಾರು ನನ್ನನ್ನು ಈ ರೀತಿ ಅಸಮ್ಮೂಢನಾಗಿ ಪುರುಷೋತ್ತಮನೆಂದು ತಿಳಿಯುತ್ತಾರೋ, ಅವನು ಸರ್ವವಿದ್ (ಸರ್ವಜ್ಞ) ಆಗಿ ಸರ್ವಭಾವದಿಂದ ನನ್ನನ್ನು ಭಜಿಸುತ್ತಾನೆ, ಹೇ ಭಾರತ."
},
{
"id": "15-20",
"chapter": 15,
"verse": 20,
"kannada": "ಇತಿ ಗುಹ್ಯತಮಂ ಶಾಸ್ತ್ರಮಿದಮುಕ್ತಂ ಮಯಾನಘ | ಏತದ್ಬುದ್ಧ್ವಾ ಬುದ್ಧಿಮಾನ್ಸ್ಯಾತ್ಕೃತಕೃತ್ಯಶ್ಚ ಭಾರತ ||",
"transliteration": "iti guhyatamaṁ śhāstram idam uktaṁ mayānagha etad buddhvā buddhimān syāt kṛita-kṛityaśh cha bhārata",
"meaning": "ಹೇ ಅನಘ, ಹೇ ಭಾರತ, ಈ ರೀತಿ ಗುಹ್ಯತಮವಾದ ಈ ಶಾಸ್ತ್ರವನ್ನು ನಾನು ಹೇಳಿದ್ದೇನೆ. ಇದನ್ನು ತಿಳಿದು ಬುದ್ಧಿಮಾನ್ ಆಗು, ಕೃತಕೃತ್ಯನಾಗು."
},

    ]
  },
  {
    id: 16,
    title: "Daivasura Sampad Vibhaga Yoga",
    kannadaTitle: "ದೈವಾಸುರ ಸಂಪದ್ ವಿಭಾಗ ಯೋಗ",
    description: "ದೈವಿಕ ಮತ್ತು ಆಸುರ ಸ್ವಭಾವ - Divine and demoniac natures",
    totalVerses: 24,
    verses: [
{
"id": "16-1",
"chapter": 16,
"verse": 1,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಅಭಯಂ ಸತ್ತ್ವಸಂಶುದ್ಧಿರ್ಜ್ಞಾನಯೋಗವ್ಯವಸ್ಥಿತಿಃ | ದಾನಂ ದಮಶ್ಚ ಯಜ್ಞಶ್ಚ ಸ್ವಾಧ್ಯಾಯಸ್ತಪ ಆರ್ಜವಮ್ ||",
"transliteration": "śhrī bhagavān uvācha abhayaṁ sattva-sanśhuddhir jñāna-yoga-vyavasthitiḥ dānaṁ damaśh cha yajñaśh cha svādhyāyas tapa ārjavam",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಅಭಯ (ಭಯವಿಲ್ಲದಿರುವಿಕೆ), ಸತ್ತ್ವಸಂಶುದ್ಧಿ (ಮನಸ್ಸಿನ ಶುದ್ಧಿ), ಜ್ಞಾನಯೋಗದಲ್ಲಿ ವ್ಯವಸ್ಥಿತಿ, ದಾನ, ದಮ (ಇಂದ್ರಿಯನಿಗ್ರಹ), ಯಜ್ಞ, ಸ್ವಾಧ್ಯಾಯ, ತಪಸ್ಸು, ಆರ್ಜವ (ನೇರತನ)."
},
{
"id": "16-2",
"chapter": 16,
"verse": 2,
"kannada": "ಅಹಿಂಸಾ ಸತ್ಯಮಕ್ರೋಧಸ್ತ್ಯಾಗಃ ಶಾನ್ತಿರಪೈಶುನಮ್ | ದಯಾ ಭೂತೇಷ್ವಲೋಲುಪ್ತ್ವಂ ಮಾರ್ದವಂ ಹ್ರೀರಚಾಪಲಮ್ ||",
"transliteration": "ahiṁsā satyam akrodhas tyāgaḥ śhāntir apaiśhunam dayā bhūteṣhv aloluptvaṁ mārdavaṁ hrīr achāpalam",
"meaning": "ಅಹಿಂಸೆ, ಸತ್ಯ, ಅಕ್ರೋಧ (ಕೋಪವಿಲ್ಲದಿರುವಿಕೆ), ತ್ಯಾಗ, ಶಾಂತಿ, ಅಪೈಶುನ (ದೂಷಣೆ ಮಾಡದಿರುವಿಕೆ), ಭೂತಗಳಲ್ಲಿ ದಯೆ, ಅಲೋಲುಪ್ತ್ವ (ಲೋಭವಿಲ್ಲದಿರುವಿಕೆ), ಮಾರ್ದವ (ಮೃದುತ್ವ), ಹ್ರೀ (ಲಜ್ಜೆ), ಅಚಾಪಲ (ಚಪಲತೆ ಇಲ್ಲದಿರುವಿಕೆ)."
},
{
"id": "16-3",
"chapter": 16,
"verse": 3,
"kannada": "ತೇಜಃ ಕ್ಷಮಾ ಧೃತಿಃ ಶೌಚಮದ್ರೋಹೋ ನಾತಿಮಾನಿತಾ | ಭವನ್ತಿ ಸಂಪದಂ ದೈವೀಮಭಿಜಾತಸ್ಯ ಭಾರತ ||",
"transliteration": "tejaḥ kṣhamā dhṛitiḥ śhaucham adroho nāti-mānitā bhavanti sampadaṁ daivīm abhijātasya bhārata",
"meaning": "ತೇಜಸ್ಸು, ಕ್ಷಮೆ, ಧೃತಿ (ಸಹನೆ), ಶೌಚ (ಶುದ್ಧಿ), ಅದ್ರೋಹ (ದ್ವೇಷವಿಲ್ಲದಿರುವಿಕೆ), ಅತಿಮಾನಿತಾ (ಅಹಂಕಾರವಿಲ್ಲದಿರುವಿಕೆ) - ಈ ಸಂಪತ್ತು ದೈವೀ ಸಂಪತ್ತು. ಹೇ ಭಾರತ, ದೈವೀ ಸ್ವಭಾವದವರಿಗೆ ಇವು ಉಂಟಾಗುತ್ತವೆ."
},
{
"id": "16-4",
"chapter": 16,
"verse": 4,
"kannada": "ದಂಭೋ ದರ್ಪೋಽಭಿಮಾನಶ್ಚ ಕ್ರೋಧಃ ಪಾರುಷ್ಯಮೇವ ಚ | ಅಜ್ಞಾನಂ ಚಾಭಿಜಾತಸ್ಯ ಪಾರ್ಥ ಸಂಪದಮಾಸುರೀಮ್ ||",
"transliteration": "dambho darpo 'bhimānaśh cha krodhaḥ pāruṣhyam eva cha ajñānaṁ chābhijātasya pārtha sampadam āsurīm",
"meaning": "ದಂಭ (ಆಡಂಬರ), ದರ್ಪ (ಅಹಂಕಾರ), ಅಭಿಮಾನ, ಕ್ರೋಧ, ಪಾರುಷ್ಯ (ಕಠೋರತೆ), ಅಜ್ಞಾನ - ಹೇ ಪಾರ್ಥ, ಇವು ಆಸುರೀ ಸ್ವಭಾವದವರಿಗೆ ಉಂಟಾಗುವ ಆಸುರೀ ಸಂಪತ್ತು."
},
{
"id": "16-5",
"chapter": 16,
"verse": 5,
"kannada": "ದೈವೀ ಸಂಪದ್ವಿಮೋಕ್ಷಾಯ ನಿಬನ್ಧಾಯಾಸುರೀ ಮತಾ | ಮಾ ಶುಚಃ ಸಂಪದಂ ದೈವೀಮಭಿಜಾತೋಽಸಿ ಪಾಂಡವ ||",
"transliteration": "daivī sampad vimokṣhāya nibandhāyāsurī matā mā śhuchaḥ sampadaṁ daivīm abhijāto 'si pāṇḍava",
"meaning": "ದೈವೀ ಸಂಪತ್ತು ಮೋಕ್ಷಕ್ಕೆ, ಆಸುರೀ ಸಂಪತ್ತು ಬಂಧನಕ್ಕೆ ಕಾರಣವೆಂದು ತಿಳಿಯಲಾಗಿದೆ. ಹೇ ಪಾಂಡವ, ನೀನು ದೈವೀ ಸಂಪತ್ತಿನಿಂದ ಜನಿಸಿದವನಾದ್ದರಿಂದ ಶೋಕಿಸಬೇಡ."
},
{
"id": "16-6",
"chapter": 16,
"verse": 6,
"kannada": "ದ್ವೌ ಭೂತಸರ್ಗೌ ಲೋಕೇಽಸ್ಮಿನ್ದೈವ ಆಸುರ ಏವ ಚ | ದೈವೋ ವಿಸ್ತರಶಃ ಪ್ರೋಕ್ತ ಆಸುರಂ ಪಾರ್ಥ ಮೇ ಶೃಣು ||",
"transliteration": "dvau bhūta-sargau loke 'smin daiva āsura eva cha daivo vistaraśhaḥ prokta āsuraṁ pārtha me śhṛiṇu",
"meaning": "ಈ ಲೋಕದಲ್ಲಿ ಎರಡು ಬಗೆಯ ಭೂತಸರ್ಗಗಳಿವೆ: ದೈವ ಮತ್ತು ಆಸುರ. ದೈವವನ್ನು ವಿಸ್ತಾರವಾಗಿ ಹೇಳಲಾಗಿದೆ. ಹೇ ಪಾರ್ಥ, ಆಸುರವನ್ನು ನನ್ನಿಂದ ಕೇಳು."
},
{
"id": "16-7",
"chapter": 16,
"verse": 7,
"kannada": "ಪ್ರವೃತ್ತಿಂ ಚ ನಿವೃತ್ತಿಂ ಚ ಜನಾ ನ ವಿದುರಾಸುರಾಃ | ನ ಶೌಚಂ ನಾಪಿ ಚಾಚಾರೋ ನ ಸತ್ಯಂ ತೇಷು ವಿದ್ಯತೇ ||",
"transliteration": "pravṛittiṁ cha nivṛittiṁ cha janā na vidur āsurāḥ na śhauchaṁ nāpi chāchāro na satyaṁ teṣhu vidyate",
"meaning": "ಆಸುರರು ಪ್ರವೃತ್ತಿ ಮತ್ತು ನಿವೃತ್ತಿಯನ್ನು ತಿಳಿಯರು. ಅವರಲ್ಲಿ ಶೌಚ (ಶುದ್ಧಿ) ಇಲ್ಲ, ಆಚಾರ ಇಲ್ಲ, ಸತ್ಯವೂ ಇಲ್ಲ."
},
{
"id": "16-8",
"chapter": 16,
"verse": 8,
"kannada": "ಅಸತ್ಯಮಪ್ರತಿಷ್ಠಂ ತೇ ಜಗದಾಹುರನೀಶ್ವರಮ್ | ಅಪರಸ್ಪರಸಂಭೂತಂ ಕಿಮನ್ಯತ್ಕಾಮಹೈತುಕಮ್ ||",
"transliteration": "asatyam apratiṣhṭhaṁ te jagad āhur anīśhvaram apara-spara-sambhūtaṁ kim anyat kāma-haitukam",
"meaning": "ಜಗತ್ತು ಅಸತ್ಯ, ಅಪ್ರತಿಷ್ಠಿತ, ಅನೀಶ್ವರ, ಅಪರಸ್ಪರ ಸಂಭೂತ, ಕಾಮಹೈತುಕ (ಕಾಮಕ್ಕಾಗಿ ಮಾತ್ರ) ಎಂದು ಅವರು ಹೇಳುತ್ತಾರೆ."
},
{
"id": "16-9",
"chapter": 16,
"verse": 9,
"kannada": "ಏತಾಂ ದೃಷ್ಟಿಮವಷ್ಟಭ್ಯ ನಷ್ಟಾತ್ಮಾನೋಽಲ್ಪಬುದ್ಧಯಃ | ಪ್ರಭವನ್ತ್ಯುಗ್ರಕರ್ಮಾಣಃ ಕ್ಷಯಾಯ ಜಗತೋಽಹಿತಾಃ ||",
"transliteration": "etāṁ dṛiṣhṭim avaṣhṭabhya naṣhṭātmāno 'lpa-buddhayaḥ prabhavanty ugra-karmāṇaḥ kṣhayāya jagato 'hitāḥ",
"meaning": "ಈ ದೃಷ್ಟಿಯನ್ನು ಅವಲಂಬಿಸಿ, ನಷ್ಟಾತ್ಮಾನರು (ಆತ್ಮಜ್ಞಾನವಿಲ್ಲದವರು), ಅಲ್ಪಬುದ್ಧಿಗಳು ಉಗ್ರಕರ್ಮಗಳನ್ನು ಮಾಡಿ, ಜಗತ್ತಿನ ನಾಶಕ್ಕೆ ಹಿತವಲ್ಲದವರಾಗಿ ಹುಟ್ಟುತ್ತಾರೆ."
},
{
"id": "16-10",
"chapter": 16,
"verse": 10,
"kannada": "ಕಾಮಮಾಶ್ರಿತ್ಯ ದುಷ್ಪೂರಂ ದಂಭಮಾನಮದಾನ್ವಿತಾಃ | ಮೋಹಾದ್ಗೃಹೀತ್ವಾಽಸದ್ಗ್ರಾಹಾನ್ಪ್ರವರ್ತನ್ತೇಽಶುಚಿವ್ರತಾಃ ||",
"transliteration": "kāmam āśhritya duṣh-pūraṁ dambha-māna-madānvitāḥ mohād gṛihītvāsad-grāhān pravartante 'śhuchi-vratāḥ",
"meaning": "ದುಷ್ಪೂರ (ತುಂಬಲಾಗದ) ಕಾಮವನ್ನು ಆಶ್ರಯಿಸಿ, ದಂಭ-ಮಾನ-ಮದಗಳಿಂದ ಯುಕ್ತರಾಗಿ, ಮೋಹದಿಂದ ಅಸದ್ಗ್ರಾಹಗಳನ್ನು (ತಪ್ಪು ತಿಳುವಳಿಕೆಗಳನ್ನು) ಪಡೆದು, ಅಶುಚಿವ್ರತರಾಗಿ (ಅಶುದ್ಧ ನಿಯಮಗಳುಳ್ಳವರಾಗಿ) ವರ್ತಿಸುತ್ತಾರೆ."
},
{
"id": "16-11",
"chapter": 16,
"verse": 11,
"kannada": "ಚಿಂತಾಮಪರಿಮೇಯಾಂ ಚ ಪ್ರಲಯಾನ್ತಾಮುಪಾಶ್ರಿತಾಃ | ಕಾಮೋಪಭೋಗಪರಮಾ ಏತಾವದಿತಿ ನಿಶ್ಚಿತಾಃ ||",
"transliteration": "chintām aparimeyāṁ cha pralayāntām upāśhritāḥ kāmopabhoga-paramā etāvad iti niśhchitāḥ",
"meaning": "ಪ್ರಲಯದವರೆಗೂ ಇರುವ ಅಪರಿಮೇಯ ಚಿಂತೆಯನ್ನು ಆಶ್ರಯಿಸಿ, ಕಾಮೋಪಭೋಗದಲ್ಲಿ ಪರಮರಾಗಿ, 'ಇಷ್ಟೇ ಮುಗಿದಿದೆ' ಎಂದು ನಿಶ್ಚಯಿಸಿಕೊಂಡಿದ್ದಾರೆ."
},
{
"id": "16-12",
"chapter": 16,
"verse": 12,
"kannada": "ಆಶಾಪಾಶಶತೈರ್ಬದ್ಧಾಃ ಕಾಮಕ್ರೋಧಪರಾಯಣಾಃ | ಈಹನ್ತೇ ಕಾಮಭೋಗಾರ್ಥಮನ್ಯಾಯೇನಾರ್ಥಸಂಚಯಾನ್ ||",
"transliteration": "āśhā-pāśha-śhatair baddhāḥ kāma-krodha-parāyaṇāḥ īhante kāma-bhogārtham anyāyenārtha-sañchayān",
"meaning": "ಆಶಾಪಾಶಗಳ ನೂರಾರು ಬಂಧನಗಳಿಂದ ಬದ್ಧರಾಗಿ, ಕಾಮ-ಕ್ರೋಧಗಳಲ್ಲಿ ಪರಾಯಣರಾಗಿ, ಕಾಮಭೋಗಕ್ಕಾಗಿ ಅನ್ಯಾಯವಾಗಿ ಅರ್ಥಸಂಚಯಗಳನ್ನು ಸಂಪಾದಿಸಲು ಯತ್ನಿಸುತ್ತಾರೆ."
},
{
"id": "16-13",
"chapter": 16,
"verse": 13,
"kannada": "ಇದಮದ್ಯ ಮಯಾ ಲಬ್ಧಮಿಮಂ ಪ್ರಾಪ್ಸ್ಯೇ ಮನೋರಥಮ್ | ಇದಮಸ್ತೀದಮಪಿ ಮೇ ಭವಿಷ್ಯತಿ ಪುನರ್ಧನಮ್ ||",
"transliteration": "idam adya mayā labdham imaṁ prāpsye manoratham idam astīdam api me bhaviṣhyati punar dhanam",
"meaning": "'ಇದು ಇಂದು ನನ್ನಿಂದ ಪಡೆಯಲ್ಪಟ್ಟಿದೆ. ಈ ಮನೋರಥವನ್ನು ಪಡೆಯುವೆ. ಇದು ನನಗಿದೆ, ಇದೂ ನನಗೆ ಇದೆ, ಮತ್ತೆ ಧನವು ಉಂಟಾಗುವುದು.'"
},
{
"id": "16-14",
"chapter": 16,
"verse": 14,
"kannada": "ಅಸೌ ಮಯಾ ಹತಃ ಶತ್ರುರ್ಹನಿಷ್ಯೇ ಚಾಪರಾನಪಿ | ಈಶ್ವರೋಽಹಮಹಂ ಭೋಗೀ ಸಿದ್ಧೋಽಹಂ ಬಲವಾನ್ಸುಖೀ ||",
"transliteration": "asau mayā hataḥ śhatrur haniṣhye chāparān api īśhvaro 'ham ahaṁ bhogī siddho 'ham balavān sukhī",
"meaning": "'ಆ ಶತ್ರು ನನ್ನಿಂದ ಹತನಾಗಿದ್ದಾನೆ. ಇನ್ನು ಇತರರನ್ನೂ ಕೊಲ್ಲುವೆ. ನಾನೇ ಈಶ್ವರ, ನಾನೇ ಭೋಗಿ, ನಾನೇ ಸಿದ್ಧ, ಬಲವಂತ, ಸುಖಿ.'"
},
{
"id": "16-15",
"chapter": 16,
"verse": 15,
"kannada": "ಆಢ್ಯೋಽಭಿಜನವಾನಸ್ಮಿ ಕೋಽನ್ಯೋಽಸ್ತಿ ಸದೃಶೋ ಮಯಾ | ಯಕ್ಷ್ಯೇ ದಾಸ್ಯಾಮಿ ಮೋದಿಷ್ಯ ಇತ್ಯಜ್ಞಾನವಿಮೋಹಿತಾಃ ||",
"transliteration": "āḍhyo 'bhijanavān asmi ko 'nyo 'sti sadṛiśho mayā yakṣhye dāsyāmi modiṣhya ity ajñāna-vimohitāḥ",
"meaning": "'ನಾನು ಐಶ್ವರ್ಯವಂತ, ಉತ್ತಮ ಕುಲದವ. ನನ್ನಂತೆ ಬೇರೆ ಯಾರೂ ಇಲ್ಲ. ಯಜ್ಞ ಮಾಡುವೆ, ದಾನ ಕೊಡುವೆ, ಆನಂದಿಸುವೆ' - ಎಂದು ಅಜ್ಞಾನದಿಂದ ಮೋಹಿತರಾಗಿದ್ದಾರೆ."
},
{
"id": "16-16",
"chapter": 16,
"verse": 16,
"kannada": "ಅನೇಕಚಿತ್ತವಿಭ್ರಾನ್ತಾ ಮೋಹಜಾಲಸಮಾವೃತಾಃ | ಪ್ರಸಕ್ತಾಃ ಕಾಮಭೋಗೇಷು ಪತನ್ತಿ ನರಕೇಽಶುಚೌ ||",
"transliteration": "aneka-chitta-vibhrāntā moha-jāla-samāvṛitāḥ prasaktāḥ kāma-bhogeṣhu patanti narake 'śhuchau",
"meaning": "ಅನೇಕ ಚಿತ್ತಭ್ರಾಂತಿಗಳಿಂದ ಮೋಹಜಾಲದಿಂದ ಆವೃತರಾಗಿ, ಕಾಮಭೋಗಗಳಲ್ಲಿ ಪ್ರಸಕ್ತರಾಗಿ ಅಶುಚಿ ನರಕದಲ್ಲಿ ಬೀಳುತ್ತಾರೆ."
},
{
"id": "16-17",
"chapter": 16,
"verse": 17,
"kannada": "ಆತ್ಮಸಂಭಾವಿತಾಃ ಸ್ತಬ್ಧಾ ಧನಮಾನಮದಾನ್ವಿತಾಃ | ಯಜನ್ತೇ ನಾಮಯಜ್ಞೈಸ್ತೇ ದಂಭೇನಾವಿಧಿಪೂರ್ವಕಮ್ ||",
"transliteration": "ātma-sambhāvitāḥ stabdhā dhana-māna-madānvitāḥ yajante nāma-yajñais te dambhenāvidhi-pūrvakam",
"meaning": "ಸ್ವಯಂ ಸಂಭಾವಿತರು, ಸ್ತಬ್ಧರು (ದುರಭಿಮಾನಿಗಳು), ಧನ-ಮಾನ-ಮದಗಳಿಂದ ಯುಕ್ತರಾಗಿ, ಅವಿಧಿಪೂರ್ವಕವಾಗಿ ದಂಭದಿಂದ ನಾಮಯಜ್ಞ ಮಾತ್ರ ಮಾಡುತ್ತಾರೆ."
},
{
"id": "16-18",
"chapter": 16,
"verse": 18,
"kannada": "ಅಹಂಕಾರಂ ಬಲಂ ದರ್ಪಂ ಕಾಮಂ ಕ್ರೋಧಂ ಚ ಸಂಶ್ರಿತಾಃ | ಮಾಮಾತ್ಮಪರದೇಹೇಷು ಪ್ರದ್ವಿಷನ್ತೋಽಭ್ಯಸೂಯಕಾಃ ||",
"transliteration": "ahankāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ cha sanśhritāḥ mām ātma-para-deheṣhu pradviṣhanto 'bhyasūyakāḥ",
"meaning": "ಅಹಂಕಾರ, ಬಲ, ದರ್ಪ, ಕಾಮ, ಕ್ರೋಧಗಳನ್ನು ಆಶ್ರಯಿಸಿ, ಆತ್ಮ ಮತ್ತು ಪರದೇಹಗಳಲ್ಲಿ ನನ್ನನ್ನು ದ್ವೇಷಿಸುವ ಅಭ್ಯಸೂಯಕರು (ಈರ್ಷ್ಯಾಳುಗಳು)."
},
{
"id": "16-19",
"chapter": 16,
"verse": 19,
"kannada": "ತಾನಹಂ ದ್ವಿಷತಃ ಕ್ರೂರಾನ್ಸಂಸಾರೇಷು ನರಾಧಮಾನ್ | ಕ್ಷಿಪಾಮ್ಯಜಸ್ರಮಶುಭಾನಾಸುರೀಷ್ವೇವ ಯೋನಿಷು ||",
"transliteration": "tān ahaṁ dviṣhataḥ krūrān sansāreṣhu narādhamān kṣhipāmy ajasram aśhubhān āsurīṣhv eva yoniṣhu",
"meaning": "ಅವರನ್ನು - ದ್ವೇಷಿಗಳಾದ, ಕ್ರೂರರಾದ, ಸಂಸಾರದಲ್ಲಿ ನರಾಧಮರಾದವರನ್ನು - ನಾನು ಅಶುಭ ಆಸುರೀ ಯೋನಿಗಳಲ್ಲಿ ನಿರಂತರವಾಗಿ ಹೊಡೆಯುತ್ತೇನೆ."
},
{
"id": "16-20",
"chapter": 16,
"verse": 20,
"kannada": "ಆಸುರೀಂ ಯೋನಿಮಾಪನ್ನಾ ಮೂಢಾ ಜನ್ಮನಿ ಜನ್ಮನಿ | ಮಾಮಪ್ರಾಪ್ಯೈವ ಕೌಂತೇಯ ತತೋ ಯಾನ್ತ್ಯಧಮಾಂ ಗತಿಮ್ ||",
"transliteration": "āsurīṁ yonim āpannā mūḍhā janmani janmani mām aprāpyaiva kaunteya tato yānty adhamāṁ gatim",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಆಸುರೀ ಯೋನಿಯನ್ನು ಪಡೆದ ಮೂಢರು ಜನ್ಮ ಜನ್ಮಾಂತರದಲ್ಲಿ ನನ್ನನ್ನು ಪಡೆಯದೆ ಅಧಮಗತಿಗೆ ಹೋಗುತ್ತಾರೆ."
},
{
"id": "16-21",
"chapter": 16,
"verse": 21,
"kannada": "ತ್ರಿವಿಧಂ ನರಕಸ್ಯೇದಂ ದ್ವಾರಂ ನಾಶನಮಾತ್ಮನಃ | ಕಾಮಃ ಕ್ರೋಧಸ್ತಥಾ ಲೋಭಸ್ತಸ್ಮಾದೇತತ್ತ್ರಯಂ ತ್ಯಜೇತ್ ||",
"transliteration": "tri-vidhaṁ narakasyedaṁ dvāraṁ nāśhanam ātmanaḥ kāmaḥ krodhas tathā lobhas tasmād etat trayaṁ tyajet",
"meaning": "ನರಕದ ಈ ಮೂರು ಬಗೆಯ ದ್ವಾರಗಳು ಆತ್ಮನ ನಾಶಕ್ಕೆ ಕಾರಣ. ಕಾಮ, ಕ್ರೋಧ, ಲೋಭ - ಇವುಗಳನ್ನು ತ್ಯಜಿಸಬೇಕು."
},
{
"id": "16-22",
"chapter": 16,
"verse": 22,
"kannada": "ಏತೈರ್ವಿಮುಕ್ತಃ ಕೌಂತೇಯ ತಮೋದ್ವಾರೈಸ್ತ್ರಿಭಿರ್ನರಃ | ಆಚರತ್ಯಾತ್ಮನಃ ಶ್ರೇಯಸ್ತತೋ ಯಾತಿ ಪರಾಂ ಗತಿಮ್ ||",
"transliteration": "etair vimuktaḥ kaunteya tamo-dvārais tribhir naraḥ ācharaty ātmanaḥ śhreyas tato yāti parāṁ gatim",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಈ ತಮೋದ್ವಾರಗಳ ಮೂರು ಬಂಧನಗಳಿಂದ ಮುಕ್ತನಾದ ನರನು ಆತ್ಮನ ಶ್ರೇಯಸ್ಸನ್ನು ಆಚರಿಸಿ, ಪರಗತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "16-23",
"chapter": 16,
"verse": 23,
"kannada": "ಯಃ ಶಾಸ್ತ್ರವಿಧಿಮುತ್ಸೃಜ್ಯ ವರ್ತತೇ ಕಾಮಕಾರತಃ | ನ ಸ ಸಿದ್ಧಿಮವಾಪ್ನೋತಿ ನ ಸುಖಂ ನ ಪರಾಂ ಗತಿಮ್ ||",
"transliteration": "yaḥ śhāstra-vidhim utsṛijya vartate kāma-kārataḥ na sa siddhim avāpnoti na sukhaṁ na parāṁ gatim",
"meaning": "ಯಾರು ಶಾಸ್ತ್ರವಿಧಿಯನ್ನು ತ್ಯಜಿಸಿ ಕಾಮದಿಂದ ವರ್ತಿಸುತ್ತಾರೆಯೋ, ಅವರು ಸಿದ್ಧಿಯನ್ನೂ, ಸುಖವನ್ನೂ, ಪರಗತಿಯನ್ನೂ ಪಡೆಯುವುದಿಲ್ಲ."
},
{
"id": "16-24",
"chapter": 16,
"verse": 24,
"kannada": "ತಸ್ಮಾಚ್ಛಾಸ್ತ್ರಂ ಪ್ರಮಾಣಂ ತೇ ಕಾರ್ಯಾಕಾರ್ಯವ್ಯವಸ್ಥಿತೌ | ಜ್ಞಾತ್ವಾ ಶಾಸ್ತ್ರವಿಧಾನೋಕ್ತಂ ಕರ್ಮ ಕರ್ತುಮಿಹಾರ್ಹಸಿ ||",
"transliteration": "tasmāch chhāstraṁ pramāṇaṁ te kāryākārya-vyavasthitau jñātvā śhāstra-vidhānoktaṁ karma kartum ihārhasi",
"meaning": "ಆದ್ದರಿಂದ ಕಾರ್ಯ-ಅಕಾರ್ಯಗಳ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಶಾಸ್ತ್ರವೇ ನಿನಗೆ ಪ್ರಮಾಣ. ಶಾಸ್ತ್ರವಿಧಿಯಲ್ಲಿ ಹೇಳಿದ ಕರ್ಮವನ್ನು ಇಲ್ಲಿ ಮಾಡಲು ನೀನು ಅರ್ಹನಾಗಿದ್ದೀ."
},

    ]
  },
  {
    id: 17,
    title: "Shraddhatraya Vibhaga Yoga",
    kannadaTitle: "ಶ್ರದ್ಧಾತ್ರಯ ವಿಭಾಗ ಯೋಗ",
    description: "ಮೂರು ವಿಧ ಶ್ರದ್ಧೆ - The three types of faith",
    totalVerses: 28,
    verses: [
{
"id": "17-1",
"chapter": 17,
"verse": 1,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಯೇ ಶಾಸ್ತ್ರವಿಧಿಮುತ್ಸೃಜ್ಯ ಯಜನ್ತೇ ಶ್ರದ್ಧಯಾನ್ವಿತಾಃ | ತೇಷಾಂ ನಿಷ್ಠಾ ತು ಕಾ ಕೃಷ್ಣ ಸತ್ತ್ವಮಾಹೋ ರಜಸ್ತಮಃ ||",
"transliteration": "arjuna uvācha ye śhāstra-vidhim utsṛijya yajante śhraddhayānvitāḥ teṣhāṁ niṣhṭhā tu kā kṛiṣhṇa sattvam āho rajas tamaḥ",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಕೃಷ್ಣ, ಶಾಸ್ತ್ರವಿಧಿಯನ್ನು ತ್ಯಜಿಸಿ ಶ್ರದ್ಧೆಯಿಂದ ಯಜಿಸುವವರ ನಿಷ್ಠೆ ಏನು? ಸತ್ತ್ವ, ರಜಸ್, ತಮಸ್ಸುಗಳಲ್ಲಿ ಯಾವುದು?"
},
{
"id": "17-2",
"chapter": 17,
"verse": 2,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ತ್ರಿವಿಧಾ ಭವತಿ ಶ್ರದ್ಧಾ ದೇಹಿನಾಂ ಸಾ ಸ್ವಭಾವಜಾ | ಸಾತ್ತ್ವಿಕೀ ರಾಜಸೀ ಚೈವ ತಾಮಸೀ ಚೇತಿ ತಾಂ ಶೃಣು ||",
"transliteration": "śhrī bhagavān uvācha tri-vidhā bhavati śhraddhā dehināṁ sā sva-bhāva-jā sāttvikī rājasī chaiva tāmasī cheti tāṁ śhṛiṇu",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ದೇಹಿಗಳ ಶ್ರದ್ಧೆಯು ಸ್ವಭಾವಜವಾಗಿ ಮೂರು ವಿಧ: ಸಾತ್ತ್ವಿಕೀ, ರಾಜಸೀ, ತಾಮಸೀ - ಅದನ್ನು ಕೇಳು."
},
{
"id": "17-3",
"chapter": 17,
"verse": 3,
"kannada": "ಸತ್ತ್ವಾನುರೂಪಾ ಸರ್ವಸ್ಯ ಶ್ರದ್ಧಾ ಭವತಿ ಭಾರತ | ಶ್ರದ್ಧಾಮಯೋಽಯಂ ಪುರುಷೋ ಯೋ ಯಚ್ಛ್ರದ್ಧಃ ಸ ಏವ ಸಃ ||",
"transliteration": "sattvānurūpā sarvasya śhraddhā bhavati bhārata śhraddhā-mayo 'yaṁ puruṣho yo yach-chhraddhaḥ sa eva saḥ",
"meaning": "ಹೇ ಭಾರತ, ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಸತ್ತ್ವಾನುರೂಪವಾದ ಶ್ರದ್ಧೆ ಇರುತ್ತದೆ. ಮನುಷ್ಯನು ಶ್ರದ್ಧಾಮಯನಾಗಿರುತ್ತಾನೆ. ಯಾವ ಶ್ರದ್ಧೆಯುಳ್ಳವನೋ, ಅವನೇ ಅದೇ."
},
{
"id": "17-4",
"chapter": 17,
"verse": 4,
"kannada": "ಯಜನ್ತೇ ಸಾತ್ತ್ವಿಕಾ ದೇವಾನ್ಯಕ್ಷರಕ್ಷಾಂಸಿ ರಾಜಸಾಃ | ಪ್ರೇತಾನ್ಭೂತಗಣಾಂಶ್ಚಾನ್ಯೇ ಯಜನ್ತೇ ತಾಮಸಾ ಜನಾಃ ||",
"transliteration": "yajante sāttvikā devān yakṣha-rakṣhāṁsi rājasāḥ pretān bhūta-gaṇānśh chānye yajante tāmasā janāḥ",
"meaning": "ಸಾತ್ತ್ವಿಕರು ದೇವತೆಗಳನ್ನು, ರಾಜಸರು ಯಕ್ಷ-ರಾಕ್ಷಸರನ್ನು, ತಾಮಸರು ಪ್ರೇತ-ಭೂತಗಣಗಳನ್ನು ಯಜಿಸುತ್ತಾರೆ."
},
{
"id": "17-5",
"chapter": 17,
"verse": 5,
"kannada": "ಅಶಾಸ್ತ್ರವಿಹಿತಂ ಘೋರಂ ತಪ್ಯನ್ತೇ ಯೇ ತಪೋ ಜನಾಃ | ದಂಭಾಹಂಕಾರಸಂಯುಕ್ತಾಃ ಕಾಮರಾಗಬಲಾನ್ವಿತಾಃ ||",
"transliteration": "aśhāstra-vihitaṁ ghoraṁ tapyante ye tapo janāḥ dambhāhankāra-saṁyuktāḥ kāma-rāga-balānvitāḥ",
"meaning": "ಶಾಸ್ತ್ರವಿಹಿತವಲ್ಲದ, ಘೋರವಾದ ತಪಸ್ಸನ್ನು ದಂಭ-ಅಹಂಕಾರ-ಸಂಯುಕ್ತರಾಗಿ, ಕಾಮ-ರಾಗ-ಬಲಗಳಿಂದ ಯುಕ್ತರಾಗಿ ಯಾರು ಮಾಡುತ್ತಾರೋ."
},
{
"id": "17-6",
"chapter": 17,
"verse": 6,
"kannada": "ಕರ್ಶಯನ್ತಃ ಶರೀರಸ್ಥಂ ಭೂತಗ್ರಾಮಮಚೇತಸಃ | ಮಾಂ ಚೈವಾನ್ತಃಶರೀರಸ್ಥಂ ತಾನ್ವಿದ್ಧ್ಯಾಸುರನಿಶ್ಚಯಾನ್ ||",
"transliteration": "karśhayantaḥ śharīra-sthaṁ bhūta-grāmam acheetasaḥ māṁ chaivāntaḥ-śharīra-sthaṁ tān viddhy āsura-niśhchayān",
"meaning": "ದೇಹಸ್ಥವಾದ ಭೂತಗ್ರಾಮವನ್ನು ಕರ್ಶಿಸುತ್ತಾ, ಅಚೇತಸರಾಗಿ, ದೇಹದಲ್ಲಿರುವ ನನ್ನನ್ನೂ ಕರ್ಶಿಸುವವರನ್ನು ಆಸುರ ನಿಶ್ಚಯರೆಂದು ತಿಳಿ."
},
{
"id": "17-7",
"chapter": 17,
"verse": 7,
"kannada": "ಆಹಾರಸ್ತ್ವಪಿ ಸರ್ವಸ್ಯ ತ್ರಿವಿಧೋ ಭವತಿ ಪ್ರಿಯಃ | ಯಜ್ಞಸ್ತಪಸ್ತಥಾ ದಾನಂ ತೇಷಾಂ ಭೇದಮಿಮಂ ಶೃಣು ||",
"transliteration": "āhāras tv api sarvasya tri-vidho bhavati priyaḥ yajñas tapas tathā dānaṁ teṣhāṁ bhedam imaṁ śhṛiṇu",
"meaning": "ಸರ್ವರಿಗೂ ಪ್ರಿಯವಾದ ಆಹಾರವೂ ಮೂರು ವಿಧ. ಯಜ್ಞ, ತಪಸ್ಸು, ದಾನಗಳೂ ಹಾಗೆ. ಅವುಗಳ ಭೇದವನ್ನು ಕೇಳು."
},
{
"id": "17-8",
"chapter": 17,
"verse": 8,
"kannada": "ಆಯುಃಸತ್ತ್ವಬಲಾರೋಗ್ಯಸುಖಪ್ರೀತಿವಿವರ್ಧನಾಃ | ರಸ್ಯಾಃ ಸ್ನಿಗ್ಧಾಃ ಸ್ಥಿರಾ ಹೃದ್ಯಾ ಆಹಾರಾಃ ಸಾತ್ತ್ವಿಕಪ್ರಿಯಾಃ ||",
"transliteration": "āyuḥ-sattva-balārogya-sukha-prīti-vivardhanāḥ rasyāḥ snigdhāḥ sthirā hṛidyā āhārāḥ sāttvika-priyāḥ",
"meaning": "ಆಯುಃ, ಸತ್ತ್ವ, ಬಲ, ಆರೋಗ್ಯ, ಸುಖ, ಪ್ರೀತಿಗಳನ್ನು ವರ್ಧಿಸುವ, ರಸಯುಕ್ತ, ಸ್ನಿಗ್ಧ, ಸ್ಥಿರ, ಹೃದ್ಯ ಆಹಾರಗಳು ಸಾತ್ತ್ವಿಕರಿಗೆ ಪ್ರಿಯ."
},
{
"id": "17-9",
"chapter": 17,
"verse": 9,
"kannada": "ಕಟ್ವಮ್ಲಲವಣಾತ್ಯುಷ್ಣತೀಕ್ಷ್ಣರೂಕ್ಷವಿದಾಹಿನಃ | ಆಹಾರಾ ರಾಜಸಸ್ಯೇಷ್ಟಾ ದುಃಖಶೋಕಾಮಯಪ್ರದಾಃ ||",
"transliteration": "kaṭv-amla-lavaṇāty-uṣhṇa-tīkṣhṇa-rūkṣha-vidāhinaḥ āhārā rājasasy eṣhṭā duḥkha-śhokāmaya-pradāḥ",
"meaning": "ಕಟು, ಆಮ್ಲ, ಲವಣ, ಅತ್ಯುಷ್ಣ, ತೀಕ್ಷ್ಣ, ರೂಕ್ಷ, ವಿದಾಹಿ ಆಹಾರಗಳು ರಾಜಸರಿಗೆ ಇಷ್ಟ. ಅವು ದುಃಖ, ಶೋಕ, ಆಮಯ (ರೋಗ)ಗಳನ್ನು ಕೊಡುತ್ತವೆ."
},
{
"id": "17-10",
"chapter": 17,
"verse": 10,
"kannada": "ಯಾತಯಾಮಂ ಗತರಸಂ ಪೂತಿ ಪರ್ಯುಷಿತಂ ಚ ಯತ್ | ಉಚ್ಛಿಷ್ಟಮಪಿ ಚಾಮೇಧ್ಯಂ ಭೋಜನಂ ತಾಮಸಪ್ರಿಯಮ್ ||",
"transliteration": "yāta-yāmaṁ gata-rasaṁ pūti paryuṣhitaṁ cha yat uchchhiṣhṭam api chāmedhyaṁ bhojanaṁ tāmasapriyam",
"meaning": "ಯಾತಯಾಮ (ಹಳಸಲಾದ), ಗತರಸ (ರಸಹೀನ), ಪೂತಿ (ಕೆಟ್ಟ ವಾಸನೆಯ), ಪರ್ಯುಷಿತ (ಹಳೇದಾದ), ಉಚ್ಛಿಷ್ಟ, ಅಮೇಧ್ಯ ಆಹಾರಗಳು ತಾಮಸರಿಗೆ ಪ್ರಿಯ."
},
{
"id": "17-11",
"chapter": 17,
"verse": 11,
"kannada": "ಅಫಲಾಕಾಂಕ್ಷಿಭಿರ್ಯಜ್ಞೋ ವಿಧಿದೃಷ್ಟೋ ಯ ಇಜ್ಯತೇ | ಯಷ್ಟವ್ಯಮೇವೇತಿ ಮನಃ ಸಮಾಧಾಯ ಸ ಸಾತ್ತ್ವಿಕಃ ||",
"transliteration": "aphalākāṅkṣhibhir yajño vidhi-dṛiṣhṭo ya ijyate yaṣhṭavyam eveti manaḥ samādhāya sa sāttvikaḥ",
"meaning": "ಫಲಾಕಾಂಕ್ಷೆಯಿಲ್ಲದವರಿಂದ, 'ಯಜ್ಞವೇ ಮಾಡಬೇಕಾದದ್ದು' ಎಂದು ಮನಸ್ಸನ್ನು ಸಮಾಧಾನಪಡಿಸಿ, ವಿಧಿದೃಷ್ಟವಾಗಿ ಮಾಡುವ ಯಜ್ಞವು ಸಾತ್ತ್ವಿಕ."
},
{
"id": "17-12",
"chapter": 17,
"verse": 12,
"kannada": "ಅಭಿಸಂಧಾಯ ತು ಫಲಂ ದಂಭಾರ್ಥಮಪಿ ಚೈವ ಯತ್ | ಇಜ್ಯತೇ ಭರತಶ್ರೇಷ್ಠ ತಂ ಯಜ್ಞಂ ವಿದ್ಧಿ ರಾಜಸಮ್ ||",
"transliteration": "abhisanḍhāya tu phalaṁ dambhārtham api chaiva yat ijyate bharata-śhreṣhṭha taṁ yajñaṁ viddhi rājasam",
"meaning": "ಹೇ ಭರತಶ್ರೇಷ್ಠ, ಫಲವನ್ನು ಅಭಿಸಂಧಾನ ಮಾಡಿ, ದಂಭಕ್ಕಾಗಿಯೂ ಮಾಡುವ ಯಜ್ಞವು ರಾಜಸವೆಂದು ತಿಳಿ."
},
{
"id": "17-13",
"chapter": 17,
"verse": 13,
"kannada": "ವಿಧಿಹೀನಮಸೃಷ್ಟಾನ್ನಂ ಮಂತ್ರಹೀನಮದಕ್ಷಿಣಮ್ | ಶ್ರದ್ಧಾವಿರಹಿತಂ ಯಜ್ಞಂ ತಾಮಸಂ ಪರಿಚಕ್ಷತೇ ||",
"transliteration": "vidhi-hīnam asṛiṣhṭānnaṁ mantra-hīnam adakṣhiṇam śhraddhā-virahitaṁ yajñaṁ tāmasaṁ parichakṣhate",
"meaning": "ವಿಧಿಹೀನ, ಅಸೃಷ್ಟಾನ್ನ (ಅನ್ನದಾನವಿಲ್ಲದ), ಮಂತ್ರಹೀನ, ಅದಕ್ಷಿಣೆಯಿಲ್ಲದ, ಶ್ರದ್ಧಾವಿರಹಿತ ಯಜ್ಞವನ್ನು ತಾಮಸವೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "17-14",
"chapter": 17,
"verse": 14,
"kannada": "ದೇವದ್ವಿಜಗುರುಪ್ರಾಜ್ಞಪೂಜನಂ ಶೌಚಮಾರ್ಜವಮ್ | ಬ್ರಹ್ಮಚರ್ಯಮಹಿಂಸಾ ಚ ಶಾರೀರಂ ತಪ ಉಚ್ಯತೇ ||",
"transliteration": "deva-dvija-guru-prājña-pūjanaṁ śhaucham ārjavam brahmacharyam ahiṁsā cha śhārīraṁ tapa uchyate",
"meaning": "ದೇವ, ದ್ವಿಜ, ಗುರು, ಪ್ರಾಜ್ಞರ ಪೂಜನ, ಶೌಚ, ಆರ್ಜವ, ಬ್ರಹ್ಮಚರ್ಯ, ಅಹಿಂಸೆ - ಇದು ಶಾರೀರ ತಪಸ್ಸೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "17-15",
"chapter": 17,
"verse": 15,
"kannada": "ಅನುದ್ವೇಗಕರಂ ವಾಕ್ಯಂ ಸತ್ಯಂ ಪ್ರಿಯಹಿತಂ ಚ ಯತ್ | ಸ್ವಾಧ್ಯಾಯಾಭ್ಯಸನಂ ಚೈವ ವಾಂಗ್ಮಯಂ ತಪ ಉಚ್ಯತೇ ||",
"transliteration": "anudvega-karaṁ vākyaṁ satyaṁ priya-hitaṁ cha yat svādhyāyābhyasanaṁ chaiva vāṅ-mayaṁ tapa uchyate",
"meaning": "ಅನುದ್ವೇಗಕರವಾದ, ಸತ್ಯ, ಪ್ರಿಯ, ಹಿತವಾದ ವಾಕ್ಯ, ಸ್ವಾಧ್ಯಾಯಾಭ್ಯಾಸ - ಇದು ವಾಂಗ್ಮಯ ತಪಸ್ಸೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "17-16",
"chapter": 17,
"verse": 16,
"kannada": "ಮನಃಪ್ರಸಾದಃ ಸೌಮ್ಯತ್ವಂ ಮೌನಮಾತ್ಮವಿನಿಗ್ರಹಃ | ಭಾವಸಂಶುದ್ಧಿರಿತ್ಯೇತತ್ತಪೋ ಮಾನಸಮುಚ್ಯತೇ ||",
"transliteration": "manaḥ-prasādaḥ saumyatvaṁ maunam ātma-vinigrahaḥ bhāva-sanśhuddhir ity etat tapo mānasam uchyate",
"meaning": "ಮನಃಪ್ರಸಾದ, ಸೌಮ್ಯತ್ವ, ಮೌನ, ಆತ್ಮವಿನಿಗ್ರಹ, ಭಾವಸಂಶುದ್ಧಿ - ಇದು ಮಾನಸ ತಪಸ್ಸೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "17-17",
"chapter": 17,
"verse": 17,
"kannada": "ಶ್ರದ್ಧಯಾ ಪರಯಾ ತಪ್ತಂ ತಪಸ್ತತ್ತ್ರಿವಿಧಂ ನರೈಃ | ಅಫಲಾಕಾಂಕ್ಷಿಭಿರ್ಯುಕ್ತೈಃ ಸಾತ್ತ್ವಿಕಂ ಪರಿಚಕ್ಷತೇ ||",
"transliteration": "śhraddhayā parayā taptaṁ tapas tat tri-vidhaṁ naraiḥ aphalākāṅkṣhibhir yuktaiḥ sāttvikaṁ parichakṣhate",
"meaning": "ಪರಮ ಶ್ರದ್ಧೆಯಿಂದ, ಫಲಾಕಾಂಕ್ಷೆಯಿಲ್ಲದ, ಯುಕ್ತರಾದ ನರರು ಮಾಡುವ ಮೂರು ವಿಧದ ತಪಸ್ಸನ್ನು ಸಾತ್ತ್ವಿಕವೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "17-18",
"chapter": 17,
"verse": 18,
"kannada": "ಸತ್ಕಾರಮಾನಪೂಜಾರ್ಥಂ ತಪೋ ದಂಭೇನ ಚೈವ ಯತ್ | ಕ್ರಿಯತೇ ತದಿಹ ಪ್ರೋಕ್ತಂ ರಾಜಸಂ ಚಲಮಧ್ರುವಮ್ ||",
"transliteration": "sat-kāra-māna-pūjārthaṁ tapo dambhena chaiva yat kriyate tad iha proktaṁ rājasaṁ chalam adhruvam",
"meaning": "ಸತ್ಕಾರ, ಮಾನ, ಪೂಜೆಗಳಿಗಾಗಿ, ದಂಭದಿಂದ ಮಾಡುವ ತಪಸ್ಸು ಇಲ್ಲಿ ರಾಜಸ, ಚಲ, ಅಧ್ರುವವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "17-19",
"chapter": 17,
"verse": 19,
"kannada": "ಮೂಢಗ್ರಾಹೇಣಾತ್ಮನೋ ಯತ್ಪೀಡಯಾ ಕ್ರಿಯತೇ ತಪಃ | ಪರಸ್ಯೋತ್ಸಾದನಾರ್ಥಂ ವಾ ತತ್ತಾಮಸಮುದಾಹೃತಮ್ ||",
"transliteration": "mūḍha-grāheṇātmano yat pīḍayā kriyate tapaḥ parasya utsādanārthaṁ vā tat tāmasam udāhṛitam",
"meaning": "ಮೂಢಗ್ರಹಣದಿಂದ, ಆತ್ಮನನ್ನು ಪೀಡಿಸಿ, ಇತರರನ್ನು ನಾಶಪಡಿಸಲು ಮಾಡುವ ತಪಸ್ಸನ್ನು ತಾಮಸವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "17-20",
"chapter": 17,
"verse": 20,
"kannada": "ದಾತವ್ಯಮಿತಿ ಯದ್ದಾನಂ ದೀಯತೇಽನುಪಕಾರಿಣೇ | ದೇಶೇ ಕಾಲೇ ಚ ಪಾತ್ರೇ ಚ ತದ್ದಾನಂ ಸಾತ್ತ್ವಿಕಂ ಸ್ಮೃತಮ್ ||",
"transliteration": "dātavyam iti yad dānaṁ dīyate 'nupakāriṇe deśhe kāle cha pātre cha tad dānaṁ sāttvikaṁ smṛitam",
"meaning": "'ಕೊಡಬೇಕು' ಎಂದು, ಅನುಪಕಾರಿಗೆ, ಸರಿಯಾದ ದೇಶ-ಕಾಲ-ಪಾತ್ರದಲ್ಲಿ ಕೊಡುವ ದಾನವು ಸಾತ್ತ್ವಿಕವೆಂದು ಸ್ಮೃತ."
},
{
"id": "17-21",
"chapter": 17,
"verse": 21,
"kannada": "ಯತ್ತು ಪ್ರತ್ಯುಪಕಾರಾರ್ಥಂ ಫಲಮುದ್ದಿಶ್ಯ ವಾ ಪುನಃ | ದೀಯತೇ ಚ ಪರಿಕ್ಲಿಷ್ಟಂ ತದ್ದಾನಂ ರಾಜಸಂ ಸ್ಮೃತಮ್ ||",
"transliteration": "yat tu pratyupakārārthaṁ phalam uddiśhya vā punaḥ dīyate cha parikliṣhṭaṁ tad dānaṁ rājasaṁ smṛitam",
"meaning": "ಪ್ರತ್ಯುಪಕಾರಕ್ಕಾಗಿ, ಫಲವನ್ನು ಉದ್ದೇಶಿಸಿ, ಪರಿಕ್ಲಿಷ್ಟವಾಗಿ ಕೊಡುವ ದಾನವು ರಾಜಸವೆಂದು ಸ್ಮೃತ."
},
{
"id": "17-22",
"chapter": 17,
"verse": 22,
"kannada": "ಅದೇಶಕಾಲೇ ಯದ್ದಾನಮಪಾತ್ರಭ್ಯಶ್ಚ ದೀಯತೇ | ಅಸತ್ಕೃತಮವಜ್ಞಾತಂ ತತ್ತಾಮಸಮುದಾಹೃತಮ್ ||",
"transliteration": "adeśha-kāle yad dānam apātra-bhyaśh cha dīyate asat-kṛitam avajñātaṁ tat tāmasam udāhṛitam",
"meaning": "ಅದೇಶ-ಅಕಾಲದಲ್ಲಿ, ಅಪಾತ್ರಕ್ಕೆ ಕೊಡುವ, ಅಸತ್ಕೃತ (ಅಗೌರವದಿಂದ), ಅವಜ್ಞಾತ (ಅವಮಾನಿಸಿ) ದಾನವು ತಾಮಸವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "17-23",
"chapter": 17,
"verse": 23,
"kannada": "ಓಂ ತತ್ಸದಿತಿ ನಿರ್ದೇಶೋ ಬ್ರಹ್ಮಣಸ್ತ್ರಿವಿಧಃ ಸ್ಮೃತಃ | ಬ್ರಾಹ್ಮಣಾಸ್ತೇನ ವೇದಾಶ್ಚ ಯಜ್ಞಾಶ್ಚ ವಿಹಿತಾಃ ಪುರಾ ||",
"transliteration": "oṁ tat sad iti nirdeśho brahmaṇas tri-vidhaḥ smṛitaḥ brāhmaṇās tena vedāśh cha yajñāśh cha vihitāḥ purā",
"meaning": "'ಓಂ ತತ್ ಸತ್' ಎಂದು ಬ್ರಹ್ಮನ ಮೂರು ವಿಧ ನಿರ್ದೇಶವು ಸ್ಮೃತವಾಗಿದೆ. ಅದರಿಂದ ಬ್ರಾಹ್ಮಣರು, ವೇದಗಳು, ಯಜ್ಞಗಳು ಪೂರ್ವದಲ್ಲಿ ವಿಹಿತವಾಗಿವೆ."
},
{
"id": "17-24",
"chapter": 17,
"verse": 24,
"kannada": "ತಸ್ಮಾದೋಮಿತ್ಯುದಾಹೃತ್ಯ ಯಜ್ಞದಾನತಪಃಕ್ರಿಯಾಃ | ಪ್ರವರ್ತನ್ತೇ ವಿಧಾನೋಕ್ತಾಃ ಸತತಂ ಬ್ರಹ್ಮವಾದಿನಾಮ್ ||",
"transliteration": "tasmād om ity udāhṛitya yajña-dāna-tapaḥ-kriyāḥ pravartante vidhānoktāḥ satataṁ brahma-vādinām",
"meaning": "ಆದ್ದರಿಂದ 'ಓಂ' ಎಂದು ಉಚ್ಚರಿಸಿ, ಯಜ್ಞ-ದಾನ-ತಪಸ್ಸುಗಳ ಕ್ರಿಯೆಗಳನ್ನು ಬ್ರಹ್ಮವಾದಿಗಳು ವಿಧಾನೋಕ್ತವಾಗಿ ನಿರಂತರ ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ."
},
{
"id": "17-25",
"chapter": 17,
"verse": 25,
"kannada": "ತದಿತ್ಯನಭಿಸಂಧಾಯ ಫಲಂ ಯಜ್ಞತಪಃಕ್ರಿಯಾಃ | ದಾನಕ್ರಿಯಾಶ್ಚ ವಿವಿಧಾಃ ಕ್ರಿಯನ್ತೇ ಮೋಕ್ಷಕಾಂಕ್ಷಿಭಿಃ ||",
"transliteration": "tad ity anabhisandhāya phalaṁ yajña-tapaḥ-kriyāḥ dāna-kriyāśh cha vividhāḥ kriyante mokṣha-kāṅkṣhibhiḥ",
"meaning": "'ತತ್' ಎಂದು ಫಲವನ್ನು ಅಭಿಸಂಧಾನ ಮಾಡದೆ, ಯಜ್ಞ-ತಪಸ್ಸು-ಕ್ರಿಯೆಗಳನ್ನು, ವಿವಿಧ ದಾನಕ್ರಿಯೆಗಳನ್ನು ಮೋಕ್ಷಕಾಂಕ್ಷಿಗಳು ಮಾಡುತ್ತಾರೆ."
},
{
"id": "17-26",
"chapter": 17,
"verse": 26,
"kannada": "ಸದ್ಭಾವೇ ಸಾಧುಭಾವೇ ಚ ಸದಿತ್ಯೇತತ್ಪ್ರಯುಜ್ಯತೇ | ಪ್ರಶಸ್ತೇ ಕರ್ಮಣಿ ತಥಾ ಸಚ್ಚಬ್ದಃ ಪಾರ್ಥ ಯುಜ್ಯತೇ ||",
"transliteration": "sad-bhāve sādhu-bhāve cha sad ity etat prayujyate praśhaste karmaṇi tathā sach-chhabdaḥ pārtha yujyate",
"meaning": "ಹೇ ಪಾರ್ಥ, ಸದ್ಭಾವ, ಸಾಧುಭಾವಗಳಲ್ಲಿ 'ಸತ್' ಎಂದು ಪ್ರಯೋಜಿಸಲಾಗುತ್ತದೆ. ಪ್ರಶಸ್ತ ಕರ್ಮದಲ್ಲಿಯೂ 'ಸತ್' ಶಬ್ದವು ಯುಜ್ಯತೆ (ಉಪಯೋಗಿಸಲ್ಪಡುತ್ತದೆ)."
},
{
"id": "17-27",
"chapter": 17,
"verse": 27,
"kannada": "ಯಜ್ಞೇ ತಪಸಿ ದಾನೇ ಚ ಸ್ಥಿತಿಃ ಸದಿತಿ ಚೋಚ್ಯತೇ | ಕರ್ಮ ಚೈವ ತದರ್ಥೀಯಂ ಸದಿತ್ಯೇವಾಭಿಧೀಯತೇ ||",
"transliteration": "yajñe tapasi dāne cha sthitiḥ sad iti chochyate karma chaiva tad-arthīyaṁ sad ity evābhidhīyate",
"meaning": "ಯಜ್ಞ, ತಪಸ್ಸು, ದಾನಗಳಲ್ಲಿ ಸ್ಥಿತಿಯು 'ಸತ್' ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ. ಆ ಅರ್ಥದ ಕರ್ಮವೂ 'ಸತ್' ಎಂದೇ ಹೇಳಲ್ಪಡುತ್ತದೆ."
},
{
"id": "17-28",
"chapter": 17,
"verse": 28,
"kannada": "ಅಶ್ರದ್ಧಯಾ ಹುತಂ ದತ್ತಂ ತಪಸ್ತಪ್ತಂ ಕೃತಂ ಚ ಯತ್ | ಅಸದಿತ್ಯುಚ್ಯತೇ ಪಾರ್ಥ ನ ಚ ತತ್ಪ್ರೇತ್ಯ ನೋ ಇಹ ||",
"transliteration": "aśhraddhayā hutaṁ dattaṁ tapas taptaṁ kṛitaṁ cha yat asad ity uchyate pārtha na cha tat pretya no iha",
"meaning": "ಹೇ ಪಾರ್ಥ, ಶ್ರದ್ಧೆಯಿಲ್ಲದೆ ಹೋಮ ಮಾಡಿದ್ದು, ದತ್ತವಾದ್ದು, ತಪ್ತ ತಪಸ್ಸು, ಮಾಡಿದ ಕರ್ಮವು 'ಅಸತ್' ಎಂದು ಹೇಳಲ್ಪಡುತ್ತದೆ. ಅದು ಇಹ-ಪರಗಳಲ್ಲಿ ಫಲಿಸುವುದಿಲ್ಲ."
},

    ]
  },
  {
    id: 18,
    title: "Moksha Sanyasa Yoga",
    kannadaTitle: "ಮೋಕ್ಷ ಸಂನ್ಯಾಸ ಯೋಗ",
    description: "ಮೋಕ್ಷ ಮತ್ತು ಸಂನ್ಯಾಸ - Liberation through renunciation",
    totalVerses: 78,
    verses: [
{
"id": "18-1",
"chapter": 18,
"verse": 1,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ಸಂನ್ಯಾಸಸ್ಯ ಮಹಾಬಾಹೋ ತತ್ತ್ವಮಿಚ್ಛಾಮಿ ವೇದಿತುಮ್ | ತ್ಯಾಗಸ್ಯ ಚ ಹೃಷೀಕೇಶ ಪೃಥಕ್ಕೇಶಿನಿಷೂದನ ||",
"transliteration": "arjuna uvācha sannyāsasya mahā-bāho tattvam ichchhāmi veditum tyāgasya cha hṛiṣhīkeśha pṛithak keśhi-niṣhūdana",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಮಹಾಬಾಹೋ, ಸಂನ್ಯಾಸದ ತತ್ತ್ವವನ್ನು ತಿಳಿಯಲು ಇಚ್ಛಿಸುತ್ತೇನೆ. ಹೇ ಹೃಷೀಕೇಶ, ಹೇ ಕೇಶಿನಿಷೂದನ, ತ್ಯಾಗದ ತತ್ತ್ವವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ತಿಳಿಯಲು ಇಚ್ಛಿಸುತ್ತೇನೆ."
},
{
"id": "18-2",
"chapter": 18,
"verse": 2,
"kannada": "ಶ್ರೀಭಗವಾನುವಾಚ | ಕಾಮ್ಯಾನಾಂ ಕರ್ಮಣಾಂ ನ್ಯಾಸಂ ಸಂನ್ಯಾಸಂ ಕವಯೋ ವಿದುಃ | ಸರ್ವಕರ್ಮಫಲತ್ಯಾಗಂ ಪ್ರಾಹುಸ್ತ್ಯಾಗಂ ವಿಚಕ್ಷಣಾಃ ||",
"transliteration": "śhrī bhagavān uvācha kāmyānāṁ karmaṇāṁ nyāsaṁ sannyāsaṁ kavayo viduḥ sarva-karma-phala-tyāgaṁ prāhus tyāgaṁ vichakṣhaṇāḥ",
"meaning": "ಶ್ರೀಭಗವಾನುವಾಚ: ಕಾಮ್ಯ ಕರ್ಮಗಳ ತ್ಯಾಗವನ್ನು ಸಂನ್ಯಾಸವೆಂದು ಕವಿಗಳು ತಿಳಿದಿದ್ದಾರೆ. ಸರ್ವ ಕರ್ಮಫಲಗಳ ತ್ಯಾಗವನ್ನು ತ್ಯಾಗವೆಂದು ವಿಚಕ್ಷಣರು ಹೇಳುತ್ತಾರೆ."
},
{
"id": "18-3",
"chapter": 18,
"verse": 3,
"kannada": "ತ್ಯಾಜ್ಯಂ ದೋಷವದಿತ್ಯೇಕೇ ಕರ್ಮ ಪ್ರಾಹುರ್ಮನೀಷಿಣಃ | ಯಜ್ಞದಾನತಪಃಕರ್ಮ ನ ತ್ಯಾಜ್ಯಮಿತಿ ಚಾಪರೇ ||",
"transliteration": "tyājyaṁ doṣha-vad ity eke karma prāhur manīṣhiṇaḥ yajña-dāna-tapaḥ-karma na tyājyam iti chāpare",
"meaning": "ಕೆಲವು ಮನೀಷಿಗಳು ದೋಷವುಳ್ಳ ಕರ್ಮವನ್ನು ತ್ಯಾಜ್ಯವೆಂದು ಹೇಳುತ್ತಾರೆ. ಇನ್ನೂ ಕೆಲವರು ಯಜ್ಞ, ದಾನ, ತಪಸ್ಸು ಕರ್ಮಗಳನ್ನು ತ್ಯಾಜ್ಯವಲ್ಲವೆಂದು ಹೇಳುತ್ತಾರೆ."
},
{
"id": "18-4",
"chapter": 18,
"verse": 4,
"kannada": "ನಿಶ್ಚಯಂ ಶೃಣು ಮೇ ತತ್ರ ತ್ಯಾಗೇ ಭರತಸತ್ತಮ | ತ್ಯಾಗೋ ಹಿ ಪುರುಷವ್ಯಾಘ್ರ ತ್ರಿವಿಧಃ ಸಂಪ್ರಕೀರ್ತಿತಃ ||",
"transliteration": "niśhchayaṁ śhṛiṇu me tatra tyāge bharata-sattama tyāgo hi puruṣha-vyāghra tri-vidhaḥ samprakīrtitaḥ",
"meaning": "ಹೇ ಭರತಶ್ರೇಷ್ಠ, ಅಲ್ಲಿ ತ್ಯಾಗದ ನಿಶ್ಚಯವನ್ನು ನನ್ನಿಂದ ಕೇಳು. ಹೇ ಪುರುಷವ್ಯಾಘ್ರ, ತ್ಯಾಗವು ಮೂರು ವಿಧವಾಗಿ ಸಂಪ್ರಕೀರ್ತಿತವಾಗಿದೆ."
},
{
"id": "18-5",
"chapter": 18,
"verse": 5,
"kannada": "ಯಜ್ಞದಾನತಪಃಕರ್ಮ ನ ತ್ಯಾಜ್ಯಂ ಕಾರ್ಯಮೇವ ತತ್ | ಯಜ್ಞೋ ದಾನಂ ತಪಶ್ಚೈವ ಪಾವನಾನಿ ಮನೀಷಿಣಾಮ್ ||",
"transliteration": "yajña-dāna-tapaḥ-karma na tyājyaṁ kāryam eva tat yajño dānaṁ tapaśh chaiva pāvanāni manīṣhiṇām",
"meaning": "ಯಜ್ಞ, ದಾನ, ತಪಸ್ಸು ಕರ್ಮಗಳು ತ್ಯಾಜ್ಯವಲ್ಲ, ಮಾಡಬೇಕಾದವು. ಯಜ್ಞ, ದಾನ, ತಪಸ್ಸುಗಳು ಮನೀಷಿಗಳನ್ನು ಪಾವನಗೊಳಿಸುತ್ತವೆ."
},
{
"id": "18-6",
"chapter": 18,
"verse": 6,
"kannada": "ಏತಾನ್ಯಪಿ ತು ಕರ್ಮಾಣಿ ಸಂಗಂ ತ್ಯಕ್ತ್ವಾ ಫಲಾನಿ ಚ | ಕರ್ತವ್ಯಾನೀತಿ ಮೇ ಪಾರ್ಥ ನಿಶ್ಚಿತಂ ಮತಮುತ್ತಮಮ್ ||",
"transliteration": "etāny api tu karmāṇi saṅgaṁ tyaktvā phalāni cha kartavyānīti me pārtha niśhchitaṁ matam uttamam",
"meaning": "ಹೇ ಪಾರ್ಥ, ಆದರೆ ಈ ಕರ್ಮಗಳನ್ನು ಸಂಗ ಮತ್ತು ಫಲಗಳನ್ನು ತ್ಯಜಿಸಿ ಮಾಡಬೇಕು - ಇದೇ ನನ್ನ ನಿಶ್ಚಿತ ಉತ್ತಮ ಮತ."
},
{
"id": "18-7",
"chapter": 18,
"verse": 7,
"kannada": "ನಿಯತಸ್ಯ ತು ಸಂನ್ಯಾಸಃ ಕರ್ಮಣೋ ನೋಪಪದ್ಯತೇ | ಮೋಹಾತ್ತಸ್ಯ ಪರಿತ್ಯಾಗಸ್ತಾಮಸಃ ಪರಿಕೀರ್ತಿತಃ ||",
"transliteration": "niyatasya tu sannyāsaḥ karmaṇo nopapadyate mohāt tasya parityāgas tāmasaḥ parikīrtitaḥ",
"meaning": "ನಿಯತ ಕರ್ಮದ ಸಂನ್ಯಾಸವು ಉಚಿತವಲ್ಲ. ಮೋಹದಿಂದ ಅದರ ತ್ಯಾಗವು ತಾಮಸವೆಂದು ಪರಿಕೀರ್ತಿತವಾಗಿದೆ."
},
{
"id": "18-8",
"chapter": 18,
"verse": 8,
"kannada": "ದುಃಖಮಿತ್ಯೇವ ಯತ್ಕರ್ಮ ಕಾಯಕ್ಲೇಶಭಯಾತ್ತ್ಯಜೇತ್ | ಸ ಕೃತ್ವಾ ರಾಜಸಂ ತ್ಯಾಗಂ ನೈವ ತ್ಯಾಗಫಲಂ ಲಭೇತ್ ||",
"transliteration": "duḥkham ity eva yat karma kāya-kleśha-bhayāt tyajet sa kṛitvā rājasaṁ tyāgaṁ naiva tyāga-phalaṁ labhet",
"meaning": "'ದುಃಖ' ಎಂದೇ ಯಾವ ಕರ್ಮವನ್ನು ದೇಹಕ್ಲೇಶದ ಭಯದಿಂದ ತ್ಯಜಿಸುವನೋ, ಅವನು ರಾಜಸ ತ್ಯಾಗವನ್ನು ಮಾಡಿ ತ್ಯಾಗಫಲವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ."
},
{
"id": "18-9",
"chapter": 18,
"verse": 9,
"kannada": "ಕಾರ್ಯಮಿತ್ಯೇವ ಯತ್ಕರ್ಮ ನಿಯತಂ ಕ್ರಿಯತೇಽರ್ಜುನ | ಸಂಗಂ ತ್ಯಕ್ತ್ವಾ ಫಲಂ ಚೈವ ಸ ತ್ಯಾಗಃ ಸಾತ್ತ್ವಿಕೋ ಮತಃ ||",
"transliteration": "kāryam ity eva yat karma niyataṁ kriyate 'rjuna saṅgaṁ tyaktvā phalaṁ chaiva sa tyāgaḥ sāttviko mataḥ",
"meaning": "ಹೇ ಅರ್ಜುನ, 'ಕಾರ್ಯ' ಎಂದೇ ಯಾವ ನಿಯತ ಕರ್ಮವನ್ನು ಸಂಗ ಮತ್ತು ಫಲವನ್ನು ತ್ಯಜಿಸಿ ಮಾಡುವನೋ, ಅದು ಸಾತ್ತ್ವಿಕ ತ್ಯಾಗವೆಂದು ಮತ."
},
{
"id": "18-10",
"chapter": 18,
"verse": 10,
"kannada": "ನ ದ್ವೇಷ್ಟ್ಯಕುಶಲಂ ಕರ್ಮ ಕುಶಲೇ ನಾನುಷಜ್ಜತೇ | ತ್ಯಾಗೀ ಸತ್ತ್ವಸಮಾವಿಷ್ಟೋ ಮೇಧಾವೀ ಛಿನ್ನಸಂಶಯಃ ||",
"transliteration": "na dveṣhṭy akuśhalaṁ karma kuśhale nānuṣhajjate tyāgī sattva-samāviṣhṭo medhāvī chhinna-sanśhayaḥ",
"meaning": "ತ್ಯಾಗಿಯು ಅಕುಶಲ ಕರ್ಮವನ್ನು ದ್ವೇಷಿಸುವುದಿಲ್ಲ, ಕುಶಲ ಕರ್ಮದಲ್ಲಿ ಆಸಕ್ತನಾಗುವುದಿಲ್ಲ. ಸತ್ತ್ವಸಮಾವಿಷ್ಟನೂ, ಮೇಧಾವಿಯೂ, ಛಿನ್ನಸಂಶಯನೂ ಆಗಿರುತ್ತಾನೆ."
},
{
"id": "18-11",
"chapter": 18,
"verse": 11,
"kannada": "ನ ಹಿ ದೇಹಭೃತಾ ಶಕ್ಯಂ ತ್ಯಕ್ತುಂ ಕರ್ಮಾಣ್ಯಶೇಷತಃ | ಯಸ್ತು ಕರ್ಮಫಲತ್ಯಾಗೀ ಸ ತ್ಯಾಗೀತ್ಯಭಿಧೀಯತೇ ||",
"transliteration": "na hi deha-bhṛitā śhakyaṁ tyaktuṁ karmāṇy aśheṣhataḥ yas tu karma-phala-tyāgī sa tyāgīty abhidhīyate",
"meaning": "ದೇಹಧಾರಿಗೆ ಕರ್ಮಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತ್ಯಜಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಆದರೆ ಕರ್ಮಫಲತ್ಯಾಗಿಯೇ ತ್ಯಾಗಿಯೆಂದು ಅಭಿಧೀಯತೇ (ಹೇಳಲ್ಪಡುತ್ತಾನೆ)."
},
{
"id": "18-12",
"chapter": 18,
"verse": 12,
"kannada": "ಅನಿಷ್ಟಮಿಷ್ಟಂ ಮಿಶ್ರಂ ಚ ತ್ರಿವಿಧಂ ಕರ್ಮಣಃ ಫಲಮ್ | ಭವತ್ಯತ್ಯಾಗಿನಾಂ ಪ್ರೇತ್ಯ ನ ತು ಸಂನ್ಯಾಸಿನಾಂ ಕ್ವಚಿತ್ ||",
"transliteration": "aniṣhṭam iṣhṭaṁ miśhraṁ cha tri-vidhaṁ karmaṇaḥ phalam bhavaty atyāgināṁ pretya na tu sannyāsināṁ kvachit",
"meaning": "ಅನಿಷ್ಟ, ಇಷ್ಟ, ಮಿಶ್ರ - ಕರ್ಮದ ಫಲವು ಮೂರು ವಿಧ. ಇದು ಅತ್ಯಾಗಿಗಳಿಗೆ ಮರಣಾನಂತರ ಉಂಟಾಗುತ್ತದೆ, ಸಂನ್ಯಾಸಿಗಳಿಗೆ ಎಂದಿಗೂ ಇಲ್ಲ."
},
{
"id": "18-13",
"chapter": 18,
"verse": 13,
"kannada": "ಪಂಚೈತಾನಿ ಮಹಾಬಾಹೋ ಕಾರಣಾನಿ ನಿಬೋಧ ಮೇ | ಸಾಂಖ್ಯೇ ಕೃತಾನ್ತೇ ಪ್ರೋಕ್ತಾನಿ ಸಿದ್ಧಯೇ ಸರ್ವಕರ್ಮಣಾಮ್ ||",
"transliteration": "pañchaitāni mahā-bāho kāraṇāni nibodha me sāṅkhye kṛitānte proktāni siddhaye sarva-karmaṇām",
"meaning": "ಹೇ ಮಹಾಬಾಹೋ, ಸರ್ವ ಕರ್ಮಗಳ ಸಿದ್ಧಿಗೆ ಸಾಂಖ್ಯದಲ್ಲಿ ಹೇಳಲ್ಪಟ್ಟ ಐದು ಕಾರಣಗಳನ್ನು ನನ್ನಿಂದ ತಿಳಿ."
},
{
"id": "18-14",
"chapter": 18,
"verse": 14,
"kannada": "ಅಧಿಷ್ಠಾನಂ ತಥಾ ಕರ್ತಾ ಕರಣಂ ಚ ಪೃಥಗ್ವಿಧಮ್ | ವಿವಿಧಾಶ್ಚ ಪೃಥಕ್ಚೇಷ್ಟಾ ದೈವಂ ಚೈವಾತ್ರ ಪಂಚಮಮ್ ||",
"transliteration": "adhiṣhṭhānaṁ tathā kartā karaṇaṁ cha pṛithag-vidham vividhāśh cha pṛithak cheṣhṭā daivaṁ chaivātra pañchamam",
"meaning": "ಅಧಿಷ್ಠಾನ (ದೇಹ), ಕರ್ತಾ, ವಿವಿಧ ಕರಣಗಳು, ಪೃಥಕ್ ಚೇಷ್ಟೆಗಳು (ವಿವಿಧ ಪ್ರಯತ್ನಗಳು), ಮತ್ತು ಇಲ್ಲಿ ದೈವವೇ ಐದನೆಯದು."
},
{
"id": "18-15",
"chapter": 18,
"verse": 15,
"kannada": "ಶರೀರವಾಂಗ್ಮನೋಭಿರ್ಯತ್ಕರ್ಮ ಪ್ರಾರಭತೇ ನರಃ | ನ್ಯಾಯ್ಯಂ ವಾ ವಿಪರೀತಂ ವಾ ಪಂಚೈತೇ ತಸ್ಯ ಹೇತವಃ ||",
"transliteration": "śharīra-vāṅ-manobhir yat karma prārabhate naraḥ nyāyyaṁ vā viparītaṁ vā pañchaite tasya hetavaḥ",
"meaning": "ಶರೀರ, ವಾಕ್, ಮನಸ್ಸುಗಳಿಂದ ಮನುಷ್ಯನು ಯಾವ ಕರ್ಮವನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತಾನೆಯೋ, ಅದು ನ್ಯಾಯ್ಯವಾಗಿರಲಿ, ವಿಪರೀತವಾಗಿರಲಿ, ಇವೇ ಅದರ ಐದು ಹೇತುಗಳು."
},
{
"id": "18-16",
"chapter": 18,
"verse": 16,
"kannada": "ತತ್ರೈವಂ ಸತಿ ಕರ್ತಾರಮಾತ್ಮಾನಂ ಕೇವಲಂ ತು ಯಃ | ಪಶ್ಯತ್ಯಕೃತಬುದ್ಧಿತ್ವಾನ್ನ ಸ ಪಶ್ಯತಿ ದುರ್ಮತಿಃ ||",
"transliteration": "tatraivaṁ sati kartāram ātmānaṁ kevalaṁ tu yaḥ paśhyaty akṛita-buddhitvān na sa paśhyati durmatiḥ",
"meaning": "ಅಲ್ಲಿ ಹೀಗಿರುವಾಗ, ಯಾರು ಕೇವಲ ಆತ್ಮನೇ ಕರ್ತಾರನೆಂದು ನೋಡುತ್ತಾನೆಯೋ, ಅವನು ಅಕೃತಬುದ್ಧಿತ್ವದಿಂದ (ತಪ್ಪು ತಿಳಿವಳಿಕೆಯಿಂದ) ನೋಡುವುದಿಲ್ಲ - ಅವನು ದುರ್ಮತಿ."
},
{
"id": "18-17",
"chapter": 18,
"verse": 17,
"kannada": "ಯಸ್ಯ ನಾಹಂಕೃತೋ ಭಾವೋ ಬುದ್ಧಿರ್ಯಸ್ಯ ನ ಲಿಪ್ಯತೇ | ಹತ್ವಾಪಿ ಸ ಇಮಾಂಲ್ಲೋಕಾನ್ನ ಹನ್ತಿ ನ ನಿಬಧ್ಯತೇ ||",
"transliteration": "yasya nāhankṛito bhāvo buddhir yasya na lipyate hatvāpi sa imāll lokān na hanti na nibadhyate",
"meaning": "ಯಾರಿಗೆ ಅಹಂಕೃತ ಭಾವವಿಲ್ಲ, ಯಾರ ಬುದ್ಧಿ ಲಿಪ್ಯತೇ (ಲೇಪಿಸಲ್ಪಡುವುದಿಲ್ಲ), ಅವನು ಈ ಲೋಕಗಳನ್ನು ಕೊಂದರೂ ಕೊಲ್ಲುವುದಿಲ್ಲ, ಬಂಧಿಸಲ್ಪಡುವುದಿಲ್ಲ."
},
{
"id": "18-18",
"chapter": 18,
"verse": 18,
"kannada": "ಜ್ಞಾನಂ ಜ್ಞೇಯಂ ಪರಿಜ್ಞಾತಾ ತ್ರಿವಿಧಾ ಕರ್ಮಚೋದನಾ | ಕರಣಂ ಕರ್ಮ ಕರ್ತೇತಿ ತ್ರಿವಿಧಃ ಕರ್ಮಸಂಗ್ರಹಃ ||",
"transliteration": "jñānaṁ jñeyaṁ parijñātā tri-vidhā karma-chodanā karaṇaṁ karma karteti tri-vidhaḥ karma-saṅgrahaḥ",
"meaning": "ಜ್ಞಾನ, ಜ್ಞೇಯ, ಪರಿಜ್ಞಾತಾ - ಇವು ಕರ್ಮಚೋದನೆಯ ಮೂರು ವಿಧ. ಕರಣ, ಕರ್ಮ, ಕರ್ತಾ - ಇವು ಕರ್ಮಸಂಗ್ರಹದ ಮೂರು ವಿಧ."
},
{
"id": "18-19",
"chapter": 18,
"verse": 19,
"kannada": "ಜ್ಞಾನಂ ಕರ್ಮ ಚ ಕರ್ತಾ ಚ ತ್ರಿಧೈವ ಗುಣಭೇದತಃ | ಪ್ರೋಚ್ಯತೇ ಗುಣಸಂಖ್ಯಾನೇ ಯಥಾವಚ್ಛೃಣು ತಾನ್ಯಪಿ ||",
"transliteration": "jñānaṁ karma cha kartā cha tridhaiwa guṇa-bhedataḥ prochyate guṇa-saṅkhyāne yathā-vach chhṛiṇu tāny api",
"meaning": "ಜ್ಞಾನ, ಕರ್ಮ, ಕರ್ತಾ - ಇವು ಗುಣಭೇದದಿಂದ ಮೂರು ವಿಧವಾಗಿ ಹೇಳಲ್ಪಡುತ್ತವೆ. ಗುಣಸಂಖ್ಯಾನದಲ್ಲಿ ಅವುಗಳನ್ನು ಯಥಾವತ್ ಕೇಳು."
},
{
"id": "18-20",
"chapter": 18,
"verse": 20,
"kannada": "ಸರ್ವಭೂತೇಷು ಯೇನೈಕಂ ಭಾವಮವ್ಯಯಮೀಕ್ಷತೇ | ಅವಿಭಕ್ತಂ ವಿಭಕ್ತೇಷು ತಜ್ಜ್ಞಾನಂ ವಿದ್ಧಿ ಸಾತ್ತ್ವಿಕಮ್ ||",
"transliteration": "sarva-bhūteṣhu yenaikaṁ bhāvam avyayam īkṣhate avibhaktaṁ vibhakteṣhu taj jñānaṁ viddhi sāttvikam",
"meaning": "ಯಾವದಿಂದ ಸರ್ವಭೂತಗಳಲ್ಲಿ ಏಕ, ಅವ್ಯಯ ಭಾವವನ್ನು ನೋಡುತ್ತಾರೋ, ವಿಭಕ್ತಗಳಲ್ಲಿ ಅವಿಭಕ್ತವಾಗಿ, ಆ ಜ್ಞಾನವು ಸಾತ್ತ್ವಿಕವೆಂದು ತಿಳಿ."
},
{
"id": "18-21",
"chapter": 18,
"verse": 21,
"kannada": "ಪೃಥಕ್ತ್ವೇನ ತು ಯಜ್ಜ್ಞಾನಂ ನಾನಾಭಾವಾನ್ ಪೃಥಗ್ವಿಧಾನ್ | ವೇತ್ತಿ ಸರ್ವೇಷು ಭೂತೇಷು ತಜ್ಜ್ಞಾನಂ ವಿದ್ಧಿ ರಾಜಸಮ್ ||",
"transliteration": "pṛithaktvena tu yaj jñānaṁ nānā-bhāvān pṛithag-vidhān vetti sarveṣhu bhūteṣhu taj jñānaṁ viddhi rājasam",
"meaning": "ಪೃಥಕ್ತ್ವದಿಂದ ನಾನಾಭಾವಗಳನ್ನು, ಪೃಥಗ್ವಿಧಗಳನ್ನು ಸರ್ವಭೂತಗಳಲ್ಲಿ ತಿಳಿಯುವ ಜ್ಞಾನವು ರಾಜಸವೆಂದು ತಿಳಿ."
},
{
"id": "18-22",
"chapter": 18,
"verse": 22,
"kannada": "ಯತ್ತು ಕೃತ್ಸ್ನವದೇಕಸ್ಮಿನ್ಕಾರ್ಯೇ ಸಕ್ತಮಹೃತ್ವಿಕಮ್ | ಅತತ್ತ್ವಾರ್ಥವದಲ್ಪಂ ಚ ತತ್ತಾಮಸಮುದಾಹೃತಮ್ ||",
"transliteration": "yat tu kṛitsnavad eka-smin kārye saktam ahaitukam atattvārthavad alpaṁ cha tat tāmasam udāhṛitam",
"meaning": "ಯಾವುದು ಕೃತ್ಸ್ನವಾಗಿ ಒಂದು ಕಾರ್ಯದಲ್ಲಿ ಅಹೈತುಕವಾಗಿ (ಕಾರಣವಿಲ್ಲದೆ) ಆಸಕ್ತವಾಗಿ, ಅತತ್ತ್ವಾರ್ಥವಾಗಿ (ತತ್ತ್ವಾರ್ಥವಲ್ಲದೆ), ಅಲ್ಪವಾಗಿದೆಯೋ, ಅದು ತಾಮಸವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "18-23",
"chapter": 18,
"verse": 23,
"kannada": "ನಿಯತಂ ಸಂಗರಹಿತಮರಾಗದ್ವೇಷತಃ ಕೃತಮ್ | ಅಫಲಪ್ರೇಪ್ಸುನಾ ಕರ್ಮ ಯತ್ತತ್ಸಾತ್ತ್ವಿಕಮುಚ್ಯತೇ ||",
"transliteration": "niyataṁ saṅga-rahitam arāga-dveṣhataḥ kṛitam aphalaprepsunā karma yat tat sāttvikam uchyate",
"meaning": "ನಿಯತ, ಸಂಗರಹಿತ, ರಾಗದ್ವೇಷರಹಿತವಾಗಿ, ಅಫಲಪ್ರೇಪ್ಸುವಿನಿಂದ ಮಾಡಿದ ಕರ್ಮವು ಸಾತ್ತ್ವಿಕವೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "18-24",
"chapter": 18,
"verse": 24,
"kannada": "ಯತ್ತು ಕಾಮೇಪ್ಸುನಾ ಕರ್ಮ ಸಾಹಂಕಾರೇಣ ವಾ ಪುನಃ | ಕ್ರಿಯತೇ ಬಹುಲಾಯಾಸಂ ತದ್ರಾಜಸಮುದಾಹೃತಮ್ ||",
"transliteration": "yat tu kāmepsunā karma sāhankāreṇa vā punaḥ kriyate bahulāyāsaṁ tad rājasam udāhṛitam",
"meaning": "ಯಾವುದು ಕಾಮೇಪ್ಸುವಿನಿಂದ, ಸಾಹಂಕಾರದಿಂದ, ಬಹುಲಾಯಾಸವಾಗಿ ಮಾಡಲ್ಪಡುತ್ತದೆಯೋ, ಅದು ರಾಜಸವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "18-25",
"chapter": 18,
"verse": 25,
"kannada": "ಅನುಬನ್ಧಂ ಕ್ಷಯಂ ಹಿಂಸಾಮನಪೇಕ್ಷ್ಯ ಚ ಪೌರುಷಮ್ | ಮೋಹಾದಾರಭ್ಯತೇ ಕರ್ಮ ಯತ್ತತ್ತಾಮಸಮುಚ್ಯತೇ ||",
"transliteration": "anubandhaṁ kṣhayaṁ hiṁsām anapekṣhya cha pauruṣham mohād ārabhyate karma yat tat tāmasam uchyate",
"meaning": "ಯಾವುದು ಅನುಬಂಧ (ಬಂಧನ), ಕ್ಷಯ, ಹಿಂಸೆ, ಪೌರುಷವನ್ನು ಅನಪೇಕ್ಷಿಸಿ, ಮೋಹದಿಂದ ಪ್ರಾರಂಭಿಸಲ್ಪಡುತ್ತದೆಯೋ, ಅದು ತಾಮಸವೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "18-26",
"chapter": 18,
"verse": 26,
"kannada": "ಮುಕ್ತಸಂಗೋಽನಹಂವಾದೀ ಧೃತ್ಯುತ್ಸಾಹಸಮನ್ವಿತಃ | ಸಿದ್ಧ್ಯಸಿದ್ಧ್ಯೋರ್ನಿರ್ವಿಕಾರಃ ಕರ್ತಾ ಸಾತ್ತ್ವಿಕ ಉಚ್ಯತೇ ||",
"transliteration": "mukta-saṅgo 'naham-vādī dhṛity-utsāha-samanvitaḥ siddhy-asiddhyor nirvikāraḥ kartā sāttvika uchyate",
"meaning": "ಮುಕ್ತಸಂಗ, ಅನಹಂವಾದಿ, ಧೃತಿ-ಉತ್ಸಾಹಸಮನ್ವಿತ, ಸಿದ್ಧಿ-ಅಸಿದ್ಧಿಗಳಲ್ಲಿ ನಿರ್ವಿಕಾರ ಕರ್ತನು ಸಾತ್ತ್ವಿಕನೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "18-27",
"chapter": 18,
"verse": 27,
"kannada": "ರಾಗೀ ಕರ್ಮಫಲಪ್ರೇಪ್ಸುರ್ಲುಬ್ಧೋ ಹಿಂಸಾತ್ಮಕೋಽಶುಚಿಃ | ಹರ್ಷಶೋಕಾನ್ವಿತಃ ಕರ್ತಾ ರಾಜಸಃ ಪರಿಕೀರ್ತಿತಃ ||",
"transliteration": "rāgī karma-phala-prepsur lubdho hiṁsātmako 'śhuchiḥ harṣha-śhokānvitaḥ kartā rājasaḥ parikīrtitaḥ",
"meaning": "ರಾಗಿ, ಕರ್ಮಫಲಪ್ರೇಪ್ಸು, ಲುಬ್ಧ, ಹಿಂಸಾತ್ಮಕ, ಅಶುಚಿ, ಹರ್ಷ-ಶೋಕಾನ್ವಿತ ಕರ್ತನು ರಾಜಸನೆಂದು ಪರಿಕೀರ್ತಿತನಾಗಿದ್ದಾನೆ."
},
{
"id": "18-28",
"chapter": 18,
"verse": 28,
"kannada": "ಅಯುಕ್ತಃ ಪ್ರಾಕೃತಃ ಸ್ತಬ್ಧಃ ಶಠೋ ನೈಷ್ಕೃತಿಕೋಽಲಸಃ | ವಿಷಾದೀ ದೀರ್ಘಸೂತ್ರೀ ಚ ಕರ್ತಾ ತಾಮಸ ಉಚ್ಯತೇ ||",
"transliteration": "ayuktaḥ prākṛitaḥ stabdhaḥ śhaṭho naiṣhkṛitiko 'lasaḥ viṣhādī dīrgha-sūtrī cha kartā tāmasa uchyate",
"meaning": "ಅಯುಕ್ತ, ಪ್ರಾಕೃತ, ಸ್ತಬ್ಧ, ಶಠ, ನೈಷ್ಕೃತಿಕ, ಅಲಸ, ವಿಷಾದಿ, ದೀರ್ಘಸೂತ್ರೀ ಕರ್ತನು ತಾಮಸನೆಂದು ಹೇಳಲಾಗುತ್ತದೆ."
},
{
"id": "18-29",
"chapter": 18,
"verse": 29,
"kannada": "ಬುದ್ಧೇರ್ಭೇದಂ ಧೃತೇಶ್ಚೈವ ಗುಣತಸ್ತ್ರಿವಿಧಂ ಶೃಣು | ಪ್ರೋಚ್ಯಮಾನಮಶೇಷೇಣ ಪೃಥಕ್ತ್ವೇನ ಧನಂಜಯ ||",
"transliteration": "buddher bhedaṁ dhṛiteśh chaiva guṇatas tri-vidhaṁ śhṛiṇu prochyamānam aśheṣheṇa pṛithaktvena dhanañjaya",
"meaning": "ಹೇ ಧನಂಜಯ, ಬುದ್ಧಿ ಮತ್ತು ಧೃತಿಯ ಭೇದವನ್ನು ಗುಣಗಳಿಂದ ಮೂರು ವಿಧವಾಗಿ, ಪ್ರೋಚ್ಯಮಾನವಾಗಿ, ಅಶೇಷೇಣ, ಪೃಥಕ್ತ್ವೇನ ಕೇಳು."
},
{
"id": "18-30",
"chapter": 18,
"verse": 30,
"kannada": "ಪ್ರವೃತ್ತಿಂ ಚ ನಿವೃತ್ತಿಂ ಚ ಕಾರ್ಯಾಕಾರ್ಯೇ ಭಯಾಭಯೇ | ಬನ್ಧಂ ಮೋಕ್ಷಂ ಚ ಯಾ ವೇತ್ತಿ ಬುದ್ಧಿಃ ಸಾ ಪಾರ್ಥ ಸಾತ್ತ್ವಿಕೀ ||",
"transliteration": "pravṛittiṁ cha nivṛittiṁ cha kāryākārye bhayābhaye bandhaṁ mokṣhaṁ cha yā vetti buddhiḥ sā pārtha sāttvikī",
"meaning": "ಹೇ ಪಾರ್ಥ, ಪ್ರವೃತ್ತಿ-ನಿವೃತ್ತಿ, ಕಾರ್ಯ-ಅಕಾರ್ಯ, ಭಯ-ಅಭಯ, ಬಂಧ-ಮೋಕ್ಷಗಳನ್ನು ಯಾವುದು ತಿಳಿಯುತ್ತದೆಯೋ, ಆ ಬುದ್ಧಿಯು ಸಾತ್ತ್ವಿಕೀ."
},
{
"id": "18-31",
"chapter": 18,
"verse": 31,
"kannada": "ಯಯಾ ಧರ್ಮಮಧರ್ಮಂ ಚ ಕಾರ್ಯಂ ಚಾಕಾರ್ಯಮೇವ ಚ | ಅಯಥಾವತ್ಪ್ರಜಾನಾತಿ ಬುದ್ಧಿಃ ಸಾ ಪಾರ್ಥ ರಾಜಸೀ ||",
"transliteration": "yayā dharmam adharmaṁ cha kāryaṁ chākāryam eva cha ayathāvat prajānāti buddhiḥ sā pārtha rājasī",
"meaning": "ಹೇ ಪಾರ್ಥ, ಯಾವುದರಿಂದ ಧರ್ಮ-ಅಧರ್ಮ, ಕಾರ್ಯ-ಅಕಾರ್ಯಗಳನ್ನು ಅಯಥಾವತ್ ತಿಳಿಯುತ್ತದೆಯೋ, ಆ ಬುದ್ಧಿಯು ರಾಜಸೀ."
},
{
"id": "18-32",
"chapter": 18,
"verse": 32,
"kannada": "ಅಧರ್ಮಂ ಧರ್ಮಮಿತಿ ಯಾ ಮನ್ಯತೇ ತಮಸಾಽವೃತಾ | ಸರ್ವಾರ್ಥಾನ್ವಿಪರೀತಾಂಶ್ಚ ಬುದ್ಧಿಃ ಸಾ ಪಾರ್ಥ ತಾಮಸೀ ||",
"transliteration": "adharmaṁ dharmam iti yā manyate tamasāvṛitā sarvārthān viparītānśh cha buddhiḥ sā pārtha tāmasī",
"meaning": "ಹೇ ಪಾರ್ಥ, ಯಾವುದು ತಮಸ್ಸಿನಿಂದ ಆವೃತವಾಗಿ ಅಧರ್ಮವನ್ನು ಧರ್ಮವೆಂದು ಭಾವಿಸುತ್ತದೆಯೋ, ಸರ್ವಾರ್ಥಗಳನ್ನು ವಿಪರೀತವಾಗಿ ತಿಳಿಯುತ್ತದೆಯೋ, ಆ ಬುದ್ಧಿಯು ತಾಮಸೀ."
},
{
"id": "18-33",
"chapter": 18,
"verse": 33,
"kannada": "ಧೃತ್ಯಾ ಯಯಾ ಧಾರಯತೇ ಮನಃಪ್ರಾಣೇಂದ್ರಿಯಕ್ರಿಯಾಃ | ಯೋಗೇನಾವ್ಯಭಿಚಾರಿಣ್ಯಾ ಧೃತಿಃ ಸಾ ಪಾರ್ಥ ಸಾತ್ತ್ವಿಕೀ ||",
"transliteration": "dhṛityā yayā dhārayate manaḥ-prāṇendriya-kriyāḥ yogenāvyabhichāriṇyā dhṛitiḥ sā pārtha sāttvikī",
"meaning": "ಹೇ ಪಾರ್ಥ, ಯಾವ ಧೃತಿಯಿಂದ ಮನಃ-ಪ್ರಾಣ-ಇಂದ್ರಿಯ ಕ್ರಿಯೆಗಳನ್ನು ಅವ್ಯಭಿಚಾರಿ ಯೋಗದಿಂದ ಧಾರಯತೇ (ಧರಿಸಲ್ಪಡುತ್ತದೆಯೋ), ಆ ಧೃತಿಯು ಸಾತ್ತ್ವಿಕೀ."
},
{
"id": "18-34",
"chapter": 18,
"verse": 34,
"kannada": "ಯಯಾ ತು ಧರ್ಮಕಾಮಾರ್ಥಾನ್ಧೃತ್ಯಾ ಧಾರಯತೇಽರ್ಜುನ | ಪ್ರಸಂಗೇನ ಫಲಾಕಾಂಕ್ಷೀ ಧೃತಿಃ ಸಾ ಪಾರ್ಥ ರಾಜಸೀ ||",
"transliteration": "yayā tu dharma-kāmārthān dhṛityā dhārayate 'rjuna prasaṅgena phalākāṅkṣhī dhṛitiḥ sā pārtha rājasī",
"meaning": "ಹೇ ಪಾರ್ಥ, ಯಾವುದರಿಂದ ಧರ್ಮ-ಕಾಮ-ಅರ್ಥಗಳನ್ನು ಪ್ರಸಂಗದಿಂದ, ಫಲಾಕಾಂಕ್ಷಿಯಾಗಿ ಧಾರಯತೇ (ಧರಿಸುತ್ತಾನೆಯೋ), ಆ ಧೃತಿಯು ರಾಜಸೀ."
},
{
"id": "18-35",
"chapter": 18,
"verse": 35,
"kannada": "ಯಯಾ ಸ್ವಪ್ನಂ ಭಯಂ ಶೋಕಂ ವಿಷಾದಂ ಮದಮೇವ ಚ | ನ ವಿಮುಂಚತಿ ದುರ್ಮೇಧಾ ಧೃತಿಃ ಸಾ ಪಾರ್ಥ ತಾಮಸೀ ||",
"transliteration": "yayā svapnaṁ bhayaṁ śhokaṁ viṣādaṁ madam eva cha na vimuñchati durmedhā dhṛitiḥ sā pārtha tāmasī",
"meaning": "ಹೇ ಪಾರ್ಥ, ಯಾವುದರಿಂದ ಸ್ವಪ್ನ, ಭಯ, ಶೋಕ, ವಿಷಾದ, ಮದಗಳನ್ನು ದುರ್ಮೇಧ (ದುರ್ಬುದ್ಧಿ)ನು ವಿಮುಂಚತಿ (ಬಿಡುವುದಿಲ್ಲವೋ), ಆ ಧೃತಿಯು ತಾಮಸೀ."
},
{
"id": "18-36",
"chapter": 18,
"verse": 36,
"kannada": "ಸುಖಂ ತ್ವಿದಾನೀಂ ತ್ರಿವಿಧಂ ಶೃಣು ಮೇ ಭರತರ್ಷಭ | ಅಭ್ಯಾಸಾದ್ರಮತೇ ಯತ್ರ ದುಃಖಾನ್ತಂ ಚ ನಿಗಚ್ಛತಿ ||",
"transliteration": "sukhaṁ tv idānīṁ tri-vidhaṁ śhṛiṇu me bharatarṣhabha abhyāsād ramate yatra duḥkhāntaṁ cha nigachchhati",
"meaning": "ಹೇ ಭರತರ್ಷಭ, ಈಗ ಮೂರು ವಿಧದ ಸುಖವನ್ನು ನನ್ನಿಂದ ಕೇಳು. ಅಭ್ಯಾಸದಿಂದ ರಮಿಸುವ, ದುಃಖಾಂತವನ್ನು ಪಡೆಯುವ."
},
{
"id": "18-37",
"chapter": 18,
"verse": 37,
"kannada": "ಯತ್ತದಗ್ರೇ ವಿಷಮಿವ ಪರಿಣಾಮೇಽಮೃತೋಪಮಮ್ | ತತ್ಸುಖಂ ಸಾತ್ತ್ವಿಕಂ ಪ್ರೋಕ್ತಮಾತ್ಮಬುದ್ಧಿಪ್ರಸಾದಜಮ್ ||",
"transliteration": "yat tad agre viṣham iva pariṇāme 'mṛitopamam tat sukhaṁ sāttvikaṁ proktam ātma-buddhi-prasādajam",
"meaning": "ಯಾವುದು ಆದಿಯಲ್ಲಿ ವಿಷದಂತೆ, ಪರಿಣಾಮದಲ್ಲಿ ಅಮೃತೋಪಮವಾಗಿರುತ್ತದೆಯೋ, ಆ ಸುಖವು ಸಾತ್ತ್ವಿಕವೆಂದು ಹೇಳಲಾಗಿದೆ. ಇದು ಆತ್ಮಬುದ್ಧಿ ಪ್ರಸಾದದಿಂದ ಜನಿಸಿದ್ದು."
},
{
"id": "18-38",
"chapter": 18,
"verse": 38,
"kannada": "ವಿಷಯೇಂದ್ರಿಯಸಂಯೋಗಾದ್ಯತ್ತದಗ್ರೇಽಮೃತೋಪಮಮ್ | ಪರಿಣಾಮೇ ವಿಷಮಿವ ತತ್ಸುಖಂ ರಾಜಸಂ ಸ್ಮೃತಮ್ ||",
"transliteration": "viṣhayendriya-saṁyogād yat tad agre 'mṛitopamam pariṇāme viṣham iva tat sukhaṁ rājasaṁ smṛitam",
"meaning": "ವಿಷಯೇಂದ್ರಿಯ ಸಂಯೋಗದಿಂದ ಯಾವುದು ಆದಿಯಲ್ಲಿ ಅಮೃತೋಪಮ, ಪರಿಣಾಮದಲ್ಲಿ ವಿಷದಂತಿರುತ್ತದೆಯೋ, ಆ ಸುಖವು ರಾಜಸವೆಂದು ಸ್ಮೃತ."
},
{
"id": "18-39",
"chapter": 18,
"verse": 39,
"kannada": "ಯದಗ್ರೇ ಚಾನುಬನ್ಧೇ ಚ ಸುಖಂ ಮೋಹನಮಾತ್ಮನಃ | ನಿದ್ರಾಲಸ್ಯಪ್ರಮಾದೋತ್ಥಂ ತತ್ತಾಮಸಮುದಾಹೃತಮ್ ||",
"transliteration": "yad agre chānubandhe cha sukhaṁ mohanam ātmanaḥ nidrālasya-pramādotthaṁ tat tāmasam udāhṛitam",
"meaning": "ಯಾವುದು ಆದಿಯಲ್ಲಿ, ಅನುಬಂಧದಲ್ಲಿಯೂ ಸುಖವಾಗಿ, ಆತ್ಮನನ್ನು ಮೋಹಿಸುವ, ನಿದ್ರೆ-ಆಲಸ್ಯ-ಪ್ರಮಾದಗಳಿಂದ ಉತ್ಥವಾಗಿರುತ್ತದೆಯೋ, ಅದು ತಾಮಸವೆಂದು ಹೇಳಲಾಗಿದೆ."
},
{
"id": "18-40",
"chapter": 18,
"verse": 40,
"kannada": "ನ ತದಸ್ತಿ ಪೃಥಿವ್ಯಾಂ ವಾ ದಿವಿ ದೇವೇಷು ವಾ ಪುನಃ | ಸತ್ತ್ವಂ ಪ್ರಕೃತಿಜೈರ್ಮುಕ್ತಂ ಯದೇಭಿಃ ಸ್ಯಾತ್ತ್ರಿಭಿರ್ಗುಣೈಃ ||",
"transliteration": "na tad asti pṛithivyāṁ vā divi deveṣhu vā punaḥ sattvaṁ prakṛiti-jair muktaṁ yad ebhiḥ syāt tribhir guṇaiḥ",
"meaning": "ಭೂಮಿಯಲ್ಲಿ, ಸ್ವರ್ಗದಲ್ಲಿ, ದೇವತೆಗಳಲ್ಲಿ ಯಾವ ಸತ್ತ್ವವೂ ಪ್ರಕೃತಿಜ ಗುಣಗಳಿಂದ ಮುಕ್ತವಾಗಿ ಇರುವುದಿಲ್ಲ."
},
{
"id": "18-41",
"chapter": 18,
"verse": 41,
"kannada": "ಬ್ರಾಹ್ಮಣಕ್ಷತ್ರಿಯವಿಶಾಂ ಶೂದ್ರಾಣಾಂ ಚ ಪರಂತಪ | ಕರ್ಮಾಣಿ ಪ್ರವಿಭಕ್ತಾನಿ ಸ್ವಭಾವಪ್ರಭವೈರ್ಗುಣೈಃ ||",
"transliteration": "brāhmaṇa-kṣhatriya-viśhāṁ śhūdrāṇāṁ cha parantapa karmāṇi pravibhaktāni sva-bhāva-prabhavair guṇaiḥ",
"meaning": "ಹೇ ಪರಂತಪ, ಬ್ರಾಹ್ಮಣ, ಕ್ಷತ್ರಿಯ, ವೈಶ್ಯ, ಶೂದ್ರರ ಕರ್ಮಗಳು ಸ್ವಭಾವಪ್ರಭವ ಗುಣಗಳಿಂದ ಪ್ರವಿಭಕ್ತವಾಗಿವೆ."
},
{
"id": "18-42",
"chapter": 18,
"verse": 42,
"kannada": "ಶಮೋ ದಮಸ್ತಪಃ ಶೌಚಂ ಕ್ಷಾನ್ತಿರಾರ್ಜವಮೇವ ಚ | ಜ್ಞಾನಂ ವಿಜ್ಞಾನಮಾಸ್ತಿಕ್ಯಂ ಬ್ರಹ್ಮಕರ್ಮ ಸ್ವಭಾವಜಮ್ ||",
"transliteration": "śhamo damas tapaḥ śhauchaṁ kṣhāntir ārjavam eva cha jñānaṁ vijñānam āstikyaṁ brahma-karma sva-bhāva-jam",
"meaning": "ಶಮ, ದಮ, ತಪಃ, ಶೌಚ, ಕ್ಷಾಂತಿ, ಆರ್ಜವ, ಜ್ಞಾನ, ವಿಜ್ಞಾನ, ಆಸ್ತಿಕ್ಯ - ಇವು ಬ್ರಹ್ಮನ ಸ್ವಭಾವಜ ಕರ್ಮ."
},
{
"id": "18-43",
"chapter": 18,
"verse": 43,
"kannada": "ಶೌರ್ಯಂ ತೇಜೋ ಧೃತಿರ್ದಾಕ್ಷ್ಯಂ ಯುದ್ಧೇ ಚಾಪ್ಯಪಲಾಯನಮ್ | ದಾನಮೀಶ್ವರಭಾವಶ್ಚ ಕ್ಷಾತ್ರಂ ಕರ್ಮ ಸ್ವಭಾವಜಮ್ ||",
"transliteration": "śhauryaṁ tejo dhṛitir dākṣhyaṁ yuddhe chāpy apalāyanam dānam īśhvara-bhāvaśh cha kṣhātraṁ karma sva-bhāva-jam",
"meaning": "ಶೌರ್ಯ, ತೇಜಸ್ಸು, ಧೃತಿ, ದಾಕ್ಷ್ಯ, ಯುದ್ಧದಲ್ಲಿ ಅಪಲಾಯನ (ಹಿಮ್ಮೆಟ್ಟದಿರುವಿಕೆ), ದಾನ, ಈಶ್ವರಭಾವ - ಇವು ಕ್ಷತ್ರಿಯರ ಸ್ವಭಾವಜ ಕರ್ಮ."
},
{
"id": "18-44",
"chapter": 18,
"verse": 44,
"kannada": "ಕೃಷಿಗೌರಕ್ಷ್ಯವಾಣಿಜ್ಯಂ ವೈಶ್ಯಕರ್ಮ ಸ್ವಭಾವಜಮ್ | ಪರಿಚರ್ಯಾತ್ಮಕಂ ಕರ್ಮ ಶೂದ್ರಸ್ಯಾಪಿ ಸ್ವಭಾವಜಮ್ ||",
"transliteration": "kṛiṣhi-gau-rakṣhya-vāṇijyaṁ vaiśhya-karma sva-bhāva-jam paricharyātma-kaṁ karma śhūdrasyāpi sva-bhāva-jam",
"meaning": "ಕೃಷಿ, ಗೋರಕ್ಷಣೆ, ವಾಣಿಜ್ಯ - ಇವು ವೈಶ್ಯರ ಸ್ವಭಾವಜ ಕರ್ಮ. ಪರಿಚರ್ಯಾತ್ಮಕ ಕರ್ಮವು ಶೂದ್ರರ ಸ್ವಭಾವಜ ಕರ್ಮ."
},
{
"id": "18-45",
"chapter": 18,
"verse": 45,
"kannada": "ಸ್ವೇ ಸ್ವೇ ಕರ್ಮಣ್ಯಭಿರತಃ ಸಂಸಿದ್ಧಿಂ ಲಭತೇ ನರಃ | ಸ್ವಕರ್ಮನಿರತಃ ಸಿದ್ಧಿಂ ಯಥಾ ವಿನ್ದತಿ ತಚ್ಛೃಣು ||",
"transliteration": "sve sve karmaṇy abhirataḥ sansiddhiṁ labhate naraḥ sva-karma-nirataḥ siddhiṁ yathā vindati tach chhṛiṇu",
"meaning": "ತನ್ನ ತನ್ನ ಕರ್ಮದಲ್ಲಿ ಅಭಿರತನಾದ ಮನುಷ್ಯನು ಸಂಸಿದ್ಧಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಸ್ವಕರ್ಮನಿರತನು ಸಿದ್ಧಿಯನ್ನು ಹೇಗೆ ಪಡೆಯುತ್ತಾನೆಂದು ಕೇಳು."
},
{
"id": "18-46",
"chapter": 18,
"verse": 46,
"kannada": "ಯತಃ ಪ್ರವೃತ್ತಿರ್ಭೂತಾನಾಂ ಯೇನ ಸರ್ವಮಿದಂ ತತಮ್ | ಸ್ವಕರ್ಮಣಾ ತಮಭ್ಯರ್ಚ್ಯ ಸಿದ್ಧಿಂ ವಿನ್ದತಿ ಮಾನವಃ ||",
"transliteration": "yataḥ pravṛittir bhūtānāṁ yena sarvam idaṁ tatam sva-karmaṇā tam abhyarchya siddhiṁ vindati mānavaḥ",
"meaning": "ಯಾವನಿಂದ ಭೂತಗಳ ಪ್ರವೃತ್ತಿ, ಯಾವನಿಂದ ಈ ಸರ್ವವು ವ್ಯಾಪ್ತವಾಗಿದೆಯೋ, ಆತನನ್ನು ಸ್ವಕರ್ಮದಿಂದ ಅರ್ಚಿಸಿ ಮನುಷ್ಯನು ಸಿದ್ಧಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "18-47",
"chapter": 18,
"verse": 47,
"kannada": "ಶ್ರೇಯಾನ್ಸ್ವಧರ್ಮೋ ವಿಗುಣಃ ಪರಧರ್ಮಾತ್ಸ್ವನುಷ್ಠಿತಾತ್ | ಸ್ವಭಾವನಿಯತಂ ಕರ್ಮ ಕುರ್ವನ್ನಾಪ್ನೋತಿ ಕಿಲ್ಬಿಷಮ್ ||",
"transliteration": "śhreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣhṭhitāt sva-bhāva-niyataṁ karma kurvann āpnoti kilbiṣham",
"meaning": "ಸುಅನುಷ್ಠಿತ ಪರಧರ್ಮಕ್ಕಿಂತ ವಿಗುಣ ಸ್ವಧರ್ಮ ಶ್ರೇಯಸ್ಕರ. ಸ್ವಭಾವನಿಯತ ಕರ್ಮವನ್ನು ಮಾಡುವವನು ಕಿಲ್ಬಿಷ (ಪಾಪ)ವನ್ನು ಪಡೆಯುವುದಿಲ್ಲ."
},
{
"id": "18-48",
"chapter": 18,
"verse": 48,
"kannada": "ಸಹಜಂ ಕರ್ಮ ಕೌಂತೇಯ ಸದೋಷಮಪಿ ನ ತ್ಯಜೇತ್ | ಸರ್ವಾರಂಭಾ ಹಿ ದೋಷೇಣ ಧೂಮೇನಾಗ್ನಿರಿವಾವೃತಾಃ ||",
"transliteration": "sahajaṁ karma kaunteya sadoṣham api na tyajet sarvārambhā hi doṣheṇa dhūmenāgnir ivāvṛitāḥ",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಸಹಜ ಕರ್ಮವು ಸದೋಷವಾಗಿದ್ದರೂ ತ್ಯಜಿಸಬಾರದು. ಸರ್ವಾರಂಭಗಳು ದೋಷದಿಂದ ಧೂಮದಿಂದ ಅಗ್ನಿ ಆವೃತವಾದಂತೆ."
},
{
"id": "18-49",
"chapter": 18,
"verse": 49,
"kannada": "ಅಸಕ್ತಬುದ್ಧಿಃ ಸರ್ವತ್ರ ಜಿತಾತ್ಮಾ ವಿಗತಸ್ಪೃಹಃ | ನೈಷ್ಕರ್ಮ್ಯಸಿದ್ಧಿಂ ಪರಮಾಂ ಸಂನ್ಯಾಸೇನಾಧಿಗಚ್ಛತಿ ||",
"transliteration": "asakta-buddhiḥ sarvatra jitātmā vigata-spṛihaḥ naiṣhkarmya-siddhiṁ paramāṁ sannyāsenādhigachchhati",
"meaning": "ಅಸಕ್ತಬುದ್ಧಿಯುಳ್ಳವನು, ಸರ್ವತ್ರ ಜಿತಾತ್ಮನು, ವಿಗತಸ್ಪೃಹನು ಸಂನ್ಯಾಸದಿಂದ ನೈಷ್ಕರ್ಮ್ಯಸಿದ್ಧಿಯನ್ನು ಪರಮವಾಗಿ ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "18-50",
"chapter": 18,
"verse": 50,
"kannada": "ಸಿದ್ಧಿಂ ಪ್ರಾಪ್ತೋ ಯಥಾ ಬ್ರಹ್ಮ ತಥಾಪ್ನೋತಿ ನಿಬೋಧ ಮೇ | ಸಮಾಸೇನೈವ ಕೌಂತೇಯ ನಿಷ್ಠಾ ಜ್ಞಾಸ್ಯ ಸ್ವಿದಾ ಮಮ ||",
"transliteration": "siddhiṁ prāpto yathā brahma tathāpnoti nibodha me samāsenaiva kaunteya niṣhṭhā jñāsya svidā mama",
"meaning": "ಸಿದ್ಧಿಯನ್ನು ಪಡೆದವನು ಬ್ರಹ್ಮವನ್ನು ಹೇಗೆ ಪಡೆಯುತ್ತಾನೆಂದು ನನ್ನಿಂದ ತಿಳಿ. ಹೇ ಕೌಂತೇಯ, ಸಮಾಸೇನ (ಸಂಕ್ಷೇಪವಾಗಿ) ನನ್ನ ನಿಷ್ಠೆಯನ್ನು ತಿಳಿಯುವೆಯಾ?"
},
{
"id": "18-51",
"chapter": 18,
"verse": 51,
"kannada": "ಬುದ್ಧ್ಯಾ ವಿಶುದ್ಧಯಾ ಯುಕ್ತೋ ಧೃತ್ಯಾತ್ಮಾನಂ ನಿಯಮ್ಯ ಚ | ಶಬ್ದಾದೀನ್ವಿಷಯಾಂಸ್ತ್ಯಕ್ತ್ವಾ ರಾಗದ್ವೇಷೌ ವ್ಯುದಸ್ಯ ಚ ||",
"transliteration": "buddhyā viśhuddhayā yukto dhṛityātmānaṁ niyamya cha śhabdādīn viṣhayāns tyaktvā rāga-dveṣhau vyudasya cha",
"meaning": "ವಿಶುದ್ಧ ಬುದ್ಧಿಯಿಂದ ಯುಕ್ತನಾಗಿ, ಧೃತಿಯಿಂದ ಆತ್ಮನನ್ನು ನಿಯಮಿಸಿ, ಶಬ್ದಾದಿ ವಿಷಯಗಳನ್ನು ತ್ಯಜಿಸಿ, ರಾಗ-ದ್ವೇಷಗಳನ್ನು ವ್ಯುದಸ್ಯ (ದೂರ ಮಾಡಿ)."
},
{
"id": "18-52",
"chapter": 18,
"verse": 52,
"kannada": "ವಿವಿಕ್ತಸೇವೀ ಲಘ್ವಾಶೀ ಯತವಾಕ್ಕಾಯಮಾನಸಃ | ಧ್ಯಾನಯೋಗಪರೋ ನಿತ್ಯಂ ವೈರಾಗ್ಯಂ ಸಮುಪಾಶ್ರಿತಃ ||",
"transliteration": "vivikta-sevī laghv-āśhī yata-vāk-kāya-mānasaḥ dhyāna-yoga-paro nityaṁ vairāgyaṁ samupāśhritaḥ",
"meaning": "ವಿವಿಕ್ತಸೇವಿ, ಲಘ್ವಾಶೀ, ಯತವಾಕ್ಕಾಯಮಾನಸ, ಧ್ಯಾನಯೋಗಪರ, ನಿತ್ಯ ವೈರಾಗ್ಯವನ್ನು ಉಪಾಶ್ರಿತನಾದವನು."
},
{
"id": "18-53",
"chapter": 18,
"verse": 53,
"kannada": "ಅಹಂಕಾರಂ ಬಲಂ ದರ್ಪಂ ಕಾಮಂ ಕ್ರೋಧಂ ಪರಿಗ್ರಹಮ್ | ವಿಮುಚ್ಯ ನಿರ್ಮಮಃ ಶಾನ್ತೋ ಬ್ರಹ್ಮಭೂಯಾಯ ಕಲ್ಪತೇ ||",
"transliteration": "ahankāraṁ balaṁ darpaṁ kāmaṁ krodhaṁ parigraham vimuchya nirmamaḥ śhānto brahma-bhūyāya kalpate",
"meaning": "ಅಹಂಕಾರ, ಬಲ, ದರ್ಪ, ಕಾಮ, ಕ್ರೋಧ, ಪರಿಗ್ರಹಗಳನ್ನು ವಿಮುಚ್ಯ, ನಿರ್ಮಮ, ಶಾಂತನಾದವನು ಬ್ರಹ್ಮಭೂಯಾಯ (ಬ್ರಹ್ಮನಾಗಲು) ಕಲ್ಪತೇ (ಯೋಗ್ಯನಾಗುತ್ತಾನೆ)."
},
{
"id": "18-54",
"chapter": 18,
"verse": 54,
"kannada": "ಬ್ರಹ್ಮಭೂತಃ ಪ್ರಸನ್ನಾತ್ಮಾ ನ ಶೋಚತಿ ನ ಕಾಂಕ್ಷತಿ | ಸಮಃ ಸರ್ವೇಷು ಭೂತೇಷು ಮದ್ಭಕ್ತಿಂ ಲಭತೇ ಪರಾಮ್ ||",
"transliteration": "brahma-bhūtaḥ prasannātmā na śhochati na kāṅkṣhati samaḥ sarveṣhu bhūteṣhu mad-bhaktiṁ labhate parām",
"meaning": "ಬ್ರಹ್ಮಭೂತನಾದವನು ಪ್ರಸನ್ನಾತ್ಮನಾಗಿ, ಶೋಚಿಸುವುದಿಲ್ಲ, ಕಾಂಕ್ಷಿಸುವುದಿಲ್ಲ, ಸರ್ವಭೂತಗಳಲ್ಲಿ ಸಮನಾಗಿ ನನ್ನ ಪರಮ ಭಕ್ತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "18-55",
"chapter": 18,
"verse": 55,
"kannada": "ಭಕ್ತ್ಯಾ ಮಾಮಭಿಜಾನಾತಿ ಯಾವಾನ್ಯಶ್ಚಾಸ್ಮಿ ತತ್ತ್ವತಃ | ತತೋ ಮಾಂ ತತ್ತ್ವತೋ ಜ್ಞಾತ್ವಾ ವಿಶತೇ ತದನನ್ತರಮ್ ||",
"transliteration": "bhaktyā mām abhijānāti yāvān yaśh chāsmi tattvataḥ tato māṁ tattvato jñātvā viśhate tad-anantaram",
"meaning": "ಭಕ್ತಿಯಿಂದ ನನ್ನನ್ನು ಯಾವನು ತತ್ತ್ವತಃ ತಿಳಿಯುತ್ತಾನೆಯೋ, ನಾನು ಯಾವನು, ಎಂತವನು ಎಂದು, ಆಮೇಲೆ ನನ್ನನ್ನು ತತ್ತ್ವತಃ ತಿಳಿದು, ತದನಂತರ ನನ್ನನ್ನು ಪ್ರವೇಶಿಸುತ್ತಾನೆ."
},
{
"id": "18-56",
"chapter": 18,
"verse": 56,
"kannada": "ಸರ್ವಕರ್ಮಾಣ್ಯಪಿ ಸದಾ ಕುರ್ವಾಣೋ ಮದ್ವ್ಯಪಾಶ್ರಯಃ | ಮತ್ಪ್ರಸಾದಾದವಾಪ್ನೋತಿ ಶಾಶ್ವತಂ ಪದಮವ್ಯಯಮ್ ||",
"transliteration": "sarva-karmāṇy api sadā kurvāṇo mad-vyapāśhrayaḥ mat-prasādād avāpnoti śhāśhvataṁ padam avyayam",
"meaning": "ಸರ್ವ ಕರ್ಮಗಳನ್ನು ಸದಾ ಮಾಡುತ್ತಾ, ಮದ್ವ್ಯಪಾಶ್ರಯನಾದವನು ನನ್ನ ಪ್ರಸಾದದಿಂದ ಶಾಶ್ವತ, ಅವ್ಯಯ ಪದವನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "18-57",
"chapter": 18,
"verse": 57,
"kannada": "ಚೇತಸಾ ಸರ್ವಕರ್ಮಾಣಿ ಮಯಿ ಸಂನ್ಯಸ್ಯ ಮತ್ಪರಃ | ಬುದ್ಧಿಯೋಗಮುಪಾಶ್ರಿತ್ಯ ಮಚ್ಚಿತ್ತಃ ಸತತಂ ಭವ ||",
"transliteration": "chetasā sarva-karmāṇi mayi sannyasya mat-paraḥ buddhi-yogam upāśhritya mach-chittaḥ satataṁ bhava",
"meaning": "ಸರ್ವ ಕರ್ಮಗಳನ್ನು ಚಿತ್ತದಿಂದ ನನ್ನಲ್ಲಿ ಸಂನ್ಯಸ್ಯ, ಮತ್ಪರನಾಗಿ, ಬುದ್ಧಿಯೋಗವನ್ನು ಉಪಾಶ್ರಯಿಸಿ, ಮಚ್ಚಿತ್ತನಾಗಿ, ಸತತಂ ಇರು."
},
{
"id": "18-58",
"chapter": 18,
"verse": 58,
"kannada": "ಮಚ್ಚಿತ್ತಃ ಸರ್ವದುರ್ಗಾಣಿ ಮತ್ಪ್ರಸಾದಾತ್ತರಿಷ್ಯಸಿ | ಅಥ ಚೇತ್ತ್ವಮಹಂಕಾರಾನ್ನ ಶ್ರೋಷ್ಯಸಿ ವಿನಙ್ಕ್ಷ್ಯಸಿ ||",
"transliteration": "mach-chittaḥ sarva-durgāṇi mat-prasādāt tariṣhyasi atha chet tvam ahankārān na śhroṣhyasi vinaṅkṣhyasi",
"meaning": "ಮಚ್ಚಿತ್ತನಾಗಿದ್ದರೆ, ಸರ್ವ ದುರ್ಗಗಳನ್ನು (ಕಷ್ಟಗಳನ್ನು) ನನ್ನ ಪ್ರಸಾದದಿಂದ ದಾಟುವೆ. ಆದರೆ ಅಹಂಕಾರದಿಂದ ಕೇಳದಿದ್ದರೆ ನಾಶವಾಗುವೆ."
},
{
"id": "18-59",
"chapter": 18,
"verse": 59,
"kannada": "ಯದಹಂಕಾರಮಾಶ್ರಿತ್ಯ ನ ಯೋತ್ಸ್ಯ ಇತಿ ಮನ್ಯಸೇ | ಮಿಥ್ಯೈಷ ವ್ಯವಸಾಯಸ್ತೇ ಪ್ರಕೃತಿಸ್ತ್ವಾಂ ನಿಯೋಕ್ಷ್ಯತಿ ||",
"transliteration": "yad ahankāram āśhritya na yotsya iti manyase mithyaiṣha vyavasāyas te prakṛitis tvāṁ niyokṣhyati",
"meaning": "'ಅಹಂಕಾರವನ್ನು ಆಶ್ರಯಿಸಿ ನಾನು ಯುದ್ಧ ಮಾಡುವುದಿಲ್ಲ' ಎಂದು ಭಾವಿಸಿದರೆ, ನಿನ್ನ ಈ ವ್ಯವಸಾಯವು ಮಿಥ್ಯ. ಪ್ರಕೃತಿಯು ನಿನ್ನನ್ನು ನಿಯೋಕ್ಷ್ಯತಿ (ಬಲವಂತ ಪಡಿಸುವುದು)."
},
{
"id": "18-60",
"chapter": 18,
"verse": 60,
"kannada": "ಸ್ವಭಾವಜೇನ ಕೌಂತೇಯ ನಿಬದ್ಧಃ ಸ್ವೇನ ಕರ್ಮಣಾ | ಕರ್ತುಂ ನೇಚ್ಛಸಿ ಯನ್ಮೋಹಾತ್ಕರಿಷ್ಯಸ್ಯವಶೋಽಪಿ ತತ್ ||",
"transliteration": "sva-bhāva-jena kaunteya nibaddhaḥ svena karmaṇā kartum nechchhasi yan mohāt kariṣhyasy avaśho 'pi tat",
"meaning": "ಹೇ ಕೌಂತೇಯ, ಸ್ವಭಾವಜ ಸ್ವಕರ್ಮದಿಂದ ಬದ್ಧನಾಗಿ, ಮೋಹದಿಂದ ಮಾಡಲು ಇಚ್ಛಿಸದಿದ್ದರೂ, ಅವಶನಾಗಿಯೇ ಅದನ್ನು ಮಾಡುವೆ."
},
{
"id": "18-61",
"chapter": 18,
"verse": 61,
"kannada": "ಈಶ್ವರಃ ಸರ್ವಭೂತಾನಾಂ ಹೃದ್ದೇಶೇಽರ್ಜುನ ತಿಷ್ಠತಿ | ಭ್ರಾಮಯನ್ಸರ್ವಭೂತಾನಿ ಯನ್ತ್ರಾರೂಢಾನಿ ಮಾಯಯಾ ||",
"transliteration": "īśhvaraḥ sarva-bhūtānāṁ hṛid-deśhe 'rjuna tiṣhṭhati bhrāmayan sarva-bhūtāni yantrārūḍhāni māyayā",
"meaning": "ಹೇ ಅರ್ಜುನ, ಈಶ್ವರನು ಸರ್ವಭೂತಗಳ ಹೃದಯದೇಶದಲ್ಲಿ ತಿಷ್ಠತಿ (ನೆಲೆಸಿರುತ್ತಾನೆ). ಮಾಯೆಯಿಂದ ಯಂತ್ರಾರೂಢವಾದ ಸರ್ವಭೂತಗಳನ್ನು ಭ್ರಾಮಯನ್ (ತಿರುಗಿಸುತ್ತಾನೆ)."
},
{
"id": "18-62",
"chapter": 18,
"verse": 62,
"kannada": "ತಮೇವ ಶರಣಂ ಗಚ್ಛ ಸರ್ವಭಾವೇನ ಭಾರತ | ತತ್ಪ್ರಸಾದಾತ್ಪರಾಂ ಶಾನ್ತಿಂ ಸ್ಥಾನಂ ಪ್ರಾಪ್ಸ್ಯಸಿ ಶಾಶ್ವತಮ್ ||",
"transliteration": "tam eva śharaṇaṁ gachchha sarva-bhāvena bhārata tat-prasādāt parāṁ śhāntiṁ sthānaṁ prāpsyasi śhāśhvatam",
"meaning": "ಹೇ ಭಾರತ, ಸರ್ವಭಾವದಿಂದ ಆತನೇ ಶರಣು ಹೋಗು. ಆತನ ಪ್ರಸಾದದಿಂದ ಪರಮ ಶಾಂತಿಯನ್ನು, ಶಾಶ್ವತ ಸ್ಥಾನವನ್ನು ಪಡೆಯುವೆ."
},
{
"id": "18-63",
"chapter": 18,
"verse": 63,
"kannada": "ಇತಿ ತೇ ಜ್ಞಾನಮಾಖ್ಯಾತಂ ಗುಹ್ಯಾದ್ಗುಹ್ಯತರಂ ಮಯಾ | ವಿಮೃಶ್ಯೈತದಶೇಷೇಣ ಯಥೇಚ್ಛಸಿ ತಥಾ ಕುರು ||",
"transliteration": "iti te jñānam ākhyātaṁ guhyād guhyataraṁ mayā vimṛiśhyaitad aśheṣheṇa yathechchhasi tathā kuru",
"meaning": "ಈ ರೀತಿ ಗುಹ್ಯದಿಂದ ಗುಹ್ಯತರವಾದ ಜ್ಞಾನವನ್ನು ನಿನಗೆ ನಾನು ಹೇಳಿದ್ದೇನೆ. ಇದನ್ನು ಅಶೇಷವಾಗಿ ವಿಮರ್ಶಿಸಿ, ಇಷ್ಟಬಂದಂತೆ ಮಾಡು."
},
{
"id": "18-64",
"chapter": 18,
"verse": 64,
"kannada": "ಸರ್ವಗುಹ್ಯತಮಂ ಭೂಯಃ ಶೃಣು ಮೇ ಪರಮಂ ವಚಃ | ಇಷ್ಟೋಽಸಿ ಮೇ ದೃಢಮಿತಿ ತತೋ ವಕ್ಷ್ಯಾಮಿ ತೇ ಹಿತಮ್ ||",
"transliteration": "sarva-guhyatamaṁ bhūyaḥ śhṛiṇu me paramaṁ vachaḥ iṣhṭo 'si me dṛiḍham iti tato vakṣhyāmi te hitam",
"meaning": "ಮತ್ತೆ ಸರ್ವಗುಹ್ಯತಮವಾದ ನನ್ನ ಪರಮ ವಚನವನ್ನು ಕೇಳು. ನೀನು ನನಗೆ ಅತಿ ಪ್ರಿಯನಾದ್ದರಿಂದ ನಿನಗೆ ಹಿತವನ್ನು ಹೇಳುತ್ತೇನೆ."
},
{
"id": "18-65",
"chapter": 18,
"verse": 65,
"kannada": "ಮನ್ನನಾ ಭವ ಮದ್ಭಕ್ತೋ ಮದ್ಯಾಜೀ ಮಾಂ ನಮಸ್ಕುರು | ಮಾಮೇವೈಷ್ಯಸಿ ಸತ್ಯಂ ತೇ ಪ್ರತಿಜಾನೇ ಪ್ರಿಯೋಽಸಿ ಮೇ ||",
"transliteration": "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru mām evaiṣhyasi satyaṁ te pratijāne priyo 'si me",
"meaning": "ಮನ್ನನಾ (ನನ್ನಲ್ಲಿ ಮನಸ್ಸು ಇಟ್ಟವನಾಗು), ಮದ್ಭಕ್ತನಾಗು, ಮದ್ಯಾಜಿ (ನನ್ನ ಯಜನೆ ಮಾಡುವವನಾಗು), ನನಗೆ ನಮಸ್ಕರಿಸು. ನೀನು ನನಗೆ ಪ್ರಿಯನಾದ್ದರಿಂದ, ಸತ್ಯವಾಗಿ ನನ್ನನ್ನೇ ಪಡೆಯುವೆ ಎಂದು ಪ್ರತಿಜಾನೆ ಮಾಡುತ್ತೇನೆ."
},
{
"id": "18-66",
"chapter": 18,
"verse": 66,
"kannada": "ಸರ್ವಧರ್ಮಾನ್ಪರಿತ್ಯಜ್ಯ ಮಾಮೇಕಂ ಶರಣಂ ವ್ರಜ | ಅಹಂ ತ್ವಾಂ ಸರ್ವಪಾಪೇಭ್ಯೋ ಮೋಕ್ಷಯಿಷ್ಯಾಮಿ ಮಾ ಶುಚಃ ||",
"transliteration": "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja ahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
"meaning": "ಸರ್ವ ಧರ್ಮಗಳನ್ನೂ ತ್ಯಜಿಸಿ, ನನ್ನನ್ನು ಏಕೈಕ ಶರಣಾಗತಿಯಲ್ಲಿ ಬರುವುದು. ನಿನ್ನ ಎಲ್ಲ ಪಾಪಗಳಿಂದ ನಾನು ನಿನ್ನನ್ನು ಮೋಕ್ಷಕ್ಕೆ ತರುವೆನು; ಶೋಕಿಸಬೇಡ."
},
{
"id": "18-67",
"chapter": 18,
"verse": 67,
"kannada": "ಇದಂ ತೇ ನಾತಪಸ್ಕಾಯ ನಾಭಕ್ತಾಯ ಕದಾಚನ | ನ ಚಾಶುಶ್ರೂಷವೇ ವಾಚ್ಯಂ ನ ಚ ಮಾಂ ಯೋಽಭ್ಯಸೂಯತಿ ||",
"transliteration": "idaṁ te nātapaskāya nābhaktāya kadāchana na chāśhuśhrūṣhave vāchyaṁ na cha māṁ yo 'bhyasūyati",
"meaning": "ಇದನ್ನು ತಪಸ್ಸಿಲ್ಲದವನಿಗೆ, ಭಕ್ತಿಲ್ಲದವನಿಗೆ, ಅಶುಶ್ರೂಷುವಿಗೆ (ಕೇಳಲು ಇಚ್ಛೆಯಿಲ್ಲದವನಿಗೆ), ನನ್ನನ್ನು ಅಭ್ಯಸೂಯತಿ (ದ್ವೇಷಿಸುವವನಿಗೆ) ಎಂದಿಗೂ ಹೇಳಬಾರದು."
},
{
"id": "18-68",
"chapter": 18,
"verse": 68,
"kannada": "ಯ ಇಮಂ ಪರಮಂ ಗುಹ್ಯಂ ಮದ್ಭಕ್ತೇಷ್ವಭಿಧಾಸ್ಯತಿ | ಭಕ್ತಿಂ ಮಯಿ ಪರಾಂ ಕೃತ್ವಾ ಮಾಮೇವೈಷ್ಯತ್ಯಸಂಶಯಃ ||",
"transliteration": "ya imaṁ paramaṁ guhyaṁ mad-bhakteṣhv abhidhāsyati bhaktiṁ mayi parāṁ kṛitvā mām evaiṣhyaty asanśhayaḥ",
"meaning": "ಯಾವನು ಈ ಪರಮ ಗುಹ್ಯವನ್ನು ನನ್ನ ಭಕ್ತರಿಗೆ ಅಭಿಧಾಸ್ಯತಿ (ಹೇಳುವನೋ), ಅವನು ನನ್ನಲ್ಲಿ ಪರಮ ಭಕ್ತಿಯನ್ನು ಮಾಡಿ, ಸಂದೇಹವಿಲ್ಲದೆ ನನ್ನನ್ನೇ ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "18-69",
"chapter": 18,
"verse": 69,
"kannada": "ನ ಚ ತಸ್ಮಾನ್ಮನುಷ್ಯೇಷು ಕಶ್ಚಿನ್ಮೇ ಪ್ರಿಯಕೃತ್ತಮಃ | ಭವಿತಾ ನ ಚ ಮೇ ತಸ್ಮಾದನ್ಯಃ ಪ್ರಿಯತರೋ ಭುವಿ ||",
"transliteration": "na cha tasmān manuṣhyeṣhu kaśhchin me priya-kṛittamaḥ bhavitā na cha me tasmād anyaḥ priya-taro bhuvi",
"meaning": "ಮನುಷ್ಯರಲ್ಲಿ ಅವನಿಗಿಂತ ನನಗೆ ಪ್ರಿಯಕೃತ್ತಮ (ಅತಿ ಪ್ರಿಯಕಾರ್ಯ ಮಾಡುವವನು) ಯಾರೂ ಇಲ್ಲ. ಭೂಮಿಯಲ್ಲಿ ಅವನಿಗಿಂತ ಪ್ರಿಯತರನು ಬೇರೆಯಾರೂ ಇರುವುದಿಲ್ಲ."
},
{
"id": "18-70",
"chapter": 18,
"verse": 70,
"kannada": "ಅಧ್ಯೇಷ್ಯತೇ ಚ ಯ ಇಮಂ ಧರ್ಮ್ಯಂ ಸಂವಾದಮಾವಯೋಃ | ಜ್ಞಾನಯಜ್ಞೇನ ತೇನಾಹಮಿಷ್ಟಃ ಸ್ಯಾಮಿತಿ ಮೇ ಮತಿಃ ||",
"transliteration": "adhyeṣhyate cha ya imaṁ dharmyaṁ saṁvādam āvayoḥ jñāna-yajñena tenāham iṣhṭaḥ syām iti me matiḥ",
"meaning": "ಯಾವನು ನಮ್ಮಿಬ್ಬರ ಈ ಧರ್ಮ್ಯ ಸಂವಾದವನ್ನು ಅಧ್ಯಯನ ಮಾಡುವನೋ, ಜ್ಞಾನಯಜ್ಞದಿಂದ ನಾನು ಅವನಿಗೆ ಇಷ್ಟನಾಗುವೆನೆಂದು ನನ್ನ ಮತ."
},
{
"id": "18-71",
"chapter": 18,
"verse": 71,
"kannada": "ಶ್ರದ್ಧಾವಾನನಸೂಯಶ್ಚ ಶೃಣುಯಾದಪಿ ಯೋ ನರಃ | ಸೋಽಪಿ ಮುಕ್ತಃ ಶುಭಾಂಲ್ಲೋಕಾನ್ಪ್ರಾಪ್ನುಯಾತ್ಪುಣ್ಯಕರ್ಮಣಾಮ್ ||",
"transliteration": "śhraddhāvān anasūyaśh cha śhṛiṇuyād api yo naraḥ so 'pi muktaḥ śhubhāll lokān prāpnuyāt puṇya-karmaṇām",
"meaning": "ಶ್ರದ್ಧಾವಾನ್, ಅನಸೂಯ (ದ್ವೇಷವಿಲ್ಲದವನು) ಆದ ನರನು ಇದನ್ನು ಕೇಳಿದರೂ, ಅವನು ಮುಕ್ತನಾಗಿ ಪುಣ್ಯಕರ್ಮಗಳ ಶುಭ ಲೋಕಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ."
},
{
"id": "18-72",
"chapter": 18,
"verse": 72,
"kannada": "ಕಚ್ಚಿದೇತಚ್ಛ್ರುತಂ ಪಾರ್ಥ ತ್ವಯೈಕಾಗ್ರೇಣ ಚೇತಸಾ | ಕಚ್ಚಿದಜ್ಞಾನಸಂಮೋಹಃ ಪ್ರನಷ್ಟಸ್ತೇ ಧನಂಜಯ ||",
"transliteration": "kachchid etach chhrutaṁ pārtha tvayaikāgreṇa chetasā kachchid ajñāna-sanmohaḥ pranaṣhṭas te dhanañjaya",
"meaning": "ಹೇ ಪಾರ್ಥ, ಇದನ್ನು ನೀನು ಏಕಾಗ್ರ ಚಿತ್ತದಿಂದ ಕೇಳಿದೆಯಾ? ಹೇ ಧನಂಜಯ, ನಿನ್ನ ಅಜ್ಞಾನಸಂಮೋಹವು ನಾಶವಾಗಿದೆಯಾ?"
},
{
"id": "18-73",
"chapter": 18,
"verse": 73,
"kannada": "ಅರ್ಜುನ ಉವಾಚ | ನಷ್ಟೋ ಮೋಹಃ ಸ್ಮೃತಿರ್ಲಬ್ಧಾ ತ್ವತ್ಪ್ರಸಾದಾನ್ಮಯಾಚ್ಯುತ | ಸ್ಥಿತೋಽಸ್ಮಿ ಗತಸಂದೇಹಃ ಕರಿಷ್ಯೇ ವಚನಂ ತವ ||",
"transliteration": "arjuna uvācha naṣhṭo mohaḥ smṛitir labdhā tvat-prasādān mayāchyuta sthito 'smi gata-sandehaḥ kariṣhye vachanaṁ tava",
"meaning": "ಅರ್ಜುನನು ಹೇಳಿದನು: ಹೇ ಅಚ್ಯುತ, ನಿನ್ನ ಪ್ರಸಾದದಿಂದ ನನ್ನ ಮೋಹ ನಾಶವಾಗಿದೆ, ಸ್ಮೃತಿ ಲಬ್ಧವಾಗಿದೆ. ನಾನು ಸ್ಥಿತನಾಗಿದ್ದೇನೆ, ಗತಸಂದೇಹನಾಗಿದ್ದೇನೆ. ನಿನ್ನ ವಚನವನ್ನು ಮಾಡುವೆ."
},
{
"id": "18-74",
"chapter": 18,
"verse": 74,
"kannada": "ಸಂಜಯ ಉವಾಚ | ಇತ್ಯಹಂ ವಾಸುದೇವಸ್ಯ ಪಾರ್ಥಸ್ಯ ಚ ಮಹಾತ್ಮನಃ | ಸಂವಾದಮಿಮಮಶ್ರೌಷಮದ್ಭುತಂ ರೋಮಹರ್ಷಣಮ್ ||",
"transliteration": "sañjaya uvācha ity ahaṁ vāsudevasya pārthasya cha mahātmanaḥ saṁvādam imam aśhrauṣham adbhutaṁ roma-harṣhaṇam",
"meaning": "ಸಂಜಯನು ಹೇಳಿದನು: ವಾಸುದೇವ ಮತ್ತು ಮಹಾತ್ಮ ಪಾರ್ಥರ ಈ ಅದ್ಭುತವಾದ, ರೋಮಹರ್ಷಣವಾದ ಸಂವಾದವನ್ನು ನಾನು ಈ ರೀತಿ ಕೇಳಿದೆನು."
},
{
"id": "18-75",
"chapter": 18,
"verse": 75,
"kannada": "ವ್ಯಾಸಪ್ರಸಾದಾಚ್ಛ್ರುತವಾನೇತದ್ಗುಹ್ಯಮಹಂ ಪರಮ್ | ಯೋಗಂ ಯೋಗೇಶ್ವರಾತ್ಕೃಷ್ಣಾತ್ಸಾಕ್ಷಾತ್ಕಥಯತಃ ಸ್ವಯಮ್ ||",
"transliteration": "vyāsa-prasādāch chhrutavān etad guhyam ahaṁ param yogaṁ yogeśhvarāt kṛiṣhṇāt sākṣhāt kathayataḥ svayam",
"meaning": "ವ್ಯಾಸಪ್ರಸಾದದಿಂದ ಯೋಗೇಶ್ವರನಾದ ಕೃಷ್ಣನಿಂದ ಸ್ವಯಂ ಕಥಯತಃ (ಹೇಳುತ್ತಿರುವ) ಈ ಪರಮ ಗುಹ್ಯವಾದ ಯೋಗವನ್ನು ಕೇಳಿದೆನು."
},
{
"id": "18-76",
"chapter": 18,
"verse": 76,
"kannada": "ರಾಜನ್ಸಂಸ್ಮೃತ್ಯ ಸಂಸ್ಮೃತ್ಯ ಸಂವಾದಮಿಮಮದ್ಭುತಮ್ | ಕೇಶವಾರ್ಜುನಯೋಃ ಪುಣ್ಯಂ ಹೃಷ್ಯಾಮಿ ಚ ಮುಹುರ್ಮುಹುಃ ||",
"transliteration": "rājan sansmṛitya sansmṛitya saṁvādam imam adbhutam keśhavārjunayoḥ puṇyaṁ hṛiṣhyāmi cha muhur muhuḥ",
"meaning": "ಹೇ ರಾಜನೇ, ಕೇಶವ ಮತ್ತು ಅರ್ಜುನರ ಈ ಪುಣ್ಯಕರವಾದ, ಅದ್ಭುತ ಸಂವಾದವನ್ನು ಸಂಸ್ಮರಿಸಿ ಸಂಸ್ಮರಿಸಿ ನಾನು ಮತ್ತೆ ಮತ್ತೆ ಹರ್ಷಿಸುತ್ತೇನೆ."
},
{
"id": "18-77",
"chapter": 18,
"verse": 77,
"kannada": "ತಚ್ಚ ಸಂಸ್ಮೃತ್ಯ ಸಂಸ್ಮೃತ್ಯ ರೂಪಮತ್ಯದ್ಭುತಂ ಹರೇಃ | ವಿಸ್ಮಯೋ ಮೇ ಮಹಾನ್ರಾಜನ್ಹೃಷ್ಯಾಮಿ ಚ ಪುನಃ ಪುನಃ ||",
"transliteration": "tach cha sansmṛitya sansmṛitya rūpam atyadbhutaṁ hareḥ vismayo me mahān rājan hṛiṣhyāmi cha punaḥ punaḥ",
"meaning": "ಹರಿಯ ಅತ್ಯದ್ಭುತ ರೂಪವನ್ನು ಸಂಸ್ಮರಿಸಿ ಸಂಸ್ಮರಿಸಿ, ಹೇ ರಾಜನೇ, ನನಗೆ ಮಹಾ ವಿಸ್ಮಯವಾಗುತ್ತದೆ ಮತ್ತು ಪುನಃ ಪುನಃ ಹರ್ಷಿಸುತ್ತೇನೆ."
},
{
"id": "18-78",
"chapter": 18,
"verse": 78,
"kannada": "ಯತ್ರ ಯೋಗೇಶ್ವರಃ ಕೃಷ್ಣೋ ಯತ್ರ ಪಾರ್ಥೋ ಧನುರ್ಧರಃ | ತತ್ರ ಶ್ರೀರ್ವಿಜಯೋ ಭೂತಿರ್ಧೃವಾ ನೀತಿರ್ಮತಿರ್ಮಮ ||",
"transliteration": "yatra yogeśhvaraḥ kṛiṣhṇo yatra pārtho dhanur-dharaḥ tatra śhrīr vijayo bhūtir dhruvā nītir matir mama",
"meaning": "ಯಾವಲ್ಲಿ ಯೋಗೇಶ್ವರ ಕೃಷ್ಣನೂ, ಯಾವಲ್ಲಿ ಧನುರ್ಧರ ಪಾರ್ಥನೂ ಇದ್ದಾನೆಯೋ, ಅಲ್ಲಿ ಶ್ರೀ (ಸಂಪತ್ತು), ವಿಜಯ, ಭೂತಿ (ವೈಭವ), ಧ್ರುವ ನೀತಿ - ಇದೇ ನನ್ನ ಮತ."
}
]
  }
  ]