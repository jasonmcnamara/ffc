<?php
    header("Content-type:application/json;charset=utf-8");

    if(isset($_GET["x"]))
    {
        $sanitizedGet = filter_var($_GET["x"]);
    }
    
/*
    if($sanitizedGet === "ff6")
    {
        $data = [
            "ff6" => [
                "characterNames" => [
                    "Terra-Bradford",
                    "Locke-Cole",
                    "Celes-Chere",
                    "Edgar-Figaro",
                    "Sabin-Figaro",
                    "Cyan-Garamonde",
                    "Shadow",
                    "Gau",
                    "Setzer-Gabbiani",
                    "Strago-Magus",
                    "Relm-Arrowny",
                    "Mog",
                    "Gogo",
                    "Umaro",
                    "Kefka-Palazzo",
                    "Ultros",
                    "Chupon",
                    "Leo-Christophe",
                    "Banon",
                    "Cid-Marquez",
                    "Emperor-Gestahl",
                    "Maduin",
                    "Madonna",
                    "The-Warring-Triad"
                ]
            ]
        ];
        $data["testCheck"] = "Chyeah!";
        $data["theGetDataBruh"] = $_GET["x"];
        echo json_encode($data);
        
    }
    else
    {
        $data["testCheck"] = "Nope";
        echo json_encode($data);
        
    }
*/
    switch($sanitizedGet)
    {
        case "ff6":
            $data = [
                "ff6" => [
                    "characterNames" => [
                        "Terra-Bradford",
                        "Locke-Cole",
                        "Celes-Chere",
                        "Edgar-Figaro",
                        "Sabin-Figaro",
                        "Cyan-Garamonde",
                        "Shadow",
                        "Gau",
                        "Setzer-Gabbiani",
                        "Strago-Magus",
                        "Relm-Arrowny",
                        "Mog",
                        "Gogo",
                        "Umaro",
                        "Kefka-Palazzo",
                        "Ultros",
                        "Chupon",
                        "Leo-Christophe",
                        "Banon",
                        "Cid-Marquez",
                        "Emperor-Gestahl",
                        "Maduin",
                        "Madonna",
                        "The-Warring-Triad"
                    ],
                    "characterBio" => [
                        "Terra serves as the main protagonist. She is the daughter of a human and a magic creature known as an \"Esper.\" Mentally enslaved by the antagonistic Gestahlian Empire, which exploits her magic powers for militaristic purposes, she is rescued by rebels at the beginning of the game.",
                        "He is a thief, but prefers to be called a \"treasure hunter\". Locke is introduced as a contact, spy, and saboteur for the Returners, the resistance group to the Gestahlian Empire.",
                        "A former general of the Empire, genetically and artificially enhanced into a Magitek Knight following a magic infusion.",
                        "The young king of Figaro. Years before the game's events, neither he nor his twin brother, Sabin, bear any desire for the crown. Edgar determines the succession with the flip of a double-sided coin to grant his brother's deeper wish for a free life, relegating himself to the burden of rule.",
                        "The younger twin brother of Edgar.  Disgusted by the cold arbitration of his royal succession, Sabin leaves his heritage behind after winning a rigged coin toss to determine whether he or Edgar would not inherit Figaro's throne. He initially trains under the world-famous martial arts master Duncan Harcourt together with Duncan's son, Vargas.",
                        "A retainer to the king of Doma, a nation at war with the Empire.<br /><br /> Stalwart in the defense of his home against the Empire's assault, he flies into a murderous rage after Kefka poisons Doma's water supply, which kills virtually everyone in the castle, including his wife and child. Launching a suicidal attack on the Imperial siege encampment, Cyan is assisted and rescued by Sabin. Shortly thereafter he encounters the spirits of his deceased loved ones aboard the Phantom Train, sending him into a depressed spiral that persists until the game's second half. Cyan later grows close to Gau after finding him on the Veldt, taking a protective, almost fatherly role over the abandoned child.",
                        "A paid assassin and mercenary, always accompanied by his faithful dog, Interceptor.",
                        "A feral child who lives among the animals on the Veldt, having survived in this harsh environment nearly his entire life. His powers of speech are poor, barely capable of communicating with others and often growing frustrated with complex sentences. Initially encountered by Sabin and Cyan, Gau is tempted into the party with a slab of dried meat and returns the favor by presenting the pair with Mobliz' missing Diving Helm, enabling the trio to survive the underwater current of the Serpent's Trench and eventually reunite with the Returners. He grows close to Cyan very quickly, becoming fast friends with him immediately upon their first meeting, calling him \"Mr. Thou\".",
                        "A gambler who owns the Blackjack, the only known airship in the world. He is first encountered by the party after being tricked into kidnapping Celes Chere instead of Maria, the opera diva with whom he's enraptured.",
                        "An elderly gentleman living in the village of Thamasa. He is Relm's grandfather and (together with the other inhabitants of Thamasa) a descendant of the ancient Mage Warriors who fought in the War of the Magi. Through his magical ancestry, Strago is able to learn techniques used by enemies, known as Lore (Blue Magic).",
                        "A ten-year-old artist from the village of Thamasa, the granddaughter of Strago and the youngest playable character in the game. When the group arrives in Thamasa, she meets them briefly, and they later save her from a burning house.",
                        "A moogle who lives within the caves of Narshe with the rest of his species. He is distinguished from all the other moogles encountered in that he can speak human language, which was taught to him by the Esper, Ramuh, in Mog's dreams.",
                        'The first of two hidden characters in the game, encountered should the party be engulfed entirely by a creature on Triangle Island called the Zone Eater. A self-described "master of simulacrum," Gogo opts to mimic the party\'s desire to save the world, thus accompanying them.<br/><br/>Gogo\'s gender is not known. He or she is so shrouded in clothing that even the body\'s form is indecipherable.',
                        "A yeti and the second hidden character in the game. In the World of Balance, references to him are made by citizens of Narshe with dubious sobriety, though he can be seen peering out of a cave above the entrance to the mine shafts. He is encountered much later in the game during the World of Ruin, after the group fights him over a Magicite shard. Should Mog be in the player party, he will convince Umaro to join the group.",
                        "A sociopathic nihilist who served the Gestahlian Empire as Court Mage until he used the Warring Triad to devastate the world. He serves as the main antagonist of the game.",
                        "A large, talking, purple, carnivorous octopus who appears multiple times as both antagonist and comic relief.",
                        "A large, red, two-headed floating monster, who appears as Ultros' \"friend\" while fighting the party while they are going to the Floating Continent, the final stage of the World of Balance. Chupon doesn't speak often but has a volatile temper, according to Ultros.",
                        "One of the three top generals of the Empire, the others being Celes and Kefka. Unlike his compatriots, Leo refused to undergo Magitek infusion. Fiercely loyal and possessed of a strong sense of personal honor, Leo conducts himself with a measure of restraint and ability otherwise absent in the tyrannical ambitions of the Empire.",
                        "The leader of the Returners, a group of rebels that opposes the Empire's harsh oppression whilst taking back their library books. The party first meets him in the Returners' secret base, where he plans to have Terra try and speak with the frozen Esper in Narshe.",
                        "The chief magical researcher of the Empire, and one of the many incarnations of Cid in the series. His pursuits lead to the creation of the Magitek labs and production facilities, together with the development of Magitek armor and soldiers. He is very close to Celes.",
                        "The aging, power-hungry dictator of the militaristic Empire. Obsessed with the legends of magical power dating from the ancient War of the Magi, Gestahl seeks the sealed world of the Espers prior to the game's beginning, affording him the capture of dozens of Espers – Terra's father and Terra herself among them.",
                        "An Esper that meets Madonna when she stumbles into the Esper world. He is Terra's father.",
                        "Madeline accidentally stumbles into the Esper world, and Maduin nurses her back to health. Though other Espers do not trust her, Maduin defends her, and they soon conceive Terra.",
                        "Individually known as Fiend, Demon, and Goddess, they are the beings directly responsible for the War of the Magi and the creation of Espers. After the seemingly endless period of near-apocalyptic destruction their conflict causes, the Triad willfully cease their battle and mutually seal away their abilities, reducing themselves to stone statues. It is the magical balance of these three that maintains harmony throughout the world, though Emperor Gestahl, obsessed with power, seeks the Triad to further his own desires."
                    ]
                ]
            ];
            $data["testCheck"] = "Chyeah!";
            $data["theGetDataBruh"] = $sanitizedGet;
            echo json_encode($data);
            break;

        case "ff5":
            $data = [
                "ff5" => [
                    "characterNames" => [
                        "Bartz-Klauser",
                        "Maduin",
                        "The-Warring-Triad"
                    ],
                    "characterBio" => [
                        "The first bio",
                        "The second bio",
                        "The third bio",
                        "The fourth bio"
                    ]
                ]
            ];
            $data["testCheck"] = "Chyeah!";
            $data["theGetDataBruh"] = $sanitizedGet;
            echo json_encode($data);
            break;
        case "ff7":
            $data = [
                "ff7" => [
                    "characterNames" => [
                        "Cloud-Strife",
                        "Aeris"
                    ],
                    "characterBio" => [
                        "Cloud Bio",
                        "Aeris Bio"
                    ]
                ]
            ];
            $data["testCheck"] = "Chyeah!";
            $data["theGetDataBruh"] = $sanitizedGet;
            echo json_encode($data);
            break;
        case "ff4":
            $data = [
                "ff4" => [
                    "characterNames" => [
                        "Test Name 1",
                        "Test Name 2"
                    ],
                    "characterBio" => [
                        "Test Bio 1",
                        "Test Bio 2"
                    ]
                ]
            ];
            $data["testCheck"] = "Chyeah!";
            $data["theGetDataBruh"] = $sanitizedGet;
            echo json_encode($data);
            break;
        default:
            $data["testCheck"] = "Nopey";
            $data["theGetDataBruh"] = $sanitizedGet;
            $data["hoody"] = "hoo";
            echo json_encode($data);
        
    }
?>