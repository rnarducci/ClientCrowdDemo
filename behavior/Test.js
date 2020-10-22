import ABehavior from "./ABehavior.js"
import GoToARoom from "./behaviors/GoToARoom.js"
import TakeVitals from "./behaviors/TakeVitals.js"
import WaitForever from "./behaviors/WaitForever.js"

import GoToARoomTemp from "./behaviors/GoToARoomTemp.js"

/**
 * Created by rnarducci on 10/13/2020.
 */
class Test extends ABehavior{


    constructor(myIndex) {
        super(myIndex);

        // EASY SAMPLE TREE
        const builder = new fluentBehaviorTree.BehaviorTreeBuilder();
        this.tree = builder
            .sequence("Idle")

                // don't know if this should be async or the actual
                // function in the class should be async
                
                //.do("GoToARoom", async (t) => new GoToARoom().execute())

                .do("TakeVitals", async (t) => new TakeVitals().execute())

                //.do("GoToARoomTemp", async (t) => new GoToARoomTemp().execute())

                .do("waitForever", async (t) => new WaitForever().execute())

            .end()
            .build();
    }

    checkEndOfSimulation() {
        let _x = this.location.x - this.agents[this.index].destX;
        let _z = this.location.z - this.agents[this.index].destZ;
        let _y = this.location.y - this.agents[this.index].destY;

        let distanceToDestination = Math.sqrt(_x * _x + _z * _z);

        if (distanceToDestination < 2) {
            this.agents[this.index].inSimulation = false;
            return null;
        }
        else {
            return this.mainBehavior();
        }
    }

    mainBehavior() {     
        
        // "await" keyword taken out, requires "async" function
        //console.log("I'm in the simulation!");
        
        // this line might not be right
        this.tree.tick(new fluentBehaviorTree.StateData(this.deltaTime));
        
        return null;
    }
}

export default Test;
