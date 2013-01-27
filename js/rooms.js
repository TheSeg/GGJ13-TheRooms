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
            
        case "WHITE_MIDDLE_DEFAULT":
            color = 'white';
            desc = WHITE_MIDDLE_DEFAULT();
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
            
        case "WHITE_WEST_000":
            color = 'white';
            tempReturn = WhiteRoom_DoorApproch( "TEAL" );
            desc = tempReturn[0];
            actions = tempReturn[1];
            hrefs = tempReturn[2];
            links = tempReturn[3];
            break;
        
        case "WHITE_EAST_000":
            color = 'white';
            tempReturn = WhiteRoom_DoorApproch( "PURPLE" );
            desc = tempReturn[0];
            actions = tempReturn[1];
            hrefs = tempReturn[2];
            links = tempReturn[3];
            break;
        
        case "WHITE_SOUTH_000":
            color = 'white';
            tempReturn = WhiteRoom_DoorApproch( "OLIVE" );
            desc = tempReturn[0];
            actions = tempReturn[1];
            hrefs = tempReturn[2];
            links = tempReturn[3];
            break;
        
        case "WHITE_NORTH_000":
            color = 'white';
            tempReturn = WhiteRoom_DoorApproch( "GRAY" );
            desc = tempReturn[0];
            actions = tempReturn[1];
            hrefs = tempReturn[2];
            links = tempReturn[3];
            break;
        
        case "WHITE_WEST_FROM_TEAL":
            color = 'white';
            desc = "As you touch the door, the room changes from TEAL back to white.<br/><br/>";
            
            if ( state['TEAL_PEDISTAL'].toUpperCase() == "TEAL" ) {
                desc = desc + "You notice the door outline turning from <b>WHITE</b> to <b>RED</b>.";
            }
            
            actions = ["OBSERVE the situation."];
            if ( RedRoomCheck() ) {
                hrefs = ['RED_INIT'];
            } else {
                hrefs = ["WHITE_MIDDLE_DEFAULT"];
            }
            break;
            
        case "WHITE_WEST_FROM_PURPLE":
            color = 'white';
            desc = "As you touch the door, the room changes from PURPLE back to white.<br/><br/>";
            
            if ( state['PURPLE_PEDISTAL'].toUpperCase() == "PURPLE" ) {
                desc = desc + "You notice the door outline turning from <b>WHITE</b> to <b>RED</b>.";
            }
            
            actions = ["OBSERVE the situation."];
            if ( RedRoomCheck() ) {
                hrefs = ['RED_INIT'];
            } else {
                hrefs = ["WHITE_MIDDLE_DEFAULT"];
            }
            break;
            
        case "WHITE_WEST_FROM_OLIVE":
            color = 'white';
            desc = "As you touch the door, the room changes from OLIVE back to white.<br/><br/>";
            
            if ( state['OLIVE_PEDISTAL'].toUpperCase() == "OLIVE" ) {
                desc = desc + "You notice the door outline turning from <b>WHITE</b> to <b>RED</b>.";
            }
            
            actions = ["OBSERVE the situation."];
            if ( RedRoomCheck() ) {
                hrefs = ['RED_INIT'];
            } else {
                hrefs = ["WHITE_MIDDLE_DEFAULT"];
            }
            break;
            
        case "WHITE_WEST_FROM_GRAY":
            color = 'white';
            desc = "As you touch the door, the room changes from GRAY back to WHITE.<br/><br/>";
            
            if ( state['GRAY_PEDISTAL'].toUpperCase() == "GRAY" ) {
                desc = desc + "You notice the door outline turning from <b>WHITE</b> to <b>RED</b>.";
            }
            
            actions = ["OBSERVE the situation."];
            if ( RedRoomCheck() ) {
                hrefs = ['RED_INIT'];
            } else {
                hrefs = ["WHITE_MIDDLE_DEFAULT"];
            }
            break;
            
        /*
            TEAL ROOM SECTION
        */
        case "TEAL_ENTRY":
            state['TEAL_FIRSTVIST'] = true;
            
            color = 'teal'
            
            desc = "As soon as you touch the outlined space, the light and walls change to the color of <b>TEAL</b>. The outline of the door also changes to a solid white.<br/><br/>In the middle of the room, you see a pedistal in the middle of the room. ";
            
            actions = ["APPROCH the pedistal."];
            hrefs = ['TEAL_DEFAULT'];
            links = [];
            break;
            
        case "TEAL_DEFAULT":
            color = 'teal';
            desc = "";
            actions = [];
            hrefs = [];
            links = [];
            
            switch( state['TEAL_PEDISTAL'].toUpperCase() ) {
                case "TEAL":
                    desc = desc + "You see a <b>TEAL</b> cube upon the pedistal. There's no reason to remove it.";
                    break;
                case "PURPLE":
                    desc = desc + "You see a <b>PURPLE</b> cube upon the pedistal. It looks inviting enough to pick it up.";
                    actions.push("TAKE PURPLE BLOCK.");
                    hrefs.push("TEAL_ACTION_PICKUP_PURPLE");
                    break;
                default:
                    // Blocks that can be placed.
                    desc = desc + "You see an empty pedistal, waiting for a block to be placed inside of it.";
                    if ( state['INV_BLOCK_TEAL'] ) {
                        // Can place the block on the pedistal correctly
                        actions.push("PLACE TEAL BLOCK on PEDISTAL.");
                        hrefs.push("TEAL_ACTION_PLACE_TEAL");
                    }
                    if ( state['INV_BLOCK_PURPLE'] ) {
                        // Can place the block on the pedistal correctly
                        actions.push("PLACE PURPLE BLOCK on PEDISTAL.");
                        hrefs.push("TEAL_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_OLIVE'] ) {
                        // Can place the block on the pedistal correctly
                        actions.push("PLACE OLIVE BLOCK on PEDISTAL.");
                        hrefs.push("TEAL_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_GRAY'] ) {
                        // Can place the block on the pedistal correctly
                        actions.push("PLACE GRAY BLOCK on PEDISTAL.");
                        hrefs.push("TEAL_ACTION_PLACE_OTHER");
                    }
                    
                    break;
            }
            
            actions.push("TOUCH the door outline.");
            hrefs.push("WHITE_WEST_FROM_TEAL")
            
            break;
            
        case "TEAL_ACTION_PICKUP_PURPLE":
            // STATES
            state['INV_BLOCK_PURPLE'] = true;
            state['TEAL_PEDISTAL'] = "none";
            
            color = 'teal';
            desc = "You pick up the purple block from the pedistal and place it in your bag of holding. Which for right now is just your hands and arms.";
            actions = [ "Re-observe the room."];
            hrefs = [ "TEAL_DEFAULT" ];
            break;
            
        case "TEAL_ACTION_PLACE_OTHER":
            color = "teal";
            desc = "You place the block on the pedistal. Despite the block being perfectly square and the same size as all the rest of the blocks, you still can't place it into the pedistal. Clearly this pedistal takes color into account of physical space... somehow.";
            actions = [ "Re-observe the room."];
            hrefs = [ "TEAL_DEFAULT" ];
            break;
        
        case "TEAL_ACTION_PLACE_TEAL":
            //Actions
            state['INV_BLOCK_TEAL'] = false;
            state['TEAL_PEDISTAL'] = "TEAL";
            
            color = "teal";
            desc = "You place the block on the pedistal. It fists perfectly!<br/><br/> A rythmic beating is heard for a few moments, then the moment passes.";
            actions = [ "Re-observe the room."];
            hrefs = [ "TEAL_DEFAULT" ];
            break;
        
        /*
            PURPLE ROOM SECTION
            with TEAL block to start.
        */
        case "PURPLE_ENTRY":
            state['PURPLE_FIRSTVIST'] = true;
            
            color = 'PURPLE'
            
            desc = "As soon as you touch the outlined space, the light and walls change to the color of <b>PURPLE</b>. The outline of the door also changes to a solid white.<br/><br/>In the middle of the room, you see a pedistal in the middle of the room. ";
            
            actions = ["APPROCH the pedistal."];
            hrefs = ['PURPLE_DEFAULT'];
            links = [];
            break;
            
        case "PURPLE_DEFAULT":
            color = 'PURPLE';
            desc = "";
            actions = [];
            hrefs = [];
            links = [];
            
            switch( state['PURPLE_PEDISTAL'].toUpperCase() ) {
                case "PURPLE":
                    desc = desc + "You see a <b>PURPLE</b> cube upon the pedistal. There's no reason to remove it.";
                    break;
                case "TEAL":
                    desc = desc + "You see a <b>TEAL</b> cube upon the pedistal. It looks inviting enough to pick it up.";
                    actions.push("TAKE TEAL BLOCK.");
                    hrefs.push("PURPLE_ACTION_PICKUP_TEAL");
                    break;
                default:
                    // Blocks that can be placed.
                    desc = desc + "You see an empty pedistal, waiting for a block to be placed inside of it.";
                    if ( state['INV_BLOCK_TEAL'] ) {
                        actions.push("PLACE TEAL BLOCK on PEDISTAL.");
                        hrefs.push("PURPLE_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_PURPLE'] ) {
                        actions.push("PLACE PURPLE BLOCK on PEDISTAL.");
                        hrefs.push("PURPLE_ACTION_PLACE_PURPLE");
                    }
                    if ( state['INV_BLOCK_OLIVE'] ) {
                        actions.push("PLACE OLIVE BLOCK on PEDISTAL.");
                        hrefs.push("PURPLE_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_GRAY'] ) {
                        actions.push("PLACE GRAY BLOCK on PEDISTAL.");
                        hrefs.push("PURPLE_ACTION_PLACE_OTHER");
                    }
                    
                    break;
            }
            
            actions.push("TOUCH the door outline.");
            hrefs.push("WHITE_WEST_FROM_PURPLE")
            
            break;
            
        case "PURPLE_ACTION_PICKUP_TEAL":
            // STATES
            state['INV_BLOCK_TEAL'] = true;
            state['PURPLE_PEDISTAL'] = "none";
            
            color = 'PURPLE';
            desc = "You pick up the TEAL block from the pedistal and place it in your bag of holding. Which for right now is just your hands and arms.";
            actions = [ "Re-observe the room."];
            hrefs = [ "PURPLE_DEFAULT" ];
            break;
            
        case "PURPLE_ACTION_PLACE_OTHER":
            color = "PURPLE";
            desc = "You place the block on the pedistal. Despite the block being perfectly square and the same size as all the rest of the blocks, you still can't place it into the pedistal. Clearly this pedistal takes color into account of physical space... somehow.";
            actions = [ "Re-observe the room."];
            hrefs = [ "PURPLE_DEFAULT" ];
            break;
        
        case "PURPLE_ACTION_PLACE_PURPLE":
            //Actions
            state['INV_BLOCK_PURPLE'] = false;
            state['PURPLE_PEDISTAL'] = "PURPLE";
            
            color = "PURPLE";
            desc = "You place the block on the pedistal. It fists perfectly!<br/><br/> A rythmic beating is heard for a few moments, then the moment passes.";
            actions = [ "Re-observe the room."];
            hrefs = [ "PURPLE_DEFAULT" ];
            break;
        
        // END PURPLE ROOM
        
        /*
            GRAY ROOM SECTION
            with OLIVE block to start.
        */
        case "GRAY_ENTRY":
            state['GRAY_FIRSTVIST'] = true;
            
            color = 'GRAY'
            
            desc = "As soon as you touch the outlined space, the light and walls change to the color of <b>GRAY</b>. The outline of the door also changes to a solid white.<br/><br/>In the middle of the room, you see a pedistal in the middle of the room. ";
            
            actions = ["APPROCH the pedistal."];
            hrefs = ['GRAY_DEFAULT'];
            links = [];
            break;
            
        case "GRAY_DEFAULT":
            color = 'GRAY';
            desc = "";
            actions = [];
            hrefs = [];
            links = [];
            
            switch( state['GRAY_PEDISTAL'].toUpperCase() ) {
                case "GRAY":
                    desc = desc + "You see a <b>GRAY</b> cube upon the pedistal. There's no reason to remove it.";
                    break;
                case "OLIVE":
                    desc = desc + "You see a <b>OLIVE</b> cube upon the pedistal. It looks inviting enough to pick it up.";
                    actions.push("TAKE OLIVE BLOCK.");
                    hrefs.push("GRAY_ACTION_PICKUP_OLIVE");
                    break;
                default:
                    // Blocks that can be placed.
                    desc = desc + "You see an empty pedistal, waiting for a block to be placed inside of it.";
                    if ( state['INV_BLOCK_TEAL'] ) {
                        actions.push("PLACE TEAL BLOCK on PEDISTAL.");
                        hrefs.push("GRAY_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_PURPLE'] ) {
                        actions.push("PLACE PURPLE BLOCK on PEDISTAL.");
                        hrefs.push("GRAY_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_OLIVE'] ) {
                        actions.push("PLACE OLIVE BLOCK on PEDISTAL.");
                        hrefs.push("GRAY_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_GRAY'] ) {
                        actions.push("PLACE GRAY BLOCK on PEDISTAL.");
                        hrefs.push("GRAY_ACTION_PLACE_GRAY");
                    }
                    
                    break;
            }
            
            actions.push("TOUCH the door outline.");
            hrefs.push("WHITE_WEST_FROM_GRAY")
            
            break;
            
        case "GRAY_ACTION_PICKUP_OLIVE":
            // STATES
            state['INV_BLOCK_OLIVE'] = true;
            state['GRAY_PEDISTAL'] = "none";
            
            color = 'GRAY';
            desc = "You pick up the OLIVE block from the pedistal and place it in your bag of holding. Which for right now is just your hands and arms.";
            actions = [ "Re-observe the room."];
            hrefs = [ "GRAY_DEFAULT" ];
            break;
            
        case "GRAY_ACTION_PLACE_OTHER":
            color = "GRAY";
            desc = "You place the block on the pedistal. Despite the block being perfectly square and the same size as all the rest of the blocks, you still can't place it into the pedistal. Clearly this pedistal takes color into account of physical space... somehow.";
            actions = [ "Re-observe the room."];
            hrefs = [ "GRAY_DEFAULT" ];
            break;
        
        case "GRAY_ACTION_PLACE_GRAY":
            //Actions
            state['INV_BLOCK_GRAY'] = false;
            state['GRAY_PEDISTAL'] = "GRAY";
            
            color = "GRAY";
            desc = "You place the block on the pedistal. It fists perfectly!<br/><br/> A rythmic beating is heard for a few moments, then the moment passes.";
            actions = [ "Re-observe the room."];
            hrefs = [ "GRAY_DEFAULT" ];
            break;
        
        // END GRAY ROOM
        
        /*
            OLIVE ROOM SECTION
            with GRAY block to start.
        */
        case "OLIVE_ENTRY":
            state['OLIVE_FIRSTVIST'] = true;
            
            color = 'OLIVE'
            
            desc = "As soon as you touch the outlined space, the light and walls change to the color of <b>OLIVE</b>. The outline of the door also changes to a solid white.<br/><br/>In the middle of the room, you see a pedistal in the middle of the room. ";
            
            actions = ["APPROCH the pedistal."];
            hrefs = ['OLIVE_DEFAULT'];
            links = [];
            break;
            
        case "OLIVE_DEFAULT":
            color = 'OLIVE';
            desc = "";
            actions = [];
            hrefs = [];
            links = [];
            
            switch( state['OLIVE_PEDISTAL'].toUpperCase() ) {
                case "OLIVE":
                    desc = desc + "You see a <b>OLIVE</b> cube upon the pedistal. There's no reason to remove it.";
                    break;
                case "GRAY":
                    desc = desc + "You see a <b>GRAY</b> cube upon the pedistal. It looks inviting enough to pick it up.";
                    actions.push("TAKE GRAY BLOCK.");
                    hrefs.push("OLIVE_ACTION_PICKUP_GRAY");
                    break;
                default:
                    // Blocks that can be placed.
                    desc = desc + "You see an empty pedistal, waiting for a block to be placed inside of it.";
                    if ( state['INV_BLOCK_TEAL'] ) {
                        actions.push("PLACE TEAL BLOCK on PEDISTAL.");
                        hrefs.push("OLIVE_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_PURPLE'] ) {
                        actions.push("PLACE PURPLE BLOCK on PEDISTAL.");
                        hrefs.push("OLIVE_ACTION_PLACE_OTHER");
                    }
                    if ( state['INV_BLOCK_OLIVE'] ) {
                        actions.push("PLACE OLIVE BLOCK on PEDISTAL.");
                        hrefs.push("OLIVE_ACTION_PLACE_OLIVE");
                    }
                    if ( state['INV_BLOCK_GRAY'] ) {
                        actions.push("PLACE GRAY BLOCK on PEDISTAL.");
                        hrefs.push("OLIVE_ACTION_PLACE_OTHER");
                    }
                    
                    break;
            }
            
            actions.push("TOUCH the door outline.");
            hrefs.push("WHITE_WEST_FROM_OLIVE")
            
            break;
            
        case "OLIVE_ACTION_PICKUP_GRAY":
            // STATES
            state['INV_BLOCK_GRAY'] = true;
            state['OLIVE_PEDISTAL'] = "none";
            
            color = 'OLIVE';
            desc = "You pick up the GRAY block from the pedistal and place it in your bag of holding. Which for right now is just your hands and arms.";
            actions = [ "Re-observe the room."];
            hrefs = [ "OLIVE_DEFAULT" ];
            break;
            
        case "OLIVE_ACTION_PLACE_OTHER":
            color = "OLIVE";
            desc = "You place the block on the pedistal. Despite the block being perfectly square and the same size as all the rest of the blocks, you still can't place it into the pedistal. Clearly this pedistal takes color into account of physical space... somehow.";
            actions = [ "Re-observe the room."];
            hrefs = [ "OLIVE_DEFAULT" ];
            break;
        
        case "OLIVE_ACTION_PLACE_OLIVE":
            //Actions
            state['INV_BLOCK_OLIVE'] = false;
            state['OLIVE_PEDISTAL'] = "OLIVE";
            
            color = "OLIVE";
            desc = "You place the block on the pedistal. It fists perfectly!<br/><br/> A rythmic beating is heard for a few moments, then the moment passes.";
            actions = [ "Re-observe the room."];
            hrefs = [ "OLIVE_DEFAULT" ];
            break;
        
        // END OLIVE ROOM
        
        // RED ROOM STAGE START
        case "RED_INIT":
            color = "RED";
            desc = "RED TIME!";
            actions = [ "Don't know yet" ];
            hrefs = [ "" ];
            break;
        
        // Default catch for when someone forgot to make the room state...
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

function WhiteRoom_DoorApproch( TargetDoorColor ) {
    // Used to make the same generic door approch for the white room.
    var desc;
    var actions;
    var hrefs;
    var links;

    // If The room is clear, show that process.
    if ( state[ TargetDoorColor.toUpperCase()+'_PEDISTAL' ] == TargetDoorColor.toUpperCase() ) {
        // Room is cleared. Show the 'locked' state.
        desc = "You walk to the wall to what was a "+TargetDoorColor.toUpperCase()+" color outline, but is now simply RED.<br/><br/>There is a slightly louder hum of in rhythm eminiating from the door.";
        // Actions are the same acorss.
        actions = [
            "GO BACK to the middle of the room.",
        ];
        hrefs = [
            "WHITE_MIDDLE_DEFAULT"
        ];
        links = [
            null,
        ];
    } else {
        // Room is not cleared.
        if ( state['WHITE_ANY_DOOR_VISITED'] === false ) {
            // Room is first visit to ANY door.
            state['WHITE_ANY_DOOR_VISITED'] = true;
            desc = "Cautiously walking towards the outline, you try to peak into the outline to observe what lies beyond the door.<br/><br/>When you look closely at the outline, you see a solid hue of "+TargetDoorColor.toUpperCase()+". Still, there are no objects your can recognize beyond the wall. There is also a very low hum of a sound. You can feel the sound more than you can hear it.";
        } else {
            // Subsquent room visits.
            desc = "You walk to the "+TargetDoorColor.toUpperCase()+" color outline on the wall.<br/><br/>There is still a very low hum of a sound in rhythm. You can feel the sound more than you can hear it.";
        }
        // Actions are the same acorss.
        actions = [
            "TOUCH the door space.",
            "GO BACK to the middle of the room.",
        ];
        hrefs = [
            TargetDoorColor.toUpperCase()+"_ENTRY",
            "WHITE_MIDDLE_DEFAULT"
        ];
        links = [
            null,
        ];
    }
    
    // The Return
    return [desc, actions, hrefs, links];
}

function WHITE_MIDDLE_DEFAULT() {
    // Check and returns which doors are active.
    desc = "You are in the center of the room with four outlines of doors around the room.<br/><br/>";
    
    if ( state[ 'TEAL_PEDISTAL' ].toUpperCase() == "TEAL" ) {
        desc = desc + "To the <b>WEST</b>, you see a <b>RED</b> outline of a door.<br/>";
    } else {
        desc = desc + "To the <b>WEST</b>, you see a <b>TEAL</b> outline of a door.<br/>";
    }
    if ( state[ 'PURPLE_PEDISTAL' ].toUpperCase() == "PURPLE" ) {
        desc = desc + "To the <b>EAST</b>, you see a <b>RED</b> outline of a door.<br/>";
    } else {
        desc = desc + "To the <b>EAST</b>, you see a <b>PURPLE</b> outline of a door.<br/>";
    }
    if ( state[ 'OLIVE_PEDISTAL' ].toUpperCase() == "OLIVE" ) {
        desc = desc + "To the <b>SOUTH</b>, you see a <b>RED</b> outline of a door.<br/>";
    } else {
        desc = desc + "To the <b>SOUTH</b>, you see a <b>OLIVE</b> outline of a door.<br/>";
    }
    if ( state[ 'GRAY_PEDISTAL' ].toUpperCase() == "GRAY" ) {
        desc = desc + "To the <b>NORTH</b>, you see a <b>RED</b> outline of a door.<br/>";
    } else {
        desc = desc + "To the <b>NORTH</b>, you see a <b>GRAY</b> outline of a door.<br/>";
    }
    
    return desc;
}

function RedRoomCheck() {
    if (
        state['TEAL_PEDISTAL'].toUpperCase() == 'TEAL' &&
        state['PURPLE_PEDISTAL'].toUpperCase() == 'PURPLE' &&
        state['OLIVE_PEDISTAL'].toUpperCase() == 'OLIVE' &&
        state['GRAY_PEDISTAL'].toUpperCase() == 'GRAY'
    ) {
        return true;
    } else {
        return false;
    }
}
// EOL