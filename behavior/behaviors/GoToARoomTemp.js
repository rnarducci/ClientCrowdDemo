// TEMPORARY COPY OF GOTOAROOM FOR IMPLEMENATION PURPOSES

class GoToARoomTemp {
	
	//@TaskAttribute(required=true)
	//RoomType roomType;

	GoToARoomTemp() {
		
	}

	//@Override
	execute() {
		//IRoom location = HospitalModel.get().getLocation(roomType);
		//getObject().setDestination(location.getLocation());
		//double distance =getObject().getLocation().distanceTo(location.getLocation());
        
        // **TEMPORARY**
            // need to feed it coordinates somehow (especially so it can be used more than once)
        // **TEMPORARY**

		
        this.agents[this.index].destX = 0;

        let _x = this.location.x - this.agents[this.index].destX;
        let _z = this.location.z - this.agents[this.index].destZ;
        let _y = this.location.y - this.agents[this.index].destY;

        let distance = Math.sqrt(_x * _x + _z * _z);

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

export default GoToARoomTemp;