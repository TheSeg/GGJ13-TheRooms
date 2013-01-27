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