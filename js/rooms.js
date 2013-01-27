/*
    The Rooms
    by John *Seg* Seggerson
    http://segonmedia.com/
    
    Produced for Global Game Jam 2013 in San Francisco.
*/

function roomEval( targetRoom ) {
    // Yup, I'm crazy for doing something with a huge switch statment. GO GAME JAMS! :/
    var color;
    var desc;
    var actions;
    var hrefs;
    var links;
    
    switch( targetRoom ) {
        case "WHITE_000_000":
            color = "white";
            desc = "A set of white walls surround you with only gray flooring and a bright LED light fixture on the ceiling. With no sounds but the ringing in your ears, you notice that there are no noticeable doors or other point of entry or exit.";
            actions = [
                "Sit quietly in a corner.",
                'Yell "Hello!"',
                'Look at the light fixture.',
            ];
            hrefs = [
                "WHITE_000_001",
                "WHITE_000_002",
                "WHITE_000_003",
            ];
            links = [
                null,
                null,
                null,
            ];
            break;
            
        case "WHITE_000_001":
            color = "white";
            desc = "You move to the corner of the room and wait for something to happen. This has no discernible effect.";
            actions = [
                "Sit quietly in a corner.",
                'Yell "Hello!"',
                'Look at the light fixture.'
            ];
            hrefs = [
                "WHITE_000_001",
                "WHITE_000_002",
                "WHITE_000_003"
            ];
            break;
            
        case "WHITE_000_002":
            color = "white";
            // Custom text based on how many times we've been here.
            state['WHITE_000_002_yelled']++;
            if ( state['WHITE_000_002_yelled'] < 2 ) {
                desc = "\"HELLO!!!\" you yell in the room, presumably to figure out if another human being is present. This has no discernible effect.";
            } else if ( state['WHITE_000_002_yelled'] == 5 ) {
                desc = "As if expecting something different, you again yell in the room. It's still not going to work.";
            } else {
                desc = "Again, you yell \"HELLO!!!\" in the room. Again, to figure out if another human being is present. And again, this has no discernible effect.";
            }
            
            actions = [
                "Sit quietly in a corner.",
                'Yell "Hello!"',
                'Look at the light fixture.'
            ];
            hrefs = [
                "WHITE_000_001",
                "WHITE_000_002",
                "WHITE_000_003"
            ];
            break;
            
        case "WHITE_000_003":
            color = 'white';
            desc = "You look at the light, then quickly turn away with spots in your eyes. Bright lights and all. You really should be careful about this sort of thing. You don't even know where you are and it's pretty clear a sinister plot is afoot. Even this narrative has a vibe of The Stanley Parable. And you don't want to be like Stanley, do you?";
            actions = [
                "Yes.",
                "No.",
                "Who's Stanley?",
            ];
            hrefs = [
                "WHITE_001_001",
                "WHITE_001_002",
                "WHITE_001_003",
            ];
            links = [
                null,
            ];
            break;
            
        case "WHITE_001_003":
            color = 'white';
            desc = "You need to play more games. But I am totally not an omnipresent entity trying to break a fourth wall in the narrative to establish a some direct connection to the player. The walls in the room you're in are still very intact. I'm just a game developer distracting myself from what I should be working on in hopes I can come back with a fresh perspective.<br/><br/>So again: You don't want to be like Stanley, do you?";
            actions = [
                "Yes.",
                "No.",
            ];
            hrefs = [
                "WHITE_001_001",
                "WHITE_001_002",
            ];
            links = [
                null,
            ];
            break;
            
        case "WHITE_001_001":
            color = 'white';
            desc = "Oh. Well, that's not this game. You should play <a href='http://www.galactic-cafe.com/the-stanley-parable/' target='_blank'>The Stanley Parable</a> instead. You're not going to be Stanley in this piece, so I'll just end the misery for the both of us.";
            actions = [
                "PLAY The Stanley Parable",
            ];
            hrefs = [
                null,
            ];
            links = [
                "http://www.galactic-cafe.com/the-stanley-parable/",
            ];
            break;
            
        case "WHITE_001_002":
            color = 'white';
            desc = "Good. Now while this silly meta-narrative was going on in your head, small but distinct outlines of a door showed up on each wall. Eventually you realize that each outline has a distinct color.<br /><br />On the <strong>WEST</strong> wall, you see <strong>TEAL</strong> outline.<br />To the <strong>EAST</strong>, a <strong>PURPLE</strong> outline.<br /><strong>SOUTH</strong> displays a <strong>OLIVE</strong> outline.<br />And to the <strong>NORTH</strong> a <strong>GRAY</strong> outline.";
            actions = [
                "GO WEST",
                "GO EAST",
                "GO SOUTH",
                "GO NORTH",
            ];
            hrefs = [
                'WHITE_WEST_000',
                'WHITE_EAST_000',
                'WHITE_SOUTH_000',
                'WHITE_NORTH_000',
            ];
            links = [
                null,
            ];
            break;
            
        default:
            color = null;
            desc = null;
            actions = [
                null,
            ];
            hrefs = [
                null,
            ];
            links = [
                null,
            ];
            break;
    }
    
    return [color, desc, actions, hrefs, links];
}