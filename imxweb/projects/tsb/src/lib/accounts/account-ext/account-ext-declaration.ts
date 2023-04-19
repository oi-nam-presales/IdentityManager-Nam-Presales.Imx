import { PortalPersonAccounts } from "imx-api-tsb";
import { EntityValue, IEntity, IEntityColumn } from "imx-qbm-dbts";

export class PortalPersonAccountsPlus extends PortalPersonAccounts {
  readonly AccountDisabled: EntityValue<IEntityColumn>; 
  
  constructor(personAccountEntity: IEntity, isDisabled: IEntityColumn){
    super(personAccountEntity)
    this.AccountDisabled = new EntityValue(isDisabled);
  }
}
