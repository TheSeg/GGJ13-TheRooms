/*
    The Rooms
    by John *Seg* Seggerson
    http://segonmedia.com/
    
    Produced for Global Game Jam 2013 in San Francisco.
*/
var state;
var init_state = {
    'WHITE_000_002_yelled':0,
    'WHITE_ANY_DOOR_VISITED':false,
    
    'TEAL_FIRSTVIST':false,
    'TEAL_PEDESTAL':'PURPLE',
    
    'PURPLE_FIRSTVIST':false,
    'PURPLE_PEDESTAL':'TEAL',
    
    'OLIVE_FIRSTVIST':false,
    'OLIVE_PEDESTAL':'GRAY',
    
    'GRAY_FIRSTVIST':false,
    'GRAY_PEDESTAL':'OLIVE',
    
    'INV_BLOCK_TEAL':false,
    'INV_BLOCK_PURPLE':false,
    'INV_BLOCK_OLIVE':false,
    'INV_BLOCK_GRAY':false,
    
};

function init() {
    state = init_state;
    changeRoom( "WHITE_000_000" );
}

function getState() {
    console.log( state );
}