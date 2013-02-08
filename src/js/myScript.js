// Create a new path once, when the script is executed:
var myPath = new Path();
myPath.strokeColor = 'black';

// This function is called whenever the user
// clicks the mouse in the view:
function onMouseDown(event) {
    // Add a segment to the path at the position of the mouse:
    myPath.add(event.point);
}
