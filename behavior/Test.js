import ABehavior from "./ABehavior.js"
import GoToARoom from "./behaviors/GoToARoom.js"
import TakeVitals from "./behaviors/TakeVitals.js"
import WaitForever from "./behaviors/WaitForever.js"

/**
 * Created by rnarducci on 10/13/2020.
 */
class Test extends ABehavior{


    constructor(myIndex) {
        super(myIndex);

        // EASY SAMPLE TREE
        const builder = new BehaviorTreeBuilder();
        this.tree = builder
            .sequence("Idle")
                .do("GoToARoom", async (t) => GoToARoom.execute())

                .do("TakeVitals", async (t) => TakeVitals.execute())

                .do("GoToARoom", async (t) => GoToARoom.execute())

                .do("waitForever", async (t) => WaitForever.execute())

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
        this.tree.tick(new TimeData(deltaTime));
        
        return null;
    }
}

export default Test;
