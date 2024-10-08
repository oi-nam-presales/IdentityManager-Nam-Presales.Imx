# Properties of an Object

In this section you will find useful components that can be used to edit  properties of an entity (`IEntity`).

The main way of doing this by using **C**olumn **D**ependent **R**eferences. They are all listed in the `cdr` folder of this project.

Normally column dependent references are represented in templates with the `<imx-cdr-editor>` tag. \
More information about this component can be found [here](../../components/CdrEditorComponent.html).

Another way is to use the [`EntityColumnEditorComponent`](../../components/EntityColumnEditorComponent.html) that wraps the editor.

The correct definition of an editor is determined by the information provided by the column dependent reference. \
For this it is necessary to register the components. Our predefined components are registered in the [`DefaultCdrEditorProvider`](../../classes/DefaultCdrEditorProvider.html) and the [`FkCdrEditorProvider`](../../classes/FkCdrEditorProvider.html).

The following property types have predefined editors, that can be displayed as read only as well:
* [boolean](../../components/EditBooleanComponent.html) 
* [date](../../components/EditDateComponent.html)
* [date range](../../components/DateRangeComponent.html)
* [foreign-key definition](../../components/EditFkComponent.html)
* [image](../../components/EditImageComponent.html)
* [limited value](../../components/EditLimitedValueComponent.html)
* [multi foreign-key definition](../../components/EditFkMultiComponent.html)
* [multi-limited value](../../components/EditMultiLimitedValueComponent.html)
* [multi-line string](../../components/EditMultilineComponent.html)
* [multi value](../../components/EditMultiValueComponent.html)
* [number](../../components/EditNumberComponent.html)
* [risk index](../../components/EditRiskIndexComponent.html)
* [simple string](../../components/EditDefaultComponent.html)
* [url](../../components/EditUrlComponent.html)

