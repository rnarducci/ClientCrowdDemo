// NOT FULLY PORTED

/**
 * Created by rnarducci on 10/14/2020.
 */
class TakeVitals {

    // **REFERENCE DELTATIME FROM NEW BTL TO FINISH PORTING**


    // @TaskAttribute(required=true)
	// public FloatDistribution minutes;
	
	// private int ticksLeft;

    start() {
        // super.start();
		// this.ticksLeft = (int) (30*60*this.minutes.nextFloat());
    }

    execute() {
        // this.ticksLeft--;
		// if(ticksLeft <=0)
		// 	return Status.SUCCEEDED;
        // return Status.RUNNING;
        

        // delay??? just for testing purposes
        return BehaviorTreeStatus.Success;
    }

    // protected Task copyTo(Task arg0) {
	// 	return arg0;
	// }

}