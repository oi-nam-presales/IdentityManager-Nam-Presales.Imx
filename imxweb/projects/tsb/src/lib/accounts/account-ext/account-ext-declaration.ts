import { PortalPersonAccounts } from "imx-api-tsb";
import { DisplayPattern, EntitySchema, FkCandidateRouteDto, IClientProperty, IEntity, IEntityColumn, IReadValue, IValueMetadata, StaticSchema, TypedEntity } from "imx-qbm-dbts";
import { SuperCall } from "typescript";

export class PortalPersonAccountsPlus extends PortalPersonAccounts {
  readonly AccountDisabled: EntityValue;

  constructor(acc: PortalPersonAccounts, isDisabled: IEntityColumn){
    super(acc.GetEntity())
    this.AccountDisabled = new EntityValue(isDisabled.GetValue(), isDisabled);

  }
}

export class EntityValue implements IReadValue<any>{
    readonly value: any;

    readonly Column: IEntityColumn;

    GetMetadata(): IValueMetadata{
      return this.Column.GetMetadata();
    }

    constructor(val: any, col: IEntityColumn){
      this.value = val
      this.Column = col
    }
}

export class EntitySchemaNew implements EntitySchema{
  /** Returns the entity type. For database entities, this is equal to the table name.
   * For custom entity schema types, the client can define an arbitrary type name.
   */

   readonly TypeName?: string;
   DisplayPattern?: DisplayPattern;
   DisplayPatternLong?: DisplayPattern;
   DisplaySingular?: string;
   Display?: string;
   Columns: {
       [id: string]: any;
   };
   FkCandidateRoutes?: FkCandidateRouteDto[];

   constructor(schem: EntitySchema, newCol: IClientProperty ){
    this.TypeName = schem.TypeName
    this.Display = schem.Display
    this.DisplayPattern = schem.DisplayPattern
    this.DisplayPatternLong = schem.DisplayPatternLong
    this.DisplaySingular = schem.DisplaySingular
    this.FkCandidateRoutes = schem.FkCandidateRoutes

    let extraCol = newCol["ColumnName"]
    this.Columns = {[extraCol]:newCol}

    for (let key of Object.keys(schem.Columns)) {
      let col = schem.Columns[key];

      this.Columns[key] = col
    }
   }

   addColumn(name: string, col: any){
      this.Columns.push({name:col})
   }


}