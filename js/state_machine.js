/*
    The Rooms
    by John *Seg* Seggerson
    http://segonmedia.com/
    
    Produced for Global Game Jam 2013 in San Francisco.
*/

var state = {
    'ROOM_CLEAR_TEAL':false,
    'ROOM_CLEAR_PURPLE':false,
    'ROOM_CLEAR_OLIVE':false,
    'ROOM_CLEAR_GRAY':false,
    'ROOM_CLEAR_RED':false,
    
    'WHITE_000_002_yelled':0,
    'WHITE_ANY_DOOR_VISITED':false,
    
    'TEAL_FIRSTVIST':false,
    'TEAL_PEDISTAL':'PURPLE',
    
    'PURPLE_FIRSTVIST':false,
    'PURPLE_PEDISTAL':'TEAL',
    
    'OLIVE_FIRSTVIST':false,
    'OLIVE_PEDISTAL':'GRAY',
    
    'GRAY_FIRSTVIST':false,
    'GRAY_PEDISTAL':'OLIVE',
    
    'INV_BLOCK_TEAL':false,
    'INV_BLOCK_PURPLE':false,
    'INV_BLOCK_OLIVE':false,
    'INV_BLOCK_GRAY':false,
    
};

function getState() {
    console.log( state );
}