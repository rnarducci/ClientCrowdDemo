// NOT FULLY PORTED

/**
 * Created by rnarducci on 10/14/2020.
 */
class GoToARoom {
	
	//@TaskAttribute(required=true)
	//RoomType roomType;

	GoToARoom() {
		
	}

	//@Override
	execute() {
		//IRoom location = HospitalModel.get().getLocation(roomType);
		//getObject().setDestination(location.getLocation());
		//double distance =getObject().getLocation().distanceTo(location.getLocation());
        
        // **TEMPORARY**
            // need to feed it coordinates somehow (especially so it can be used more than once)
        // **TEMPORARY**

        if(distance < 1)
		{
			return Status.SUCCEEDED;
		}
		return Status.RUNNING;
	}

	//@Override
	//copyTo(Task arg0) {
	//	return arg0;
	//}

}