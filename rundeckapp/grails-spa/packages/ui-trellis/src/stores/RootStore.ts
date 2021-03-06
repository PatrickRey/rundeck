import { ExecutionOutputStore, ExecutionOutput } from "./ExecutionOutput"
import { WorkflowStore } from './Workflow'
import { NavBar } from './NavBar'
import { UtilityBar } from './UtilityBar'
import { SystemStore } from './System'
import { RundeckClient } from "@rundeck/client"
import { Releases } from "./Releases"

export class RootStore {
    executionOutputStore: ExecutionOutputStore
    workflowStore: WorkflowStore
    navBar: NavBar
    utilityBar: UtilityBar
    releases: Releases
    system: SystemStore

    constructor(readonly client: RundeckClient) {
        this.executionOutputStore = new ExecutionOutputStore(this, client)
        this.workflowStore = new WorkflowStore(this, client)
        this.navBar = new NavBar(this, client)
        this.utilityBar = new UtilityBar(this, client)
        this.system = new SystemStore(this, client)
        this.releases = new Releases(this, client)
    }
}