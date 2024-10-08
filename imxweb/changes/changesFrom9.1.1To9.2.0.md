# apc
*PackageAdded*


# att `(39 changes)`
EditPolicyGroupSidesheetComponent (*Class added*)

OpenSidesheetComponent (*Class added*)

PolicyGroupListComponent (*Class added*)

PolicyGroupModule (*Class added*)

AttestationCasesComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | hasSampleData |


AttestationHistoryComponent (*7 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | attestorFilter |
| *Property added* | busyService |
| *Method added* | deleteConfigById |
| *Property added* | selectable |
| *Method added* | updateConfig |
| *Method added* | viewAssignmentAnalysis |
| *Property added* | withAssignmentAnalysis |


AttestationHistoryService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | exportAttestation |
| *MemberMismatch* | getGroupInfo(parameters?:AttestationCaseLoadParameters):Promise<GroupInfoData>; |


canSeeAttestationPolicies (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | export declare function canSeeAttestationPolicies(~~groups:string[]):boolean;,~~**features:string[]):boolean;** |


EditMasterDataComponent (*9 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | contextId |
| *Property added* | objectType |
| *Property added* | objectUid |
| *Property added* | policyEditor |
| *Method added* | updateReadOnlySchedule |
| *MemberMismatch* | addControl(evt:UntypedFormControl, columnName:string):void; |
| *MemberMismatch* | readonly formArray:UntypedFormArray; |
| *MemberMismatch* | readonly formGroup:UntypedFormGroup; |
| *MemberMismatch* | objectProperties:{ [key: string]: { cdr:ColumnDependentReference; formControl?:UntypedFormControl; }; }; |


PolicyListComponent (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Method added* | deleteConfigById |
| *Property added* | menuLoading |
| *Method added* | updateConfig |


PolicyService (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | exportPolicies |
| *MemberMismatch* | canSeeAllAttestations(preProps:string[],~~groups:string[]):boolean;,~~ **features:string[]):boolean;** |
| *MemberMismatch* | canSeeAttestations(preProps:string[],~~groups:string[]):boolean;,~~ **features:string[]):boolean;** |
| *MemberMismatch* | getGroupInfo(parameters?:{ by?: string; def?: string; } &CollectionLoadParameters):Promise<GroupInfoData>; |


RunsComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | onHelperDismissed |
| *Property deleted* | showHelper |


RunsGridComponent (*5 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | deleteConfigById |
| *Property added* | entitySchema |
| *Method added* | getExportMethod |
| *Method added* | updateConfig |
| *MemberMismatch* | attestationRunConfig:RunStatisticsConfig| undefined; |




# cpl `(1 change)`
MitigatingControlsRulesService (*Class added*)



# dpr `(8 changes)`
OutstandingComponent (*8 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busy |
| *Property added* | busyLoadingTable |
| *Method added* | canDeleteAllSelected |
| *Property added* | LdsOutstandingText |
| *Property added* | loadingTableData |
| *Method added* | onShowAllData |
| *Property added* | showAllData |
| *Property added* | tableDataCount |




# olg `(27 changes)`
MfaFormControlComponent (*Class added*)

MfaComponent (*26 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | activatedFactor |
| *Method deleted* | activateFactor |
| *Property deleted* | authCDRs |
| *Property deleted* | authFactors |
| *Property deleted* | checkingOTP |
| *Property deleted* | checkingPoll |
| *Property deleted* | formArray |
| *Property deleted* | formGroup |
| *Property deleted* | isActivated |
| *Method deleted* | isAuthenticator |
| *Method deleted* | isCDRValid |
| *Method deleted* | isOTP |
| *Method deleted* | isProtect |
| *Method deleted* | ngAfterContentChecked |
| *Method deleted* | ngOnInit |
| *Method deleted* | onClose |
| *Method deleted* | resetState |
| *Property deleted* | showCDRs |
| *Method deleted* | verifyPoll |
| *Method deleted* | verifyWithOTP |
| *Method deleted* | verifyWithOTPAndDevice |
| *Property added* | authForm |
| *Property added* | busyService |
| *Property added* | hasAuthenticators |
| *Property added* | isLoading |
| *Method added* | ngOnDestroy |




# pol `(11 changes)`
PolicyViolationApproverGuardService (*Class deleted*)

PolicyAdminGuardService (*Class added*)

PermissionsService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | isExceptionApprover |
| *Method added* | isQERPolicyAdmin |


PolicyViolationsComponent (*7 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Method added* | deleteConfigById |
| *Property added* | entitySchema |
| *Property added* | isMControlPerViolation |
| *Property added* | selectedCompanyPolicy |
| *Method added* | updateConfig |
| *MemberMismatch* | viewDetails(~~selectedRulesViolation:PolicyViolation):Promise<void>;,~~**selectedPolicyViolation:PolicyViolation):Promise<void>;** |




# qbm `(320 changes)`
ImxTimeline (*Class deleted*)

ImxTimelineItem (*Interface deleted*)

ImxTimelineOptions (*Interface deleted*)

MultiLanguageCaptions (*Interface deleted*)

ObjectSheetInterface (*Interface deleted*)

TabControlHelper (*Class deleted*)

TimelineLocales (*Class deleted*)

Busy (*Interface added*)

BusyIndicatorComponent (*Class added*)

BusyIndicatorModule (*Class added*)

BusyService (*Class added*)

CacheService (*Class added*)

CdrFactoryService (*Class added*)

CdrSidesheetComponent (*Class added*)

CdrSidesheetConfig (*Interface added*)

ConnectionComponent (*Class added*)

CustomThemeModule (*Class added*)

CustomThemeService (*Class added*)

DataModelWrapper (*Interface added*)

DataSourceToolbarExportMethod (*Interface added*)

DataSourceToolbarViewConfig (*Interface added*)

DocChapter (*Interface added*)

DocChapterService (*Class added*)

DocDocument (*Interface added*)

DSTViewConfig (*Interface added*)

DynamicDataApiControls (*Class added*)

DynamicDataSource (*Class added*)

ExcludedColumnsPipe (*Class added*)

FilterTreeComponent (*Class added*)

FilterWizardComponent (*Class added*)

FilterWizardModule (*Class added*)

getParameterSubsetForGrouping (*Function added*)

HELP_CONTEXTUAL (*Variable added*)

HelpContextualComponent (*Class added*)

HelpContextualModule (*Class added*)

HelpContextualService (*Class added*)

HelpContextualValues (*TypeAlias added*)

InfoBadgeComponent (*Class added*)

InfoButtonComponent (*Class added*)

InfoModalDialogModule (*Class added*)

isConfigDefault (*Function added*)

isDefaultId (*Function added*)

LogDetailsSidesheetComponent (*Class added*)

ObjectHistoryGridviewComponent (*Class added*)

ParameterizedTextService (*Class added*)

SelectedElementsComponent (*Class added*)

SelectedElementsModule (*Class added*)

SideNavigationComponent (*Interface added*)

SideNavigationExtension (*Interface added*)

SideNavigationFactory (*TypeAlias added*)

SideNavigationViewComponent (*Class added*)

SideNavigationViewModule (*Class added*)

SidenavTreeComponent (*Class added*)

SidenavTreeModule (*Class added*)

TempBillboardComponent (*Class added*)

TempBillboardModule (*Class added*)

TextToken (*Interface added*)

TranslationEditorComponent (*Class added*)

TreeNodeInfo (*Interface added*)

ApiClientFetch (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | processRequest<T>(methodDescriptor:MethodDescriptor<T>, **opts?:{ signal?:AbortSignal; }):Promise<T>;** |


AppConfigService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | getImxConfig |
| *Property added* | initializedSubject |


BaseCdr (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | isReadOnlyColumn |
| *Property added* | minLength |
| *Property added* | minlengthSubject |
| *Method added* | updateMinLength |


BulkPropertyEditorComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | formGroup:UntypedFormGroup; |


CdrEditor (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | updateRequested |


CdrEditorComponent (*5 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | description |
| *Property added* | editor |
| *Property added* | infotitle |
| *Method added* | update |
| *MemberMismatch* | controlCreated:EventEmitter<AbstractControl<any, any>>; |


ClientPropertyForTableColumns (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | untranslatedDisplay |


ColumnDependentReference (*3 changes*)

| Type | Change |
| -------- | ------- |
| *PropertySignature deleted* | title |
| *PropertySignature added* | minlengthSubject |
| *PropertySignature added* | valueConstraint |


ColumnOptions (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | isDefaultConfig |
| *Property added* | viewConfig |
| *MemberMismatch* | currentViewSettings:DataModelViewConfig|DSTViewConfig; |


ConfirmationService (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | confirmGeneral |


createGroupData (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | export declare function createGroupData(dataModel:DataModel, getGroupInfo:(parameters:GroupInfoLoadParameters) =>Promise<GroupInfoData>, excludedColumns?:string[]):DataSourceToolbarGroupData; |


DataSourcePaginatorComponent (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Constructor added* |  |
| *Property added* | hidePaginator |
| *Property added* | isLoading |
| *Property added* | showFirstLastButtons |


DataSourceToolbarComponent (*66 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | showSelectedItems |
| *Method added* | addSearchFilter |
| *Method added* | applyConfig |
| *Method added* | applyDynamicPropsAsSelectedFilters |
| *Method added* | applyGroupBy |
| *Method added* | applySort |
| *Property added* | ascendingSortControl |
| *Property added* | busyService |
| *Property added* | canApplySort |
| *Property added* | canClearSort |
| *Property added* | canExport |
| *Property added* | canSave |
| *Method added* | canShowFilterWizard |
| *Method added* | changeConfigName |
| *Method added* | clearSearch |
| *Method added* | clearSort |
| *Property added* | currentFilterDisplayData |
| *Property added* | currentSortColumn |
| *Property added* | deleteConfigById |
| *Property added* | descArg |
| *Property added* | disableFilterWizard |
| *Property added* | disableSearch |
| *Property added* | filterWizardExpression |
| *Method added* | findAndSelectSortColumn |
| *Method added* | getSelectedFilterFromName |
| *Property added* | hasSavedConfigs |
| *Property added* | hasSortFunction |
| *Property added* | hasSortOptions |
| *Method added* | isConfigDefault |
| *Method added* | isDefaultId |
| *Property added* | isDescending |
| *Property added* | isEnterDisabled |
| *Method added* | isRedundant |
| *Property added* | isRegex |
| *Property added* | isSortApplied |
| *Property added* | isSortDesc |
| *Property added* | isStandaloneToolbar |
| *Property added* | localSearchColumns |
| *Method added* | onSelectedFilterRemoved |
| *Method added* | openExportSidesheet |
| *Method added* | removeConfigIndex |
| *Method added* | removeFilterWizard |
| *Method added* | removeSearchTerm |
| *Method added* | saveConfig |
| *Property added* | savedConfigsTrigger |
| *Property added* | searchApi |
| *Property added* | searchResults$ |
| *Property added* | searchTerms |
| *Property added* | selectedFilterType |
| *Property added* | selectedSortControl |
| *Property added* | selection |
| *Method added* | selectSort |
| *Property added* | showClearFilterOption |
| *Method added* | showFilterWizard |
| *Property added* | sortControl |
| *Property added* | sortOptions |
| *Property added* | sortOptionsFilter |
| *Property added* | sortWarningThreshold |
| *Method added* | toggleDefaultConfig |
| *Method added* | toggleSort |
| *Property added* | updateConfig |
| *Property added* | useThemedStyle |
| *MemberMismatch* | clearFilters(**emit?:boolean):void;** |
| *MemberMismatch* | clearGroupedBy(**emit?:boolean):void;** |
| *MemberMismatch* | resetView(**emit?:boolean):Promise<void>;** |
| *MemberMismatch* | searchControl:FormControl<string>; |


DataSourceToolbarFilter (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | Column |


DataSourceToolBarGroup (*2 changes*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | navigationState |
| *MemberMismatch* | getData:(parameter?:CollectionLoadParameters) =>Promise<GroupInfoData>; |


DataSourceToolbarGroupData (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | currentGrouping?:{ display: string; getData: (parameter?:CollectionLoadParameters) =>Promise<GroupInfoData>; navigationState?:CollectionLoadParameters; }; |


DataSourceToolbarSelectedFilter (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | selectedOption:DataModelFilterOptionExtended; |


DataSourceToolbarSettings (*3 changes*)

| Type | Change |
| -------- | ------- |
| *PropertySignature deleted* | identifierForSessionStore |
| *PropertySignature added* | exportMethod |
| *PropertySignature added* | viewConfig |


DataSourceWrapper (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | getDstSettings(parameters?:CollectionLoadParameters, **requestOpts?:ApiRequestOptions):Promise<DataSourceToolbarSettings>;** |
| *MemberMismatch* | getGroupDstSettings(parameters:CollectionLoadParameters, **requestOpts?:ApiRequestOptions):Promise<DataSourceToolbarSettings>;** |


DataTableComponent (*7 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | onOpenSelectionDialog |
| *Property added* | debouncedHighlightRow |
| *Property added* | groupPaginatorInformation |
| *Property added* | isLoading |
| *Method added* | overallGroupingStateChanged |
| *Property added* | showGroupPaginator |
| *MemberMismatch* | highlightRow(entity:TypedEntity, **event?:MouseEvent):void;** |


DataTileBadge (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | textColor |


DataTileComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | selectedHint |
| *Property added* | selected |


DataTilesComponent (*5 changes*)

| Type | Change |
| -------- | ------- |
| *Constructor added* |  |
| *Property added* | isLoading |
| *Method added* | onTileSelected |
| *Property added* | selected |
| *Property added* | selectedEntity |


DataTreeComponent (*14 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | dialog |
| *Method deleted* | onOpenSelectionDialog |
| *Method added* | add |
| *Method added* | deleteNode |
| *Method added* | expandNode |
| *Method added* | getEntityById |
| *Method added* | hasChildren |
| *Method added* | isExpanded |
| *Property added* | isLoading |
| *Property added* | isNodeSelectable |
| *Method added* | onOpenSelectionSidesheet |
| *Property added* | sidesheet |
| *Property added* | treeRendered |
| *Method added* | updateNode |


DataTreeWrapperComponent (*10 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | add |
| *Method added* | deleteNode |
| *Method added* | expandNode |
| *Method added* | getEntityById |
| *Method added* | hasChildren |
| *Property added* | hideSelection |
| *Method added* | isExpanded |
| *Property added* | isNodeSelectable |
| *Property added* | treeRendered |
| *Method added* | updateNode |


DateComponent (*3 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | shadowDate:UntypedFormControl; |
| *MemberMismatch* | shadowText:UntypedFormControl; |
| *MemberMismatch* | shadowTime:UntypedFormControl; |


EditBinaryComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditBooleanComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditDateComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | updateRequested |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditDefaultComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditFkComponent (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | candidatesTotalCount |
| *Property added* | updateRequested |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditLimitedValueComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | removeAssignment |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditMultiLimitedValueComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | updateRequested |
| *MemberMismatch* | control:UntypedFormArray; |


EditMultilineComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditMultiValueComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EditNumberComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |


EntityColumnContainer (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | title |


EntityColumnEditorComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | editor |
| *Method added* | update |


EntitySelectComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |
| *MemberMismatch* | controlCreated:EventEmitter<AbstractControl<any, any>>; |


FkAdvancedPickerComponent (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | showSelected |
| *Property added* | selectedEntityCandidates |
| *Property added* | tableNames |


FkCandidatesComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Property added* | entitySchema |


FkSelectorComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Method added* | setSelectedClass |


GlobalErrorHandler (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | resetMessage |


HyperviewComponent (*17 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | getConnectors |
| *Method deleted* | getHeight |
| *Method deleted* | getWidth |
| *Property added* | _shapes |
| *Property added* | containerElem |
| *Method added* | ngAfterViewInit |
| *Method added* | ngOnDestroy |
| *Method added* | onReset |
| *Method added* | onViewChanged |
| *Property added* | rootElem |
| *Method added* | setupLayout |
| *Property added* | shapeList |
| *Property added* | showResetButton |
| *Property added* | viewChanged |
| *MemberMismatch* | connectors:Connector[]; |
| *MemberMismatch* | elRef:ElementRef<HTMLElement>; |
| *MemberMismatch* | set shapes(value:ShapeData[]); |


ImxTranslationProviderService (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | MultiLanguageCaptions |
| *Property added* | CultureFormat |
| *Method added* | GetCultures |
| *MemberMismatch* | init(culture?:string, **cultureFormat?:string):Promise<void>;** |


ISessionState (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | cultureFormat |


LineChartOptions (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | additionalLines:GridLineOptions[]; |


LoginComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | createNewAccount |
| *Property added* | newUserConfigProvider |


MastHeadComponent (*6 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | extensions |
| *Method added* | getDynamicExtensions |
| *Property added* | menuItems |
| *Method added* | openConnection |
| *Property added* | productName |
| *Method added* | showExtension |


MastHeadService (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | getConnectionData |


MenuService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Constructor added* |  |
| *MemberMismatch* | getMenuItems(preProps:string[],~~**groups:string[]**,~~ **features:string[]**, allowEmpty?:boolean, projectConfig?:ProjectConfig, groups?:string[]):Promise<EuiTopNavigationItem[]>; |


MessageParameter (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | Parameter |


MultiSelectFormcontrolComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly searchControl:UntypedFormControl; |


ObjectHistoryApiService (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | getHistoryComparisonData |


ObjectHistoryComponent (*24 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | effectiveViewMode |
| *Property deleted* | viewMode |
| *Property deleted* | viewModeTimeline |
| *Property added* | compareDateFormControl |
| *Property added* | historyComparisonData |
| *Property added* | lookIcons |
| *Property added* | looks |
| *Method added* | ngOnDestroy |
| *Method added* | onLookSelectionChanged |
| *Method added* | onViewModeChange |
| *Property added* | selectedLook |
| *Method added* | setTimeline |
| *Property added* | stateOverviewItems |
| *Property added* | timelineFrom |
| *Property added* | timelineFromDateFormControl |
| *Property added* | timelineFromString |
| *Property added* | timelineFromTimeFormControl |
| *Property added* | timelineTo |
| *Property added* | timelineToDateFormControl |
| *Property added* | timelineToString |
| *Property added* | timelineToTimeFormControl |
| *Property added* | viewModeStateComparison |
| *Property added* | viewModeStateOverview |
| *MemberMismatch* | refresh(**fetchRemote:boolean):Promise<void>;** |


OrderedListComponent (*5 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | ngOnInit |
| *Property added* | isReadOnly |
| *Property added* | placeholder |
| *Property added* | theme |
| *Property added* | valueChanged |


ParameterizedTextComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | textReady |


SearchBarComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | tables:UntypedFormControl; |


SelectComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly chipListCtrl:UntypedFormControl; |


SessionState (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | cultureFormat |


SqlWizardApiService (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | implemented |


SqlWizardComponent (*10 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | andConditionLabel |
| *Property added* | expressionList |
| *Property added* | isImplemented |
| *Method added* | logOpText |
| *Method added* | ngAfterViewInit |
| *Method added* | onOperatorChanged |
| *Property added* | orConditionLabel |
| *Method added* | removeAllExpressions |
| *MemberMismatch* | emitChanges():Promise<void>; |
| *MemberMismatch* | ngOnChanges(changes:SimpleChanges):Promise<void>; |


SystemInfoService (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | getImxConfig |


TileComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | loadingState |


TreeDatabase (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Method added* | createNode |
| *Method added* | getId |


TypedEntitySelectComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |
| *MemberMismatch* | readonly controlCreated:EventEmitter<UntypedFormControl>; |




# qer `(225 changes)`
DefaultSheetComponent (*Class deleted*)

IDataExplorerComponent (*Interface deleted*)

ObjectSheetComponent (*Class deleted*)

ObjectSheetModule (*Class deleted*)

ObjectsheetPersonModule (*Class deleted*)

ObjectSheetService (*Class deleted*)

additionalColumnsForServiceItemsKey (*Variable added*)

ApprovalWorkFlowModule (*Class added*)

ArchivedRequestsComponent (*Class added*)

ArchivedRequestsModule (*Class added*)

AuthenticationFactors (*Interface added*)

ChartInfoTyped (*Class added*)

DashboardService (*Class added*)

DataManagementService (*Class added*)

DecisionStepSevice (*Class added*)

isAuditor (*Function added*)

isRoleAdmin (*Function added*)

isRoleStatistics (*Function added*)

MyResponsibilitiesRegistryService (*Class added*)

MyResponsibilitiesViewModule (*Class added*)

NewRequestComponent (*Class added*)

NewRequestModule (*Class added*)

NewRequestSelectionService (*Class added*)

NotificationRegistryService (*Class added*)

NotificationStreamService (*Class added*)

ObjectHyperviewComponent (*Class added*)

ObjectHyperviewModule (*Class added*)

ObjectHyperviewService (*Class added*)

OpSupportUserService (*Class added*)

ParameterContainer (*Class added*)

PasswordQuestionsComponent (*Class added*)

RecommendationSidesheetComponent (*Class added*)

RelatedApplicationsModule (*Class added*)

RequestHistoryFilterComponent (*Class added*)

RequestTableComponent (*Class added*)

ResourcesModule (*Class added*)

RiskConfigComponent (*Class added*)

RiskConfigModule (*Class added*)

RoleDetailComponent (*Class added*)

RoleEntitlementActionService (*Class added*)

RoleRecommendationResultItem (*Class added*)

RoleRecommendationsComponent (*Class added*)

SettingsComponent (*Class added*)

StatisticsForObjectsComponent (*Class added*)

StatisticsModule (*Class added*)

TeamResponsibilitiesModule (*Class added*)

TermsOfUseItem (*Interface added*)

TermsOfUseService (*Class added*)

TermsOfUseViewerComponent (*Class added*)

UserProcessComponent (*Class added*)

UserProcessModule (*Class added*)

ViewConfigService (*Class added*)

ViewDevicesComponent (*Class added*)

ViewDevicesModule (*Class added*)

ViewDevicesSidesheetComponent (*Class added*)

AddressbookComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |


BadgeTileComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | loadingState |


BaseTreeEntitlement (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | getCollection(id:string, navigationState?:CollectionLoadParameters, **objectKeyForFiltering?:string):Promise<ExtendedTypedEntityCollection<TypedEntity**, unknown>>; |


DataExplorerIdentitiesComponent (*12 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | downloadOptions |
| *Property added* | busyService |
| *Property added* | contextId |
| *Method added* | deleteConfigById |
| *Property added* | dynamicReport |
| *Property added* | extensions |
| *Method added* | getDynamicMenuItems |
| *Property added* | isAuditor |
| *Property added* | isPersonAdmin |
| *Method added* | personsManagedReport |
| *Method added* | showDynamicReport |
| *Method added* | updateConfig |


DataExplorerRegistryService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | getNavItems(preProps:string[],~~**groups:string[]):IDataExplorerExtension[];**,~~ **features:string[]**, **projectConfig?:ProjectConfig**, groups?:string[]):SideNavigationExtension[]; |
| *MemberMismatch* | registerFactory(...factories:SideNavigationFactory[]):void; |


DecisionReasonComponent (*7 changes*)

| Type | Change |
| -------- | ------- |
| *Method deleted* | checkReason |
| *Method added* | ngOnInit |
| *Method added* | updateMinLength |
| *MemberMismatch* | addReasonStandard(~~**control:AbstractControl):void;**,~~control?:AbstractControl):void; |
| *MemberMismatch* | controlCreated:EventEmitter<AbstractControl<any, any>>; |
| *MemberMismatch* | reasonFreetext:BaseCdr; |
| *MemberMismatch* | reasonStandard:BaseCdr; |


DelegationComponent (*20 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | isLoadingElements |
| *Property deleted* | projectConfig |
| *Method deleted* | resetForms |
| *Method deleted* | showSelected |
| *Property added* | busyService |
| *Property added* | cdrPersonSender |
| *Property added* | delegationObjects |
| *Property added* | initialized |
| *Property added* | isLoading |
| *Property added* | isManager |
| *Method added* | resetDelegation |
| *Property added* | senderFormGroup |
| *Property added* | stepper |
| *Property added* | withSubordinates |
| *MemberMismatch* | addControl(group:UntypedFormGroup, name:string, control:AbstractControl):void; |
| *MemberMismatch* | readonly delegationForm:UntypedFormGroup; |
| *MemberMismatch* | readonly delegationTypeForm:UntypedFormGroup; |
| *MemberMismatch* | readonly recipientFormGroup:UntypedFormGroup; |
| *MemberMismatch* | readonly rolesForm:UntypedFormGroup; |
| *MemberMismatch* | searchControl:UntypedFormControl; |


DynamicExclusionDialogComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | dynamicExclusionForm:UntypedFormGroup; |


IconTileComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | loadingState |


IdentitiesReportsService (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | viewReport |
| *MemberMismatch* | personsManagedReport(~~historyDays:number,~~personId:string, **subtitle:string):Promise<void>;** |
| *MemberMismatch* | **personsReport(~~historyDays:numb~~personId:string):string;**,~~er,~~person:PortalPersonReports|PortalAdminPerson):Promise<void>; |


IdentitiesService (*5 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | exportAdminPerson |
| *Method added* | exportPerson |
| *MemberMismatch* | createEmptyEntity():Promise<PortalPersonReports>; |
| *MemberMismatch* | getGroupedAllPerson(columns:string, navigationState:CollectionLoadParameters):Promise<GroupInfoData>; |
| *MemberMismatch* | getPersonInteractive(uid:string):Promise<TypedEntityCollectionData<PortalPersonReports>>; |


IdentityRoleMembershipsComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |


IdentitySidesheetComponent (*9 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | managedReportDownload |
| *Property deleted* | reportDownload |
| *Method added* | personsManagedReport |
| *Method added* | personsReport |
| *Property added* | tabs |
| *MemberMismatch* | data:{ isAdmin: boolean; projectConfig:QerProjectConfig; selectedIdentity:PortalPersonReports|PortalAdminPerson; canEdit: boolean; }; |
| *MemberMismatch* | readonly detailsFormGroup:UntypedFormGroup; |
| *MemberMismatch* | isActiveFormControl:UntypedFormControl; |
| *MemberMismatch* | isSecurityIncidentFormControl:UntypedFormControl; |


IRoleEntitlements (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | getCollection(id:string, navigationState?:CollectionLoadParameters, **objectKeyForFiltering?:string):Promise<ExtendedTypedEntityCollection<TypedEntity**, unknown>>; |


ItshopRequest (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | canCopyItems |
| *Property added* | isArchived |


ItshopService (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | getPeerGroupMemberships(parameters:(CollectionLoadParameters|ServiceItemParameters), **requestOpts?:ApiRequestOptions):Promise<ExtendedTypedEntityCollection<PortalItshopPeergroupMemberships**,ServiceItemsExtendedData>>; |


JustificationService (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | createCdr(justificationType:JustificationType~~reasonType?:number):Promise<BaseCdr>;,~~):Promise<BaseCdr>; |


JustificationType (*2 changes*)

| Type | Change |
| -------- | ------- |
| *EnumMember added* | approvePolicyViolation |
| *EnumMember added* | denyPolicyViolation |


OwnerControlComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | formControlCreated:EventEmitter<AbstractControl<any, any>>; |
| *MemberMismatch* | ownerSelectionCtrl:UntypedFormControl; |


ParameterDataService (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | entityService |
| *Property added* | logger |
| *MemberMismatch* | createInteractiveParameterCategoryColumns(parameterCategories:ParameterCategory[],~~**getFkProviderItems:(parameter:ParameterData) =>FkProviderItem[]**,~~ getFkProvider:(parameter:ParameterData) =>IFkCandidateProvider, typedEntity:ReadWriteExtTypedEntity<{ Parameters?: { [key: string]:ParameterData[][]; }; },CategoryParameterWrite>, callbackOnChange?:() => void):ParameterCategoryColumn[]; |
| *MemberMismatch* | createInteractiveParameterColumns(parameters:ParameterData[],~~**getFkProviderItems:(parameter:ParameterData) =>FkProviderItem[]**,~~ getFkProvider:(parameter:ParameterData) =>IFkCandidateProvider, typedEntity:ReadWriteExtTypedEntity<ParameterData[][],EntityWriteDataColumn[][]>):IEntityColumn[]; |


PasscodeViewerComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | LdsExplanation |


PersonService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | createFkProviderItem(fkRelation:MetaTableRelationData, **filter?:FilterData[]):FkProviderItem;** |
| *MemberMismatch* | getGroupInfo(parameters?:PersonAllLoadParameters):Promise<GroupInfoData>; |


ProfileComponent (*5 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | canManageSecurityKeys |
| *Property added* | canShowEntitlementsHyperview |
| *Property added* | isShowEntitlementsHyperview |
| *Property added* | selectedContextId |
| *MemberMismatch* | form:UntypedFormGroup; |


QerPermissionsService (*11 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | hasFeatures |
| *Method added* | isAuditor |
| *Method added* | isCancelPwO |
| *Method added* | isPasswordHelpdesk |
| *Method added* | isResourceAdmin |
| *Method added* | isRoleAdmin |
| *Method added* | isRoleStatistics |
| *Method added* | isRuleAdmin |
| *Method added* | isShopStatistics |
| *Method added* | isStatistics |
| *Method added* | isStructStatistics |


RequestInfoComponent (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | isApproval |
| *Property added* | isLoading |
| *Method added* | ngOnDestroy |


RequestParameterDataEntity (*1 change*)

| Type | Change |
| -------- | ------- |
| *PropertySignature added* | isArchived |


RequestsComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |


RequestsService (*3 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | LdsShelfExplanation |
| *Property deleted* | LdsShopDetails |
| *Property deleted* | LdsShopEntitlements |


RiskAnalysisComponent (*23 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | Description |
| *Method deleted* | DisplayTypeOfCalculation |
| *Method deleted* | DisplayWeight |
| *Method deleted* | GetDisplayValue1 |
| *Method deleted* | GetResultRisk |
| *Method deleted* | GetRiskCalcFormula |
| *Method deleted* | GetRiskObjectTop |
| *Method deleted* | IsFromAttribute |
| *Method deleted* | IsIncOrDec |
| *Method deleted* | IsShowChildSourceDisplay |
| *Property deleted* | LdsMaximumOfAllAssignments |
| *Property deleted* | RiskObject |
| *Property added* | description |
| *Method added* | displayTypeOfCalculation |
| *Method added* | displayWeight |
| *Method added* | getDisplayValue1 |
| *Method added* | getResultRisk |
| *Method added* | getRiskCalcFormula |
| *Method added* | getRiskObjectTop |
| *Method added* | isFromAttribute |
| *Method added* | isIncOrDec |
| *Method added* | isShowChildSourceDisplay |
| *Property added* | riskObject |


RoleService (*13 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | AERoleTag |
| *Property deleted* | DepartmentTag |
| *Property deleted* | LocalityTag |
| *Property deleted* | ProfitCenterTag |
| *Method added* | canCreate |
| *Property added* | canEdit |
| *Method added* | canHaveStatistics |
| *Method added* | getExportMethod |
| *Method added* | getRecommendations |
| *Method added* | getRoleTranslateKeys |
| *Method added* | hasHierarchy |
| *MemberMismatch* | getEntitlements(args:{ id: string; navigationState?:CollectionLoadParameters; objectKey?: string; }):Promise<ExtendedTypedEntityCollection<TypedEntity, unknown>>; |
| *MemberMismatch* | setSidesheetData(args:{ ownershipInfo:OwnershipInformation; entity:IEntity; isAdmin: boolean; canEdit: boolean; }):void; |


RolesOverviewComponent (*12 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Property added* | canCreate |
| *Property added* | contextId |
| *Method added* | createNew |
| *Method added* | deleteConfigById |
| *Method added* | getChildCreationText |
| *Method added* | getCreationText |
| *Property added* | hasHierarchy |
| *Method added* | ngOnDestroy |
| *Method added* | updateConfig |
| *Property added* | viewConfig |
| *Property added* | viewConfigPath |


ServiceCategoriesService (*1 change*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | getById(uidAccProductGroup:string):Promise<TypedEntityCollectionData<PortalServicecategories>>; |


ServiceItemsEditFormComponent (*10 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | formArray |
| *Property added* | alertExtId |
| *Property added* | busyService |
| *Method added* | getColumn |
| *Property added* | ServiceItemsEditFormComponent |
| *MemberMismatch* | formControlCreated:EventEmitter<AbstractControl<any, any>>; |
| *MemberMismatch* | readonly formGroup:FormGroup<ServiceItemsFormGroup>; |
| *MemberMismatch* | isInActiveFormControl:FormControl<boolean>; |
| *MemberMismatch* | onRequestableToggleChanged(checkboxChange:MatSlideToggleChange):Promise<void>; |
| *MemberMismatch* | serviceItem:TypedEntity; |


ServiceItemTagsComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly control:UntypedFormControl; |
| *MemberMismatch* | readonly controlCreated:EventEmitter<AbstractControl<any, any>>; |


SourceDetectiveComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busy |
| *Method added* | grabText |


UserModelService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | getFeatures |
| *MemberMismatch* | getDirectReports(**uidperson?:string):Promise<PortalPersonReports[]>;** |


WorkflowDataWrapper (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | userAskedLastQuestion |




# rps `(3 changes)`
ReportButtonComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | ngOnDestroy |


SubscriptionsComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Method added* | viewReportSubscription |




# sac
*PackageAdded*


# tsb `(28 changes)`
AccountsExtComponent (*1 change*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |


AccountSidesheetComponent (*3 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly detailsFormGroup:UntypedFormGroup; |
| *MemberMismatch* | get formArray():UntypedFormArray; |
| *MemberMismatch* | neverConnectFormControl:UntypedFormControl; |


AccountsService (*1 change*)

| Type | Change |
| -------- | ------- |
| *Method added* | exportAccounts |


DataExplorerAccountsComponent (*4 changes*)

| Type | Change |
| -------- | ------- |
| *Property added* | busyService |
| *Property added* | contextId |
| *Method added* | deleteConfigById |
| *Method added* | updateConfig |


DataExplorerGroupsComponent (*11 changes*)

| Type | Change |
| -------- | ------- |
| *Property deleted* | dataExplorerFilters |
| *Property added* | busyService |
| *Property added* | contextId |
| *Method added* | deleteConfigById |
| *Property added* | itemsAreNotRequestable |
| *Property added* | itemsAreRequestable |
| *Property added* | ó |
| *Method added* | updateConfig |
| *Property added* | usedInSidesheet |
| *MemberMismatch* | bulkUpdateSelected(**request:boolean):Promise<void>;** |
| *MemberMismatch* | requestableBulkUpdateCtrl:UntypedFormControl; |


DataExplorerNoDataComponent (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Constructor deleted* |  |
| *Property deleted* | webApp |


GroupSidesheetComponent (*4 changes*)

| Type | Change |
| -------- | ------- |
| *MemberMismatch* | readonly detailsFormGroup:UntypedFormGroup; |
| *MemberMismatch* | get formArray():UntypedFormArray; |
| *MemberMismatch* | readonly serviceItemFormGroup:UntypedFormGroup; |
| *MemberMismatch* | get siFormArray():UntypedFormArray; |


GroupsService (*2 changes*)

| Type | Change |
| -------- | ------- |
| *Method added* | exportGroups |
| *Method added* | exportGroupsResp |




