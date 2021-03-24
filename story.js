var STORY = {

    entry : 
    {
        description : [
        "The year is 2099. The world now runs on a credit rating system, where individuals' actions are dictated by a score \
        rating affecting their socioeconomic status. Everyone’s actions is monitored by a worldwide surveillance network. \
        Attaining a higher score promises certain privileges, while having a lower score carries the risk of being blacklisted \
        by the system. Individuals get to rate each other through their social interactions as well."
        ],

        options : [
            { 
                text : "Begin",
                goto : "first_scene"
            }
        ]
    },

    first_scene : {
        description : [
        "“ring ring”",
        "You open your eyes, waking from a deep sleep that left you well recharged. It is 7:30am on a Monday morning and you start your morning routine \
        before heading out for work.",
        "You check your phone for your current credit rating. It shows 60/100. You have been working hard the past few months, doing as many good deeds \
        as you can to increase the score. This is important to you as there is an upcoming job promotion for your department at work. Getting that job \
        promotion would give a better work environment and increased pay. You heard that only one person with the highest score of at least 70 will be considered. \
        It has been harder to raise the score the higher it goes, and you wonder to yourself how much can you increase the score today.",
        "Before heading out, you..."
        ],

        options : [
            {
                text : "Take a selfie and post on Instagram",//+2
                goto : "neighbour_scene"
            },
            {
                text : "Clear last night's trash",//-2
                goto : "neighbour_scene"
            }
        ]
    },

    neighbour_scene : {
        description : [
            "You see your elderly neighbour, Aunt May, watering her plants. She sees you and greets you with a warm smile.",
            "“Hey could you help me out with something a while? It won’t take long”",
            "You realise that if you help her now, you may miss the train for work.."
        ],

        options : [
            {
                text : "Help Aunt May",//+5
                goto : "train_station"
            },
            {
                text: "Don't help Aunt May",//-5
                goto: "train_station"
            }
        ]
    },

    train_station : {
        description : [
            "You reach the train station.",
            "The station is packed as usual. The huge fan on the ceiling doesn’t help much and you start to perspire.",
            "After about 5 minutes, the train arrives, to your delight.", 
            "Just as you are about to board the train, the train conductor stops you.",
            "“Sorry, there is no more room. Priority group goes first. You will have to wait for the next train.”",
            "You see a group of gentlemen coming from an air conditioned area, all dressed in suits. They all wear a shiny \
            gold badge on their collar. The badge is only awarded to those with a score rating of at least 90.",
            "After they board the train, the train conductor starts heading to his carriage. You look at your watch. The \
            next train arrives in 10 minutes, which means you would be 5 minutes late for work.",
            "You spot a gold badge on the floor beside your shoe and realise one of the gentlemen is missing a badge.",
            "The train doors start to close.."
        ],

        options : [
            {
                text : "Wait for the next train",//+0
                goto : "office_late_scene"
            },
            {
                text: "Pin the badge on yourself and squeeze in",//-2
                goto: "badge_scene"
            },
        ]
    },

    badge_scene : {
        description : [
            "You manage to reach your destination on time. Along the way you notice that people are more friendly with you, and some of\
            them upvote you in the hopes of you upvoting them back.",
            "You realise this is due to the fact that those with a rating of at least 90 are able to upvote others by a higher amount.",
            "Just as you are about to enter the office building, someone taps you on the shoulder.."
        ],

        options : [
            {
                text : "Turn around",
                goto : "badge_returned" //-5
            }
        ]
    },

    badge_returned : {
        description : [
            "It is the gentleman from the train who lost his badge!",
            "“I believe you have taken something which is mine”, he says before proceeding to downvote you."
        ],

        options : [
            {
                text : "Enter the office building",
                goto : "inform_scene"
            }
        ]
    },
    
    inform_scene : {
        description : [
            "Your boss informs you the review for the job \
            promotion would be today. You check your current points and realise you are still short of the 70 mark.",
            "Desperate, you start thinking of ways to increase it.."
        ],

        options : [
            {
                text : "Hack the system",
                goto : "hack_fail"
            },
            {
                text: "Make small talk with the boss",//-3
                goto: "talk_with_boss"
            }
        ]
    },

    office_late_scene : {
        description : [
            "You show up to work 5 minutes late. Your boss is nowhere to be seen. He is known to be strict and \
            would deduct score ratings of employees as punishment.",
            "After making sure that the coast is clear, you sneak to your desk.",
            "Just then, your boss shows up at your desk.",
            "“Hey, I was finding you just now. Where were you?”",
            "You are unsure if the company cameras saw you entering late as you went in with a crowd",
            "“I…”"
        ],

        options : [
            {
                text : "'was in the washroom'",//+0 //you manage to get away with being late this time
                goto : "inform_scene"
            },
            {
                text: "'was late, I'm sorry'",//-3
                goto: "inform_scene"
            }
        ],
    },

    hack_fail : {
        description : [
            "Having had vast experiences with programming in the past, you actually manage to hack the system.\
             You give yourself 80 points.",
            "The rest of the day continues and the review for the job promotion finally arrives. You manage to \
            be the sole individual selected for the job promotion. Overjoyed, you start arranging for meetups with\
             your friends to celebrate.",
        ],

        options : [
            {
                text : "Leave the office",
                goto : "leave_office"
            }
        ]

    },

    leave_office : {
        description : [
            "As you are about to leave the office, you are stopped by security.",
            "You have been busted and sent to jail. Your score rating plummets to 20. You have officially been blacklisted \
            by the system.",  
        ],

        options : [
            {
                text : "Replay",
                goto : "entry"
            }
        ]
    },

    talk_with_boss : {
        description : [
            "You start asking the boss how has his weekend been and even offer him the doughnut you brought from home. \
            When the conversation seems like it is nearing its end, you take your phone out and upvote him with your maximum\
            of 2 points in front of him, hoping that he would upvote you with his maximum of 5 points. The Boss turns and starts to leave.",
            "Your phone beeps, “+1 point upvote received”.",
            "You mutter to yourself in disbelief, “what, 1 point??”",
            "Your boss stops midway, “It was an unmeaningful conversation.”"
        ],

        options : [
            {
                text : "Lunch break",
                goto : "lunch_break"
            },
        ],
    },

    lunch_break : {
        description : [
            "It is time for lunch. You don’t really feel hungry. Your coworkers ask you to join them for lunch."
        ],

        options : [
            {
                text : "Join coworkers for lunch", //+2
                goto : "coworker_lunch"
            },
            {
                text: "Skip Lunch",//-2
                goto: "skip_lunch"
            }
        ],
    },

    coworker_lunch : {
        description : [
            "You had a great time at lunch. After coming back to the workplace. \
            The review for the job promotion is announced. "
        ],

        options : [
            {
                text : "Continue",
                goto : "ending_no_job_promo"
            }
        ],
    },
    
    skip_lunch:{
        description : [
            "Lunch break is finally over. The review for the job promotion is announced. "
        ],

        options : [
            {
                text : "Continue",
            }
        ],
    },

    
    ending_no_job_promo : {
        description : [
            "You were not selected for the job promotion. Disappointed, you go home and \
            tell yourself to try again next time."
        ],
        options : [
            {
                text : "Replay",
                goto : "entry"
            }
        ]
    },
    
    ending_70 : {
        description : [
            "You have been successfully selected for the job promotion. Overjoyed, you thank your boss.\
             He then hands you the contract to sign.",
             "At the bottom of the page, it reads, “To stay in this \
             position, score must remain at least 70”.."
        ],

        options : [
            {
                text : "Replay",
                goto : "entry"
            }
        ]
    },
    
};