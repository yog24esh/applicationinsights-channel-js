import { ITypeValidator } from './ITypeValidator';
import { ITelemetryItem } from 'applicationinsights-core-js';

export class RemoteDepdencyValidator implements ITypeValidator {
    static RemoteDepdencyValidator = new RemoteDepdencyValidator();

    public Validate(item: ITelemetryItem): boolean {
        /* TODO re-enable once design of iTelemetryItem is finalized. Task used to track this:
         https://mseng.visualstudio.com/AppInsights/_workitems/edit/1310871

        // verify system properties has a ver field
        if (!item.sytemProperties ||
            !item.sytemProperties["ver"]) {
            return false;
        }

        if (!item.domainProperties ||
            !item.domainProperties["id"] ||
            !item.domainProperties["name"] ||
            !item.domainProperties["resultCode"] ||
            !item.domainProperties["duration"] ||
            !item.domainProperties["success"] ||
            !item.domainProperties["data"] ||
            !item.domainProperties["target"] ||
            !item.domainProperties["type"]) {
            return false;
        }
        */
        return true;
    }
}