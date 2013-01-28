/*
    The Rooms
    by John *Seg* Seggerson
    http://segonmedia.com/
    
    Produced for Global Game Jam 2013 in San Francisco.
*/

function take_action( actionNumber ) {
    
}

function changeRoom( targetRoomStr ) {
    console.log("changeRoom( "+targetRoomStr+" )");
    var targetRoom;
    var targetRoomData;
    
    // Treatment of target string.
    targetRoom = targetRoomStr.toUpperCase();
    // Grab the stat from the Eval function.
    targetRoomData = roomEval( targetRoom );
    
    // Sanity check!
    if ( targetRoomData[1] == undefined || targetRoomData[1] == "" ) {
        console.error( "\tNo valid return provided.");
        return false;
    } else if ( targetRoomData[1] == "FUNCTION" ) {
        // Running a function instead!
        return false;
    }
    
    // Change the room color
    changeRoomColor( targetRoomData[0] );
    
    // Change the contents of the desc.
    $('#roomDescription').html( targetRoomData[1] );
    
    // Change the list of actions.
    $('#roomActions ul li').remove(); // Removing current list.
    var cList = $('#roomActions ul');
    $.each(targetRoomData[2], function(i) {
        // Figure out if we're HREF or ONCLICK.
        var href = "#";
        var onclick = "";
        var target = "";
        if ( targetRoomData[3][i] == undefined || targetRoomData[3][i] == false ) {
            href = targetRoomData[4][i];
            target = "_blank";
        } else {
            onclick = "javascript:changeRoom('"+targetRoomData[3][i]+"');"
        }
        var li = $('<li/>')
            .appendTo(cList);
        var aaa = $('<a/>')
            .attr('href',href)
            .attr('onclick',onclick)
            .attr('target',target)
            .text(targetRoomData[2][i])
            .appendTo(li);
    });
    
    return targetRoomData;
}

function changeRoomColor( targetRoomColor ) {
    var currentRoom;
    var targetRoom;
    
    targetRoom = targetRoomColor.toLowerCase();
    
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
