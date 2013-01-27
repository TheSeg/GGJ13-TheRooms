/*
    The Rooms
    by John *Seg* Seggerson
    http://segonmedia.com/
    
    Produced for Global Game Jam 2013 in San Francisco.
*/

function take_action( actionNumber ) {
    
}

function changeRoom( targetRoomInput ) {
    var currentRoom;
    var targetRoom;
    
    targetRoom = targetRoomInput.toLowerCase();
    
    if ( $('#roomArea').hasClass('room_white') ) {
        currentRoom = 'white';
    } else if ( $('#roomArea').hasClass('room_teal') ) {
        currentRoom = 'teal';
    } else if ( $('#roomArea').hasClass('room_purple') ) {
        currentRoom = 'purple';
    } else if ( $('#roomArea').hasClass('room_olive') ) {
        currentRoom = 'olive';
    } else if ( $('#roomArea').hasClass('room_gray') ) {
        currentRoom = 'gray';
    } else if ( $('#roomArea').hasClass('room_red') ) {
        currentRoom = 'red';
    } else {
        currentRoom = 'none';
    }
    
    // Remove current color, add new one.
        console.log("changeRoom(): Changing for '"+currentRoom+"' to color: "+targetRoom+".");
        $('#roomArea').removeClass('room_'+currentRoom).addClass('room_'+targetRoom);
    
    return true;
}