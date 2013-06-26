var LIBRARY_SEED = {
  "type": {
    "_id": "/type/article",
    "name": "Projects",
    "properties": {
      "name": {
        "name": "Article Name",
        "type": "string",
        "unique": true
      },
      "journal": {
        "name": "Journal",
        "type": "string",
        "unique": true
      },
      "authors": {
        "name": "Author",
        "type": "string",
        "unique": false,
        "meta": {
          "details": true
        }
      },
      "published_at": {
        "name": "Published Date",
        "type": "date",
        "unique": true
      },
      "image": {
        "name": "Image",
        "type": "string",
        "unique": true
      },
      "abstract": {
        "name": "Abstract",
        "type": "string",
        "unique": true
      },
      "article-type": {
        "name": "Article Type",
        "type": "string",
        "unique": true,
        "meta": {
          "facet": true,
          "details": true
        }
      },
      "organisms": {
        "name": "Organisms",
        "type": "string",
        "unique": false,
        "meta": {
          "facet": true,
          "details": true
        }
      },
      "subjects": {
        "name": "Subjects",
        "type": "string",
        "unique": false,
        "meta": {
          "facet": true,
          "details": true
        }
      },
      "keywords": {
        "name": "Keywords",
        "type": "string",
        "unique": false,
        "meta": {
          "facet": false,
          "details": true
        }
      }
    }
  },
  "objects": [
    {
      "_id": "00003",
      "published_at": "2012-11-13",
      "name": "A novel role for lipid droplets in the organismal antibacterial response",
      "authors": [
        "Anand",
        "Cermelli",
        "Li",
        "Kassan",
        "Bosch",
        "Sigua",
        "Huang",
        "Ouellette",
        "Pol",
        "Welte",
        "Gross"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "innate immunity",
        "histones",
        "lipid droplet",
        "anti-bacterial"
      ],
      "organisms": [
        "B. subtilis",
        "D. melanogaster",
        "E. coli",
        "Mouse"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00003"
    },
    {
      "_id": "00005",
      "published_at": "2012-10-30",
      "name": "Molecular architecture of human polycomb repressive complex 2",
      "authors": [
        "Ciferri",
        "Lander",
        "Maiolica",
        "Herzog",
        "Aebersold",
        "Nogales"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "cryo-EM",
        "Gene silencing",
        "labeling",
        "chemical cross-linking",
        "chromatin"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00005"
    },
    {
      "_id": "00007",
      "published_at": "2012-10-15",
      "name": "Herbivory-induced volatiles function as defenses increasing fitness of the native plant Nicotiana attenuata in nature",
      "authors": [
        "Schuman",
        "Barthel",
        "Baldwin"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Nicotiana attenuata",
        "HIPV (herbivory-induced plant volatile)",
        "plant-predator interaction",
        "GLV (green leaf volatile)",
        "TPI (trypsin protease inhibitor)",
        "indirect defense"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Plant biology"
      ],
      "url": "/documents/00007"
    },
    {
      "_id": "00011",
      "published_at": "2012-11-13",
      "name": "Nascent-Seq reveals novel features of mouse circadian transcriptional regulation",
      "authors": [
        "Menet",
        "Rodriguez",
        "Abruzzi",
        "Rosbash"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Circadian rhythms",
        "transcription",
        "nascent RNA",
        "high-throughput sequencing",
        "RNA processing",
        "post-transcriptional regulation"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Genes and chromosomes",
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00011"
    },
    {
      "_id": "00012",
      "published_at": "2013-01-22",
      "name": "Changing the responses of cortical neurons from sub- to suprathreshold using single spikes in vivo",
      "authors": [
        "Pawlak",
        "Greenberg",
        "Sprekeler",
        "Gerstner",
        "Kerr"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "synaptic plasticity",
        "STDP",
        "visual cortex",
        "circuits",
        "in vivo",
        "spiking patterns"
      ],
      "organisms": [
        "Rat"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00012"
    },
    {
      "_id": "00013",
      "published_at": "2012-10-15",
      "name": "A bacterial sulfonolipid triggers multicellular development in the closest living relatives of animals",
      "authors": [
        "Alegado",
        "Brown",
        "Cao",
        "Dermenjian",
        "Zuzow",
        "Fairclough",
        "Clardy",
        "King"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Salpingoeca rosetta",
        "Algoriphagus",
        "bacterial sulfonolipid",
        "multicellular development"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00013"
    },
    {
      "_id": "00031",
      "published_at": "2012-10-30",
      "name": "Foggy perception slows us down",
      "authors": [
        "Pretto",
        "Bresciani",
        "Rainer",
        "Bülthoff"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "motion perception",
        "human psychophysics",
        "virtual reality",
        "driving simulation"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00031"
    },
    {
      "_id": "00047",
      "published_at": "2012-12-18",
      "name": "DNA-PK is a DNA sensor for IRF-3-dependent innate immunity",
      "authors": [
        "Ferguson",
        "Mansur",
        "Peters",
        "Ren",
        "Smith"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "DNA-PK",
        "innate immunity",
        "pattern recognition",
        "vaccinia virus",
        "inflammation"
      ],
      "organisms": [
        "Mouse",
        "Viruses"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00047"
    },
    {
      "_id": "00048",
      "published_at": "2012-10-15",
      "name": "The unfolded protein response in fission yeast modulates stability of select mRNAs to maintain protein homeostasis",
      "authors": [
        "Kimmig",
        "Diaz",
        "Zheng",
        "Williams",
        "Lang",
        "Aragón",
        "Li",
        "Walter"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Unfolded Protein Response",
        "Ire1",
        "selective mRNA decay",
        "Bip1 mRNA stabilization",
        "ER homeostasis"
      ],
      "organisms": [
        "S. pombe"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00048"
    },
    {
      "_id": "00049",
      "published_at": "2012-11-13",
      "name": "Sodium taurocholate cotransporting polypeptide is a functional receptor for human hepatitis B and D virus",
      "authors": [
        "Yan",
        "Zhong",
        "Xu",
        "He",
        "Jing",
        "Gao",
        "Huang",
        "Qi",
        "Peng",
        "Wang",
        "Fu",
        "Song",
        "Chen",
        "Gao",
        "Ren",
        "Sun",
        "Cai",
        "Feng",
        "Sui",
        "Li"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Sodium taurocholate cotransporting polypeptide",
        "receptor",
        "hepatitis B virus",
        "hepatitis D virus",
        "liver",
        "virus infection"
      ],
      "organisms": [
        "Viruses",
        "Other"
      ],
      "subjects": [
        "Biochemistry",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00049"
    },
    {
      "_id": "00051",
      "published_at": "2012-12-13",
      "name": "Global divergence in critical income for adult and childhood survival: analyses of mortality using Michaelis–Menten",
      "authors": [
        "Hum",
        "Jha",
        "McGahan",
        "Cheng"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "enzyme kinetics",
        "adult survival",
        "child survival",
        "income",
        "HIV",
        "smoking"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Human biology and medicine",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00051"
    },
    {
      "_id": "00065",
      "published_at": "2012-10-15",
      "name": "The starvation hormone, fibroblast growth factor-21, extends lifespan in mice",
      "authors": [
        "Zhang",
        "Xie",
        "Berglund",
        "Coate",
        "He",
        "Katafuchi",
        "Xiao",
        "Potthoff",
        "Wei",
        "Wan",
        "Yu",
        "Evans",
        "Kliewer",
        "Mangelsdorf"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "longevity",
        "fibroblast growth factor",
        "growth hormone",
        "liver",
        "caloric restriction"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00065"
    },
    {
      "_id": "00067",
      "published_at": "2012-12-13",
      "name": "RecA filament sliding on DNA facilitates homology search",
      "authors": [
        "Ragunathan",
        "Liu",
        "Ha"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Single Molecule",
        "FRET",
        "DNA repair",
        "Homologous Recombination"
      ],
      "organisms": [
        "E. coli"
      ],
      "subjects": [
        "Biochemistry",
        "Biophysics and structural biology"
      ],
      "url": "/documents/00067"
    },
    {
      "_id": "00068",
      "published_at": "2012-11-13",
      "name": "Non-canonical TAF complexes regulate active promoters in human embryonic stem cells",
      "authors": [
        "Maston",
        "Zhu",
        "Chamberlain",
        "Lin",
        "Fang",
        "Green"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "transcription factors",
        "TATA-box-binding protein (TBP)",
        "pre-initiation complex",
        "human embryonic stem cell",
        "TBP-associated factor (TAF)",
        "pluripotency gene expression"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00068"
    },
    {
      "_id": "00070",
      "published_at": "2012-12-13",
      "name": "The activity-dependent histone variant H2BE modulates the life span of olfactory neurons",
      "authors": [
        "Santoro",
        "Dulac"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "histone",
        "olfactory",
        "epigenetics"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00070"
    },
    {
      "_id": "00078",
      "published_at": "2012-12-13",
      "name": "Chromatin is an ancient innovation conserved between Archaea and Eukarya",
      "authors": [
        "Ammar",
        "Torti",
        "Tsui",
        "Gebbia",
        "Durbic",
        "Bader",
        "Giaever",
        "Nislow"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Haloferax volcanii",
        "Nucleosome",
        "Chromatin",
        "Transcriptome",
        "RNA-seq",
        "Archaea"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Cell biology",
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00078"
    },
    {
      "_id": "00090",
      "published_at": "2012-12-18",
      "name": "Doxorubicin blocks proliferation of cancer cells through proteolytic activation of CREB3L1",
      "authors": [
        "Denard",
        "Lee",
        "Ye"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "doxorubicin",
        "cancer",
        "CREB3L1",
        "ceramide"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biochemistry",
        "Human biology and medicine"
      ],
      "url": "/documents/00090"
    },
    {
      "_id": "00093",
      "published_at": "2012-12-18",
      "name": "Population structuring of multi-copy, antigen-encoding genes in Plasmodium falciparum",
      "authors": [
        "Artzy-Randrup",
        "Rorick",
        "Day",
        "Chen",
        "Dobson",
        "Pascual"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "parasite population structure",
        "epidemiological dynamics",
        "antigenic diversity",
        "immune selection",
        "Plasmodium falciparum",
        "var multi-gene family"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00093"
    },
    {
      "_id": "00102",
      "published_at": "2012-10-30",
      "name": "Sequence specific detection of bacterial 23S ribosomal RNA by TLR13",
      "authors": [
        "Li",
        "Chen"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Innate Immunity",
        "Toll-like receptor",
        "bacteria",
        "Ribosomal RNA"
      ],
      "organisms": [
        "E. coli",
        "Mouse"
      ],
      "subjects": [
        "Cell biology",
        "Immunology"
      ],
      "url": "/documents/00102"
    },
    {
      "_id": "00105",
      "published_at": "2013-02-05",
      "name": "Dendritic cells loaded with FK506 kill T cells in an antigen-specific manner and prevent autoimmunity in vivo",
      "authors": [
        "Orange",
        "Blachere",
        "Fak",
        "Parveen",
        "Frank",
        "Herre",
        "Tian",
        "Monette",
        "Darnell"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "dendritic cells",
        "rheumatoid arthritis",
        "autoimmunity",
        "drug delivery",
        "FK506"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Human biology and medicine",
        "Immunology"
      ],
      "url": "/documents/00105"
    },
    {
      "_id": "00109",
      "published_at": "2012-12-13",
      "name": "Synaptic proteins promote calcium-triggered fast transition from point contact to full fusion",
      "authors": [
        "Diao",
        "Grob",
        "Cipriano",
        "Kyoung",
        "Zhang",
        "Shah",
        "Nguyen",
        "Padolina",
        "Srivastava",
        "Vrljic",
        "Shah",
        "Nogales",
        "Chu",
        "Brunger"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "neurotransmitter release",
        "synaptic vesicle fusion",
        "SNARE",
        "synaptotagmin",
        "complexin"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Neuroscience"
      ],
      "url": "/documents/00109"
    },
    {
      "_id": "00116",
      "published_at": "2013-01-08",
      "name": "Myosin motors fragment and compact membrane-bound actin filaments",
      "authors": [
        "Vogel",
        "Petrasek",
        "Heinemann",
        "Schwille"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Myosin",
        "Actin",
        "Actin Cortex",
        "Myofilaments",
        "TIRF",
        "Membrane"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00116"
    },
    {
      "_id": "00117",
      "published_at": "2012-12-18",
      "name": "Meiosis I chromosome segregation is established through regulation of microtubule–kinetochore interactions",
      "authors": [
        "Miller",
        "Ünal",
        "Brar",
        "Amon"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "meiosis",
        "cyclin-dependent kinase",
        "tension",
        "cohesin",
        "chromosome segregation",
        "kinetochore"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology",
        "Genes and chromosomes"
      ],
      "url": "/documents/00117"
    },
    {
      "_id": "00133",
      "published_at": "2013-03-06",
      "name": "Kinesin-1 regulates dendrite microtubule polarity in Caenorhabditis elegans",
      "authors": [
        "Yan",
        "Chao",
        "Toba",
        "Koyasako",
        "Yasunaga",
        "Hirotsune",
        "Shen"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "polarity",
        "cytoskeleton",
        "kinesin-1"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00133"
    },
    {
      "_id": "00160",
      "published_at": "2013-01-08",
      "name": "A novel GTP-binding protein–adaptor protein complex responsible for export of Vangl2 from the trans Golgi network",
      "authors": [
        "Guo",
        "Zanetti",
        "Schekman"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "TGN sorting",
        "Vesicle coat proteins",
        "Arf proteins"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biochemistry",
        "Cell biology"
      ],
      "url": "/documents/00160"
    },
    {
      "_id": "00170",
      "published_at": "2013-01-08",
      "name": "Dual functions of TAF7L in adipocyte differentiation",
      "authors": [
        "Zhou",
        "Kaplan",
        "Li",
        "Grubisic",
        "Zhang",
        "Wang",
        "Eisen",
        "Tjian"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "ChIP-seq",
        "RNA-seq",
        "adipogenesis",
        "C3H10T½",
        "TAF7L",
        "differentiation"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Cell biology",
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00170"
    },
    {
      "_id": "00171",
      "published_at": "2012-12-13",
      "name": "Elba, a novel developmentally regulated chromatin boundary factor is a hetero-tripartite DNA binding complex",
      "authors": [
        "Aoki",
        "Sarkeshik",
        "Yates",
        "Schedl"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Boundaries",
        "Insulators",
        "Domains",
        "Chromatin",
        "Bithorax",
        "Development"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Biochemistry",
        "Genes and chromosomes"
      ],
      "url": "/documents/00171"
    },
    {
      "_id": "00173",
      "published_at": "2012-11-13",
      "name": "Membrane immersion allows rhomboid proteases to achieve specificity by reading transmembrane segment dynamics",
      "authors": [
        "Moin",
        "Urban"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "intramembrane proteolysis",
        "rhomboid protease",
        "pathogen"
      ],
      "organisms": [
        "D. melanogaster",
        "E. coli",
        "Human"
      ],
      "subjects": [
        "Biochemistry"
      ],
      "url": "/documents/00173"
    },
    {
      "_id": "00178",
      "published_at": "2013-01-22",
      "name": "NOVA-dependent regulation of cryptic NMD exons controls synaptic protein levels after seizure",
      "authors": [
        "Eom",
        "Zhang",
        "Wang",
        "Lay",
        "Fak",
        "Noebels",
        "Darnell"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "HITS-CLIP",
        "Nonsense mediated decay",
        "alternative splicing",
        "RNA regulation",
        "epilepsy",
        "neuronal biology"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Biochemistry",
        "Neuroscience"
      ],
      "url": "/documents/00178"
    },
    {
      "_id": "00181",
      "published_at": "2012-12-18",
      "name": "Morphologic diversity of cutaneous sensory afferents revealed by genetically directed sparse labeling",
      "authors": [
        "Wu",
        "Williams",
        "Nathans"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "skin",
        "neuronal morphology",
        "sparse labeling",
        "receptive field",
        "Brn3a"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Neuroscience"
      ],
      "url": "/documents/00181"
    },
    {
      "_id": "00183",
      "published_at": "2013-01-22",
      "name": "A virus responds instantly to the presence of the vector on the host and forms transmission morphs",
      "authors": [
        "Martinière",
        "Bak",
        "Macia",
        "Lautredou",
        "Gargani",
        "Doumayrou",
        "Garzo",
        "Moreno",
        "Fereres",
        "Blanc",
        "Drucker"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "aphids",
        "transmission",
        "cell–virus–vector interactions"
      ],
      "organisms": [
        "Arabidopsis",
        "Viruses",
        "Other"
      ],
      "subjects": [
        "Plant biology"
      ],
      "url": "/documents/00183"
    },
    {
      "_id": "00184",
      "published_at": "2012-12-11",
      "name": "Distinct gating mechanisms revealed by the structures of a multi-ligand gated K+ channel",
      "authors": [
        "Kong",
        "Zeng",
        "Ye",
        "Chen",
        "Sauer",
        "Lam",
        "Derebe",
        "Jiang"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Geobacter sulfurreducens",
        "K+ channel",
        "ligand gating"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00184"
    },
    {
      "_id": "00190",
      "published_at": "2013-03-05",
      "name": "AP2 hemicomplexes contribute independently to synaptic vesicle endocytosis",
      "authors": [
        "Gu",
        "Liu",
        "Watanabe",
        "Sun",
        "Hollopeter",
        "Grant",
        "Jorgensen"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "apa-2",
        "apm-2",
        "synaptic vesicle endocytosis",
        "AP2"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Cell biology",
        "Neuroscience"
      ],
      "url": "/documents/00190"
    },
    {
      "_id": "00205",
      "published_at": "2012-12-18",
      "name": "KDM2B links the Polycomb Repressive Complex 1 (PRC1) to recognition of CpG islands",
      "authors": [
        "Farcas",
        "Blackledge",
        "Sudbery",
        "Long",
        "McGouran",
        "Rose",
        "Lee",
        "Sims",
        "Cerase",
        "Sheahan",
        "Koseki",
        "Brockdorff",
        "Ponting",
        "Kessler",
        "Klose"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "CpG island",
        "Chromatin",
        "Epigenetics",
        "Transcription",
        "Methylation",
        "Demethylase"
      ],
      "organisms": [
        "Chicken",
        "Human",
        "Mouse",
        "Xenopus",
        "Zebrafish"
      ],
      "subjects": [
        "Cell biology",
        "Genes and chromosomes"
      ],
      "url": "/documents/00205"
    },
    {
      "_id": "00218",
      "published_at": "2013-03-05",
      "name": "De novo modeling of the F420-reducing [NiFe]-hydrogenase from a methanogenic archaeon by cryo-electron microscopy",
      "authors": [
        "Mills",
        "Vitt",
        "Strauss",
        "Shima",
        "Vonck"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Methanothermobacter marburgensis",
        "cryo-electron microscopy",
        "methanogenesis",
        "hydrogenase"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00218"
    },
    {
      "_id": "00230",
      "published_at": "2013-01-22",
      "name": "Strong inter-population cooperation leads to partner intermixing in microbial communities",
      "authors": [
        "Momeni",
        "Brileya",
        "Fields",
        "Shou"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "pattern formation",
        "microbial communities",
        "cooperation",
        "ecological interactions",
        "methanogenic biofilms",
        "syntrophic biofilms"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00230"
    },
    {
      "_id": "00231",
      "published_at": "2013-01-08",
      "name": "Quantification of gait parameters in freely walking wild type and sensory deprived Drosophila melanogaster",
      "authors": [
        "Mendes",
        "Bartos",
        "Akay",
        "Márka",
        "Mann"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "walking behavior",
        "coordination",
        "proprioception",
        "sensory feedback",
        "gait analysis",
        "motor neuron"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00231"
    },
    {
      "_id": "00240",
      "published_at": "2012-10-15",
      "name": "Indirect routes to reproductive success",
      "authors": [
        "Pickett"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Nicotiana attenuata",
        "HIPV (herbivory-induced plant volatile)",
        "plant-predator interaction",
        "GLV (green leaf volatile)",
        "TPI (trypsin protease inhibitor)",
        "indirect defense"
      ],
      "organisms": [],
      "subjects": [
        "Genomics and evolutionary biology",
        "Plant biology"
      ],
      "url": "/documents/00240"
    },
    {
      "_id": "00242",
      "published_at": "2012-10-15",
      "name": "Molecular clue links bacteria to the origin of animals",
      "authors": [
        "Hadfield"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Salpingoeca rosetta",
        "Algoriphagus",
        "bacterial sulfonolipid",
        "multicellular development"
      ],
      "organisms": [],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00242"
    },
    {
      "_id": "00243",
      "published_at": "2012-10-15",
      "name": "New twists in the unfolded protein response",
      "authors": [
        "Cross",
        "Ron"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Unfolded Protein Response",
        "Ire1",
        "selective mRNA decay",
        "Bip1 mRNA stabilization",
        "ER homeostasis"
      ],
      "organisms": [],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00243"
    },
    {
      "_id": "00248",
      "published_at": "2012-12-31",
      "name": "rsEGFP2 enables fast RESOLFT nanoscopy of living cells",
      "authors": [
        "Grotjohann",
        "Testa",
        "Reuss",
        "Brakemann",
        "Eggeling",
        "Hell",
        "Jakobs"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "confocal microscopy",
        "fluorescent probes",
        "GFP",
        "nanoscopy",
        "superresolution",
        "live-cell imaging"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00248"
    },
    {
      "_id": "00260",
      "published_at": "2013-03-26",
      "name": "Sugar promotes vegetative phase change in Arabidopsis thaliana by repressing the expression of MIR156A and MIR156C",
      "authors": [
        "Yang",
        "Xu",
        "Koo",
        "He",
        "Poethig"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "phase change",
        "heteroblasty",
        "Nicotiana benthamiana",
        "heterochrony",
        "miRNAs",
        "nutrition"
      ],
      "organisms": [
        "Arabidopsis"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Plant biology"
      ],
      "url": "/documents/00260"
    },
    {
      "_id": "00269",
      "published_at": "2013-03-26",
      "name": "Sugar is an endogenous cue for juvenile-to-adult phase transition in plants",
      "authors": [
        "Yu",
        "Cao",
        "Zhou",
        "Zhang",
        "Lian",
        "Sun",
        "Wu",
        "Huang",
        "Wang",
        "Wang"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "microRNA",
        "developmental timing",
        "sugar",
        "juvenile-to-adult phase transition"
      ],
      "organisms": [
        "Arabidopsis"
      ],
      "subjects": [
        "Plant biology",
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00269"
    },
    {
      "_id": "00270",
      "published_at": "2012-10-15",
      "name": "Launching eLife, Part 1",
      "authors": [
        "Schekman",
        "Patterson",
        "Watt",
        "Weigel"
      ],
      "journal": "eLife",
      "article-type": "Editorial",
      "keywords": [
        "publishing",
        "peer review",
        "open access"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00270"
    },
    {
      "_id": "00278",
      "published_at": "2013-04-02",
      "name": "Stepwise assembly of the human replicative polymerase holoenzyme",
      "authors": [
        "Hedglin",
        "Perumal",
        "Hu",
        "Benkovic"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "DNA polymerase holoenzyme assembly",
        "clamp loading",
        "clamp unloading",
        "clamp loader",
        "sliding clamp"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biochemistry"
      ],
      "url": "/documents/00278"
    },
    {
      "_id": "00281",
      "published_at": "2012-10-30",
      "name": "New ideas on how drivers perceive speed emerge from the fog",
      "authors": [
        "Culham"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "motion perception",
        "human psychophysics",
        "virtual reality",
        "driving simulation"
      ],
      "organisms": [],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00281"
    },
    {
      "_id": "00286",
      "published_at": "2012-10-15",
      "name": "Could a hormone point the way to life extension?",
      "authors": [
        "Kenyon"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "longevity",
        "fibroblast growth factor",
        "growth hormone",
        "liver",
        "caloric restriction"
      ],
      "organisms": [],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00286"
    },
    {
      "_id": "00288",
      "published_at": "2013-04-16",
      "name": "Rapid localized spread and immunologic containment define Herpes simplex virus-2 reactivation in the human genital tract",
      "authors": [
        "Schiffer",
        "Swan",
        "Al Sallaq",
        "Magaret",
        "Johnston",
        "Mark",
        "Selke",
        "Ocbamichael",
        "Kuntz",
        "Zhu",
        "Robinson",
        "Huang",
        "Jerome",
        "Wald",
        "Corey"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Herpes simplex",
        "Mucosal immunity",
        "Mathematical modeling"
      ],
      "organisms": [
        "Human",
        "Viruses",
        "Other"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00288"
    },
    {
      "_id": "00290",
      "published_at": "2013-02-19",
      "name": "Mitotic spindle scaling during Xenopus development by kif2a and importin α",
      "authors": [
        "Wilbur",
        "Heald"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "mitotic spindle",
        "embryogenesis",
        "microtubule",
        "kif2a",
        "intracellular scaling"
      ],
      "organisms": [
        "Xenopus"
      ],
      "subjects": [
        "Cell biology",
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00290"
    },
    {
      "_id": "00291",
      "published_at": "2013-02-19",
      "name": "UNC93B1 mediates differential trafficking of endosomal TLRs",
      "authors": [
        "Lee",
        "Moon",
        "Shu",
        "Yuan",
        "Newman",
        "Schekman",
        "Barton"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Toll-like receptors",
        "UNC93B1",
        "trafficking",
        "AP-2"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Cell biology",
        "Immunology"
      ],
      "url": "/documents/00291"
    },
    {
      "_id": "00301",
      "published_at": "2012-11-13",
      "name": "Getting to grips with hepatitis",
      "authors": [
        "Chen",
        "Ye"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Sodium taurocholate cotransporting polypeptide",
        "receptor",
        "hepatitis B virus",
        "hepatitis D virus",
        "liver",
        "virus infection"
      ],
      "organisms": [
        "Viruses",
        "Other"
      ],
      "subjects": [
        "Biochemistry",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00301"
    },
    {
      "_id": "00302",
      "published_at": "2012-11-13",
      "name": "Histones join the fight against bacteria inside cells",
      "authors": [
        "Kolter"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "innate immunity",
        "histones",
        "lipid droplet",
        "anti-bacterial"
      ],
      "organisms": [
        "B. subtilis",
        "D. melanogaster",
        "E. coli",
        "Mouse"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00302"
    },
    {
      "_id": "00306",
      "published_at": "2013-02-05",
      "name": "Time line of redox events in aging postmitotic cells",
      "authors": [
        "Brandes",
        "Tienson",
        "Lindemann",
        "Vitvitsky",
        "Reichmann",
        "Banerjee",
        "Jakob"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Aging",
        "Oxidative Stress",
        "Redox Regulation",
        "Metabolism",
        "Redox Proteomics"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00306"
    },
    {
      "_id": "00308",
      "published_at": "2013-01-22",
      "name": "Cdc48/p97 promotes degradation of aberrant nascent polypeptides bound to the ribosome",
      "authors": [
        "Verma",
        "Oania",
        "Kolawa",
        "Deshaies"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "ubiquitin",
        "ribosome",
        "Cdc48"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Biochemistry",
        "Cell biology"
      ],
      "url": "/documents/00308"
    },
    {
      "_id": "00311",
      "published_at": "2012-12-18",
      "name": "Modelling dynamics in protein crystal structures by ensemble refinement",
      "authors": [
        "Burnley",
        "Afonine",
        "Adams",
        "Gros"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "protein",
        "crystallography",
        "structure",
        "function",
        "dynamics"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00311"
    },
    {
      "_id": "00312",
      "published_at": "2013-03-20",
      "name": "Selection of distinct populations of dentate granule cells in response to inputs as a mechanism for pattern separation in mice",
      "authors": [
        "Deng",
        "Mayford",
        "Gage"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "learning and memory",
        "dentate gyrus",
        "pattern separation",
        "CA1",
        "hippocampus"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00312"
    },
    {
      "_id": "00321",
      "published_at": "2013-02-05",
      "name": "Hierarchical organization of context in the hippocampal episodic code",
      "authors": [
        "Takahashi"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "hippocampus",
        "place cell",
        "episodic-like memory"
      ],
      "organisms": [
        "Rat"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00321"
    },
    {
      "_id": "00324",
      "published_at": "2013-06-18",
      "name": "Photoreceptor avascular privilege is shielded by soluble VEGF receptor-1",
      "authors": [
        "Luo",
        "Uehara",
        "Zhang",
        "Das",
        "Olsen",
        "Holt",
        "Simonis",
        "Jackman",
        "Singh",
        "Miya",
        "Huang",
        "Ahmed",
        "Bastos-Carvalho",
        "Le",
        "Mamalis",
        "Chiodo",
        "Hauswirth",
        "Baffi",
        "Lacal",
        "Orecchia",
        "Ferrara",
        "Gao",
        "Young-hee",
        "Fu",
        "Owen",
        "Albuquerque",
        "Baehr",
        "Thomas",
        "Li",
        "Chalam",
        "Shibuya",
        "Grisanti",
        "Wilson",
        "Ambati",
        "Ambati"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "age-related macular degeneration",
        "photoreceptor metabolism",
        "retinal vasculature",
        "soluble VEGF receptor-1",
        "vascular demarcation",
        "transgenic model"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Cell biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00324"
    },
    {
      "_id": "00326",
      "published_at": "2012-12-13",
      "name": "How keeping active pays off in the olfactory system",
      "authors": [
        "Monahan",
        "Lomvardas"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "histone",
        "olfactory",
        "epigenetics"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00326"
    },
    {
      "_id": "00327",
      "published_at": "2013-03-05",
      "name": "The AFF4 scaffold binds human P-TEFb adjacent to HIV Tat",
      "authors": [
        "Schulze-Gahmen",
        "Upton",
        "Birnberg",
        "Bao",
        "Chou",
        "Krogan",
        "Zhou",
        "Alber"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "transcription elongation",
        "super elongation complex",
        "SEC",
        "intrinsically disordered proteins"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Genes and chromosomes"
      ],
      "url": "/documents/00327"
    },
    {
      "_id": "00329",
      "published_at": "2013-02-05",
      "name": "Recognition of familiar food activates feeding via an endocrine serotonin signal in Caenorhabditis elegans",
      "authors": [
        "Song",
        "Faumont",
        "Lockery",
        "Avery"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Feeding",
        "recognition",
        "Food",
        "Serotonin",
        "Nervous system"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00329"
    },
    {
      "_id": "00333",
      "published_at": "2013-02-19",
      "name": "Influenza-virus membrane fusion by cooperative fold-back of stochastically induced hemagglutinin intermediates",
      "authors": [
        "Ivanovic",
        "Choi",
        "Whelan",
        "van Oijen",
        "Harrison"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "influenza",
        "enveloped viruses",
        "membrane fusion",
        "single molecule",
        "virus entry",
        "lipid bilayer"
      ],
      "organisms": [
        "Viruses"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00333"
    },
    {
      "_id": "00334",
      "published_at": "2013-05-28",
      "name": "Sequence-dependent base pair stepping dynamics in XPD helicase unwinding",
      "authors": [
        "Qi",
        "Pugh",
        "Spies",
        "Chemla"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "helicase",
        "Xeroderma pigmentosum group D helicase",
        "molecular motor",
        "DNA repair",
        "optical tweezers",
        "single molecule"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00334"
    },
    {
      "_id": "00336",
      "published_at": "2013-03-19",
      "name": "Sox10-dependent neural crest origin of olfactory microvillous neurons in zebrafish",
      "authors": [
        "Saxena",
        "Peng",
        "Bronner"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "neural crest migration",
        "olfactory development",
        "microvillous sensory neurons",
        "neurogenesis"
      ],
      "organisms": [
        "Zebrafish"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Neuroscience"
      ],
      "url": "/documents/00336"
    },
    {
      "_id": "00337",
      "published_at": "2013-03-05",
      "name": "Mutual inhibition among postmitotic neurons regulates robustness of brain wiring in Drosophila",
      "authors": [
        "Langen",
        "Koch",
        "Yan",
        "De Geest",
        "Erfurth",
        "Pfeiffer",
        "Schmucker",
        "Moreau",
        "Hassan"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Neurobiology",
        "Neural Circuit",
        "Robustness",
        "Variability",
        "Notch Signaling",
        "Axonal targeting"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Neuroscience"
      ],
      "url": "/documents/00337"
    },
    {
      "_id": "00340",
      "published_at": "2012-12-13",
      "name": "Enzymes provide demographers with food for thought",
      "authors": [
        "Jit",
        "Gerland"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "enzyme kinetics",
        "child survival",
        "smoking",
        "income",
        "adult survival"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Human biology and medicine",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00340"
    },
    {
      "_id": "00347",
      "published_at": "2012-12-13",
      "name": "Sliding to the rescue of damaged DNA",
      "authors": [
        "Gibb",
        "Greene"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Single Molecule",
        "FRET",
        "DNA repair",
        "Homologous Recombination"
      ],
      "organisms": [
        "E. coli"
      ],
      "subjects": [
        "Biochemistry",
        "Biophysics and structural biology"
      ],
      "url": "/documents/00347"
    },
    {
      "_id": "00348",
      "published_at": "2013-02-26",
      "name": "Epigenetic conservation at gene regulatory elements revealed by non-methylated DNA profiling in seven vertebrates",
      "authors": [
        "Long",
        "Sims",
        "Heger",
        "Blackledge",
        "Kutter",
        "Wright",
        "Grützner",
        "Odom",
        "Patient",
        "Ponting",
        "Klose"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "CpG islands",
        "DNA methylation",
        "Epigenetics",
        "Chromatin",
        "Evolutionary conservation"
      ],
      "organisms": [
        "Chicken",
        "Human",
        "Mouse",
        "Xenopus",
        "Zebrafish"
      ],
      "subjects": [
        "Genes and chromosomes",
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00348"
    },
    {
      "_id": "00351",
      "published_at": "2012-12-13",
      "name": "Bad medicine",
      "authors": [
        "Smith"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "ben goldacre",
        "big pharma",
        "medicine",
        "clinical trials"
      ],
      "organisms": [],
      "subjects": [
        "Human biology and medicine"
      ],
      "url": "/documents/00351"
    },
    {
      "_id": "00352",
      "published_at": "2012-12-18",
      "name": "Nerve endings reveal hidden diversity in the skin",
      "authors": [
        "Turner"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "skin",
        "neuronal morphology",
        "sparse labeling",
        "receptive field",
        "Brn3a"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Neuroscience"
      ],
      "url": "/documents/00352"
    },
    {
      "_id": "00353",
      "published_at": "2012-12-13",
      "name": "A good life",
      "authors": [
        "Marder"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "careers in science",
        "grad school",
        "postdocs"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00353"
    },
    {
      "_id": "00354",
      "published_at": "2013-03-19",
      "name": "Plants regenerated from tissue culture contain stable epigenome changes in rice",
      "authors": [
        "Stroud",
        "Ding",
        "Simon",
        "Feng",
        "Bellizzi",
        "Pellegrini",
        "Wang",
        "Meyers",
        "Jacobsen"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Rice",
        "DNA methylation",
        "tissue culture",
        "small RNA",
        "regeneration"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Genes and chromosomes",
        "Plant biology"
      ],
      "url": "/documents/00354"
    },
    {
      "_id": "00358",
      "published_at": "2013-04-30",
      "name": "A role for PVRL4-driven cell–cell interactions in tumorigenesis",
      "authors": [
        "Pavlova",
        "Pallasch",
        "Elia",
        "Braun",
        "Westbrook",
        "Hemann",
        "Elledge"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "anchorage-independence",
        "transformation",
        "genetic screen"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Cell biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00358"
    },
    {
      "_id": "00362",
      "published_at": "2013-04-16",
      "name": "Acute stress enhances adult rat hippocampal neurogenesis and activation of newborn neurons via secreted astrocytic FGF2",
      "authors": [
        "Kirby",
        "Muroy",
        "Sun",
        "Covarrubias",
        "Leong",
        "Barchas",
        "Kaufer"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "neurogenesis",
        "stress",
        "hippocampus",
        "FGF2",
        "astrocytes",
        "stem cell"
      ],
      "organisms": [
        "Rat"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00362"
    },
    {
      "_id": "00365",
      "published_at": "2012-12-13",
      "name": "Launching eLife, Part 2",
      "authors": [
        "Schekman",
        "Watt",
        "Weigel"
      ],
      "journal": "eLife",
      "article-type": "Editorial",
      "keywords": [
        "publishing",
        "peer review",
        "open access",
        "eLife"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00365"
    },
    {
      "_id": "00367",
      "published_at": "2013-04-02",
      "name": "Improved use of a public good selects for the evolution of undifferentiated multicellularity",
      "authors": [
        "Koschwanez",
        "Foster",
        "Murray"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Multicellularity",
        "Experimental evolution",
        "Evolution of cooperation"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00367"
    },
    {
      "_id": "00378",
      "published_at": "2013-03-19",
      "name": "LIN-12/Notch signaling instructs postsynaptic muscle arm development by regulating UNC-40/DCC and MADD-2 in Caenorhabditis elegans",
      "authors": [
        "Li",
        "Collins",
        "Koelle",
        "Shen"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Notch/LIN-12",
        "postsynaptic development",
        "UNC-40/DCC",
        "muscle arm"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Neuroscience"
      ],
      "url": "/documents/00378"
    },
    {
      "_id": "00385",
      "published_at": "2012-12-18",
      "name": "Mathematics and malaria",
      "authors": [
        "Jha"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "parasite population structure",
        "epidemiological dynamics",
        "antigenic diversity",
        "immune selection",
        "Plasmodium falciparum",
        "var multi-gene family"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00385"
    },
    {
      "_id": "00386",
      "published_at": "2012-12-18",
      "name": "Helping chromosomes and chromatids stay on track",
      "authors": [
        "Lacefield"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "meiosis",
        "cyclin-dependent kinase",
        "tension",
        "cohesin",
        "chromosome segregation",
        "kinetochore"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology",
        "Genes and chromosomes"
      ],
      "url": "/documents/00386"
    },
    {
      "_id": "00387",
      "published_at": "2012-12-18",
      "name": "How does doxorubicin work?",
      "authors": [
        "Patel",
        "Kaufmann"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "doxorubicin",
        "cancer",
        "CREB3L1",
        "ceramide"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biochemistry",
        "Human biology and medicine"
      ],
      "url": "/documents/00387"
    },
    {
      "_id": "00400",
      "published_at": "2013-02-26",
      "name": "Convergence of pontine and proprioceptive streams onto multimodal cerebellar granule cells",
      "authors": [
        "Huang",
        "Sugino",
        "Shima",
        "Guo",
        "Bai",
        "Mensh",
        "Nelson",
        "Hantman"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "cerebellum",
        "corollary discharge",
        "proprioception"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00400"
    },
    {
      "_id": "00411",
      "published_at": "2013-06-04",
      "name": "Cryo-EM visualization of the ribosome in termination complex with apo-RF3 and RF1",
      "authors": [
        "Pallesen",
        "Hashem",
        "Korkmaz",
        "Koripella",
        "Huang",
        "Ehrenberg",
        "Sanyal",
        "Frank"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Ribosome",
        "Cryo-EM",
        "Structure",
        "RF1",
        "RF3",
        "L7/L12"
      ],
      "organisms": [
        "E. coli"
      ],
      "subjects": [
        "Biochemistry",
        "Biophysics and structural biology"
      ],
      "url": "/documents/00411"
    },
    {
      "_id": "00415",
      "published_at": "2013-04-16",
      "name": "Ovulation in Drosophila is controlled by secretory cells of the female reproductive tract",
      "authors": [
        "Sun",
        "Spradling"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Ovulation",
        "sperm storage",
        "exocrine glands",
        "nuclear receptor",
        "Notch signaling"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Cell biology",
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00415"
    },
    {
      "_id": "00421",
      "published_at": "2013-05-14",
      "name": "Feeding-induced rearrangement of green leaf volatiles reduces moth oviposition",
      "authors": [
        "Allmann",
        "Späthe",
        "Bisch-Knaden",
        "Kallenbach",
        "Reinecke",
        "Sachse",
        "Baldwin",
        "Hansson"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "plant volatiles",
        "oviposition",
        "Ca imaging"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Ecology",
        "Neuroscience"
      ],
      "url": "/documents/00421"
    },
    {
      "_id": "00422",
      "published_at": "2013-05-14",
      "name": "ER-associated mitochondrial division links the distribution of mitochondria and mitochondrial DNA in yeast",
      "authors": [
        "Murley",
        "Lackner",
        "Osman",
        "West",
        "Voeltz",
        "Walter",
        "Nunnari"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "ERMES",
        "Gem1",
        "Miro",
        "mitochondrial DNA",
        "mitochondria"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00422"
    },
    {
      "_id": "00425",
      "published_at": "2013-05-28",
      "name": "Decoding the neural mechanisms of human tool use",
      "authors": [
        "Gallivan",
        "McLean",
        "Valyear",
        "Culham"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "fMRI",
        "tool use",
        "intentions",
        "action",
        "perception",
        "motor"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00425"
    },
    {
      "_id": "00426",
      "published_at": "2013-04-09",
      "name": "Usf1, a suppressor of the circadian Clock mutant, reveals the nature of the DNA-binding of the CLOCK:BMAL1 complex in mice",
      "authors": [
        "Shimomura",
        "Kumar",
        "Koike",
        "Kim",
        "Chong",
        "Buhr",
        "Whiteley",
        "Low",
        "Omura",
        "Fenner",
        "Owens",
        "Richards",
        "Yoo",
        "Hong",
        "Vitaterna",
        "Bass",
        "Pletcher",
        "Wiltshire",
        "Hogenesch",
        "Lowrey",
        "Takahashi"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Clock gene",
        "USF1",
        "genetic modifier",
        "circadian rhythms",
        "mouse genetics",
        "ChIP-Seq"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Neuroscience"
      ],
      "url": "/documents/00426"
    },
    {
      "_id": "00429",
      "published_at": "2013-05-21",
      "name": "A novel sphingolipid-TORC1 pathway critically promotes postembryonic development in Caenorhabditis elegans",
      "authors": [
        "Zhu",
        "Shen",
        "Sewell",
        "Kniazeva",
        "Han"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "branched-chain fatty acid",
        "growth arrest",
        "nutrient sensing",
        "NPRL",
        "glucosylceramide",
        "target of rapamycin"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00429"
    },
    {
      "_id": "00435",
      "published_at": "2013-04-02",
      "name": "Structural analyses at pseudo atomic resolution of Chikungunya virus and antibodies show mechanisms of neutralization",
      "authors": [
        "Sun",
        "Xiang",
        "Akahata",
        "Holdaway",
        "Pal",
        "Zhang",
        "Diamond",
        "Nabel",
        "Rossmann"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "neutralizing antibody",
        "Chikungunya virus",
        "electron microscopy",
        "pseudo-atomic",
        "structure",
        "envelope proteins"
      ],
      "organisms": [
        "Viruses"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00435"
    },
    {
      "_id": "00444",
      "published_at": "2013-04-09",
      "name": "SEC24A deficiency lowers plasma cholesterol through reduced PCSK9 secretion",
      "authors": [
        "Chen",
        "Wang",
        "Bajaj",
        "Zhang",
        "Meng",
        "Ma",
        "Bai",
        "Liu",
        "Adams",
        "Baines",
        "Yu",
        "Sartor",
        "Zhang",
        "Yi",
        "Lin",
        "Young",
        "Schekman",
        "Ginsburg"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Secretory pathway",
        "COP II",
        "Cholesterol metabolism"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Biochemistry",
        "Cell biology"
      ],
      "url": "/documents/00444"
    },
    {
      "_id": "00450",
      "published_at": "2013-01-08",
      "name": "Fruit flies step out",
      "authors": [
        "Calabrese"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "walking behaviour",
        "coordination",
        "neurophysiology",
        "sensory feedback",
        "gait analysis",
        "motor neuron"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00450"
    },
    {
      "_id": "00452",
      "published_at": "2013-01-08",
      "name": "Faculty appointments and the record of scholarship",
      "authors": [
        "Brand"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "Point of view",
        "publishing",
        "academic careers",
        "contributorship",
        "ORCID"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00452"
    },
    {
      "_id": "00458",
      "published_at": "2013-04-16",
      "name": "Cohabiting family members share microbiota with one another and with their dogs",
      "authors": [
        "Song",
        "Lauber",
        "Costello",
        "Lozupone",
        "Humphrey",
        "Berg-Lyons",
        "Caporaso",
        "Knights",
        "Clemente",
        "Nakielny",
        "Gordon",
        "Fierer",
        "Knight"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "metagenomics",
        "microbial community transmission",
        "environmental microbial reservoirs",
        "family structure",
        "companion animals"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00458"
    },
    {
      "_id": "00459",
      "published_at": "2013-04-16",
      "name": "The ART-Rsp5 ubiquitin ligase network comprises a plasma membrane quality control system that protects yeast cells from proteotoxic stress",
      "authors": [
        "Zhao",
        "MacGurn",
        "Liu",
        "Emr"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "endocytosis",
        "membrane traffic",
        "ubiquitin",
        "quality control",
        "proteostasis"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00459"
    },
    {
      "_id": "00461",
      "published_at": "2013-02-19",
      "name": "Ribosome structures to near-atomic resolution from thirty thousand cryo-EM particles",
      "authors": [
        "Bai",
        "Fernandez",
        "McMullan",
        "Scheres"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Electron Microscopy",
        "Direct electron detectors",
        "Image processing",
        "T. thermophilus",
        "ribosome",
        "Bayesian"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00461"
    },
    {
      "_id": "00467",
      "published_at": "2013-05-14",
      "name": "Controlling gain one photon at a time",
      "authors": [
        "Schwartz",
        "Rieke"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "macaque",
        "adaptation",
        "retinal signal processing",
        "neural computation"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00467"
    },
    {
      "_id": "00471",
      "published_at": "2013-01-29",
      "name": "RNA-programmed genome editing in human cells",
      "authors": [
        "Jinek",
        "East",
        "Cheng",
        "Lin",
        "Ma",
        "Doudna"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Cas9",
        "endonuclease",
        "genome editing"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00471"
    },
    {
      "_id": "00473",
      "published_at": "2013-04-30",
      "name": "Accurate timekeeping is controlled by a cycling activator in Arabidopsis",
      "authors": [
        "Hsu",
        "Devisetty",
        "Harmer"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "circadian rhythm",
        "transcription factors",
        "evening element",
        "phase"
      ],
      "organisms": [
        "Arabidopsis"
      ],
      "subjects": [
        "Plant biology"
      ],
      "url": "/documents/00473"
    },
    {
      "_id": "00475",
      "published_at": "2012-12-31",
      "name": "Nanoscopy at low light intensities shows its potential",
      "authors": [
        "Gould",
        "Bewersdorf"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "confocal microscopy",
        "fluorescent probes",
        "GFP",
        "nanoscopy",
        "superresolution",
        "live-cell imaging"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00475"
    },
    {
      "_id": "00476",
      "published_at": "2013-01-22",
      "name": "‘Cryptic’ exons reveal some of their secrets",
      "authors": [
        "Calarco"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "HITS-CLIP",
        "Nonsense mediated decay",
        "alternative splicing",
        "RNA regulation",
        "epilepsy",
        "neuronal biology"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience",
        "Biochemistry"
      ],
      "url": "/documents/00476"
    },
    {
      "_id": "00477",
      "published_at": "2013-01-22",
      "name": "Crossing oceans",
      "authors": [
        "Marder"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "living science",
        "careers in science",
        "grad school",
        "postdocs"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00477"
    },
    {
      "_id": "00481",
      "published_at": "2013-04-30",
      "name": "Contributions of mast cells and vasoactive products, leukotrienes and chymase, to dengue virus-induced vascular leakage",
      "authors": [
        "St John",
        "Rathore",
        "Raghavan",
        "Ng",
        "Abraham"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "mast cell",
        "vascular leakage",
        "dengue virus",
        "chymase",
        "leukotrienes"
      ],
      "organisms": [
        "Human",
        "Mouse",
        "Viruses"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00481"
    },
    {
      "_id": "00482",
      "published_at": "2013-04-02",
      "name": "Mechanism for priming DNA synthesis by yeast DNA Polymerase α",
      "authors": [
        "Perera",
        "Torella",
        "Klinge",
        "Kilkenny",
        "Maman",
        "Pellegrini"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "DNA replication",
        "DNA polymerase",
        "Initiation of DNA synthesis"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Genes and chromosomes"
      ],
      "url": "/documents/00482"
    },
    {
      "_id": "00488",
      "published_at": "2013-02-20",
      "name": "Correction: RecA filament sliding on DNA facilitates homology search",
      "authors": [
        "Ragunathan",
        "Liu",
        "Ha"
      ],
      "journal": "eLife",
      "article-type": "Correction",
      "keywords": [
        "Single Molecule",
        "FRET",
        "DNA repair",
        "Homologous Recombination"
      ],
      "organisms": [
        "E. coli"
      ],
      "subjects": [
        "Biochemistry",
        "Biophysics and structural biology"
      ],
      "url": "/documents/00488"
    },
    {
      "_id": "00491",
      "published_at": "2013-01-22",
      "name": "How to train a neuron",
      "authors": [
        "Costa",
        "Watt",
        "Sjöström"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "synaptic plasticity",
        "STDP",
        "visual cortex",
        "circuits",
        "in vivo",
        "spiking patterns"
      ],
      "organisms": [
        "Rat"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00491"
    },
    {
      "_id": "00498",
      "published_at": "2013-05-28",
      "name": "Pharmacological brake-release of mRNA translation enhances cognitive memory",
      "authors": [
        "Sidrauski",
        "Acosta-Alvear",
        "Khoutorsky",
        "Vedantham",
        "Hearn",
        "Li",
        "Gamache",
        "Gallagher",
        "Ang",
        "Wilson",
        "Okreglak",
        "Ashkenazi",
        "Hann",
        "Nader",
        "Arkin",
        "Renslo",
        "Sonenberg",
        "Walter"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "eIF2",
        "eIF2B",
        "ATF4",
        "integrated stress response",
        "unfolded protein response",
        "memory consolidation"
      ],
      "organisms": [
        "Human",
        "Mouse",
        "Rat"
      ],
      "subjects": [
        "Cell biology",
        "Neuroscience"
      ],
      "url": "/documents/00498"
    },
    {
      "_id": "00499",
      "published_at": "2013-04-09",
      "name": "Overcoming mutation-based resistance to antiandrogens with rational drug design",
      "authors": [
        "Balbas",
        "Evans",
        "Hosfield",
        "Wongvipat",
        "Arora",
        "Watson",
        "Chen",
        "Greene",
        "Shen",
        "Sawyers"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "prostate cancer",
        "androgen receptor",
        "drug resistance"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Human biology and medicine"
      ],
      "url": "/documents/00499"
    },
    {
      "_id": "00505",
      "published_at": "2013-06-11",
      "name": "The homologous recombination machinery modulates the formation of RNA–DNA hybrids and associated chromosome instability",
      "authors": [
        "Wahba",
        "Gore",
        "Koshland"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "R loops",
        "RNA-DNA hybrids",
        "Rad51",
        "genome instability",
        "DNA repair"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00505"
    },
    {
      "_id": "00515",
      "published_at": "2013-02-05",
      "name": "A new answer to old questions",
      "authors": [
        "Barral"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Aging",
        "Metabolism",
        "Oxidative Stress",
        "Redox Regulation",
        "Redox Proteomics"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00515"
    },
    {
      "_id": "00518",
      "published_at": "2013-06-25",
      "name": "CAMKII and Calcineurin regulate the lifespan of Caenorhabditis elegans through the FOXO transcription factor DAF-16",
      "authors": [
        "Tao",
        "Xie",
        "Ding",
        "Li",
        "Peng",
        "Zhang",
        "Tan",
        "Yuan",
        "Dong"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "aging",
        "lifespan",
        "FOXO",
        "CAMKII",
        "calcineurin",
        "DAF-16"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Biochemistry",
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00518"
    },
    {
      "_id": "00523",
      "published_at": "2013-06-04",
      "name": "Passive and active DNA methylation and the interplay with genetic variation in gene regulation",
      "authors": [
        "Gutierrez-Arcelus",
        "Lappalainen",
        "Montgomery",
        "Buil",
        "Ongen",
        "Yurovsky",
        "Bryois",
        "Giger",
        "Romano",
        "Planchon",
        "Falconnet",
        "Bielser",
        "Gagnebin",
        "Padioleau",
        "Borel",
        "Letourneau",
        "Makrythanasis",
        "Guipponi",
        "Gehrig",
        "Antonarakis",
        "Dermitzakis"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "methylation",
        "gene regulation",
        "epigenetics",
        "genome variation"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00523"
    },
    {
      "_id": "00534",
      "published_at": "2013-04-16",
      "name": "DNA deaminases induce break-associated mutation showers with implication of APOBEC3B and 3A in breast cancer kataegis",
      "authors": [
        "Taylor",
        "Nik-Zainal",
        "Wu",
        "Stebbings",
        "Raine",
        "Campbell",
        "Rada",
        "Stratton",
        "Neuberger"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Hypermutation",
        "DNA deamination",
        "AID/APOBECs",
        "Kataegis",
        "Cancer",
        "Cytidine deamination"
      ],
      "organisms": [
        "Human",
        "S. cerevisiae"
      ],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00534"
    },
    {
      "_id": "00537",
      "published_at": "2013-05-21",
      "name": "MicroRNA-146a acts as a guardian of the quality and longevity of hematopoietic stem cells in mice",
      "authors": [
        "Zhao",
        "Rao",
        "O’Connell",
        "Garcia-Flores",
        "Baltimore"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "hematopoiesis",
        "inflammation",
        "microRNA",
        "HSC",
        "cancer",
        "NF-kappaB"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Immunology"
      ],
      "url": "/documents/00537"
    },
    {
      "_id": "00558",
      "published_at": "2013-06-04",
      "name": "Stapled Golgi cisternae remain in place as cargo passes through the stack",
      "authors": [
        "Lavieu",
        "Zheng",
        "Rothman"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Golgi",
        "Traffic",
        "Membrane"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00558"
    },
    {
      "_id": "00563",
      "published_at": "2013-01-29",
      "name": "Bacteria herald a new era of gene editing",
      "authors": [
        "Segal"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Cas9",
        "endonuclease",
        "genome editing"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00563"
    },
    {
      "_id": "00565",
      "published_at": "2013-02-11",
      "name": "Correction: Quantification of gait parameters in freely walking wild type and sensory deprived Drosophila melanogaster",
      "authors": [],
      "journal": "eLife",
      "article-type": "Correction",
      "keywords": [
        "walking behavior",
        "coordination",
        "proprioception",
        "sensory feedback",
        "gait analysis",
        "motor neuron"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00565"
    },
    {
      "_id": "00571",
      "published_at": "2013-02-19",
      "name": "Developing cell biology",
      "authors": [
        "Needleman"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "mitotic spindle",
        "embryogenesis",
        "microtubule",
        "kif2a",
        "intracellular scaling",
        "mitosis"
      ],
      "organisms": [
        "Xenopus"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00571"
    },
    {
      "_id": "00572",
      "published_at": "2013-02-19",
      "name": "Different routes to the same destination",
      "authors": [
        "Hayashi",
        "Iwasaki"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Toll-like receptors",
        "UNC93B1",
        "trafficking",
        "AP-2"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00572"
    },
    {
      "_id": "00573",
      "published_at": "2013-02-19",
      "name": "Direct detection pays off for electron cryo-microscopy",
      "authors": [
        "Grigorieff"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Electron microscopy",
        "Image processing",
        "T. thermophilus",
        "Direct electron detectors",
        "ribosome",
        "Bayesian"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00573"
    },
    {
      "_id": "00577",
      "published_at": "2013-03-08",
      "name": "Building a super elongation complex for HIV",
      "authors": [
        "Hill",
        "Sundquist"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "transcription elongation",
        "super elongation complex",
        "SEC",
        "intrinsically disordered proteins",
        "structural biology"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Genes and chromosomes"
      ],
      "url": "/documents/00577"
    },
    {
      "_id": "00592",
      "published_at": "2013-04-30",
      "name": "Native α-synuclein induces clustering of synaptic-vesicle mimics via binding to phospholipids and synaptobrevin-2/VAMP2",
      "authors": [
        "Diao",
        "Burré",
        "Vivona",
        "Cipriano",
        "Sharma",
        "Kyoung",
        "Südhof",
        "Brunger"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Parkinson's disease",
        "synaptic terminals",
        "alpha-synuclein"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Neuroscience"
      ],
      "url": "/documents/00592"
    },
    {
      "_id": "00593",
      "published_at": "2013-02-26",
      "name": "Bidding the CpG island goodbye",
      "authors": [
        "Greally"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "CpG islands",
        "DNA methylation",
        "Epigenetics",
        "Chromatin",
        "Evolutionary conservation"
      ],
      "organisms": [
        "Chicken",
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Genes and chromosomes",
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00593"
    },
    {
      "_id": "00594",
      "published_at": "2013-05-21",
      "name": "Structure of a pore-blocking toxin in complex with a eukaryotic voltage-dependent K+ channel",
      "authors": [
        "Banerjee",
        "Lee",
        "Campbell",
        "MacKinnon"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Ion Channel",
        "Toxin",
        "Voltage-dependent K+ Channel",
        "Scorpion toxin"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Neuroscience"
      ],
      "url": "/documents/00594"
    },
    {
      "_id": "00603",
      "published_at": "2013-06-18",
      "name": "Evolutionary principles of modular gene regulation in yeasts",
      "authors": [
        "Thompson",
        "Roy",
        "Chan",
        "Styczynsky",
        "Pfiffner",
        "French",
        "Socha",
        "Thielke",
        "Napolitano",
        "Muller",
        "Kellis",
        "Konieczka",
        "Wapinski",
        "Regev"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "regulatory evolution",
        "duplication",
        "divergence",
        "carbon lifestyle",
        "module",
        "gene expression"
      ],
      "organisms": [
        "S. cerevisiae",
        "S. pombe"
      ],
      "subjects": [
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00603"
    },
    {
      "_id": "00605",
      "published_at": "2013-03-20",
      "name": "What's new is older",
      "authors": [
        "Rangel",
        "Eichenbaum"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "learning and memory",
        "dentate gyrus",
        "pattern separation",
        "CA1",
        "hippocampus",
        "neuroscience"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00605"
    },
    {
      "_id": "00615",
      "published_at": "2013-03-05",
      "name": "What does it take to recruit and retain senior women faculty?",
      "authors": [
        "Watt"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "Point of view",
        "women in science",
        "careers in science",
        "academic careers"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00615"
    },
    {
      "_id": "00625",
      "published_at": "2013-03-26",
      "name": "Sugars speed up the circle of life",
      "authors": [
        "Proveniers"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "microRNA",
        "developmental timing",
        "phase change",
        "sugar",
        "heteroblasty",
        "plant biology"
      ],
      "organisms": [
        "Arabidopsis"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Plant biology"
      ],
      "url": "/documents/00625"
    },
    {
      "_id": "00626",
      "published_at": "2013-05-21",
      "name": "Predicting mosquito infection from Plasmodium falciparum gametocyte density and estimating the reservoir of infection",
      "authors": [
        "Churcher",
        "Bousema",
        "Walker",
        "Drakeley",
        "Schneider",
        "Ouédraogo",
        "Basáñez"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Malaria",
        "Mathematical Model",
        "Gametocyte",
        "Mosquito",
        "Reservoir of infection"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Epidemiology and global health"
      ],
      "url": "/documents/00626"
    },
    {
      "_id": "00631",
      "published_at": "2013-05-14",
      "name": "Stability-mediated epistasis constrains the evolution of an influenza protein",
      "authors": [
        "Gong",
        "Suchard",
        "Bloom"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "epistasis",
        "protein evolution",
        "influenza",
        "protein stability"
      ],
      "organisms": [
        "Viruses"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00631"
    },
    {
      "_id": "00632",
      "published_at": "2013-06-14",
      "name": "Viral genome structures are optimal for capsid assembly",
      "authors": [
        "Perlmutter",
        "Qiao",
        "Hagan"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "virus capsid",
        "self assembly",
        "RNA Packaging"
      ],
      "organisms": [
        "Viruses"
      ],
      "subjects": [
        "Biophysics and structural biology"
      ],
      "url": "/documents/00632"
    },
    {
      "_id": "00633",
      "published_at": "2013-06-18",
      "name": "Histone demethylase Lsd1 represses hematopoietic stem and progenitor cell signatures during blood cell maturation",
      "authors": [
        "Kerenyi",
        "Shao",
        "Hsu",
        "Guo",
        "Luc",
        "O'Brien",
        "Fujiwara",
        "Peng",
        "Nguyen",
        "Orkin"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "histone demethylase",
        "Lsd1",
        "KDM1",
        "HSC",
        "granulocyte",
        "enhancer"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Genes and chromosomes"
      ],
      "url": "/documents/00633"
    },
    {
      "_id": "00638",
      "published_at": "2013-03-19",
      "name": "How to draw the line in biomedical research",
      "authors": [
        "Huang",
        "Rattner",
        "Liu",
        "Nathans"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "Tutorial",
        "statistics",
        "publishing"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00638"
    },
    {
      "_id": "00639",
      "published_at": "2013-04-02",
      "name": "Basic research at the epicenter of an epidemic",
      "authors": [
        "Bishai"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "TB",
        "HIV",
        "K-RITH",
        "drug resistance",
        "epidemic",
        "South Africa"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00639"
    },
    {
      "_id": "00640",
      "published_at": "2013-06-11",
      "name": "miR-124 controls male reproductive success in Drosophila",
      "authors": [
        "Weng",
        "Chin",
        "Yew",
        "Bushati",
        "Cohen"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "microRNA",
        "pheromome",
        "behaviour",
        "genetics",
        "selection",
        "evolution"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00640"
    },
    {
      "_id": "00641",
      "published_at": "2013-03-19",
      "name": "Multitasking on the run",
      "authors": [
        "Hatten",
        "Lisberger"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "cerebellum",
        "corollary discharge",
        "proprioception"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00641"
    },
    {
      "_id": "00642",
      "published_at": "2013-03-26",
      "name": "The writing on the wall",
      "authors": [
        "Bourne"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "point of view",
        "science policy and funding",
        "careers in science",
        "NIH",
        "postdocs",
        "grad school"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00642"
    },
    {
      "_id": "00646",
      "published_at": "2013-03-12",
      "name": "Hip, hip, hooray!",
      "authors": [
        "Pewsey"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "Science writing competition",
        "outreach",
        "open access"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00646"
    },
    {
      "_id": "00647",
      "published_at": "2013-06-25",
      "name": "Rigid firing sequences undermine spatial memory codes in a neurodegenerative mouse model",
      "authors": [
        "Cheng",
        "Ji"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "learning and memory",
        "hippocampus",
        "place cells",
        "Alzheimer's disease",
        "neurodegeneration",
        "tau"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00647"
    },
    {
      "_id": "00648",
      "published_at": "2013-03-26",
      "name": "Shedding new light on the origins of olfactory neurons",
      "authors": [
        "Whitfield"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "developmental neurobiology",
        "olfactory development",
        "microvillous sensory neurons",
        "neurogenesis",
        "neural crest migration"
      ],
      "organisms": [
        "Zebrafish"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Neuroscience"
      ],
      "url": "/documents/00648"
    },
    {
      "_id": "00655",
      "published_at": "2013-04-02",
      "name": "A sticky solution",
      "authors": [
        "Gresham"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Multicellularity",
        "Experimental evolution",
        "Evolution of cooperation"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00655"
    },
    {
      "_id": "00658",
      "published_at": "2013-05-28",
      "name": "TRPM5-mediated calcium uptake regulates mucin secretion from human colon goblet cells",
      "authors": [
        "Mitrovic",
        "Nogueira",
        "Cantero-Recasens",
        "Kiefer",
        "Fernández-Fernández",
        "Popoff",
        "Casano",
        "Bard",
        "Gomez",
        "Valverde",
        "Malhotra"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Mucin5AC",
        "TRPM5",
        "Secretion"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00658"
    },
    {
      "_id": "00659",
      "published_at": "2013-04-09",
      "name": "Shedding new light on circadian clocks",
      "authors": [
        "Demarque",
        "Schibler"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Clock gene",
        "USF1",
        "genetic modifier",
        "circadian rhythms",
        "mouse genetics",
        "ChIP-Seq"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Neuroscience"
      ],
      "url": "/documents/00659"
    },
    {
      "_id": "00663",
      "published_at": "2013-04-09",
      "name": "Opening up new fronts in the fight against cholesterol",
      "authors": [
        "DeBose-Boyd",
        "Horton"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Secretory pathway",
        "COP II",
        "Cholesterol metabolism"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Biochemistry"
      ],
      "url": "/documents/00663"
    },
    {
      "_id": "00668",
      "published_at": "2013-06-18",
      "name": "The autoregulation of a eukaryotic DNA transposon",
      "authors": [
        "Claeys Bouuaert",
        "Lipkow",
        "Andrews",
        "Liu",
        "Chalmers"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "DNA recombination",
        "evolution",
        "Host–parasite interactions",
        "systems modeling",
        "allostery",
        "allosteric"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biochemistry",
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00668"
    },
    {
      "_id": "00669",
      "published_at": "2013-06-25",
      "name": "Arabidopsis plants perform arithmetic division to prevent starvation at night",
      "authors": [
        "Scialdone",
        "Mugford",
        "Feike",
        "Skeffington",
        "Borrill",
        "Graf",
        "Smith",
        "Howard"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Brachypodium",
        "Post-translational arithmetic",
        "Starch degradation"
      ],
      "organisms": [
        "Arabidopsis",
        "Other"
      ],
      "subjects": [
        "Plant biology"
      ],
      "url": "/documents/00669"
    },
    {
      "_id": "00675",
      "published_at": "2013-06-11",
      "name": "Temporal transcriptional response to ethylene gas drives growth hormone cross-regulation in Arabidopsis",
      "authors": [
        "Chang",
        "Zhong",
        "Weirauch",
        "Hon",
        "Pelizzola",
        "Li",
        "Huang",
        "Schmitz",
        "Urich",
        "Kuo",
        "Nery",
        "Qiao",
        "Yang",
        "Jamali",
        "Chen",
        "Ideker",
        "Ren",
        "Bar-Joseph",
        "Hughes",
        "Ecker"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "transcriptional regulation",
        "temporal modulation",
        "network",
        "ethylene",
        "hormone"
      ],
      "organisms": [],
      "subjects": [
        "Plant biology"
      ],
      "url": "/documents/00675"
    },
    {
      "_id": "00676",
      "published_at": "2013-04-16",
      "name": "Luck, jobs and learning",
      "authors": [
        "Marder"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "Living science",
        "careers in science",
        "grad school",
        "postdocs"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00676"
    },
    {
      "_id": "00692",
      "published_at": "2013-04-09",
      "name": "Designer antiandrogens join the race against drug resistance",
      "authors": [
        "Josan",
        "Katzenellenbogen"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "prostate cancer",
        "androgen receptor",
        "drug resistance"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Human biology and medicine"
      ],
      "url": "/documents/00692"
    },
    {
      "_id": "00704",
      "published_at": "2013-06-04",
      "name": "MCU encodes the pore conducting mitochondrial calcium currents",
      "authors": [
        "Chaudhuri",
        "Sancak",
        "Mootha",
        "Clapham"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "mitoplast",
        "MICU1",
        "ruthenium red",
        "calcium channel",
        "electrophysiology",
        "MCUR1"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Biochemistry",
        "Cell biology"
      ],
      "url": "/documents/00704"
    },
    {
      "_id": "00729",
      "published_at": "2013-04-16",
      "name": "Evolution, ovulation and cancer",
      "authors": [
        "VijayRaghavan",
        "Rath"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "ovulation",
        "sperm storage",
        "exocrine glands",
        "nuclear receptor",
        "Notch signaling",
        "cancer"
      ],
      "organisms": [
        "D. melanogaster"
      ],
      "subjects": [
        "Cell biology",
        "Developmental biology and stem cells"
      ],
      "url": "/documents/00729"
    },
    {
      "_id": "00731",
      "published_at": "2013-05-28",
      "name": "The rise and fall of the Phytophthora infestans lineage that triggered the Irish potato famine",
      "authors": [
        "Yoshida",
        "Schuenemann",
        "Cano",
        "Pais",
        "Mishra",
        "Sharma",
        "Lanz",
        "Martin",
        "Kamoun",
        "Krause",
        "Thines",
        "Weigel",
        "Burbano"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Phytophthora infestans",
        "Solanum tuberosum",
        "Herbarium",
        "ancient DNA"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00731"
    },
    {
      "_id": "00736",
      "published_at": "2013-06-25",
      "name": "Dismantling the Papez circuit for memory in rats",
      "authors": [
        "Vann"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "memory",
        "hippocampus",
        "mammillary bodies",
        "Gudden's tegmental nuclei",
        "retrosplenial cortex",
        "prefrontal cortex"
      ],
      "organisms": [
        "Rat"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00736"
    },
    {
      "_id": "00744",
      "published_at": "2013-06-11",
      "name": "Intraflagellar transport drives flagellar surface motility",
      "authors": [
        "Shih",
        "Engel",
        "Kocabas",
        "Bilyard",
        "Gennerich",
        "Marshall",
        "Yildiz"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "intraflagellar transport",
        "gliding motility",
        "Chlamydomonas",
        "dynein",
        "kinesin",
        "single molecule"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Cell biology"
      ],
      "url": "/documents/00744"
    },
    {
      "_id": "00745",
      "published_at": "2013-06-11",
      "name": "Scaffold nucleoporins Nup188 and Nup192 share structural and functional properties with nuclear transport receptors",
      "authors": [
        "Andersen",
        "Onischenko",
        "Tang",
        "Kumar",
        "Chen",
        "Ulrich",
        "Liphardt",
        "Weis",
        "Schwartz"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "nucleocytoplasmic transport",
        "macromolecular assemblages"
      ],
      "organisms": [],
      "subjects": [
        "Biophysics and structural biology",
        "Cell biology"
      ],
      "url": "/documents/00745"
    },
    {
      "_id": "00747",
      "published_at": "2013-06-25",
      "name": "Evolutionary dynamics of cancer in response to targeted combination therapy",
      "authors": [
        "Bozic",
        "Reiter",
        "Allen",
        "Antal",
        "Chatterjee",
        "Shah",
        "Moon",
        "Yaqubie",
        "Kelly",
        "Le",
        "Lipson",
        "Chapman",
        "Diaz",
        "Vogelstein",
        "Nowak"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "mathematical biology",
        "cancer",
        "stochastic processes",
        "targeted therapy",
        "genetics"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00747"
    },
    {
      "_id": "00757",
      "published_at": "2013-05-14",
      "name": "EBI2-mediated bridging channel positioning supports splenic dendritic cell homeostasis and particulate antigen capture",
      "authors": [
        "Yi",
        "Cyster"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "Dendritic cells",
        "EBI2",
        "Oxysterols",
        "antigen capture",
        "spleen bridging channel",
        "lymphotoxin"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00757"
    },
    {
      "_id": "00767",
      "published_at": "2013-04-30",
      "name": "Unmasking the role of mast cells in dengue",
      "authors": [
        "Avirutnan",
        "Matangkasombut"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "mast cell",
        "vascular leakage",
        "dengue virus",
        "chymase",
        "leukotrienes",
        "infectious disease"
      ],
      "organisms": [
        "Human",
        "Mouse",
        "Viruses"
      ],
      "subjects": [
        "Immunology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00767"
    },
    {
      "_id": "00791",
      "published_at": "2013-04-30",
      "name": "Time for a change",
      "authors": [
        "Sanchez",
        "Yanovsky"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "circadian rhythm",
        "transcription factors",
        "evening element",
        "circadian rhythms"
      ],
      "organisms": [
        "Arabidopsis"
      ],
      "subjects": [
        "Plant biology"
      ],
      "url": "/documents/00791"
    },
    {
      "_id": "00799",
      "published_at": "2013-04-30",
      "name": "The eLife approach to peer review",
      "authors": [
        "Schekman",
        "Watt",
        "Weigel"
      ],
      "journal": "eLife",
      "article-type": "Editorial",
      "keywords": [
        "scientific publishing",
        "publishing",
        "peer review"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00799"
    },
    {
      "_id": "00804",
      "published_at": "2013-05-14",
      "name": "Make or break for mitochondria",
      "authors": [
        "Nezich",
        "Youle"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "ERMES",
        "Gem1",
        "Miro",
        "mitochondrial DNA",
        "mitochondria"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00804"
    },
    {
      "_id": "00808",
      "published_at": "2013-06-18",
      "name": "Condensin controls recruitment of RNA polymerase II to achieve nematode X-chromosome dosage compensation",
      "authors": [
        "Kruesi",
        "Core",
        "Waters",
        "Lis",
        "Meyer"
      ],
      "journal": "eLife",
      "article-type": "Research Article",
      "keywords": [
        "dosage compensation",
        "transcription",
        "X-chromosome and autosome balance",
        "transcription start site identification technology",
        "X chromosome"
      ],
      "organisms": [
        "C. elegans"
      ],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00808"
    },
    {
      "_id": "00842",
      "published_at": "2013-05-14",
      "name": "Influenza evolution navigates stability valleys",
      "authors": [
        "Rorick",
        "Pascual"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "epistasis",
        "protein evolution",
        "protein instability",
        "influenza"
      ],
      "organisms": [
        "Viruses"
      ],
      "subjects": [
        "Genomics and evolutionary biology",
        "Microbiology and infectious disease"
      ],
      "url": "/documents/00842"
    },
    {
      "_id": "00855",
      "published_at": "2013-05-16",
      "name": "Reforming research assessment",
      "authors": [
        "Schekman",
        "Patterson"
      ],
      "journal": "eLife",
      "article-type": "Editorial",
      "keywords": [
        "research assessment",
        "science policy",
        "scientific publishing",
        "publishing",
        "eLife"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00855"
    },
    {
      "_id": "00856",
      "published_at": "2013-05-28",
      "name": "Building for the future",
      "authors": [
        "Pelham"
      ],
      "journal": "eLife",
      "article-type": "Feature Article",
      "keywords": [
        "point of view",
        "science policy and funding",
        "history of science",
        "MRC",
        "LMB",
        "careers in science"
      ],
      "organisms": [],
      "subjects": [],
      "url": "/documents/00856"
    },
    {
      "_id": "00866",
      "published_at": "2013-05-28",
      "name": "Watching the brain in action",
      "authors": [
        "Mahon"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "fMRI",
        "tool use",
        "intentions",
        "action",
        "neuroscience",
        "motor"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Neuroscience"
      ],
      "url": "/documents/00866"
    },
    {
      "_id": "00873",
      "published_at": "2013-05-21",
      "name": "The scorpion toxin and the potassium channel",
      "authors": [
        "Swartz"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "ion channel",
        "toxin",
        "voltage-dependent K+ channel",
        "scorpion toxin"
      ],
      "organisms": [
        "None"
      ],
      "subjects": [
        "Biophysics and structural biology",
        "Neuroscience"
      ],
      "url": "/documents/00873"
    },
    {
      "_id": "00895",
      "published_at": "2013-05-28",
      "name": "Less translational control, more memory",
      "authors": [
        "Pavitt"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "eIF2",
        "eIF2B",
        "ATF4",
        "integrated stress response",
        "unfolded protein response",
        "memory consolidation"
      ],
      "organisms": [
        "Human",
        "Mouse",
        "Rat"
      ],
      "subjects": [
        "Cell biology",
        "Neuroscience"
      ],
      "url": "/documents/00895"
    },
    {
      "_id": "00903",
      "published_at": "2013-06-11",
      "name": "Hopping rim to rim through the Golgi",
      "authors": [
        "Pfeffer"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Golgi",
        "Traffic",
        "Membrane",
        "Cell biology"
      ],
      "organisms": [
        "Human"
      ],
      "subjects": [
        "Cell biology"
      ],
      "url": "/documents/00903"
    },
    {
      "_id": "00914",
      "published_at": "2013-06-11",
      "name": "Rad51, friend or foe?",
      "authors": [
        "Tan-Wong",
        "Proudfoot"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "R loops",
        "RNA-DNA hybrids",
        "Rad51",
        "Genome Instability",
        "DNA repair"
      ],
      "organisms": [
        "S. cerevisiae"
      ],
      "subjects": [
        "Genes and chromosomes"
      ],
      "url": "/documents/00914"
    },
    {
      "_id": "00933",
      "published_at": "2013-06-18",
      "name": "Yeast rises to the occasion",
      "authors": [
        "Ragan"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "regulatory evolution",
        "duplication",
        "divergence",
        "carbon lifestyle",
        "module",
        "gene expression"
      ],
      "organisms": [
        "S. cerevisiae",
        "S. pombe"
      ],
      "subjects": [
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00933"
    },
    {
      "_id": "00948",
      "published_at": "2013-06-18",
      "name": "Keeping blood vessels out of sight",
      "authors": [
        "Sim",
        "Fruttiger"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "metabolism",
        "retinal vasculature",
        "soluble VEGF receptor-1",
        "vascular demarcation",
        "transgenic model",
        "ophthalmology"
      ],
      "organisms": [
        "Human",
        "Mouse"
      ],
      "subjects": [
        "Cell biology",
        "Human biology and medicine"
      ],
      "url": "/documents/00948"
    },
    {
      "_id": "00954",
      "published_at": "2013-06-18",
      "name": "The early days of late blight",
      "authors": [
        "Birch",
        "Cooke"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "Phytophthora infestans",
        "Solanum tuberosum",
        "Herbarium",
        "ancient DNA"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Genomics and evolutionary biology"
      ],
      "url": "/documents/00954"
    },
    {
      "_id": "00963",
      "published_at": "2013-06-18",
      "name": "The lasting influence of LSD1 in the blood",
      "authors": [
        "Dent",
        "Chandra"
      ],
      "journal": "eLife",
      "article-type": "Insight",
      "keywords": [
        "histone demethylase",
        "Lsd1",
        "KDM1",
        "hematopoietic stem cells",
        "granulocyte",
        "enhancer"
      ],
      "organisms": [
        "Mouse"
      ],
      "subjects": [
        "Developmental biology and stem cells",
        "Genes and chromosomes"
      ],
      "url": "/documents/00963"
    },
    {
      "_id": "00992",
      "published_at": "2013-06-11",
      "name": "Correction: Feeding-induced rearrangement of green leaf volatiles reduces moth oviposition",
      "authors": [
        "Allmann",
        "Späthe",
        "Bisch-Knaden",
        "Kallenbach",
        "Reinecke",
        "Sachse",
        "Baldwin",
        "Hansson"
      ],
      "journal": "eLife",
      "article-type": "Correction",
      "keywords": [
        "plant volatiles",
        "oviposition",
        "Ca imaging"
      ],
      "organisms": [
        "Other"
      ],
      "subjects": [
        "Ecology",
        "Neuroscience"
      ],
      "url": "/documents/00992"
    },
    {
      "_id": "01045",
      "published_at": "2013-06-14",
      "name": "Correction: Passive and active DNA methylation and the interplay with genetic variation in gene regulation",
      "authors": [
        "Gutierrez-Arcelus",
        "Lappalainen",
        "Montgomery",
        "Buil",
        "Ongen",
        "Yurovsky",
        "Bryois",
        "Giger",
        "Romano",
        "Planchon",
        "Falconnet",
        "Bielser",
        "Gagnebin",
        "Padioleau",
        "Borel",
        "Letourneau",
        "Makrythanasis",
        "Guipponi",
        "Gehrig",
        "Antonarakis",
        "Dermitzakis"
      ],
      "journal": "eLife",
      "article-type": "Correction",
      "keywords": [],
      "organisms": [],
      "subjects": [
        "Genomics and evolutionary biology",
        "Human biology and medicine"
      ],
      "url": "/documents/01045"
    }
  ]
};